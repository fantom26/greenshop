import { useTranslation } from "next-i18next";

import { Filter } from "@components/common";
import { useSizeQuery } from "@store/api";

export const Sizes = () => {
  const { t } = useTranslation("home");
  const { data: sizes = [] } = useSizeQuery();

  return <Filter title={t("products.sizeTitle")} queryName="size" items={sizes} />;
};
