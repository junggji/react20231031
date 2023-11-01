function App() {
  return (
    <>
      <MyComp value="흥민" address="신촌" />
      <MyComp value="강인" address="강남" />
    </>
  );
}

// {value: "흥민, address: "신촌"}
function MyComp({ value, address }) {
  // 구조분해할당을 argument에 적용
  return (
    <div>
      <h1>
        {value}는 {address}에 산다
      </h1>
    </div>
  );
}

export default App;
