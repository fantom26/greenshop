import styled from "styled-components";

import { Typography } from "@components/ui/typography/typography.styled";

export const Blog = styled.section`
  padding-top: 14rem;
  padding-bottom: 11rem;

  @media (max-width: 767px) {
    padding-top: 7rem;
    padding-bottom: 5.5rem;
  }

  ${Typography}:first-child {
    margin-bottom: 1.5rem;
  }
`;

export const Articles = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 4.5rem;
  margin-top: 3.5rem;

  @media (max-width: 1200px) {
    grid-gap: 1.5rem;
  }

  @media (max-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 460px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
