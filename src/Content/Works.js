import React from 'react';
import styled from 'styled-components';
import worksImage from '../Assets/works_image.png';

export const Works = () => {
  return (
    <>
      <ContentImage></ContentImage>
      <ContentInfo>
        <span role="img" aria-label="Pin">
          📌
        </span>
        <h1>works</h1>
      </ContentInfo>
      <ContentArticle>
        <p>
          진행한 작업들의 자세한 내용이 궁금하신가요? <br /> <br />
          <a
            className="notionlink"
            href="https://www.notion.so/n4mhoon/about-n4mhoon-c6171878d3d24ea3a9859f8f9db2652d"
          >
            자세히 보러 가기
            <span role="img" aria-label="zoom">
              🔎
            </span>
          </a>
          <br />
          <br />
          <br />
          <img src={worksImage} className="worksImage" alt="works" />
        </p>
      </ContentArticle>
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
  position: relative;
  top: -40px;
  left: 80px;

  .worksImage {
    width: 92%;
  }

  .notionlink {
    text-decoration: none;
    font-weight: bold;
    color: #3e66b4;

    &:hover {
      color: #182351;
      font-weight: bold;
    }
  }
`;
