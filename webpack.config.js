var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const VENDOR_LIBS = [
    "faker",
    "lodash",
    "react",
    "react-dom",
    "react-input-range",
    "react-redux",
    "react-router",
    "redux",
    "redux-form",
    "redux-thunk",
];

module.exports = {
    entry: {
        bundle: './src/index.js',
        vendor: VENDOR_LIBS,
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        // ^ this creates 2 bundles - bundle.js & vendor.js;
        // name is key of the entry section.
    },
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/,
            },
            {
                use: ['style-loader', 'css-loader'],
                test: /\.css$/,
            },
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        }),
        // ^this makes sure that vendor.js and bundle.js do not intersect
        new HtmlWebpackPlugin({
            template: 'src/index.html',
        }),
        // ^this auto-generates index.js in dist folder and inserts js-scripts into it
    ]
};
