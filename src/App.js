import React, { useEffect, useState } from "react";
import { Button, Input, Text } from "@chakra-ui/react";

function App(props) {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState("");

  // 첫번째 파라미터는(setup) : The function with your Effect's(외부코드, 외부와 일하는 logic) logic. 부작용이 있는 함수
  // 두번째 파라미터는 : setup을 실행시키는 값의 나열/배열(실행시키는 트리거)
  //                    빈 배열이면 첫 랜더링 때만 실행됨
  //                    아예 안쓴다면 재 랜더링시에 실행됨 (무한랜더링 될 수 있어서 잘 쓰지않는다)
  //            들어갈수 있는 값 : state, prop, 모든함수...
  useEffect(() => {
    console.log("effect 함수 실행됨");
  }, [number, text]); // number상태 바뀔때 위의 함수 실행됨

  return (
    <div>
      <Button onClick={() => setNumber(number + 1)}>증가</Button>
      <Text>{number}</Text>
      <Input value={text} onChange={(e) => setText(e.target.value)} />
    </div>
  );
}

export default App;
