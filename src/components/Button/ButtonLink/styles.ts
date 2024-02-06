import styled from "styled-components";

export const ButtonLinkWrapper = styled.button<{
  $hasBackground?: boolean;
  $textColor: string;
}>`
  background-color: ${(props) =>
    props.$hasBackground ? props.theme.colors.primary : "transparent"};
  font-weight: ${({ $hasBackground }) => ($hasBackground ? 700 : 400)};
  border: none;
  border-radius: 30px;
  cursor: pointer;
  color: ${({ $textColor }) => $textColor};
  padding: ${({ $hasBackground }) => ($hasBackground ? "13px 24px" : 0)};
  font-size: ${(props) => props.theme.fontSize.m};
`;
