const express = require('express');
const nodemailer = require('nodemailer');
const { createSSRApp } = require('vue');
const { renderToString } = require('@vue/server-renderer');
const app = express();
const cors = require('cors'); // Importiere das cors-Paket

app.use(express.json());
app.use(cors());

app.post('/send-email', async (req, res) => {
    try {
        const { email, comment } = req.body;
        const transporter = nodemailer.createTransport({
            host: 'SMTP-HOST',
            port: 587,
            secure: false,
            auth: {
                user: 'SMTP-USER',
                pass: 'SMTP-PASS',
            },
        });

        const mailOptions = {
            from: 'SMTP-MAIL',
            to: email,
            subject: 'Kontakt Page CandleShop',
            html: comment,
        };

        await transporter.sendMail(mailOptions);
        res.json({ message: 'E-Mail wurde erfolgreich gesendet!' });
    } catch (error) {
        console.error('Fehler beim Senden der E-Mail:', error);
        res.status(500).json({ error: 'E-Mail konnte nicht gesendet werden.' });
    }
});

const port = process.env.PORT || 5173;
app.listen(port, () => {
    console.log(`Server läuft auf Port ${port}`);
});
