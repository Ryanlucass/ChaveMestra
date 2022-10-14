import React, { useState } from 'react';
import {
SafeAreaView, Text, View, StyleSheet, TextInput, Button, Alert } from 'react-native';
import {TextInputMask} from 'react-native-masked-text'

import Logo from '../components/Logo'
import Estilos from '../pages/Style'

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

        <View style={style.buttonLogin}>
                    <Button
                    title='Cadastrar'
                    color='#000'
                    onPress={()=> Alert.alert('Deixa de ser otário')}
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
        borderRadius: 6
    },
    buttonLogin:{
        width: 100,
        justifyContent:'center',
        margin: 140
    }
})
