import React from 'react';
import styled from 'styled-components';
import { Introduce } from './Introduce';
import upArrow from '../Assets/chevron-up.svg';
import { Header } from './Header';
import { Interest } from './Interest';
import { Works } from './Works';
import { Route } from 'react-router-dom';

export const Content = () => {
  return (
    <ContentWrap>
      <Header />
      <ContentMain>
        <Route path={['/', '/introduce']} exact component={Introduce} />
        <Route path="/interest" exact component={Interest} />
        <Route path="/works" exact component={Works} />
      </ContentMain>
      <OnTop>
        <img src={upArrow} className="UpArrow" alt="up" />
      </OnTop>
    </ContentWrap>
  );
};

const ContentWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const ContentMain = styled.div`
  background: #eeecec;
`;

const OnTop = styled.div`
  cursor: pointer;
  background: #ffffff;
  position: fixed;
  bottom: 24px;
  right: 24px;
  width: 40px;
  height: 40px;
  filter: drop-shadow(1px 1px 4px rgba(0, 0, 0, 0.15));
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  .UpArrow {
    width: 24px;
  }
`;

//   background: ${(props) => (props.isRed ? 'red' : 'blue')};
