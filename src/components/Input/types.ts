import { InputHTMLAttributes } from "react";

export type InputProps = {
  labelName: string;
  errorMessage?: string;
} & InputHTMLAttributes<HTMLInputElement>;
