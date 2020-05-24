console.log('hello webpack')
// import './css/index.css'
// import css from './css/index.less'
import axios from 'axios'

// const _ = require('loadsh')

// let a = _.defaults({ 'a': 1 }, { 'a': 3, 'b': 2 });
// console.log(a,'a')

// axios.get("/api/info").then(res => {
//     console.log(res, "响应体");
// })

// css 热替换 HMR
var btn = document.createElement("button");
btn.innerHTML = "新增";
document.body.appendChild(btn);
btn.onclick = function () {
    var div = document.createElement("div");
    div.innerHTML = "新增条目";
    document.body.appendChild(div);
};

import './assets/logo.png'

// css modules的用法
// let ele = `<div class="${css.test}"></div>`
// document.writeln(ele)


// js热替换 HMR
import counter from "./counter";
import number from "./number";

counter();
number();
if (module.hot) {
    module.hot.accept("./number", function () {
        document.body.removeChild(document.getElementById("number"));
        number();
    });
    module.hot.accept("./counter", function () {
        document.body.removeChild(document.getElementById("counter"));
        counter();
    });
}

import "@babel/polyfill"; // 放在生产依赖 -S  缺点：会影响全局对象 -- 污染
// babel 测试 Promise浏览器不认识怎么办 @babel/polyfill 这个处理
// const arr = [new Promise(() => { }), new Promise(() => { })];
// arr.map(item => {
//     console.log(item);
// });


// react 语法转换  @babel/preset-react  vue自支持开箱即用
// import React, { Component } from "react";
// import ReactDom from "react-dom";
// class App extends Component {
//     render() {
//         return <div>hello react</div>;
//     }
// }
// ReactDom.render(<App />, document.getElementById("app"));


// import $ from 'jquery'
// console.log($,'jq')
