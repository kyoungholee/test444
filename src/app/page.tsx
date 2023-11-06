'use client'

import Image from 'next/image'
import styles from './page.module.css'

import { ChakraProvider, Box, ColorModeScript, Heading, VStack, extendTheme, Text} from "@chakra-ui/react"
import Link from 'next/link';

interface INawon {
  title: string;
  content : string;

}


const theme = extendTheme({
  config: {
    intialColorMode: "light",
    useSystemColorMode: false,
  }
})

export default function Home() {
  return (
    <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Box p={4}>
          <Heading as="h1" size="3x1" mb={4}>
          게시판 작성중입니다.
        </Heading>
        <VStack align="start" spacing={4}>
          <Link href={`/read/4`} >
            <BulletinItem title="첫 번째 게시물" content="이 게시물은 첫 번째 게시물입니다.ㅎㅎㅎㅎㅎ" />
          </Link>
          <Link href={`/read/5`} >
            <BulletinItem title="테스트 두번쨰 번째 게시물" content="이 게시물은 두 번째 게시물입니다.ㅎㅎㅎㅎㅎ" />
          </Link>
        </VStack>
        </Box>
    </ChakraProvider>
  )
}


function BulletinItem({ title, content } : INawon) {
  return (
    <Box borderWidth="1px" borderRadius="lg" p={4} boxShadow="lg" w="100%">
      <Heading as="h3" size="lg" mb={2}>
        {title}
      </Heading>
      <Text>{content}</Text>
    </Box>
  );
}
