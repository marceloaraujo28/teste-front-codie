import { ReactNode, SelectHTMLAttributes } from "react";

export type SelectProps = {
  labelName: string;
  labelSide?: "top" | "left";
  children: ReactNode;
} & SelectHTMLAttributes<HTMLSelectElement>;
