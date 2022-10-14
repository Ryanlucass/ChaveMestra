import React from 'react';
import {
SafeAreaView,
Text, 
View, 
StyleSheet, 
Image, 
TextInput,
Button, 
Alert} from 'react-native';

import Logo from '../components/Logo'
import Estilos from '../pages/Style'

export default function Register(){
    return(
        <View style={style.body}>
            <Logo/>


        <SafeAreaView style={style.Inputs}>
            <Text style={Estilos.text_label}>Email</Text>
            <TextInput 
            style={Estilos.inputs}
            placeholder='Digite o email'
            />

            <Text style={Estilos.text_label}>Senha</Text>
            <TextInput 
            style={Estilos.inputs}
            placeholder='Digite sua senha'
            />

            <Text style={Estilos.text_label}>Digite o CPF</Text>
            <TextInput 
            style={Estilos.inputs}
            placeholder='Digite o CPF'
            />    

            <Text style={Estilos.text_label}>Digite o Telefone</Text>
            <TextInput 
            style={Estilos.inputs}
            placeholder='Digite o telefone'
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
    Inputs:{
        margin: -130
    },
    buttonLogin:{
        width: 100,
        justifyContent:'center',
        margin: 140
    }
})
