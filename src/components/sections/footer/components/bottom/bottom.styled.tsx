import styled from "styled-components";

export const Bottom = styled.div`
  padding-top: 3rem;
  padding-bottom: 1.5rem;
`;

export const BottomWrapper = styled.div`
  display: flex;
  gap: 17rem;
  padding-right: 2.5rem;
  padding-left: 2.5rem;

  @media (max-width: 1200px) {
    gap: 10rem;
  }

  @media (max-width: 992px) {
    justify-content: space-between;
    gap: 5rem;
    padding-right: 1.5rem;
    padding-left: 1.5rem;
  }

  @media (max-width: 767px) {
    flex-direction: column;
    padding-right: initial;
    padding-left: initial;
  }

  @media (max-width: 576px) {
    gap: 3rem;
  }
`;
