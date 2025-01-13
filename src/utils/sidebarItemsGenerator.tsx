import { ReactNode } from "react";
import { TRoutePath } from "../types";
import { NavLink } from "react-router-dom";

type TSidebarItem = {
  key: string;
  label: ReactNode;
  children?: TSidebarItem[];
};

export const sidebarItemsGenerator = (
  routePaths: TRoutePath[],
  role: string
) => {
  const sidebarPaths = routePaths.reduce((acc: TSidebarItem[], item) => {
    if (item.path && item.name) {
      acc.push({
        key: item.name,
        label: <NavLink to={`/${role}/${item.path}`}> {item.name} </NavLink>,
      });
    } else if (item.children) {
      acc.push({
        key: item.name,
        label: item.name,
        children: item.children.map((child) => ({
          key: child.name,
          label: <NavLink to={`/admin/${child.path}`}> {child.name} </NavLink>,
        })),
      });
    }
    return acc;
  }, []);
  return sidebarPaths;
};
