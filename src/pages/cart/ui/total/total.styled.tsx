import Link from "next/link";

import styled from "styled-components";

import { Typography } from "@/shared/ui/typography/typography.styled";

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
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.1rem;
    background-color: rgb(70 163 88 / 50%);
    content: "";
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
      font-weight: var(--font-weight-bold);
    }

    ${Typography} {
      color: var(--clr-accent-400);
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
  color: var(--clr-accent-400);
  box-shadow: inset 0 0 0 0 var(--clr-accent-400);
  transition: color var(--transition) ease-in-out, box-shadow var(--transition) ease-in-out;

  @media (hover) {
    &:hover {
      color: var(--clr-light);
      box-shadow: inset 200px 0 0 0 var(--clr-accent-400);
      transition: color var(--transition) ease-in-out, box-shadow var(--transition) ease-in-out;
    }
  }
`;
