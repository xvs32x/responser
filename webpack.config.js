const path = require('path');
// in case you run into any typescript error when configuring `devServer`
require('webpack-dev-server');

module.exports = {
    mode: 'production',
    entry: './index.ts',
    resolve: {
        extensions: ['.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.bundle.js',
    },
    target: 'node',
    optimization: {
        minimize: false
    }
};