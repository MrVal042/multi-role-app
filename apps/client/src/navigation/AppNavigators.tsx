import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SplashScreen from '../screens/SplashScreen'
import LoginScreen from '../screens/LoginScreen'
import MainTabNavigator from './TabNavigator'

const { Navigator, Screen } = createNativeStackNavigator()

export default function RootNavigator() {
  return (
    <Navigator initialRouteName='Splash'>
      <Screen
        name='Splash'
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <Screen
        name='Login'
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Screen
        name='Main'
        component={MainTabNavigator}
        options={{ headerShown: false }}
      />
    </Navigator>
  )
}
