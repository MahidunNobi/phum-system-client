import { useGetAcademicSemesterQuery } from "../../../redux/features/admin/academicManagement.api";

const AcademicSemester = () => {
  const { data } = useGetAcademicSemesterQuery(undefined);
  console.log(data);

  return <div>AcademicSemester</div>;
};

export default AcademicSemester;
