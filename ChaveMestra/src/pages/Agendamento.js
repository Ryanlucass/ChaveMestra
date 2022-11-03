import {Text, View, TouchableOpacity, StyleSheet,Image} from 'react-native';
import React, { useCallback, useEffect, useState } from "react";
import { AntDesign, Entypo, FontAwesome, FontAwesome5, MaterialCommunityIcons} from '@expo/vector-icons'; 
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';



import Logo from '../components/Logo'
import Veiculos from './Veiculos';
import { StatusBar } from 'expo-status-bar';
import Botao from '../components/Botao';

export default function Agendamento(){

    const [data, setData] = useState([]);
    const [usuario, setUsuario] = useState([]);
    const [usuarioId, setUsuarioId] = useState('');


    const getUsers = () => {
        firestore()
        .collection('Usuarios')
        .get()
        .then(function(querySnapshot){
            querySnapshot.forEach(x=>{
                console.log(x.id, ' => ', x.data());
                setUsuario(x.data().nome)
            })
        });
    }

    useEffect(()=>{
        const subscriber = auth()
        .onAuthStateChanged(response => {
            setUsuarioId(response.uid);
        });

        getUsers();
    }, [])


    return(
        <View style={{
            height:'100%',
            width:'100%',
            backgroundColor:'#D8BD32',
            alignItems:'center'
        }}>
        <StatusBar
        hidden={true}
        />

            <View style={{
                position:'absolute',
                marginTop:80,
                paddingRight:280
            }}>
                <FontAwesome 
                    name="car" 
                    size={70} 
                    color="black"
                    />
            </View>

            <Text style={{
                    position:'absolute',
                    marginTop:20,
                    fontFamily:'RobotoBold',
                    fontSize: 17,
                    paddingRight:280
            }}>
                Olá, {usuario}
            </Text>

            {<Text
            style={{marginLeft:300,
                    marginTop:20,
                    fontSize:20,
                    fontFamily:'RobotoBold'}}
            >R$ 100.98</Text> }

            <View style={style.descricao}> 
                {/* Texto do serviço */}
                <Text style={style.textoh1}>Funilaria</Text>
                {/* descrição do serviço */}
                <Text style={style.textoDescricao}> Reparo nas parte da carroceria dos automóveis</Text>
            </View>

            <View style={style.Agendamento}>
            <View style={{
                        marginTop:10,
                        height:20,
                        width:350,
                        marginLeft:30
                        }}>
                <Calendar
                //initialDate={'2022-11-04'}
                minDate={'2022-11-01'}
                maxDate={'2022-11-30'}
                // onDayPress={day => {
                //     console.log('selected day', day);
                // }}
                markedDates={{
                    // '2022-11-01': {selected: true, selectedColor: 'blue'},
                    // '2022-11-02': {marked: true},
                    // '2022-11-03': {marked: true, dotColor: 'red', activeOpacity: 0},
                    // '2022-11-04': {disabled: true, disableTouchEvent: true}
                }}
                /> 
            </View>
                {/* <View style={style.Horario}>
                </View> */}
            </View>

        </View>
    )
}

const style = StyleSheet.create({
    Agendamento:{
        margin: 30,
        backgroundColor:'white',
        borderRadius: 9,
        width:'100%',
        height:'100%'   
    },
    Horario:{
        backgroundColor:'#D8BD32',
        height: 125,
        borderRadius: 8,
        width:300,
        margin: 50,
        marginTop: 240
    },
    Horas:{
        height: 70,
        width:74,
        margin: 29,
        borderRadius: 8, 
        alignItems:'center',
        backgroundColor:'#FFFF',
    },
    Minutos:{
        height: 100,
        width:74,
        borderRadius: 8,
        alignItems:'center',
        backgroundColor:'red',
    },
    descricao:{
        padding:5,
        backgroundColor:'#D8BD32',
        height:100,
        width: 210,
        marginLeft: 190,
        marginTop:12,
        borderRadius: 8,
        shadowColor :"#000",
        shadowOffset:{
            width:0,
            height:6,
        },
        shadowOpacity: 0.50,
        shadowRadius:6.38,
        elevation:12
    },
    textoDescricao:{
        fontSize: 10,
        padding: 2,
        fontFamily: 'Roboto',
        alignItems: 'center'
    },
    textoh1:{
        fontFamily:'RobotoBold',
        fontSize:14,
        alignItems: 'center',
        margin: 3
    }
})