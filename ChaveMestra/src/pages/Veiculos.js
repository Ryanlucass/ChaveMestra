import React from "react";
import {Text, View, TouchableOpacity, StyleSheet,Image, Alert} from 'react-native';
import auth from '@react-native-firebase/auth'


import Botao from "../components/Botao";
import Logo from '../components/Logo'
import {useNavigation} from '@react-navigation/native'

// icon
import { AntDesign, FontAwesome5, MaterialCommunityIcons} from '@expo/vector-icons'; 


export default function Veiculos(){
    const navigation = useNavigation();

    function handleServices(){
        navigation.navigate('Services');
    }

    function handleLogout(){
        auth()
        .signOut()
        .catch(error =>{
            console.log(error);
            return Alert.alert("não foi possível sair");
        });
    }


    return(
        <View style={{
            height:'100%',
            width:'100%',
            backgroundColor:'#D8BD32',
            alignItems:'center',
            justifyContent:'flex-start'
        }}>
        <View style={{
            margin:-80
        }}>
            <Logo/>
        </View>
            <View style={{
                margin:-30
            }}>

                <TouchableOpacity
                onPress={handleServices}
                style={styles.services}>
                    <Text style={{
                        display:'flex'
                    }}>
                            <AntDesign 
                            name="car" size={25} 
                            color="white"/>
                    </Text>
                    <Text style={styles.title_botton}> Carros</Text>
                </TouchableOpacity>

                <TouchableOpacity
                onPress={handleServices}
                style={styles.services}>
                    <Text style={styles.title_botton}>
                    <FontAwesome5 
                        name="truck" 
                        size={25} 
                        color="white"
                        /> Caminhões</Text>
                </TouchableOpacity>

                <TouchableOpacity
                onPress={handleServices}
                style={styles.services}>
                    <Text style={styles.title_botton}>
                        <FontAwesome5 
                        name="bus-alt" 
                        size={25} 
                        color="white"/> Ônibus
                        </Text>
                </TouchableOpacity>

                <TouchableOpacity
                onPress={handleServices}
                style={styles.services}>
                    <Text style={styles.title_botton}>
                    <FontAwesome5 
                        name="motorcycle" 
                        size={25} 
                        color="white"
                        /> Motos</Text>
                </TouchableOpacity>

                <View style={{
                    alignItems:'center',
                    flexDirection:'row',
                    justifyContent:'center',
                }}>
                    <Botao
                    texto={'Sair'}
                    corTexto={'black'}
                    corBotao={'white'}
                    largura={123}
                    onPress={handleLogout}/>
                </View>


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