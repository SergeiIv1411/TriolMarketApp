
import React, { useEffect } from 'react';
import { FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Text, View } from 'react-native-markup-kit';
import { useCategories } from '../logic/categories/useCategories';
import { useNavigation, useRoute } from '@react-navigation/core';
import * as routes from '../navigation/routes';
import { CatalogListItem } from './CatalogListItem';
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

  const onCategoryItemPress = (item) => {
    navigationCategory.push(routes.NAVIGATION_CATEGORIES_ROUTE, {
        parentId: item._id,
        title: item.name,
    });
  };

  if (loading) {
      return (
          <View flex center>
              <ActivityIndicator size="large" />
          </View>
      );
  };

  const renderItem = ({ item, index }) => {
      return <CatalogListItem item={item} onPress={onCategoryItemPress} color={getCategoryColorByIndex(index)} />;
  };

  return (
    // <View style={styles.container}>
    <View flex paddingT-15>
      <FlatList
        data={categories}
        keyExtractor={item => item._id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default CatalogScreen;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//         backgroundColor: '#8fcbbc'
//     }
// })
