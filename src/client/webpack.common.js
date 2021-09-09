const HtmlWebpackPlugin = require('html-webpack-plugin');
// eslint-disable-next-line no-unused-vars
const webpack = require('webpack'); // to access build-in plugins
const path = require('path');

module.exports = {
    entry: {
        index: './page-index/main.js',
        trips: './page-trips/main.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'img/[name][ext]',
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
                        plugins: ['@babel/transform-runtime'],
                    },
                },
            },
            {
                test: /\.(png|jpg)$/i,
                type: 'asset/resource',
                generator: {
                    // filename: 'img/[name][ext]',
                },
            },
        ],
    },
    plugins: [
        /**
        index.js is injected in index.html, achieveb by creating the entry
        point and referencing it below using inject: true & chunks: ['index'].
        */
        new HtmlWebpackPlugin({
            template: './page-index/main.html',
            filename: 'index.html',
            inject: true,
            chunks: ['index'],
        }),
        new HtmlWebpackPlugin({
            template: './page-trips/main.html',
            filename: 'trips.html',
            inject: true,
            chunks: ['trips'],
        }),
    ],
};
