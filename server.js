const express = require('express');
const path = require('path');


let port = 8080;
const app = express();

// Server routes go before app.get('*',...)
app.get('/hello', (req, res) => res.send("Hello world!"));

if (process.env.NODE_ENV === "production") {
    port = 3000;

    app.use(express.static(path.join(__dirname, 'dist')));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'dist/index.html'));
    });

    console.log('server is running in production mode');
} else {
    const webpackMiddleware = require('webpack-dev-middleware');
    const webpackConfig = require('./webpack.config');
    const webpack = require('webpack');

    app.use(webpackMiddleware(webpack(webpackConfig)));
}

app.listen(process.env.PORT || port, () => console.log(`Listening on port ${port}`));

