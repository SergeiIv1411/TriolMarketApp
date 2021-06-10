import { useRoute } from '@react-navigation/core';
import React, { useEffect } from 'react';
import { ActivityIndicator, FlatList, RefreshControl } from 'react-native';
import { View, Text, Constants, Spacings } from 'react-native-markup-kit';
import { useCategoryProducts } from '../../logic/products/useCategoryProducts';
import { ProductListItem } from './ProductListItem';

export const ProductListScreen = () => {
  const route = useRoute();
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

  const renderItem = ({ item, index }) => {
    return <ProductListItem item={item} index={index} />;
  };

  const footerComponent = () => {
    
      return (
        <View flex center height={80}>
          <ActivityIndicator size="large" />
        </View>
      );
    
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
