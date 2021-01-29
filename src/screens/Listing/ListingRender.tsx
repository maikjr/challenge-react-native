import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'

import Book from '../../components/Book'
import LoadMoreButton from '../../components/LoadMoreButton'
import { IBooks } from '../../types/IBooks'

import {
  Container,
  Header,
  AppName,
  ButtonSearch,
  Content,
  ListBooks,
  Loading
} from './styles'

export type IListing = {
  books: IBooks[],
  loading: boolean,
  setPage: () => void
}

const Listing: React.FC<IListing> = ({ books, loading, setPage }: IListing) => {
  const navigation = useNavigation()

  return (
    <Container>
      <Header>
        <Icon name="menu-outline" size={25} color="#463d06" />
        <AppName>Design Books</AppName>
        <ButtonSearch onPress={() => navigation.navigate('Search')}>
          <Icon name="md-search-outline" size={25} color="#463d06" />
        </ButtonSearch>
      </Header>
      <Content>
        <ListBooks
          data={books}
          keyExtractor={item => item.id}
          numColumns={3}
          renderItem={({ item }) => <Book book={item} />}
          ListFooterComponent={() => {
            if (loading) {
              return (<Loading size="large" color="#000"/>)
            } else {
              return <LoadMoreButton onPress={setPage} />
            }
          }}
        >
      </ListBooks>
      </Content>
    </Container>
  )
}

export default Listing
