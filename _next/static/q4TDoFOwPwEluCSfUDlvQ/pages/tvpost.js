(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{459:function(e,n,t){__NEXT_REGISTER_PAGE("/tvpost",function(){return e.exports=t(460),{page:e.exports.default}})},460:function(e,n,t){"use strict";t.r(n);var r=t(10),o=t.n(r),s=t(0),a=t.n(s),u=t(67),i=t.n(u);function c(e,n,t,r,o,s,a){try{var u=e[s](a),i=u.value}catch(e){return void t(e)}u.done?n(i):Promise.resolve(i).then(r,o)}var l=function(e){return a.a.createElement("div",{className:"container page"},a.a.createElement("div",null,a.a.createElement("h1",null,e.show.name),a.a.createElement("p",null,e.show.summary.replace(/<[\/]?p>/g,"")),a.a.createElement("img",{src:e.show.image.medium})),a.a.createElement("a",{href:"javascript:history.back()",className:"btn btn-light"},"Go back"))};l.getInitialProps=function(){var e,n=(e=o.a.mark(function e(n){var t,r,s;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.query.id,e.next=3,i()("https://api.tvmaze.com/shows/".concat(t));case 3:return r=e.sent,e.next=6,r.json();case 6:return"Not Found"===(s=e.sent).name&&(s={name:"Not Found",summary:"Not Found",image:{medium:""}}),console.log("Fetched show: ".concat(s.name)),e.abrupt("return",{show:s});case 10:case"end":return e.stop()}},e,this)}),function(){var n=this,t=arguments;return new Promise(function(r,o){var s=e.apply(n,t);function a(e){c(s,r,o,a,u,"next",e)}function u(e){c(s,r,o,a,u,"throw",e)}a(void 0)})});return function(e){return n.apply(this,arguments)}}(),n.default=l},66:function(e,n,t){"use strict";t.r(n),n.default=function(e,n){return n=n||{},new Promise(function(t,r){var o=new XMLHttpRequest;for(var s in o.open(n.method||"get",e,!0),n.headers)o.setRequestHeader(s,n.headers[s]);function a(){var e,n=[],t=[],r={};return o.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(o,s,a){n.push(s=s.toLowerCase()),t.push([s,a]),r[s]=(e=r[s])?e+","+a:a}),{ok:2==(o.status/100|0),status:o.status,statusText:o.statusText,url:o.responseURL,clone:a,text:function(){return Promise.resolve(o.responseText)},json:function(){return Promise.resolve(o.responseText).then(JSON.parse)},blob:function(){return Promise.resolve(new Blob([o.response]))},headers:{keys:function(){return n},entries:function(){return t},get:function(e){return r[e.toLowerCase()]},has:function(e){return e.toLowerCase()in r}}}}o.withCredentials="include"==n.credentials,o.onload=function(){t(a())},o.onerror=r,o.send(n.body||null)})}},67:function(e,n,t){e.exports=window.fetch||(window.fetch=t(66).default||t(66))}},[[459,1,0]]]);