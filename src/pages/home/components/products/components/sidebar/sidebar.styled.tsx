import styled from "styled-components";

export const Sidebar = styled.aside`
  padding: 1.5rem 2rem;
  width: 100%;
  max-width: 31rem;
  background-color: #fbfbfb;

  @media (max-width: 1200px) {
    padding: 1rem;
    max-width: 26rem;
  }

  @media (max-width: 767px) {
    display: none;
  }
`;
