import styled from "styled-components";

export const SelectContainer = styled.div<{
  side: "top" | "left";
}>`
  display: flex;
  width: ${({ side }) => (side === "top" ? "265px" : "auto")};
  flex-direction: ${({ side }) => (side === "top" ? "column" : "row")};
  gap: ${({ side }) => (side === "top" ? "8px" : "38px")};
  align-items: ${({ side }) => (side === "top" ? "flex-start" : "center")};
`;
//8px;
export const SelectName = styled.span`
  font-weight: 700;
  font-size: 12px;
`;

export const SelectBox = styled.select`
  width: 100%;
  height: 45px;
  border-radius: 8px;
  border: 1px solid #d5d5d5;
  outline: none;
  padding-left: 14px;
  font-size: 14px;
  font-weight: 500;
  color: #747474;
`;
