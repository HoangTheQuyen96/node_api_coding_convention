const Ajv = require('ajv');

const validator = schema => type => (req, res, next) => {
  try {
    const ajv = new Ajv({
      removeAdditional: true,
      useDefaults: true,
      coerceTypes: true,
      allErrors: true,
      verbose: true,
      errorDataPath: 'property',
    });

    const validate =
      type === 'params' ? req.params : type === 'query' ? req.query : req.body;

    const valid = ajv
      .addSchema(schema, 'bodySchema')
      .validate('bodySchema', validate);

    const validF = !valid
      ? () => {
          // eslint-disable-next-line
          throw {
            status: 0,
            reason: 'validation error',
            errors: ajv.errors.map(err => ({
              code: 422,
              message: `${err.dataPath.slice(1)} ${err.message}`,
            })),
          };
        }
      : () => next();

    validF();
  } catch (error) {
    res.status(422).json(error);
  }
};

module.exports = validator;
