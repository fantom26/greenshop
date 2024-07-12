import { useId, useRef, useState } from "react";

import Image from "next/image";

import debounce from "lodash.debounce";
import Select, { InputActionMeta, components } from "react-select";

import { ICONS, NEXT_PUBLIC_APP_URL } from "@/utils/constants";
import { IProduct, IProductSearchOption } from "@/utils/declarations";
import { ProductService } from "@services";

import * as S from "./search.styled";

const DropdownIndicator = (props: any) =>
  components.DropdownIndicator && (
    <components.DropdownIndicator {...props}>
      <S.Icon>{ICONS.search}</S.Icon>
    </components.DropdownIndicator>
  );

const formatOptionLabel = (option: IProductSearchOption, restFields: any) => {
  const { poster, name, value: optionValue } = option;
  const { url, meta } = poster;
  const { selectValue } = restFields;
  if (selectValue?.[0]?.value === optionValue) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between"
        }}
      >
        <div
          style={{
            flexGrow: "1",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden"
          }}
        >
          {name}
        </div>
      </div>
    );
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
      }}
    >
      <div>
        <Image src={`${NEXT_PUBLIC_APP_URL}${url}`} alt={meta.alt} width={40} height={40} loading="lazy" />
      </div>
      <div
        style={{
          flexGrow: "1",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          overflow: "hidden"
        }}
      >
        {name}
      </div>
    </div>
  );
};

const customStyles = {
  control: (baseStyles: any, state: any) => ({
    ...baseStyles,
    flexDirection: "row-reverse",
    boxShadow: state.isFocused ? "0 0 0 1px #46a358" : "0px 0px 20px rgba(0, 0, 0, 0.06)",
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

export const Search = () => {
  const [inputText, setInputText] = useState<string>("");
  const [plants, setPlants] = useState<IProductSearchOption[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSearch = async (searchQuery: string) => {
    if (searchQuery.trim().length === 0) {
      setPlants([]);
      return;
    }

    setIsLoading(true);

    let plants: IProduct[] = [];
    try {
      plants = await ProductService.getAll({ q: searchQuery });
    } catch (e) {
      console.error(e);
    } finally {
      setPlants(
        plants.map((plant) => ({
          ...plant,
          label: plant.name,
          value: plant.name
        }))
      );
      setIsLoading(false);
    }
  };

  const handleSearchDebounced = useRef(debounce((searchText) => handleSearch(searchText), 300)).current;

  const noOptionsMessage = (obj: { inputValue: string }) => {
    if (obj.inputValue.trim().length === 0) {
      return null;
    }
    return "No matching plant";
  };

  const handleInputChange = (inputText: string, meta: InputActionMeta) => {
    if (meta.action !== "input-blur" && meta.action !== "menu-close") {
      setInputText(inputText);

      handleSearchDebounced(inputText);
    }
  };

  return (
    <Select
      inputValue={inputText}
      isClearable={true}
      components={{
        IndicatorSeparator: () => null,
        DropdownIndicator
      }}
      instanceId={useId()}
      placeholder="Search plant..."
      isSearchable={true}
      styles={customStyles}
      formatOptionLabel={formatOptionLabel}
      options={plants}
      onInputChange={handleInputChange}
      isLoading={isLoading}
      filterOption={null}
      noOptionsMessage={noOptionsMessage}
    />
  );
};
