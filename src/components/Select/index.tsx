import { SelectBox, SelectContainer, SelectName } from "./styles";
import { SelectProps } from "./types";

export default function Select({
  labelName,
  children,
  labelSide = "top",
  ...props
}: SelectProps) {
  return (
    <SelectContainer side={labelSide}>
      <SelectName>{labelName}</SelectName>
      <SelectBox {...props}>{children}</SelectBox>
    </SelectContainer>
  );
}
