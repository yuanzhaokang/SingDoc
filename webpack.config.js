var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
   devtool: false,
   entry: {
      bundle: './src/app/render.js',
      extend: './src/util/extend.js'
   },
   output: {
      path: __dirname,
      filename: '[name].js',
   },
   module: {
      rules: [
         {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract({
               fallback: 'style-loader', use: [{
                  loader: 'css-loader', options: {
                     minimize: true
                  }
               }]
            })
         },
         {
            test: /\.less$/,
            loader: ExtractTextPlugin.extract({
               fallback: 'style-loader',
               use: 'css-loader!less-loader'
            })
         },
         {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract({
               fallback: 'style-loader',
               use: 'css-loader!sass-loader'
            })
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
   ],
   resolve: {
      modules: [
         "node_modules",
         path.resolve(__dirname, "./")
      ]
   },
   optimization: {
      splitChunks: {
         cacheGroups: {
            commons: {
               chunks: "initial",
               test: /react|lodash|react-dom|redux|react-redux|markdown-it|core-decorators/,
               name: "vendor", 
            }
         }
      }
   }
}