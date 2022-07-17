const cloud = require("@cloudbase/node-sdk");
require('dotenv').config()
const cloudDb = cloud.init({
    env: process.env.ENV_ID,
    secretId: process.env.SECRET_ID,
    secretKey: process.env.SECRET_KEY,
    region: 'ap-guangzhou'
})

const app = cloudDb.database()
module.exports = app