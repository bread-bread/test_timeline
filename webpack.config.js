const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './source/js/app.js',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'build/assets/js/'),
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
        ],
    }
};