// export된 컴포넌트(변수, 함수, 객체) 를 import 해서 사용
// 한 파일 안에서 여러 컴포넌트 가져올 수( 쓸 수) 있다.
// 변수나 객체로 import해올수있다.

import { MyBox, MyElem, MyContainer, name, address, person } from "./MyBox";

function App() {
  console.log("name", name);
  console.log("address", address);
  console.log("person", person);
  return (
    <>
      <MyBox />
      <MyElem />
      <MyContainer />
    </>
  );
}

export default App;
