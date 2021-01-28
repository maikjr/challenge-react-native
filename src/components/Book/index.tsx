import React from 'react'

import { BookButton, BookThumbnail } from './styles'

const Book: React.FC = () => {
  return (
    <BookButton>
      <BookThumbnail style={{ height: 140, width: 95 }} source={{ uri: 'http://books.google.com/books/content?id=s7FDoirquD4C&printsec=frontcover&img=1&zoom=1&source=gbs_api' }} />
    </BookButton>
  )
}

export default Book
