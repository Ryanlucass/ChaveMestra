import {Text, View, TouchableOpacity, StyleSheet,Image} from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import React from "react";


import Logo from '../components/Logo'
import Veiculos from './Veiculos';


export default function Agendamento(){

    return(
        <View style={{
            height:'100%',
            width:'100%',
            backgroundColor:'#D8BD32',
            alignItems:'center',
            justifyContent:'flex-start'
        }}>

            <View style={{
                borderColor:'#fff',
                backgroundColor:'red',
                padding: 12
            }}>  
                <Text>
                    Testando
                </Text>
            </View>


            <View style={{
                marginTop:300
            }}>
                <Calendar/>
            </View>

        </View>
    )

}