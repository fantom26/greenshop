import { useTranslation } from "next-i18next";

import { Filter } from "@/widgets/filter-list";
import useSWR from "swr";

export function Categories () {
  const { t } = useTranslation("home");
  const { data: categories = [] } = useSWR<string[]>("/categories");

  return (
    <Filter
      title={t("products.categoryTitle")}
      queryName="category"
      items={categories}
    />
  );
};
