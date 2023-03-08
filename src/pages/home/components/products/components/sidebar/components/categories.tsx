import { Typography } from "@components/ui";
import { useTranslation } from "@hooks";
import { useCategoriesQuery } from "@store/api";
import { TagVariant } from "@utils/enums/components";

import * as S from "./categories.styled";

export const Categories = () => {
  const t = useTranslation();
  const { data: categories } = useCategoriesQuery();

  return (
    <>
      <Typography tag="h3" variant={TagVariant.h4}>
        {t.pages.home.products.categoryTitle as string}
      </Typography>
      <S.List>
        {categories?.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </S.List>
    </>
  );
};
