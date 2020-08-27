import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import { Introduce } from './Introduce';
import upArrow from '../Assets/chevron-up.svg';
import { HeaderIntroduce, HeaderWorks, HeaderInterest } from './Header';
import { Interest } from './Interest';
import { Works } from './Works';

export const Content = () => {
  return (
    <ContentWrap>
      <Route path={['/', '/introduce']} exact component={HeaderIntroduce} />
      <Route path="/interest" exact component={HeaderInterest} />
      <Route path="/works" exact component={HeaderWorks} />
      <ContentMain>
        <Route path={['/', '/introduce']} exact component={Introduce} />
        <Route path="/interest" exact component={Interest} />
        <Route path="/works" exact component={Works} />
      </ContentMain>
      <OnTop className="upbutton">
        <img src={upArrow} className="UpArrow" alt="up" />
      </OnTop>
    </ContentWrap>
  );
};

// let goUp = document.getElementsByClassName('upbutton');
// goUp.addEventListener('click', function () {
//   window.scrollTo({ top: 0, behavior: 'smooth' });
// });

const ContentWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #ebe8e8;
  overflow-x: hidden;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const ContentMain = styled.div``;

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
