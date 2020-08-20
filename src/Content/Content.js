import React from 'react';
import styled from 'styled-components';

export const Content = () => {
  return (
    <ContentWrap>
      <ContentHeader>header</ContentHeader>
      <ContentMain>
        <ContentImage>image</ContentImage>
        <ContentInfo>info</ContentInfo>
        <ContentArticle></ContentArticle>
      </ContentMain>
      <OnTop></OnTop>
    </ContentWrap>
  );
};

const ContentWrap = styled.div`
  background: #ff0000;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const ContentHeader = styled.div`
  background: #ff00ff;
  height: 48px;
  width: 100%;
  margin-top: 0;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const ContentMain = styled.div`
  background: black;
`;

const ContentImage = styled.div`
  background: #1200ff;
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
  background: #ff00ff;
`;

const OnTop = styled.div`
  background: #ff00ff;
`;

// import React, { useState } from 'react';
// import styled from 'styled-components';

// export const Content = () => {
//   const [count, setCount] = useState(0);

//   return (
//     <Div isRed={false}>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>Click me</button>
//     </Div>
//   );
// };

// const Div = styled.div`
//   background: ${(props) => (props.isRed ? 'red' : 'blue')};
// `;
