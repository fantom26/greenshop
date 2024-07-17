import { DateManager } from "@/managers";
import { Typography } from "@/shared/ui";
import { useTranslation } from "next-i18next";

import * as S from "./copyright.styled";

export const Copyright = () => {
  const { t } = useTranslation("footer");

  return (
    <S.Copyright>
      <Typography tag="p" variant="paragraph1" center>
        {t("copyright", { year: DateManager.getCurrentDate() })}
      </Typography>
    </S.Copyright>
  );
};
