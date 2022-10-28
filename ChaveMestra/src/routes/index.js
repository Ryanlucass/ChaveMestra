import React, { useState, useEffect } from 'react';
import { NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth'
import { View, Text } from 'react-native'; 


import { AppRoutes } from './app.routes';
// import Register from '../pages/Register';
import { InapRoutes} from './inap.routes';
// import Login from '../pages/Login';


export default function Routes(){
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState();

    useEffect(() => {
        const subscriber = auth()
        .onAuthStateChanged(response => {
            setUser(response);
            setLoading(false);
        });

        return subscriber;
    },[]);

    if(loading){
        return <View>
            <Text>Deu erro</Text>
        </View>
    }

    return(
        <NavigationContainer>
            {user ? <AppRoutes/> : <InapRoutes/>}
        </NavigationContainer>
    )
}