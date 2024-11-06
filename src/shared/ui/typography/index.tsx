import { ElementType, FC, HTMLAttributes } from "react";

import * as S from "./typography.styled";

export type TypographyColors = "black" | "grey" | "green";
export type TypographyVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "paragraph1"
  | "div";

export interface TypographyProps extends HTMLAttributes<HTMLOrSVGElement> {
  tag?: ElementType;
  variant: TypographyVariant;
  uppercase?: boolean;
  center?: boolean;
  color?: TypographyColors;
  classNames?: string;
  children?: string;
}

export const Typography: FC<TypographyProps> = ({
  tag: Tag = "div",
  variant = "div",
  color = "black",
  uppercase = false,
  center = false,
  children,
  ...rest
}) => (
    <S.Typography
      as={Tag}
      variant={variant}
      color={color}
      uppercase={uppercase}
      center={center}
      {...rest}
    >
      {children}
    </S.Typography>
  );
