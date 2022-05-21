import Layout from "../components/Layout";
import Swiper, { loadSwiper } from "../components/Carousel";
import Movie, { loadMovie } from "../components/Movie";

export default function Home({ movie, swiper }) {
  return (
    <Layout>
      <Swiper data={swiper} />
      <Movie title="电影" data={movie} />
    </Layout>
  );
}

export async function getStaticProps() {
  // 获取轮播图数据
  let { data: swiper } = await loadSwiper();
  let { data: movie } = await loadMovie();
  return {
    props: {
      swiper,
      movie
    }
  };
}
