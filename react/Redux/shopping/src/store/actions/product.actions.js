import { createAction } from 'redux-actions';

// 向服务器端发送请求 获取商品列表数据   异步操作，由saga接收
export const loadProducts = createAction('load products');
// 将服务器端返回的商品列表数据保存到本地的store对象中  同步操作，由ruducer接收
export const saveProducts = createAction('save products');