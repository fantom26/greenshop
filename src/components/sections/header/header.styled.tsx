import { Container } from "@components/ui/container/container.styled";
import styled from "styled-components";

export const Header = styled.header<{ menuIsOpen: boolean }>`
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
  z-index: 21;
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
    bottom: -2.5rem;
    left: 1.5rem;
    width: calc(100% - 3rem);
    height: 0.03rem;
    background-color: rgba(70, 163, 88, 0.5);
  }
`;

export const SearchWrapper = styled.div`
  max-width: 25rem;
  width: 100%;

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
