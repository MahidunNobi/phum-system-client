import Dashboard from "../pages/admin/Dashboard";
import EnrolledCourses from "../pages/student/EnrolledCourses";

export const studentPath = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <Dashboard />,
  },
  {
    name: "Enrolled Courses",
    path: "enrolled-cources",
    element: <EnrolledCourses />,
  },
];
