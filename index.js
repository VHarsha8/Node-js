const express = require('express');
const path = require('path');

const app = express();

// Set EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Set up static files middleware
app.use(express.static(path.join(__dirname, 'public')));

// Render the EJS file
app.get('/', (req, res) => {
    res.render('animate.ejs');
});

// Start the server
const server = app.listen(3000, () => {
    console.log(`The application started on port ${server.address().port}`);
});
