import {
  FormContainer,
  ImportantText,
  InfosContent,
  Submit,
  ValueTotal,
} from "./styles";
import TopForm from "@/src/components/Form/components/TopForm";
import MidForm from "@/src/components/Form/components/MidForm";
import Info from "@/src/components/Info";
import { ButtonLink } from "@/src/components/Button";

import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formValidation } from "@/src/helpers/formValidation";
import { FormProps, FormValues } from "./types";
import { useEffect, useState } from "react";
import { getGenerationNumber } from "@/src/helpers/getGeneration";
import { formattedValue } from "./components/utils/formattedValue";

export default function Form({
  date,
  time,
  handleSuccessOrError,
  handleSetDateTime,
}: FormProps) {
  const [generation, setGeneration] = useState<number>(1);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    control,
    reset,
  } = useForm<FormValues>({
    resolver: yupResolver(formValidation),
    defaultValues: {
      name: "",
      surname: "",
      city: "",
      date: "",
      region: "",
      pokemons: [
        {
          pokemonName: "",
        },
      ],
      time: "",
    },
  });

  const cityUrl = watch("city");

  const region = watch("region");

  const { fields, append } = useFieldArray({
    control,
    name: "pokemons",
  });

  const selectedPokemons = watch("pokemons");

  const regionGeneration = getGenerationNumber(region);

  useEffect(() => {
    if (selectedPokemons) {
      if (regionGeneration > generation) {
        setGeneration(regionGeneration);
      }
    }
  }, [selectedPokemons]);

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    handleSetDateTime(data.date, data.time, String(data.pokemons.length));

    //definir "error" ou "success" para simular a tela de sucesso ou erro quando concluir agendamento
    handleSuccessOrError("success");
    reset();
  };

  const qntPokemons = selectedPokemons.length;
  const rawValue = 70 * qntPokemons;

  const generationPercent = generation * 0.03;

  const rateValue = rawValue * generationPercent;
  const valueWithRate = rawValue + rateValue;

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <TopForm errors={errors} register={register} region={region} />
      <MidForm
        errors={errors}
        register={register}
        cityUrl={cityUrl}
        append={append}
        fields={fields}
        date={date}
        time={time}
        selectedPokemons={selectedPokemons}
        region={region}
      />
      <InfosContent>
        <Info
          name="Número de pokémons a serem atendidos:"
          value={String(qntPokemons)}
        />
        <Info name="Atendimento unitário por pokémon: " value="R$ 70,00" />
        <Info name="Subtotal:" value={formattedValue(rawValue)} />
        <Info name="Taxa geracional*: " value={formattedValue(rateValue)} />
        <ImportantText>
          *adicionamos uma taxa de 3%, multiplicado pelo número da geração mais
          alta do time, com limite de até 30%
        </ImportantText>
        <Submit>
          <ValueTotal>{`Valor Total: ${formattedValue(
            valueWithRate
          )}`}</ValueTotal>
          <ButtonLink type="submit" hasBackground textColor="#fff">
            Concluir Agendamento
          </ButtonLink>
        </Submit>
      </InfosContent>
    </FormContainer>
  );
}
