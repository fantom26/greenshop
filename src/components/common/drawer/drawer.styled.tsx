import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  min-height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
`;

export const Drawer = styled.div<{ visible: boolean }>`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 20;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #3a4763cc;
  pointer-events: none;

  ${({ visible }) =>
    visible &&
    `
    pointer-events: initial;

    ${Content} {
      transform: translateX(0);
      transition: transform var(--transition) var(--transition);
    }
  `}
`;
