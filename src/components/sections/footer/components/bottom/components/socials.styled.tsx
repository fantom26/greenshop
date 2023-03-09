import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
`;

export const Link = styled.a`
  display: flex;
  border: 0.1rem solid rgba(70, 163, 88, 0.2);
  border-radius: 0.5rem;
  padding: 0.5rem;
  transition: background-color var(--transition);
  @media (hover) {
    &:hover {
      background-color: var(--clr-accent);
      transition: background-color var(--transition);

      svg {
        fill: var(--clr-light);
        fill-opacity: 1;
        transition: fill var(--transition), fill-opacity var(--transition);
      }
    }
  }

  svg {
    fill: var(--clr-accent);
    fill-opacity: 0.6;
    transition: fill var(--transition), fill-opacity var(--transition);
  }
`;
