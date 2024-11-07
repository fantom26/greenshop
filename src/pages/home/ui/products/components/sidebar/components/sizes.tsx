import { useTranslation } from "next-i18next";
import useSWR from "swr";

import { Filter } from "@/widgets/filter-list";

export function Sizes() {
  const { t } = useTranslation("home");
  const { data: sizes = [] } = useSWR<string[]>("/size");

  return (
    <Filter title={t("products.sizeTitle")} queryName="size" items={sizes} />
  );
}
