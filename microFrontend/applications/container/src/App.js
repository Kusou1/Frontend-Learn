import React, { lazy, Suspense, useState, useEffect } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
// import MarketingApp from "./components/MarketingApp"
// import AuthApp from "./components/AuthApp"
import Header from "./components/Header";
import Progress from "./components/Progress";

// 懒加载
const MarketingApp = lazy(() => import("./components/MarketingApp"));
const AuthApp = lazy(() => import("./components/AuthApp"));
const DashboardApp = lazy(() => import("./components/DashboardApp"));

// 基于浏览器的路由
// 容器应用使用 BrowserHistory 路由，微应用使用 MemoryHistory 路由。
// 1. 为防止容器应用和微应用同时操作 url 而产生冲突，在微前端架构中，只允许容器应用更新 url，
// 微应用不允许更新 url，MemoryHistory 是基于内存的路由，不会改变浏览器地址栏中的 url。
// 2. 如果不同的应用程序需要传达有关路由的相关信息，应该尽可能的使用通过的方式，
// memoryHistory 在 React 和 Vue 中都有提供。
// 5.8.2 更新现有路由配置
// 1. 容器应用的路由配置
// 2. Marketing 应用的路由配置
const history = createBrowserHistory();

function App() {
  const [status, setStatus] = useState(false);
  useEffect(() => {
    console.log(status);
    if (status) {
      history.push("/dashboard");
    }
  }, [status]);
  return (
    <Router history={history}>
      <Header status={status} setStatus={setStatus} />
      {/* Progress 加载UI */}
      <Suspense fallback={<Progress />}>
        <Switch>
          <Route path="/auth/signin">
            <AuthApp setStatus={setStatus} />
          </Route>
          <Route path="/dashboard">
            {!status && <Redirect to="/" />}
            <DashboardApp />
          </Route>
          <Route path="/">
            <MarketingApp />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
