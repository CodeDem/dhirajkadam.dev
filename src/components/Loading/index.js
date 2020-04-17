import React from 'react'
import Lottie from 'react-lottie';
import * as animationData from '../../assets/lottie/loading.json'
import { Container } from './Loading.style'
export default class LottieControl extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData.default,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

    return (
      <Container>
        <Lottie options={defaultOptions}
          height={400}
          width={400}
        />
      </Container>
    )
  }
}