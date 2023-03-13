import styled from "styled-components";

export const Products = styled.section`
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
`;

export const ProductsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5rem;

  @media (max-width: 1200px) {
    grid-gap: 2rem;
  }
`;
