import React from 'react';
import styled from 'styled-components';
import Pimage from '../Assets/profile_image.png';

export const Introduce = () => {
  return (
    <>
      <ContentImage></ContentImage>
      <ContentInfo>
        <span role="img" aria-label="Eyes">
          👀
        </span>
        <h1>introduce</h1>
        <h3>Namhoon Kim</h3>
        <p>Product Designer at pplink inc.</p>
      </ContentInfo>
      <ContentArticle>
        <h3>Profile</h3>
        <p>
          2018년, 한 수업시간에 ‘자신을 표현하는 사진’을 찍어오라던 교수님께
          <br />
          일상 속에서 보이는 모서리를 찍어갔던 학생은
          <br />
          ‘꽤나 피곤한 인생을 살겠다’는 이야기를 듣고
          <br />
          정돈됨을 추구하는 성격을 인정이라도 받듯 좋아했습니다.
          <br />
          <br />
          그런 성격에 부합하듯
          <br />
          체계적인 과정의 UX 설계와 이를 정돈되게 표현하는 UI 디자인의 매력에
          빠졌고,
          <br />
          UX와 UI를 아우르는 디자이너를 꿈꾸게 되었습니다.
        </p>
        <br />
        <br />
        <img src={Pimage} className="Pimage" alt="profile" />
        <br />
        <br />
        <p>
          Phone : +82 10-4017-0414
          <br />
          E-mail : n4mhoon@gmail.com
        </p>
      </ContentArticle>
    </>
  );
};

const ContentImage = styled.div`
  background: linear-gradient(91.1deg, #6e87a0 -7.04%, #e1b7a7 100%);
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
  position: relative;
  top: 0px;
  left: 80px;

  .Pimage {
    width: 160px;
  }
`;
