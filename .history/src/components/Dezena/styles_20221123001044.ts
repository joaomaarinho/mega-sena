import styled from "styled-components";

export const WrapperSld = styled.div`
  display: flex;
  padding: 20px 0px;
`;

export const DezenaSld = styled.div`
  position: relative;
  display: inline-block;
  margin: 0 12px 0 0;
  font-family: "FuturaWeb", sans-serif;
  font-size: 2rem;
  color: ${props => props.theme.background};
  background: ${props => props.theme.green};
  border-radius: 46px;
  width: 92px;
  height: 67px;
  text-align: center;
  padding-top: 25px;
`;
