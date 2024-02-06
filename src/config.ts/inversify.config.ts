import "reflect-metadata";
import { Container } from "inversify";
import { PokemonClient } from "@/src/api/client/PokemonClient";
import { PokemonService } from "@/src/api/service/PokemonService";

const container = new Container();

container.bind<PokemonClient>(PokemonClient).toSelf();
container.bind<PokemonService>(PokemonService).toSelf();

export { container };
