import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  width: 265px;
  flex-direction: column;
  gap: 8px;
`;

export const InputName = styled.span`
  font-weight: 700;
  font-size: 12px;
`;

export const InputBox = styled.input`
  height: 45px;
  border-radius: 8px;
  border: 1px solid #d5d5d5;
  outline: none;
  padding-left: 14px;
  font-size: 14px;
  font-weight: 500;
  color: #747474;
`;

export const ErrorMessage = styled.span`
  color: #e40f0f;
  font-size: 10px;
  font-weight: 700;
`;
