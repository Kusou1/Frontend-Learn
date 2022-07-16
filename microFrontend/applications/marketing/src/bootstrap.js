import React from "react";
import ReactDOM from "react-dom";
import { createMemoryHistory, createBrowserHistory } from "history";
import App from "./App";

function mount(el, { onNavgate, defaultHistory, initialPath }) {
  // 基于内存的路由
  const history =
    defaultHistory ||
    createMemoryHistory({
      initialEntries: [initialPath],
    });
  if (onNavgate) history.listen(onNavgate);
  ReactDOM.render(<App history={history} />, el);
  return {
    onParentNavigate({ pathname: nextPathname }) {
      const pathname = history.location.pathname;
      if (nextPathname !== pathname) {
        history.push(nextPathname);
      }
    },
  };
}

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-marketing");
  if (el)
    mount(el, {
      // 本地环境仍然使用BrowserHistory
      defaultHistory: createBrowserHistory(),
    });
}

export { mount };
