import styled from "styled-components";

export const SchedulingContainer = styled.div`
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

export const FormContainer = styled.main`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TopForm = styled.div`
  display: flex;
  gap: 32px;
  flex-direction: column;
`;

export const InputZone = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const MidForm = styled.div`
  width: 548px;
  margin-top: 109px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const HeaderMid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const HeaderName = styled.h3`
  font-weight: 700;
  font-size: 12px;
`;

export const HeaderDescription = styled.p`
  font-size: 12px;
  font-weight: 500px;
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
