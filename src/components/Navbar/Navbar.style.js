import styled from "styled-components";
import { respondTo } from '../../utils/_respondTo'

export const Nav = styled.nav`
  position:fixed;
  z-index:100;
  background-color: white;
  top: 0;
  display : flex;
  flex-direction: row;
  width: 100%;
   padding  .5em .5em;
  justify-content: space-between;
  -webkit-box-shadow: 0 8px 6px -6px #999;
  -moz-box-shadow: 0 8px 6px -6px #999;
  box-shadow: 0 8px 6px -6px #999;
  ${respondTo.tablet`
      padding  .5em 5em;
  `}
`

export const Logo = styled.div`
  h1 {
    margin: 4px;
    font-size : 1.7em;
  }
`

export const Social = styled.div`
  display: flex;
  flex-direction: row;
  a{
    margin : 0 8px;
    display:flex;
    align-items: center;
  }
`