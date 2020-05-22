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