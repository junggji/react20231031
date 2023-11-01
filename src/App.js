// style 적용 방법
// 보통 css 파일 --> 같은 이름의 class사용될 경우
// css module 사용
// chakraui css library

import { MyComp } from "./component/MyComp";
import { MyBox } from "./component/MyBox";
import { MyContainer } from "./component/MyContainer";

function App() {
  return (
    <>
      <MyComp />
      <MyBox />
      <MyContainer />
    </>
  );
}

export default App;
