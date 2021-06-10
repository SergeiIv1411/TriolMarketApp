import React, { useEffect } from 'react';
import { useRoute } from '@react-navigation/core';
import { Image, StyleSheet } from 'react-native';
import { View, Text, Constants, Spacings } from 'react-native-markup-kit';
import { useProductDetails } from '../../logic/products/useProductDetails';

export const ProductDetailScreen = () => {
    const route = useRoute();
    const { getProductDetails, loading } = useProductDetails({
        id: route?.params?.id,
    });

    useEffect(() => {
        getProductDetails();
    }, []);

    return(
        <View flex center>
            <Text>Product details</Text>    
        </View>
    );
};