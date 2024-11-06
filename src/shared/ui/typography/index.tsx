import { TypographyProps } from "./types";
import * as S from "./typography.styled";

export function Typography({
  tag: Tag = "div",
  variant = "div",
  color = "black",
  uppercase = false,
  center = false,
  children,
  ...rest
}: TypographyProps) {
  return (
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
}
