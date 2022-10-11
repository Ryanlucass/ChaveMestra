import React from 'react';
import {SafeAreaView,Text, View, StyleSheet, Image, TextInput} from 'react-native';

import Estilo  from './Style';
import Logo from '../components/Logo';



export default function Login(){
    return(
        <View style={Estilo.body}>
        <Logo/>

        <SafeAreaView>
            <Text style={Estilo.text_label}>Email</Text>
            <TextInput 
            style={Estilo.inputs}
            placeholder='Digite seu email'
            />

            <Text style={Estilo.text_label}> Senha</Text>
            <TextInput 
            style={Estilo.inputs}
            placeholder='Digite sua senha'
            />   
        </SafeAreaView>
        
        </View>
    )
}
