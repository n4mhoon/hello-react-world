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
