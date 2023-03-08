import { Container, Typography } from "@components/ui";
import { useTranslation } from "@hooks";
import { useArticlesQuery } from "@store/api";
import { ColorVariant, TagVariant } from "@utils/enums/components";

import * as S from "./blog.styled";
import { ArticleCard } from "./components";

export const Blog = () => {
  const t = useTranslation();

  const { data: articles } = useArticlesQuery();

  return (
    <S.Blog>
      <Container>
        <Typography tag="h2" variant={TagVariant.h2} center>
          {t.pages.home.blog.title}
        </Typography>
        <Typography tag="p" variant={TagVariant.paragraph1} center color={ColorVariant.grey}>
          {t.pages.home.blog.description}
        </Typography>
        <S.Articles>
          {articles?.map((article) => (
            <ArticleCard key={article._id} {...article} />
          ))}
        </S.Articles>
      </Container>
    </S.Blog>
  );
};
