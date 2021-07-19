const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// eslint-disable-next-line no-unused-vars
const webpack = require('webpack'); // to access build-in plugins
const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        proxy: {
            '/': {
                target: 'http://localhost:3000/',
            },
        },
        contentBase: path.resolve(__dirname, 'dist'),
        hot: true,
        overlay: {
            warnings: true,
            errors: true,
        },
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                /* Shortcut to: rules.use: [ { loader: 'style-loader, ...}]
                *@see: https://webpack.js.org/configuration/module/#ruleuse
                * */
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin({
            dry: true,
            verbose: true,
            cleanStaleWebpackAssets: false,
            protectWebpackAssets: false,
        }),
    ],
});
