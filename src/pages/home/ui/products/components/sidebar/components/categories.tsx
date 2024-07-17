import { FC } from "react";

import { Filter } from "@/widgets/filter-list";
import { useTranslation } from "next-i18next";

import { useCategoriesQuery } from "@/store/api";

export const Categories: FC = () => {
  const { t } = useTranslation("home");
  const { data: categories = [] } = useCategoriesQuery();

  return <Filter title={t("products.categoryTitle")} queryName="category" items={categories} />;
};
