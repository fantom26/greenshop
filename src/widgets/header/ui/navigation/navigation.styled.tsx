import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  align-self: stretch;
`;

export const List = styled.ul`
  display: flex;
  gap: 5rem;
  align-items: center;
  align-self: stretch;

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
  position: relative;
  display: flex;
  align-items: center;
  align-self: stretch;
  font-weight: ${({ href, pathname }) =>
    href === pathname
      ? "var(--font-weight-bold)"
      : "var(--font-weight-regular)"};

  &::before {
    position: absolute;
    bottom: -2rem;
    left: 0;
    width: 100%;
    height: 0.3rem;
    background-color: var(--clr-accent-400);
    visibility: ${({ href, pathname }) =>
      href === pathname ? "visible" : "hidden"};
    opacity: ${({ href, pathname }) => (href === pathname ? 1 : 0)};
    content: "";
  }
`;
