const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

let distFolder = path.resolve(__dirname, 'dist');

module.exports = env => {
    console.log('env', env);
    return env.prod == 'true'
        ? {
              entry: './src/app.js',
              output: {
                  filename: 'app.js',
                  path: distFolder
              },
              plugins: [new UglifyJsPlugin()],
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
