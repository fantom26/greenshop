import { InputHTMLAttributes, useId } from "react";

import { useTranslation } from "next-i18next";
import { Controller, useFormContext } from "react-hook-form";

interface TextareaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
  helperText?: string;
}

export interface ControlledTextareaProps extends TextareaProps {
  name: string;
}

export function TextArea({
  disabled = false,
  error,
  helperText,
  ...rest
}: TextareaProps) {
  const id = useId();

  const getClasses = () => {
    let className = "form-textarea";

    if (error) {
      className += " error";
    }

    if (disabled) {
      className = "form-textarea disabled";
    }

    return className;
  };

  return (
    <div className={getClasses()}>
      <label htmlFor={id} className="form-textarea__wrapper">
        <textarea id={id} disabled={disabled} {...rest} />
      </label>
      {helperText && <span className="form-error">{helperText}</span>}
    </div>
  );
}

export function ControlledTextarea({
  name,
  defaultValue,
  ...rest
}: ControlledTextareaProps) {
  const { t } = useTranslation("validation");

  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field, fieldState: { error } }) => (
        <TextArea
          value={field.value || ""}
          onChange={field.onChange}
          error={!!error}
          helperText={t(error?.message || "")}
          {...rest}
        />
      )}
    />
  );
}
