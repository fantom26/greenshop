import { Typography } from "@components/ui";
import { useTranslation } from "@hooks";
import { ColorVariant, TagVariant } from "@utils/enums/components";

export const Email = () => {
  const t = useTranslation();

  return (
    <div>
      <Typography tag="h2" variant={TagVariant.h3}>
        {t.footer.newsLetters}
      </Typography>

      <Typography tag="p" variant={TagVariant.paragraph1} color={ColorVariant.grey}>
        {t.footer.newsLettersDesc}
      </Typography>
    </div>
  );
};
