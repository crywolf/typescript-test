var webpack = require("webpack");

module.exports = {
    entry: './src/index.ts',
    output: {
        filename: "./dist/bundle.js"
    },
    resolve: {
        extensions: [ '.ts', '.js', '' ]
    },
    module: {
        loaders: [
            {test: /\.tsx?$/, loader: 'ts-loader' }
        ]
    },

    devtool: 'source-map'
};