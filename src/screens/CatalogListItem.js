import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { View, Text } from 'react-native-markup-kit';

export const CatalogListItem = ({ item, onPress, color }) => {
  return (
    <TouchableOpacity onPress={() => onPress(item)}>
      <View 
        center 
        height={80} 
        backgroundColor={color} 
        marginH-15 
        marginB-15
        shadow70 
        br40
      >
        <Text text50L>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
};
