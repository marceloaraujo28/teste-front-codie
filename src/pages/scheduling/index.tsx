import Breadcrumb from "@/src/components/Breadcrumb";
import { ButtonAdd, ButtonLink } from "@/src/components/Button";
import Info from "@/src/components/Info";
import Input from "@/src/components/Input";
import Select from "@/src/components/Select";
import { yupResolver } from "@hookform/resolvers/yup";
import { formValidation } from "@/src/helpers/formValidation";
import {
  FormContainer,
  HeaderDescription,
  HeaderMid,
  HeaderName,
  MidForm,
  InputZone,
  SchedulingContainer,
  Title,
  TopForm,
  InfosContent,
  ImportantText,
  Submit,
  ValueTotal,
} from "@/src/styles/pages/scheduling";

import { SubmitHandler, useForm } from "react-hook-form";

import { useGetAllPokemons } from "@/src/api/hooks/useGetAllPokemons";
import { useGetAllRegions } from "@/src/api/hooks/useGetAllRegions";
import { useGetLocations } from "@/src/api/hooks/useGetLocations";

import { QueryClient, dehydrate } from "react-query";
import axios from "axios";

interface IForm {
  name: string;
  surname: string;
  region: string;
  city: string;
  poke1: string;
  date: string;
  time: string;
}

export default function Scheduling() {
  const { regions: regionsData } = useGetAllRegions();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<IForm>({
    resolver: yupResolver(formValidation),
  });

  const cityUrl = watch("city");

  const { pokemons } = useGetAllPokemons(cityUrl);

  const region = watch("region");
  const { locations } = useGetLocations(region);

  const onSubmit: SubmitHandler<IForm> = (data) => {};

  return (
    <SchedulingContainer>
      <Breadcrumb page="Agendar Consulta" link="/scheduling" />
      <Title>Preencha o formulário abaixo para agendar sua consulta</Title>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <TopForm>
          <InputZone>
            <Input
              labelName="Nome"
              type="text"
              placeholder="Digite seu nome"
              errorMessage={errors.name?.message}
              {...register("name")}
            />
            <Input
              labelName="Sobrenome"
              type="text"
              placeholder="Digite seu sobrenome"
              errorMessage={errors.surname?.message}
              {...register("surname")}
            />
          </InputZone>
          <InputZone>
            <Select
              labelName="Região"
              {...register("region")}
              defaultValue={""}
              errorMessage={errors.region?.message}
            >
              <option value="" disabled hidden>
                Escolha uma região
              </option>
              {regionsData &&
                regionsData?.length > 0 &&
                regionsData?.map((region) => {
                  return (
                    <option key={region} value={region}>
                      {region}
                    </option>
                  );
                })}
            </Select>
            <Select
              labelName="Cidade"
              {...register("city")}
              defaultValue={""}
              errorMessage={errors.city?.message}
            >
              <option value="" disabled hidden>
                Selecione sua cidade
              </option>
              {locations &&
                locations?.length > 0 &&
                locations?.map((location, index) => {
                  return (
                    <option key={`${location}+${index}`} value={location}>
                      {location}
                    </option>
                  );
                })}
            </Select>
          </InputZone>
        </TopForm>
        <MidForm>
          <HeaderMid>
            <HeaderName>Cadastre seu time</HeaderName>
            <HeaderDescription>
              Atendemos até 06 pokémons por vez
            </HeaderDescription>
          </HeaderMid>
          <Select
            labelName="Pokémon"
            labelSide="left"
            defaultValue={""}
            errorMessage={errors.poke1?.message}
            {...register("poke1")}
          >
            <option value="" disabled hidden>
              Selecione seu pokémon
            </option>
            {pokemons.length > 0 &&
              pokemons.map((poke) => {
                return <option key={poke}>{poke}</option>;
              })}
          </Select>
          <ButtonAdd>Adicionar novo pokémon ao time...</ButtonAdd>
          <InputZone>
            <Select
              labelName="Data para Atendimento"
              {...register("date")}
              errorMessage={errors.date?.message}
              defaultValue={""}
            >
              <option value="" disabled hidden>
                Selecione uma data
              </option>
              <option value="Marcelo">Marcelo</option>
            </Select>
            <Select
              labelName="Horário de Atendimento"
              {...register("time")}
              errorMessage={errors.time?.message}
              defaultValue={""}
            >
              <option value="" disabled hidden>
                Selecione um horário
              </option>
              <option value="Marcelo">Marcelo</option>
            </Select>
          </InputZone>
        </MidForm>
        <InfosContent>
          <Info name="Número de pokémons a serem atendidos:" value="01" />
          <Info name="Atendimento unitário por pokémon: " value="R$ 70,00" />
          <Info name="Subtotal:" value="R$ 70,00" />
          <Info name="Taxa geracional*: " value="R$ 2,10" />
          <ImportantText>
            *adicionamos uma taxa de 3%, multiplicado pelo número da geração
            mais alta do time, com limite de até 30%
          </ImportantText>
          <Submit>
            <ValueTotal>Valor Total: R$ 72,10</ValueTotal>
            <ButtonLink type="submit" hasBackground textColor="#fff">
              Concluir Agendamento
            </ButtonLink>
          </Submit>
        </InfosContent>
      </FormContainer>
    </SchedulingContainer>
  );
}

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["getAllRegionsKey"], async () => {
    await axios
      .get("https://pokeapi.co/api/v2/region")
      .then((response) => response.data);
  });

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
}
