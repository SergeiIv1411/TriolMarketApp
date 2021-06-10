import React, { useState } from 'react';
import { FlatList, Image } from 'react-native';
import { View, Text, Constants } from 'react-native-markup-kit';

export const MediaGallery = ({ items }) => {
const [currentPage, setCurrentPage] = useState(1);

const renderItem = ({item, index}) => {
    return (
        <View bg-white>
            <Image
              source={{
                uri: `https://m.amma.su/hs/triol/v2/goodImage/${item}`,
                headers: {
                  token: '11111111-1111-1111-1111-111111111111',
                },
              }}
              style={{ width: Constants.screenWidth, height: Constants.screenWidth }}
              resizeMode="contain"
            />
        </View>
    );
};

    const onMomentumScrollEnd = event => {
        const contentOffset = event.nativeEvent.contentOffset.x;
        const viewSize = event.nativeEvent.layoutMeasurement.width;

        const currentNumber = Math.floor(contentOffset / viewSize) + 1;
        setCurrentPage(currentNumber);
    };

    return (
        <View>
          <FlatList 
            data={items}
            keyExtractor={(item, index) => `MediaGallery${index}`}
            renderItem={renderItem}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            onMomentumScrollEnd={onMomentumScrollEnd}
          />  
          <View abs right paddingH-10 paddingV-5 margin-5 bg-grey30 br60>
           <Text white>{`${currentPage} / ${items.length}`}</Text>   
          </View>
        </View>
    );
};
