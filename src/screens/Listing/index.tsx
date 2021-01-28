import React, { useState, useEffect } from 'react'

import api from '../../services/api'

import LinstingRender from './ListingRender'

export type IBook = {
  id: string;
  thumbnail: string;
}

const Listing: React.FC = () => {
  const [getLoadingScreen, setLoadingScreen] = useState(true)
  const [getBooks, setBooks] = useState<IBook[]>([])
  const [getTerm, setTerm] = useState('harry potter')

  async function fetchVolumes () {
    try {
      const response = await api.get(`/volumes?q=${getTerm}`)
      const { items } = response.data
      setBooks(items)
    } catch (err) {}
    setLoadingScreen(false)
  }

  useEffect(() => {
    fetchVolumes()
  }, [])

  return (
    <LinstingRender books={getBooks} loading={getLoadingScreen} />
  )
}

export default Listing
