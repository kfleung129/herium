import { extendTheme } from '@chakra-ui/react'

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
  navbar: {
    p: "4px 10px 4px 10px",
    minHeight: '55px',
    maxHeight: '55px',
    bg: 'blackAlpha.300',
    position: 'sticky'
  },
  main: {
    mt: { base: '30px', md: '40px', lg: '50px' },
    ml: { base: '20px', md: '20px', lg: '50px' },
    mr: { base: '20px', md: '20px', lg: '50px' },
  }
}

const theme = extendTheme({ config });

export default theme;