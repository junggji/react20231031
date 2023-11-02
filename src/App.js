import { Box } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Box bg={"gold"} border={"1px solid purple"}>
        Lorem ipsum.
      </Box>
      <Box bg={"blue"} borderTop={"2px dotted green"}>
        Officiis, sapiente?
      </Box>
      <Box bg={"red"} borderBottom={"7px double yellow"}>
        Iure, laboriosam!
      </Box>
      <Box borderX={"10px solid"} borderColor={"gray.600"}>
        Impedit, sit?
      </Box>
      <Box borderY={"10px dotted"} borderColor={"red.300"}>
        Eum, illum.
      </Box>
      <Box border={"5px solid blue"} borderRadius={"30px"}>
        Explicabo, perspiciatis!
      </Box>
      <Box border={"5px solid yellow"} borderRadius={"20%"}>
        Illo, magni!
      </Box>
      <Box border={"5px solid black"} borderRadius={50}>
        Ab, consequatur.
      </Box>
      <Box border={"5px solid blue"} borderTopRightRadius={100}>
        Architecto, asperiores?
      </Box>
      <Box border={"5px solid green"} borderBottomRightRadius={"50%"}>
        Rerum, sunt?
      </Box>
      <Box shadow={"10px 5px 5px red"}>Accusamus, illum?</Box>
      <Box shadow={"lg"}>Minima, numquam?</Box>
      <Box shadow={"dark-lg"}>Aut, rerum!</Box>
      <Box shadow={"xl"}>Nemo, voluptates?</Box>
      <Box bg={"blue.300"} m={"10px"}>
        Perspiciatis, unde!
      </Box>
      <Box bg={"yellow.600"} m={"20px"}>
        Sunt, voluptas?
      </Box>
      <Box bg={"facebook.200"} mx={"70px"}>
        Minus, nulla.
      </Box>
      <Box bg={"red.300"} my={"20px"}>
        Eligendi, repellendus.
      </Box>
      <Box>Aspernatur, rerum!</Box>
      <Box>Repellendus, voluptates?</Box>
      <Box bg="red.600" m="1">
        Lorem ipsum.
      </Box>
      <Box bg="blue.300" m="2">
        Mollitia, natus.
      </Box>
      <Box bg="gold" m="3">
        Iusto, quos!
      </Box>
      <Box bg="yellow.900" m="4">
        Qui, quibusdam?
      </Box>
      <Box bg="gray.400" m="5">
        Fuga, provident.
      </Box>
      <Box bg="red" px={"20px"}>
        Lorem ipsum.
      </Box>
      <Box bg="orange" pl={"20px"}>
        Delectus, eaque.
      </Box>
      <Box bg="yellow" p={1}>
        Dolorum, harum?
      </Box>
      <Box bg="green" p={2}>
        Fugit, voluptas!
      </Box>
      <Box bg="green.100" p={3}>
        Ad, fuga.
      </Box>
      <Box bg="blue" pb={"10px"}>
        Fuga, possimus?
      </Box>
      <Box bg="blue.300">Aperiam, mollitia.</Box>
      <Box bg="purple">Suscipit, tempore.</Box>
      <Box bg="purple.200">Aspernatur, reprehenderit?</Box>
      <Box bg="purple.100">Ad, exercitationem.</Box>
    </>
  );
}

export default App;
