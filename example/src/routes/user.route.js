const express = require('express');
const handler = require('../app/handler');
const validator = require('../middlewares/validator.midd');
const schema = require('../app/schemas/user.scheme');

const router = express.Router();

router.post(
  '/register-by-email',
  validator(schema.createUser)(),
  handler.registerByEmail
);

module.exports = router;
