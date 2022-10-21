import react from "react";
import {SafeAreaView,Text, View, StyleSheet, Image, TextInput} from 'react-native';

import googleLogo from '../../assets/googleLogo.png'

export default function GoogleLogo(){
    return(
        <View style={{
            alignContent:'center'
        }}>
            <Image style={style.googleLogo}source={googleLogo}/>      
        </View>
    )
}

const style = StyleSheet.create({
    googleLogo:{
        width: 13,
        height:14,
        alignItems:'center'    
    }
})