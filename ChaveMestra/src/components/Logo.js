import React from 'react';
import {SafeAreaView,Text, View, StyleSheet, Image, TextInput} from 'react-native';


import Engrenagem from './../../assets/egrenagem.png';
import Estilo  from '../pages/Style'


export default function Logo(){

    return(
    <View style={Estilo.container}>
        <View>
            <Text style={Estilo.logo_01}>CHAVE</Text>
            <Text style={Estilo.logo_02}>SERVIÇOS GERAIS</Text>
            <Text style={Estilo.logo_03}>MESTRA</Text> 
        </View>

        <View style={Estilo.log_img}>
            <Image source={Engrenagem}/>
        </View>
    </View>
)}