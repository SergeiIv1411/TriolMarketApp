import React, { useEffect } from 'react';
import { useRoute } from '@react-navigation/core';
import { ActivityIndicator, ScrollView } from 'react-native';
import { View, Text, Constants, Spacings } from 'react-native-markup-kit';
import { useProductDetails } from '../../logic/products/useProductDetails';
import { MediaGallery } from '../common/MediaGallery';
import HTML from 'react-native-render-html';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import TouchableRipple from '../common/TouchableRipple';

export const ProductDetailScreen = () => {
  const insets = useSafeAreaInsets();
  const route = useRoute();
  const { getProductDetails, loading, productData } = useProductDetails({
    id: route?.params?.id,
  });

  useEffect(() => {
    getProductDetails();
  }, []);

  if (loading) {
    return (
      <View flex center>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View flex>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View flex style={{ paddingBottom: insets.bottom + 150 }}>
          <MediaGallery items={productData.images ?? []} />
          <Text marginT-15 text70 center>
            {productData?.name}
          </Text>
          <Text text70 center>
            Цена {productData?.priceForOne} ₽
          </Text>

          {!!productData && (
            <View paddingH-15>
              <HTML
                source={{ html: productData?.description }}
                contentWidth={Constants.screenWidth}
                baseFontStyle={{ fontSize: 15 }}
              />
            </View>
          )}
        </View>
      </ScrollView>
      <TouchableRipple color="#402943" rippleColor="rgba(255,255,255,0.2)">
        <View
          height={50}
          width="100%"
          absB
          backgroundColor={'#402943'}
          center
          style={{ bottom: insets.bottom + 80 }}>
          <View row flex center>
            <Icon name="cart" color="white" size={16} height={50} />
            <Text white marginH-7>
              Добавить в корзину
            </Text>
          </View>
        </View>
      </TouchableRipple>

      <View width="100%" height={insets.bottom + 80} bg-white absB />
    </View>
  );
};
