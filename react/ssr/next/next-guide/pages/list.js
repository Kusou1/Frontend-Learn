import Head from "next/head";
import styles from './list.module.css';
import { readFile } from 'fs';
import { promisify } from 'util';
import { join } from 'path';

const read = promisify(readFile);

export default function List({data}) {
  return (
    <>
      <Head>
        <title>list page</title>
      </Head>
      <div className={styles.demo}>List page works</div>
      <div>{data}</div>
    </>
  );
}

//  静态生成 getStaticProps
//  export async function getStaticProps () {
//    let data = await read(join(process.cwd(), 'pages', '_app.js'), 'utf-8');
//    return {
//      props: {
//        data
//      }
//    }
//  }
//  服务器端渲染 getServerSideProps 每次客户端向服务端请求时候执行
export async function getServerSideProps (context) {
  console.log(context.query) // 获取客户端发送过来的请求参数
  let data = await read(join(process.cwd(), 'pages', '_app.js'), 'utf-8');
  console.log('HELLO');
  return {
    props: {
      data
    }
  }
}