import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-top: 2rem;
`;

export const Link = styled.a`
  display: flex;
  padding: 0.5rem;
  border: 0.1rem solid rgb(70 163 88 / 20%);
  border-radius: 0.5rem;
  transition: background-color var(--transition);

  svg {
    transition: fill var(--transition), fill-opacity var(--transition);
    fill: var(--clr-accent-400);
    fill-opacity: 0.6;
  }

  @media (hover) {
    &:hover {
      background-color: var(--clr-accent-400);
      transition: background-color var(--transition);

      svg {
        transition: fill var(--transition), fill-opacity var(--transition);
        fill: var(--clr-light);
        fill-opacity: 1;
      }
    }
  }
`;
