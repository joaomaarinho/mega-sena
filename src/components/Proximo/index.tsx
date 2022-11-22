import { MessageSld, ValorSld, FooterSld } from "./styles";

type Props = {
  dataProximoConcurso: string;
  valorEstimadoProximoConcurso: number;
};

export function Proximo({
  dataProximoConcurso,
  valorEstimadoProximoConcurso,
}: Props) {
  return (
    <FooterSld>
      <MessageSld>
        Estimativa do prêmio do próximo concurso {dataProximoConcurso}
      </MessageSld>
      <ValorSld>R$ {valorEstimadoProximoConcurso},00</ValorSld>
    </ FooterSld>
  );
}
