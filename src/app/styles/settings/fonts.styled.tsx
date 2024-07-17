import { css } from "styled-components";

export const Fonts = css`
  @font-face {
    font-weight: var(--font-weight-black);
    font-family: CeraPro;
    font-style: normal;
    src: url("/fonts/CeraPro-Black.woff2") format("woff2");
    font-display: swap;
  }

  @font-face {
    font-weight: var(--font-weight-bold);
    font-family: CeraPro;
    font-style: italic;
    src: url("/fonts/CeraPro-Bold.woff2") format("woff2");
    font-display: swap;
  }

  @font-face {
    font-weight: var(--font-weight-regular);
    font-family: CeraPro;
    font-style: normal;
    src: url("/fonts/CeraPro-Regular.woff2") format("woff2");
    font-display: swap;
  }

  @font-face {
    font-weight: var(--font-weight-medium);
    font-family: CeraPro;
    font-style: normal;
    src: url("/fonts/CeraPro-Medium.woff2") format("woff2");
    font-display: swap;
  }
`;
