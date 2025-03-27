// ==UserScript==
// @name         东方财富获取登录信息
// @namespace    eastmoney
// @version      1.0
// @description  登陆后在“开通科创版”界面弹窗显示出validatekey和uuid，可用于脚本登录
// @author       Youchen
// @match        https://jywg.18.cn/More/OpenKCB
// ==/UserScript==

(function() {
    'use strict';
    let cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)Uuid\s*\=\s*([^;]*).*$)|^.*$/,"$1",);
    let validkey = document.getElementById("em_validatekey").value;
    var data = JSON.stringify([validkey,cookieValue]);
    alert(data)
})();