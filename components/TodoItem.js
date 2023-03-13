import React from 'react'
import { View,Text, StyleSheet, TouchableOpacity } from 'react-native'

function TodoItem({data}) {
    console.log(data?.text)
  return (
    <View style={styles.container}>
        <View style={styles.container1}>
            <Text style={styles.verse}>John 3:16</Text>
            <View style={styles.line}></View>
            <Text style={styles.todo}>
                To do: {data.text}
            </Text>
            <Text style={styles.date}>Jan 20, 2023</Text>
        </View>
        <TouchableOpacity style={styles.marked}>
            <Text>del</Text>
        </TouchableOpacity>
      
    </View>
    
  )
}

export default TodoItem

const styles = StyleSheet.create({
    container: {
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "white",
        marginTop: 7,
        flexDirection: 'row',
        paddingHorizontal:10,
        borderRadius: 7,
        paddingVertical: 20
    },
    verse: {
        fontWeight: 600,
        fontSize: 16,
        color: "#00888f"
    },
    container1: {
        width: "90%",
        paddingHorizontal: 10
    },
    line: {
        backgroundColor: "#86A3B8",
        height: 1,
        width: "100%",
        marginVertical: 10
    },
    marked: {
        width: "10%"
    },
    todo: {
        color: "#93BFCF"
    },
    date: {
        marginTop: 10,
        color: "#DDDDDD"
    }
})