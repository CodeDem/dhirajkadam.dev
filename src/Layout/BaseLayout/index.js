import React from 'react'
import { Container } from './Base.style'
import Navbar from '../../components/Navbar'
const BaseLayout = (props) => {
  return (
    <React.Fragment>
      <Navbar />
      <Container>
        {props.children}
      </Container>
    </React.Fragment>
  )
}

export default BaseLayout
