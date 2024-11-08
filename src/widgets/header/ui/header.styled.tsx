import styled from "styled-components";

export const Header = styled.header<{ menuIsOpen: boolean }>`
  z-index: 21;
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

export const SearchWrapper = styled.div`
  width: 100%;
  max-width: 25rem;

  @media (max-width: 992px) {
    margin-left: auto;
  }

  @media (max-width: 576px) {
    display: none;
  }
`;

export const ButtonWrapper = styled.div`
  min-width: 10rem;

  @media (max-width: 992px) {
    display: none;
  }
`;
