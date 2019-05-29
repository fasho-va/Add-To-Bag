var path = require('path');
var SRC_DIR = path.join(__dirname, 'client');
var DIST_DIR = path.join(__dirname, 'public');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: 'babel-loader'
        // Take a look at your `.babelrc` file (located in same the directory
        // as your `package.json` file) to see how your Babel presets are
        // configured.
      }
    ]
  }
};
//create default .babelrc file
//