import { animated } from "react-spring";
import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 18rem 1.5rem 7rem;
  width: 100%;
  height: 100%;
  background-color: var(--clr-light);
  gap: 4.5rem;
  box-shadow: var(--shadow);

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
  margin-bottom: auto;
  gap: 3rem;
`;

export const Link = styled.a<{ pathname: string }>`
  font-weight: ${({ href, pathname }) => (href === pathname ? 700 : 400)};
  font-size: 3.4rem;
`;

export const Nav = styled(animated.nav)`
  margin-bottom: auto;
`;
