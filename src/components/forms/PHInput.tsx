import { Form, Input } from "antd";
import { Controller } from "react-hook-form";

const PHInput = ({
  type,
  name,
  label,
}: {
  type: string;
  name: string;
  label: string;
}) => {
  return (
    <Form.Item label={label}>
      <div>
        {/* <label htmlFor={name}>{label}</label> */}
        <Controller
          name={name}
          render={({ field }) => <Input {...field} type={type} id={name} />}
        />
      </div>
    </Form.Item>
  );
};

export default PHInput;
