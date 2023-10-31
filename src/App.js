
function App() {
  return (
    <div>
      <MyComponent1 />
      {/*
      <div>
        Hello Component
      </div>
      */}

      <MyComponent2 />
      {/*
       <p> lorem </p>

      */}
    </div>
  );
}

function MyComponent1 () {
  return (
      <div>
        <h1>Hello Component</h1>
      </div>
  )
}

function MyComponent2 () {
  return (
      <>
          <p>lorem akjdfkl</p>
          <ul>
              <li>hi</li>
              <li>bye</li>
              <li>hibye</li>
          </ul>
      </>
  )
}

export default App;
