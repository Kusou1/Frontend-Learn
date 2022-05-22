import '../styles.css'; // 全局样式

export default function App ({Component, pageProps}) {
  return <Component {...pageProps}/>
}