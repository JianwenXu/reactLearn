// React 负责逻辑控制： 数据 -> VDOM
import React from 'react';
// ReactDOM 负责渲染真实的 DOM: vdom -> dom
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// React 17 以前的版本使用 JSX 的时候必须引入 React ,否则会报错
// 因为 JSX 是 React.createElement(component, props, ...children) 的语法糖
// JSX 会编译为 React.createElement 调用形式，所以 React 库也必须包含在 JSX 代码作用域内。
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
