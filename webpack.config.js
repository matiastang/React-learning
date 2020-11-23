/*
 * @Author: tangdaoyong
 * @Date: 2020-11-23 22:39:32
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2020-11-23 22:40:19
 * @Description: file content
 */
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};