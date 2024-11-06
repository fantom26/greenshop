import { FC } from "react";

import { useCategoriesQuery } from "@/store/api";
import { useTranslation } from "next-i18next";

import { Filter } from "@/widgets/filter-list";

export const Categories: FC = () => {
  const { t } = useTranslation("home");
  const { data: categories = [] } = useCategoriesQuery();

  return (
    <Filter
      title={t("products.categoryTitle")}
      queryName="category"
      items={categories}
    />
  );
};
