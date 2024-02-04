import { PokemonService } from "../service/PokemonService";

export function useGetLocations(region: string) {
  const pokemonService = new PokemonService();

  const { data } = pokemonService.getInfoRegion(region);

  const locations = data?.locations?.map((location) => location.name);

  return {
    locations,
  };
}
