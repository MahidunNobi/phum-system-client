import Dashboard from "../pages/admin/Dashboard";
import AssignedCourses from "../pages/faculty/AssignedCourses";

export const facultyPath = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <Dashboard />,
  },
  {
    name: "Assigned Courses",
    path: "assigned-cources",
    element: <AssignedCourses />,
  },
];
