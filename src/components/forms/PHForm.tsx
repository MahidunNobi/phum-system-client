import { ReactNode } from "react";
import { FieldValues, FormProvider, useForm } from "react-hook-form";

type TFormProps = {
  children: ReactNode;
  onsubmit: (userInfo: FieldValues) => Promise<void>;
  defaultValues?: Record<string, any>;
};

type TFormConfig = {
  defaultValues?: Record<string, any>;
};

const PHForm = ({ children, onsubmit, defaultValues }: TFormProps) => {
  const formConfig: TFormConfig = {};

  if (defaultValues) {
    formConfig.defaultValues = defaultValues;
  }

  const methods = useForm(formConfig);
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onsubmit)}>{children}</form>
    </FormProvider>
  );
};

export default PHForm;
