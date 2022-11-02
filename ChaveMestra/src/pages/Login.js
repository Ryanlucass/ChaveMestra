import React, { useState } from 'react';
import { SafeAreaView, Text, Button, View, StyleSheet, TextInput, Alert, TouchableOpacity}
from 'react-native';

import auth from '@react-native-firebase/auth'

import Estilo  from './Style';
import Logo from '../components/Logo';
import Botao from '../components/Botao';

export default function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    
    function handlesing(){
        if(!email || !password){
            return Alert.alert("Email ou senhas vazios");
        }
        
        auth()
        .signInWithEmailAndPassword(email, password)
        .catch((error)=> {
            
            switch(error.code){
                case 'auth/invalid-email':
                return  Alert.alert('Email inválido');
                break;

                case 'auth/wrong-password':
                return  Alert.alert('Senha inválida');
                break;

                case 'auth/user-not-found':
                return  Alert.alert('Usuário não econtrado ou não existe');
                break;
            }

            return Alert.alert('Não foi possível acessar');
                
        });

    }

    return(
        <View style={Estilo.body}>
            <Logo/>

            <SafeAreaView style={style.textLogin}>
                <TextInput 
                style={Estilo.inputs}
                placeholder='  Digite seu email'
                onChangeText={setEmail}
                />

                <TextInput 
                style={Estilo.inputs}
                placeholder='  Digite sua senha'
                secureTextEntry={true}
                onChangeText={setPassword}
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