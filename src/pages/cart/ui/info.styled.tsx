import styled from "styled-components";

export const Section = styled.section`
  padding-bottom: 9rem;

  @media (max-width: 767px) {
    padding-bottom: 4.5rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 8.5rem;
  justify-content: space-between;

  @media (max-width: 1200px) {
    gap: 3rem;
  }

  @media (max-width: 992px) {
    flex-direction: column;
  }
`;
