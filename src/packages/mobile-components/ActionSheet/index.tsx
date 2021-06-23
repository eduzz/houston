import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import {
  Animated,
  Dimensions,
  LayoutChangeEvent,
  Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View
} from 'react-native';

interface IProps {
  visible: boolean;
  textColor?: string;
  backgroundColor?: string;
  onRequestClose?: () => void;
  onFinishClosing?: () => void;
  children?: any;
}

export const ANIMATION_DURATION = 200;
const ANIMATION_INTERVAL = {
  initial: 0,
  final: 1
};
const TARGET_OPACITY = 0.7;

const ActionSheet = ({ visible, backgroundColor, textColor, onRequestClose, onFinishClosing, children }: IProps) => {
  const slideAnim = useRef(new Animated.Value(ANIMATION_INTERVAL.initial)).current;
  const [controlsPercenageOfScreen, setControlsPercenageOfScreen] = useState(100);
  const [animationValue, setAnimationValue] = useState(ANIMATION_INTERVAL.initial);
  const [localVisible, setLocalVisible] = useState(visible);

  useEffect(() => {
    slideAnim.addListener(anim => setAnimationValue(anim.value));

    return () => slideAnim.removeAllListeners();
  }, []);

  useEffect(() => {
    if (visible) {
      setLocalVisible(visible);
    }

    Animated.timing(slideAnim, {
      toValue: visible ? ANIMATION_INTERVAL.initial : ANIMATION_INTERVAL.final,
      duration: ANIMATION_DURATION,
      useNativeDriver: true
    }).start(() => {
      if (!visible) {
        setLocalVisible(visible);
        onFinishClosing && onFinishClosing();
      }
    });
  }, [visible]);

  const onLayout = (event: LayoutChangeEvent) => {
    const { height } = event.nativeEvent.layout;

    setControlsPercenageOfScreen(height / Dimensions.get('window').height);
  };

  const opacity = (TARGET_OPACITY / ANIMATION_INTERVAL.final) * (1 - animationValue);
  const bottom = (controlsPercenageOfScreen / ANIMATION_INTERVAL.final) * animationValue * -100 + '%';

  return (
    <Modal animationType='none' visible={localVisible} transparent supportedOrientations={['portrait', 'landscape']}>
      <SafeAreaView style={styles.container} onTouchEnd={onRequestClose}>
        <Animated.View style={[styles.backdrop, { opacity }]} />
        <View style={styles.content}>
          <Animated.View style={[styles.options, { backgroundColor, bottom }]} onLayout={onLayout}>
            <ScrollView style={{ maxHeight: Dimensions.get('window').height - 86 }}>{children}</ScrollView>
            <View style={[styles.divider, { backgroundColor: textColor }]} />
          </Animated.View>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  options: {
    position: 'absolute',
    width: '100%',
    flex: 0,
    backgroundColor: '#fff'
  },
  backdrop: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#000'
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#000',
    opacity: 0.3
  }
});

export default ActionSheet;
