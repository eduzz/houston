import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { ActionSheet, ActionItem } from '@eduzz/houston-mobile/ActionSheet';

export default function App() {
  const [actionSheetVisible, setActionSheetVisible] = useState(false);

  const openActionSheet = () => {
    setActionSheetVisible(true);
  };

  const closeActionSheet = () => {
    setActionSheetVisible(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={openActionSheet}>
        <View style={styles.button}>
          <Text style={styles.text}>ActionSheet</Text>
        </View>
      </TouchableOpacity>

      <ActionSheet
        backgroundColor='#212121'
        textColor='#fff'
        visible={actionSheetVisible}
        onRequestClose={closeActionSheet}
      >
        <ActionItem title='test' color='#fff' />
      </ActionSheet>
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
