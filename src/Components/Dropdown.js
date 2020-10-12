import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const DropdownStyle = styled.div`
  position: fixed;
  width: 160px;
  height: 120px;
  left: 8px;
  top: 38px;
  background: #f5f5f5;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 4px;

  @media only screen and (max-width: 768px) {
    left: 136px;
  }

  .dMenu {
    font-size: 14px;
    font-weight: 400;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    color: #303437;
    text-decoration: none;
    width: calc(100% - 24px);
    height: 40px;
    padding-left: 12px;
    padding-right: 12px;
    border-radius: 4px;

    &:hover {
      background: rgba(24, 35, 81, 0.25);
      transition: 0.3s;
    }
  }
`;

export const Dropdown = () => {
  return (
    <DropdownStyle>
      <NavLink to="/introduce" className="dMenu">
        {/* eslint-disable-next-line */}
        👀 introduce
      </NavLink>
      <NavLink to="/works" className="dMenu">
        {/* eslint-disable-next-line */}
        📌 works
      </NavLink>
      <NavLink to="/interest" className="dMenu">
        {/* eslint-disable-next-line */}
        🎨 interest
      </NavLink>
    </DropdownStyle>
  );
};
