import { useTranslation } from "next-i18next";
import useSWR from "swr";

import { Filter } from "@/widgets/filter-list";

export function Categories() {
  const { t } = useTranslation("home");
  const { data: categories = [] } = useSWR<string[]>("/categories");

  return (
    <Filter
      title={t("products.categoryTitle")}
      queryName="category"
      items={categories}
    />
  );
}
