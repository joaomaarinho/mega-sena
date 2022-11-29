import styled from "styled-components";

export const MessageSld = styled.div`
  color: ${props => props.theme.secondary};
  padding: 15px 10px;
  font-size: 1.2rem;
  width: 30%;
  max-width: 300px;
`;

export const ValorSld = styled.div`
  color: ${props => props.theme.secondary};
  padding: 15px 10px;
  font-size: 2rem;
  font-weight: bold;
  width: 60%;
`;

export const FooterSld = styled.div`
display: flex;
flex-direction: line;
align-items: center;
`
