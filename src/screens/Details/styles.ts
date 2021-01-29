import styled from 'styled-components/native'
import StarRating from 'react-native-star-rating'

import { fonts } from '../../assets/styles'

export const Container = styled.SafeAreaView`
  background-color: #fff;
  flex: 1;
`
export const Content = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false
})`
  flex: 1;
`
export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: #ffdd0d;
`
export const AppName = styled.Text`
  font-size: 20px;
  color: #463d06;
  border-bottom-width: 2px;
  border-bottom-color: #f0d10f;
  padding: 15px 0;
`
export const ButtonBack = styled.TouchableOpacity.attrs({
  hitSlop: { top: 20, bottom: 20, left: 50, right: 50 }
})`
`
export const ButtonSearch = styled.TouchableOpacity`
`
export const VolueInfo = styled.View`
  background-color: #ffdd0d;
  padding: 10px 20px;
`
export const VolueInfoDetails = styled.View`
  flex-direction: row;
`
export const VolumeDetails = styled.View`
  flex: 1;
  margin-left:20px;
`
export const VolumeThumbnail = styled.Image`
  height: 140px;
  width: 95px;
`
export const VolumeTitle = styled.Text`
  font-family: ${fonts.fontBold};
  font-size: 16px;
`

export const VolumeAuthor = styled.Text`
  color: #a1890c;
  margin-top: 5px;
`
export const VoluePriceAndRating = styled.View`
  flex-direction: row;
  margin-top: 10px;
`
export const VoluePrice = styled.Text`
  font-family: ${fonts.fontBold};
  font-size: 16px;
  margin-right: 10px;
`
export const Rating = styled(StarRating)`
`
export const VolumeDetailsFooter = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
`
export const PagesNumber = styled.Text`
  margin-left: 10px;
  color: #a1890c;
  font-family: ${fonts.fontRegular};
`
export const ButtonBuy = styled.TouchableOpacity`
  background-color: #4a90e2;
  width: 120px;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`

export const VolumeDetailsAction = styled.View`
  flex-direction: row;
`
export const ButtonBuyText = styled.Text`
  color: #fff;
 font-family: ${fonts.fontBold};
`
export const ButtonFavorite = styled.TouchableOpacity`
  background-color: #dc4b5d;
  width: 40px;
  height: 40px;
  margin-left: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`
export const Description = styled.Text`
  padding: 10px 20px;
  font-family: ${fonts.fontRegular};
  line-height: 30px;
`
