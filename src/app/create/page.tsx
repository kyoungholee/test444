// 'use client'

// import { useRouter } from "next/navigation";
// import { useState } from "react";

// // interface Iinput {
// //     title: string;
// //     body: string;
// // }

// export default  function Create() {

//     const router = useRouter();

//     const [title, setTitles] = useState("");
//     const [body, setBodys] = useState("");

    
//     const handleSubmit = (e : React.ChangeEvent<HTMLFormElement>) => {
//         e.preventDefault();

//         const options = {
//             method: 'POST',
//             headers: {
//                 'Content-Type' : 'application/json'
//             },
//             body: JSON.stringify({title, body})
//         }
//         fetch(`http://localhost:9999/topics/`, options)
//         .then(res => res.json())
//         .then(result=> {
//             console.log(result);
//             const lastId = result.id;
//             router.push(`/read/${lastId}`);
//         })

//     }



//     const handleTitle = (e : React.ChangeEvent<HTMLInputElement>) => {
//         setTitles(e.target.value)
//     }

//     const handleBody = (e : React.ChangeEvent<HTMLTextAreaElement>) => {
//         setBodys(e.target.value);
//     }



//   return (
//     <form onSubmit={handleSubmit}>
//         <p>
//             <input type="text" placeholder="title"  onChange={handleTitle}/>
//         </p>
//         <p>
//             <textarea name="body" placeholder="body" onChange={handleBody}></textarea>
//         </p>
//         <p>
//             <input type="submit" value="create" />
//         </p>
//     </form>
//   )
// }


import { ChakraProvider, ColorModeScript, Box, Heading, VStack, Input, Textarea, Button, Text } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { useState } from "react";

interface ICreate{
    title : string,
    content : string,
    bulletins : [];
    newBulletin : {};
}

const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
});

export default function CreatePage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [bulletins, setBulletins] = useState<T>([]);

  const handleCreateBulletin = () => {
    if (title && content) {
      const newBulletin = { title, content };
      setBulletins([...bulletins, newBulletin]);
      setTitle("");
      setContent("");
    }
  };

  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Box p={4}>
        <Heading as="h1" size="3xl" mb={4}>
          게시판 작성
        </Heading>
        <VStack align="start" spacing={4}>
          <Input
            placeholder="제목"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Textarea
            placeholder="내용"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <Button colorScheme="teal" onClick={handleCreateBulletin}>
            게시물 작성
          </Button>
        </VStack>
        <Heading as="h2" size="2xl" mt={8}>
          작성된 게시물
        </Heading>
        <VStack align="start" spacing={4}>
          {bulletins.map((bulletin, index) => (
            <BulletinItem key={index} title={bulletin.title} content={bulletin.content} />
          ))}
        </VStack>
      </Box>
    </ChakraProvider>
  );
}

function BulletinItem({ title, content } : ICreate) {
  return (
    <Box borderWidth="1px" borderRadius="lg" p={4} boxShadow="lg" w="100%">
      <Heading as="h3" size="lg" mb={2}>
        {title}
      </Heading>
      <Text>{content}</Text>
    </Box>
  );
}
