import { IArticle } from "@/utils/declarations";
import { useTranslation } from "next-i18next";

import { ICONS } from "@/shared/svgs";
import { CustomImage, Typography } from "@/shared/ui";

import * as S from "./article.styled";

export function ArticleCard({
  _id: id,
  createdAt,
  poster,
  minutesForReading,
  title,
  desc
}: IArticle) {
  const { url, meta } = poster;

  const { t } = useTranslation("home");

  return (
    <li>
      <S.Image>
        <CustomImage
          src={url}
          width="270"
          height="195"
          alt={meta.alt}
          quality={85}
        />
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
}
