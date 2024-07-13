import styled from "styled-components";

export const PriceRange = styled.div`
  margin-top: 3.5rem;
  margin-bottom: 2rem;

  @media (max-width: 767px) {
    margin-block: initial;
  }
`;

export const SliderWrapper = styled.div`
  max-width: 21rem;
  margin-top: 2rem;
  padding-left: 1.5rem;

  @media (max-width: 767px) {
    max-width: calc(100% - 1rem);
    padding-left: initial;
  }
`;

export const SelectedPrice = styled.p`
  margin-top: 1.5rem;
  padding-left: 1.5rem;
  font-size: 1.5rem;
  line-height: 110%;

  span {
    display: inline-block;
    margin-left: 0.5rem;
    color: var(--clr-accent-400);
    font-weight: 700;
  }
`;

export const ButtonWrapper = styled.div`
  max-width: 9rem;
  margin-top: 1.5rem;
  padding-left: 1.5rem;

  @media (max-width: 767px) {
    max-width: initial;
    padding-left: initial;
  }
`;
