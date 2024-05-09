import { StyleSheet, View, Text, Button } from 'react-native'
import React from 'react'

function PrivateScreen( {navigation} ) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Private</Text>
      <Button
        title="Home"
        onPress={() => navigation.navigate('home')}
      />
      <Button
        title="Development"
        onPress={() => navigation.navigate('development')}
      />
      <Button
        title="Photos"
        onPress={() => navigation.navigate('photos')}
      />
    </View>
  )
}

export default PrivateScreen

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#151718"
  },
  title: {
      fontSize: 20,
      fontWeight: 'bold',
      color: "#ECEDEE"
  }
})