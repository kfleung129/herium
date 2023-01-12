import { Flex, Box, HStack, Image, Center, IconButton, Link, Text, Spacer, useColorMode } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import Menus from './Menus';
import theme from '@styles/theme';

export default function NavBar(props) {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
	<Flex sx={theme.config.navbar}>
        <Center ml={{ base: '12px', md: '12px', lg: '25px' }}>
            <Box as={Link} href="/" _hover={{ textDecoration: 'none' }}>
                <HStack>
                    <Image w="40px" h="40px" src="/herium.png" />
                    <Center><Text fontSize={20}>Herium</Text></Center>
                </HStack>
            </Box>
        </Center>
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