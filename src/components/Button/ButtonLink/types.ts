import { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonProps = {
  hasBackground?: boolean;
  link?: string;
  textColor: string;
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;
