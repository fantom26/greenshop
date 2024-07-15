import { StyledVariants } from "@/utils/declarations";
import Link from "next/link";
import styled, { css } from "styled-components";

import { BtnVariant, ButtonProps } from ".";

const variants: StyledVariants<BtnVariant> = {
  solid: css`
    color: var(--clr-light);
    background-color: var(--clr-accent-400);
  `,
  outline: css`
    border: 0.1rem solid var(--clr-accent-400);
    color: var(--clr-accent-400);
    background-color: var(--clr-light);
  `
};

const CommonStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 4rem;
  padding-right: 1.5rem;
  padding-left: 1.5rem;
  border-radius: 0.6rem;
  font-weight: var(--font-weight-bold);
`;

// TODO dublicated styles. Search solution
export const Button = styled.button<ButtonProps>`
  ${CommonStyles}

  ${({ variant }) => variants[variant]}

  ${({ uppercase }) => uppercase && "text-transform: uppercase;"};
  ${({ endIcon, startIcon }) => (endIcon || startIcon) && "gap: 0.5rem"};

  ${({ endIcon }) =>
    endIcon &&
    `
    span:last-child {
      display: flex;
    }
  `}

  ${({ startIcon }) =>
    startIcon &&
    `
    span:first-child {
      display: flex;
    }
  `}
`;

export const Hyperlink = styled(Link)<ButtonProps>`
  ${CommonStyles}

  ${({ variant }) => variants[variant]}

  ${({ uppercase }) => uppercase && "text-transform: uppercase;"};
  ${({ endIcon, startIcon }) => (endIcon || startIcon) && "gap: 0.5rem"};

  ${({ endIcon }) =>
    endIcon &&
    `
    span:last-child {
      display: flex;
    }
  `}

  ${({ startIcon }) =>
    startIcon &&
    `
    span:first-child {
      display: flex;
    }
  `}
`;
