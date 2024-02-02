import { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonAddProps = {
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;
