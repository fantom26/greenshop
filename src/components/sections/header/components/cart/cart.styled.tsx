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
    fill: var(--clr-dark);
    transition: fill var(--transition);
  }

  @media (max-width: 576px) {
    margin-left: auto;
  }

  @media (hover) {
    &:hover {
      svg {
        fill: var(--clr-accent);
        transition: fill var(--transition);
      }
    }
  }
`;

export const Quantity = styled.span<{ shown: boolean }>`
  position: absolute;
  right: -1.3rem;
  top: -0.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.2rem solid var(--clr-light);
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  font-weight: 500;
  font-size: 1rem;
  color: var(--clr-light);
  background-color: var(--clr-accent);
  opacity: ${({ shown }) => (shown ? 1 : 0)};
  visibility: ${({ shown }) => (shown ? "visible" : "hidden")};
`;
