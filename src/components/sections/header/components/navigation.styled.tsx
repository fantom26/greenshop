import styled, { css } from "styled-components";
import Link from "next/link";
import { AdaptiveFont } from "@helpers";

export const NavigationList = styled.ul`
  display: flex;
  align-items: center;
  gap: 5rem;
`;

export const LinkText = styled.a<{ pathname: string }>`
  font-weight: ${(props) => (props.href === props.pathname ? 700 : 400)};
  position: relative;

  &::before {
    position: absolute;
    content: "";
    left: 0;
    bottom: -3.6rem;
    width: 100%;
    height: 0.3rem;
    background-color: var(--clr-accent);
    opacity: ${(props) => (props.href === props.pathname ? 1 : 0)};
    visibility: ${(props) =>
      props.href === props.pathname ? "visible" : "hidden"};
  }
`;
