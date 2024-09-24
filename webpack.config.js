const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
        new FaviconsWebpackPlugin({
            logo: './src/images/icon.png',
            inject: true,
        }),
    ],
    devServer: {
        open: true,
        port: 3000,
        watchFiles: ['src/**/*.html'],
    },
    mode: 'development',
}
