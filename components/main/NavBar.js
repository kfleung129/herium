import { Flex, HStack, Image, Center, IconButton, Text, Spacer, useColorMode } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import { Inter } from '@next/font/google'
import Menus from './Menus';
import theme from '@styles/theme';
const inter = Inter({ subsets: ['latin'] })

export default function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
	<Flex sx={theme.config.navbar}>
        <HStack ml={{ base: '12px', md: '12px', lg: '25px' }}>
            <Image w="40px" h="40px" src="/herium.png" />
            <Center className={inter.className}><Text fontSize={20}>Herium</Text></Center>
        </HStack>
        <Spacer/>
        <HStack spacing="10px">
            <Center>
                <IconButton 
                    onClick={toggleColorMode}
                    bg="blackAlpha.0"
                    icon={colorMode === "dark" ? <SunIcon boxSize={5}/> : <MoonIcon boxSize={5}/>}
                />
            </Center>
            <Center>
                <Menus />
            </Center>
        </HStack>
    </Flex>
  );
}
