import { ElementType, FC, HTMLAttributes } from "react";

import { ColorVariant, TagVariant } from "@utils/enums/components";

import * as S from "./typography.styled";

export interface TypographyProps extends HTMLAttributes<HTMLOrSVGElement> {
  tag?: ElementType;
  variant?: TagVariant;
  uppercase?: boolean;
  center?: boolean;
  color?: ColorVariant;
  classNames?: string;
  children?: string;
}

export const Typography: FC<TypographyProps> = (props) => {
  const { tag: Tag = "div", variant = TagVariant.div, color = ColorVariant.black, uppercase = false, center = false, children, ...rest } = props;

  return (
    <S.Typography as={Tag} variant={variant} color={color} uppercase={uppercase} center={center} {...rest}>
      {children}
    </S.Typography>
  );
};
