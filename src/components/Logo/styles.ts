import styled from "styled-components";
import { keyframes, css } from "styled-components";

const textHide = keyframes`   
  0% {
    width: 191px;
    display: block;
  }
  83%{
    width: 191px;
    display: block;
  }
  100% {
    width: 0px;
    display: none;
  }
`;

const textHideInverse = keyframes`   
  0% {
    width: 0px;
    display: none;
  }
  100% {
    width: 191px;
    display: block;
  }
`;

export const TextLogo = styled.span<{
  $autoCollapse: Boolean;
}>`
  color: white;
  white-space: nowrap;
  font-weight: 600;
  font-size: 20px;
  animation: ${({ $autoCollapse }) =>
    $autoCollapse
      ? css`
          ${textHide} 6s linear normal
        `
      : "none"};
  display: none;
  width: 0px;
`;

export const LogoContainer = styled.div`
  height: 61px;
  border-radius: 50px;
  background-color: #e40f0f;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 13px 0px 13px;
  gap: 19px;

  &:hover ${TextLogo} {
    animation: ${textHideInverse} 1s linear normal;
    display: block;
    width: 191px;
  }
`;
