import { Form } from "antd";
import { ReactNode } from "react";
import { FieldValues, FormProvider, useForm } from "react-hook-form";

type TFormProps = {
  children: ReactNode;
  onsubmit: (data: FieldValues) => void;
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
      <Form layout="vertical" onFinish={methods.handleSubmit(onsubmit)}>
        {children}
      </Form>
    </FormProvider>
  );
};

export default PHForm;
