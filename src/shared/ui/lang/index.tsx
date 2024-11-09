import { TSelectOption } from "@/utils/declarations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

import { Select } from "@/shared/ui/select";

import * as S from "./lang.styled";

const LANGS = ["es", "en", "uk"];

const options = LANGS.map((lang) => ({
  label: lang.toUpperCase(),
  value: lang
}));

export function Langs() {
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

  return (
    <S.LangWrapper>
      <Select
        id="lang-select"
        isSearchable={false}
        options={options}
        onChange={changeLang}
        value={options.find((option) => option.value === locale)}
      />
    </S.LangWrapper>
  );
}
