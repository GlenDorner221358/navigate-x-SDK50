import { StyleSheet, View, Text, Button } from 'react-native'
import React from 'react'

function DevelopmentScreen( {navigation} ) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Development</Text>
      <Button
        title="Home"
        onPress={() => navigation.navigate('home')}
      />
      <Button
        title="Photos"
        onPress={() => navigation.navigate('photos')}
      />
      <Button
        title="Private"
        onPress={() => navigation.navigate('private')}
      />
    </View>
  )
}

export default DevelopmentScreen


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