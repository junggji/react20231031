import MyBox, { address } from "./component/MyBox";
import MyElem, { address as myAddress } from "./component/MyElem";

// as 로 named export 값을 import할때 별칭을 줄 수 있음 --- 중복된 이름들의 충돌을 피하기 위해

function App() {
  return (
    <>
      <h1>{address}</h1>
      <h1>{myAddress}</h1>
      <MyElem />
      <MyBox />
    </>
  );
}

export default App;
