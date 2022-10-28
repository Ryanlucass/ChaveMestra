import { StyleSheet, Text, View, Alert} from 'react-native';
import { useFonts, Roboto_700Bold, Roboto_700Bold_Italic, Roboto_400Regular
} from '@expo-google-fonts/roboto';

import React from 'react';
import {   RobotoCondensed_400Regular } from '@expo-google-fonts/roboto-condensed';


// Pages
import Routes from './src/routes';

// Carregando fontes
export default function App() {
  const[fontsLoaded] = useFonts({
    "RobotoBold": Roboto_700Bold,
    "RobotoBoldItalic" : Roboto_700Bold_Italic,
    "RobotoCondensedRegular":RobotoCondensed_400Regular,
    'RobotoRegular':RobotoCondensed_400Regular
});
  if(!fontsLoaded){
    return  <View/> 
  }

  return (
      <Routes/>
      )

}
