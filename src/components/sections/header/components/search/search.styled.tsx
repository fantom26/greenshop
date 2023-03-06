import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 25rem;

  @media (max-width: 992px) {
    margin-left: auto;
  }

  @media (max-width: 576px) {
    display: none;
  }
`;
