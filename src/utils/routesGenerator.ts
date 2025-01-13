import { ReactNode } from "react";

type TRouter = {
  path: string;
  element: ReactNode;
};

type TRoutePath = {
  name: string;
  path?: string;
  element?: ReactNode;
  children?: TRoutePath[];
};

export const routeGenerator = (routePaths: TRoutePath[]) => {
  const routes = routePaths.reduce((acc: TRouter[], item) => {
    if (item.path && item.element) {
      acc.push({
        path: item.path,
        element: item.element,
      });
    } else if (item.children) {
      item.children.forEach((child) => {
        acc.push({ path: child.path!, element: child.element });
      });
    }
    return acc;
  }, []);
  return routes;
};
