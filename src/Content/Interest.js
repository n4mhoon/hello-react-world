import React from 'react';
import styled from 'styled-components';
import { ContentWrapper } from './Content';

export const Interest = () => {
  return (
    <>
      <ContentImage />
      <ContentWrapper>
      <ContentInfo>
        <span role="img" aria-label="Pallete">
          🎨
        </span>
        <h1>interest</h1>
        <p className="explain">
          "다양한 활동에 도전하는 편입니다." <br />
        </p>
      </ContentInfo>
      <ContentArticle>
        <h2>Making contents</h2>
        <iframe
          title="ipad opening"
          src="https://player.vimeo.com/video/374371778"
          width="640px"
          height="360px"
          frameBorder="0"
          allow="autoplay; fullscreen"
        ></iframe>
        <br /> <br /> <br />
        <h2>Playing Game</h2>
        <iframe
          title="beatsaber"
          src="https://player.vimeo.com/video/375063587"
          width="640px"
          height="360px"
          frameBorder="0"
          allow="autoplay; fullscreen"
        ></iframe>
        <br /> <br /> <br />
        <h2>Do something.. fun!</h2>
        <iframe
          title="play kalimba"
          src="https://player.vimeo.com/video/375051982"
          width="640px"
          height="360px"
          frameBorder="0"
          allow="autoplay; fullscreen"
        ></iframe>
        <br />
        <br />
        <br />
        <br />
      </ContentArticle>
      </ContentWrapper>
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
  
  span {
    font-size: 48px;
  }

  .explain {
    font-style: italic;
  }
`;

const ContentArticle = styled.div`
  background: transparent;
  position: relative;

  h2 {
    color: #23255f;
  }
`;
