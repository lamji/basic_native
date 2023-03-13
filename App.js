import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Icons from './components/Icons';
import DismissKeyboard from './components/Keyboard/DismissKeyboard';
import List from './components/List';
import ToDo from './components/ToDo';


export default function App() {
  return (
    <View style={styles.container}>
      {/* <ToDo /> */}
      {/* <DismissKeyboard /> */}
      <Icons />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4"
  },
});
