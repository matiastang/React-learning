/*
 * @Author: tangdaoyong
 * @Date: 2020-11-23 22:39:32
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2020-11-23 23:42:05
 * @Description: file content
 */
const path = require('path');
const toml = require('toml');
const yaml = require('yamljs');
const json5 = require('json5');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
//   entry: './src/index.js',
  entry: {
    app: './src/index.js',
    print: './src/js/print.js',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: '管理输出',
    }),
  ],
  output: {
    // filename: 'bundle.js',
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
      rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
          },
          {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
          },
          {
            test: /\.(csv|tsv)$/i,
            use: ['csv-loader'],
          },
          {
            test: /\.xml$/i,
            use: ['xml-loader'],
          },
          {
            test: /\.toml$/i,
            type: 'json',
            parser: {
              parse: toml.parse,
            },
          },
          {
            test: /\.yaml$/i,
            type: 'json',
            parser: {
              parse: yaml.parse,
            },
          },
          {
            test: /\.json5$/i,
            type: 'json',
            parser: {
              parse: json5.parse,
            },
          },
      ]
  }
};