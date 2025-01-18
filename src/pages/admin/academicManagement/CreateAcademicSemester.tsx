import { FieldValues } from "react-hook-form";
import PHForm from "../../../components/forms/PHForm";
import PHInput from "../../../components/forms/PHInput";
import { Button, Col, Flex } from "antd";
import PHSelect from "../../../components/forms/PHSelect";

const CreateAcademicSemester = () => {
  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };
  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <PHForm onsubmit={onSubmit}>
          <PHInput type="text" name="name" label="Name" />
          <PHSelect />
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default CreateAcademicSemester;
