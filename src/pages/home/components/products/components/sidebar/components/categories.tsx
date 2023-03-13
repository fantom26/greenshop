import { FC } from "react";

import { Filter } from "@components/common";
import { useTranslation } from "@hooks";
import { useCategoriesQuery } from "@store/api";

export const Categories: FC = () => {
  const t = useTranslation();
  const { data: categories } = useCategoriesQuery();

  return <Filter title={t.pages.home.products.categoryTitle} queryName="category" items={categories} />;
};
