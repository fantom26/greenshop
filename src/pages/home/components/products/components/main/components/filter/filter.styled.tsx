import styled from "styled-components";

export const Tabs = styled.div`
  position: relative;
  display: flex;
  gap: 1.5rem;
  align-items: center;

  @media (max-width: 992px) {
    gap: 1rem;
  }
`;

export const Tab = styled.button<{ selected: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  color: ${({ selected }) => (selected ? "var(--clr-accent-400)" : "var(--clr-dark)")};
  font-size: 1.8rem;
  cursor: pointer;
  user-select: none;

  &::before {
    position: absolute;
    bottom: -0.5rem;
    left: 0;
    width: 100%;
    height: 0.2rem;
    background-color: var(--clr-accent-400);
    visibility: ${({ selected }) => (selected ? "visible" : "hidden")};
    opacity: ${({ selected }) => (selected ? "1" : "0")};
    transition: opacity var(--transition), visibility var(--transition);
    content: "";
  }
`;
