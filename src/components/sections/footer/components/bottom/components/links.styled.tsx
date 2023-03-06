import Link from "next/link";

import styled from "styled-components";

export const Groups = styled.ul`
  display: flex;
  gap: 14rem;
`;

export const Links = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 1.5rem;
`;

export const NextLink = styled(Link)`
  display: inline-block;
  margin: 0 -.25rem;
  padding: 0 .25rem;
  box-shadow: inset 0 0 0 0 var(--clr-accent);
  transition: color var(--transition) ease-in-out, box-shadow var(--transition) ease-in-out;

  &:hover {
    box-shadow: inset 200px 0 0 0 var(--clr-accent);
    color: var(--clr-light);
    transition: color var(--transition) ease-in-out, box-shadow var(--transition) ease-in-out;
  }
`;
