import { Typography } from "@/shared/ui/typography/typography.styled";
import styled from "styled-components";

export const Top = styled.div`
  display: flex;
  gap: 4rem;
  align-items: center;
  justify-content: space-between;
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
  gap: 6rem;
  align-items: center;
  justify-content: space-between;

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
      position: absolute;
      top: 0;
      left: -3rem;
      width: 0.1rem;
      height: 100%;
      background-color: rgb(70 163 88 / 10%);
      content: "";

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
  max-width: 9rem;
  margin-bottom: 1.5rem;

  & + ${Typography} {
    margin-bottom: 1rem;
  }
`;
