const express = require('express');
const nodemailer = require('nodemailer');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

app.post('/contact', async (req, res) => {
    const name = (req.body.name || '').trim();
    const email = (req.body.email || '').trim();
    const message = (req.body.message || '').trim();
    // Basic validation
    const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!name || !email || !message) {
        return res.redirect('/contact?error=' + encodeURIComponent('All fields are required.'));
    }
    if (!emailRegex.test(email)) {
        return res.redirect('/contact?error=' + encodeURIComponent('Please enter a valid email address.'));
    }
    if (name.length > 100) {
        return res.redirect('/contact?error=' + encodeURIComponent('Name must be 100 characters or fewer.'));
    }
    if (message.length > 5000) {
        return res.redirect('/contact?error=' + encodeURIComponent('Message is too long.'));
    }

    // Configure NodeMailer (explicit Gmail SMTP)
    const missingEnv = ['MAIL_FROM', 'MAIL_PASS'].filter((k) => !process.env[k]);
    if (missingEnv.length) {
        console.warn('Missing environment variables for mail:', missingEnv.join(', '));
    }
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.MAIL_FROM,
            pass: process.env.MAIL_PASS
        }
    });

    let mailOptions = {
        from: process.env.MAIL_FROM,
        to: process.env.MAIL_TO || process.env.MAIL_FROM,
        replyTo: email,
        subject: `Portfolio Contact from ${name}`,
        text: message + `\n\nFrom: ${name} <${email}>`
    };

    try {
        await transporter.sendMail(mailOptions);
        res.redirect('/contact?success');
    } catch (err) {
        console.error('NodeMailer error:', err && err.code, err && err.response, err && err.message);
        let errorMsg = 'Failed to send message. Please check your email setup and try again.';
        res.redirect('/contact?error=' + encodeURIComponent(errorMsg));
    }
});

app.get('/', (req, res) => {
    res.redirect('/contact');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Portfolio website running on http://localhost:${PORT}`);
});
