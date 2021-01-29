import React, { useState, useEffect } from 'react'

import api from '../../services/api'
import { IBooks } from '../../types/IBooks'

import ListingRender from './ListingRender'

const Listing: React.FC = () => {
  const [getLoadingScreen, setLoadingScreen] = useState(true)
  const [getBooks, setBooks] = useState<IBooks[]>([])
  const [getPage, setPage] = useState(0)

  useEffect(() => {
    async function fetchVolumes () {
      setLoadingScreen(true)
      try {
        const startIndex = 12 * getPage
        const response = await api.get(`/volumes?q=harry potter&startIndex=${startIndex}&maxResults=12`)
        const { items } = response.data
        setBooks(getBooks.concat(items))
      } catch (err) {}
      setLoadingScreen(false)
    }
    fetchVolumes()
  }, [getPage])

  return (
    <ListingRender
      books={getBooks}
      setPage={() => setPage(getPage + 1)}
      loading={getLoadingScreen}
    />
  )
}

export default Listing
