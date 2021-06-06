/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import SplashScreen from 'react-native-splash-screen';
import React, {useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <View>
      <Text>ewffwefew</Text>
    </View>
  );
};

export default App;
