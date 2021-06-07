import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import CatalogScreen from "../screens/CatalogScreen";
import * as routes from './routes';

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
    </Stack.Navigator>
  );
}

export { CatalogNavigator };