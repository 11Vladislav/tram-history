import { createGlobalStyle } from "styled-components";

import GosznakSemiBold from "./fonts/Gosznak-Semi Bold.otf";
import GosznakSemiBoldOblique from "./fonts/Gosznak-Semi Bold Oblique.otf";
import SovMod from "./fonts/SovMod.ttf";


const GlobalStyles = createGlobalStyle`

 @font-face {
    font-family: 'Gosznak';
    src: url(${GosznakSemiBold}) format('opentype');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'Gosznak';
    src: url(${GosznakSemiBoldOblique}) format('opentype');
    font-weight: 600;
    font-style: italic;
  }

  @font-face {
    font-family: 'SovMod';
    src: url(${SovMod}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #f4eee3;
    color: #3f2d24;
     font-family: "Montserrat", sans-serif;
    overflow-x: hidden;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-family: 'Gosznak', sans-serif;
    font-weight: 700;
    letter-spacing: 0.5px;
    text-color: #3a2d27;
  }

  button,
  input,
  select,
  textarea {
    font-family: 'Montserrat', sans-serif;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyles;