import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      <Content />
      <Footer />
    </>
  );
};

const Header = () => {
  return <div className="App-header">Hello React World</div>;
};

const Content = () => {
  return <div>this is study page for React.</div>;
};

const Footer = () => {
  return <div>by n4mhoon with jihoonT</div>;
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
