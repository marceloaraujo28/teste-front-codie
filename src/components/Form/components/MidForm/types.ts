import { FormValues, NamePokemons } from "@/src/components/Form/types";
import {
  FieldArrayWithId,
  FieldErrors,
  UseFieldArrayAppend,
  UseFormRegister,
} from "react-hook-form";

export type MidFormProps = {
  fields: FieldArrayWithId<FormValues, "pokemons", "id">[];
  errors: FieldErrors<FormValues>;
  register: UseFormRegister<FormValues>;
  append: UseFieldArrayAppend<FormValues, "pokemons">;
  date: string[];
  time: string[];
  cityUrl: string;
  selectedPokemons: NamePokemons[];
  region: string;
};
