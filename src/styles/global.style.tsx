import { createGlobalStyle } from "styled-components";
import { StyledNormalize } from "./normalize.style";

export const GlobalStyles = createGlobalStyle`
  ${StyledNormalize}

  $containerWidth: 123rem;

  :root {
    --font-family: "CeraPro", sans-serif;
    --font-weight: 400;
    --content-width: 120rem;
    --container-offset: 1.5rem;
    --container-width: calc(
      var(--content-width) + (var(--container-offset) * 2)
    );
    --transition: 0.3s;

    --radius: 0.5rem;
    --clr-default-200: #ddddde;
    --clr-default-900: #0a0a0a;

    --clr-accent: #46a358;
    --clr-light: #ffffff;
    --clr-grey: #727272;
    --clr-dark: #3d3d3d;
    --clr-ui-error: #ff3549;
  }

  body {
    font-size: 1.6rem;
    color: var(--clr-dark);
  }

  main {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
  }
`;
