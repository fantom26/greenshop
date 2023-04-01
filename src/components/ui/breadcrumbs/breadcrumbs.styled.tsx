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
  align-items: center;
  gap: 1.5rem;

  ${Item}:first-child a {
    font-weight: 700;
  }
`;
