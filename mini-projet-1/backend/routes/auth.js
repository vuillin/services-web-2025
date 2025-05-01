const authController = require('../controllers/authcontroller');

module.exports = function(app, passport) {
  app.post('/api/signup', passport.authenticate('local-signup'), (req, res) => {
    res.status(201).json({ message: 'Inscription réussie' });
  });

  app.post('/api/signin', passport.authenticate('local-signin'), (req, res) => {
    res.status(200).json({ message: 'Connexion réussie' });
  });

  app.get('/api/home', isLoggedIn, authController.home);
  app.get('/api/logout', authController.logout);

  app.get('/api/check-auth', (req, res) => {
    if (req.isAuthenticated()) {
      res.status(200).json({ authenticated: true });
    } else {
      res.status(200).json({ authenticated: false });
    }
  });

  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.status(401).json({ message: 'Non autorisé' });
  }
};
