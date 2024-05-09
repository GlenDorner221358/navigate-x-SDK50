import { StyleSheet, View, Text, Button } from 'react-native'
import React from 'react'

function PhotosScreen( {navigation} ) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Photos</Text>
      <Button
        title="Home"
        onPress={() => navigation.navigate('home')}
      />
      <Button
        title="Development"
        onPress={() => navigation.navigate('development')}
      />
      <Button
        title="Private"
        onPress={() => navigation.navigate('private')}
      />
    </View>
  )
}

export default PhotosScreen

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