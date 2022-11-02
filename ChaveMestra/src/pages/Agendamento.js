import {Text, View, TouchableOpacity, StyleSheet,Image} from 'react-native';
import React from "react";
import { AntDesign, Entypo, FontAwesome, FontAwesome5, MaterialCommunityIcons} from '@expo/vector-icons'; 



import Logo from '../components/Logo'
import Veiculos from './Veiculos';
import { StatusBar } from 'expo-status-bar';
import Botao from '../components/Botao';


export default function Agendamento(jsonAgendamento){
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
                Olá, Lucas
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
                <View style={style.Horario}>
                </View>
            </View>

        </View>
    )
}

const style = StyleSheet.create({
    Agendamento:{
        margin: 90,
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