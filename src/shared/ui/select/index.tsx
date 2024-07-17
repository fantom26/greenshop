import { forwardRef } from "react";

import ReactSelect, { StylesConfig } from "react-select";
import type { Props as SelectProps } from "react-select";

import { TSelectOption } from "@/utils/declarations";

import { customStyles } from "./select";

interface ISelectProps<OptionType> extends Omit<SelectProps<OptionType>, "styles"> {
  styles?: StylesConfig<TSelectOption, false>;
}

export const Select = forwardRef<any, ISelectProps<any>>((props, ref) => {
  const { id, styles, components, ...rest } = props;
  return (
    <ReactSelect
      ref={ref}
      instanceId={id}
      styles={styles ? { ...customStyles, ...styles } : customStyles}
      menuPlacement="auto"
      className="select"
      components={{
        IndicatorSeparator: () => null,
        ...components
      }}
      {...rest}
    />
  );
});
