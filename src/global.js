import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
      @font-face {
        font-family: "Spoqa Han Sans";
        font-weight: 200;
        src : url("./Assets/fonts/SpoqaHanSnasThin.woff2") format("woff2"),
        url("./Assets/fonts/SpoqaHanSnasThin.woff") format("woff"),
        url("./Assets/fonts/SpoqaHanSnasThin.ttf") format("truetype");
      }

      @font-face {
        font-family: "Spoqa Han Sans";
        font-weight: 300;
        src : url("./Assets/fonts/SpoqaHanSnasLight.woff2") format("woff2"),
        url("./Assets/fonts/SpoqaHanSnasLight.woff") format("woff"),
        url("./Assets/fonts/SpoqaHanSnasLight.ttf") format("truetype");
      }

      @font-face {
        font-family: "Spoqa Han Sans";
        font-weight: 400;
        src : url("./Assets/fonts/SpoqaHanSnasRegular.woff2") format("woff2"),
        url("./Assets/fonts/SpoqaHanSnasRegular.woff") format("woff"),
        url("./Assets/fonts/SpoqaHanSnasRegular.ttf") format("truetype");
      }

      @font-face {
        font-family: "Spoqa Han Sans";
        font-weight: 500;
        src : url("./Assets/fonts/SpoqaHanSnasBold.woff2") format("woff2"),
        url("./Assets/fonts/SpoqaHanSnasBold.woff") format("woff"),
        url("./Assets/fonts/SpoqaHanSnasBold.ttf") format("truetype");
      }

    html,
    body,
    #root {
      font-family: "Spoqa Han Sans", sans-serif;
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: row;
      overflow: hidden;
    }
`;
