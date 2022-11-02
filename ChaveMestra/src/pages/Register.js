import React, { useState } from 'react';
import { SafeAreaView, Text, View, StyleSheet, TextInput, Button, Alert, Image} from 'react-native';
import {TextInputMask} from 'react-native-masked-text'
import {useNavigation} from '@react-navigation/native'

import auth from '@react-native-firebase/auth'
import { GoogleSignin } from '@react-native-google-signin/google-signin';

import Logo from '../components/Logo'
import Botao from '../components/Botao';
import Botaof from '../components/Botao-f'

export default function Register(){

    GoogleSignin.configure({
        webClientId: '458516419713-7uja23cloun54m8nhm2nbgf1edfib3k1.apps.googleusercontent.com',
    });
    
    async function onGoogleButtonPress() {
            // Check if your device supports Google Play
            await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
            // Get the users ID token
            const { idToken } = await GoogleSignin.signIn();
        
            // Create a Google credential with the token
            const googleCredential = auth.GoogleAuthProvider.credential(idToken);
        
            // Sign-in the user with the credential
            return auth().signInWithCredential(googleCredential);
    }

    //controlando estado
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const navigation = useNavigation();

    //decorrência do clickr
    function handleNewOrder(){
        navigation.navigate('Login');
    }

    function validarEmail(email){
        
        console.log(email);
        const regex =(/\S+@\S+\.\S+/);
        console.log(regex.test(email)) 
        
    }


    function handleRegister(){
        if(!email || !password){
            return Alert.alert("Email ou senhas vazios");
        }

        auth()
        .createUserWithEmailAndPassword(email, password)
        .then((Response =>{
            navigation.navigate('Login')
        }))
        .catch((error => {
            switch(error.code){
                case 'auth/invalid-email':
                return  Alert.alert('E-mail inválido');
                break;
    
                case 'auth/email-already-in-use':
                return  Alert.alert('usuário já cadastrado');
                break;
            }
        }))



    }


    return(
        <View style={style.body}>
            <Logo/>

        <SafeAreaView style={style.container}>
            <TextInput 
            style={style.inputs}
            onChangeText={setEmail}
            keyboardType='email-address'
            placeholder='Digite o email'
            />
        

            <TextInput 
            style={style.inputs}
            onChangeText={setPassword}
            secureTextEntry={true}
            placeholder='Digite sua senha'
            />

        </SafeAreaView>

        <View style={style.botaoFacebook}>
            <Botaof
            texto={'Continue with facebook'}
            img={true}
            largura={230}
            corBotao={'#3b5998'}
            corTexto={'white'}
            />
        </View>

        <View style={style.botaoGoogle}>
            <Botao
            texto={'Continue with google'}
            img={true}
            largura={230}
            corBotao={'white'}
            corTexto={'black'}
            onPress={onGoogleButtonPress}
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
            onPress={handleRegister}
            />
        </View>

        <View style={{
            margin:120,
            marginTop:110
        }}>
            <Botao
            texto={'Já possui cadastro ? Clique aqui para logar'}
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
    botaoFacebook:{
        margin:54,
        marginTop:109
    },
    botaoGoogle:{
        margin:-44,
        marginTop:59
    },
    logoGoogle:{
        margin: 60,
        width:100,
        height:100
    }
})
