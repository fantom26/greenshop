import { forwardRef } from "react";

import { TSelectOption } from "@/utils/declarations";
import ReactSelect, { StylesConfig } from "react-select";
import type { Props as SelectProps } from "react-select";

import { customStyles } from "./select";

interface ISelectProps<OptionType> extends Omit<SelectProps<OptionType>, "styles"> {
  styles?: StylesConfig<TSelectOption, false>;
}

export const Select = forwardRef<any, ISelectProps<any>>(( { id, styles, components, ...rest }, ref) => {
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
