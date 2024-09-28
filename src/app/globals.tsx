"use client";

import { css, Global } from "@emotion/react";

export const Palette = {
  /* Primary Colors */
  Primary_1: "#6263fb",
  Primary_2: "#9747ff",
  Primary_3: "#c0c0ff",

  /* Neutral Colors */
  Neutral_1: "#0b0928",
  Neutral_2: "#656b80",
  Neutral_3: "#bfbccc",
  Neutral_4: "#e2e2ee",
  Neutral_5: "#f2f2f4",

  /* Background Colors */
  Background: "#f8f9fb",
  Background_2: "#f2f2fc",
  Background_Card: "#fdfdfd",

  /* System Colors */
  Error: "#ff7d7d",
  Warning: "#fcff5e",
  Positive: "#5eff8b",

  /* Black & White */
  Black: "#000000",
  White: "#ffffff",
};

const style = css`
  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
  }

  body {
    color: "#0b0928";
    background: "#ffffff";
    font-family: Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const GlobalStyle = () => {
  return <Global styles={style} />;
};

export default GlobalStyle;
