import React from 'react';
import {
  Container,
  SideBar,
  Main
} from './HomeLayout.style'
import Navbar from '../../components/Navbar'

const HomeLayout = (props) => {
  return (
    <React.Fragment>
      <Navbar />
      <Container>
        <SideBar>
          {props.sidebar}
        </SideBar>
        <Main>
          {props.main}
        </Main>
      </Container>
    </React.Fragment>
  )
}

export default HomeLayout
