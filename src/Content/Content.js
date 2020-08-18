import React, { useState } from 'react';
import styled from 'styled-components';

export const Content = () => {
  const [count, setCount] = useState(0);

  return (
    <Div isRed={false}>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </Div>
  );
};

const Div = styled.div`
  background: ${(props) => (props.isRed ? 'red' : 'blue')};
`;
