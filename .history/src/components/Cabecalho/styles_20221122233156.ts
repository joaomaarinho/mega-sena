import styled from 'styled-components';

export const WrapperSld = styled.div`
    display: flex;
    border-bottom: 1px solid #bbb;
    align-items: flex-end;
    padding: 10px 0px;
`;

export const ResultadoSld = styled.div`
    color: ${props => props.theme.primary};
    font-size: 2.7rem;
    font-weight: bold;
    padding: 0px;
    line-height: 100%
`;

export const ConcursoSld = styled.div`
    color: ${props => props.theme.secondary};
    font-size: 1.5rem;
    margin-left: 15px
`;
