import {StyleSheet} from 'react-native';

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
        margin:120,
    },
    inputs:{
        height: 33,
        width:230,
        margin: 5,
        padding: 5,
        borderRadius: 6,
        backgroundColor:'white',
        fontFamily:'RobotoRegular'    
    },
    text_label:{
        marginLeft: 9,
        fontFamily:'RobotoCondensedRegular',
        fontSize: 15
    },
    log_img:{
        marginLeft: -40,
        marginBottom: 30
    },
    logo_01:{
        fontFamily: "RobotoBoldItalic", 
        fontSize:25
    },
    logo_02:{
        fontFamily: "RobotoCondensedRegular", 
        fontSize:15
    },
    logo_03:{
        fontFamily: "RobotoBold", 
        fontSize:25
    }
});


