function MyComp({ text, address, children }) {
  // children이라는 property를 사용해서 컴포넌트안의 다른 컨텐츠를 사용할 수 있다.
  return (
    <>
      <p>{text}</p>
      <p>{address}</p>
      <p>{children}</p>
    </>
  );
}

function App(props) {
  return (
    <div>
      <MyComp text={"hello"} address={"seoul"}>
        some contents, 다른 컴포넌트가 있을 수도 있음.
      </MyComp>
    </div>
  );
}

export default App;
