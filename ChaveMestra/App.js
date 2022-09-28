import React from 'react';
import { StatusBar,StyleSheet, View } from 'react-native';

// imports
import Login from './src/telas/Login';

export default function App() {
  return (
    <View >
      <StatusBar/>
      <Login/>
    </View>
  );
}

