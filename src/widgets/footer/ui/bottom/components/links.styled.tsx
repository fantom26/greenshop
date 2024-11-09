import Link from "next/link";
import styled from "styled-components";

export const Groups = styled.ul`
  display: flex;
  gap: 14rem;

  @media (max-width: 1200px) {
    gap: 10rem;
  }

  @media (max-width: 992px) {
    gap: 5rem;
  }

  @media (max-width: 767px) {
    justify-content: space-between;
  }

  @media (max-width: 520px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
  }
`;

export const Links = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 1.5rem;
`;

export const NextLink = styled(Link)`
  display: inline-block;
  margin: 0 -0.25rem;
  padding: 0 0.25rem;
  box-shadow: inset 0 0 0 0 var(--clr-accent-400);
  transition:
    color var(--transition) ease-in-out,
    box-shadow var(--transition) ease-in-out;

  @media (hover) {
    &:hover {
      color: var(--clr-light);
      box-shadow: inset 200px 0 0 0 var(--clr-accent-400);
      transition:
        color var(--transition) ease-in-out,
        box-shadow var(--transition) ease-in-out;
    }
  }
`;
