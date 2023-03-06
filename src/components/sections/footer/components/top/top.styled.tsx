import styled from "styled-components";

import { Typography } from "@components/ui/typography/typography.styled";

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;
  padding-top: 3rem;
  padding-bottom: 3rem;
  padding-left: 2.5rem;
`;

export const Advantages = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6rem;
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
