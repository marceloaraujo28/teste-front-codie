import axios from "axios";
import { IPokemonClient } from "./PokemonClientInterface";
import {
  IGetAllRegions,
  IGetInfoArea,
  IGetInfoCity,
  IGetInfoRegion,
} from "../types";

export class PokemonClient implements IPokemonClient {
  private baseUrl = "https://pokeapi.co/api/v2";

  async getInfoCity(city: string): Promise<IGetInfoCity> {
    return await axios
      .get(`${this.baseUrl}/location/${city}`)
      .then((response) => response.data);
  }

  async getAllRegions(): Promise<IGetAllRegions> {
    return await axios
      .get(`${this.baseUrl}/region/`)
      .then((response) => response.data);
  }

  async getInfoArea(url: string): Promise<IGetInfoArea> {
    return await axios.get(`${url}`).then((response) => response.data);
  }

  async getInfoRegion(region: string): Promise<IGetInfoRegion> {
    return await axios
      .get(`${this.baseUrl}/region/${region}`)
      .then((response) => response.data);
  }
}
