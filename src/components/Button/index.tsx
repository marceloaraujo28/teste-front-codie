import Link from "next/link";
import { ButtonWrapper } from "./style";
import { ButtonProps } from "./types";

export function Button({
  children,
  hasBackground,
  textColor,
  link,
  ...props
}: ButtonProps) {
  return (
    <Link href={link}>
      <ButtonWrapper
        $hasBackground={hasBackground}
        $textColor={textColor}
        {...props}
      >
        {children}
      </ButtonWrapper>
    </Link>
  );
}
