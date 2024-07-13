import { IMAGES } from "@/utils/constants";
import { useTranslation } from "next-i18next";

import { Typography } from "@components/ui";

import { Email } from "./components/email";
import * as S from "./top.styled";

export const Top = () => {
  const { t } = useTranslation();

  const advantages = t("footer.advantages", { returnObjects: true });

  return (
    <S.Top>
      <S.Advantages>
        {Object.entries(advantages).map(([key, advantage]) => (
          <S.Advantage key={key}>
            <S.AdvatageImage>{IMAGES[key]}</S.AdvatageImage>
            <Typography tag="h2" variant="h4">
              {advantage.title}
            </Typography>
            <Typography tag="p" variant="paragraph1" color="grey">
              {advantage.desc}
            </Typography>
          </S.Advantage>
        ))}
      </S.Advantages>
      <Email />
    </S.Top>
  );
};
