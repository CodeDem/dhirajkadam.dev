import styled from "styled-components";
import { respondTo } from '../../utils/_respondTo'

export const ProfileCard = styled.div`
  font-size: 1em;
  line-height: 1.5em;
  text-align: center;
  background-color: #FFFFFF;
  border-radius: 1em;
  box-shadow: 0 0 2em rgba(0,0,0,0.125);
  overflow: hidden;
  transition: 0.125s ease-in-out;
  -webkit-transition: 0.125s ease-in-out;
  -moz-transition: 0.125s ease-in-out;
  &:hover{
      transform: translateY(-0.5em);
    }

  ul{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  ${respondTo.tablet`
      width: 30em;
    `}
  ${respondTo.desktop`
      width: 18em;
  `}
`

export const HeaderImage = styled.div`
    width: 100%;
    height: 6em;
    padding-top: 2em;
    background-image: url("https://cms.dhirajkadam.dev/wp-content/uploads/2020/04/annie-spratt-0ZPSX_mQ3xI-unsplash.jpg");
    background-size: cover;
    background-color: #FAFAFA;

`

export const ProfileAvatar = styled.div`
    width: 6em;
    height: 6em;
    margin: auto ;
    background-image: url("https://cms.dhirajkadam.dev/wp-content/uploads/2020/04/dhirajkadam.jpg");
    background-size: cover;
    background-color: #EEEEEE;
    border-radius: 100%;
`

export const ProfileName = styled.p`
    margin-top: 3em;
    margin-bottom: .5em;
    padding: .8em;
    font-size: 1rem;
`

export const ProfileLink = styled.li`
    display: block;
    padding: .5em 1em;
    text-decoration: none;

    a{
      color: #424242;
      text-decoration: none;
    }

    &:hover{
      background-color: #FAFAFA;
      }
`

export const ProfileFooter = styled.ul`
  background-color: #FAFAFA;
  margin-top: .5em !important;
  padding: 1em 0 !important;
`

export const FooterLink = styled.li`
  display: inline-block;
  margin-right: 1em;
  font-size: 1.125rem;
   transition: 0.125s ease-in-out;
  -webkit-transition: 0.125s ease-in-out;
  -moz-transition: 0.125s ease-in-out;
  a{
      color: #424242;
    }

    &--dribbble{
      margin-right: 0;
    }

    &:hover{
      transform: scale(1.5);
      -webkit-transform: scale(1.5);
      -moz-transform: scale(1.5);
    }
`
