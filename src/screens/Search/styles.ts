import styled from 'styled-components/native'
import { fonts } from '../../assets/styles'

export const SearchForm = styled.View`
  flex:1;
  height: 60px;
  justify-content: center;
`
export const SearchInput = styled.TextInput`
  font-family: ${fonts.fontRegular};
  font-size: 14px;
  height: 40px;
  padding: 0 10px;
  background-color: #fff;
  margin-left: 20px;
  border-radius: 5px;
`
