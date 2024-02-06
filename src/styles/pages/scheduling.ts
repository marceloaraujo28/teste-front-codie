import styled from "styled-components";

export const SchedulingContainer = styled.main`
  display: flex;
  flex-direction: column;
  margin-bottom: ${(props) => props.theme.fontSize.l};
  flex: 1;
`;

export const Title = styled.h1`
  margin-top: ${(props) => props.theme.fontSize.l};
  color: ${(props) => props.theme.colors.gray400};
  font-weight: 600;
  font-size: 24px;
  text-align: center;
`;
