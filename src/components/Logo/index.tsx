import Link from "next/link";
import Image from "next/image";
import { LogoContainer, TextLogo } from "./style";
import LogoImage from "@/public/images/white-pokeball.svg";

export default function Logo() {
  return (
    <Link href="/">
      <LogoContainer>
        <Image src={LogoImage} alt="Pokeball" />
        <TextLogo>Centro de Pokémon</TextLogo>
      </LogoContainer>
    </Link>
  );
}
