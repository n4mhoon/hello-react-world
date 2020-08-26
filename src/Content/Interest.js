import React from 'react';
import styled from 'styled-components';

export const Interest = () => {
  return (
    <>
      <ContentImage></ContentImage>
      <ContentInfo>
        <span role="img" aria-label="Pallete">
          🎨
        </span>
        <h1>interest</h1>
        <p>Work In Progress...</p>
      </ContentInfo>
      <ContentArticle></ContentArticle>
    </>
  );
};

const ContentImage = styled.div`
  background: linear-gradient(91.1deg, #a73324 -7.04%, #497eab 100%);
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
