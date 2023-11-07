import React, { createContext, useContext, useState } from "react";
import { Button, Text } from "@chakra-ui/react";

function CComp() {
  // 3. context 사용하기 : useContext(Context)
  const message = useContext(MessageContext);
  return <Text>받은 메세지 : {message}</Text>;
}

function BComp() {
  return <CComp />;
}

function AComp() {
  return <BComp />;
}

function App(props) {
  const [message, setMessage] = useState("");

  // message state를 Ccomp에 전달 하기
  // 1. context 만들기 : creatContext();
  // component 밖에서 만들어야함
  // 2. context에 state 넣기 (제일 조상 component에)
  //    : <Context.Provider value={stat}></Context.Provider>
  // 3. tree안에 context 사용하기

  return (
    <div>
      <Button onClick={() => setMessage("바꾼 메세지!!!")}>
        메세지 바꾸기
      </Button>
      <MessageContext.Provider value={message}>
        <AComp />
      </MessageContext.Provider>
    </div>
  );
}

// 1.context 만들기
// context 이름은 대문자로 시작하고 ...Context로 끝남 (ex. LoginContext, MemberContext)
// 초기값에 null을 넣는게 습관인듯하다
const MessageContext = createContext(null);

export default App;
