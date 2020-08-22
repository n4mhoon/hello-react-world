import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
    @font-face {
      font-family: "Spoqa Han Sans";
      font-weight: 200;
      src : url("./fonts/SpoqaHanSnasThin.woff2") format("woff2"),
      url("./fonts/SpoqaHanSnasThin.woff") format("woff"),
      url("./fonts/SpoqaHanSnasThin.ttf") format("truetype");
    }

    @font-face {
      font-family: "Spoqa Han Sans";
      font-weight: 300;
      src : url("./fonts/SpoqaHanSnasLight.woff2") format("woff2"),
      url("./fonts/SpoqaHanSnasLight.woff") format("woff"),
      url("./fonts/SpoqaHanSnasLight.ttf") format("truetype");
    }

    @font-face {
      font-family: "Spoqa Han Sans";
      font-weight: 400;
      src : url("./fonts/SpoqaHanSnasRegular.woff2") format("woff2"),
      url("./fonts/SpoqaHanSnasRegular.woff") format("woff"),
      url("./fonts/SpoqaHanSnasRegular.ttf") format("truetype");
    }

    @font-face {
      font-family: "Spoqa Han Sans";
      font-weight: 500;
      src : url("./fonts/SpoqaHanSnasBold.woff2") format("woff2"),
      url("./fonts/SpoqaHanSnasBold.woff") format("woff"),
      url("./fonts/SpoqaHanSnasBold.ttf") format("truetype");
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
      justify-content: stretch;
      align-items: stretch;
      overflow: hidden;
    }


`;
