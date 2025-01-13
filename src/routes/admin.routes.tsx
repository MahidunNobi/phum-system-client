import { ReactNode } from "react";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";
import Dashboard from "../pages/admin/Dashboard";

const adminPath = [
  {
    name: "Dashboard",
    path: "/admin/dashboard",
    element: <Dashboard />,
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Admin",
        path: "/admin/create-admin",
        element: <CreateAdmin />,
      },
      {
        name: "Create Faculty",
        path: "/admin/create-faculty",
        element: <CreateFaculty />,
      },
      {
        name: "Create Admin",
        path: "/admin/create-student",
        element: <CreateStudent />,
      },
    ],
  },
];

type TRouter = {
  path: string;
  element: ReactNode;
};

export const adminRouterPaths = adminPath.reduce((acc: TRouter[], item) => {
  if (item.path && item.element) {
    acc.push({
      path: item.path,
      element: item.element,
    });
  } else if (item.children) {
    item.children.forEach((child) => {
      acc.push({ path: child.path, element: child.element });
    });
  }
  return acc;
}, []);
