import Breadcrumb from "@/src/components/Breadcrumb";

import { SchedulingContainer, Title } from "@/src/styles/pages/scheduling";

import { SchedulingProps } from "../../components/Form/types";
import React, { useState } from "react";
import axios from "axios";
import { QueryClient, dehydrate } from "react-query";

import { getTime } from "./utils/getTime";
import { getDate } from "./utils/getDate";
import Form from "@/src/components/Form";
import SuccesOrErrorForm from "@/src/components/Form/components/SuccessOrError";

export default function Scheduling({ date, time }: SchedulingProps) {
  const [successOrError, setSuccessOrError] = useState<string>("");
  const [schedulingInfo, setSchedulingInfo] = useState<{
    date: string;
    time: string;
    amount: string;
  }>({
    date: "",
    time: "",
    amount: "",
  });

  function handleSetSuccessOrError(type: string) {
    setSuccessOrError(type);
  }

  function handleSetDateTime(date: string, time: string, amount: string) {
    setSchedulingInfo({
      date,
      time,
      amount,
    });
  }

  function SuccesOrError() {
    if (successOrError === "success") {
      return (
        <SuccesOrErrorForm
          type="success"
          handleSuccessOrError={handleSetSuccessOrError}
          date={schedulingInfo.date}
          time={schedulingInfo.time}
          amount={schedulingInfo.amount}
        />
      );
    }
    if (successOrError === "error") {
      return (
        <SuccesOrErrorForm
          type="error"
          handleSuccessOrError={handleSetSuccessOrError}
        />
      );
    }
    return (
      <>
        <Title>Preencha o formulário abaixo para agendar sua consulta</Title>
        <Form
          date={date}
          time={time}
          handleSuccessOrError={handleSetSuccessOrError}
          handleSetDateTime={handleSetDateTime}
        />
        ;
      </>
    );
  }

  return (
    <SchedulingContainer>
      <Breadcrumb page="Agendar Consulta" link="/scheduling" />
      <SuccesOrError />
    </SchedulingContainer>
  );
}

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["getAllRegionsKey"], async () => {
    await axios
      .get("https://pokeapi.co/api/v2/region")
      .then((response) => response.data);
  });

  const date = (await getDate()) || [""];
  const time = (await getTime()) || [""];

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
      date,
      time,
    },
  };
}
