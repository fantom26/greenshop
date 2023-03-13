import styled from "styled-components";

export const PriceRange = styled.div`
  margin-top: 3.5rem;
  margin-bottom: 2rem;
`;

export const SliderWrapper = styled.div`
  margin-top: 2rem;
  padding-left: 1.5rem;
  max-width: 21rem;

  @media (max-width: 767px) {
    padding-left: initial;
    max-width: calc(100% - 1rem);
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
    font-weight: 700;
    color: var(--clr-accent);
  }
`;

export const ButtonWrapper = styled.div`
  margin-top: 1.5rem;
  padding-left: 1.5rem;
  max-width: 9rem;

  @media (max-width: 767px) {
    padding-left: initial;
    max-width: initial;
  }
`;
