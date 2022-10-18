import React from "react";
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

import Logo from '../components/Logo'


export default function Services(){
    return(
        <View style={{
            height:'100%',
            width:'100%',
            backgroundColor:'#D8BD32',
            alignItems:'center',
            justifyContent:'flex-start'
        }}>
        <View style={{
            margin:-60
        }}>
            <Logo/>
        </View>
            <View style={{
                margin:-30
            }}>
                <TouchableOpacity
                style={styles.services}>
                    <Text style={styles.title_botton}>Carros</Text>
                </TouchableOpacity>

                <TouchableOpacity
                style={styles.services}>
                    <Text style={styles.title_botton}>Bikes</Text>
                </TouchableOpacity>

                <TouchableOpacity
                style={styles.services}>
                    <Text style={styles.title_botton}>Motos</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles =  StyleSheet.create({
    services:{
        margin:4,  
        backgroundColor:'#023047',
        borderRadius: 5,
        paddingVertical: 40,
        width: 360,
        alignItems:'center',
        justifyContent:'center'
    },
    title_botton:{
        color:'#FFF',
        fontSize:37,
        fontWeight: '700',
    }
})