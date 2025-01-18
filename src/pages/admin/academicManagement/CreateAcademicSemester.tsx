import { FieldValues } from "react-hook-form";
import PHForm from "../../../components/forms/PHForm";
import { Button, Col, Flex } from "antd";
import PHSelect from "../../../components/forms/PHSelect";
import { semesterOptions } from "../../../constants/semester";
import { monthOptions } from "../../../constants/global";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { academicSemesterResolver } from "../../../schemas/academicManagement.schema";

const currentYear = new Date().getFullYear();
const yearOptions = [0, 1, 2, 3, 4].map((num) => ({
  label: String(currentYear + num),
  value: String(currentYear + num),
}));

const CreateAcademicSemester = () => {
  const onSubmit = (data: FieldValues) => {
    const name = semesterOptions[Number(data.name) - 1].label;

    const semesterData = {
      ...data,
      name,
      code: data.name,
    };
    console.log(semesterData);
  };

  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <PHForm
          onsubmit={onSubmit}
          resolver={zodResolver(academicSemesterResolver)}
        >
          <PHSelect label="Name" name="name" options={semesterOptions} />
          <PHSelect label="Year" name="year" options={yearOptions} />
          <PHSelect
            label="Start Month"
            name="startMonth"
            options={monthOptions}
          />
          <PHSelect label="End Month" name="endMonth" options={monthOptions} />
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default CreateAcademicSemester;
