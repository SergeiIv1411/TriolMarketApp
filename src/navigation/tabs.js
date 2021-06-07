import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEvilIcons from 'react-native-vector-icons/EvilIcons';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import CartScreen from '../screens/CartScreen';
import ProfileScreen from '../screens/ProfileScreen';
import HomeScreen from '../screens/HomeScreen';
import BarCodeScreen from '../screens/BarCodeScreen';
import CatalogScreen from '../screens/CatalogScreen';
import { CatalogNavigator } from './CatalogNavigator';

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({children, onPress}) => (
    <TouchableOpacity
        style={{
            top: -20,
            justifyContent: 'center',
            alignItems: 'center',
            ...styles.shadow
        }}    
    onPress={onPress}
    >
        <View style={{
            width: 80,
            height: 80,
            borderRadius: 40,
            backgroundColor: '#48BBC7'
        }}>
            {children}
        </View>
    </TouchableOpacity>
);

const Tabs = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style: {
                    position: 'absolute',
                    elevation: 0,
                    backgroundColor: '#FFFFFF'
                    
                }        
            }}
        >
            <Tab.Screen name="Главная" component={HomeScreen} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 5}}>
                        <IconAntDesign 
                            name="home" 
                            size={24}
                            style={{
                                color: focused ? '#48BAC5' : '#232324',
                                bottom: 5
                            }}
                        />
                        <Text 
                            style={{
                                color: focused ? '#48BAC5' : '#232324',
                                fontSize: 12
                            }}
                        >Главная</Text>    
                    </View>
                ),
            }}/>
            <Tab.Screen name="Каталог" component={CatalogNavigator} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 5}}>
                        <IconFontAwesome 
                            name="list" 
                            size={24}
                            style={{
                                color: focused ? '#48BAC5' : '#232324',
                                bottom: 5
                            }}
                        />
                        <Text 
                            style={{
                                color: focused ? '#48BAC5' : '#232324',
                                fontSize: 12
                            }}
                        >Каталог</Text>    
                    </View>
                ),
            }}/>
            <Tab.Screen name="BarCode" component={BarCodeScreen} 
                options={{
                    tabBarIcon: ({focused}) => (
                        <IconFontAwesome 
                        name="barcode" 
                        size={40}
                        style={{
                            top: 1,
                            color: focused ? '#402943' : '#232324',
                            bottom: 5
                        }}
                    /> 
                    ),
                    tabBarButton: (props) => (
                        <CustomTabBarButton {...props} />
                    )
                }}
            />
            <Tab.Screen name="Корзина" component={CartScreen} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 5}}>
                        <IconEvilIcons 
                            name="cart" 
                            size={28}
                            style={{
                                color: focused ? '#48BAC5' : '#232324',
                                bottom: 5
                            }}
                        />
                        <Text 
                            style={{
                                color: focused ? '#48BAC5' : '#232324',
                                fontSize: 12
                            }}
                        >Корзина</Text>    
                    </View>
                ),
            }}/>
            <Tab.Screen name="Профиль" component={ProfileScreen} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 5}}>
                        <IconFontAwesome 
                            name="user-circle" 
                            size={24}
                            style={{
                                color: focused ? '#48BAC5' : '#232324',
                                bottom: 5
                            }}
                        />
                        <Text 
                            style={{
                                color: focused ? '#48BAC5' : '#232324',
                                fontSize: 12
                            }}
                        >Профиль</Text>    
                    </View>
                ),
            }}/>
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    }
});

export default Tabs;