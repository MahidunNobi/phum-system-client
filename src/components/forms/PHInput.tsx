import { useFormContext } from "react-hook-form";

const PHInput = ({
  type,
  name,
  label,
}: {
  type: string;
  name: string;
  label: string;
}) => {
  const { register } = useFormContext();
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input type={type} id={name} {...register(name)} />
    </div>
  );
};

export default PHInput;
