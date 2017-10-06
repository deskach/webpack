const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: "bundle.js",
    },
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.js$/,
            },
            // {
            //     // loaders are applied from right to left
            //     use: ['style-loader', 'css-loader'],
            //     test: /\.css$/,
            // },
            {
                // this generates standalone css file,
                // rather than injecting css into the DOM
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                }),
                test: /\.css$/,
            },
        ]
    },
    plugins: [
        new ExtractTextPlugin('bundle.css'),
    ]
};

module.exports = config;
