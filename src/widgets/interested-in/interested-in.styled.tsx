import styled from "styled-components";

export const Section = styled.section`
  padding-bottom: 13rem;

  @media (max-width: 767px) {
    padding-bottom: 6.5rem;
  }
`;

export const Top = styled.div`
  position: relative;
  margin-bottom: 6.5rem;
  padding-block: 1rem;

  &::before {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.1rem;
    background-color: rgb(70 163 88 / 50%);
    content: "";
  }
`;
