/*
 * @Author: tangdaoyong
 * @Date: 2020-11-24 15:46:26
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2020-11-24 15:59:46
 * @Description: file content
 */
// 需要引入此 library 的类型声明文件(typing definition)。你可以从 [TypeSearch](https://www.typescriptlang.org/dt/search?search=) 中找到并安装这些第三方库的类型声明文件。
import * as _ from 'lodash';

function component() {
    const element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}

document.body.appendChild(component());