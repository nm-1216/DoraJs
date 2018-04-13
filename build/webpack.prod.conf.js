const path = require('path');

module.exports = {
  entry: {
  	index: 	'./index.js',
  	Dora: 	'./Dora.js',
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
  },
};