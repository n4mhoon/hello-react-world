import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
    html,
    body {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
      background-color: #ffff00;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      overflow: hidden;
    }
`;
