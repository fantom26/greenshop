import { useSizeQuery } from "@/store/api";
import { Filter } from "@/widgets/filter-list";
import { useTranslation } from "next-i18next";

export const Sizes = () => {
  const { t } = useTranslation("home");
  const { data: sizes = [] } = useSizeQuery();

  return <Filter title={t("products.sizeTitle")} queryName="size" items={sizes} />;
};
