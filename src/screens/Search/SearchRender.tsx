import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'

import { IBook } from '../Listing'
import Book from '../../components/Book'

import {
  Container,
  Header,
  ButtonBack,
  Content,
  ListBooks,
  ButtonLoadMore,
  ButtonLoadMoreText,
  Loading
} from '../Listing/styles'

import {
  SearchForm,
  SearchInput
} from './styles'

export type ISearch = {
  books: IBook[],
  loading: boolean,
}

const Search: React.FC<ISearch> = ({ books, loading }: ISearch) => {
  return (
    <Container>
      <Header>
        <ButtonBack>
          <Icon name="arrow-back-outline" size={25} color="#463d06" />
        </ButtonBack>
        <SearchForm>
          <SearchInput />
        </SearchForm>
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

export default Search
