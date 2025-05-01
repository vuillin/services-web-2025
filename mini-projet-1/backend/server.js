const express = require('express');
const session = require('express-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

// CORS pour autoriser le frontend Vue.js
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({ secret: 'butinfo', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Point de test API
app.get('/', (req, res) => {
  res.status(200).json({ message: 'API Passport prête' });
});

// Connexion DB + routes
const models = require('./models');
models.sequelize.sync().then(() => {
  console.log("✅ La base de données fonctionne bien");
}).catch((err) => {
  console.log("❌ Erreur de synchronisation :", err);
});

require('./config/passport/passport.js')(passport, models.user);
require('./routes/auth.js')(app, passport);

// Lancer le serveur
app.listen(3000, () => {
  console.log("✅ Le serveur écoute sur le port 3000");
});
