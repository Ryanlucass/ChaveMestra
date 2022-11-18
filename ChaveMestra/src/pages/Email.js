import * as React from 'react';
import { Text, View, StyleSheet,TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

export default function App() {

function sendMail() {

    body = {
        "assunto": "Confirmação de Agendamento",
        "destinatarios": "chavemestrax@gmail.com, vynnyx@ymail.com",
        "corpo": "Texto de teste",
        "corpoHtml": ""
    }
    // a preferencia do que tá sendo enviado é o CorpoHTML
    let request = new XMLHttpRequest()
    request.open("POST", "https://us-central1-chavemestra-f6e9d.cloudfunctions.net/enviarEmail", true)
    request.setRequestHeader("Content-type", "application/json")
    request.send(JSON.stringify(body))

    request.onload = function() {
        console.log(this.responseText)
    }

    console.log(request.responseText)
}

  return (
    <View style={styles.container}>
    <TouchableOpacity onPress={() => sendMail()}>
      <Text style={styles.paragraph}>
        Clique aqui para enviar o e-mail
      </Text>
    </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});