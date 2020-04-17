import styled from "styled-components";
import {
  respondTo
} from '../../utils/_respondTo'

export const Wrapper = styled.div`
  margin: 3em auto;
  text-align: center;
  ${respondTo.laptop`
    margin: auto;
    text-align: left;
  `}
`

export const Title = styled.h1`
  position: relative;
  display:inherit;
  &:after{
    content:"";
    background: yellow;
    transition:height 200ms;
    z-index:-1;
    position: absolute;
    bottom:0;
    left: 0;
    width:100%;
    height:0%;
    margin-bottom: 2%;
  }
  // &:hover:after{
  //   height:20%;
  // }
`