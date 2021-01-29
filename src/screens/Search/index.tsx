import React, { useState, useEffect } from 'react'

import api from '../../services/api'
import SearchRender from './SearchRender'

type IBook = {
  id: string;
  thumbnail: string;
}

const Search: React.FC = () => {
  const [getLoadingScreen, setLoadingScreen] = useState(false)
  const [getBooks, setBooks] = useState<IBook[]>([])
  const [getTerm, setTerm] = useState('')
  const [getPage, setPage] = useState(0)

  async function searchVolumes () {
    setLoadingScreen(true)
    setPage(0)
    try {
      const response = await api.get(`/volumes?q=${getTerm}&startIndex=0&maxResults=12`)
      const { items } = response.data
      setBooks(items)
    } catch (err) {}
    setLoadingScreen(false)
  }

  async function loadMoreVolumes () {
    setLoadingScreen(true)
    try {
      const startIndex = 12 * getPage
      const response = await api.get(`/volumes?q=${getTerm}&startIndex=${startIndex}&maxResults=12`)
      const { items } = response.data
      setBooks(getBooks.concat(items))
    } catch (err) {}
    setLoadingScreen(false)
  }

  useEffect(() => {
    if (getTerm.length > 4) {
      searchVolumes()
    }
  }, [getTerm])

  useEffect(() => {
    loadMoreVolumes()
  }, [getPage])

  return <SearchRender
    books={getBooks}
    loading={getLoadingScreen}
    setTerm={setTerm}
    setPage={() => setPage(getPage + 1)}
    />
}

export default Search
