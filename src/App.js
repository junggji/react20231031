import React, { createContext, useState } from "react";
import { AComp } from "./AComp";
import { BComp } from "./BComp";

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
export const MessageContext = createContext(null);

export default App;
