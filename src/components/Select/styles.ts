import styled from "styled-components";

export const SelectContainer = styled.div<{
  $side: "top" | "left";
}>`
  display: flex;
  width: ${({ $side }) => ($side === "top" ? "265px" : "auto")};
  flex-direction: ${({ $side }) => ($side === "top" ? "column" : "row")};
  gap: ${({ $side }) => ($side === "top" ? "8px" : "38px")};
  align-items: ${({ $side }) => ($side === "top" ? "flex-start" : "center")};
`;
export const SelectName = styled.span`
  font-weight: 700;
  font-size: ${(props) => props.theme.fontSize.mm};
`;

export const SelectLeftContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: ${(props) => props.theme.fontSize.s};
`;

export const SelectLeftNameandInput = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 38px;
`;

export const SelectBox = styled.select`
  width: 100%;
  height: 45px;
  border-radius: ${(props) => props.theme.fontSize.s};
  border: 1px solid ${(props) => props.theme.colors.gray300};
  outline: none;
  padding-left: ${(props) => props.theme.fontSize.m};
  font-size: ${(props) => props.theme.fontSize.m};
  font-weight: 500;
  color: ${(props) => props.theme.colors.gray200};
`;

export const ErrorMessage = styled.span`
  color: ${(props) => props.theme.colors.primary};
  font-size: 10px;
  font-weight: 700;
  text-align: right;
`;
