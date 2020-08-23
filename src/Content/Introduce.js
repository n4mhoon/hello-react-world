import React from 'react';
import styled from 'styled-components';

export const Introduce = () => {
  return (
    <>
      <ContentImage></ContentImage>
      <ContentInfo>
        <h1>title</h1>
        <p>date</p>
        <p>role</p>
      </ContentInfo>
      <ContentArticle></ContentArticle>
    </>
  );
};

const ContentImage = styled.div`
  background: linear-gradient(91.1deg, #6e87a0 -7.04%, #e1b7a7 100%);
  height: 240px;
`;

const ContentInfo = styled.div`
  position: absolute;
  top: 260px;
  left: 208px;
`;

const ContentArticle = styled.div`
  background: #eeecec;
`;
