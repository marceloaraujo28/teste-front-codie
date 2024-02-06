import { TopFormContainer, InputZone } from "./styles";
import Input from "@/src/components/Input";
import { TopFormProps } from "./types";
import Select from "@/src/components/Select";
import { useGetAllRegions } from "@/src/api/hooks/useGetAllRegions";
import { useGetLocations } from "@/src/api/hooks/useGetLocations";

export default function TopForm({ errors, register, region }: TopFormProps) {
  const { regions: regionsData } = useGetAllRegions();
  const { locations } = useGetLocations(region);

  return (
    <TopFormContainer>
      <InputZone>
        <Input
          labelName="Nome"
          type="text"
          placeholder="Digite seu nome"
          errorMessage={errors.name?.message}
          {...register("name")}
        />
        <Input
          labelName="Sobrenome"
          type="text"
          placeholder="Digite seu sobrenome"
          errorMessage={errors.surname?.message}
          {...register("surname")}
        />
      </InputZone>
      <InputZone>
        <Select
          labelName="Região"
          {...register("region")}
          errorMessage={errors.region?.message}
        >
          <option value="" disabled hidden>
            Escolha uma região
          </option>
          {regionsData &&
            regionsData?.length > 0 &&
            regionsData?.map((region) => {
              return (
                <option key={region} value={region}>
                  {region}
                </option>
              );
            })}
        </Select>
        <Select
          labelName="Cidade"
          {...register("city")}
          errorMessage={errors.city?.message}
        >
          <option value="" disabled hidden>
            Selecione sua cidade
          </option>
          {locations &&
            locations?.length > 0 &&
            locations?.map((location, index) => {
              return (
                <option key={`${location}+${index}`} value={location}>
                  {location}
                </option>
              );
            })}
        </Select>
      </InputZone>
    </TopFormContainer>
  );
}
