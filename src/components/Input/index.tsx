import React from "react";
import { InputContainer, InputName, InputBox, ErrorMessage } from "./styles";
import { InputProps } from "./types";

function Input(
  { labelName, errorMessage, ...props }: InputProps,
  ref: React.Ref<HTMLInputElement>
) {
  return (
    <InputContainer>
      <InputName>{labelName}</InputName>
      <InputBox ref={ref} {...props} />
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </InputContainer>
  );
}

export default React.forwardRef(Input);
