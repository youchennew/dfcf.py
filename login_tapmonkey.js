// ==UserScript==
// @name         �����Ƹ���ȡ��¼��Ϣ
// @namespace    eastmoney
// @version      1.0
// @description  ��½���ڡ���ͨ�ƴ��桱���浯����ʾ��validatekey��uuid�������ڽű���¼
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