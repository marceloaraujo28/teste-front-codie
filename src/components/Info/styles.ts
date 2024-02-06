import styled from "styled-components";

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Value = styled.p`
  font-size: ${(props) => props.theme.fontSize.m};
  color: ${(props) => props.theme.colors.gray200};
`;
