import { useSizeQuery } from "@/store/api";
import { useTranslation } from "next-i18next";

import { Filter } from "@/widgets/filter-list";

export function Sizes() {
  const { t } = useTranslation("home");
  const { data: sizes = [] } = useSizeQuery();

  return (
    <Filter title={t("products.sizeTitle")} queryName="size" items={sizes} />
  );
}
