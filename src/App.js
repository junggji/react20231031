import React from "react";
import { Box, Button, Center } from "@chakra-ui/react";

function App(props) {
  function handleClick(e) {
    // event bubbling(바깥에있는 element까지 전달실행 되는것??) 막는 메소드
    e.stopPropagation();
    console.log(e.target.className);
  }
  return (
    <Center
      onClick={handleClick}
      className="outerBox"
      w={"200px"}
      h="200px"
      bg={"gold"}
    >
      <Center
        onClick={handleClick}
        className="innerBox"
        w={"100px"}
        h={"100px"}
        bg={"blue"}
      >
        <Button onClick={handleClick} className="button" colorScheme="yellow">
          Button
        </Button>
      </Center>
    </Center>
  );
}

export default App;
