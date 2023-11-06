import React, { useState } from "react";
import { Button } from "@chakra-ui/react";

function App(props) {
  const [text, setText] = useState("hello");
  // react가 컴포넌트의 상태변화가 일어나는지 파악
  // 상태를 통해서 변경을 해야한다.(그게 react활용이다)

  console.log(text);

  function handleButtonClick(e) {
    // text 라는 state 값 변경
    setText("greeting");
  }

  return (
    <div>
      <Button onClick={handleButtonClick}>상태 변경!</Button>
      <p>{text}</p>
    </div>
  );
}

export default App;
