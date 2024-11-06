import { useState } from "react";

import { useProductsSearchQuery } from "@/store/api";
import { skipToken } from "@reduxjs/toolkit/query";
import { useTranslation } from "next-i18next";
import Select, { InputActionMeta } from "react-select";
import { useDebounce } from "use-debounce";

import { NEXT_PUBLIC_APP_URL } from "@/shared/config";
import { CustomImage } from "@/shared/ui";
import * as S from "@/widgets/header/ui/search/search.styled";

import { DropdownIndicator } from "./dropdown-indicator";

const formatOptionLabel = (option: any, restFields: any) => {
  const { poster, name, value: optionValue } = option;
  const { url, meta } = poster;
  const { selectValue } = restFields;

  const isPreviewShown = selectValue?.[0]?.value !== optionValue;

  return (
    <S.Option>
      {isPreviewShown && (
        <div>
          <CustomImage
            src={`${NEXT_PUBLIC_APP_URL}${url}`}
            alt={meta.alt}
            width={40}
            height={40}
            loading="lazy"
          />
        </div>
      )}
      <S.OptionName>{name}</S.OptionName>
    </S.Option>
  );
};

const customStyles = {
  control: (baseStyles: any, state: any) => ({
    ...baseStyles,
    flexDirection: "row-reverse",
    boxShadow: state.isFocused
      ? "0 0 0 1px #46a358"
      : "0px 0px 20px rgba(0, 0, 0, 0.06)",
    borderColor: state.isFocused ? "#46a358" : "#d1cfcf",
    borderRadius: "6px",

    "&:hover": {
      cursor: "pointer"
    }
  }),
  option: (baseStyles: any, state: any) => ({
    ...baseStyles,
    color: state.isFocused ? "#72bb80" : "",
    backgroundColor: "transparent",
    transition: "color 0.3s",
    "&:hover": {
      color: "#b1e6bc",
      cursor: "pointer",
      transition: "color 0.3s"
    }
  }),
  menuList: (baseStyles: any) => ({
    ...baseStyles,

    "::-webkit-scrollbar": {
      width: "4px",
      height: "0px"
    },
    "::-webkit-scrollbar-track": {
      background: "#cdf0d4"
    },
    "::-webkit-scrollbar-thumb": {
      background: "#46a358"
    },
    "::-webkit-scrollbar-thumb:hover": {
      background: "#38944a"
    }
  }),
  clearIndicator: (baseStyles: any) => ({
    ...baseStyles,
    position: "absolute",
    right: 0
  }),
  valueContainer: (baseStyles: any) => ({
    ...baseStyles,
    paddingRight: "2.3rem"
  })
};

export function Search() {
  const [inputText, setInputText] = useState("");
  const [searchTerm] = useDebounce(inputText, 300);
  const { t } = useTranslation("common");
  const { data, isFetching } = useProductsSearchQuery(searchTerm || skipToken);

  const noOptionsMessage = (obj: { inputValue: string }) => {
    if (obj.inputValue.trim().length === 0) {
      return null;
    }
    return t("forms.searchPlant.noOptions");
  };

  const handleInputChange = (newValue: string, meta: InputActionMeta) => {
    if (meta.action !== "input-blur" && meta.action !== "menu-close") {
      setInputText(newValue);
    }
  };

  return (
    <Select
      inputValue={inputText}
      isClearable
      components={{
        IndicatorSeparator: () => null,
        DropdownIndicator
      }}
      placeholder={t("forms.searchPlant.placeholder")}
      isSearchable
      styles={customStyles}
      formatOptionLabel={formatOptionLabel}
      options={inputText.trim() ? data : []}
      onInputChange={handleInputChange}
      isLoading={isFetching}
      filterOption={null}
      noOptionsMessage={noOptionsMessage}
    />
  );
}
