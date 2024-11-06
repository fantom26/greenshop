import { ElementType, HTMLAttributes } from "react";

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