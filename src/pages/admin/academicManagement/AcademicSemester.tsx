import { useGetAcademicSemesterQuery } from "../../../redux/features/academicSemester/academicSemisterApi";

const AcademicSemester = () => {
  const { data } = useGetAcademicSemesterQuery(undefined);
  console.log(data);

  return <div>AcademicSemester</div>;
};

export default AcademicSemester;
