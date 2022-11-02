import react from "react";
import {SafeAreaView,Text, View, StyleSheet, Image, TextInput} from 'react-native';

import facebookLogo from '../../Assets/facebookLogo.png'

export default function GoogleLogo(){
    return(
        <View style={{
            alignContent:'center'
        }}>
            <Image style={style.facebookLogo}source={facebookLogo}/>      
        </View>
    )
}

const style = StyleSheet.create({
    facebookLogo:{
        width: 13,
        height:14,
        alignItems:'center'    
    }
})