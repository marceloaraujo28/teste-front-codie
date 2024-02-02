import { ButtonAddWrapper, Plus } from "./styles";
import { ButtonAddProps } from "./types";

export function ButtonAdd({ children, ...props }: ButtonAddProps) {
  return (
    <ButtonAddWrapper {...props}>
      {children}
      <Plus>+</Plus>
    </ButtonAddWrapper>
  );
}
