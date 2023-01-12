import Head from 'next/head'
import Image from 'next/image'
import { Box } from '@chakra-ui/react';
import Board from '@components/login/Board';
import Post from './Post';

export default function PostList({ postList }) {
  console.log(postList)
  return (
    <Box 
      sx={{
        maxHeight: "800px",
        overflowX: "hidden",
        '&::-webkit-scrollbar': { width: 0 }
      }} >
      {
        postList?.map(item => (
          <Post
            id={item.id}
            username={item.username}
            title={item.title}
            description={item.description}
            date={item.created}
            category={item.category}
          />
        ))
      }
    </Box>
  )
}