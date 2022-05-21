import { combineReducers } from 'redux';
import userReducer from './user.reducer';

// {user: []}
// 在实现了 React SSR 的项目中需要实现两端 Redux.
// 客户端 Redux 就是通过客户端 JavaScript 管理 Store 中的数据.
// 服务器端 Redux 就是在服务器端搭建一套 Redux 代码, 用于管理组件中的数据.
// 客户端和服务器端共用一套 Reducer 代码.
// 创建 Store 的代码由于参数传递不同所以不可以共用.

export default combineReducers({
  user: userReducer
});