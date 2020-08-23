import React from 'react';
import styled from 'styled-components';
import { HeadBtn } from '../Components/Button';

export const Header = () => {
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

const ContentHeader = styled.div`
  background: #d4d1d1;
  height: 40px;
  width: 100%;
  margin-top: 0;
  padding: 0px 8px;
`;
