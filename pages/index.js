import Head from 'next/head'
import { Box, Heading, Text, Wrap, WrapItem, Image } from '@chakra-ui/react';

export default function Home() {
  return (
    <>
        <Head>
            <title>Herium</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/herium.png" />
        </Head>
        <Wrap align='center'>
            <WrapItem>
                <Box>
                    <Heading size='3xl'>Herium</Heading>
                    <Text mt="25px" mr="150px" w={{ base: '350px', md: '350px', lg: '750px' }} fontSize={{ base: '15px', md: '15px', lg: '18px' }}>The next-generation forum. It brings you most comfortable internet surfing experienceThe next-generation forum. It brings you most comfortable internet surfing experience</Text>
                </Box>
            </WrapItem>
            <WrapItem>
                <Box>
                    <Image
                        alt="main"
                        src="/main.png"
                    />
                </Box>
            </WrapItem>
        </Wrap>
    </>
  )
}
