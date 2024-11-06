import { ReactNode } from "react";

import { FormProvider, UseFormReturn } from "react-hook-form";

import {
  Checkbox,
  ControlledInput,
  ControlledPhone,
  ControlledTextarea
} from "@/shared/ui";

export interface FormProps {
  children: ReactNode;
  methods: UseFormReturn<any>;
  onSubmit: VoidFunction;
}

export function Form({ methods, children, onSubmit }: FormProps) {
  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit}>{children}</form>
    </FormProvider>
  );
}

Form.Input = ControlledInput;
Form.TextArea = ControlledTextarea;
Form.Phone = ControlledPhone;
Form.Checkbox = Checkbox;
