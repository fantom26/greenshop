import { StyledVariants } from "@/utils/declarations";
import { AdaptiveFont } from "@/utils/helpers";
import styled, { css } from "styled-components";

import { TypographyColors, TypographyProps, TypographyVariant } from ".";

const variants: StyledVariants<TypographyVariant> = {
  h1: css`
    font-weight: var(--font-weight-black);
    ${AdaptiveFont({ pcSize: 70, mobSize: 40 })};

    line-height: 100%;
  `,
  h2: css`
    font-weight: var(--font-weight-bold);
    ${AdaptiveFont({ pcSize: 30, mobSize: 24 })};

    line-height: 85%;
  `,
  h3: css`
    font-weight: var(--font-weight-bold);
    ${AdaptiveFont({ pcSize: 20, mobSize: 18 })};

    line-height: 130%;
  `,
  h4: css`
    font-weight: var(--font-weight-bold);
    ${AdaptiveFont({ pcSize: 18, mobSize: 16 })};

    line-height: 90%;
  `,
  paragraph1: css`
    font-weight: var(--font-weight-regular);
    font-size: 1.4rem;
    line-height: 155%;
  `
};

const colors: StyledVariants<TypographyColors> = {
  black: css`
    color: var(--clr-dark);
  `,
  grey: css`
    color: var(--clr-grey);
  `,
  green: css`
    color: var(--clr-accent-400);
  `
};

export const Typography = styled.div<TypographyProps>`
  ${({ uppercase }) =>
    uppercase &&
    `
    text-transform: uppercase;
  `}

  ${({ variant }) => variants[variant]}
  ${({ color = "black" }) => colors[color]}

  ${({ center }) =>
    center &&
    `
    text-align: center;
  `}
`;
