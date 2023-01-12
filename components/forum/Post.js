import Head from 'next/head'
import Image from 'next/image'
import { Box, Badge, Container, Code, HStack, Text, Spacer } from '@chakra-ui/react';
import Board from '@components/login/Board';

export default function Post({ id, username, title, description, date, category }) {
  return (
    <Box 
        mt={2} 
        p={3} 
        bg="blackAlpha.400" 
        h="90px"
        _hover={{ cursor: 'pointer', bg: 'blackAlpha.300' }}
        onClick={() => alert('test')}
    >
      <HStack fontSize={12} align="center">
          <Text color="blue.500">{username}</Text>
          <Text color="green.500" maxW="150px" sx={{ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>{title}</Text>
          <Spacer/>
          <Badge variant='subtle' colorScheme='green'>{category}</Badge>
      </HStack>
      <Box mt="5px" maxH="30px" sx={{ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>{description}</Box>
      <Box align="right">
          <Code>{date.split(' ')[0]}</Code>
      </Box>
    </Box>
  )
}