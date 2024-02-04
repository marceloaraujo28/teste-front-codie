type AreasType = {
  name: string;
  url: string;
};

type InfoPokemon = {
  name: string;
  url: string;
};

type PokemonEncountersType = {
  pokemon: InfoPokemon;
};

type RegionsType = {
  name: string;
};

type LocationsType = {
  name: string;
};

export interface IGetInfoCity {
  areas: AreasType[];
}

export interface IGetAllRegions {
  results: RegionsType[];
}

export interface IGetInfoArea {
  pokemon_encounters: PokemonEncountersType[];
}

export interface IGetInfoRegion {
  locations: LocationsType[];
}
