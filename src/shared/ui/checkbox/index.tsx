import { InputHTMLAttributes, ReactNode, useId } from "react";

import { useFormContext } from "react-hook-form";

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  value?: string | number;
  label?: string | ReactNode;
}

export function Checkbox({ label, name, value, ...rest }: CheckboxProps) {
  const id = useId();
  const { register } = useFormContext();

  return (
    <div className="form-checkbox">
      <label htmlFor={id} className="form-checkbox__label">
        <input
          id={id}
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
