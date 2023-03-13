import React from 'react'
import { View, Text, StyleSheet} from 'react-native'

function Header() {
  return (
    <View style={styles.header}>
        <Text style={styles.title}>My Journey </Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    header: {
        height: 80,
        paddingTop: 38,
        backgroundColor: "white"
    }, 
    title: {
        textAlign: "center",
        // color: "#fff",
        fontSize: 20,
        fontWeight: "bold"
    }
})