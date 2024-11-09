import { HTMLAttributes, ReactNode } from "react";

export type BtnVariant = "solid" | "outline";

export interface ButtonProps extends HTMLAttributes<HTMLElement> {
  variant: BtnVariant;
  path?: string;
  uppercase?: boolean;
  isLoading?: boolean;
  endIcon?: ReactNode;
  startIcon?: ReactNode;
  children: ReactNode;
}
