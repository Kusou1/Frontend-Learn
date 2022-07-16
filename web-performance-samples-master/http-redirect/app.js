const http = require("http");

http
  .createServer((req, res) => {
    // res.end('hello')
    res.writeHead(301, {
      Location: "http://www.baidu.com",
    });
    res.end();
  })
  .listen(3000, () => {
    console.log("running...");
  });
