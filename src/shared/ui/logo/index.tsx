import { IMAGES } from "@/shared/svgs";

import * as S from "./logo.styled";

export function Logo() {
  return (
    <S.Logo href="/" aria-label="Go to the main page">
      {IMAGES.logo}
    </S.Logo>
  );
}
