import Link from "next/link";
import { ButtonLinkWrapper } from "./styles";
import { ButtonProps } from "./types";

export function ButtonLink({
  children,
  hasBackground,
  textColor,
  link = "",
  type,
  ...props
}: ButtonProps) {
  return (
    <>
      {type === "submit" ? (
        <ButtonLinkWrapper
          $hasBackground={hasBackground}
          $textColor={textColor}
          {...props}
        >
          {children}
        </ButtonLinkWrapper>
      ) : (
        <Link href={link}>
          <ButtonLinkWrapper
            $hasBackground={hasBackground}
            $textColor={textColor}
            {...props}
          >
            {children}
          </ButtonLinkWrapper>
        </Link>
      )}
    </>
  );
}
