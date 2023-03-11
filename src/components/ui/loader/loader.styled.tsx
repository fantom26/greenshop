import styled, { css, keyframes } from "styled-components";

export const Spin1 = keyframes`
  0% {
    opacity: 0;
  }

  12.5% {
    opacity: 0.14286;
  }

  25% {
    opacity: 0.28571;
  }

  37.5% {
    opacity: 0.42857;
  }

  50% {
    opacity: 0.57143;
  }

  62.5% {
    opacity: 0.71429;
  }

  75% {
    opacity: 0.85714;
  }

  87.5% {
    opacity: 1;
}`;

export const Spin2 = keyframes`
0% {
    opacity: 0.14286;
  }

  12.5% {
    opacity: 0.28571;
  }

  25% {
    opacity: 0.42857;
  }

  37.5% {
    opacity: 0.57143;
  }

  50% {
    opacity: 0.71429;
  }

  62.5% {
    opacity: 0.85714;
  }

  75% {
    opacity: 1;
  }

  87.5% {
    opacity: 0.14286;
  }
`;

export const Spin3 = keyframes`
0% {
    opacity: 0.28571;
  }

  12.5% {
    opacity: 0.42857;
  }

  25% {
    opacity: 0.57143;
  }

  37.5% {
    opacity: 0.71429;
  }

  50% {
    opacity: 0.85714;
  }

  62.5% {
    opacity: 1;
  }

  75% {
    opacity: 0.14286;
  }

  87.5% {
    opacity: 0.28571;
  }
`;

export const Spin4 = keyframes`
  0% {
    opacity: 0.42857;
  }

  12.5% {
    opacity: 0.57143;
  }

  25% {
    opacity: 0.71429;
  }

  37.5% {
    opacity: 0.85714;
  }

  50% {
    opacity: 1;
  }

  62.5% {
    opacity: 0.14286;
  }

  75% {
    opacity: 0.28571;
  }

  87.5% {
    opacity: 0.42857;
  }
`;

export const Spin5 = keyframes`
0% {
    opacity: 0.57143;
  }

  12.5% {
    opacity: 0.71429;
  }

  25% {
    opacity: 0.85714;
  }

  37.5% {
    opacity: 1;
  }

  50% {
    opacity: 0.14286;
  }

  62.5% {
    opacity: 0.28571;
  }

  75% {
    opacity: 0.42857;
  }

  87.5% {
    opacity: 0.57143;
  }
`;

export const Spin6 = keyframes`
0% {
    opacity: 0.71429;
  }

  12.5% {
    opacity: 0.85714;
  }

  25% {
    opacity: 1;
  }

  37.5% {
    opacity: 0.14286;
  }

  50% {
    opacity: 0.28571;
  }

  62.5% {
    opacity: 0.42857;
  }

  75% {
    opacity: 0.57143;
  }

  87.5% {
    opacity: 0.71428;
  }
`;

export const Spin7 = keyframes`
 0% {
    opacity: 0.85714;
  }

  12.5% {
    opacity: 1;
  }

  25% {
    opacity: 0.14286;
  }

  37.5% {
    opacity: 0.28571;
  }

  50% {
    opacity: 0.42857;
  }

  62.5% {
    opacity: 0.57143;
  }

  75% {
    opacity: 0.71428;
  }

  87.5% {
    opacity: 0.85714;
  }`;

export const Spin8 = keyframes`
  0% {
    opacity: 1;
  }

  12.5% {
    opacity: 0.14286;
  }

  25% {
    opacity: 0.28571;
  }

  37.5% {
    opacity: 0.42857;
  }

  50% {
    opacity: 0.57143;
  }

  62.5% {
    opacity: 0.71428;
  }

  75% {
    opacity: 0.85714;
  }

  87.5% {
    opacity: 1.0;
}`;

export const AnimationSettings = css`
  animation-fill-mode: forwards;
  animation-timing-function: steps(8, end);
`;

export const Spinner = styled.div`
  position: relative;
  width: 13rem;
  height: 13rem;
`;

export const Circle = styled.div`
  position: absolute;
  width: 3rem;
  height: 100%;
  left: 50%;

  &:nth-child(1) {
    transform: rotate(-45deg);
    opacity: 0;
    animation: ${Spin1} 1s infinite;
    ${AnimationSettings}
  }

  &:nth-child(2) {
    transform: rotate(-90deg);
    opacity: 0.14286;
    animation: ${Spin2} 1s infinite;
    ${AnimationSettings}
  }

  &:nth-child(3) {
    transform: rotate(-135deg);
    opacity: 0.28571;
    animation: ${Spin3} 1s infinite;
    ${AnimationSettings}
  }

  &:nth-child(4) {
    transform: rotate(-180deg);
    opacity: 0.42857;
    animation: ${Spin4} 1s infinite;
    ${AnimationSettings}
  }

  &:nth-child(5) {
    transform: rotate(-225deg);
    opacity: 0.57143;
    animation: ${Spin5} 1s infinite;
    ${AnimationSettings}
  }

  &:nth-child(6) {
    transform: rotate(-270deg);
    opacity: 0.71429;
    animation: ${Spin6} 1s infinite;
    ${AnimationSettings}
  }

  &:nth-child(7) {
    transform: rotate(-315deg);
    opacity: 0.85714;
    animation: ${Spin7} 1s infinite;
    ${AnimationSettings}
  }

  &:nth-child(8) {
    transform: rotate(-360deg);
    opacity: 1;
    animation: ${Spin8} 1s infinite;
    ${AnimationSettings}
  }
`;

export const LoaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Leaft = styled.div`
  width: 3rem;
  height: 4.5rem;
  background-color: var(--clr-accent);
  border-radius: 1px 30px;
`;
