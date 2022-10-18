import react from "react";
import { SafeAreaView, Image ,Text, Button, View, StyleSheet, TextInput, Alert, TouchableOpacity }
from 'react-native';

import LogoGoogle from './LogoGoogle'


export default function Botao({texto,largura,corBotao,corTexto,img,onPress}){
    if(img === true){
        return(
            <TouchableOpacity 
            onPress={onPress}
            style={{
                marginTop: 16,
                backgroundColor: corBotao,
                borderRadius: 5,
                paddingVertical: 10,
                width: largura
            }}>
                <Text style={{
                    color: corTexto,
                    fontSize: 13,
                    fontWeight: '400',
                    lineHeight:15,
                    textAlign:'center',
                    alignItems:'center',
                    fontFamily:'RobotoRegular'  
                }}><LogoGoogle/> {texto}</Text>
            </TouchableOpacity>
        )
    }
    else{
        return(
            <TouchableOpacity 
            onPress={onPress}
            style={{
                marginTop: 16,
                backgroundColor: corBotao,
                borderRadius: 5,
                paddingVertical: 10,
                width: largura
            }}>
                <Text style={{
                    color: corTexto,
                    fontSize: 13,
                    fontWeight: '400',
                    lineHeight:15,
                    textAlign:'center',
                    alignItems:'center',
                    fontFamily:'RobotoRegular'  
                }}>{texto}</Text>
            </TouchableOpacity>
        )
    }
    
    
}
