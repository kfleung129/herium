import { Box } from '@chakra-ui/react'
import NavBar from '@components/main/NavBar';
import theme from '@styles/theme';

export default function MainStyle({ children }) {
  return (
    <Box sx={theme.config.main}>
        {children}
    </Box>
  )
}