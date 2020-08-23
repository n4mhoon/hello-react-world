import React from 'react';
import { Global } from './global';
import { Content } from './Content/Content';
import { Sidebar } from './Content/Sidebar';

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
