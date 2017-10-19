module.exports = {
  login: (req, res, next) => {
    const {session} = req;
    const {username, password} = req.body;
    const dbInstance = req.app.get('db');

    dbInstance.auth_login({username, password})
      .then((user) => {
        user.length === 0 ? res.status(200).send('Unauthorized') : res.status(200).send(user);
      })
      .catch((err) => {
        res.status(500).send(err);
      })
  },
  register: (req, res, next) => {
    const {session} = req;
    const {username, password} = req.body;
  },
  logout: (req, res, next) => {
    const {session} = req;
    const {username, password} = req.body;
  }
}
