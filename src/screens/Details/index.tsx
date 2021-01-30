import React from 'react'

import DetailsRender from './DetailsRender'

const Details: React.FC = ({ route }) => {
  const { book } = route.params

  return (
    <DetailsRender book={book}/>
  )
}

export default Details
