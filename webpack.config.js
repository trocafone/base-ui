const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, 'modules'),
  entry: {
    app: './troca-core/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'troca-core.js',
  },
  module: {

  	  rules:[
             {
                 test:/\.scss$/,
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

                ]},
  plugins: [
	  		new ExtractTextPlugin('style.css')
	  ],
  devServer: {
   	contentBase: './docs',
   	publicPath: '/dist'
	}
};