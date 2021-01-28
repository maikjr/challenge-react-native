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
  ListBooks
} from './styles'

type IListing = {
  books: IBook[]
}

const Listing: React.FC<IListing> = ({ books }) => {
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
        renderItem={({ item }) => {
          return <Book />
        }}
      >
      </ListBooks>
      </Content>
    </Container>
  )
}

export default Listing
