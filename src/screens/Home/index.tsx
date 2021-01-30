import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'

import {
  Container,
  Content,
  AppNameContainer,
  AppName,
  AppDescription,
  ButtonListing,
  ButtonListingText
} from './styles'

const Home: React.FC = ({ navigation }) => {
  return (
    <Container>
      <Content>
        <AppNameContainer>
          <Icon name="book-outline" size={55} color="#463d06" />
          <AppName>DesignBooks</AppName>
          <AppDescription>Acesse agora e tenha acesso a uma infinidade de livros!!</AppDescription>
        </AppNameContainer>
        <ButtonListing onPress={() => navigation.navigate('Listing')}>
          <ButtonListingText>ENTRAR</ButtonListingText>
        </ButtonListing>
      </Content>
    </Container>
  )
}

export default Home
