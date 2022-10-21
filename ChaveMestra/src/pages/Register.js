import React, { useState } from 'react';
import { SafeAreaView, Text, View, StyleSheet, TextInput, Button, Alert, Image} from 'react-native';
import {TextInputMask} from 'react-native-masked-text'
import {useNavigation} from '@react-navigation/native'

import Logo from '../components/Logo'
import Botao from '../components/Botao';

export default function Register(){
    //controlando estado
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cpf, setCpf] = useState('');
    const [telefone, setTelefone] = useState('');

    const navigation = useNavigation();

    //decorrência do click
    function handleNewOrder(){
        navigation.navigate('Login');
    }

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
            img={true}
            largura={230}
            corBotao={'white'}
            corTexto={'Black'}
            />
        </View>    

        <View style={{
            margin:-120
        }}>
            <Botao
            texto={'Cadastrar'}
            largura={230}
            corBotao={'black'}
            corTexto={'white'}
            />
        </View>

        <View style={{
            margin:120,
            marginTop:110
        }}>
            <Botao
            texto={'Já possui cadastro ? login'}
            onPress={handleNewOrder}
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
        margin: -120
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
    botaGoogle:{
        margin:114,
        marginTop:109
    },
    logoGoogle:{
        margin: 60,
        width:100,
        height:100
    }
})
