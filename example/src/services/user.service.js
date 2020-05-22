const pg = require('../core/pg.core');

module.exports.register = ({ email, name, password }) =>
  pg.query({
    text: `INSERT INTO users(email, name, password) VALUES ($1, $2, $3) RETURN *`,
    values: [email, name, password],
  });
