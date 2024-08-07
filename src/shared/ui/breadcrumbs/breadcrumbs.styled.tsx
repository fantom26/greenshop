import styled from "styled-components";

export const Item = styled.li<{ last: boolean }>``;

export const Breadcrumbs = styled.div`
  margin-top: 3.5rem;
  margin-bottom: 4.5rem;

  @media (max-width: 767px) {
    margin-top: 3rem;
    margin-bottom: 3rem;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  align-items: center;

  ${Item}:first-child a {
    font-weight: var(--font-weight-bold);
  }
`;
