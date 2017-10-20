module.exports = {
  createNew: (req, res, next) => {
    const {session} = req;
    const dbInstance = req.app.get('db');
    const {propname, propdesc, address, city, state, zip,
    imageurl, loanamount, monthlymorgage, desiredrent, recommendedrent, userid} = req.body;

    dbInstance.prop_create_new({propname, propdesc, address, city, state, zip,
    imageurl, loanamount, monthlymorgage, desiredrent, recommendedrent, userid})
      .then((userProps) => {
        session.user.properties = userProps;
        res.status(200).send(session.user);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send(err);
      })
  },
  getProperties: (req, res, next) => {
    const {session} = req;
    const {id: sessUsrId} = session.user;
    const dbInstance = req.app.get('db');

    dbInstance.prop_get({sessUsrId})
      .then((userProps) => {
        session.user.properties = userProps;
        res.status(200).send(session.user);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send(err);
      })
  },
  deleteProperty: (req, res, next) => {
    const {session} = req;
    const {id: propId} = req.params;
    const {id: sessUsrId} = session.user;
    const dbInstance = req.app.get('db');

    dbInstance.prop_delete({propId, sessUsrId})
      .then((userProps) => {
        session.user.properties = userProps;
        res.status(200).send(session.user);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send(err);
      })

  },
  filterProperties: (req, res, next) => {
    const {session} = req;
    const {id: sessUsrId} = session.user;
    const {desiredRent} = req.query;
    const dbInstance = req.app.get('db');

    dbInstance.prop_filter({sessUsrId, desiredRent})
      .then((filteredProps) => {
        session.user.properties = filteredProps;
        res.status(200).send(session.user);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send(err);
      })
  },
}
