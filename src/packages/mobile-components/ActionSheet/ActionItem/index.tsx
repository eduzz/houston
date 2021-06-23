import * as React from 'react';
import { GestureResponderEvent, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface IProps {
  title: string;
  iconElement?: any;
  iconImage?: any;
  color?: string;
  backgroundColor?: string;
  avoidClosing?: boolean;
  onPress?: ((event: GestureResponderEvent) => void) | (() => void);
}

const OptionItem = ({ title, iconImage, iconElement, color, backgroundColor, avoidClosing, onPress }: IProps) => {
  const onTouchEnd = (event: GestureResponderEvent) => {
    if (avoidClosing) {
      event.stopPropagation();
      onPress && onPress(event);
      return;
    }

    setTimeout(() => {
      onPress && onPress(event);
    }, 300);
  };

  return (
    <TouchableOpacity>
      <View style={[styles.container, !!backgroundColor && { backgroundColor }]} onTouchEnd={onTouchEnd}>
        {!!iconElement && <View style={styles.icon}>{iconElement}</View>}
        {!iconElement && <Image style={[styles.icon, { tintColor: color }]} source={iconImage || null} />}
        <Text style={[styles.title, { color }]} numberOfLines={1}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 18
  },
  icon: {
    flex: 0,
    width: 25,
    height: 25,
    marginRight: 32
  },
  title: {
    flex: 1,
    color: '#000',
    fontSize: 16
  }
});

export default OptionItem;
