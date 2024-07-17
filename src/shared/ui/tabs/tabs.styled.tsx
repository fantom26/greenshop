import { animated } from "react-spring";
import styled from "styled-components";

export const Tabs = styled.div`
  position: relative;
  display: flex;
  gap: 1.5rem;
  align-items: center;
  padding-top: 0.8rem;
  padding-bottom: 0.8rem;
`;

export const Tab = styled.button<{ selected: boolean; hovered: boolean }>`
  position: relative;
  z-index: 20;
  display: flex;
  align-items: center;
  height: 2rem;
  padding-right: 1.5rem;
  padding-left: 1.5rem;
  color: ${({ selected }) => (selected ? "var(--clr-accent-400)" : "var(--clr-dark)")};
  font-weight: ${({ selected }) => (selected ? "700" : "400")};
  font-size: 1.8rem;
  background-color: transparent;
  cursor: pointer;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  transition-property: color, background-color;
  user-select: none;
`;

export const Hover = styled(animated.div)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  border-radius: 0.5rem;
  background-color: rgb(70 163 88 / 20%);
`;

export const Underline = styled(animated.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 0.2rem;
  background-color: var(--clr-accent-400);
`;
