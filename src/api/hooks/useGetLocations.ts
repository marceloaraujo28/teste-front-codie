import { PokemonService } from "../service/PokemonService";
import { container } from "@/src/config.ts/inversify.config";

export function useGetLocations(region: string) {
  const pokemonService = container.get<PokemonService>(PokemonService);
  const { data } = pokemonService.getInfoRegion(region);

  const locations = data?.locations?.map((location) => location.name);

  return {
    locations,
  };
}
