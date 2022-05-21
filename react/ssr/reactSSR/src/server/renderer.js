import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import routes from "../share/routes";
// 把数组形式的路由规则转化成组件
import { renderRoutes } from "react-router-config";
import { Provider } from "react-redux";
// 防止xss攻击 防止恶意代码的执行
import serialize from 'serialize-javascript';

export default (req, store) => {
  // 实现服务端路由需要用到StaticRouter这个组件，静态路由，没有跳转功能，访问谁就匹配谁
  // location接收请求地址
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path}>{renderRoutes(routes)}</StaticRouter>
    </Provider>
  );
  const initalState = serialize(store.getState());
  return `
  <html>
    <head>
      <title>React SSR</title>
    </head>
    <body>
      <div id="root">${content}</div>
      <script>window.INITIAL_STATE = ${initalState} </script>
      <script src="bundle.js"></script>
    </body>
  </html>
`;
};
