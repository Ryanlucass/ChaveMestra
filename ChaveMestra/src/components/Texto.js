import { React } from "react";
import { StyleSheet, Text } from "react-native";

export default function Texto({children, style}){
    return <Text style={[style, Estilos.texto]}>{children}</Text>
}

const Estilos = StyleSheet.create({
    texto:{
        fontFamily:'RobotoCondensedReulgar'
    }
})