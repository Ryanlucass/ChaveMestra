const nodemailer = require("nodemailer");

const SMTP_CONFIG = require("./config/smtp");

const transporter = nodemailer.createTransport({
    host: SMTP_CONFIG.host,
    port: SMTP_CONFIG.port,
    secure: false,
    auth: {
    user: SMTP_CONFIG.user,
    pass: SMTP_CONFIG.pass,
},
    tls: {
    rejectUnauthorized: false,
    },
});

async function run() {
    const mailSent = await transporter.sendMail({
    //text: "Texto do E-mail",
    subject: "Confirmação de Agendamento - Chave Mestra",
    from: "Chave Mestra <chavemestrax@gmail.com",
    to: ["chavemestrax@gmail.com", "lucasryanalves@gmail.com"],
    html: `
    <html>
        <body>
            <strong>Confirmação de Agendamento!</strong>
            <br>
            <br>
            O seu agendamento foi marcado com sucesso!
            <br>
            <br>
            Se dirija a nossa loja no dia e hora marcado e será um prazer recebê-lo(a).
            <br>
            <br>
            Segue o endereço da nosa loja:
            <br>
            https://www.mapquestapi.com/staticmap/v5/map?locations=Av.+Carneiro+de+Mendon%C3%A7a%2C+909+-+Panamericano%2C+Fortaleza+-+CE%7Cmarker-285A98-md&zoom=13&size=350%2C300%402x&type=map&key=hu0DbuZGHcAdEuPkiyhJZ7chlVpE4ivz
        </body>
    </html> 
    `,
});

console.log(mailSent);
}

run();