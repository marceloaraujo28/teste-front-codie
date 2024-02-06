export type NamePokemons = {
  pokemonName: string;
  generation?: string;
};

export type FormValues = {
  name: string;
  pokemons: NamePokemons[];
  surname: string;
  region: string;
  city: string;
  date: string;
  time: string;
};

export type SchedulingProps = {
  date: string[];
  time: string[];
};

export type FormProps = {
  date: string[];
  time: string[];
  handleSuccessOrError: (type: "success" | "error") => void;
  handleSetDateTime: (date: string, time: string, amount: string) => void;
};
