# node_api_coding_convention
## Style Rule 
-  [API Design Guide]: https://cloud.google.com/apis/design
-  [Node.js Style Guide]: https://github.com/airbnb/javascript


## Folder structure
```bash
project
|____docs/
|
|____config/
|    default.yml
|    custom-environment-variables.yml
|
|____node_mudules/
|
|____src/
|    |____app/
|    |    |____function/
|    |    |    |____sync/
|    |    |    |    *.sync.js
|    |    |    |    *.sync.test.js
|    |    |    |
|    |    |    |____aSync/
|    |    |    |    *.aSync.js
|    |    |    |    *.aSync.test.js
|    |    |    |
|    |    |    |____gRpc/
|    |    |    |    *.gRpc.js
|    |    |    |    *.gRpc.test.js
|    |    |    |
|    |    |____schemas/
|    |    |    *.schema.js
|    |    |    *.schema.test.js
|    |    |
|    |    |    errors.js
|    |    |    handler.js
|    |    |    router.js
|    |    
|    |____core/
|    |    *.core.js
|    |    *.core.test.js
|    |
|    |____protobuf/
|    |    *.proto
|    |
|    |____lib/
|    |    *.js
|    |    *.test.js
|    |
|    |____middlewares/
|    |    *.midd.js
|    |    *.midd.test.js
|    |
|    |____routes/
|    |    *.route.js
|    |    *.route.test.js
|    |
|    |____services/
|    |    *.service.js
|    |    *.service.test.js
|    |
|    |    app.js
|    |    app.test.js
|   .editorconfig
|   .eslintignore
|   .eslintrc.js
|   .gitignore
|   .prettierrc
|   .dockerignore
|   dockerfile
|   jest.config.js
|   package-lock.json
|   package.json
|   swagger.yaml
```

## User Service:
- Register by email: [POST] /api/users/register_by_email
- Login: [POST] /api/users/login

```javascript

// user.schema.js
const login = {
  type: "object",
  required: ["password"],
  additionalProperties: false,
  properties: {
    email: { type: "string", format: "email" },
    phoneNumber: { type: "string" },
    password: { type: "string" },
  },
};

const registerByEmail = {
  type: "object",
  additionalProperties: false,
  required: ["name", "password", "email"],
  properties: {
    name: { type: "string", minLength: 2 },
    email: { type: "string", format: "email" },
    password: { type: "string" },
  },
};

// user.routes.js
const validator = require("../middlewares/validator");
const schema = require("../app/schemas/user.schema");
const handler = require("../app/handler");

router.post("/users/login", validator(schema.login), handler.login);
router.post("/users/register_by_email", validator(schema.registerByEmail), handler.registerByEmail);
```
