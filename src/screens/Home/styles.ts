import styled from 'styled-components/native'
import { fonts } from '../../assets/styles'

export const Container = styled.SafeAreaView`
  background-color: #ffdd0d;
  flex: 1;
`
export const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`
export const AppNameContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 80%;
`

export const AppName = styled.Text`
  font-family: ${fonts.fontBold};
  font-size: 28px;
  color: #463d06;
  padding: 15px 0;
`
export const AppDescription = styled.Text`
  font-family: ${fonts.fontRegular};
  font-size: 18px;
  color: #463d06;
  padding: 15px 0;
  text-align: center;
`
export const ButtonListing = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: #211f2a;
  height: 45px;
  width: 80%;
  border-radius: 25px;
  margin-bottom: 20px;
`

export const ButtonListingText = styled.Text`
  color: #fff;
  font-family: ${fonts.fontRegular};
`
