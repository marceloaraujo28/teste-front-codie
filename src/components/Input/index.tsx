import { InputContainer, InputName, InputBox } from "./styles";
import { InputProps } from "./types";

export default function Input({ labelName, ...props }: InputProps) {
  return (
    <InputContainer>
      <InputName>{labelName}</InputName>
      <InputBox {...props} />
    </InputContainer>
  );
}
