import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { Box } from '@chakra-ui/react';
import Board from '@components/login/Board';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
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
