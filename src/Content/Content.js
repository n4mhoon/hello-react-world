import React from 'react';
import styled from 'styled-components';

export const Content = () => {
  return (
    <ContentWrap>
      <ContentHeader>header</ContentHeader>
      <ContentMain>
        <ContentImage></ContentImage>
        <ContentInfo></ContentInfo>
        <ContentArticle></ContentArticle>
      </ContentMain>
      <OnTop></OnTop>
    </ContentWrap>
  );
};

const ContentWrap = styled.div`
  background: #ff0000;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const ContentHeader = styled.div`
background: #ff00ff;
`;

const ContentMain = styled.div`
background: #ff00ff;
`;

const ContentImage = styled.div`
background: #ff00ff;
`;

const ContentInfo = styled.div`
background: #ff00ff;
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
