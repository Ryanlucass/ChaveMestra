import React from 'react';
import {
    SafeAreaView,
    Text, 
    Button,
    View, 
    StyleSheet, 
    TextInput,
    Alert 
} from 'react-native';

import Estilo  from './Style';
import Logo from '../components/Logo';



export default function Login(){
    return(
        <View style={Estilo.body}>
            <Logo/>

            <SafeAreaView style={style.textLogin}>
                <Text style={Estilo.text_label}>Email</Text>
                <TextInput 
                style={Estilo.inputs}
                placeholder='Digite seu email'
                />

                <Text style={Estilo.text_label}> Senha</Text>
                <TextInput todo
                style={Estilo.inputs}
                placeholder='Digite sua senha'
                />  

            </SafeAreaView>

            <View style={style.buttonLogin}>
                    <Button
                    title='Entrar'
                    color='#000'
                    onPress={()=> Alert.alert('Deixa de ser otário')}
                    />
            </View>

        </View>
    )
}


const style = StyleSheet.create({
    textLogin:{
        marginTop: -80
    },
    buttonLogin:{
        width: 100,
        margin: 22,
    }
})

