import React, { useState } from 'react';
import { SafeAreaView, View, StyleSheet, TextInput, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native'

// firebase
import auth from '@react-native-firebase/auth'
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
import firestore from '@react-native-firebase/firestore';

// componentes
import Logo from '../components/Logo'
import Botao from '../components/Botao';
import Botaof from '../components/Botaoface'

export default function Register(){

    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    GoogleSignin.configure({
        webClientId: '458516419713-7uja23cloun54m8nhm2nbgf1edfib3k1.apps.googleusercontent.com',
    });
    
    async function onGoogleButtonPress() {
            await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
            const { idToken } = await GoogleSignin.signIn();
            const googleCredential = auth.GoogleAuthProvider.credential(idToken);
            return auth().signInWithCredential(googleCredential)
            .then((Response =>{
                const nome = Response.user.displayName;
                const email = Response.user.email;
                const uid = Response.user.uid;
                console.log(`nome:${nome} email:${email} uid;${uid}`)

                firestore()
                .collection('Usuarios')
                .doc(uid)
                .set({
                    Email: email,
                    Nome: nome
                });
            }))
    }

    async function onFacebookButtonPress() {
        const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
        if (result.isCancelled) {
            throw 'User cancelled the login process';
        }

        const data = await AccessToken.getCurrentAccessToken();
        if (!data) {
            throw 'Something went wrong obtaining access token';
        }
        const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
        return auth().signInWithCredential(facebookCredential).
        then((Response =>{
            const nome = Response.user.displayName;
            const email = Response.user.email;
            const uid = Response.user.uid;
            firestore()
            .collection('Usuarios')
            .doc(uid)
            .set({
                Email: email,
                Nome: nome
            });
        }));
    }
    
    
    function handleRegister(){
        if(!email || !password){
            return Alert.alert("Email ou senhas vazios");
        }

        auth()
        .createUserWithEmailAndPassword(email, password)
        .then((Response =>{
            navigation.navigate('Login');
            const nome = email.split('@');
            const userUid = Response.user.uid ?? '';
            console.log(`Nome: ${nome} e UserUid: ${userUid}`)
            firestore()
            .collection('Usuarios')
            .doc(userUid)
            .set({
                Email: email,
                Nome: nome[0]
            })
            .catch((error =>[
                Alert.alert("Erro ao Salvar no banco de dados {Register}")
            ]))
            
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

    function handleLogin(){
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
            onPress={onFacebookButtonPress}
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
            margin:150
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
            margin:-160,
        }}>
            <Botao
            texto={'Já possui cadastro ? Clique aqui para logar'}
            onPress={handleLogin}
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
        margin:-66,
        marginBottom: -156
    }
})
