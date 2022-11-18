import React, { Component } from 'react';
import { Button } from 'react-native';
import openMap from 'react-native-open-maps';

export default class App extends Component {
    _goToYosemite() {
        openMap({ latitude: -3.737900, longitude: -38.536330 });
    }

    render() {
        return (
            <Button
            color={'#bdc3c7'}
            onPress={this._goToYosemite}
            title="Clique aqui para abrir o mapa 🗺" />
        );
    }
}