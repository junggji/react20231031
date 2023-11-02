import { Box, Flex } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Flex
        width={"100%"}
        height={"100px"}
        bg={"gray.300"}
        gap={3}
        align={"center"}
        justify={"space-around"}
      >
        <Box bg="gold">Lorem.</Box>
        <Box bg="red">Ducimus!</Box>
        <Box bg="gray">Nam.</Box>
        <Box bg="blue">Quisquam.</Box>
        <Box bg="green">Fuga?</Box>
      </Flex>
    </>
  );
}

export default App;
