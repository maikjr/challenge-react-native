import React from 'react'
import { StatusBar } from 'react-native'

import Listing from './screens/Listing'

const src: React.FC = () => {
  return (
    <>
    <StatusBar
      barStyle="light-content"
      hidden={false}
      backgroundColor="#f0d10f"
    />
    <Listing />
    </>
  )
}

export default src
