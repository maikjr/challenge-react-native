import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'

import Book from '../../components/Book'
import LoadMoreButton from '../../components/LoadMoreButton'
import { IBook } from '../Listing'

import {
  Container,
  Header,
  ButtonBack,
  Content,
  ListBooks,
  Loading
} from '../Listing/styles'

import {
  SearchForm,
  SearchInput
} from './styles'

export type ISearch = {
  books: IBook[],
  loading: boolean,
  setTerm: () => void,
  setPage: () => void,
}

const Search: React.FC<ISearch> = ({ books, loading, setTerm, setPage }: ISearch) => {
  const navigation = useNavigation()

  return (
    <Container>
      <Header>
        <ButtonBack onPress={() => navigation.goBack()}>
          <Icon name="arrow-back-outline" size={25} color="#463d06" />
        </ButtonBack>
        <SearchForm>
          <SearchInput placeholder="Pesquise por titulos" onChangeText={(term) => setTerm(term)} />
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
          } else if (books.length) {
            return <LoadMoreButton onPress={setPage} />
          } else {
            return (<></>)
          }
        }}
      >
      </ListBooks>
      </Content>
    </Container>
  )
}

export default Search
