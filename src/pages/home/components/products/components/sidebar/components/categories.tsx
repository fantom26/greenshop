import { FC } from "react";

import { useTranslation } from "@hooks";
import { useCategoriesQuery } from "@store/api";

import { Filter } from "./filter-list";

export const Categories: FC = () => {
  const t = useTranslation();
  const { data: categories } = useCategoriesQuery();

  return <Filter title={t.pages.home.products.categoryTitle} queryName="category" items={categories} />;
};
