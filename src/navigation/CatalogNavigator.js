import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import * as routes from './routes';
import CatalogScreen from "../screens/CatalogScreen";
import { ProductListScreen } from "../screens/products/ProductListScreen";
import { ProductDetailScreen } from "../screens/products/ProductDetailScreen";

const Stack = createStackNavigator();

const CatalogNavigator = () => {
  return (
    <Stack.Navigator
       screenOptions={() => ({
        headerBackTitleVisible: false,   
       })}
    >
      <Stack.Screen 
        name={routes.NAVIGATION_CATEGORIES_ROUTE} 
        component={CatalogScreen}
        options={({navigation, route}) => ({ 
          title: route?.params?.title ?? 'Каталог',
        })}  
      />
      <Stack.Screen 
        name={routes.NAVIGATION_PRODUCTS_ROUTE} 
        component={ProductListScreen}
        options={({navigation, route}) => ({ 
          title: route?.params?.title ?? 'Товары',
        })}  
      />
      <Stack.Screen 
        name={routes.NAVIGATION_PRODUCT_DETAILS_ROUTE} 
        component={ProductDetailScreen}
        options={({navigation, route}) => ({ 
          title: route?.params?.title ?? 'Карточка товара',
        })}  
      />
    </Stack.Navigator>
  );
}

export { CatalogNavigator };