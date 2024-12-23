import { useTranslation } from "next-i18next";

import { Typography } from "@/shared/ui";

import * as S from "./email.styled";
import { EmailForm } from "./form";

export function Email() {
  const { t } = useTranslation("footer");

  return (
    <S.EmailWrapper>
      <Typography tag="h2" variant="h3">
        {t("newsLetters")}
      </Typography>

      <EmailForm />
      <Typography tag="p" variant="paragraph1" color="grey">
        {t("newsLettersDesc")}
      </Typography>
    </S.EmailWrapper>
  );
}
