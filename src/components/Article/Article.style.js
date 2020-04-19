import styled from "styled-components";
import { respondTo } from '../../utils/_respondTo'

export const ArticleHeroImage = styled.div`
    h1{
      text-align:center;
      color : whitesmoke;  
      font-size : 3em;
    }
    padding: 1em;
    min-height: 15em;
    display:flex;
    justify-content: center;
    align-items:center;
    background-image:linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),  url("${props => props.src}"); /* The image used */
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover; /* Resize the background image to cover the entire container */
   ${respondTo.tablet`
    margin : 2em 0;
    padding: 2em;
     h1{
      font-size : 4em;
    }
    height : 20em;
    width: 100%
  `}

`