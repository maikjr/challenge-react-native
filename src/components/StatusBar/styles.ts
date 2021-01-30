
import styled from 'styled-components/native'
import { getStatusBarHeight } from 'react-native-status-bar-height'

export const Container = styled.View`
  height: ${getStatusBarHeight || 0}px;
`
