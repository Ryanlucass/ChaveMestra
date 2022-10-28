import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Register from '../pages/Register';
import Login from '../pages/Login';

const Stack = createNativeStackNavigator();

export function InapRoutes(){
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='Register' component={Register}/> 
            <Stack.Screen name='Login' component={Login}/>
        </Stack.Navigator>
    )
}