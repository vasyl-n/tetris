const path = require('path');
var LiveReloadPlugin = require('webpack-livereload-plugin');
var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/public');

module.exports = {
    entry: { bundle: './client/src/index.jsx' },
    output: {
        path: DIST_DIR,
        filename: 'bundle.js'
      },
    module : {
        rules: [
            {
                test: /.jsx/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                  presets: ['es2015', 'react']
                }
              },
              {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
              }
        ]
    },
    watch: true,
    plugins: [
        new LiveReloadPlugin()
      ]
  };