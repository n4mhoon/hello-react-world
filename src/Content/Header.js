import React from 'react';
import styled from 'styled-components';
import { HeadBtn } from '../Components/Button';

export const HeaderIntroduce = () => {
  return (
    <ContentHeader>
      <HeadBtn>
        <span role="img" aria-label="Eyes">
          👀
        </span>{' '}
        introduce
      </HeadBtn>
    </ContentHeader>
  );
};

export const HeaderWorks = () => {
  return (
    <ContentHeader>
      <HeadBtn>
        <span role="img" aria-label="Pin">
          📌
        </span>{' '}
        works
      </HeadBtn>
    </ContentHeader>
  );
};

export const HeaderInterest = () => {
  return (
    <ContentHeader>
      <HeadBtn>
        <span role="img" aria-label="Pallete">
          🎨
        </span>{' '}
        interest
      </HeadBtn>
    </ContentHeader>
  );
};

const ContentHeader = styled.div`
  background: #ebe8e8;
  height: 40px;
  width: 100%;
  padding: 0px 8px;
  position: fixed;
  top: 0;
  filter: drop-shadow(1px 1px 4px rgba(0, 0, 0, 0.1));
`;
