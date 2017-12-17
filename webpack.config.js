const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

let distFolder = path.resolve(__dirname, 'dist');

module.exports = {
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
    },
    plugins: [new CleanWebpackPlugin([distFolder])]
};
