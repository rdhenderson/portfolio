// Dependencies
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

// Set up environment variables and database
const PORT = process.env.PORT || 8080;

// Initialize express
const app = express();
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Set /public as base for static assets
app.use(express.static('public'));

//Set root path for serving main page
app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`);
});

// Connect to database and set the app to listen on port 3000
app.listen(PORT, () => {
  console.log('App running on port', PORT);
});
