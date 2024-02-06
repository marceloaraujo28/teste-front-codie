import { PokemonService } from "../service/PokemonService";
import { IGetAllRegions } from "../types";

export function useGetAllRegions() {
  const pokemonService = new PokemonService();

  const { data } = pokemonService.getAllRegions();

  const regions = data?.results.map((item) => item.name);

  return {
    regions,
  };
}
