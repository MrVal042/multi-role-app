import React from 'react'
import { Button, Text } from '@react-navigation/elements'
import { StyleSheet, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export function Home() {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Text>Open up 'src/App.tsx' to start working on your app!</Text>
      <Button
        screen='Profile'
        params={{ user: 'jane', age: 10 }}
        variant='tinted'
      >
        Go to Profile
      </Button>
      <Button screen='Settings' variant='filled'>
        Go to Settings
      </Button>
      <Button screen='NotFound' variant='plain'>
        Not Found
      </Button>
      <Button
        onPressIn={() =>
          navigation.navigate('Profile', { user: 'John Doe', age: 50 })
        }
      >
        Profile
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
})
