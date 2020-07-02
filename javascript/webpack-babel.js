// npm install --save-dev @babel/core @babel/preset-env babel-loader webpack webpack-cli webpack-dev-server
// npm install --save @babel/polyfill

// package.json
/*
{
  ...
  "scripts": {
    ...
    "build": "webpack",
    "start": "webpack-dev-server --output-public-path=/build/"
  },
  ...
}
*/

// webpack.config.js
const path = require('path');

module.exports = {
  entry: ['@babel/polyfill', './source/index.js'],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};
