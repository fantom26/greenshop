import { FC } from "react";

import * as S from "./loader.styled";

export const Loader: FC = () => (
  <S.LoaderWrapper>
    <S.Spinner>
      <S.Circle>
        <S.Leaft />
      </S.Circle>

      <S.Circle>
        <S.Leaft />
      </S.Circle>

      <S.Circle>
        <S.Leaft />
      </S.Circle>

      <S.Circle>
        <S.Leaft />
      </S.Circle>

      <S.Circle>
        <S.Leaft />
      </S.Circle>

      <S.Circle>
        <S.Leaft />
      </S.Circle>

      <S.Circle>
        <S.Leaft />
      </S.Circle>

      <S.Circle>
        <S.Leaft />
      </S.Circle>
    </S.Spinner>
  </S.LoaderWrapper>
);
