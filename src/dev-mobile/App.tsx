import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

import ActionSheet from '@eduzz/houston-mobile/ActionSheet';

import deleteImage from './assets/delete.png';
import notificationsOff from './assets/notificationoff.png';

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

      <ActionSheet backgroundColor='#212121' visible={actionSheetVisible} onRequestClose={closeActionSheet}>
        <ActionSheet.Item
          title='Excluir'
          avoidClosing
          description='Excluir esta notificação'
          color='#fff'
          iconElement={<Image style={styles.icon} source={deleteImage} />}
        />
        <ActionSheet.Item
          title='Desativar'
          description='Pare de receber notificações deste curso'
          color='#fff'
          iconElement={<Image style={styles.icon} source={notificationsOff} />}
        />
        <ActionSheet.Item
          title='Desativar'
          description='Pare de receber notificações deste curso'
          color='#fff'
          iconElement={<Image style={styles.icon} source={notificationsOff} />}
        />
        <ActionSheet.Item
          title='Desativar'
          description='Pare de receber notificações deste curso'
          color='#fff'
          iconElement={<Image style={styles.icon} source={notificationsOff} />}
        />
        <ActionSheet.Item
          title='Desativar'
          description='Pare de receber notificações deste curso'
          color='#fff'
          iconElement={<Image style={styles.icon} source={notificationsOff} />}
        />
        <ActionSheet.Item
          title='Desativar'
          description='Pare de receber notificações deste curso'
          color='#fff'
          iconElement={<Image style={styles.icon} source={notificationsOff} />}
        />
        <ActionSheet.Item
          title='Desativar'
          description='Pare de receber notificações deste curso'
          color='#fff'
          iconElement={<Image style={styles.icon} source={notificationsOff} />}
        />
        <ActionSheet.Item
          title='Desativar'
          description='Pare de receber notificações deste curso'
          color='#fff'
          iconElement={<Image style={styles.icon} source={notificationsOff} />}
        />
        <ActionSheet.Item
          title='Desativar'
          description='Pare de receber notificações deste curso'
          color='#fff'
          iconElement={<Image style={styles.icon} source={notificationsOff} />}
        />
        <ActionSheet.Item
          title='Desativar'
          description='Pare de receber notificações deste curso'
          color='#fff'
          iconElement={<Image style={styles.icon} source={notificationsOff} />}
        />
        <ActionSheet.Item
          title='Desativar'
          description='Pare de receber notificações deste curso'
          color='#fff'
          iconElement={<Image style={styles.icon} source={notificationsOff} />}
        />
        <ActionSheet.Item
          title='Desativar'
          description='Pare de receber notificações deste curso'
          color='#fff'
          iconElement={<Image style={styles.icon} source={notificationsOff} />}
        />
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
  },
  icon: {
    tintColor: '#fff',
    width: '100%',
    height: '100%'
  }
});
