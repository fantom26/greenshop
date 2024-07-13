import { useTranslation } from "next-i18next";

import { Typography } from "@components/ui";
import { ColorVariant, TagVariant } from "@utils/enums/components";

import * as S from "./email.styled";
import { EmailForm } from "./form";

export const Email = () => {
  const { t } = useTranslation();

  return (
    <S.EmailWrapper>
      <Typography tag="h2" variant={TagVariant.h3}>
        {t("footer.newsLetters")}
      </Typography>

      <EmailForm />
      <Typography tag="p" variant={TagVariant.paragraph1} color={ColorVariant.grey}>
        {t("footer.newsLettersDesc")}
      </Typography>
    </S.EmailWrapper>
  );
};
