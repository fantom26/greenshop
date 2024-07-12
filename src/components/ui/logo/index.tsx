import { FC } from "react";

import { IMAGES } from "@/utils/constants";
import { useTranslation } from "@hooks";

import * as S from "./logo.styled";

export const Logo: FC = () => {
  const t = useTranslation();

  return (
    <S.Logo href="/" aria-label={t.alts.goToMain}>
      {IMAGES.logo}
    </S.Logo>
  );
};
