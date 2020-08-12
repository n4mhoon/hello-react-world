import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      <Content />
    </>
  );
};

const Header = () => {
  return (
    <div>
      Hello React World
      <br />
      This is Namhoon's Study Page for React.
    </div>
  );
};

const Content = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

export default App;

// 컴포넌트를 만들때는 arrow function, Custom Hook을 만들때는 function
// const App = () => {}
// function

// <Content /> === <Content> </Content>

// <header className="App-header">
// <img src={logo} className="App-logo" alt="logo" />
// <p>
//   Edit <code>src/App.js</code> and save to reload.
// </p>
// <a
//   className="App-link"
//   href="https://reactjs.org"
//   target="_blank"
//   rel="noopener noreferrer"
// >
//   Learn React
// </a>
// </header>
