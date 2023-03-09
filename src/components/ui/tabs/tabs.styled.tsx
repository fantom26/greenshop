import { animated } from "react-spring";
import styled from "styled-components";

export const Tabs = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding-top: 0.8rem;
  padding-bottom: 0.8rem;
`;

export const Tab = styled.button<{ selected: boolean; hovered: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  z-index: 20;
  height: 2rem;
  background-color: transparent;
  cursor: pointer;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  user-select: none;
  font-size: 1.8rem;
  font-weight: ${({ selected }) => (selected ? "700" : "400")};
  color: ${({ selected }) => (selected ? "var(--clr-accent)" : "var(--clr-dark)")};
  transition-property: color, background-color;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
`;

export const Hover = styled(animated.div)`
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  border-radius: 0.5rem;
  background-color: rgba(70, 163, 88, 0.2);
`;

export const Underline = styled(animated.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 10;
  height: 0.2rem;
  width: 100%;
  background-color: var(--clr-accent);
`;
