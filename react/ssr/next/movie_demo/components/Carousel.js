import { Carousel } from "react-responsive-carousel";
import { Heading, Box, Text, Button } from "@chakra-ui/core";
import Head from "next/head";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import axios from "axios";
import Link from "next/link";
import { baseURL } from "../axios.config";

const CarouselItem = styled.div`
  position: relative;
  & > div {
    width: 100%;
    max-width: 1200px;
    position: absolute;
    left: 50%;
    top: 0;
    padding-top: 180px;
    transform: translateX(-50%);
    text-align: left;
    color: #fff;
    & > p {
      width: 450px;
      margin: 20px 0;
      font-size: 14px;
    }
  }
  & > img {
    filter: brightness(60%);
  }
`;

const swiperContainer = css`
  position: relative;
  & > .carousel:last-child {
    position: absolute;
    left: 0;
    bottom: 0;
    & > .thumbs-wrapper > .thumbs {
      display: flex;
      justify-content: center;
    }
  }
`;

export default function Swiper({ data }) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/css/carousel.min.css" />
      </Head>
      <Carousel
        css={swiperContainer}
        showArrows={false}
        showIndicators={false}
        showStatus={false}
      >
        {data.map(swiper => (
          <CarouselItem key={swiper.id}>
            <img src={swiper.url} />
            <Box>
              <Heading as="h2">
                {swiper.title}
              </Heading>
              <Text>
                {swiper.description}
              </Text>
              <Button colorScheme="red">
                <Link as={`/detail/${swiper.vid}`} href="/detail/[id]">
                  <a>CHECK DETAIL</a>
                </Link>
              </Button>
            </Box>
          </CarouselItem>
        ))}
      </Carousel>
    </>
  );
}

export function loadSwiper() {
  return axios.get("/swiper", { baseURL: baseURL });
}
