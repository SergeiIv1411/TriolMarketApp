import React, { useEffect } from 'react';
import { FlatList, ActivityIndicator, RefreshControl } from 'react-native';
import { Text, View } from 'react-native-markup-kit';
import { useCategories } from '../logic/categories/useCategories';
import { useNavigation, useRoute } from '@react-navigation/core';
import * as routes from '../navigation/routes';
import { CatalogListItem } from './categories/CatalogListItem';
import { useCategoryColors } from '../logic/categories/useCategoryColors';

const CatalogScreen = ({ navigation }) => {
  const { getCategoryColorByIndex } = useCategoryColors();
  const route = useRoute();
  const navigationCategory = useNavigation();

  const { getCategories, categories, loading } = useCategories({
    parentId: route?.params?.parentId ?? 0,
  });

  useEffect(() => {
    getCategories();
  }, [getCategories]);

  const onCategoryItemPress = item => {
    if (item.childrenCount > 0) {
      navigationCategory.push(routes.NAVIGATION_CATEGORIES_ROUTE, {
        parentId: item._id,
        title: item.name,
      });
    } else if (item.productCount > 0) {
      navigationCategory.push(routes.NAVIGATION_PRODUCTS_ROUTE, {
        categoryId: item._id,
        title: item.name,
        totalCount: item.productCount,
      });
    }
  };

  const renderItem = ({ item, index }) => {
    return (
      <CatalogListItem
        item={item}
        onPress={onCategoryItemPress}
        color={getCategoryColorByIndex(index)}
        index={index}
      />
    );
  };

  return (
    // <View style={styles.container}>
    <View flex paddingT-15>
      <FlatList
        data={categories}
        keyExtractor={item => item._id}
        renderItem={renderItem}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={getCategories} />
        }
      />
    </View>
  );
};

export default CatalogScreen;

