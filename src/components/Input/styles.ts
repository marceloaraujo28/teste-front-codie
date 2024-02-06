import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  width: 265px;
  flex-direction: column;
  gap: ${(props) => props.theme.fontSize.s};
`;

export const InputName = styled.span`
  font-weight: 700;
  font-size: ${(props) => props.theme.fontSize.mm};
`;

export const InputBox = styled.input`
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
`;
