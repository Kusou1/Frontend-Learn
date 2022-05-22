import Link from "next/link";
import Head from "next/head"; // 通过Head组件修改页面元数据

export default function Home() {
  return (
    <>
      <Head>
        <title>index page</title>
      </Head>
      <div>
        index page works
        <Link href="/list">
          <a className="demo">jump to list page</a>
        </Link>
        <img src="/images/1.jpg" width="100" />
      </div>
      <style jsx>{`
        .demo {
          color: black;
        }
      `}</style>
    </>
  );
}
