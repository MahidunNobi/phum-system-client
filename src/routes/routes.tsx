import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { adminPath } from "./admin.routes";
import { routeGenerator } from "../utils/routesGenerator";
import { facultyPath } from "./faculty.routes";
import { studentPath } from "./student.routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/admin",
    element: <App />,
    children: routeGenerator(adminPath),
  },
  {
    path: "/faculty",
    element: <App />,
    children: routeGenerator(facultyPath),
  },
  {
    path: "/student",
    element: <App />,
    children: routeGenerator(studentPath),
  },
]);

export default router;
