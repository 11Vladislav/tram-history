import { createGlobalStyle } from "styled-components";

// Если переименуешь файлы без пробелов (например gosznak-semibold.otf) — поправь пути здесь
import GosznakSemiBold from "./fonts/Gosznak-Semi-Bold.otf";
import GosznakSemiBoldOblique from "./fonts/Gosznak-Semi-Bold-Oblique.otf";
import SovMod from "./fonts/SovMod.ttf";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Gosznak';
    src: url(${GosznakSemiBold}) format('opentype');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Gosznak';
    src: url(${GosznakSemiBoldOblique}) format('opentype');
    font-weight: 600;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: 'SovMod';
    src: url(${SovMod}) format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  :root {
    --color-bg: #f4eee3;
    --color-bg-light: #f7f1e7;
    --color-bg-section: #f5efe5;
    --color-text: #3f2d24;
    --color-text-muted: #746457;
    --color-border: #d7c8b4;
    --color-red: #9d1f1f;
    --color-red-dark: #7e1818;
    --color-dark: #38291c;
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background: var(--color-bg);
    color: var(--color-text);
    font-family: "Montserrat", sans-serif;
    overflow-x: hidden;
  }

  /* Футер всегда внизу, даже на коротких страницах */
  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  main {
    flex: 1;
  }

  img {
    max-width: 100%;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-family: 'Gosznak', serif;
    font-weight: 600;
    letter-spacing: 0.5px;
    color: var(--color-text);
  }

  button,
  input,
  select,
  textarea {
    font-family: 'Montserrat', sans-serif;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  :focus-visible {
    outline: 2px solid var(--color-red);
    outline-offset: 3px;
  }

  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }
    * {
      transition: none !important;
    }
  }
`;

export default GlobalStyles;