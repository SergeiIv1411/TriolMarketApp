import React, { useEffect } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  useDerivedValue,
  withSpring,
  Easing,
  interpolate,
  Extrapolate,
  withDelay,
  withTiming,
} from 'react-native-reanimated';


export const AnimatedAppearance = ({ children, index }) => {
  const play = useSharedValue(false);
  const progress = useDerivedValue(() => {
    return play.value
      ? withDelay(50 * (index ?? 0), withTiming(1, {duration: 350}))
      : 0;
  });

  useEffect(() => {
    play.value = true;
  }, [])

  const AnimatedStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      progress.value,
      [0, 1],
      [0, 1],
    );


    const translateY = interpolate(
      progress.value,
      [0, 1],
      [100, 0],
    );

    return {
      opacity,
      transform: [{ translateY }],
    };
  });

  return (
      <Animated.View style={AnimatedStyle}>{children}</Animated.View>
  );
};
