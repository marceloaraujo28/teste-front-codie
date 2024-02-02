import { HeaderContainer } from "./styles";
import Logo from "@/src/components/Logo";
import Menu from "@/src/components/Menu";

export default function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <Menu />
    </HeaderContainer>
  );
}
