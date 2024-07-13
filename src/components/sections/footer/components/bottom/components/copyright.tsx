import { useTranslation } from "next-i18next";

import { Typography } from "@components/ui";

import * as S from "./copyright.styled";

export const Copyright = () => {
  const { t } = useTranslation();

  return (
    <S.Copyright>
      <Typography tag="p" variant="paragraph1" center>
        {t("footer.copyright")}
      </Typography>
    </S.Copyright>
  );
};
