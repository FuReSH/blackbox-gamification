const path = require('path');

module.exports = {
  entry: './src/blackbox_count-ascii.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};