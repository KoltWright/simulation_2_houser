const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const massive = require('massive');
const cors = require('cors')
const axios = require('axios');
require('dotenv').config();

const checkForSession = require('./middlewares/checkForSession.js');
const auth_controller = require('./controllers/auth_controller.js');
const prop_controller = require('./controllers/prop_controller.js');

const app = express();

app.use(bodyParser.json());
app.use(cors());

massive(process.env.CONNECTION_STRING)
  .then(dbInstance => {
    app.set('db', dbInstance);
  })

app.use(
  session({
  secret: "I do what I want",
  resave: false,
  saveUninitialized: false,
  })
);

app.use(checkForSession);

const authBaseUrl = '/api/auth/'
// authorization endpoints
app.post(`${authBaseUrl}login`, auth_controller.login);
app.post(`${authBaseUrl}register`, auth_controller.register);
app.post(`${authBaseUrl}logout`, auth_controller.logout);

const propBaseUrl = '/api/properties'
// property endpoints
// app.post(`${propBaseUrl}`, createNew);
// app.get(`${propBaseUrl}`, getProperties);
// app.delete(`${propBaseUrl}/:id`, deleteProperty);
// app.get(`${propBaseUrl}/filter`, filterProperties);

const port = 3005;
app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );
