import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { adminPath } from "./admin.routes";
import { routeGenerator } from "../utils/routesGenerator";

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
]);

export default router;
