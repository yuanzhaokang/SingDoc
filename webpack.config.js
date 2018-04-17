var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
   devtool: false,
   entry: {
      bundle: './src/app/App.js',
      vendor: ['react', 'react-dom']
   },
   output: {
      path: __dirname + '/public/dist/',
      filename: '[name].js',
   },
   module: {
      rules: [
         {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader'})
         },
         {
            test: /\.less$/,
            loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader!less-loader'})
         },
         {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader!sass-loader'})
         },

         {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
         },
         {
            test: /\.jsx$/,
            loader: 'babel-loader!jsx-loader'
         }
      ]
   },
   plugins: [
      new ExtractTextPlugin({filename: '[name].css'})
   ]
}