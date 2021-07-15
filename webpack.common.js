const HtmlWebpackPlugin = require('html-webpack-plugin');
// eslint-disable-next-line no-unused-vars
const webpack = require('webpack'); // to access build-in plugins
const path = require('path');

module.exports = {
    entry: './src/client/index.js',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
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
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/client/views/index.html',
        }),
    ],
};
