import React, { useEffect, useRef } from "react";
import { mount } from "marketing/MarketingApp";
import { useHistory } from "react-router-dom";

export default function MarketingApp() {
  const ref = useRef();
  const history = useHistory();
  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      // 微应用路由变化时 url 地址没有被同步到浏览器的地址栏中，路由变化也没有被同步到浏览器的历
      // 史记录中。
      // 当微应用路由发生变化时通知容器应用更新路由信息 (容器应用向微应用传递方法)
      onNavgate({ pathname: nextPathname }) {
        const pathname = history.location.pathname;
        if (nextPathname !== pathname) {
          history.push(nextPathname);
        }
      },
    });

    if (onParentNavigate) history.listen(onParentNavigate);
  }, []);
  return <div ref={ref}></div>;
}
