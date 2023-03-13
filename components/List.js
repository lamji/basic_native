import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, TouchableOpacity, ScrollView } from "react-native";

export default function List() {
  const [people, setPeople] = useState([
    {
      name: "jick1",
      id: 1,
    },
    {
      name: "jick2",
      id: 2,
    },
    {
      name: "jick3",
      id: 3,
    },
    {
      name: "jick4",
      id: 4,
    },
    {
      name: "jick4",
      id: 5,
    },
    {
      name: "jick4",
      id: 6,
    },
    {
      name: "jick4",
      id: 7,
    },
    {
      name: "jick4",
      id: 8,
    },
  ]);
  
  /**
   * 
   */
  const pressHandler = (id) => {
    const res = people.filter(item => item.id !== id)
    setPeople(res)
  }

  return (
    <View style={styles.container}>
      {/* display list iten, method 1 
        1. By default, you cant scroll the list
        2. In order to scroll, soround map function with ScrollView
      
      */}
      <ScrollView>
      {people.map((item) => {
        return (
          <View key={item?.key}>
            <Text style={styles.item}>{item?.name}</Text>
          </View>
        );
      })}
      </ScrollView>
    
    {/* Method 2, flatList */}
    <FlatList
    // it looks like grid
     keyExtractor={(item) => item.id } // flatlist has a default key by looking key item, incase you are using id, you can use this
     data={people} // data that will display on screen
     renderItem={({item}) => (
      <TouchableOpacity onPress={() => pressHandler(item?.id)}>
        <Text style={styles.item}>{item?.name}</Text>
      </TouchableOpacity>
     
     )} // This function returns tha actula jsx, and destructure the item props
    />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

    backgroundColor: "#fff",
    paddingT: 40,
    paddingHorizontal: 20,
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: "gray",
    fontSize: 24,
    marginHorizontal: 10  
  },
});
