const userSrv = require('../../../services/user.service');

module.exports.registerByEmail = async req => {
  const { rows } = await userSrv.register(req.body);

  return {
    headers: { 'respond-time': Date.now },
    status: 201,
    body: rows[0],
  };
};
