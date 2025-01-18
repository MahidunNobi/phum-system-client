import { Form, Select } from "antd";

const PHSelect = () => {
  return (
    <Form.Item label="Session">
      <Select
        defaultValue="lucy"
        style={{ width: "100%" }}
        //   onChange={handleChange}
        options={[
          { value: "jack", label: "Jack" },
          { value: "lucy", label: "Lucy" },
          { value: "Yiminghe", label: "yiminghe" },
          { value: "disabled", label: "Disabled", disabled: true },
        ]}
      />
    </Form.Item>
  );
};

export default PHSelect;
