import styled from "styled-components";

export const CardContainer = styled.div`
  margin-bottom: 4em;
  a{
    text-decoration:none
  }
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
  &:hover:after{
    height:25%;
  }
`

export const Meta = styled.div`
  display : flex;
  flex-direction: row;
  justify-content: space-round;
  a {
    margin-right: 16px;
  }
`

export const Divider = styled.hr`
  margin: 0 0 50px 0;
  display: block;
  border: none;
  height: 1px;
  background: #0071B9;
  background: linear-gradient(to right, white, #0071B9, #26ABFF, #0071B9, white);
`