import React, { useState, useEffect } from 'react'

import api from '../../services/api'

import ListingRender from './ListingRender'

export type IBook = {
  id: string;
  thumbnail: string;
}

const Listing: React.FC = () => {
  const [getLoadingScreen, setLoadingScreen] = useState(true)
  const [getBooks, setBooks] = useState<IBook[]>([])

  useEffect(() => {
    async function fetchVolumes () {
      try {
        const response = await api.get('/volumes?q=harry potter')
        const { items } = response.data
        setBooks(getBooks.concat(items))
      } catch (err) {}
      setLoadingScreen(false)
    }
    fetchVolumes()
  }, [])

  return (
    <ListingRender
      books={getBooks}
      loading={getLoadingScreen}
    />
  )
}

export default Listing
