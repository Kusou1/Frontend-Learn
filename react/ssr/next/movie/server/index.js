// 自定义Next应用服务器
const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production'

const app = next({dev});

// 获取next提供的路由系统
const handler = app.getRequestHandler();

// perpare方法表示当next应用准备好之后，就可以去自定义内容
app.prepare().then(() => {
  const server = express();
  server.get('/hello', (req, res) => {
    res.send('Hello Next.js')
  });
  server.get('*', (req, res) => {
    handler(req, res)
  });
  server.listen(3000, () => console.log('服务器启动成功'));
});