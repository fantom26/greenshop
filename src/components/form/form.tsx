import { ReactNode } from "react";

import { FormProvider, UseFormReturn } from "react-hook-form";

import { Checkbox } from "./checkbox";
import { ControlledInput } from "./input";
import { ControlledPhone } from "./phone";
import { ControlledTextarea } from "./textarea";

export interface FormProps {
  children: ReactNode;
  methods: UseFormReturn<any>;
  onSubmit: VoidFunction;
}

const Form = (props: FormProps) => {
  const { methods, children, onSubmit } = props;

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

export { Form };
