import React from 'react';
import styled from 'styled-components';

export const Works = () => {
  return (
    <>
      <ContentImage></ContentImage>
      <ContentInfo>
        <span role="img" aria-label="Pin">
          📌
        </span>
        <h1>works</h1>
        <p>Work In Progress...</p>
      </ContentInfo>
      <ContentArticle></ContentArticle>
    </>
  );
};

const ContentImage = styled.div`
  background: linear-gradient(91.1deg, #3b516e -7.04%, #a5bfbe 100%);
  height: 240px;
`;

const ContentInfo = styled.div`
  position: relative;
  top: -40px;
  left: 80px;

  span {
    font-size: 48px;
  }
`;

const ContentArticle = styled.div`
  background: transparent;
`;
