import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Box = styled.main`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px 34px 34px;
  background-color: aquamarine;
  flex-direction: column;
  background-color: rgba(223, 134, 134, 0.04);
  border: 1px solid ${(props) => props.theme.colors.red100};
  border-radius: ${(props) => props.theme.fontSize.s};
`;

export const Title = styled.h1`
  font-size: 20px;
`;

export const Message = styled.p`
  color: ${(props) => props.theme.colors.gray200};
  font-size: ${(props) => props.theme.fontSize.m};
  max-width: 339px;
  text-align: center;
`;
