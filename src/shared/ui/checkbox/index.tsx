import { InputHTMLAttributes, ReactNode } from "react";

import { useFormContext } from "react-hook-form";

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  value?: string | number;
  label?: string | ReactNode;
}

export function Checkbox({ label, name, value, ...rest }: CheckboxProps) {
  const { register } = useFormContext();

  return (
    <div className="form-checkbox">
      <label className="form-checkbox__label">
        <input
          className="form-checkbox__input"
          type="checkbox"
          value={value}
          {...register(name)}
          {...rest}
        />
        <span className="form-checkbox__btn">{label}</span>
      </label>
    </div>
  );
}
