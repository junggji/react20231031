import React, { useState } from "react";
import { Box, Button, Text } from "@chakra-ui/react";

function App(props) {
  // set... 메소드로 상태 변경할 수 있음
  // 상태가 같은 지 아닌 지 판단해서 re-render 결정함
  // ***re-render시 전체 코드가 다시 실행된다****
  const [number, setNumber] = useState(0);
  const [numberObject, setNumberObject] = useState({ number: 0 }); // 객체

  function handleNumberObjectChange() {
    // // 이렇게 사용하면 안됨
    // numberObject.number = numberObject.number + 1; // property는 바뀌었지만 객체는 바뀐것이 아님(참조값은 같으니)
    // setNumberObject(numberObject); // 같은 객체가들어온 것이라 변경되지 않는다.

    // ****js에서 primitive 타입 -> Boolean, String, Number타입 세가지, 나머지는 참조타입****

    // 객체는 복사해서 써야함
    const newNumberObject = { ...numberObject }; // 객체를 복사하는 코드 ... (참조값 다름)
    newNumberObject.number = newNumberObject.number + 1;
    setNumberObject(newNumberObject);
  }

  return (
    <div>
      <Box>
        <Button onClick={() => setNumber(number + 1)}>number 변경</Button>
        <Text>{number}</Text>
      </Box>

      <Box>
        <Button onClick={handleNumberObjectChange}>number 객체 변경</Button>
        <Text>{numberObject.number}</Text>
      </Box>
    </div>
  );
}

export default App;
