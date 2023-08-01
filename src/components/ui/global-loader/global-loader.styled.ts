import { LOADER_CLASSNAME } from "@constants";

const ANIMATION_CONFIG = "3s infinite cubic-bezier(0.785, 0.135, 0.150, 0.860)";

export const loaderStyles = `
  body {
    display: block;
  }

  #${LOADER_CLASSNAME} {
    position: fixed;
    z-index: 200;
    inset: 0;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .leafs {
    width: 60px;
    height: 60px;
    position: relative;
    transform-origin: center;
    animation: spin 3s infinite linear;
  }

  .leaf {
    width: 100%;
    height: 100%;
    position: absolute;
  }

  .leaf div {
    display: block;
    width: 48%;
    height: 48%;
    border-radius: 0 40% 0 40%;
    background-color: #46a358;
  }

  @keyframes spin1 {
    0% { transform: rotate(0deg); }
    30% { transform: rotate(0deg); }
    70% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  @keyframes spin2 {
    0% { transform: rotate(0deg); }
    30% { transform: rotate(270deg); }
    70% { transform: rotate(270deg); }
    100% { transform: rotate(360deg); }
  }

  @keyframes spin3 {
    0% { transform: rotate(0deg); }
    30% { transform: rotate(180deg); }
    70% { transform: rotate(180deg); }
    100% { transform: rotate(360deg); }
  }

  @keyframes spin4 {
    0% { transform: rotate(0deg); }
    30% { transform: rotate(90deg); }
    70% { transform: rotate(90deg); }
    100% { transform: rotate(360deg); }
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .leaf--1 {
    animation: spin1 ${ANIMATION_CONFIG};
  }

  .leaf--2 {
    animation: spin2 ${ANIMATION_CONFIG};
  }

  .leaf--3 {
    animation: spin3 ${ANIMATION_CONFIG};
  }

  .leaf--4 {
    animation: spin4 ${ANIMATION_CONFIG};
  }
`;
