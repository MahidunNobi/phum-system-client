import { Form, Select } from "antd";
import { Controller } from "react-hook-form";

type TPHSelectProps = {
  label: string;
  name: string;
  options: { label: string; value: string; disabled?: boolean }[];
};

const PHSelect = ({ label, name, options }: TPHSelectProps) => {
  return (
    <Controller
      name={name}
      render={({ field }) => (
        <Form.Item label={label}>
          <Select
            onChange={field.onChange}
            style={{ width: "100%" }}
            options={options}
          />
        </Form.Item>
      )}
    />
  );
};

export default PHSelect;
