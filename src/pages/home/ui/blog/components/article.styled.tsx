import Link from "next/link";
import styled from "styled-components";

import { Typography } from "@/shared/ui/typography/typography.styled";

export const ArticleWrapper = styled.div`
  padding: 1rem 1.5rem;

  @media (max-width: 767px) {
    padding-right: initial;
    padding-left: initial;
  }
`;

export const Image = styled.div`
  display: flex;
  width: 100%;
  max-width: 27rem;

  img {
    @media (max-width: 767px) {
      width: 100%;
    }
  }

  @media (max-width: 767px) {
    max-width: initial;
  }
`;

export const Info = styled.p`
  margin-bottom: 0.5rem;
  color: var(--clr-accent-400);
  font-weight: var(--font-weight-medium);
  font-size: 1.4rem;
  line-height: 115%;

  & + ${Typography} {
    margin-bottom: 1rem;
  }
`;

export const Button = styled(Link)`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  margin-top: 1rem;
  font-weight: var(--font-weight-medium);
  font-size: 1.4rem;
  line-height: 115%;
  transition: color var(--transition);

  svg {
    transition: fill var(--transition), transform var(--transition);
    fill: var(--clr-dark);
  }

  @media (hover) {
    &:hover {
      color: var(--clr-accent-400);
      transition: color var(--transition);

      svg {
        transform: translateX(0.5rem);
        transition: fill var(--transition), transform var(--transition);
        fill: var(--clr-accent-400);
      }
    }
  }
`;
