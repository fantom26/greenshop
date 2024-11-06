/* eslint-disable @next/next/no-img-element */
import { FC, InputHTMLAttributes } from "react";

import { useTranslation } from "next-i18next";
import { Controller, useFormContext } from "react-hook-form";

interface TextareaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
  helperText?: string;
}

export interface ControlledTextareaProps extends TextareaProps {
  name: string;
}

export const TextArea: FC<TextareaProps> = ({
  disabled = false,
  error,
  helperText,
  ...rest
}) => {
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
      <label className="form-textarea__wrapper">
        <textarea disabled={disabled} {...rest} />
      </label>
      {helperText && <span className="form-error">{helperText}</span>}
    </div>
  );
};

export const ControlledTextarea: FC<ControlledTextareaProps> = ({
  name,
  defaultValue,
  ...rest
}) => {
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
};
