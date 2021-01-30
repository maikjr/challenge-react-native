import React from 'react'
import { StatusBar } from 'react-native'

import { Container } from './styles'

const GeneralStatusBarColor = ({ backgroundColor, ...props }) => (
  <Container style={{ backgroundColor }}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </Container>
)

export default GeneralStatusBarColor
