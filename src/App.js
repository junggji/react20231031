import React, { createContext, useContext, useState } from "react";
import { Button, Text } from "@chakra-ui/react";

function AComp() {
  // 3. context 사용하기 : useContext(Context)
  const { setMessage } = useContext(MessageContext);
  return (
    <Button onClick={() => setMessage("변경된 메세지")}>
      메세지 변경하기!!
    </Button>
  );
}

function BComp() {
  // 3. context 사용하기 : useContext(Context)
  const { message } = useContext(MessageContext);
  return <Text>{message}</Text>;
}

function App(props) {
  const [message, setMessage] = useState("초기 상태 메세지");

  return (
    <div>
      {/* 2. context에 value 넣기(객체, primitive타입 등등..) : Context.Provider value={state}><Context.Provider> */}
      {/* 아래 value에 객체 이름과 값이 같으면, 값을 생략가능 */}
      <MessageContext.Provider
        value={{
          message,
          setMessage,
        }}
      >
        <AComp />
        <BComp />
      </MessageContext.Provider>
    </div>
  );
}
// 1. context 만들기 : creatContext(null)
const MessageContext = createContext(null);

export default App;
