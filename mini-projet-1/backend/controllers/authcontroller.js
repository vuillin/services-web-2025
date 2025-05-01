exports.signup = (req, res) => {
  res.status(200).json({ message: 'Page inscription disponible' });
};

exports.signin = (req, res) => {
  res.status(200).json({ message: 'Page connexion disponible' });
};

exports.home = (req, res) => {
  res.status(200).json({ message: 'Bienvenue, vous êtes connecté !' });
};

exports.logout = (req, res) => {
  req.session.destroy(() => {
    res.clearCookie('connect.sid');
    res.status(200).json({ message: 'Déconnecté avec succès' });
  });
};
