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

  async function searchVolumes () {
    setLoadingScreen(true)
    try {
      const response = await api.get(`/volumes?q=${getTerm}`)
      const { items } = response.data
      setBooks(items)
    } catch (err) {}
    setLoadingScreen(false)
  }

  useEffect(() => {
    if (getTerm.length > 4) {
      searchVolumes()
    }
  }, [getTerm])

  return <SearchRender books={getBooks} loading={getLoadingScreen} setTerm={setTerm} />
}

export default Search
