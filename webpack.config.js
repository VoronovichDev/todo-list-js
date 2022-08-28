const path = require('path');

module.exports = {
   mode: "none",
   entry: './src/index.js',
   devServer: {
      static: './dist',
   },
   output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
   },
};