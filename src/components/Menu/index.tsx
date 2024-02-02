import { ButtonLink } from "../Button";
import { MenuContainer } from "./styles";

export default function Menu() {
  return (
    <MenuContainer>
      <ButtonLink link="/about" hasBackground={false} textColor="#000">
        Quem somos
      </ButtonLink>
      <ButtonLink link="/scheduling" hasBackground textColor="#fff">
        Agendar Consulta
      </ButtonLink>
    </MenuContainer>
  );
}
