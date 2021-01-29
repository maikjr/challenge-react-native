import React from 'react'
import { useNavigation } from '@react-navigation/native'

import { IBooks } from '../../types/IBooks'

import { BookButton, BookThumbnail } from './styles'

const Book: React.FC<IBooks> = (props: IBooks) => {
  const navigation = useNavigation()
  const { book } = props
  const thumbnail = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : 'https://www.virago.co.uk/wp-content/uploads/2018/07/missingbook.png'
  return (
    <BookButton onPress={() => navigation.navigate('Details', { book })}>
      <BookThumbnail style={{ height: 140, width: 95 }} source={{ uri: thumbnail }} />
    </BookButton>
  )
}

export default Book
