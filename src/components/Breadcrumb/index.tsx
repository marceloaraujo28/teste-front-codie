import Link from "next/link";
import {
  BreadcrumbText,
  BreadcrumbsContainer,
  Description,
  PageTitle,
  Space,
  Text,
} from "./style";
import { BreadcrumbProps } from "./types";

export default function Breadcrumb({ page, link }: BreadcrumbProps) {
  return (
    <BreadcrumbsContainer>
      <BreadcrumbText>
        <Text href="/">Home</Text>
        <Space>{">"}</Space>
        <Text href={link}>{page}</Text>
      </BreadcrumbText>
      <PageTitle>Quem Somos</PageTitle>
      <Description>A maior rede de tratamento pokémon.</Description>
    </BreadcrumbsContainer>
  );
}
