(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{113:function(e,t,n){"use strict";var r=n(27),s=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.createUrl=x,t.Container=t.default=void 0;var i=s(n(60)),o=s(n(61)),a=s(n(114)),u=s(n(10)),l=s(n(11)),c=s(n(22)),p=s(n(23)),f=s(n(24)),h=s(n(20)),d=r(n(0)),m=s(n(1)),v=n(31),y=n(30),g=function(e){function t(){return(0,u.default)(this,t),(0,c.default)(this,(0,p.default)(t).apply(this,arguments))}var n;return(0,f.default)(t,e),(0,l.default)(t,[{key:"getChildContext",value:function(){return{headManager:this.props.headManager,router:(0,y.makePublicRouterInstance)(this.props.router)}}},{key:"componentDidCatch",value:function(e){throw e}},{key:"render",value:function(){var e=this.props,t=e.router,n=e.Component,r=e.pageProps,s=x(t);return d.default.createElement(b,null,d.default.createElement(n,(0,a.default)({},r,{url:s})))}}],[{key:"getInitialProps",value:(n=(0,o.default)(i.default.mark(function e(t){var n,r,s;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.Component,t.router,r=t.ctx,e.next=3,(0,v.loadGetInitialProps)(n,r);case 3:return s=e.sent,e.abrupt("return",{pageProps:s});case 5:case"end":return e.stop()}},e,this)})),function(e){return n.apply(this,arguments)})}]),t}(d.Component);t.default=g,(0,h.default)(g,"childContextTypes",{headManager:m.default.object,router:m.default.object});var b=function(e){function t(){return(0,u.default)(this,t),(0,c.default)(this,(0,p.default)(t).apply(this,arguments))}return(0,f.default)(t,e),(0,l.default)(t,[{key:"componentDidMount",value:function(){this.scrollToHash()}},{key:"componentDidUpdate",value:function(){this.scrollToHash()}},{key:"scrollToHash",value:function(){var e=window.location.hash;if(e=!!e&&e.substring(1)){var t=document.getElementById(e);t&&setTimeout(function(){return t.scrollIntoView()},0)}}},{key:"render",value:function(){return this.props.children}}]),t}(d.Component);t.Container=b;var _=(0,v.execOnce)(function(){0});function x(e){var t=e.pathname,n=e.asPath,r=e.query;return{get query(){return _(),r},get pathname(){return _(),t},get asPath(){return _(),n},back:function(){_(),e.back()},push:function(t,n){return _(),e.push(t,n)},pushTo:function(t,n){_();var r=n?t:null,s=n||t;return e.push(r,s)},replace:function(t,n){return _(),e.replace(t,n)},replaceTo:function(t,n){_();var r=n?t:null,s=n||t;return e.replace(r,s)}}}},114:function(e,t,n){var r=n(76);function s(){return e.exports=s=r||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}e.exports=s},14:function(e,t,n){e.exports=n(42)},16:function(e,t,n){e.exports=n(30)},26:function(e,t,n){var r,s;
/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */void 0===(s="function"==typeof(r=function(){var e,t,n={version:"0.2.0"},r=n.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};function s(e,t,n){return e<t?t:e>n?n:e}function i(e){return 100*(-1+e)}n.configure=function(e){var t,n;for(t in e)void 0!==(n=e[t])&&e.hasOwnProperty(t)&&(r[t]=n);return this},n.status=null,n.set=function(e){var t=n.isStarted();e=s(e,r.minimum,1),n.status=1===e?null:e;var u=n.render(!t),l=u.querySelector(r.barSelector),c=r.speed,p=r.easing;return u.offsetWidth,o(function(t){""===r.positionUsing&&(r.positionUsing=n.getPositioningCSS()),a(l,function(e,t,n){var s;return(s="translate3d"===r.positionUsing?{transform:"translate3d("+i(e)+"%,0,0)"}:"translate"===r.positionUsing?{transform:"translate("+i(e)+"%,0)"}:{"margin-left":i(e)+"%"}).transition="all "+t+"ms "+n,s}(e,c,p)),1===e?(a(u,{transition:"none",opacity:1}),u.offsetWidth,setTimeout(function(){a(u,{transition:"all "+c+"ms linear",opacity:0}),setTimeout(function(){n.remove(),t()},c)},c)):setTimeout(t,c)}),this},n.isStarted=function(){return"number"==typeof n.status},n.start=function(){n.status||n.set(0);var e=function(){setTimeout(function(){n.status&&(n.trickle(),e())},r.trickleSpeed)};return r.trickle&&e(),this},n.done=function(e){return e||n.status?n.inc(.3+.5*Math.random()).set(1):this},n.inc=function(e){var t=n.status;return t?("number"!=typeof e&&(e=(1-t)*s(Math.random()*t,.1,.95)),t=s(t+e,0,.994),n.set(t)):n.start()},n.trickle=function(){return n.inc(Math.random()*r.trickleRate)},e=0,t=0,n.promise=function(r){return r&&"resolved"!==r.state()?(0===t&&n.start(),e++,t++,r.always(function(){0==--t?(e=0,n.done()):n.set((e-t)/e)}),this):this},n.render=function(e){if(n.isRendered())return document.getElementById("nprogress");l(document.documentElement,"nprogress-busy");var t=document.createElement("div");t.id="nprogress",t.innerHTML=r.template;var s,o=t.querySelector(r.barSelector),u=e?"-100":i(n.status||0),c=document.querySelector(r.parent);return a(o,{transition:"all 0 linear",transform:"translate3d("+u+"%,0,0)"}),r.showSpinner||(s=t.querySelector(r.spinnerSelector))&&f(s),c!=document.body&&l(c,"nprogress-custom-parent"),c.appendChild(t),t},n.remove=function(){c(document.documentElement,"nprogress-busy"),c(document.querySelector(r.parent),"nprogress-custom-parent");var e=document.getElementById("nprogress");e&&f(e)},n.isRendered=function(){return!!document.getElementById("nprogress")},n.getPositioningCSS=function(){var e=document.body.style,t="WebkitTransform"in e?"Webkit":"MozTransform"in e?"Moz":"msTransform"in e?"ms":"OTransform"in e?"O":"";return t+"Perspective"in e?"translate3d":t+"Transform"in e?"translate":"margin"};var o=function(){var e=[];function t(){var n=e.shift();n&&n(t)}return function(n){e.push(n),1==e.length&&t()}}(),a=function(){var e=["Webkit","O","Moz","ms"],t={};function n(n){return n=n.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(e,t){return t.toUpperCase()}),t[n]||(t[n]=function(t){var n=document.body.style;if(t in n)return t;for(var r,s=e.length,i=t.charAt(0).toUpperCase()+t.slice(1);s--;)if((r=e[s]+i)in n)return r;return t}(n))}function r(e,t,r){t=n(t),e.style[t]=r}return function(e,t){var n,s,i=arguments;if(2==i.length)for(n in t)void 0!==(s=t[n])&&t.hasOwnProperty(n)&&r(e,n,s);else r(e,i[1],i[2])}}();function u(e,t){var n="string"==typeof e?e:p(e);return n.indexOf(" "+t+" ")>=0}function l(e,t){var n=p(e),r=n+t;u(n,t)||(e.className=r.substring(1))}function c(e,t){var n,r=p(e);u(e,t)&&(n=r.replace(" "+t+" "," "),e.className=n.substring(1,n.length-1))}function p(e){return(" "+(e.className||"")+" ").replace(/\s+/gi," ")}function f(e){e&&e.parentNode&&e.parentNode.removeChild(e)}return n})?r.call(t,n,t,e):r)||(e.exports=s)},368:function(e,t,n){__NEXT_REGISTER_PAGE("/_app",function(){return e.exports=n(369),{page:e.exports.default}})},369:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return k});var r=n(5),s=n.n(r),i=n(14),o=n.n(i),a=n(0),u=n.n(a),l=n(46),c=n.n(l),p=n(26),f=n.n(p),h=n(16),d=n.n(h),m=n(12),v=n.n(m);function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,t,n,r,s,i,o){try{var a=e[i](o),u=a.value}catch(e){return void n(e)}a.done?t(u):Promise.resolve(u).then(r,s)}function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function x(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}d.a.events.on("routeChangeStart",function(e){console.log("Loading: ".concat(e)),f.a.start()}),d.a.events.on("routeChangeComplete",function(){return f.a.done()}),d.a.events.on("routeChangeError",function(){return f.a.done()});var k=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),x(this,S(t).apply(this,arguments))}var n,r,i,a,p;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(t,c.a),n=t,r=[{key:"componentDidMount",value:function(){"serviceWorker"in navigator&&navigator.serviceWorker.register("/next/service-worker.js").then(function(e){console.log("service worker registration successful")}).catch(function(e){console.warn("service worker registration failed",e.message)}),$("header nav a").hover(function(){$("header navslider").css({left:$(this).position().left+parseInt($(this).css("marginLeft"))+"px",width:$(this).width()+"px",opacity:".999"})},function(){$("header navslider").css("opacity","0")})}},{key:"render",value:function(){var e=this.props,t=e.Component,n=e.pageProps;return u.a.createElement(l.Container,null,u.a.createElement("header",{className:"jsx-2744063744"},u.a.createElement("logo",{className:"jsx-2744063744"},u.a.createElement("text",{className:"jsx-2744063744"},"AVN SYSTEMS")),u.a.createElement("nav",{className:"jsx-2744063744"},u.a.createElement(v.a,{href:"/",as:"/next/"},u.a.createElement("a",{className:"jsx-2744063744"},"Home")),u.a.createElement(v.a,{href:"/about",as:"/next/about"},u.a.createElement("a",{className:"jsx-2744063744"},"About")),u.a.createElement(v.a,{href:"/tvmaze",as:"/next/tvmaze"},u.a.createElement("a",{className:"jsx-2744063744"},"TV Maze")),u.a.createElement(v.a,{href:"/react-md",as:"/next/react-md"},u.a.createElement("a",{className:"jsx-2744063744"},"React MD")),u.a.createElement(v.a,{href:"/404",as:"/next/404"},u.a.createElement("a",{className:"jsx-2744063744"},"404"))),u.a.createElement("navtoggle",{className:"jsx-2744063744"},u.a.createElement("bar",{className:"jsx-2744063744"}),u.a.createElement("bar",{className:"jsx-2744063744"}),u.a.createElement("bar",{className:"jsx-2744063744"})),u.a.createElement("navslider",{className:"jsx-2744063744"})),u.a.createElement(o.a,{styleId:"2821939752",css:["header.jsx-2744063744{overflow:hidden;position:fixed;z-index:10000;height:90px;width:100%;}","header.jsx-2744063744 logo.jsx-2744063744{position:absolute;padding:16px 0px;width:170px;left:90px;top:10px;background-image:url(./static/images/icon.png);background-repeat:no-repeat;background-size:contain;-webkit-filter:grayscale(100%) brightness(2);-webkit-filter:grayscale(100%) brightness(2);filter:grayscale(100%) brightness(2);-webkit-filter:url(./static/images/filters.svg#grayscale);-webkit-filter:url(./static/images/filters.svg#grayscale);filter:url(./static/images/filters.svg#grayscale);-webkit-filter:gray;-webkit-filter:gray;filter:gray;-webkit-filter:grayscale(100%) brightness(2);-moz-filter:grayscale(100%) brightness(2);-ms-filter:grayscale(100%) brightness(2);-o-filter:grayscale(100%) brightness(2);-webkit-transition:all 150ms ease-in-out;-moz-transition:all 150ms ease-in-out;-ms-transition:all 150ms ease-in-out;-o-transition:all 150ms ease-in-out;-webkit-transition:all 150ms ease-in-out;transition:all 150ms ease-in-out;}","header.jsx-2744063744 logo.jsx-2744063744:hover{-webkit-filter:none;-moz-filter:none;-o-filter:none;-webkit-filter:none;filter:none;}","header.jsx-2744063744 logo.jsx-2744063744 text.jsx-2744063744{display:-webkit-inline-box;text-transform:uppercase;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;position:relative;font-weight:bold;min-width:110px;font-size:14px;color:#5f5f5f;left:60px;}","header.jsx-2744063744 nav.jsx-2744063744{margin:0 20px;float:right;}","header.jsx-2744063744 nav.jsx-2744063744 a.jsx-2744063744{-webkit-text-decoration:none;text-decoration:none;display:inline-block;text-transform:uppercase;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;font-weight:bold;margin:25px 10px;font-size:14px;color:#d9d9d9;}","header.jsx-2744063744 nav.jsx-2744063744 a.jsx-2744063744:hover{color:#8500FF;}","header.jsx-2744063744 navtoggle.jsx-2744063744{cursor:pointer;display:inline-block;position:absolute;width:45px;left:20px;top:15px;}","header.jsx-2744063744 navtoggle.jsx-2744063744 bar.jsx-2744063744{border-bottom:2px solid #aaa;margin:7px 0;width:100%;height:5px;display:block;}","header.jsx-2744063744 navtoggle.jsx-2744063744:hover bar.jsx-2744063744{border-bottom:2px solid #bc73ff;}","header.jsx-2744063744 navslider.jsx-2744063744{border-bottom:4px solid #8500FF;position:absolute;height:0;top:50px;-webkit-transition:all 250ms ease-in-out;-moz-transition:all 250ms ease-in-out;-ms-transition:all 250ms ease-in-out;-o-transition:all 250ms ease-in-out;-webkit-transition:all 250ms ease-in-out;transition:all 250ms ease-in-out;}"]}),u.a.createElement(o.a,{styleId:"2180587809",css:["page{padding:185px 20px;display:block;}"]}),u.a.createElement(t,b({},n,{className:"jsx-2744063744 "+(null!=n.className&&n.className||"")})))}}],i=[{key:"getInitialProps",value:(a=s.a.mark(function e(t){var n,r,i;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.Component,t.router,r=t.ctx,i={},!n.getInitialProps){e.next=6;break}return e.next=5,n.getInitialProps(r);case 5:i=e.sent;case 6:return e.abrupt("return",{pageProps:i});case 7:case"end":return e.stop()}},e,this)}),p=function(){var e=this,t=arguments;return new Promise(function(n,r){var s=a.apply(e,t);function i(e){g(s,n,r,i,o,"next",e)}function o(e){g(s,n,r,i,o,"throw",e)}i(void 0)})},function(e){return p.apply(this,arguments)})}],r&&_(n.prototype,r),i&&_(n,i),t}()},42:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.flush=function(){var e=a.cssRules();return a.flush(),e};var s,i=n(0),o=n(43);var a=new((s=o)&&s.__esModule?s:{default:s}).default,u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.prevProps={},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.Component),r(t,[{key:"shouldComponentUpdate",value:function(e){return this.props.styleId!==e.styleId||String(this.props.dynamic)!==String(e.dynamic)}},{key:"componentWillUnmount",value:function(){a.remove(this.props)}},{key:"render",value:function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.styleId&&a.remove(this.prevProps),a.add(this.props),this.prevProps=this.props),null}}],[{key:"dynamic",value:function(e){return e.map(function(e){var t=e[0],n=e[1];return a.computeId(t,n)}).join(" ")}}]),t}();t.default=u},43:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=o(n(44)),i=o(n(45));function o(e){return e&&e.__esModule?e:{default:e}}var a=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.styleSheet,r=void 0===n?null:n,s=t.optimizeForSpeed,o=void 0!==s&&s,a=t.isBrowser,u=void 0===a?"undefined"!=typeof window:a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._sheet=r||new i.default({name:"styled-jsx",optimizeForSpeed:o}),this._sheet.inject(),r&&"boolean"==typeof o&&(this._sheet.setOptimizeForSpeed(o),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=u,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}return r(e,[{key:"add",value:function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.css),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce(function(e,t){return e[t]=0,e},{}));var n=this.getIdAndRules(e),r=n.styleId,s=n.rules;if(r in this._instancesCounts)this._instancesCounts[r]+=1;else{var i=s.map(function(e){return t._sheet.insertRule(e)}).filter(function(e){return-1!==e});this._indices[r]=i,this._instancesCounts[r]=1}}},{key:"remove",value:function(e){var t=this,n=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}(n in this._instancesCounts,"styleId: `"+n+"` not found"),this._instancesCounts[n]-=1,this._instancesCounts[n]<1){var r=this._fromServer&&this._fromServer[n];r?(r.parentNode.removeChild(r),delete this._fromServer[n]):(this._indices[n].forEach(function(e){return t._sheet.deleteRule(e)}),delete this._indices[n]),delete this._instancesCounts[n]}}},{key:"update",value:function(e,t){this.add(t),this.remove(e)}},{key:"flush",value:function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}},{key:"cssRules",value:function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map(function(t){return[t,e._fromServer[t]]}):[],n=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map(function(t){return[t,e._indices[t].map(function(e){return n[e].cssText}).join("\n")]}).filter(function(e){return Boolean(e[1])}))}},{key:"createComputeId",value:function(){var e={};return function(t,n){if(!n)return"jsx-"+t;var r=String(n),i=t+r;return e[i]||(e[i]="jsx-"+(0,s.default)(t+"-"+r)),e[i]}}},{key:"createComputeSelector",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:/__jsx-style-dynamic-selector/g,t={};return function(n,r){this._isBrowser||(r=r.replace(/\/style/gi,"\\/style"));var s=n+r;return t[s]||(t[s]=r.replace(e,n)),t[s]}}},{key:"getIdAndRules",value:function(e){var t=this;if(e.dynamic){var n=this.computeId(e.styleId,e.dynamic);return{styleId:n,rules:Array.isArray(e.css)?e.css.map(function(e){return t.computeSelector(n,e)}):[this.computeSelector(n,e.css)]}}return{styleId:this.computeId(e.styleId),rules:Array.isArray(e.css)?e.css:[e.css]}}},{key:"selectFromServer",value:function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e,t){return e[t.id.slice(2)]=t,e},{})}}]),e}();t.default=a},44:function(e,t,n){"use strict";e.exports=function(e){for(var t=5381,n=e.length;n;)t=33*t^e.charCodeAt(--n);return t>>>0}},45:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var r=e.env&&!0,s=function(e){return"[object String]"===Object.prototype.toString.call(e)},i=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.name,i=void 0===n?"stylesheet":n,a=t.optimizeForSpeed,u=void 0===a?r:a,l=t.isBrowser,c=void 0===l?"undefined"!=typeof window:l;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),o(s(i),"`name` must be a string"),this._name=i,this._deletedRulePlaceholder="#"+i+"-deleted-rule____{}",o("boolean"==typeof u,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=u,this._isBrowser=c,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var p=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=p?p.getAttribute("content"):null}return n(e,[{key:"setOptimizeForSpeed",value:function(e){o("boolean"==typeof e,"`setOptimizeForSpeed` accepts a boolean"),o(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()}},{key:"isOptimizeForSpeed",value:function(){return this._optimizeForSpeed}},{key:"inject",value:function(){var e=this;if(o(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(r||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,n){return"number"==typeof n?e._serverSheet.cssRules[n]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),n},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}}},{key:"getSheetForTag",value:function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}},{key:"getSheet",value:function(){return this.getSheetForTag(this._tags[this._tags.length-1])}},{key:"insertRule",value:function(e,t){if(o(s(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!=typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var n=this.getSheet();"number"!=typeof t&&(t=n.cssRules.length);try{n.insertRule(e,t)}catch(t){return r||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var i=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,i))}return this._rulesCount++}},{key:"replaceRule",value:function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var n=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!n.cssRules[e])return e;n.deleteRule(e);try{n.insertRule(t,e)}catch(s){r||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),n.insertRule(this._deletedRulePlaceholder,e)}}else{var s=this._tags[e];o(s,"old rule at index `"+e+"` not found"),s.textContent=t}return e}},{key:"deleteRule",value:function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];o(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)}},{key:"flush",value:function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach(function(e){return e&&e.parentNode.removeChild(e)}),this._tags=[]):this._serverSheet.cssRules=[]}},{key:"cssRules",value:function(){var e=this;return this._isBrowser?this._tags.reduce(function(t,n){return n?t=t.concat(e.getSheetForTag(n).cssRules.map(function(t){return t.cssText===e._deletedRulePlaceholder?null:t})):t.push(null),t},[]):this._serverSheet.cssRules}},{key:"makeStyleTag",value:function(e,t,n){t&&o(s(t),"makeStyleTag acceps only strings as second parameter");var r=document.createElement("style");this._nonce&&r.setAttribute("nonce",this._nonce),r.type="text/css",r.setAttribute("data-"+e,""),t&&r.appendChild(document.createTextNode(t));var i=document.head||document.getElementsByTagName("head")[0];return n?i.insertBefore(r,n):i.appendChild(r),r}},{key:"length",get:function(){return this._rulesCount}}]),e}();function o(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}t.default=i}).call(this,n(35))},46:function(e,t,n){e.exports=n(113)}},[[368,1,0]]]);