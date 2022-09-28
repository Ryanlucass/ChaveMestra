import React from 'react';
import {  Text,Image, StyleSheet, Dimensions, View } from 'react-native';

import Engrenagem from '../../Assets/egrenagem.png';
import Estilologin from './Estilologin';

const width = Dimensions.get('screen').width;

//exportando para fora da função
//para que só tenha um componente na hora de importar
export default function Login(){
    return (
        <View style={Estilologin.container}>
            <View style={Estilologin.TextLogin}>
                <Text>CHAVE</Text> 
                <Text>SERVIÇÕS GERAIS</Text>      
                <Text>MESTRA</Text>    
           </View>
           <View style={Estilologin.LogoImg}>
                <Image source={Engrenagem}/>
           </View>
        </View>
    )
}

const estilos = StyleSheet.create({
    topo:{

    }
});