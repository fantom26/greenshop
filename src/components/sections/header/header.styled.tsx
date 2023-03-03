import { Container } from "@components/ui/container/container.styled";
import styled from "styled-components";

export const Header = styled.header`
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
    bottom: -2.5rem;
    left: 0;
    width: 100%;
    height: 0.03rem;
    background-color: rgba(70, 163, 88, 0.5);
  }
`;
