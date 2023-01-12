import { ChakraProvider } from '@chakra-ui/react'
import NavBar from '@components/main/NavBar';
import MainStyle from '@styles/MainStyle';

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <NavBar />
      <MainStyle>
        <Component {...pageProps} />
      </MainStyle>
    </ChakraProvider>
  )
}