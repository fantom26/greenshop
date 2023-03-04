import { StyledVariants } from "@declarations";
import { ButtonVariant } from "@utils/enums/components";
import Link from "next/link";
import styled, { css } from "styled-components";
import { ButtonProps } from ".";

const variants: StyledVariants<ButtonVariant> = {
  solid: css`
    color: var(--clr-light);
    background-color: var(--clr-accent);
  `,
  outline: css`
    border: 0.1rem solid var(--clr-accent);
    color: var(--clr-accent);
    background-color: var(--clr-light);
  `,
};

// TODO dublicated styles. Search solution
export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  width: max-content;
  min-height: 3.8rem;
  font-weight: 700;
  border-radius: 0.6rem;
  width: 100%;

  ${({ variant }) => variants[variant]}

  ${({ uppercase }) => uppercase && `text-transform: uppercase;`};
  ${({ endIcon, startIcon }) => (endIcon || startIcon) && `gap: 0.5rem`};

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
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  width: max-content;
  min-height: 3.8rem;
  font-weight: 700;
  border-radius: 0.6rem;
  width: 100%;

  ${({ variant }) => variants[variant]}

  ${({ uppercase }) => uppercase && `text-transform: uppercase;`};
  ${({ endIcon, startIcon }) => (endIcon || startIcon) && `gap: 0.5rem`};

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
