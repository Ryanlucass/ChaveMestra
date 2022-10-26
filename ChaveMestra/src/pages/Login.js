import React, { useState } from 'react';
import { SafeAreaView, Text, Button, View, StyleSheet, TextInput, Alert, TouchableOpacity}
from 'react-native';

import Estilo  from './Style';
import Logo from '../components/Logo';
import Botao from '../components/Botao';

export default function Login(){
    function handlesing(){
        Alert.alert("Deu certo o botão");
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');



    return(
        <View style={Estilo.body}>
            <Logo/>

            <SafeAreaView style={style.textLogin}>
                <TextInput 
                style={Estilo.inputs}
                placeholder='  Digite seu e-mail'
                onChange={setEmail}
                />

                <TextInput 
                style={Estilo.inputs}
                placeholder='  Digite sua senha'
                onChange={setPassword}
                />  

            </SafeAreaView>

            <Botao 
            texto={'Entrar'}
            largura={160} 
            corBotao={'black'}
            corTexto={'white'}
            onPress={handlesing}
            />
        </View>
    )
}

const style = StyleSheet.create({
    textLogin:{
        marginTop: -80
    }
})

