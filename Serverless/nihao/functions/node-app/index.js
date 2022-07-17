const serverless=require('serverless-http')
let app =require('./app')

const handler = serverless(app);

// 返回输入参数
exports.main = async (event) => {
    const res = await handler(event,context)
    return res
};
