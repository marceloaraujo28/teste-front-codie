import Image from "next/image";
import { Message, Box, Container, Title } from "./styles";
import successImage from "@/public/check.svg";
import errorImage from "@/public/warning.svg";
import { ButtonLink } from "@/src/components/Button";
import { SuccessOrErrorProps } from "./types";

export default function SuccessOrErrorForm({
  type,
  handleSuccessOrError,
  date,
  time,
  amount,
}: SuccessOrErrorProps) {
  function onSubmit() {
    handleSuccessOrError("");
  }

  return (
    <Container>
      <Box>
        <Title>
          {type === "success"
            ? "Consulta Agendada"
            : "Houve um problema no agendamento"}
        </Title>
        <Image
          src={type === "success" ? successImage : errorImage}
          alt={type}
        />
        <Message>
          {type === "success"
            ? `Seu agendamento para dia ${date}, às ${time}, para ${amount}x pokémons foi realizado com sucesso!`
            : "Houve um erro! Não foi possível realizar o seu agendamento!"}
        </Message>
        <ButtonLink onClick={onSubmit} hasBackground textColor="#fff">
          Fazer Novo Agendamento
        </ButtonLink>
      </Box>
    </Container>
  );
}
