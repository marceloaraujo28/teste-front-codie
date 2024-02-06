import styled from "styled-components";

export const FooterContainer = styled.div`
  min-height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.gray400};
`;

export const FooterText = styled.p`
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.fontSize.m};
`;
