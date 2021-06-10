import React, { useEffect } from 'react';
import { useRoute } from '@react-navigation/core';
import { ActivityIndicator, ScrollView } from 'react-native';
import { View, Text, Constants, Spacings } from 'react-native-markup-kit';
import { useProductDetails } from '../../logic/products/useProductDetails';
import { MediaGallery } from '../common/MediaGallery';
import HTML from 'react-native-render-html';

export const ProductDetailScreen = () => {
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
    <ScrollView showsVerticalScrollIndicator={false}>
      <View flex>
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
            baseFontStyle={{fontSize: 15}}
          />
          </View>
        )}
      </View>
    </ScrollView>
  );
};
