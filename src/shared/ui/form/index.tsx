import { ReactNode } from "react";

import { Checkbox, ControlledInput, ControlledPhone, ControlledTextarea } from "@/shared/ui";
import { FormProvider, UseFormReturn } from "react-hook-form";

export interface FormProps {
  children: ReactNode;
  methods: UseFormReturn<any>;
  onSubmit: VoidFunction;
}

export const Form = ({ methods, children, onSubmit }: FormProps) => {
  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit}>{children}</form>
    </FormProvider>
  );
};

Form.Input = ControlledInput;
Form.TextArea = ControlledTextarea;
Form.Phone = ControlledPhone;
Form.Checkbox = Checkbox;
