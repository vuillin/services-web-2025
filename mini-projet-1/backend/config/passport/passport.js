const bCrypt = require('bcrypt');

module.exports = function(passport, user) {
  const User = user;
  const LocalStrategy = require('passport-local').Strategy;

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findByPk(id).then(user => {
      if (user) done(null, user.get());
      else done(null, false);
    });
  });

  // STRATEGIE INSCRIPTION
  passport.use('local-signup', new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true
    },
    (req, email, password, done) => {
      const generateHash = password => bCrypt.hashSync(password, bCrypt.genSaltSync(8));
      
      User.findOne({ where: { emailId: email } }).then(user => {
        if (user) return done(null, false, { message: 'Email déjà utilisé' });

        const userPassword = generateHash(password);
        const data = {
          emailId: email,
          password: userPassword,
          firstName: req.body.firstname,
          lastName: req.body.lastname
        };

        User.create(data).then(newUser => {
          if (!newUser) return done(null, false);
          return done(null, newUser);
        });
      });
    }
  ));

  // STRATEGIE CONNEXION
  passport.use('local-signin', new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true
    },
    (req, email, password, done) => {
      const isValidPassword = (userPass, password) =>
        bCrypt.compareSync(password, userPass);

      User.findOne({ where: { emailId: email } }).then(user => {
        if (!user) return done(null, false, { message: 'Email non trouvé' });
        if (!isValidPassword(user.password, password))
          return done(null, false, { message: 'Mot de passe incorrect' });

        return done(null, user.get());
      }).catch(err => {
        return done(null, false, { message: 'Erreur lors de la connexion' });
      });
    }
  ));
};
