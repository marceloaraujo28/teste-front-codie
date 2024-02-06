import { PokemonService } from "../service/PokemonService";
import { UseGetAllPokemonsResult } from "./types";

export function useGetAllPokemons(city: string): UseGetAllPokemonsResult {
  const pokemonService = new PokemonService();

  const { data: CityData } = pokemonService.getInfoCity(city);

  const areaUrl = CityData?.areas?.map((item) => item.url)[0] || "";

  const { data } = pokemonService.getInfoArea(areaUrl);

  const pokemons =
    data?.pokemon_encounters?.map((encounter) => encounter?.pokemon?.name) ||
    [];

  return {
    pokemons,
  };
}
