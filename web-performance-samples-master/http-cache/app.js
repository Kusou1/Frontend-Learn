const http = require("http");
const fs = require("fs");
const url = require("url");
const etag = require("etag");

http
  .createServer((req, res) => {
    console.log(req.method, req.url);

    const { pathname } = url.parse(req.url);
    if (pathname === "/") {
      const data = fs.readFileSync("./index.html");
      res.end(data);
    } else if (pathname === "/img/01.jpg") {
      const data = fs.readFileSync("./img/01.jpg");
      res.writeHead(200, {
        Expires: new Date("2021-4-30 12:19:57").toUTCString(), // 设置过期时间，如果没有过期，则一直都是从缓存中拿
      });
      res.end(data);
    } else if (pathname === "/img/02.jpg") {
      const data = fs.readFileSync("./img/02.jpg");
      res.writeHead(200, {
        "Cache-Control": "max-age=5", // 滑动时间，单位是秒
      });
      res.end(data);
    } else if (pathname === "/img/03.jpg") {
      const { mtime } = fs.statSync("./img/03.jpg");

      const ifModifiedSince = req.headers["if-modified-since"];

      if (ifModifiedSince === mtime.toUTCString()) {
        // 缓存生效
        res.statusCode = 304;
        res.end();
        return;
      }

      const data = fs.readFileSync("./img/03.jpg");

      res.setHeader("last-modified", mtime.toUTCString());
      res.setHeader("Cache-Control", "no-cache");
      res.end(data);
    } else if (pathname === "/img/04.jpg") {
      const data = fs.readFileSync("./img/04.jpg");
      const etagContent = etag(data);

      const ifNoneMatch = req.headers["if-none-match"];

      if (ifNoneMatch === etagContent) {
        res.statusCode = 304;
        res.end();
        return;
      }

      res.setHeader("etag", etagContent);
      res.setHeader("Cache-Control", "no-cache");
      res.end(data);
    } else {
      res.statusCode = 404;
      res.end();
    }
  })
  .listen(3000, () => {
    console.log("http://localhost:3000");
  });
