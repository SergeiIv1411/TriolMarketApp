import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { View, Text, Constants, Spacings } from 'react-native-markup-kit';
import { AnimatedAppearance } from '../common/AnimatedAppearance';
import { TouchableScale } from '../common/TouchableScale';
// import { AnimatedAppearance } from '../common/AnimatedAppearance';

const COLUMN_SIZE = Constants.screenWidth / 2 - Spacings.s2 * 3;

export const ProductListItem = ({ item, index, onPress }) => {
  return (
    // <View flex bg-white br40 margin-s2 shadow70>
    <AnimatedAppearance index={index}>
      <TouchableScale onPress={() => {onPress(item)}} scaleTo={0.97}>
        <View flex bg-white br40 margin-s2 shadow70 style={{width: COLUMN_SIZE}}>
          <View style={[style.image, style.imageWrap]} br40>
            <Image
              source={{
                uri: `https://m.amma.su/hs/triol/v2/goodImage/${item.images[0]}`,
                headers: {
                  token: '11111111-1111-1111-1111-111111111111',
                },
              }}
              style={style.image}
            />
          </View>
          <Text center margin-5 style={style.article}>
            Артикул: {item.article}
          </Text>
          <Text center margin-5>
            {item.name}
          </Text>
          <Text center margin-5>
            Цена {item.priceForOne} ₽
          </Text>
        </View>
      </TouchableScale>
    </AnimatedAppearance>
    // </View>
  );
};

const style = StyleSheet.create({
  image: {
    width: COLUMN_SIZE,
    height: (COLUMN_SIZE / 3) * 3,
    resizeMode: 'stretch',
  },
  imageWrap: {
    overflow: 'hidden',
  },
  article: {
    fontWeight: '400',
    color: '#959595',
  },
});
