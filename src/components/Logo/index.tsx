import Link from "next/link";
import Image from "next/image";
import { LogoContainer, TextLogo } from "./styles";
import LogoImage from "@/public/images/white-pokeball.svg";

export default function Logo({ collapse }: { collapse: boolean }) {
  return (
    <Link href="/">
      <LogoContainer>
        <Image src={LogoImage} alt="Pokeball" />
        <TextLogo $autoCollapse={collapse}>Centro de Pokémon</TextLogo>
      </LogoContainer>
    </Link>
  );
}
