import React from 'react';
import { Global } from './global';
import { Content } from './Content/Content';

const App = () => {
  return (
    <>
      <Global />
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
