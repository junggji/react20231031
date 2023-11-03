import React, { useState } from "react";
import { Button, Text } from "@chakra-ui/react";

function App(props) {
  let [number, setNumber] = useState(0); // 초기값을 0으로

  function handleClick(e) {
    // number++;
    // 상태 변경메소드 사용
    setNumber(number + 1);
  }
  return (
    <div>
      <Button onClick={handleClick}> 바꾸기 </Button>
      <Text>{number}</Text>
    </div>
  );
}

export default App;
