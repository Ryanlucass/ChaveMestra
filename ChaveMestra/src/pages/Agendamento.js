import {Text, View, TouchableOpacity, StyleSheet,Image} from 'react-native';
import React from "react";


import Logo from '../components/Logo'
import Veiculos from './Veiculos';
import { StatusBar } from 'expo-status-bar';


export default function Agendamento(jsonAgendamento){
    return(
        <View style={{
            height:'100%',
            width:'100%',
            backgroundColor:'#D8BD32',
            alignItems:'center',
            justifyContent:'flex-start'
        }}>
        <StatusBar
        hidden={true}
        />
            {/* Agendamento */}
            <View style={style.Agendamento}>
                
            </View>


        </View>
    )
}

const style = StyleSheet.create({
    Agendamento:{
        margin: 170,
        backgroundColor:'white',
        borderRadius: 9,
        width:'100%',
        height:'100%'    
    }
})