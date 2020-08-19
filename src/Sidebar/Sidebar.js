import React from 'react';
import styled from 'styled-components';

export const Sidebar = () => {
  
    return (
      <SidebarWrap>
        <SidebarTitle></SidebarTitle>
        <SidebarMenu></SidebarMenu>
      </SidebarWrap>
    );
  };
  
  const SidebarWrap = styled.div`
    color: #ffffff;
    background: #6361e3;
    box-sizing: border-box;
    width: 200px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const SidebarTitle = styled.div`
  `;

  const SidebarMenu = styled.div`
  `;

  

//   background: ${(props) => (props.isRed ? 'red' : 'blue')};
