import Layout from "../../components/Layout";
import { Heading, Box, Divider, Text } from "@chakra-ui/core";
import { css } from "@emotion/core";
import axios from "axios";
import { baseURL } from '../../axios.config';

const detailContainer = css`
  font-size: 14px;
  & > p,
  & > img {
    margin-bottom: 15px;
  }
`;

export default function VideoDetail({ post }) {
  return (
    <Layout>
      <Box maxW={1200} mx="auto" mt={60}>
        <Heading as="h2" size="xl">
          {post.title}
        </Heading>
        <Heading as="h4" size="lg" mt={4} color="gray.500" fontWeight="light">
          {post.sub}
        </Heading>
        <Divider my={4} />
        <Box overflow="hidden">
          <Text float="left">作者: {post.author}</Text>
          <Text float="right">发布时间: {post.publish}</Text>
        </Box>
        <Divider my={4} />
        <Box css={detailContainer} dangerouslySetInnerHTML={{__html: post.content}}></Box>
      </Box>
    </Layout>
  );
}

export async function getStaticPaths() {
  let { data } = await axios.get("/videos", {baseURL: baseURL});
  let paths = data.map(id => ({ params: { id } }));
  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const id = params.id;
  let { data: post } = await axios.get(`/detail?id=${id}`, {baseURL: baseURL});
  return {
    props: {
      post
    }
  };
}
