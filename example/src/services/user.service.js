const pg = require('../core/pg.core');

module.exports.register = ({ id, email, name, password }) =>
  pg.query({
    text: `INSERT INTO users(id, email, name, password) VALUES ($1, $2, $3, $4) RETURNING *`,
    values: [id, email, name, password],
  });
