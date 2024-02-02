import styled from "styled-components";

export const ButtonLinkWrapper = styled.button<{
  $hasBackground?: boolean;
  $textColor: string;
}>`
  background-color: ${(props) =>
    props.$hasBackground ? "#E40F0F" : "transparent"};
  font-weight: ${({ $hasBackground }) => ($hasBackground ? 700 : 400)};
  border: none;
  border-radius: 30px;
  cursor: pointer;
  color: ${({ $textColor }) => $textColor};
  padding: ${({ $hasBackground }) => ($hasBackground ? "13px 24px" : 0)};
  font-size: 14px;
`;
