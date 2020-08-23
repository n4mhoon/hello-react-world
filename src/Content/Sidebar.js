import React from 'react';
import styled from 'styled-components';
import MainLogo from '../Assets/logo.svg';
import { SideBtn } from '../Components/Button';

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
        <SideBtn>introduce</SideBtn>
        <SideBtn>works</SideBtn>
        <SideBtn>interest</SideBtn>
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
    line-height: 18px;
    color: #303437;
  }
`;

const SidebarMenu = styled.div`
  position: relative;
  padding-left: 32px;
  top: 200px;
`;
