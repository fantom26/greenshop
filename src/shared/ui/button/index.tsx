import { ButtonProps } from "@/shared/ui/button/types";

import * as S from "./button.styled";

export function Button({
  variant = "outline",
  endIcon = null,
  startIcon = null,
  isLoading,
  path,
  children,
  ...rest
}: Partial<ButtonProps>) {
  if (path && endIcon) {
    return (
      <S.Hyperlink variant={variant} endIcon href={path} {...rest}>
        <span>{children}</span>
        <span>{endIcon}</span>
      </S.Hyperlink>
    );
  }

  if (path && startIcon) {
    return (
      <S.Hyperlink variant={variant} startIcon href={path} {...rest}>
        <span>{startIcon}</span>
        <span>{children}</span>
      </S.Hyperlink>
    );
  }

  if (path) {
    return (
      <S.Hyperlink variant={variant} href={path} {...rest}>
        <span>{children}</span>
      </S.Hyperlink>
    );
  }

  if (startIcon) {
    return (
      <S.Button variant={variant} startIcon disabled={isLoading} {...rest}>
        <span>{startIcon}</span>
      </S.Button>
    );
  }

  return (
    <S.Button variant={variant} disabled={isLoading} {...rest}>
      <span>{children}</span>
    </S.Button>
  );
}
