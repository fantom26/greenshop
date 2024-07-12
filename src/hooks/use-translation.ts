import { useRouter } from "next/router";

import { mergeDeep } from "@/utils/helpers";

import { ITranslation } from "@/utils/declarations";
import { translations } from "@utils/translations";

export const useTranslation = () => {
  // **Props
  const { locale } = useRouter();

  const defaultT = translations["en"];
  const currentT = locale && translations?.hasOwnProperty(locale) ? translations[locale] : translations["en"];

  return mergeDeep({}, defaultT, currentT) as ITranslation;
};
