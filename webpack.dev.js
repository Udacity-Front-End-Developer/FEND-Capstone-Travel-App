const HtmlWebpackPlugin = require('html-webpack-plugin');
// eslint-disable-next-line no-unused-vars
const webpack = require('webpack'); // to access build-in plugins
const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        contentBase: './dist',
    },
    entry: {
        index: './src/client/index.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    rules: [
        {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                },
            },
        },
    ],
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development',
        }),
    ],
};
