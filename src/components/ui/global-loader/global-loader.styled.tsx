import styled, { css, keyframes } from "styled-components";

export const Spin = keyframes`
	0% { transform: rotate(0deg); }
	100% { transform: rotate(360deg); }
`;

export const Corners = styled.div`
  width: 60px;
  height: 60px;
  position: relative;
  transform-origin: center;
  animation: ${Spin} 3s infinite linear;
`;

export const AnimationSettings = css`
  animation-timing-function: cubic-bezier(0.785, 0.135, 0.15, 0.86);
  animation-duration: 3s;
  animation-iteration-count: infinite;
`;

export const Spin1 = keyframes`
	0% { transform: rotate(0deg); }
	30% { transform: rotate(0deg); }
	70% { transform: rotate(0deg); }
	100% { transform: rotate(360deg); }
`;

export const Spin2 = keyframes`
	0% { transform: rotate(0deg); }
	30% { transform: rotate(270deg); }
	70% { transform: rotate(270deg); }
	100% { transform: rotate(360deg); }
`;

export const Spin3 = keyframes`
	0% { transform: rotate(0deg); }
	30% { transform: rotate(180deg); }
	70% { transform: rotate(180deg); }
	100% { transform: rotate(360deg); }
`;

export const Spin4 = keyframes`
	0% { transform: rotate(0deg); }
	30% { transform: rotate(90deg); }
	70% { transform: rotate(90deg); }
	100% { transform: rotate(360deg); }
`;

export const Corner = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;

  &::before {
    display: block;
    width: 48%;
    height: 48%;
    border-radius: 0 40% 0 40%;
    background-color: #46a358;
    content: "";
  }

  &:nth-child(1) {
    animation-name: ${Spin1};
    ${AnimationSettings}
  }

  &:nth-child(2) {
    animation-name: ${Spin2};
    ${AnimationSettings}
  }

  &:nth-child(3) {
    animation-name: ${Spin3};
    ${AnimationSettings}
  }

  &:nth-child(4) {
    animation-name: ${Spin4};
    ${AnimationSettings}
  }
`;

export const LoaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
