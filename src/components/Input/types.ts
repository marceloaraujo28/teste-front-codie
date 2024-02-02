import { InputHTMLAttributes } from "react";

export type InputProps = {
  labelName: string;
} & InputHTMLAttributes<HTMLInputElement>;
