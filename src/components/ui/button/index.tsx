import { ButtonVariant } from "@utils/enums/components";
import { FC, HTMLAttributes, ReactNode } from "react";
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
  const {
    variant = ButtonVariant.solid,
    uppercase = false,
    endIcon = null,
    startIcon = null,
    isLoading,
    path,
    children,
    ...rest
  } = props;

  console.log(startIcon);

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

  return (
    <S.Button variant={variant} disabled={isLoading} {...rest}>
      <span>{children}</span>
    </S.Button>
  );
};
