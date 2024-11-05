import { FC } from "react";

import { IMAGES } from "@/shared/svgs";

import * as S from "./logo.styled";

export const Logo: FC = () => (
  <S.Logo href="/" aria-label="Go to the main page">
    {IMAGES.logo}
  </S.Logo>
);
