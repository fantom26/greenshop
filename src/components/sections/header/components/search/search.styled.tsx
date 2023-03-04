import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 25rem;
  width: 100%;

  @media (max-width: 992px) {
    margin-left: auto;
  }

  @media (max-width: 576px) {
    display: none;
  }
`;
