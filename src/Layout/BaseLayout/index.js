import React from 'react'
import { Container } from './Base.style'
import Navbar from '../../components/Navbar'
const BaseLayout = (props) => {
  return (

    <Container>
      <Navbar />
      {props.children}
    </Container>
  )
}

export default BaseLayout
