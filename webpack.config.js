const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

let distFolder = path.resolve(__dirname, 'dist');

module.exports = env => {
    return env && env.prod == 'true'
        ? {
              entry: './src/app.js',
              output: {
                  filename: 'app.js',
                  path: distFolder
              },
              plugins: [
                  new UglifyJsPlugin(),
                  new webpack.DefinePlugin({
                      'process.env.NODE_ENV': JSON.stringify('production')
                  })
              ],
              module: {
                  rules: [
                      {
                          test: /\.js$|\.jsx$/,
                          exclude: /node_modules/,
                          loader: 'babel-loader'
                      }
                  ]
              }
          }
        : {
              entry: './src/app.js',
              output: {
                  filename: 'app.js',
                  path: distFolder
              },
              devServer: {
                  publicPath: '/dist/',
                  compress: true,
                  port: 9000,
                  historyApiFallback: true
              },
              watch: true,
              devtool: 'eval-source-map',
              module: {
                  rules: [
                      {
                          test: /\.js$|\.jsx$/,
                          exclude: /node_modules/,
                          loader: 'babel-loader'
                      }
                  ]
              }
          };
};
