import { object, string } from "yup";

export const NewslettersObject = object({
  email: string().email("Email must be a valid").required()
});

export type NewslettersSchema = ReturnType<
  typeof NewslettersObject.validateSync
>;
