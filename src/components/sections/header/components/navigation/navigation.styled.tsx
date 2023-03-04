import styled, { css } from "styled-components";

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  align-self: stretch;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  align-self: stretch;
  gap: 5rem;

  @media (max-width: 1200px) {
    gap: 2rem;
  }

  @media (max-width: 992px) {
    display: none;
  }
`;

export const Li = styled.li`
  display: flex;
  align-items: center;
  align-self: stretch;
`;

export const Link = styled.a<{ pathname: string }>`
  font-weight: ${({ href, pathname }) => (href === pathname ? 700 : 400)};
  position: relative;
  display: flex;
  align-items: center;
  align-self: stretch;

  &::before {
    position: absolute;
    content: "";
    left: 0;
    bottom: -2.5rem;
    width: 100%;
    height: 0.3rem;
    background-color: var(--clr-accent);
    opacity: ${({ href, pathname }) => (href === pathname ? 1 : 0)};
    visibility: ${({ href, pathname }) =>
      href === pathname ? "visible" : "hidden"};
  }
`;
