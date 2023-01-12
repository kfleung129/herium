import Head from 'next/head'
import Image from 'next/image'
import { Box, Grid, GridItem } from '@chakra-ui/react';
import PostList from '@components/forum/PostList';

export default function Forum({ postList }) {
  return (
    <>
      
      <Head>
        <title>Forum</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid
        h='800px'
        w='100%'
        templateRows='repeat(1, 1fr)'
        templateColumns='repeat(20, 1fr)'
      >
        <GridItem colSpan={3} bg='blackAlpha.400'>
          <PostList postList={postList} />
        </GridItem>
        <GridItem colSpan={17} bg='blackAlpha.300' />
      </Grid>
    </>
  )
}

export async function getServerSideProps(context) {
    const postRes = await fetch("http://127.0.0.1:8090/api/collections/posts/records");
    const postList = await postRes.json();
    return {
        props: {
            postList: postList.items
        },
    };
}