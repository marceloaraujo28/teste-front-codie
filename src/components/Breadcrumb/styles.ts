import styled from "styled-components";
import Link from "next/link";

export const BreadcrumbsContainer = styled.div`
  height: 187px;
  background-color: ${(props) => props.theme.colors.primary};
  display: flex;
  flex-direction: column;
  padding: 0 106px;
  gap: ${(props) => props.theme.fontSize.mm};
`;

export const BreadcrumbText = styled.div`
  margin-top: ${(props) => props.theme.fontSize.l};
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.fontSize.xs};
`;

export const Space = styled.span`
  font-size: ${(props) => props.theme.fontSize.mm};
  color: ${(props) => props.theme.colors.white};
  display: flex;
`;

export const Text = styled(Link)`
  font-weight: 700;
  font-size: ${(props) => props.theme.fontSize.mm};
  color: ${(props) => props.theme.colors.white};
`;

export const PageTitle = styled.p`
  font-weight: 800;
  font-size: ${(props) => props.theme.fontSize.l};
  color: ${(props) => props.theme.colors.white};
`;

export const Description = styled.p`
  font-size: ${(props) => props.theme.fontSize.m};
  color: ${(props) => props.theme.colors.white};
`;
