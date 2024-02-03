import * as yup from "yup";

export const formValidation = yup.object().shape({
  name: yup.string().required("Nome é obrigatório. Por favor, preencha."),
  surname: yup
    .string()
    .required("Sobrenome é obrigatório. Por favor, preencha."),
  region: yup.string().required("Região é obrigatória. Por favor, selecione."),
  city: yup.string().required("Cidade é obrigatória. Por favor, selecione."),
  poke1: yup
    .string()
    .required("O Pokemon é obrigatório. Por favor, selecione."),
  date: yup.string().required("Data é obrigatória. Por favor, selecione."),
  time: yup.string().required("Horário é obrigatório. Por favor, selecione."),
});
