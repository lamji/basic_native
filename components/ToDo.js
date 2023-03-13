import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import Header from "./Header";
import TodoItem from "./TodoItem";

function ToDo() {
  const [todos, setTodos] = useState([
    { text: "buy coffe", key: 1 },
    { text: "create an app", key: 2 },
    { text: "play on the switch", key: 3 },
    { text: "play on the switch", key: 4 },
    { text: "play on the switch", key: 5 },
    { text: "play on the switch", key: 6 },
    { text: "play on the switch7", key: 7 },
  ]);
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.addToDos}>
        <View>
          <Text style={styles.devoHeader}>Today's Devotion</Text>
          <Text style={styles.devoSubHeader}>No devotion found</Text>
        </View>
        <TouchableOpacity style={styles.addDevo}>
          <Ionicons name="add" size={20} color="black" />
          <Text style={styles.addDevoText}>New Devo</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        {/* to do form */}
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => <TodoItem data={item} />}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default ToDo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  addToDos: {
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  devoHeader: {
    fontWeight: 600,
    fontSize: 25,
    color: "#00ABB3",
  },
  devoSubHeader: {
    color: "#B2B2B2",
    marginTop: 5,
    fontSize: 18,
  },
  addDevo: {
    backgroundColor: "#e5f6f7",
    paddingVertical: 18,
    paddingHorizontal: 20,
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  addDevoText: {
    fontWeight: 600,
    fontSize: 16,
    marginLeft: 10,
  },
  list: {
    paddingBottom: 20,
    flex: 1,
  },
});
