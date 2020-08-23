import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import MainLogo from '../Assets/logo.svg';

export const Sidebar = () => {
  return (
    <SidebarWrap>
      <SidebarTitle>
        <img src={MainLogo} className="MainLogo" alt="logo" />
        <p className="Title">
          product designer
          <br />
          @n4mhoon
        </p>
      </SidebarTitle>
      <SidebarMenu>
        <p>introduce</p>
        <p>works</p>
        <p>interest</p>
      </SidebarMenu>
    </SidebarWrap>
  );
};

const SidebarWrap = styled.div`
  background: #f4f1f1;
  position: relative;
  width: 200px;
  height: 100%;
`;

const SidebarTitle = styled.div`
  .MainLogo {
    position: relative;
    top: 40px;
    padding-left: 24px;
    width: 40px;
  }
  .Title {
    position: relative;
    top: 48px;
    padding-left: 24px;
    font-size: 12px;
    line-height: 20px;
  }
`;

const SidebarMenu = styled.div`
  position: relative;
  top: 160px;
  padding-left: 24px;
  font-size: 16px;
`;

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
