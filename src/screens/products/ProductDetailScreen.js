import React, { useEffect } from 'react';
import { Image, StyleSheet } from 'react-native';
import { View, Text, Constants, Spacings } from 'react-native-markup-kit';
import { useProductDetails } from '../../logic/products/useProductDetails';

export const ProductDetailScreen = () => {
    const { getProductDetails, loading } = useProductDetails({});

    useEffect(() => {
        getProductDetails();
    }, []);

    return(
        <View flex center>
            <Text>Product details</Text>    
        </View>
    );
};