/*
 * @Author: tangdaoyong
 * @Date: 2020-11-23 22:26:28
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2020-11-23 23:32:06
 * @Description: file content
 */
import _ from 'lodash';
import './css/index.css';
import Icon from './images/icon.png';
import Data from './resources/data.xml';
import Notes from './resources/data.csv';
import toml from './resources/data.toml';
import yaml from './resources/data.yaml';
import json from './resources/data.json5';
import printMe from './js/print.js';

console.log(toml.title); // output `TOML Example`
console.log(toml.owner.name); // output `Tom Preston-Werner`

console.log(yaml.title); // output `YAML Example`
console.log(yaml.owner.name); // output `Tom Preston-Werner`

console.log(json.title); // output `JSON5 Example`
console.log(json.owner.name); // output `Tom Preston-Werner`

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');
  
    // lodash，现在通过一个 script 引入
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
    // 将图像添加到我们已经存在的 div 中。
    const myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);

    console.log(Data);
    console.log(Notes);

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    element.appendChild(btn);
    
    return element;
}

document.body.appendChild(component());