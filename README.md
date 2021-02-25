# babel-standalone-bug

1. run `yarn`
2. run `yarn run bundle`

You chould see an error: 
```
ERROR in ./node_modules/@babel/standalone/babel.js 92843:15-32
Module not found: Error: Can't resolve 'module' in '/Users/matyas.szabo/CODE/babel-standalone-bug/node_modules/@babel/standalone'
resolve 'module' in '/Users/matyas.szabo/CODE/babel-standalone-bug/node_modules/@babel/standalone'
  Parsed request is a module
  using description file: /Users/matyas.szabo/CODE/babel-standalone-bug/node_modules/@babel/standalone/package.json (relative path: .)
    Field 'browser' doesn't contain a valid alias configuration
    resolve as module
      /Users/matyas.szabo/CODE/babel-standalone-bug/node_modules/@babel/standalone/node_modules doesn't exist or is not a directory
      /Users/matyas.szabo/CODE/babel-standalone-bug/node_modules/@babel/node_modules doesn't exist or is not a directory
      /Users/matyas.szabo/CODE/babel-standalone-bug/node_modules/node_modules doesn't exist or is not a directory
      looking for modules in /Users/matyas.szabo/CODE/babel-standalone-bug/node_modules
        single file module
          using description file: /Users/matyas.szabo/CODE/babel-standalone-bug/package.json (relative path: ./node_modules/module)
            no extension
              Field 'browser' doesn't contain a valid alias configuration
              /Users/matyas.szabo/CODE/babel-standalone-bug/node_modules/module doesn't exist
            .js
              Field 'browser' doesn't contain a valid alias configuration
              /Users/matyas.szabo/CODE/babel-standalone-bug/node_modules/module.js doesn't exist
            .json
              Field 'browser' doesn't contain a valid alias configuration
              /Users/matyas.szabo/CODE/babel-standalone-bug/node_modules/module.json doesn't exist
            .wasm
              Field 'browser' doesn't contain a valid alias configuration
              /Users/matyas.szabo/CODE/babel-standalone-bug/node_modules/module.wasm doesn't exist
        /Users/matyas.szabo/CODE/babel-standalone-bug/node_modules/module doesn't exist
      looking for modules in /Users/matyas.szabo/CODE/node_modules
        single file module
          No description file found in /Users/matyas.szabo/CODE/node_modules or above
          no extension
            Field 'browser' doesn't contain a valid alias configuration
            /Users/matyas.szabo/CODE/node_modules/module doesn't exist
          .js
            Field 'browser' doesn't contain a valid alias configuration
            /Users/matyas.szabo/CODE/node_modules/module.js doesn't exist
          .json
            Field 'browser' doesn't contain a valid alias configuration
            /Users/matyas.szabo/CODE/node_modules/module.json doesn't exist
          .wasm
            Field 'browser' doesn't contain a valid alias configuration
            /Users/matyas.szabo/CODE/node_modules/module.wasm doesn't exist
        /Users/matyas.szabo/CODE/node_modules/module doesn't exist
      /Users/matyas.szabo/node_modules doesn't exist or is not a directory
      /Users/node_modules doesn't exist or is not a directory
      /node_modules doesn't exist or is not a directory
 @ ./globals.js 1:0-46 2:11-20

webpack 5.24.2 compiled with 1 error and 6 warnings in 1219 ms
error Command failed with exit code 1.
```
