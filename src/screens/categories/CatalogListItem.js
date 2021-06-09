import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { View, Text } from 'react-native-markup-kit';
import { AnimatedAppearance } from '../common/AnimatedAppearance';
import { TouchableScale } from '../common/TouchableScale';

export const CatalogListItem = ({ item, onPress, color, index }) => {
  
  return (
    <AnimatedAppearance index={index}>
      <TouchableScale onPress={() => onPress(item)} scaleTo={0.97}>
        <View
          center
          height={80}
          backgroundColor={color}
          marginH-15
          marginB-15
          shadow70
          br40>
          <Text text50L>{item.name}</Text>
        </View>
      </TouchableScale>
    </AnimatedAppearance>
  );
};
