import styled from "styled-components";
import Link from "next/link";

export const BreadcrumbsContainer = styled.div`
  height: 187px;
  background-color: #e40f0f;
  display: flex;
  flex-direction: column;
  padding: 0 106px;
  gap: 12px;
`;

export const BreadcrumbText = styled.div`
  margin-top: 32px;
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const Space = styled.span`
  font-size: 12px;
  color: #fff;
  display: flex;
`;

export const Text = styled(Link)`
  font-weight: 700;
  font-size: 12px;
  color: #fff;
`;

export const PageTitle = styled.p`
  font-weight: 800;
  font-size: 32px;
  color: #fff;
`;

export const Description = styled.p`
  font-size: 14px;
  color: #fff;
`;
