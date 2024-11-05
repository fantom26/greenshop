import { Container } from "@/shared/ui/container/container.styled";
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
`;

export const HeaderContainer = styled(Container)`
  position: relative;

  &::before {
    position: absolute;
    bottom: -2.5rem;
    left: 1.5rem;
    width: calc(100% - 3rem);
    height: 0.03rem;
    background-color: rgb(70 163 88 / 50%);
    content: "";
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
