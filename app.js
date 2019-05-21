const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

//
// ─── MIDDLEWARE ─────────────────────────────────────────────────────────────────
//

//morgan
app.use(morgan('dev'));
// body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//
// ─── THIS IS SETUP FOR HEROKU DEPLOY ────────────────────────────────────────────
//

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, 'client/build')));
// Anything that doesn't match the above, send back index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

//
// ─── SERVER CONNECT ─────────────────────────────────────────────────────────────
//

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Devxad start on port: ${port}`);
});
