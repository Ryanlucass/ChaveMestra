import { StyleSheet, Text, View, Alert} from 'react-native';
import { 
  useFonts, 
  Roboto_700Bold, 
  Roboto_700Bold_Italic
} from '@expo-google-fonts/roboto';

import {   
  RobotoCondensed_300Light_Italic,
  RobotoCondensed_700Bold, 
  RobotoCondensed_700Bold_Italic, 
  RobotoCondensed_400Regular
} from '@expo-google-fonts/roboto-condensed';

import React from 'react';
import Register from './src/pages/Register';
import Login from './src/pages/Login';
import Button  from './src/components/Button';

export default function App() {
  const[fonteCarregada] = useFonts({
    "RobotoBold": Roboto_700Bold,
    "RobotoBoldItalic" : Roboto_700Bold_Italic,
    "RobotoCondensedLigt" :RobotoCondensed_300Light_Italic,
    "RobotoCondensedReulgar":RobotoCondensed_400Regular
});

if(!fonteCarregada){
  return  <View/> 
}



return (
      <View>
       <Register/>
      </View>
    );
}


