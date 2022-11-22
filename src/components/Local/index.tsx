import { LocalSld } from "./styles"

type Props = {
    localSorteio: string;
    nomeMunicipioUFSorteio: string;
}

export function Local({localSorteio, nomeMunicipioUFSorteio}:Props) {
    return (
        <LocalSld>Sorteio Realizado no {localSorteio} em {nomeMunicipioUFSorteio}</LocalSld>
    )
}