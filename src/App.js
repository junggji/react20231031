import React from "react";
import { Button } from "@chakra-ui/react";

function MyComp({ children, executeClick }) {
  return <Button onClick={executeClick}>{children}</Button>;
}

function App(props) {
  function func1() {
    console.log("func1 실행");
  }
  // ------------------------------- arrow function ~~~
  let func2 = () => {
    console.log("arrow function을 변수에 담아서 사용");
  };

  return (
    <div>
      <MyComp executeClick={func1}>Button1</MyComp>
      <MyComp executeClick={func2}>Button2</MyComp>
      <MyComp
        executeClick={() => {
          console.log("arrow function을 변수에 담지 않고 사용!!!");
        }}
      >
        Button3
      </MyComp>
    </div>
  );
}

export default App;
