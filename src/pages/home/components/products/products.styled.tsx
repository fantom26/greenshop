import styled from "styled-components";

export const Products = styled.section`
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
`;

export const ProductsWrapper = styled.div`
  display: flex;
  gap: 5rem;
  justify-content: space-between;

  @media (max-width: 1200px) {
    grid-gap: 2rem;
  }
`;
