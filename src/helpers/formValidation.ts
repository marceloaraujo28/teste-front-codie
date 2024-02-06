import * as yup from "yup";
import { FormValues } from "../components/Form/types";

export const formValidation: yup.ObjectSchema<FormValues> = yup.object({
  name: yup.string().required("Nome é obrigatório. Por favor, preencha."),
  surname: yup
    .string()
    .required("Sobrenome é obrigatório. Por favor, preencha."),
  region: yup.string().required("Região é obrigatória. Por favor, selecione."),
  city: yup.string().required("Cidade é obrigatória. Por favor, selecione."),
  date: yup.string().required("Data é obrigatória. Por favor, selecione."),
  time: yup.string().required("Horário é obrigatório. Por favor, selecione."),
  pokemons: yup
    .array()
    .of(
      yup.object({
        pokemonName: yup
          .string()
          .required("Pokemon é obrigatório. Por favor, selecione."),
      })
    )
    .required(),
});
