import { Box, SimpleGrid } from "@chakra-ui/react";

function App() {
  // base: "0em", // 0px
  //   sm: "30em", // ~480px. em is a relative unit and is dependant on the font size.
  //   md: "48em", // ~768px
  //   lg: "62em", // ~992px
  //   xl: "80em", // ~1280px
  //   "2xl": "96em", // ~1536px
  return (
    <>
      <SimpleGrid spacing={"10px"} columns={{ sm: 2, md: 3, "2xl": 6 }}>
        <Box bg="blue.300">Lorem.</Box>
        <Box bg="blue.300">Mollitia!</Box>
        <Box bg="blue.300">Vel!</Box>
        <Box bg="blue.300">Sed?</Box>
        <Box bg="blue.300">Qui!</Box>
        <Box bg="blue.300">Facilis.</Box>
        <Box bg="blue.300">Impedit!</Box>
        <Box bg="blue.300">Nisi.</Box>
        <Box bg="blue.300">Id.</Box>
        <Box bg="blue.300">Quasi.</Box>
        <Box bg="blue.300">Nesciunt?</Box>
        <Box bg="blue.300">Ullam?</Box>
        <Box bg="blue.300">Ullam.</Box>
        <Box bg="blue.300">Fugiat!</Box>
        <Box bg="blue.300">Magni!</Box>
        <Box bg="blue.300">A.</Box>
        <Box bg="blue.300">Aliquid!</Box>
        <Box bg="blue.300">Praesentium?</Box>
        <Box bg="blue.300">Provident.</Box>
        <Box bg="blue.300">Sit.</Box>
        <Box bg="blue.300">Obcaecati!</Box>
        <Box bg="blue.300">Impedit.</Box>
        <Box bg="blue.300">Officia?</Box>
        <Box bg="blue.300">Tempora.</Box>
        <Box bg="blue.300">At!</Box>
        <Box bg="blue.300">Explicabo!</Box>
        <Box bg="blue.300">Blanditiis!</Box>
        <Box bg="blue.300">Laudantium.</Box>
        <Box bg="blue.300">Impedit.</Box>
        <Box bg="blue.300">Quis?</Box>
      </SimpleGrid>
    </>
  );
}

export default App;
