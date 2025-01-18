import { ReactNode } from "react";
import { FieldValues, FormProvider, useForm } from "react-hook-form";

const PHForm = ({
  children,
  onsubmit,
}: {
  children: ReactNode;
  onsubmit: (userInfo: FieldValues) => Promise<void>;
}) => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onsubmit)}>{children}</form>;
    </FormProvider>
  );
};

export default PHForm;
