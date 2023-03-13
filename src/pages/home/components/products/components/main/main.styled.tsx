import styled from "styled-components";

import { Sort } from "./components/sort/sort.styled";

export const Main = styled.div`
  width: 100%;
  max-width: 84rem;
`;
export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  margin-bottom: 3rem;

  ${Sort} {
    @media (max-width: 767px) {
      display: none;
    }
  }

  @media (max-width: 767px) {
    margin-bottom: 1.5rem;
  }
`;

export const WrapperQueries = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`;

export const Content = styled.div`
  position: relative;
  padding-top: 2.5rem;

  &::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 0;
    width: 26rem;
    height: 0.1rem;
    background-color: var(--clr-accent);
    transform: translateX(-50%);
  }
`;

export const List = styled.ul`
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 1200px) {
    grid-gap: 2.5rem;
  }

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 9rem;
`;
