import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import routes from "../share/routes";
import { Provider } from "react-redux";
import store from "./createStore";

// 客户端二次“渲染” hydrate
// 使用 hydrate 方法对组件进行渲染, 为组件元素附加事件.
// hydrate 方法在实现渲染的时候, 会复用原本已经存在的 DOM 节点, 减少重新生成节点以及删除原本 DOM 节点的开销.
// 通过 react-dom 导入 hydrate.

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
