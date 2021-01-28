import React, { useState } from 'react'

import LinstingRender from './ListingRender'

export type IBook = {
  id: string;
  thumbnail: string;
}

const Listing: React.FC = () => {
  const [getBooks, setBooks] = useState<IBook[]>([
    { id: '00', thumbnail: 'Relâmpago McQueen' },
    { id: '01', thumbnail: 'Agente Tom Mate' },
    { id: '02', thumbnail: 'Doc Hudson' },
    { id: '03', thumbnail: 'Cruz Ramirez' },
    { id: '04', thumbnail: 'Cruz Ramirez' },
    { id: '05', thumbnail: 'Cruz Ramirez' },
    { id: '06', thumbnail: 'Cruz Ramirez' },
    { id: '07', thumbnail: 'Cruz Ramirez' },
    { id: '08', thumbnail: 'Cruz Ramirez' },
    { id: '08', thumbnail: 'Cruz Ramirez' },
    { id: '08', thumbnail: 'Cruz Ramirez' },
    { id: '08', thumbnail: 'Cruz Ramirez' }
  ])
  return <LinstingRender books={getBooks} />
}

export default Listing
