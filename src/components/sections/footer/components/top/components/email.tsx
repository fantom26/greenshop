import { Typography } from "@components/ui";
import { useTranslation } from "@hooks";
import { ColorVariant, TagVariant } from "@utils/enums/components";

import * as S from "./email.styled";
import { EmailForm } from "./form";

export const Email = () => {
  const t = useTranslation();

  return (
    <S.EmailWrapper>
      <Typography tag="h2" variant={TagVariant.h3}>
        {t.footer.newsLetters as string}
      </Typography>

      <EmailForm />
      <Typography tag="p" variant={TagVariant.paragraph1} color={ColorVariant.grey}>
        {t.footer.newsLettersDesc as string}
      </Typography>
    </S.EmailWrapper>
  );
};
