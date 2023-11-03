import React, { useState } from "react";
import { Input, NumberInput, Text } from "@chakra-ui/react";

function App(props) {
  const [number, setNumber] = useState(0);

  // state를 가공해서 사용할 수 도있다.
  const isOdd = number % 2 == 1;

  function handleInputChange(e) {
    // e.target.value의 타입은 string이기 때문에 Number로 변환해서 연산할 수 있게함
    setNumber(Number(e.target.value));
  }
  return (
    <div>
      <Input type="number" onChange={handleInputChange} />
      <Text>
        {isOdd && "홀수"}
        {isOdd || "짝수"}
      </Text>
    </div>
  );
}

export default App;
