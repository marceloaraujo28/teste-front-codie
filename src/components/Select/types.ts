import { ReactNode, SelectHTMLAttributes } from "react";

export type SelectProps = {
  labelName: string;
  labelSide?: "top" | "left";
  errorMessage?: string;
  children: ReactNode;
} & SelectHTMLAttributes<HTMLSelectElement>;
