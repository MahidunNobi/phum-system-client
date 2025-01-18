import { Form } from "antd";
import { ReactNode } from "react";
import { FieldValues, FormProvider, useForm } from "react-hook-form";

type TFormProps = {
  children: ReactNode;
  onsubmit: (data: FieldValues) => void;
};

type TFormConfig = {
  defaultValues?: Record<string, any>;
  resolver?: any;
};

const PHForm = ({
  children,
  onsubmit,
  defaultValues,
  resolver,
}: TFormProps & TFormConfig) => {
  const formConfig: TFormConfig = {};

  if (defaultValues) {
    formConfig.defaultValues = defaultValues;
  }
  if (resolver) {
    formConfig.resolver = resolver;
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
