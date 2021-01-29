import styled from 'styled-components/native'
import { fonts } from '../../assets/styles'

export const ButtonLoadMore = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: #211f2a;
  height: 45px;
  width: 180px;
  border-radius: 25px;
`

export const ButtonLoadMoreText = styled.Text`
  color: #fff;
  font-family: ${fonts.fontRegular};
`
