const express = require("express");
const app = express();
const fs = require("fs");
const compression = require("compression");

// 在处理响应资源的时候使用gzip压缩
app.use(compression());

app.use(express.static("build"));

const listener = app.listen(process.env.PORT || 3000, function () {
  console.log(`Listening on port ${listener.address().port}`);
});
