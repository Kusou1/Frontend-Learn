import { useRouter } from 'next/router';
// 基于动态路由参数的静态生成

export default function Post ({data}) {
  const router = useRouter();
  if (router.isFallback) return <div>loading</div>;
  return <div>
    <span>{data.id}</span>
    <span>{data.title}</span>
  </div>
}

// 返回用户可以访问到的所有的路由参数
export async function getStaticPaths () {
  return {
    // 返回固定格式的路由参数
    paths: [{params: {id: "1"}}, {params: {id: "2"}}],
    // 当用户访问的路由参数没有在当前函数中返回时，是否显示404页面 false： 显示 true： 不显示
    fallback: true
  }
}
// 返回路由参数所对应的具体的数据
export async function getStaticProps ({params}) {
  console.log('Hello');
  const id = params.id;
  let data;
  switch (id) {
    case "1":
      data = {id: "1", title: 'Hello'};
      break;
    case "2":
      data = {id: "2", title: 'world'};
      break;
    case "3":
      data = {id: "3", title: 'hello world'};
      break;
    default:
      data = {}
  }
  return {
    props: {
      data
    }
  }
}

// 注: getStaticPaths 和 getStaticProps 只运⾏在服务器
// 端, 永远不会运⾏在客户端, 甚⾄不会被打包到客户端
// JavaScript 中, 意味着这⾥可以随意写服务器端代码, 
// ⽐如查询数据库.