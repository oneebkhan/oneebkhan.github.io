import React from 'react'
import { Container } from './styles'
import RevealText from '../../component/RevealText'

const FullScreenSlideText = ({text = ''}) => {
  return (
    <Container>
      <RevealText text={text}/>
    </Container>
  )
}

export default FullScreenSlideText