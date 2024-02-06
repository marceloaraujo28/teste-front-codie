import styled from "styled-components";

export const ButtonAddWrapper = styled.button`
  background-color: transparent;
  font-weight: 700;
  border: 1px solid ${(props) => props.theme.colors.gray400};
  border-radius: 30px;
  cursor: pointer;
  padding: ${(props) => props.theme.fontSize.m} 13px;
  font-size: ${(props) => props.theme.fontSize.mm};
  width: fit-content;
`;

export const Plus = styled.span`
  font-weight: 700;
  font-size: ${(props) => props.theme.fontSize.base};
  margin-left: 11px;
`;
