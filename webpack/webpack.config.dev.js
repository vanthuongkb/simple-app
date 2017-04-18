process.env.NODE_ENV = 'development';

const { resolve } = require('path');
const webpack = require('webpack');
const WriteFilePlugin = require('write-file-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
    path: resolve(__dirname, '..', 'dist/js'),
    publicPath: '/js/',
  },
  devServer: {
    inline: true,
    contentBase: './dist',
    port: 3000,
    historyApiFallback: true,
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      children: true,
      async: true,
    }),
    new WriteFilePlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader',],
        exclude: /node_modules/
      },
      {
        test: /\.(scss|css)$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "sass-loader" // compiles Sass to CSS
        }],
        //exclude: /node_modules/
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg).*$/,
        use: [{
          loader: "url-loader"
        }]
      }
    ],
  }
};