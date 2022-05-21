import Home from '../share/pages/Home';
import List from '../share/pages/List';

// 在 React SSR 项目中需要实现两端路由. 
// 客户端路由是用于支持用户通过点击链接的形式跳转⻚面. 
// 服务器端路由是用于支持用户直接从浏览器地址栏中访问⻚面.
// 客户端和服务器端公用一套路由规则.

// 路由规则 同构代码
export default [{
  path: '/',
  component: Home,
  exact: true // 严格匹配
}, {
  path: '/list',
  ...List
}]