import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Register from '../pages/Register'
import Login from "../pages/Login";
import Services from '../pages/Services';

const Stack = createNativeStackNavigator();

export function AppRoutes(){
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='Register' component={Register}/>
            <Stack.Screen name='Login' component={Login}/>
            <Stack.Screen name='Services' component={Services}/>
        </Stack.Navigator>
    )
}