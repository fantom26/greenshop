import { FC, ReactNode } from "react";
import * as S from "./container.styled";

export const Container: FC<{ children: ReactNode }> = ({ children }) => (
  <S.Container>{children}</S.Container>
);
