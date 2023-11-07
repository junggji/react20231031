import React from "react";

function MyComp() {
  console.log("good?");
  return <div>hello</div>;
}

function App(props) {
  return (
    <div>
      <MyComp />
    </div>
  );
}

export default App;
