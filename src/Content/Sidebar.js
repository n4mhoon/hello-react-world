import React from 'react';
import { NavLink } from 'react-router-dom';
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
        <NavLink
          to="/introduce"
          className="Menu"
          activeStyle={{
            color: '#182351',
            fontWeight: 400,
          }}
        >
          introduce
        </NavLink>
        <br />
        <br />
        <br />
        <NavLink
          to="/works"
          className="Menu"
          activeStyle={{
            color: '#182351',
            fontWeight: 400,
          }}
        >
          works
        </NavLink>
        <br />
        <br />
        <br />
        <NavLink
          to="/interest"
          className="Menu"
          activeStyle={{
            color: '#182351',
            fontWeight: 400,
          }}
        >
          interest
        </NavLink>
      </SidebarMenu>
    </SidebarWrap>
  );
};

const SidebarWrap = styled.div`
  background: #f4f1f1;
  position: relative;
  min-width: 160px;
  width: 160px;
  height: 100%;
  padding-left: 24px;
  padding-right: 24px;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const SidebarTitle = styled.div`
  .MainLogo {
    position: relative;
    top: 40px;
    width: 40px;
  }
  .Title {
    position: relative;
    top: 48px;
    font-size: 12px;
    line-height: 18px;
    color: #303437;
  }
`;

const SidebarMenu = styled.div`
  font-size: 16px;
  font-weight: 300;
  position: relative;
  top: 200px;
  color: #303437;
  margin-bottom: 40px;
  text-decoration: unset;

  .Menu {
    color: #303437;
    text-decoration: none;
    padding-left: 8px;
    padding-right: 8px;
  }
`;
