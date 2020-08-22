import React from 'react';
import styled from 'styled-components';

export const Introduce = () => {
  return (
    <>
      <ContentImage>image</ContentImage>
      <ContentInfo>info</ContentInfo>
      <ContentArticle></ContentArticle>
    </>
  );
};

const ContentImage = styled.div`
  background: #a9a7a7;
  height: 240px;
`;

const ContentInfo = styled.div`
  background: #ff00ff;
  position: absolute;
  top: 260px;
  left: 208px;
  width: 200px;
  height: 56px;
`;

const ContentArticle = styled.div`
  background: #eeecec;
`;
