import { ReactNode } from "react";
import { FormProvider, useForm } from "react-hook-form";

const PHForm = ({
  children,
  onsubmit,
}: {
  children: ReactNode;
  onsubmit: () => any;
}) => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onsubmit)}>{children}</form>;
    </FormProvider>
  );
};

export default PHForm;
