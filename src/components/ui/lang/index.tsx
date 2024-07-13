import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

import { Select } from "@components/form/select";
import { TSelectOption } from "@utils/declarations";

const LANGS = ["es", "en", "uk"];

const options = LANGS.map((lang) => ({ label: lang.toUpperCase(), value: lang }));

export const Langs = () => {
  const {
    i18n: { changeLanguage }
  } = useTranslation();
  const { pathname, asPath, query, replace, locale } = useRouter();

  const changeLang = async (option: TSelectOption) => {
    const newLocale = option.value as string;

    await replace(
      {
        pathname,
        query
      },
      asPath,
      { locale: newLocale }
    );

    await changeLanguage(newLocale);
  };

  return <Select id="lang-select" options={options} onChange={changeLang} value={options.find((option) => option.value === locale)} />;
};
