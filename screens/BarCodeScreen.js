import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const BarCodeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Barcode Screen</Text>
        </View>
    );
}

export default BarCodeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8fcbbc'
    }
})