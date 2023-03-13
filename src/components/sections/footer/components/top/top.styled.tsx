import styled from "styled-components";

import { Typography } from "@components/ui/typography/typography.styled";

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;
  padding: 3rem 2.5rem;

  @media (max-width: 992px) {
    flex-direction: column;
    align-items: initial;
    padding-right: 1.5rem;
    padding-left: 1.5rem;
  }

  @media (max-width: 767px) {
    padding-left: initial;
  }
`;

export const Advantages = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6rem;

  @media (max-width: 1200px) {
    gap: 3rem;
  }

  @media (max-width: 767px) {
    display: grid;
    grid-gap: 3rem;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 460px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Advantage = styled.li`
  & + & {
    position: relative;

    &::before {
      content: "";
      position: absolute;
      left: -3rem;
      top: 0;
      width: 0.1rem;
      height: 100%;
      background-color: rgba(70, 163, 88, 0.1);

      @media (max-width: 1200px) {
        left: -1.5rem;
      }

      @media (max-width: 767px) {
        display: none;
      }
    }
  }
`;

export const AdvatageImage = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
  max-width: 9rem;

  & + ${Typography} {
    margin-bottom: 1rem;
  }
`;
