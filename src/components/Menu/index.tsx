import { Button } from "../Button";
import { MenuContainer } from "./style";

export default function Menu() {
  return (
    <MenuContainer>
      <Button link="/about" hasBackground={false} textColor="#000">
        Quem somos
      </Button>
      <Button link="/about" hasBackground textColor="#fff">
        Agendar Consulta
      </Button>
    </MenuContainer>
  );
}
