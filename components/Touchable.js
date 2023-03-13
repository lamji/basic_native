import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'

export default function Touchable() {
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={() => console.log("clicked")}>
            <Text>Click Me</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
 
});
