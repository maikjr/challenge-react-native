import React, { useState } from 'react'
import { Linking } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'

import {
  Container,
  Content,
  Header,
  AppName,
  ButtonBack,
  ButtonSearch,
  VolueInfo,
  VolueInfoDetails,
  VolumeDetails,
  VolumeThumbnail,
  VolumeTitle,
  VolumeAuthor,
  VoluePriceAndRating,
  VoluePrice,
  Rating,
  VolumeDetailsFooter,
  PagesNumber,
  VolumeDetailsAction,
  ButtonBuy,
  ButtonBuyText,
  ButtonFavorite,
  Description
} from './styles'

const Details: React.FC = ({ book }) => {
  const [getRating, setRating] = useState(book.volumeInfo.ratingsCount)
  const [getFavorite, setFavorite] = useState(false)
  const navigation = useNavigation()

  const thumbnail = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : 'https://www.virago.co.uk/wp-content/uploads/2018/07/missingbook.png'

  return (
    <Container>
       <Content>
      <Header>
        <ButtonBack onPress={() => navigation.goBack()}>
          <Icon name="arrow-back-outline" size={25} color="#463d06" />
        </ButtonBack>
        <AppName>Design Books</AppName>
        <ButtonSearch onPress={() => navigation.navigate('Search')}>
          <Icon name="md-search-outline" size={25} color="#463d06" />
        </ButtonSearch>
      </Header>
      <VolueInfo>
        <VolueInfoDetails>
        <VolumeThumbnail source={{ uri: thumbnail }} />
        <VolumeDetails>
            <VolumeTitle>{book.volumeInfo.title}</VolumeTitle>
            <VolumeAuthor>by {book.volumeInfo.publisher}</VolumeAuthor>
            <VoluePriceAndRating>
              {book.saleInfo.saleability === 'FOR_SALE' && (<VoluePrice>R$ {book.saleInfo.retailPrice.amount}</VoluePrice>)}
              <Rating
                disabled={false}
                maxStars={5}
                starSize={20}
                rating={getRating}
                selectedStar={(rating) => setRating(rating)}
              />
            </VoluePriceAndRating>
        </VolumeDetails>
        </VolueInfoDetails>
        <VolumeDetailsFooter>
          <PagesNumber>{book.volumeInfo.pageCount || '0'} pages</PagesNumber>
          <VolumeDetailsAction>
            <ButtonBuy onPress={() => {
              if (book.saleInfo.buyLink) {
                Linking.openURL(book.saleInfo.buyLink)
              } else {
                alert('Not for sale')
              }
            }
            }>
              <ButtonBuyText>BUY</ButtonBuyText>
            </ButtonBuy>
            <ButtonFavorite onPress={() => setFavorite(!getFavorite)}>
              {getFavorite
                ? (
                <Icon name="ios-heart" size={20} color="#fff" />
                  )
                : (<Icon name="heart-outline" size={20} color="#fff" />)}
            </ButtonFavorite>
          </VolumeDetailsAction>
        </VolumeDetailsFooter>
      </VolueInfo>

      <Description>
        {book.volumeInfo.description}
      </Description>
    </Content>
    </Container>
  )
}

export default Details
