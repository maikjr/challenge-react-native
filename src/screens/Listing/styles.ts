import styled from 'styled-components/native'

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
export const Content = styled.View`
  flex: 1;
  padding: 0 10px
`
export const ListBooks = styled.FlatList.attrs({
  contentContainerStyle: {
    justifyContent: 'center'
  }
})`
`
