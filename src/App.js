import React from 'react';
import { Global } from './global';
import { Content } from './Content/Content';
import { Sidebar } from './Content/Sidebar';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Global />
      <Sidebar />
      <Content />
    </Router>
  );
};

export default App;

// 컴포넌트를 만들때는 arrow function, Custom Hook을 만들때는 function
// const App = () => {}
// function

// <Content /> === <Content> </Content>
