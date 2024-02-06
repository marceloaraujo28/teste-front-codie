import { PokemonService } from "../service/PokemonService";
import { container } from "@/src/config.ts/inversify.config";

export function useGetAllRegions() {
  const pokemonService = container.get<PokemonService>(PokemonService);
  const { data } = pokemonService.getAllRegions();

  const regions = data?.results.map((item) => item.name);

  return {
    regions,
  };
}
