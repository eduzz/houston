import * as React from 'react';
import { useState } from 'react';
import { useEffect, useRef } from 'react';
import {
  Animated,
  Dimensions,
  LayoutChangeEvent,
  Modal,
  NativeScrollEvent,
  NativeSyntheticEvent,
  SafeAreaView,
  StyleSheet,
  View
} from 'react-native';

import ActionItem from './ActionItem';

interface IActionSheetProps {
  visible: boolean;
  backgroundColor?: string;
  onRequestClose?: () => void;
  onFinishClosing?: () => void;
  children?: any;
}

const TARGET_OPACITY = 0.7;

const ActionSheet = ({ visible, backgroundColor, onRequestClose, onFinishClosing, children }: IActionSheetProps) => {
  const [localVisible, setLocalVisible] = useState(visible);
  const [initialOffset, setInitialOffset] = useState({ x: 0, y: 0 });
  const [sheetLayout, setSheetLayout] = useState({ x: 0, y: 0, width: 0, height: 0 });
  const [normalizedOffsetY, setNormalizedOffsetY] = useState(0);

  const scrollViewRef = useRef(null);

  useEffect(() => {
    if (visible) {
      setLocalVisible(true);
    } else {
      if (scrollViewRef.current) {
        scrollViewRef.current.scrollTo({ x: 0, y: 0, animated: true });
      }
    }
  }, [visible]);

  const onScrollBeginDrag = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    setInitialOffset(event.nativeEvent.contentOffset);
  };

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (event.nativeEvent.contentOffset.y <= 0) {
      setLocalVisible(false);
      onFinishClosing && onFinishClosing();
    }

    const fixedSheetHeight =
      sheetLayout.height < Dimensions.get('window').height / 2
        ? sheetLayout.height
        : Dimensions.get('window').height / 2;
    const normalizedOffsetY = event.nativeEvent.contentOffset.y / fixedSheetHeight;

    setNormalizedOffsetY(normalizedOffsetY > 1 ? 1 : normalizedOffsetY);
  };

  const onScrollEndDrag = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (event.nativeEvent.velocity.y > 1) {
      onRequestClose();
      return;
    }

    if (initialOffset.y > event.nativeEvent.contentOffset.y) {
      if (event.nativeEvent.contentOffset.y < Dimensions.get('window').height / 2) {
        onRequestClose();
      } else {
        scrollViewRef.current.scrollTo({ x: 0, y: Dimensions.get('window').height / 2, animated: true });
      }
    }
  };

  const onScrollViewLayout = () => {
    scrollViewRef.current.scrollTo({ x: 0, y: Dimensions.get('window').height / 2, animated: true });
  };

  const onSheetLayout = (event: LayoutChangeEvent) => {
    setSheetLayout(event.nativeEvent.layout);
  };

  const opacity = TARGET_OPACITY * normalizedOffsetY;

  return (
    <Modal animationType='none' visible={localVisible} transparent supportedOrientations={['portrait', 'landscape']}>
      <SafeAreaView style={styles.container} onTouchEnd={onRequestClose}>
        <Animated.View style={[styles.backdrop, { opacity }]} />
        <Animated.ScrollView
          ref={scrollViewRef}
          style={styles.content}
          overScrollMode='never'
          onScrollBeginDrag={onScrollBeginDrag}
          onScroll={onScroll}
          onScrollEndDrag={onScrollEndDrag}
          decelerationRate={0.5}
          showsVerticalScrollIndicator={false}
          onLayout={onScrollViewLayout}
        >
          <View style={{ height: Dimensions.get('window').height }} />
          <View onLayout={onSheetLayout}>
            <View style={[styles.closeBar, { backgroundColor }]}>
              <View style={styles.closeBarIndicator} />
            </View>
            <View style={{ backgroundColor }}>
              {children}
              <View style={{ height: 100 }} />
            </View>
          </View>
        </Animated.ScrollView>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    flex: 1
  },
  options: {
    position: 'absolute',
    width: '100%',
    flex: 0
  },
  items: {
    minHeight: 200
  },
  backdrop: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#000'
  },
  closeBar: {
    height: 30,
    borderTopEndRadius: 28,
    borderTopStartRadius: 28,
    alignItems: 'center',
    paddingTop: 12,
    marginBottom: -1
  },
  closeBarIndicator: {
    width: 50,
    height: 5,
    borderRadius: 5,
    backgroundColor: '#C4C4C4'
  }
});

export { ActionSheet, ActionItem };
