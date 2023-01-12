import Head from 'next/head'
import Image from 'next/image'
import { Box } from '@chakra-ui/react';
import Board from '@components/login/Board';

export default function Login(props) {
  console.log(props)
  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box 
        margin='auto 10px'
        width='auto'
        height='2000px'
        background-color='yellow'
      >
        <Board/>
      </Box>
    </>
  )
}

export async function getServerSideProps(context) {
    const menusRes = await fetch("http://127.0.0.1:8090/api/collections/menu/records");
    const menusList = await menusRes.json();
    return {
        props: {
            menusList
        },
    };
}