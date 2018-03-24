const path = require('path');

module.exports = {
    entry: './client/src/app.jsx',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
      },
      watch: true
  };