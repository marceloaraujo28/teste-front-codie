import Image from "next/image";
import { HomeContainer, TextOverlay } from "../styles/pages/home";

import backgroundHome from "@/public/images/pokemon-hero.jpg";

export default function Home() {
  return (
    <HomeContainer>
      <Image
        src={backgroundHome}
        className="background-image"
        alt="Imagem de fundo"
      />
      <TextOverlay>
        <p>
          Cuidamos bem do seu pokémon,
          <br /> para ele cuidar bem de você
        </p>
      </TextOverlay>
    </HomeContainer>
  );
}
