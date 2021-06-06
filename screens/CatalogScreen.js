import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CatalogScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Catalog Screen</Text>
        </View>
    );
}

export default CatalogScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8fcbbc'
    }
})