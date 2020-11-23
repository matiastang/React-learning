/*
 * @Author: tangdaoyong
 * @Date: 2020-11-23 22:26:28
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2020-11-23 22:34:21
 * @Description: file content
 */
import _ from 'lodash';

function component() {
    const element = document.createElement('div');
  
    // lodash，现在通过一个 script 引入
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    return element;
}

document.body.appendChild(component());