import React, { useState } from 'react';
import { SafeAreaView, Text, View, StyleSheet, TextInput, Button, Alert } from 'react-native';
import {TextInputMask} from 'react-native-masked-text'

import Logo from '../components/Logo'
import Estilos from '../pages/Style'
import Botao from '../components/Botao';

export default function Register(){
    //controlando estado
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [cpf, setCpf] = useState('');
    const [telefone, setTelefone] = useState('');


    return(
        <View style={style.body}>
            <Logo/>

        <SafeAreaView style={style.container}>
            <TextInput 
            style={style.inputs}
            onChangeText={setEmail}
            keyboardType='email-address'
            value={email}
            placeholder='Digite o email'
            />
        
            <TextInputMask
            style={style.inputs}
            type='cel-phone'
            options={{
                maskType :'BRL',
                withDDD: true,
                dddMask: '(85)'
            }}
            value={telefone}
            onChangeText={text => setTelefone(text)}
            placeholder = 'Digite o telefone'
            />


            <TextInput 
            style={style.inputs}
            onChangeText={setPassword}
            value={password}
            secureTextEntry={true}
            placeholder='Digite sua senha'
            />

            <TextInput 
            style={style.inputs}
            onChangeText={setCpf}
            keyboardType='numeric'
            value={cpf}
            placeholder='Digite o CPF'
            />    

        </SafeAreaView>

        <View style={style.botaGoogle}>
            <Botao
            texto={'Continue with google'}
            largura={230}
            corBotao={'white'}
            corTexto={'Black'}
            />
        </View>    

        <View style={style.botao}>
            <Botao
            texto={'Cadastrar'}
            largura={230}
            corBotao={'black'}
            corTexto={'white'}
            />
        </View>


        </View>
    );
}

const style = StyleSheet.create({
    body:{
        height:'100%',
        width:'100%',
        backgroundColor:'#D8BD32',
        alignItems:'center',
        justifyContent:'flex-start'
    },
    container:{
        margin: -130    
    },
    inputs:{
        height: 33,
        width:230,
        margin: 8,
        backgroundColor:'white',
        padding: 5,
        borderRadius: 6,
        fontFamily:'RobotoRegular'
    },
    botao:{
        margin:-120,
    },
    botaGoogle:{
        margin:110,
        marginTop:120
    }
})
