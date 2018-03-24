const path = require('path');
var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/public');

module.exports = {
    entry: './client/src/app.jsx',
    output: {
        path: DIST_DIR,
        filename: 'bundle.js'
      },
    module : {
    rules: [
        {
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['es2015', 'react']
                }
            }
        }
        ]
    },
    watch: true
  };