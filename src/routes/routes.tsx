import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { adminRouterPaths } from "./admin.routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/admin",
    element: <App />,
    children: adminRouterPaths,
  },
]);

export default router;
