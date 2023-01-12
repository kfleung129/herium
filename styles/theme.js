import { extendTheme } from '@chakra-ui/react'

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
  navbar: {
    p: "4px 10px 4px 10px",
    minHeight: '55px',
    maxHeight: '55px',
  },
  main: {
    mt: { base: '40px', md: '40px', lg: '125px' },
    ml: { base: '40px', md: '40px', lg: '250px' },
    mr: { base: '40px', md: '40px', lg: '250px' },
  }
}

const theme = extendTheme({ config });

export default theme;