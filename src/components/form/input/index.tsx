import { FC, InputHTMLAttributes, ReactNode, useId } from "react";

import { Controller, useFormContext } from "react-hook-form";

import * as S from "./input.styled";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  placeholder?: string;
  helperText?: string;
  withLabel?: boolean;
  widthBtn?: ReactNode;
}

export interface ControlledInputProps extends InputProps {
  name: string;
}

export const Input: FC<InputProps> = (props) => {
  const { placeholder, error, helperText, withLabel, widthBtn, ...rest } = props;
  const id = useId();

  return (
    <S.Wrapper error={!!error}>
      {withLabel && <S.Label htmlFor={id}>{placeholder}</S.Label>}
      <S.InputWrapper widthBtn={widthBtn}>
        <S.Input type="text" id={id} placeholder={withLabel ? "" : placeholder} {...rest} />
        {widthBtn && widthBtn}
      </S.InputWrapper>
      {helperText && <S.InputTextHelper error={!!error}>{helperText}</S.InputTextHelper>}
    </S.Wrapper>
  );
};

export const ControlledInput: FC<ControlledInputProps> = (props) => {
  const { name, defaultValue = "", helperText = "", widthBtn = null, placeholder = "", withLabel = true, ...rest } = props;

  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field, fieldState: { error } }) => (
        <Input
          value={field.value || ""}
          onChange={field.onChange}
          error={!!error}
          withLabel={withLabel}
          widthBtn={widthBtn}
          helperText={error?.message || helperText}
          placeholder={placeholder}
          {...rest}
        />
      )}
    />
  );
};
