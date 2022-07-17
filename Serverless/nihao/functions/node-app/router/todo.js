const express = require("express");
const router = express.Router();

// 获取数据
router.get("/", (req, res) => {
    res.send("todo router get");
});

// 添加任务
router.post("/", (req, res) => {
    res.send("todo router post");
});

// 修改任务
router.put("/", (req, res) => {
    res.send("todo router put");
});

// 删除任务
router.delete("/", (req, res) => {
    res.send("todo router delete");
});

module.exports = router;
