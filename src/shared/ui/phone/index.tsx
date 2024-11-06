/* eslint-disable @next/next/no-img-element */
import { FC, InputHTMLAttributes, useState } from "react";

import { useTranslation } from "next-i18next";
import { Controller, useFormContext } from "react-hook-form";
import PhoneInput from "react-phone-input-2";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  helperText?: string;
  placeholder: string;
  value: string;
  onChange: (value: any) => void;
  setCountryCode?: (code: string) => void;
}

export const Phone: FC<InputProps> = ({ disabled = false, error, helperText, placeholder = "", value = "", onChange, setCountryCode = null }) => {
  const [countryName, setCountryName] = useState<string>("");

  const getClasses = () => {
    let className = "form-phone";

    if (error) {
      className += " error";
    }

    if (disabled) {
      className = "form-phone disabled";
    }

    return className;
  };

  return (
    <div className={getClasses()}>
      <PhoneInput
        onChange={(value, country: any) => {
          if (countryName === country.name) {
            onChange(value);
          } else {
            setCountryName(country.name);
            onChange(`+${country.dialCode}`);
          }
          if (setCountryCode) {
            setCountryCode(`+${country.dialCode}`);
          }
        }}
        inputProps={{
          required: true,
          autoComplete: "none",
          "data-testid": "input-id"
        }}
        country="ua"
        regions={["europe"]}
        placeholder={placeholder}
        value={value}
        countryCodeEditable={false}
      />
      {helperText && error && <span className="form-error">{helperText}</span>}
    </div>
  );
};

export const ControlledPhone: FC<{
  name: string;
  setCountryCode?: (code: string) => void;
}> = ({ name, setCountryCode }) => {
  const { t } = useTranslation("validation");

  // **Form
  const formCtx = useFormContext();

  return (
    <Controller
      name={name}
      control={formCtx.control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <Phone
          value={value || ""}
          onChange={onChange}
          error={!!error}
          placeholder={t("forms.phone.placeholder")}
          helperText={t("phone")}
          setCountryCode={setCountryCode}
        />
      )}
    />
  );
};
