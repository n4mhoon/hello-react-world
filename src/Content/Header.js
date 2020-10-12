import React, { useState } from 'react';
import styled from 'styled-components';
import { HeadBtn } from '../Components/Button';
import { Dropdown } from '../Components/Dropdown';
import MainLogo from '../Assets/logo.svg';

const ContentHeader = styled.div`
  display: flex;
  align-items: center;
  background: #ebe8e8;
  height: 40px;
  width: 100%;
  padding: 0px 8px;
  position: fixed;
  top: 0;
  filter: drop-shadow(1px 1px 4px rgba(0, 0, 0, 0.1));
  z-index: 1;
`;

const MobileTitle = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 400;

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

export const HeaderIntroduce = () => {
  const [visible, isVisible] = useState(false);
  return (
    <ContentHeader>
      <MobileTitle>
        <>
          <img src={MainLogo} className="MainLogo" alt="logo" height="16px" />
          <p>&nbsp;@n4mhoon&nbsp;&nbsp;/&nbsp;&nbsp;</p>
        </>
      </MobileTitle>
      <HeadBtn onClick={() => isVisible((state) => !state)}>
        {/* eslint-disable-next-line */}
        👀 introduce
      </HeadBtn>
      {visible && <Dropdown />}
    </ContentHeader>
  );
};

export const HeaderWorks = () => {
  const [visible, isVisible] = useState(false);
  return (
    <ContentHeader>
      <MobileTitle>
        <>
          <img src={MainLogo} className="MainLogo" alt="logo" height="16px" />
          <p>&nbsp;@n4mhoon&nbsp;&nbsp;/&nbsp;&nbsp;</p>
        </>
      </MobileTitle>
      <HeadBtn onClick={() => isVisible((state) => !state)}>
        {/* eslint-disable-next-line */}
        📌 works
      </HeadBtn>
      {visible && <Dropdown />}
    </ContentHeader>
  );
};

export const HeaderInterest = () => {
  const [visible, isVisible] = useState(false);
  return (
    <ContentHeader>
      <MobileTitle>
        <>
          <img src={MainLogo} className="MainLogo" alt="logo" height="16px" />
          <p>&nbsp;@n4mhoon&nbsp;&nbsp;/&nbsp;&nbsp;</p>
        </>
      </MobileTitle>
      <HeadBtn onClick={() => isVisible((state) => !state)}>
        {/* eslint-disable-next-line */}
        🎨 interest
      </HeadBtn>
      {visible && <Dropdown />}
    </ContentHeader>
  );
};
