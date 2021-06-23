import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import ActionSheet from '@eduzz/houston-mobile/ActionSheet';

export default function App() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View style={styles.button}>
          <Text style={styles.text}>ActionSheet</Text>
        </View>
      </TouchableOpacity>

      <ActionSheet />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    padding: 8,
    backgroundColor: '#0D47A1'
  },
  text: {
    color: '#fff'
  }
});
