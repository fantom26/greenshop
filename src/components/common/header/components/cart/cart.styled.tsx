import styled from "styled-components";

export const Wrapper = styled.div<{ disabled: boolean }>`
  position: relative;
  display: flex;

  ${({ disabled }) =>
    disabled &&
    `
    opacity: 0.5;
    pointer-events: none;
  `}

  svg {
    transition: fill var(--transition);
    fill: var(--clr-dark);
  }

  @media (max-width: 576px) {
    margin-left: auto;
  }

  @media (hover) {
    &:hover {
      svg {
        transition: fill var(--transition);
        fill: var(--clr-accent-400);
      }
    }
  }
`;

export const Quantity = styled.span<{ shown: boolean }>`
  position: absolute;
  top: -0.4rem;
  right: -1.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border: 0.2rem solid var(--clr-light);
  border-radius: 50%;
  color: var(--clr-light);
  font-weight: var(--font-weight-medium);
  font-size: 1rem;
  background-color: var(--clr-accent-400);
  visibility: ${({ shown }) => (shown ? "visible" : "hidden")};
  opacity: ${({ shown }) => (shown ? 1 : 0)};
`;
