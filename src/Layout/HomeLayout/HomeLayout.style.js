import styled from "styled-components";
import { respondTo } from '../../utils/_respondTo';

export const Container = styled.div`
  margin : 0px auto;
  margin-top: 15vh;
  display: grid;
  grid-template-columns: 1fr;
  padding: 0 1em;
  ${respondTo.tablet`
    max-width : 60em;
  `}
  ${respondTo.desktop`
    max-width : 80em;
    grid-template-columns: 1fr 2fr;
  `}
`

export const SideBar = styled.div`
  grid-column: 1/1;
  grid-row:2/2;
  div {
      margin:0 auto;
  }
   ${respondTo.desktop`
    grid-column: 1/1;
    grid-row:1/1;
  `}
`

export const Main = styled.div`
  grid-column: 1/1;
  width: 90vw;
  ${respondTo.desktop`
    width:auto;
    grid-column: 2/2;
    grid-row:1/1;
  `}
`