import { FC, HTMLAttributes, ReactNode } from "react";

import { ButtonVariant } from "@utils/enums/components";

import * as S from "./button.styled";

export interface ButtonProps extends HTMLAttributes<HTMLElement> {
  variant?: ButtonVariant;
  path?: string;
  uppercase?: boolean;
  isLoading?: boolean;
  endIcon?: ReactNode;
  startIcon?: ReactNode;
  children: ReactNode;
  target?: string;
}

export const Button: FC<ButtonProps> = (props) => {
  const { variant = ButtonVariant.solid, uppercase = false, endIcon = null, startIcon = null, isLoading, path, children, ...rest } = props;

  console.log(startIcon);

  if (path && endIcon) {
    return (
      <S.Hyperlink variant={variant} uppercase={uppercase} endIcon href={path} {...rest}>
        <span>{children}</span>
        <span>{endIcon}</span>
      </S.Hyperlink>
    );
  }

  if (path && startIcon) {
    return (
      <S.Hyperlink variant={variant} uppercase={uppercase} startIcon href={path} {...rest}>
        <span>{startIcon}</span>
        <span>{children}</span>
      </S.Hyperlink>
    );
  }

  if (path) {
    return (
      <S.Hyperlink variant={variant} uppercase={uppercase} href={path} {...rest}>
        <span>{children}</span>
      </S.Hyperlink>
    );
  }

  return (
    <S.Button variant={variant} uppercase={uppercase} disabled={isLoading} {...rest}>
      <span>{children}</span>
    </S.Button>
  );
};
