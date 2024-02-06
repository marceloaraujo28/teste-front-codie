import styled from "styled-components";

export const TopFormContainer = styled.div`
  display: flex;
  gap: ${(props) => props.theme.fontSize.l};
  flex-direction: column;
`;

export const InputZone = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${(props) => props.theme.fontSize.s};
`;
