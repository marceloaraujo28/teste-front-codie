import styled from "styled-components";

export const SchedulingContainer = styled.main`
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
  flex: 1;
`;

export const Title = styled.h1`
  margin-top: 32px;
  color: #1d1d1d;
  font-weight: 600;
  font-size: 24px;
  text-align: center;
`;

export const FormContainer = styled.form`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InfosContent = styled.div`
  margin-top: 32px;
  width: 548px;
  display: flex;
  padding-top: 32px;
  flex-direction: column;
  border-top: 1px solid #d5d5d5;
  gap: 8px;
`;

export const ImportantText = styled.p`
  text-align: left;
  font-size: 8px;
`;

export const Submit = styled.div`
  margin-top: 31px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ValueTotal = styled.p`
  font-size: 24px;
  font-weight: 600;
  color: #1d1d1d;
`;
