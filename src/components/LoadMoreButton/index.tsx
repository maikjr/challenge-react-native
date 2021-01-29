import React from 'react'

import {
  ButtonLoadMore,
  ButtonLoadMoreText
} from './styles'

type ILoadMoreButton = {
  onPress: () => void
}

const LoadMoreButton: React.FC<ILoadMoreButton> = ({ onPress }) => {
  return (
    <ButtonLoadMore onPress={onPress}>
      <ButtonLoadMoreText>Carregar Mais</ButtonLoadMoreText>
    </ButtonLoadMore>
  )
}

export default LoadMoreButton
