import { FC } from "react";

import * as S from "./global-loader.styled";

export const GlobalLoader: FC = () => (
  <S.LoaderWrapper>
    <S.Corners>
      <S.Corner />
      <S.Corner />
      <S.Corner />
      <S.Corner />
    </S.Corners>
  </S.LoaderWrapper>
);
