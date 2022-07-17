const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("index 111router");
});

module.exports = router;
