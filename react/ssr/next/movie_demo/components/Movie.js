import { Box, Stack, Image, Text, Heading } from "@chakra-ui/core";
import { MdMovie } from "react-icons/md";
import axios from "axios";
import Link from "next/link";
import { baseURL } from "../axios.config";

export default function Movie({ title, data }) {
  return (
    <Box maxW="1200px" mx="auto" overflow="hidden">
      <Stack direction="horizontal" mt="20px" fontSize="24px">
        <MdMovie />
        <Heading as="h3" fontSize="20px">
          {title}
        </Heading>
      </Stack>
      <Stack spacing={4} direction="horizontal" mt="20px">
        {data &&
          data.map(item => (
            <MovieItem
              key={item.id}
              url={item.url}
              title={item.title}
              vid={item.vid}
            ></MovieItem>
          ))}
      </Stack>
    </Box>
  );
}

function MovieItem({ url, title, vid }) {
  return (
    <Box w="290px">
      <Image src={url} />
      <Text mt="10px">
        <Link href="/detail/[id]" as={`/detail/${vid}`}>
          <a>{title}</a>
        </Link>
      </Text>
    </Box>
  );
}

export function loadMovie() {
  return axios.get("/movie", { baseURL: baseURL });
}
