import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
} from "react-native";

function DismissKeyboard() {
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState("");
  return (
    <TouchableWithoutFeedback onPress={() => {
        Keyboard.dismiss()
    }}>
      <SafeAreaView style={styles.container}>
        <TextInput
          style={styles.inputStyles}
          onChangeText={onChangeText}
          value={text}
        />
        <TextInput
          style={styles.inputStyles}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="useless placeholder"
          keyboardType="numeric"
        />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

export default DismissKeyboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  inputStyles: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
