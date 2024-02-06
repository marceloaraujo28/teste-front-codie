import { PokemonClient } from "../client/PokemonClient";
import {
  IGetAllRegions,
  IGetInfoArea,
  IGetInfoCity,
  IGetInfoRegion,
} from "../types";
import { UseQuery } from "../useQuery";
import { injectable } from "inversify";
import "reflect-metadata";
@injectable()
export class PokemonService {
  private readonly pokemonClient: PokemonClient;

  constructor(pokemonClient: PokemonClient) {
    this.pokemonClient = pokemonClient;
  }

  getInfoCity(city: string) {
    return UseQuery<IGetInfoCity>({
      queryKey: [`getInfoCityKey${city}`],
      queryFn: async () => {
        return await this.pokemonClient.getInfoCity(city);
      },
      options: {
        enabled: !!city,
        cacheTime: 600000,
      },
    });
  }

  getInfoRegion(region: string) {
    return UseQuery<IGetInfoRegion>({
      queryKey: [`getInfoRegion${region}`],
      queryFn: async () => {
        return await this.pokemonClient.getInfoRegion(region);
      },
      options: {
        enabled: !!region,
        cacheTime: 600000,
      },
    });
  }

  getAllRegions() {
    return UseQuery<IGetAllRegions>({
      queryKey: "getAllRegionsKey",
      queryFn: async () => {
        return await this.pokemonClient.getAllRegions();
      },
      options: {
        cacheTime: 600000,
      },
    });
  }

  getInfoArea(url: string) {
    return UseQuery<IGetInfoArea>({
      queryKey: `getInfoAreaKey${url}`,
      queryFn: async () => {
        return await this.pokemonClient.getInfoArea(url);
      },
      options: {
        enabled: !!url,
        cacheTime: 600000,
      },
    });
  }
}
