const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
// eslint-disable-next-line no-unused-vars
const webpack = require('webpack'); // to access build-in plugins

const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.scss$/,
                /* Shortcut to: rules.use: [ { loader: 'style-loader, ...}]
                *@see: https://webpack.js.org/configuration/module/#ruleuse
                * */
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin(),
    ],
    optimization: {
        minimizer: [
            // eslint-disable-next-line quotes
            `...`,
            new CssMinimizerPlugin(),
        ],
    },
});
