import { Typography } from "@components/ui";
import { IMAGES } from "@constants";
import { useTranslation } from "@hooks";
import { ColorVariant, TagVariant } from "@utils/enums/components";

import { Email } from "./components/email";
import * as S from "./top.styled";

export const Top = () => {
  const t = useTranslation();

  return (
    <S.Top>
      <S.Advantages>
        {Object.entries(t.footer.advantages).map(([key, advantage]) => (
          <S.Advantage key={key}>
            <S.AdvatageImage>{IMAGES[key]}</S.AdvatageImage>
            <Typography tag="h2" variant={TagVariant.h4}>
              {advantage.title}
            </Typography>
            <Typography tag="p" variant={TagVariant.paragraph1} color={ColorVariant.grey}>
              {advantage.desc}
            </Typography>
          </S.Advantage>
        ))}
      </S.Advantages>
      <Email />
    </S.Top>
  );
};
