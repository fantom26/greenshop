import Link from "next/link";

import styled from "styled-components";

import { Typography } from "@components/ui/typography/typography.styled";

export const Total = styled.div`
  width: 100%;
  max-width: 34rem;

  @media (max-width: 992px) {
    max-width: initial;
  }
`;

export const Header = styled.div`
  position: relative;
  margin-bottom: 1.5rem;
  padding-block: 1rem;

  &::before {
    position: absolute;
    content: "";
    left: 0;
    bottom: 0;
    width: 100%;
    height: 0.1rem;
    background-color: rgba(70, 163, 88, 0.5);
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 3rem;
`;

export const Item = styled.li<{ titleBold?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  ${({ titleBold }) =>
    titleBold &&
    `
    margin-top: 2rem;
    p:first-child {
      font-weight: 700;
    }

    ${Typography} {
      color: var(--clr-accent);
    }
  `}
`;

export const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
`;

export const NextLink = styled(Link)`
  display: inline-block;
  margin: 0 -0.25rem;
  padding: 0 0.25rem;
  color: var(--clr-accent);
  box-shadow: inset 0 0 0 0 var(--clr-accent);
  transition: color var(--transition) ease-in-out, box-shadow var(--transition) ease-in-out;

  @media (hover) {
    &:hover {
      box-shadow: inset 200px 0 0 0 var(--clr-accent);
      color: var(--clr-light);
      transition: color var(--transition) ease-in-out, box-shadow var(--transition) ease-in-out;
    }
  }
`;
