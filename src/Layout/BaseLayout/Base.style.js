import styled from "styled-components";
import { respondTo } from '../../utils/_respondTo'

export const Container = styled.div`
  margin : 0px auto;
  margin-top: 15vh;
  padding: 0 1.5em;
  ${respondTo.tablet`
    max-width : 50em;
  `}
`