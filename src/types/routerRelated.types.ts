import { ReactNode } from "react";

export type TRoutePath = {
  name: string;
  path?: string;
  element?: ReactNode;
  children?: TRoutePath[];
};
