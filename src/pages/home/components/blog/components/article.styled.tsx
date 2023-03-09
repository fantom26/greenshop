import Link from "next/link";

import styled from "styled-components";

import { Typography } from "@components/ui/typography/typography.styled";

export const ArticleWrapper = styled.div`
  padding: 1rem 1.5rem;

  @media (max-width: 767px) {
    padding-left: initial;
    padding-right: initial;
  }
`;

export const Image = styled.div`
  display: flex;
  max-width: 27rem;
  width: 100%;

  @media (max-width: 767px) {
    max-width: initial;
  }

  img {
    @media (max-width: 767px) {
      width: 100%;
    }
  }
`;

export const Info = styled.p`
  margin-bottom: 0.5rem;
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 115%;
  color: var(--clr-accent);

  & + ${Typography} {
    margin-bottom: 1rem;
  }
`;

export const Button = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;

  font-weight: 500;
  font-size: 1.4rem;
  line-height: 115%;
  transition: color var(--transition);

  svg {
    fill: var(--clr-dark);
    transition: fill var(--transition), transform var(--transition);
  }
  @media (hover) {
    &:hover {
      color: var(--clr-accent);
      transition: color var(--transition);

      svg {
        fill: var(--clr-accent);
        transform: translateX(0.5rem);
        transition: fill var(--transition), transform var(--transition);
      }
    }
  }
`;
