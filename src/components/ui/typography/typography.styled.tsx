import { AdaptiveFont } from "@helpers";
import styled, { css } from "styled-components";

import { StyledVariants } from "@declarations";
import { ColorVariant, TagVariant } from "@utils/enums/components";

import { TypographyProps } from ".";

const variants: StyledVariants<TagVariant> = {
  h1: css`
    font-weight: 900;
    ${AdaptiveFont({ pcSize: 70, mobSize: 40 })};
    line-height: 100%;
  `,
  h2: css`
    font-weight: 700;
    ${AdaptiveFont({ pcSize: 30, mobSize: 24 })};
    line-height: 85%;
  `,
  h3: css`
    font-weight: 700;
    ${AdaptiveFont({ pcSize: 20, mobSize: 18 })};
    line-height: 130%;
  `,
  h4: css`
    font-weight: 700;
    ${AdaptiveFont({ pcSize: 18, mobSize: 16 })};
    line-height: 90%;
  `,
  paragraph1: css`
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 155%;
  `
};

const colors: StyledVariants<ColorVariant> = {
  black: css`
    color: var(--clr-dark);
  `,
  grey: css`
    color: var(--clr-grey);
  `,
  green: css`
    color: var(--clr-accent);
  `
};

export const Typography = styled.div<TypographyProps>`
  ${({ uppercase }) =>
    uppercase &&
    `
    text-transform: uppercase;
  `}

  ${({ variant }) => variants[variant]}
  ${({ color }) => colors[color]}

  ${({ center }) =>
    center &&
    `
    text-align: center;
  `}
`;
