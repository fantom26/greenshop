import { useTranslation } from "@hooks";
import { useSizeQuery } from "@store/api";

import { Filter } from "./filter-list";

export const Sizes = () => {
  const t = useTranslation();
  const { data: sizes } = useSizeQuery();

  return <Filter title={t.pages.home.products.sizeTitle} queryName="size" items={sizes} />;
};
