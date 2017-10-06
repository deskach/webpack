const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: "bundle.js",
        publicPath: "build/",
    },
    module: {
        rules: [
            {   // npm i --save-dev babel-loader babel-core babel-preset-env
                use: 'babel-loader',
                test: /\.js$/,
            },
            // {
            //     // loaders are applied from right to left
            //     use: ['style-loader', 'css-loader'],
            //     test: /\.css$/,
            // },
            {   // npm i --save-dev css-loader style-loader extract-text-webpack-plugin
                // this generates standalone css file,
                // rather than injecting css into the DOM
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                }),
                test: /\.css$/,
            },
            {   // npm i --save-dev image-webpack-loader url-loader file-loader
                test: /\.(jpe?g|png|gif|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {limit: 4000}, // put larege images in separate files
                    },
                    'image-webpack-loader',
                ]
            },
        ]
    },
    plugins: [
        new ExtractTextPlugin('bundle.css'),
    ]
};

module.exports = config;
