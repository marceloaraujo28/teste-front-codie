import styled from "styled-components";

export const FormContainer = styled.form`
  margin-top: ${(props) => props.theme.fontSize.l};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InfosContent = styled.div`
  margin-top: ${(props) => props.theme.fontSize.l};
  width: 548px;
  display: flex;
  padding-top: ${(props) => props.theme.fontSize.l};
  flex-direction: column;
  border-top: 1px solid ${(props) => props.theme.colors.gray300};
  gap: ${(props) => props.theme.fontSize.s};
`;

export const ImportantText = styled.p`
  text-align: left;
  font-size: ${(props) => props.theme.fontSize.s};
`;

export const Submit = styled.div`
  margin-top: 31px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ValueTotal = styled.p`
  font-size: ${(props) => props.theme.fontSize.ml};
  font-weight: 600;
  color: ${(props) => props.theme.colors.gray400};
`;
