import aaggee, { city } from "./component/MyElem";
import Yourbox, { country, person } from "./component/MyBox";

// deafult import는 이름 바꿔도 상관없다.

function App() {
  return (
    <>
      <h1>{city}</h1>
      <h1>{aaggee}</h1>
      <Yourbox />
      <h1>
        {person.age}, {person.name}
      </h1>
      <h1>{country}</h1>
    </>
  );
}

export default App;
