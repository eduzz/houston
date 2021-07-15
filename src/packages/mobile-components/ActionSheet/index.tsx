import * as React from 'react';
import { useState, useEffect, useRef } from 'react';

import {
  Animated,
  Dimensions,
  Modal,
  NativeScrollEvent,
  NativeSyntheticEvent,
  SafeAreaView,
  StyleSheet,
  View,
  ScrollView
} from 'react-native';

import ActionItem from './ActionItem';

export interface IActionSheetProps {
  visible: boolean;
  backgroundColor?: string;
  onRequestClose?: () => void;
  onFinishClosing?: () => void;
  children?: any;
}

const TARGET_OPACITY = 0.7;
const SCREEN_TARGET_OCCUPATION = 0.7;
const CLOSE_BAR_BORDER_RADIUS = 28;

const ActionSheet = ({ visible, backgroundColor, onRequestClose, onFinishClosing, children }: IActionSheetProps) => {
  const [localVisible, setLocalVisible] = useState(visible);
  const [normalizedOffsetY, setNormalizedOffsetY] = useState(0);
  const [distanceToTop, setDistanceToTop] = useState(CLOSE_BAR_BORDER_RADIUS);

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

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (event.nativeEvent.contentOffset.y <= 0) {
      setLocalVisible(false);
      onFinishClosing && onFinishClosing();
    }

    const sheetHeight = getSheetHeight();
    const screenTargetOcupation = getScreenTargetOcupation();
    const fixedSheetHeight = sheetHeight < screenTargetOcupation ? sheetHeight : screenTargetOcupation;
    const normalizedOffsetY = event.nativeEvent.contentOffset.y / fixedSheetHeight;

    setNormalizedOffsetY(normalizedOffsetY > 1 ? 1 : normalizedOffsetY);
    setDistanceToTop(getScreenHeight() - event.nativeEvent.contentOffset.y);
  };

  const onScrollEndDrag = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (event.nativeEvent.velocity.y > 1) {
      onRequestClose();
      return;
    }

    const screenHeight = getScreenHeight();
    const screenTargetOcupation = getScreenTargetOcupation();
    const sheetHeight = getSheetHeight();
    const fixedSheetHeight = sheetHeight < screenTargetOcupation ? sheetHeight : screenTargetOcupation;

    if (event.nativeEvent.contentOffset.y < fixedSheetHeight / 2) {
      onRequestClose();
    } else {
      if (event.nativeEvent.contentOffset.y < screenHeight) {
        if (screenHeight - event.nativeEvent.contentOffset.y < (screenHeight - screenTargetOcupation) / 2) {
          scrollViewRef.current.scrollTo({ x: 0, y: screenHeight, animated: true });
        } else {
          scrollViewRef.current.scrollTo({ x: 0, y: screenTargetOcupation, animated: true });
        }
      }
    }
  };

  const getSheetHeight = () => {
    return 58.7 * React.Children.count(children) + 130; // 58.7 = ActionItem height; 130 = closeBar (30) + footer (100);
  };

  const getScreenHeight = () => {
    return Dimensions.get('window').height;
  };

  const getScreenTargetOcupation = () => {
    return getScreenHeight() * SCREEN_TARGET_OCCUPATION;
  };

  const onScrollViewLayout = () => {
    scrollViewRef.current.scrollTo({ x: 0, y: getScreenTargetOcupation(), animated: true });
  };

  const opacity = TARGET_OPACITY * normalizedOffsetY;
  const closeBarBorderRadius =
    (distanceToTop / (getScreenHeight() - getScreenTargetOcupation())) * CLOSE_BAR_BORDER_RADIUS;

  return (
    <Modal animationType='none' visible={localVisible} transparent supportedOrientations={['portrait', 'landscape']}>
      <SafeAreaView style={styles.container} onTouchEnd={onRequestClose}>
        <Animated.View style={[styles.backdrop, { opacity }]} />
        <ScrollView
          ref={scrollViewRef}
          style={styles.content}
          overScrollMode='never'
          onScroll={onScroll}
          onScrollEndDrag={onScrollEndDrag}
          showsVerticalScrollIndicator={false}
          onLayout={onScrollViewLayout}
          stickyHeaderIndices={[1]}
        >
          <View style={{ height: getScreenHeight() }} />
          <View
            style={[
              styles.closeBar,
              { backgroundColor, borderTopEndRadius: closeBarBorderRadius, borderTopStartRadius: closeBarBorderRadius }
            ]}
          >
            <View style={styles.closeBarIndicator} />
          </View>
          <View style={{ backgroundColor }}>
            {children}
            <View style={{ height: 100 }} />
          </View>
        </ScrollView>
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
    borderTopEndRadius: CLOSE_BAR_BORDER_RADIUS,
    borderTopStartRadius: CLOSE_BAR_BORDER_RADIUS,
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

ActionSheet.Item = ActionItem;

export default ActionSheet;
