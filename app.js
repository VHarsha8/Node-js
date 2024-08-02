require('dotenv').config({ path: './secure.env' });
const express = require('express');
const mysql = require('mysql2');
const nodemailer = require('nodemailer');
const app = express();
const port = 3000;

// MySQL Connection Pool
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'mydatabase'
});

// Middleware to parse JSON and URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Serve static files (CSS, JS, images, etc.)
app.use(express.static('public'));

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Define routes
app.get('/', (req, res) => {
    res.render('animate.ejs'); // Render the animate.ejs file
});

app.post('/submit-form', (req, res) => {
    const { name, lastName, email, message } = req.body;

    // Insert data into MySQL
    pool.query('INSERT INTO messages (first_name, last_name, email, message) VALUES (?, ?, ?, ?)', [name, lastName, email, message], (error, results) => {
        if (error) {
            console.error(error);
            res.render('dataupdatefail.ejs');
        } else {
            // Email options
            const mailOptions = {
                from: process.env.EMAIL_USER,
                to: email,
                subject: 'We Received Your Data',
                text: `Hi ${name},\n\nThank you for getting in touch with us. We have received your message and will get back to you shortly.\n\nBest regards,\nDropout Engineering`
            };

            // Send email
            transporter.sendMail(mailOptions, (err, info) => {
                if (err) {
                    console.error('Error sending email:', err);
                    res.render('dataupdatefail.ejs');
                } else {
                    console.log('Email sent:', info.response);
                    res.render('datasuccessful.ejs');
                }
            });
        }
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
