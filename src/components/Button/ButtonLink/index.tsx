import Link from "next/link";
import { ButtonLinkWrapper } from "./styles";
import { ButtonProps } from "./types";

export function ButtonLink({
  children,
  hasBackground,
  textColor,
  link,
  ...props
}: ButtonProps) {
  return (
    <Link href={link}>
      <ButtonLinkWrapper
        $hasBackground={hasBackground}
        $textColor={textColor}
        {...props}
      >
        {children}
      </ButtonLinkWrapper>
    </Link>
  );
}
