import { FC } from "react";

import { findValueByPath } from "@helpers";
import { useFormContext } from "react-hook-form";

import { ITranslation } from "@declarations";
import { useTranslation } from "@hooks";

interface ErrorProps {
  name: string;
}

export const Error: FC<ErrorProps> = (props) => {
  const { name } = props;
  const t = useTranslation();

  const {
    formState: { errors }
  } = useFormContext();

  const messageKey: keyof ITranslation["validation"] = findValueByPath(errors, name)?.message;

  return <>{messageKey && <span className="form-error">{t.validation[messageKey]}</span>}</>;
};
