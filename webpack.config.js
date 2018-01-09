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
                 test:/\.(s*)css$/,
		         use: ExtractTextPlugin.extract({
		           fallback: 'style-loader',
		           use: ['css-loader', 'sass-loader']
		         })
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