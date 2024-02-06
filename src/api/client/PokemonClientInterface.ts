import {
  IGetAllRegions,
  IGetInfoArea,
  IGetInfoCity,
  IGetInfoRegion,
} from "../types";

export interface IPokemonClient {
  getInfoCity: (city: string) => Promise<IGetInfoCity>;
  getInfoRegion: (region: string) => Promise<IGetInfoRegion>;
  getInfoArea: (url: string) => Promise<IGetInfoArea>;
  getAllRegions: () => Promise<IGetAllRegions>;
}
