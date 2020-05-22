/* -------- BODY --------- */
const createUser = {
  type: 'object',
  additionalProperties: false,
  required: ['name', 'email', 'password'],
  properties: {
    name: { type: 'string', minLength: 2, maxLength: 50 },
    email: {
      type: 'string',
      minLength: 3,
      maxLength: 50,
      format: 'email',
    },
    password: { type: 'string', minLength: 6 },
  },
};

module.exports = {
  createUser,
};
