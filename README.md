To use radium
  1. install radium in app folder
  2. Install babel-plugin-transform-decorators-legacy in main folder
  3. Add this line to "transform-decorators-legacy" .babelrc file at line no 16 / under developement > plugins array.
  4. Now you can use the radium by adding importing Radium from 'radium' & @Radium above the class, use css from a json var.

To remove logger of Redux,
  1. Delete middleware string in Store.js
  2. Remove middleware object from store which looks like `const store = createStore(reducer);`
