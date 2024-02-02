import { InfoContainer, Value } from "./styles";
import { InfoProps } from "./types";

export default function Info({ name, value }: InfoProps) {
  return (
    <InfoContainer>
      <Value>{name} </Value>
      <Value>{value}</Value>
    </InfoContainer>
  );
}
