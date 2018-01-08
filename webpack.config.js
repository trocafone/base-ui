const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    app: './app.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
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
   	contentBase: './src',
   	publicPath: '/dist'
	}
};