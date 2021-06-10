import { useNavigation, useRoute } from '@react-navigation/core';
import React, { useEffect } from 'react';
import { ActivityIndicator, FlatList, RefreshControl } from 'react-native';
import { View, Text, Constants, Spacings } from 'react-native-markup-kit';
import { useCategoryProducts } from '../../logic/products/useCategoryProducts';
import { ProductListItem } from './ProductListItem';
import * as routes from '../../navigation/routes';

export const ProductListScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const {
    loading,
    products,
    loadMore,
    refresh,
    refreshing,
  } = useCategoryProducts({
    categoryId: route?.params?.categoryId,
    totalCount: route?.params?.totalCount,
  });

  const onProductItemPress = (item) => {
    navigation.push(routes.NAVIGATION_PRODUCT_DETAILS_ROUTE, {
      title: item.name,
      totalCount: item.productCount,
    });
  };

  const renderItem = ({ item, index }) => {
    return <ProductListItem item={item} index={index} onPress={onProductItemPress}/>;
  };

  const footerComponent = () => {
      if(loading && products.length !== 0) {
      return (
        <View flex center height={80}>
          <ActivityIndicator size="large" />
        </View>
      );
      }
      return null;
  };

  return (
    <View flex>
      <FlatList
        numColumns={2}
        contentContainerStyle={{
          paddingVertical: Spacings.s2,
          marginHorizontal: Spacings.s2,
        }}
        data={products}
        keyExtractor={item => item._id}
        renderItem={renderItem}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={refresh} />
        }
        onEndReached={loadMore}
        ListFooterComponent={footerComponent}
      />
    </View>
  );
};
