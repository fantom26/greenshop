import { useTranslation } from "next-i18next";

import { Typography } from "@components/ui";
import { TagVariant } from "@utils/enums/components";

import * as S from "./copyright.styled";

export const Copyright = () => {
  const { t } = useTranslation();

  return (
    <S.Copyright>
      {/* TODO remove TagVariant */}
      <Typography tag="p" variant={TagVariant.paragraph1} center>
        {t("footer.copyright")}
      </Typography>
    </S.Copyright>
  );
};
