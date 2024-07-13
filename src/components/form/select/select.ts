import { CSSObject } from "@emotion/react";
import { StylesConfig } from "react-select";

import { TSelectOption } from "@utils/declarations";

export type CSSObjectWithLabel = CSSObject & {
  label?: string;
};

export const container = (provided: CSSObjectWithLabel) =>
  ({
    ...provided,
    width: "100%"
  } as CSSObjectWithLabel);

export const menu = (provided: CSSObjectWithLabel) =>
  ({
    ...provided,
    zIndex: 9999
  } as CSSObjectWithLabel);

export const dropdownIndicator = (provided: CSSObjectWithLabel) =>
  ({
    ...provided,
    padding: "6px"
  } as CSSObjectWithLabel);

export const menuList = (provided: CSSObjectWithLabel) =>
  ({
    ...provided,
    "&::-webkit-scrollbar": {
      width: "0.3rem",
      cursor: "pointer"
    },

    "&::-webkit-scrollbar-track": {
      borderRadius: "var(--radius)",
      backgroundColor: "var(--purple-100)",
      cursor: "pointer"
    },

    "&::-webkit-scrollbar-thumb": {
      borderRadius: "var(--radius)",
      backgroundColor: "var(--purple-400)",
      cursor: "pointer"
    },

    "&::-webkit-scrollbar-thumb:hover": {
      backgroundColor: "var(--purple-900)",
      cursor: "pointer"
    }
  } as CSSObjectWithLabel);

export const placeholder = (provided: CSSObjectWithLabel) =>
  ({
    ...provided,
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  } as CSSObjectWithLabel);

export const control = (provided: CSSObjectWithLabel) =>
  ({
    ...provided,
    boxShadow: "initial",
    backgroundColor: "var(--white-100)",
    borderColor: "var(--gray-100)",
    color: "var(--dark-800)",
    minHeight: "var(--input-height)",
    fontFamily: "var(--font-family)",
    lineHeight: "var(--medium-line-height)",
    borderRadius: "var(--radius)",
    transition: "border-color var(--transition), outline-color var(--transition)",
    "&:hover": {
      cursor: "pointer",
      borderColor: "var(--purple-400)",
      outlineColor: "var(--purple-400)",
      transition: "border-color var(--transition), outline-color var(--transition)"
    }
  } as CSSObjectWithLabel);

export const singleValue = (provided: CSSObjectWithLabel) =>
  ({
    ...provided,
    color: "var(--dark-800)"
  } as CSSObjectWithLabel);

export const option = (provided: CSSObjectWithLabel, { isSelected }: { isSelected: boolean }) =>
  ({
    ...provided,
    backgroundColor: isSelected ? "var(--purple-400)" : "var(--white-100)",
    color: isSelected ? "var(--white-100)" : "var(--dark-800)",
    wordBreak: "break-all",
    transition: "color var(--transition), background-color var(--transition)",

    "&:hover": {
      backgroundColor: isSelected ? "var(--purple-400)" : "#f5eaf2",
      transition: "background-color var(--transition)",
      cursor: "pointer"
    }
  } as CSSObjectWithLabel);

export const customStyles: StylesConfig<TSelectOption, false> = {
  container,
  menu,
  dropdownIndicator,
  menuList,
  placeholder,
  control,
  singleValue,
  option
};
