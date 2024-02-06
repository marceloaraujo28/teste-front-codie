import { FormValues } from "@/src/pages/scheduling/types";
import { FieldErrors, UseFormRegister } from "react-hook-form";

export type TopFormProps = {
  errors: FieldErrors<FormValues>;
  register: UseFormRegister<FormValues>;
  region: string;
};
