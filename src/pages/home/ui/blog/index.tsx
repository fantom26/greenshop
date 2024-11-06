import { useArticlesQuery } from "@/store/api";
import { useTranslation } from "next-i18next";

import { Container, Typography } from "@/shared/ui";

import * as S from "./blog.styled";
import { ArticleCard } from "./components";

export function Blog() {
  const { t } = useTranslation("home");

  const { data: articles } = useArticlesQuery();

  return (
    <S.Blog>
      <Container>
        <Typography tag="h2" variant="h2" center>
          {t("blog.title")}
        </Typography>
        <Typography tag="p" variant="paragraph1" center color="grey">
          {t("blog.description")}
        </Typography>
        <S.Articles>
          {articles?.map((article) => (
            <ArticleCard key={article._id} {...article} />
          ))}
        </S.Articles>
      </Container>
    </S.Blog>
  );
}
