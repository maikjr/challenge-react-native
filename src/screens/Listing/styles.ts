import styled from 'styled-components/native'
import { fonts } from '../../assets/styles'

export const Container = styled.SafeAreaView`
  background-color: #ffdd0d;
  flex: 1;
`
export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`
export const AppName = styled.Text`
  font-size: 20px;
  color: #463d06;
  border-bottom-width: 2px;
  border-bottom-color: #f0d10f;
  padding: 15px 0;
`
export const ButtonSearch = styled.TouchableOpacity`
`
export const ButtonBack = styled.TouchableOpacity.attrs({
  hitSlop: { top: 20, bottom: 20, left: 50, right: 50 }
})`
`
export const Content = styled.View`
  flex: 1;
  padding: 0 10px;
`
export const ListBooks = styled.FlatList.attrs({
  showsHorizontalScrollIndicator: false,
  showsVerticalScrollIndicator: false,
  ListFooterComponentStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10
  },
  contentContainerStyle: {
    justifyContent: 'center'
  }
})`
flex: 1;
`
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

export const Loading = styled.ActivityIndicator`
`
