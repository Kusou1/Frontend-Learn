const express = require("express");
const router = express.Router();
require("dotenv").config();
const nodesdk = require("@cloudbase/node-sdk");
const cloudDb = nodesdk.init({
  env: "test-2gmsdnvd04b10a9f",
  secretId: `${process.env.SECRET_ID}`,
  secretKey: `${process.env.SECRET_KEY}`,
});

const app = cloudDb.database();

process.on("unhandledRejection", (reason, p) => {
  console.log("Promise: ", p, "Reason: ", reason);
  // do something
});
// 获取数据
router.get("/", async (req, res) => {
  const backdb = await app.collection("todo").get();
  res.send(backdb);
});

// 添加任务
router.post("/", async (req, res) => {
  if (req.body.title == undefined) {
    return;
  }
  var todo = {
    title: req.body.title,
    createTime: Date.now(),
    done: false,
  };

  var baskdata = await app.collection("todo").add(todo);

  res.send(baskdata);
});

// 修改任务
router.put("/", async (req, res) => {
  if (req.query.id === undefined) {
    res.send("缺少id");
  }

  if (req.body.done == undefined) {
    return;
  }

  var done = false;
  if (req.body.done == 1) {
    done = true;
  }

  var todo = {
    title: req.body.title,
    done,
  };

  // doc条件
  var backdat = await app.collection("todo").doc(req.query.id).update(todo);

  res.send(backdat);
});

// 删除任务
router.delete("/", async (req, res) => {
  if (req.query.id === undefined) {
    res.send("缺少id");
  }

  var backdat = await app.collection("todo").doc(req.query.id).remove(todo);

  res.send(backdat);
});

module.exports = router;
