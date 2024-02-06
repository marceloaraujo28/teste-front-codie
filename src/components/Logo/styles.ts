import styled from "styled-components";

export const LogoContainer = styled.div`
  height: 61px;
  border-radius: 50px;
  background-color: ${(props) => props.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 28px 0px 13px;
  gap: 19px;
`;

export const TextLogo = styled.span`
  color: ${(props) => props.theme.colors.white};
  font-weight: 600;
  font-size: 20px;
`;
