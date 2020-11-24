/*
 * @Author: tangdaoyong
 * @Date: 2020-11-23 22:39:32
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2020-11-24 16:19:52
 * @Description: file content
 */
const path = require('path');
// const toml = require('toml');
// const yaml = require('yamljs');
// const json5 = require('json5');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
//   entry: './src/index.js',
  entry: {
    // app: { import: './src/index.js', depandOn: 'shared' },
    // app: './src/index.js',
    app: './src/index.ts',
    // print: './src/js/print.js',
    // another: { import: './src/js/another-module.js', depandOn: 'shared' },
    // another: './src/js/another-module.js',
    // shared: 'lodash'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
//   plugins: [
//     new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),// 增量构建不删除
//     new HtmlWebpackPlugin({
//       title: '开发环境',
//     }),
//   ],
  output: {
    // filename: 'bundle.js',
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
//   optimization: {
//     splitChunks: {
//       chunks: 'all',
//     },
//   },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  module: {
      rules: [
          {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
          },
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
        //   {
        //     test: /\.toml$/i,
        //     type: 'json',
        //     parser: {
        //       parse: toml.parse,
        //     },
        //   },
        //   {
        //     test: /\.yaml$/i,
        //     type: 'json',
        //     parser: {
        //       parse: yaml.parse,
        //     },
        //   },
        //   {
        //     test: /\.json5$/i,
        //     type: 'json',
        //     parser: {
        //       parse: json5.parse,
        //     },
        //   },
      ]
  }
};