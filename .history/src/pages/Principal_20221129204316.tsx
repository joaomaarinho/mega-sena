import { useEffect, useState } from "react";
import { Cabecalho } from "../components/Cabecalho";
import { Acumulou } from "../components/Acumulou";
import services from "../services";
import { Props } from "../types";
import { Dezena } from "../components/Dezena";
import { Carregando } from "../components/Carregando";
import { Local } from "../components/Local";
import { MainSld } from "./styles";
import { Proximo } from "../components/Proximo";
import { ThemeProvider } from "styled-components";
import { dark, light } from "../styles/theme.d";

export default function Principal() {
  const [concurso, setConcurso] = useState({} as Props);
  const [theme, setTheme] = useState(dark);

  useEffect(
    function () {
      (async function () {
        const numero = Math.floor(Math.random() * 2533);
        const temp: Props = await services.get(numero);
        setConcurso(temp);
        setTheme(parseInt(concurso.listaDezenas[0]) % 2 === 0 ? light : dark);
        console.log(temp);
      })();
    },
    []
  );

  return (
    <ThemeProvider theme={theme}>
      <MainSld>
        {concurso.numero ? (
          <>
            <Cabecalho
              numero={concurso.numero}
              dataApuracao={concurso.dataApuracao}
            />
            {concurso.acumulado ? (
              <Acumulou />
            ) : (
              <Local
                localSorteio={concurso.localSorteio}
                nomeMunicipioUFSorteio={concurso.nomeMunicipioUFSorteio.toUpperCase()}
              />
            )}
            <Dezena listaDezenas={concurso.listaDezenas} />
            <Proximo
              dataProximoConcurso={concurso.dataProximoConcurso}
              valorEstimadoProximoConcurso={
                concurso.valorEstimadoProximoConcurso
              }
            />
          </>
        ) : (
          <Carregando />
        )}
      </MainSld>
    </ThemeProvider>
  );
}
