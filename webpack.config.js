const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        app: './modules/troca-core/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'troca-core.js',
    },
    module: {

        rules: [
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.scss|\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.(woff2?|ttf|eot|svg|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader',
                options: {
                    name: 'fonts/[name].[ext]?[hash]'
                }
            }

        ]
    },
    plugins: [
        new ExtractTextPlugin('style.css')
    ],
    externals: {
        "jquery": "jQuery"
    },
    devServer: {
        contentBase: path.join(__dirname, "modules"),
        publicPath: "/dist"
    }
};