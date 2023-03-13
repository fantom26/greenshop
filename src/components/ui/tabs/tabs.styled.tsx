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
  z-index: 20;
  display: flex;
  align-items: center;
  padding-right: 1.5rem;
  padding-left: 1.5rem;
  height: 2rem;
  font-weight: ${({ selected }) => (selected ? "700" : "400")};
  font-size: 1.8rem;
  color: ${({ selected }) => (selected ? "var(--clr-accent)" : "var(--clr-dark)")};
  background-color: transparent;
  transition-property: color, background-color;
  transition-duration: 150ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  user-select: none;
`;

export const Hover = styled(animated.div)`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 10;
  border-radius: 0.5rem;
  background-color: rgba(70, 163, 88, 0.2);
`;

export const Underline = styled(animated.div)`
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 10;
  width: 100%;
  height: 0.2rem;
  background-color: var(--clr-accent);
`;
