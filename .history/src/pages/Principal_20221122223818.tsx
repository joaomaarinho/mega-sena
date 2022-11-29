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

export default function Principal() {
    const [concurso, setConcurso] = useState({} as Props);
    useEffect(
        function () {
            (
                async function () {
                    const numero = Math.floor(Math.random() * 2533);
                    const temp: Props = await services.get(numero);
                    setConcurso(temp);
                    console.log(temp)
                }
            )()
        },
        []
    );

    return (
        <MainSld>
            {
                concurso.numero ? 
                <>
                    <Cabecalho numero={concurso.numero} dataApuracao={concurso.dataApuracao} />
                    {
                        concurso.acumulado ? <Acumulou /> : <Local localSorteio={concurso.localSorteio} nomeMunicipioUFSorteio={(concurso.nomeMunicipioUFSorteio).toUpperCase()} />
                    }
                    <Dezena listaDezenas={concurso.listaDezenas} />
                    <Proximo dataProximoConcurso={concurso.dataProximoConcurso} valorEstimadoProximoConcurso={concurso.valorEstimadoProximoConcurso} />
                </>
                : <Carregando />
            }
        </ MainSld>
    );
}