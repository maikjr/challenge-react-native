import React from 'react'
import 'react-native-gesture-handler'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './screens/Home'
import Listing from './screens/Listing'
import Search from './screens/Search'
import Details from './screens/Details'

const Stack = createStackNavigator()

const routes: React.FC = () => {
  return (
    <NavigationContainer>
    <StatusBar backgroundColor="#f0d10f" hidden={false} barStyle={'dark-content'} />
    <Stack.Navigator initialRouteName="Home" >
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
      <Stack.Screen name="Listing" component={Listing} options={{ headerShown: false }}/>
      <Stack.Screen name="Search" component={Search} options={{ headerShown: false }}/>
      <Stack.Screen name="Details" component={Details} options={{ headerShown: false }}/>
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default routes
