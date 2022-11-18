'use strict';
const functions  = require('firebase-functions');
const nodemailer = require('nodemailer');
const cors = require('cors')({origin: true});

let url = "smtps://chavemestrax@gmail.com:"+"juuerasuclzhvvgk" + "@smtp.gmail.com:465";
let transporter = nodemailer.createTransport(url);

exports.enviarEmail = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    let remetente = '"Chave Mestra" <chavemestrax@gmail.com>';

    let assunto = req.body['Confirmação de Serviço'];
    let destinatarios = req.body['chavemestrax@gmail.com']; // lista de e-mails destinatarios separados por ,
    let corpo = req.body['teste de mensagem'];
    let corpoHtml = req.body['corpoHtml'];

    let email = {
        from: remetente,
        to: destinatarios,
        subject: assunto,
        text: corpo,
        html: corpoHtml
    };

    transporter.sendMail(email, (error, info) => {
        if (error) {
          return console.log(error);
        }
        console.log('Mensagem %s enviada: %s', info.messageId, info.response);
    });
  });
});