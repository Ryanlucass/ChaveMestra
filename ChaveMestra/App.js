import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Login from './src/pages/Login';
import Registe from './src/pages/Register';
import Logo from './src/components/Logo';

export default function App() {
    return (
      <View>
        <Login/>
      </View>
    );
}


