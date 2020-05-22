const { registerByEmail } = require('./function/sync/user.sync');
const wrapF = require('../middlewares/wrap.midd');

module.exports = {
  registerByEmail: wrapF(registerByEmail),
};
