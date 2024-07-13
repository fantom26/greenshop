import { useTranslation } from "next-i18next";

import { Filter } from "@components/common";
import { useSizeQuery } from "@store/api";

export const Sizes = () => {
  const { t } = useTranslation();
  const { data: sizes } = useSizeQuery();

  return <Filter title={t("pages.home.products.sizeTitle")} queryName="size" items={sizes} />;
};
