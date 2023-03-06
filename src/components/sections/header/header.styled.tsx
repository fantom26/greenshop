import styled from "styled-components";

import { Container } from "@components/ui/container/container.styled";

export const Header = styled.header<{ menuIsOpen: boolean }>`
  z-index: 21;
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
`;

export const HeaderContainer = styled(Container)`
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 1.5rem;
    bottom: -2.5rem;
    width: calc(100% - 3rem);
    height: 0.03rem;
    background-color: rgb(70 163 88 / 50%);
  }
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
