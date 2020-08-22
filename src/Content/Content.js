import React from 'react';
import styled from 'styled-components';
import { Introduce } from './Introduce';
import upArrow from './chevron-up.svg';

export const Content = () => {
  return (
    <ContentWrap>
      <ContentHeader>
        <span role="img" aria-label="Eyes">
          👀
        </span>{' '}
        introduce
      </ContentHeader>
      <ContentMain>
        <Introduce />
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

const ContentHeader = styled.div`
  background: #d4d1d1;
  height: 40px;
  width: 100%;
  margin-top: 0;
  padding: 0px 16px;
`;

const ContentMain = styled.div`
  background: #eeecec;
`;

const OnTop = styled.div`
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
