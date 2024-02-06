import { HeaderContainer } from "./styles";
import Logo from "@/src/components/Logo";
import Menu from "@/src/components/Menu";
import { useRouter } from "next/router";

export default function Header() {
  const { pathname } = useRouter();

  return (
    <HeaderContainer>
      <Logo collapse={pathname === "/"} />
      <Menu />
    </HeaderContainer>
  );
}
