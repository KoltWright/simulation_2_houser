module.exports = {
  login: (req, res, next) => {
    const {session} = req;
    const {username, password} = req.body;
    const dbInstance = req.app.get('db');

    dbInstance.auth_login({username, password})
      .then((user) => {
        if (user.length > 0) {
          session.user.username = user[0].username;
          session.user.id = user[0].id;
          res.status(200).send(session.user);
        } else {
          res.status(200).send('Unauthorized')
        }
      })
      .catch((err) => {
        res.status(500).send(err);
      })
  },
  register: (req, res, next) => {
    const {session} = req;
    const {username, password} = req.body;
    const dbInstance = req.app.get('db');

    dbInstance.auth_register_username_chk({username})
      .then((user) => {
        if (user.length === 0) {
          dbInstance.auth_register({username, password})
            .then((newUser) => {
              session.user.username = newUser[0].username;
              session.user.id = newUser[0].id;
              res.status(200).send(session.user);
            })
            .catch(err => {
              res.status(500).send(err);
            })
        } else {
          res.status(200).send('This user already exists')
        }
      })
      .catch(err => {
        res.status(500).send(err);
      })
  },
  logout: (req, res, next) => {
    const {session} = req;
    session.destroy();
    res.status(200).send(session.user);
  }
}
