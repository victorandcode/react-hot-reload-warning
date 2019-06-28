/* eslint-disable */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ['react-hot-loader/patch', './src/index'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
    externals: {
        react: 'React',
        'react-dom': 'ReactDOM',
    },
  module: {
    rules: [
      {
        exclude: /node_modules|packages/,
        test: /\.js$/,
        use: 'babel-loader',
      },
    ],
  },
    plugins: [new HtmlWebpackPlugin({
        template: 'public/index.html',
    }), new webpack.NamedModulesPlugin()],
};
