import React from "react";
import {Text, View, TouchableOpacity, StyleSheet,Image} from 'react-native';

import Logo from '../components/Logo'

// icon
import { AntDesign, Entypo, FontAwesome, FontAwesome5, MaterialCommunityIcons} from '@expo/vector-icons'; 


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
                    <Text style={{
                        display:'flex'
                    }}>
                            <FontAwesome5 
                            name="oil-can" size={25} 
                            color="white"/>
                    </Text>
                    <Text style={styles.title_botton}> TROCA DE ÓLEO</Text>
                </TouchableOpacity>

                <TouchableOpacity
                style={styles.services}>
                    <Text style={styles.title_botton}>
                        <MaterialCommunityIcons 
                        name="tire" 
                        size={25} 
                        color="white"/> ALINHAMENTO
                        </Text>
                </TouchableOpacity>

                <TouchableOpacity
                style={styles.services}>
                    <Text style={styles.title_botton}>
                    <FontAwesome 
                        name="car" 
                        size={25} 
                        color="white"
                        /> FUNILARIA</Text>
                </TouchableOpacity>

                <TouchableOpacity
                style={styles.services}>
                    <Text style={styles.title_botton}>
                    <Entypo 
                        name="sound" 
                        size={25} 
                        color="white"
                        /> SOM</Text>
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
        paddingVertical: 30,
        width: 360,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'center',
        padding:44
    },
    title_botton:{
        color:'#FFF',
        fontSize:25,
        fontWeight: '700'
    }
})