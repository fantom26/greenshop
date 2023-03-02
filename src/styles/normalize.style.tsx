import { css } from "styled-components";

export const StyledNormalize = css`
  html {
    font-family: var(--font-family);
    font-weight: var(--font-weight);
    font-size: 62.5%;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    scroll-behavior: smooth;
  }

  html,
  body,
  #__next {
    height: 100%;
  }

  body {
    -moz-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  pre {
    font-family: monospace;
    font-size: 1em;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    height: auto;
    max-width: 100%;
    object-fit: cover;
  }

  button {
    border: none;
    text-align: left;
    color: inherit;
    background-color: transparent;
    cursor: pointer;
  }

  ul,
  ol {
    list-style: none;
  }

  input {
    -webkit-appearance: none;
    appearance: none;
    border: none;
    border-radius: 0;
    background-color: transparent;

    &::-webkit-search-decoration,
    &::-webkit-search-cancel-button,
    &::-webkit-search-results-button,
    &::-webkit-search-results-decoration {
      display: none;
    }
  }

  .js-focus-visible :focus:not(.focus-visible) {
    outline: none;
  }

  .focus-visible {
    outline: auto 1px;
  }

  .visually-hidden {
    position: absolute;
    overflow: hidden;
    margin: -1px;
    border: 0;
    padding: 0;
    width: 1px;
    height: 1px;
    clip: rect(0 0 0 0);
  }

  /* Forms
   ========================================================================== */

  /**
 * 1. Change the font styles in all browsers.
 * 2. Remove the margin in Firefox and Safari.
 */

  button,
  input,
  optgroup,
  select,
  textarea {
    margin: 0;
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
  }

  /**
 * Remove the inheritance of text transform in Edge, Firefox, and IE.
 * 1. Remove the inheritance of text transform in Firefox.
 */

  button,
  select {
    text-transform: none;
  }

  /**
 * Correct the inability to style clickable types in iOS and Safari.
 */

  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }

  /**
 * Remove the inner border and padding in Firefox.
 */

  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  /**
 * Restore the focus styles unset by the previous rule.
 */

  button:-moz-focusring,
  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
  }
`;
