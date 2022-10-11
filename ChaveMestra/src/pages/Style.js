import {StyleSheet} from 'react-native';
import { useFonts } from 'expo-font';


export function Fontes (){
    const [fontsLoaded] = useFonts({
        robotoBold: require('../fonts/Roboto-Bold.ttf'),
        robotoBoldItalic: require('../fonts/Roboto-BoldItalic.ttf'),
        robotoCondensendLight: require('../fonts/RobotoCondensed-Light.ttf'),
        robotoCondensedRegular: require('../fonts/RobotoCondensed-Regular.ttf')
    });
}


export default StyleSheet.create({

    body:{
        height:'100%',
        width:'100%',
        backgroundColor:'#D8BD32',
        alignItems:'center',
        justifyContent:'flex-start'
    },
    container:{
        flexDirection:'row',
        alignItems:'center',
        margin:120
    },
    inputs:{
        height: 33,
        width:230,
        margin: 12,
        backgroundColor:'white',
        padding: 10,
        borderRadius: 6
    },
    text_label:{
        marginLeft: 9,
        fontFamily:'robotoCondensedRegular',
        fontSize: 15
    },
    log_img:{
        marginLeft: -40,
        marginBottom: 30
    },
    logo_01:{
        fontFamily: "robotoBoldItalic", 
        fontSize:25
    },
    logo_02:{
        fontFamily: "robotoCondensendLight", 
        fontSize:15
    },
    logo_03:{
        fontFamily: "robotoBold", 
        fontSize:25
    }

});