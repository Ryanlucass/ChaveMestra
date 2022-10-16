import React from 'react';
import { SafeAreaView, Text, Button, View, StyleSheet, TextInput, Alert, TouchableOpacity }
from 'react-native';

import Estilo  from './Style';
import Logo from '../components/Logo';
import Botao from '../components/Botao';



export default function Login(){
    return(
        <View style={Estilo.body}>
            <Logo/>

            <SafeAreaView style={style.textLogin}>
                <TextInput 
                style={Estilo.inputs}
                placeholder='  Digite seu e-mail'
                />

                <TextInput 
                style={Estilo.inputs}
                placeholder='  Digite sua senha'
                />  

            </SafeAreaView>

            <Botao 
            texto={'Entrar'}
            largura={160} 
            corBotao={'black'}
            corTexto={'white'}
            />

        </View>
    )
}

const style = StyleSheet.create({
    textLogin:{
        marginTop: -80
    }
})

