const userSrv = require('../../../services/user.service');
const uuid = require('generate-safe-id');

module.exports.registerByEmail = async req => {
  const { rows } = await userSrv.register({
    id: uuid(),
    ...req.body,
  });
  return {
    headers: { 'x-respond-time': Date.now },
    status: 201,
    body: rows[0],
  };
};
