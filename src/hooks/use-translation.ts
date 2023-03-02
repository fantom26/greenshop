import { useRouter } from "next/router";

import { ITranslation } from "@declarations";

import { mergeDeep } from "@helpers";

import { translations } from "@utils/translations";

export const useTranslation = () => {
  // **Props
  const { locale } = useRouter();

  const defaultT = translations["ua"];
  const currentT =
    locale && translations?.hasOwnProperty(locale)
      ? translations[locale]
      : translations["ua"];

  return mergeDeep({}, defaultT, currentT) as ITranslation;
};
