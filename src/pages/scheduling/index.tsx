import Breadcrumb from "@/src/components/Breadcrumb";
import { ButtonAdd, ButtonLink } from "@/src/components/Button";
import Info from "@/src/components/Info";
import Input from "@/src/components/Input";
import Select from "@/src/components/Select";
import {
  FormContainer,
  HeaderDescription,
  HeaderMid,
  HeaderName,
  MidForm,
  InputZone,
  SchedulingContainer,
  Title,
  TopForm,
  InfosContent,
  ImportantText,
  Submit,
  ValueTotal,
} from "@/src/styles/pages/scheduling";

export default function Scheduling() {
  return (
    <SchedulingContainer>
      <Breadcrumb page="Agendar Consulta" link="/scheduling" />
      <Title>Preencha o formulário abaixo para agendar sua consulta</Title>
      <FormContainer>
        <TopForm>
          <InputZone>
            <Input labelName="Nome" type="text" placeholder="Digite seu nome" />
            <Input
              labelName="Sobrenome"
              type="text"
              placeholder="Digite seu sobrenome"
            />
          </InputZone>
          <InputZone>
            <Select labelName="Região">
              <option value="">Marcelo</option>
            </Select>
            <Select labelName="Cidade">
              <option value="">Marcelo</option>
            </Select>
          </InputZone>
        </TopForm>
        <MidForm>
          <HeaderMid>
            <HeaderName>Cadastre seu time</HeaderName>
            <HeaderDescription>
              Atendemos até 06 pokémons por vez
            </HeaderDescription>
          </HeaderMid>
          <Select labelName="Pokémon" labelSide="left">
            <option value="">Marcelo</option>
          </Select>
          <Select labelName="Pokémon" labelSide="left">
            <option value="">Marcelo</option>
          </Select>
          <ButtonAdd>Adicionar novo pokémon ao time...</ButtonAdd>
          <InputZone>
            <Select labelName="Data para Atendimento">
              <option value="">Marcelo</option>
            </Select>
            <Select labelName="Horário de Atendimento">
              <option value="">Marcelo</option>
            </Select>
          </InputZone>
        </MidForm>
        <InfosContent>
          <Info name="Número de pokémons a serem atendidos:" value="01" />
          <Info name="Atendimento unitário por pokémon: " value="R$ 70,00" />
          <Info name="Subtotal:" value="R$ 70,00" />
          <Info name="Taxa geracional*: " value="R$ 2,10" />
          <ImportantText>
            *adicionamos uma taxa de 3%, multiplicado pelo número da geração
            mais alta do time, com limite de até 30%
          </ImportantText>
          <Submit>
            <ValueTotal>Valor Total: R$ 72,10</ValueTotal>
            <ButtonLink link="/" hasBackground textColor="#fff">
              Concluir Agendamento
            </ButtonLink>
          </Submit>
        </InfosContent>
      </FormContainer>
    </SchedulingContainer>
  );
}
