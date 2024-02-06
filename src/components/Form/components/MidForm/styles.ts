import styled from "styled-components";

export const InputZone = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${(props) => props.theme.fontSize.s};
`;

export const MidFormContainer = styled.div`
  width: 548px;
  margin-top: 109px;
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.fontSize.l};
`;

export const HeaderMid = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.fontSize.s};
`;

export const HeaderName = styled.h3`
  font-weight: 700;
  font-size: ${(props) => props.theme.fontSize.mm};
`;

export const HeaderDescription = styled.p`
  font-size: ${(props) => props.theme.fontSize.mm};
  font-weight: 500px;
`;
