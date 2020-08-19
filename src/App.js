import React from 'react';
import { Global } from './global';
import { Content } from './Content/Content';
import { Sidebar } from './Sidebar/Sidebar';

const App = () => {
  return (
    <>
      <Global />
      <Sidebar />
      <Content />
    </>
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
