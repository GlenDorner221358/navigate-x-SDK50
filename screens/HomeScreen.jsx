import { StyleSheet, Text, View, Button } from 'react-native'
// import navigation
import React from 'react'

function HomeScreen( {navigation} ){
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <Button
        title="Development"
        onPress={() => navigation.navigate('development')}
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

export default HomeScreen

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