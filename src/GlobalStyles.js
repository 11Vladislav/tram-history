import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #f4eee3;
    color: #3f2d24;
    font-family: 'Merriweather', sans-serif;
    overflow-x: hidden;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-family: 'Playfair Display', sans-serif;
    font-weight: 700;
    letter-spacing: 0.5px;
    text-color: #3a2d27;
  }

  button,
  input,
  select,
  textarea {
    font-family: 'Merriweather', sans-serif;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyles;