import React, { Component } from 'react';
import { Button, TouchableOpacity, Text} from 'react-native';
import openMap from 'react-native-open-maps';




export default class App extends Component {
    _goToYosemite() {
        openMap({ 
            latitude: -3.7330701,
            longitude: -38.5826676,
            zoom :30, 
            travelType:'drive'
        });
        
    }

    render() {
        return (
            <TouchableOpacity
            style={{
                marginTop: 16,
                backgroundColor: '#D8BD32',
                borderRadius: 5,
                paddingVertical: 50,
                width: '100%'
            }}
            onPress={this._goToYosemite}
            ><Text
            style={{textAlign:'center'}}
            >
                Clique aqui para abrir o mapa 🗺
            </Text>
            </TouchableOpacity>
        );
    }
}