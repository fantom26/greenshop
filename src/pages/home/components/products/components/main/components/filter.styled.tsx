import styled from "styled-components";

export const Tabs = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

export const Tab = styled.button<{ selected: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  font-size: 1.8rem;
  color: ${({ selected }) => (selected ? "var(--clr-accent)" : "var(--clr-dark)")};

  &::before {
    position: absolute;
    content: "";
    bottom: -0.5rem;
    left: 0;
    height: 0.2rem;
    width: 100%;
    background-color: var(--clr-accent);
    opacity: ${({ selected }) => (selected ? "1" : "0")};
    visibility: ${({ selected }) => (selected ? "visible" : "hidden")};
    transition: opacity var(--transition), visibility var(--transition);
  }
`;
