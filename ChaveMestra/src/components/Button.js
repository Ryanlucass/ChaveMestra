import React from "react";
import { TouchableOpacity, Text, StyleSheet, View} from "react-native";


export default function Button(title, onPress){
    return(
        <View style={style.body}>
            <TouchableOpacity  onPress={onPress.onPress} style={style.container}>
                <Text style={style.title}>{title.title}</Text>
            </TouchableOpacity>
        </View>
    );
}



const style = StyleSheet.create({
    body:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        height:'100%',
        width:'100%'
    },
    container:{
        padding: 16,
        backgroundColor:'red',
        alignContent:"center",
        justifyContent:'center',
        width: '100%',
        borderRadius: 8
    },
    title:{
        color:'#fff',
        fontSize: 20,
        fontWeight:"bold",
        textAlign: "center"
    }
})


