import { object, string } from "yup";

export const NewslettersObject = object({
  email: string()
    .matches(
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
      "Email must be a valid"
    )
    .required()
});

export type NewslettersSchema = ReturnType<typeof NewslettersObject.validateSync>;
