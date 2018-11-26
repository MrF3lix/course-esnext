const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: { app: './src/index.js' },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'public')
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: false,
        port: 8080
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    }
};