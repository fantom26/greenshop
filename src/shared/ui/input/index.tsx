import { InputHTMLAttributes, ReactNode, useId } from "react";

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

export function Input({
  placeholder,
  error,
  helperText,
  withLabel,
  widthBtn,
  ...rest
}: InputProps) {
  const id = useId();

  return (
    <S.Wrapper error={!!error}>
      {withLabel && <S.Label htmlFor={id}>{placeholder}</S.Label>}
      <S.InputWrapper widthBtn={widthBtn}>
        <S.Input
          type="text"
          id={id}
          placeholder={withLabel ? "" : placeholder}
          {...rest}
        />
        {widthBtn && widthBtn}
      </S.InputWrapper>
      {helperText && (
        <S.InputTextHelper error={!!error}>{helperText}</S.InputTextHelper>
      )}
    </S.Wrapper>
  );
}

export function ControlledInput({
  name,
  defaultValue = "",
  helperText = "",
  widthBtn = null,
  placeholder = "",
  withLabel = true,
  ...rest
}: ControlledInputProps) {
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
}
