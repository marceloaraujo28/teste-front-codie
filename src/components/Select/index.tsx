import { ErrorMessage, SelectBox, SelectContainer, SelectName } from "./styles";
import { SelectProps } from "./types";
import React from "react";

function Select(
  {
    labelName,
    children,
    labelSide = "top",
    errorMessage,
    ...props
  }: SelectProps,
  ref: React.Ref<HTMLSelectElement>
) {
  return (
    <>
      <SelectContainer $side={labelSide}>
        <SelectName>{labelName}</SelectName>
        <SelectBox ref={ref} {...props}>
          {children}
        </SelectBox>

        <ErrorMessage>{errorMessage}</ErrorMessage>
      </SelectContainer>
    </>
  );
}

Select.displayName = "Select";

export default React.forwardRef(Select);
