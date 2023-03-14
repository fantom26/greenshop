import styled from "styled-components";

export const Tabs = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 992px) {
    gap: 1rem;
  }
`;

export const Tab = styled.button<{ selected: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  font-size: 1.8rem;
  color: ${({ selected }) => (selected ? "var(--clr-accent)" : "var(--clr-dark)")};
  cursor: pointer;
  user-select: none;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -0.5rem;
    width: 100%;
    height: 0.2rem;
    background-color: var(--clr-accent);
    opacity: ${({ selected }) => (selected ? "1" : "0")};
    visibility: ${({ selected }) => (selected ? "visible" : "hidden")};
    transition: opacity var(--transition), visibility var(--transition);
  }
`;
