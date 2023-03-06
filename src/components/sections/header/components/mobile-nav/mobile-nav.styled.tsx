import { animated } from "react-spring";
import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 4.5rem;
  padding: 18rem 1.5rem 7rem;
  width: 100%;
  height: 100%;
  box-shadow: var(--shadow);
  background-color: var(--clr-light);

  @media (max-width: 576px) {
    padding-top: 12rem;
  }
`;

export const SearchWrapper = styled(animated.div)`
  width: 100%;

  @media (min-width: 577px) {
    display: none;
  }
`;

export const List = styled(animated.ul)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  margin-bottom: auto;
`;

export const Link = styled.a<{ pathname: string }>`
  font-weight: ${({ href, pathname }) => (href === pathname ? 700 : 400)};
  font-size: 3.4rem;
`;

export const Nav = styled(animated.nav)`
  margin-bottom: auto;
`;
