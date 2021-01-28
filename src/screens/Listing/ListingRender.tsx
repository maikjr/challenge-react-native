import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'

import { IBook } from './index'
import Book from '../../components/Book'

import {
  Container,
  Header,
  AppName,
  ButtonSearch,
  Content,
  ListBooks,
  ButtonLoadMore,
  ButtonLoadMoreText,
  Loading
} from './styles'

export type IListing = {
  books: IBook[],
  loading: boolean,
}

const Listing: React.FC<IListing> = ({ books, loading }: IListing) => {
  return (
    <Container>
      <Header>
        <Icon name="menu-outline" size={25} color="#463d06" />
        <AppName>Design Books</AppName>
        <ButtonSearch>
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
              return (
                <ButtonLoadMore>
                  <ButtonLoadMoreText>Carregar Mais</ButtonLoadMoreText>
                </ButtonLoadMore>
              )
            }
          }}
        >
      </ListBooks>
      </Content>
    </Container>
  )
}

export default Listing
