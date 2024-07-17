import styled from "styled-components";

export const Sidebar = styled.aside`
  width: 100%;
  max-width: 31rem;

  @media (max-width: 1200px) {
    max-width: 26rem;
  }

  @media (max-width: 767px) {
    display: none;
  }
`;

export const Filter = styled.div`
  padding: 2rem;
  background-color: #fbfbfb;

  @media (max-width: 1200px) {
    padding: 1rem;
  }
`;

export const Banner = styled.div`
  display: flex;
  max-width: 31rem;
`;
