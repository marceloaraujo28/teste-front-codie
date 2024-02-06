import React, { ChangeEventHandler, useEffect, useState } from "react";
import {
  HeaderDescription,
  HeaderMid,
  HeaderName,
  InputZone,
  MidFormContainer,
} from "./styles";
import { MidFormProps } from "./types";
import Select from "@/src/components/Select";
import { ButtonAdd } from "@/src/components/Button";

import { useGetAllPokemons } from "@/src/api/hooks/useGetAllPokemons";

export default function MidForm({
  fields,
  errors,
  register,
  cityUrl,
  append,
  date,
  time,
  selectedPokemons,
  region,
}: MidFormProps) {
  const { pokemons } = useGetAllPokemons(cityUrl);

  const selecteds = selectedPokemons.map((poke) => poke.pokemonName);

  const pokemonsSelect = Array.from(
    new Set([...pokemons, ...selecteds])
  ).filter((str) => str.trim());

  return (
    <MidFormContainer>
      <HeaderMid>
        <HeaderName>Cadastre seu time</HeaderName>
        <HeaderDescription>Atendemos até 06 pokémons por vez</HeaderDescription>
      </HeaderMid>
      {fields.map((_, index) => (
        <React.Fragment key={index}>
          <Select
            labelName="Pokémon"
            labelSide="left"
            errorMessage={errors.pokemons?.[index]?.pokemonName?.message}
            {...register(`pokemons.${index}.pokemonName`)}
          >
            <option value="" disabled hidden>
              Selecione seu pokémon
            </option>
            {pokemonsSelect.length > 0 &&
              pokemonsSelect.map((poke) => {
                return (
                  <option key={poke} value={poke}>
                    {poke}
                  </option>
                );
              })}
          </Select>
        </React.Fragment>
      ))}

      <ButtonAdd
        disabled={fields?.length > 4}
        onClick={() => append({ pokemonName: "" })}
      >
        Adicionar novo pokémon ao time...
      </ButtonAdd>
      <InputZone>
        <Select
          labelName="Data para Atendimento"
          {...register("date")}
          errorMessage={errors.date?.message}
        >
          <option value="" disabled hidden>
            Selecione uma data
          </option>
          {date.map((date) => {
            return (
              <option key={date} value="date">
                {date}
              </option>
            );
          })}
        </Select>
        <Select
          labelName="Horário de Atendimento"
          {...register("time")}
          errorMessage={errors.time?.message}
        >
          <option value="" disabled hidden>
            Selecione um horário
          </option>
          {time.map((time) => {
            return (
              <option key={time} value="time">
                {time}
              </option>
            );
          })}
        </Select>
      </InputZone>
    </MidFormContainer>
  );
}
