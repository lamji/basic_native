import * as React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

export default function Icons() {
  return (
    <View style={styles.container}>
      {/* <Ionicons name="md-checkmark-circle" size={32} color="green" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        margingTop: 16,
        borderColor: "#bbb",
        borderWidth: 1,
    }
})