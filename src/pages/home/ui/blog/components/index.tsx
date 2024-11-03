import { FC } from "react";

import { NEXT_PUBLIC_APP_URL } from "@/shared/config";
import { ICONS } from "@/shared/svgs";
import { CustomImage, Typography } from "@/shared/ui";
import { IArticle } from "@/utils/declarations";
import { useTranslation } from "next-i18next";

import * as S from "./article.styled";

export const ArticleCard: FC<IArticle> = (props) => {
  const { _id: id, createdAt, poster, minutesForReading, title, desc } = props;
  const { url, meta } = poster;

  const { t } = useTranslation("home");

  return (
    <li>
      <S.Image>
        <CustomImage src={`${NEXT_PUBLIC_APP_URL}${url}`} width="270" height="195" alt={meta.alt} quality={85} />
      </S.Image>
      <S.ArticleWrapper>
        <S.Info>
          {createdAt} | {minutesForReading}
        </S.Info>
        <Typography tag="h3" variant="h3">
          {title}
        </Typography>
        <Typography tag="p" variant="paragraph1">
          {desc}
        </Typography>
        <S.Button href={`/articles/${id}`}>
          {t("btn.readMore")}
          {ICONS.btnArrow}
        </S.Button>
      </S.ArticleWrapper>
    </li>
  );
};
