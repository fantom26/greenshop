import { FC } from "react";


import * as S from "./logo.styled";
import { IMAGES } from "@/shared/svgs";

export const Logo: FC = () => (
  <S.Logo href="/" aria-label="Go to the main page">
    {IMAGES.logo}
  </S.Logo>
);
