import {
  ErrorMessage,
  SelectBox,
  SelectContainer,
  SelectLeftContainer,
  SelectLeftNameandInput,
  SelectName,
} from "./styles";
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
        {labelSide === "top" ? (
          <React.Fragment>
            <SelectName>{labelName}</SelectName>
            <SelectBox ref={ref} {...props}>
              {children}
            </SelectBox>

            <ErrorMessage>{errorMessage}</ErrorMessage>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <SelectLeftContainer>
              <SelectLeftNameandInput>
                <SelectName>{labelName}</SelectName>
                <SelectBox ref={ref} {...props}>
                  {children}
                </SelectBox>
              </SelectLeftNameandInput>

              <ErrorMessage>{errorMessage}</ErrorMessage>
            </SelectLeftContainer>
          </React.Fragment>
        )}
      </SelectContainer>
    </>
  );
}

Select.displayName = "Select";

export default React.forwardRef(Select);
