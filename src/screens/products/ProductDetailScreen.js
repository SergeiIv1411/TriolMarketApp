import React, { useEffect } from 'react';
import { useRoute } from '@react-navigation/core';
import { ActivityIndicator, Image, StyleSheet } from 'react-native';
import { View, Text, Constants, Spacings } from 'react-native-markup-kit';
import { useProductDetails } from '../../logic/products/useProductDetails';
import { MediaGallery } from '../common/MediaGallery';

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
    };

    return(
        <View flex>
            <MediaGallery items={productData.images ?? []} />
            <Text>Product details</Text>    
        </View>
    );
};