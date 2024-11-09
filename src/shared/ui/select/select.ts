import { TSelectOption } from "@/utils/declarations";
import { CSSObjectWithLabel, StylesConfig } from "react-select";

export const container = (provided: CSSObjectWithLabel) => ({
  ...provided,
  width: "100%"
});

export const menu = (provided: CSSObjectWithLabel) => ({
  ...provided,
  zIndex: 9999
});

export const dropdownIndicator = (provided: CSSObjectWithLabel) => ({
  ...provided,
  padding: "6px"
});

export const menuList = (provided: CSSObjectWithLabel) => ({
  ...provided,
  "&::-webkit-scrollbar": {
    width: "0.3rem",
    cursor: "pointer"
  },

  "&::-webkit-scrollbar-track": {
    borderRadius: "var(--radius)",
    backgroundColor: "var(--clr-accent-100)",
    cursor: "pointer"
  },

  "&::-webkit-scrollbar-thumb": {
    borderRadius: "var(--radius)",
    backgroundColor: "var(--clr-accent-200)",
    cursor: "pointer"
  },

  "&::-webkit-scrollbar-thumb:hover": {
    backgroundColor: "var(--clr-accent-200)",
    cursor: "pointer"
  }
});

export const placeholder = (
  provided: CSSObjectWithLabel
): CSSObjectWithLabel => ({
  ...provided,
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  overflow: "hidden"
});

export const control = (provided: CSSObjectWithLabel) => ({
  ...provided,
  boxShadow: "initial",
  backgroundColor: "var(--clr-light)",
  borderColor: "var(--gray-100)",
  color: "var(--clr-dark)",
  minHeight: "var(--input-height)",
  fontFamily: "var(--font-family)",
  lineHeight: "var(--medium-line-height)",
  borderRadius: "var(--radius)",
  transition: "border-color var(--transition), outline-color var(--transition)",
  "&:hover": {
    cursor: "pointer",
    borderColor: "var(--clr-accent-400)",
    outlineColor: "var(--clr-accent-400)",
    transition:
      "border-color var(--transition), outline-color var(--transition)"
  }
});

export const singleValue = (provided: CSSObjectWithLabel) => ({
  ...provided,
  color: "var(--clr-dark)"
});

export const option = (
  provided: CSSObjectWithLabel,
  { isSelected }: { isSelected: boolean }
): CSSObjectWithLabel => ({
  ...provided,
  backgroundColor: isSelected ? "var(--clr-accent-400)" : "var(--clr-light)",
  color: isSelected ? "var(--clr-light)" : "var(--clr-dark)",
  wordBreak: "break-all",
  transition: "color var(--transition), background-color var(--transition)",

  "&:hover": {
    backgroundColor: isSelected
      ? "var(--clr-accent-400)"
      : "var(--clr-accent-100)",
    transition: "background-color var(--transition)",
    cursor: "pointer"
  }
});

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
