webpackHotUpdate("static/development/pages/_error.js",{

/***/ "./components/interface.js":
/*!*********************************!*\
  !*** ./components/interface.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _interface_leftmenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interface/leftmenu */ "./components/interface/leftmenu.js");
/* harmony import */ var _interface_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interface/header */ "./components/interface/header.js");
/* harmony import */ var _interface_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./interface/footer */ "./components/interface/footer.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "/home/ubuntu/workspace/estudo/next/components/interface.js";



/*global $ navigator*/








next_router__WEBPACK_IMPORTED_MODULE_8___default.a.events.on('routeChangeStart', function (url) {
  console.log("Loading: ".concat(url));
  nprogress__WEBPACK_IMPORTED_MODULE_7___default.a.start();
});
next_router__WEBPACK_IMPORTED_MODULE_8___default.a.events.on('routeChangeComplete', function () {
  return nprogress__WEBPACK_IMPORTED_MODULE_7___default.a.done();
});
next_router__WEBPACK_IMPORTED_MODULE_8___default.a.events.on('routeChangeError', function () {
  return nprogress__WEBPACK_IMPORTED_MODULE_7___default.a.done();
});
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var children = _ref.children,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? 'This is the default title' : _ref$title,
      _ref$ogDescription = _ref.ogDescription,
      ogDescription = _ref$ogDescription === void 0 ? "Website created with next.js optmized as a PWA" : _ref$ogDescription,
      _ref$ogSiteName = _ref.ogSiteName,
      ogSiteName = _ref$ogSiteName === void 0 ? "avn.systems" : _ref$ogSiteName,
      _ref$ogTitle = _ref.ogTitle,
      ogTitle = _ref$ogTitle === void 0 ? "Website | avn.systems" : _ref$ogTitle,
      _ref$ogImage = _ref.ogImage,
      ogImage = _ref$ogImage === void 0 ? '/static/images/avn.systems.og-image.jpg' : _ref$ogImage,
      _ref$ogUrl = _ref.ogUrl,
      ogUrl = _ref$ogUrl === void 0 ? "https://avn.systems" : _ref$ogUrl,
      _ref$ogType = _ref.ogType,
      ogType = _ref$ogType === void 0 ? "article" : _ref$ogType,
      _ref$feedJson = _ref.feedJson,
      feedJson = _ref$feedJson === void 0 ? "https://avn.systemsm/feed.json" : _ref$feedJson,
      _ref$feedXml = _ref.feedXml,
      feedXml = _ref$feedXml === void 0 ? "https://avn.systems/feed.xml" : _ref$feedXml,
      _ref$canonical = _ref.canonical,
      canonical = _ref$canonical === void 0 ? "https://avn.systems" : _ref$canonical,
      _ref$twitterCreator = _ref.twitterCreator,
      twitterCreator = _ref$twitterCreator === void 0 ? "@avn.systems" : _ref$twitterCreator,
      _ref$twitterSite = _ref.twitterSite,
      twitterSite = _ref$twitterSite === void 0 ? "@avn.systems" : _ref$twitterSite;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("interface", {
    className: "jsx-2699590699",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
    className: "jsx-2699590699",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    charSet: "utf-8",
    className: "jsx-2699590699",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    className: "jsx-2699590699",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "author",
    content: "Allan Avelar - https://allanavelar.com/",
    className: "jsx-2699590699",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    property: "og:site_name",
    content: ogSiteName,
    className: "jsx-2699590699",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    property: "og:title",
    content: ogTitle,
    className: "jsx-2699590699",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    property: "og:url",
    content: ogUrl,
    className: "jsx-2699590699",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    property: "og:type",
    content: ogType,
    className: "jsx-2699590699",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    property: "og:description",
    content: ogDescription,
    className: "jsx-2699590699",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    property: "og:image",
    content: "" + ogImage,
    className: "jsx-2699590699",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "twitter:card",
    content: "summary_large_image",
    className: "jsx-2699590699",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "twitter:site",
    content: twitterSite,
    className: "jsx-2699590699",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "twitter:creator",
    content: twitterCreator,
    className: "jsx-2699590699",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "canonical",
    href: canonical,
    className: "jsx-2699590699",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "alternate",
    type: "application/rss+xml",
    title: ogTitle,
    href: feedXml,
    className: "jsx-2699590699",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "alternate",
    type: "application/json",
    title: ogTitle,
    href: feedJson,
    className: "jsx-2699590699",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "apple-touch-icon",
    sizes: "114x114",
    href: "/static/images/icon.png",
    className: "jsx-2699590699",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "apple-touch-icon",
    sizes: "120x120",
    href: "/static/images/icon.png",
    className: "jsx-2699590699",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "apple-touch-icon",
    sizes: "144x144",
    href: "/static/images/icon.png",
    className: "jsx-2699590699",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "apple-touch-icon",
    sizes: "152x152",
    href: "/static/images/icon.png",
    className: "jsx-2699590699",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/static/images/icon.png",
    className: "jsx-2699590699",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "icon",
    type: "image/png",
    href: "/static/images/icon.png",
    className: "jsx-2699590699",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "shortcut icon",
    href: "/static/images/favicon.ico",
    className: "jsx-2699590699",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "mask-icon",
    href: "/assets/safari-pinned-tab.svg",
    color: "#5bbad5",
    className: "jsx-2699590699",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "manifest",
    href: "/static/manifest.json",
    className: "jsx-2699590699",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "msapplication-TileColor",
    content: "#5700AE",
    className: "jsx-2699590699",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "msapplication-TileImage",
    content: "/static/images/avn.systems.og-image.jpg",
    className: "jsx-2699590699",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "msapplication-config",
    content: "/static/browserconfig.xml",
    className: "jsx-2699590699",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "theme-color",
    content: "#5700AE",
    className: "jsx-2699590699",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    defer: true,
    rel: "stylesheet",
    href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/css/bootstrap.min.css",
    integrity: "sha384-Zug+QiDoJOrZ5t4lssLdxGhVrurbmBWopoEl+M6BdEfwnCJZtKxi1KgxUyJq13dy",
    crossOrigin: "anonymous",
    className: "jsx-2699590699",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "/static/css/nprogress.css",
    className: "jsx-2699590699",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("script", {
    defer: true,
    src: "https://code.jquery.com/jquery-3.3.1.min.js",
    className: "jsx-2699590699",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_interface_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_interface_leftmenu__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("page", {
    className: "jsx-2699590699",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, children), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("menuhider", {
    className: "jsx-2699590699",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_interface_footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("pageloader", {
    className: "jsx-2699590699",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("bar", {
    className: "jsx-2699590699",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2699590699",
    css: "body{min-width:320px;background:url(".concat("", "/static/images/body-bg.jpg) #F5F7F6;}page{display:none;-webkit-transition:margin-left 350ms ease 0s;transition:margin-left 350ms ease 0s;}.ftl{float:left;}.ftr{float:right;}::-webkit-scrollbar{display:none;}body.loaded menuhider{-webkit-transition:display 1s ease 1s;transition:display 1s ease 1s;display:none;opacity:0;}body.loaded pageloader{display:none;}menuhider{background-color:rgba(0,0,0,.5);pointer-events:all;position:fixed;display:block;z-index:1030;opacity:1;bottom:0;right:0;left:0;top:0;-webkit-transition:opacity 1s ease 0s;-moz-transition:opacity 1s ease 0s;-ms-transition:opacity 1s ease 0s;-o-transition:opacity 1s ease 0s;-webkit-transition:opacity 1s ease 0s;transition:opacity 1s ease 0s;}.nprogress-busy body.loaded pageloader{display:block;}pageloader{margin:-15px 0 0 -100px;border-radius:8px;background:#000;z-index:9999999;position:fixed;width:200px;height:30px;left:50%;top:50%;}pageloader bar{margin:-2px 0 0 -87px;-webkit-animation:gradtranslate 2s infinite linear;animation:gradtranslate 2s infinite linear;background-image:-webkit-gradient(linear,left top,right top,color-stop(0%,white),color-stop(50%,#8500FF),color-stop(100%,white));background-size:400px 1px;background-color:#8500FF;border-radius:5px;position:absolute;width:174px;opacity:.8;height:4px;left:50%;top:50%;}body.loaded leftmenu,body.loaded header,body.loaded footer,body.loaded page{display:block;}@media (min-width:1250px){body.left-menu page{margin-left:330px;}}@media (min-width:1250px) and (max-width:1590px){body.left-menu topimage h1{max-width:calc(100% - 100px)!important;}body.left-menu content{max-width:calc(100% - 60px)!important;}}@media (max-width:1250px){body.left-menu header logo{left:400px!important;}body.left-menu header navtoggle{left:345px!important;}.nprogress-busy body.loaded menuhider,body.loaded.left-menu menuhider{display:block;opacity:1;}}@media screen and (max-width:625px){body.left-menu header navtoggle bar:nth-child(2){background:#f4f4f4;}}@media screen and (max-width:399px){body.left-menu leftmenu,leftmenu menuscroll{width:calc(100% - 69px)!important;max-width:330px;min-width:260px;}body.left-menu header navtoggle{left:calc(100% - 55px)!important;}}@media screen and (max-width:329px){body.left-menu header navtoggle{left:271px !important;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VidW50dS93b3Jrc3BhY2UvZXN0dWRvL25leHQvY29tcG9uZW50cy9pbnRlcmZhY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUZ1QixBQUc2QixBQUlILEFBSUYsQUFHQyxBQUdDLEFBS2lCLEFBS2pCLEFBR21CLEFBa0JsQixBQUdVLEFBV0YsQUFrQlIsQUFLUSxBQU1xQixBQUdELEFBS2pCLEFBR0EsQUFJUCxBQU1LLEFBS2UsQUFLRCxBQUtYLFdBbkg5QixDQUdBLENBUHlDLEFBVXpDLEFBVUEsQ0FxQkEsQUFnQ0EsQUEwQmtCLEVBdkdpRSxFQWtGL0UsQ0EyQkEsRUFiQSxBQUdBLENBeEMyQyxBQWlFM0MsRUE1RWtCLEFBd0RsQixRQTdFbUIsQ0E0Rm5CLENBTG9CLElBdkJwQixDQUhBLEdBdkNnQixRQWtFSSxDQXZGTCxPQXNCQyxRQXJCRixBQXVGZCxFQWpHYSxNQWdDRSxNQXJCRixDQVZILFFBZ0NFLEVBL0JoQixFQVVjLEVBOUJkLEFBSUEsTUFnRGdCLEVBckJILFNBQ0QsQ0FxQkMsR0FNd0gsSUExQjFILEVBcUJDLEtBcEJGLEdBcUJWLEdBcEIwQyxzQ0FDSCxtQ0FDRCxrQ0FDRCxLQXNCUCwwQkFDRCxFQXRCSyx1QkF1Qlosa0JBQ0Esa0JBQ04sU0F4QmhCLEdBeUJlLFdBQ0EsV0FDRixTQUNELFFBQ1oiLCJmaWxlIjoiL2hvbWUvdWJ1bnR1L3dvcmtzcGFjZS9lc3R1ZG8vbmV4dC9jb21wb25lbnRzL2ludGVyZmFjZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qZ2xvYmFsICQgbmF2aWdhdG9yKi9cbmltcG9ydCBMZWZ0TWVudSBmcm9tICcuL2ludGVyZmFjZS9sZWZ0bWVudSdcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9pbnRlcmZhY2UvaGVhZGVyJ1xuaW1wb3J0IEZvb3RlciBmcm9tICcuL2ludGVyZmFjZS9mb290ZXInXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcblxuaW1wb3J0IE5Qcm9ncmVzcyBmcm9tICducHJvZ3Jlc3MnXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuXG5Sb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZVN0YXJ0JywgKHVybCkgPT4ge1xuICBjb25zb2xlLmxvZyhgTG9hZGluZzogJHt1cmx9YClcbiAgTlByb2dyZXNzLnN0YXJ0KClcbn0pXG5Sb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgKCkgPT4gTlByb2dyZXNzLmRvbmUoKSlcblJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlRXJyb3InLCAoKSA9PiBOUHJvZ3Jlc3MuZG9uZSgpKVxuXG5leHBvcnQgZGVmYXVsdCAoeyBjaGlsZHJlbixcbiAgICB0aXRsZSA9ICdUaGlzIGlzIHRoZSBkZWZhdWx0IHRpdGxlJyxcbiAgICBcbiAgICBvZ0Rlc2NyaXB0aW9uID0gXCJXZWJzaXRlIGNyZWF0ZWQgd2l0aCBuZXh0LmpzIG9wdG1pemVkIGFzIGEgUFdBXCIsXG4gICAgb2dTaXRlTmFtZSA9IFwiYXZuLnN5c3RlbXNcIiwgb2dUaXRsZSA9IFwiV2Vic2l0ZSB8IGF2bi5zeXN0ZW1zXCIsXG4gICAgb2dJbWFnZSA9ICcvc3RhdGljL2ltYWdlcy9hdm4uc3lzdGVtcy5vZy1pbWFnZS5qcGcnLFxuICAgIG9nVXJsID0gXCJodHRwczovL2F2bi5zeXN0ZW1zXCIsIG9nVHlwZSA9IFwiYXJ0aWNsZVwiLFxuICAgIFxuICAgIGZlZWRKc29uID0gXCJodHRwczovL2F2bi5zeXN0ZW1zbS9mZWVkLmpzb25cIixcbiAgICBmZWVkWG1sID0gXCJodHRwczovL2F2bi5zeXN0ZW1zL2ZlZWQueG1sXCIsXG4gICAgXG4gICAgY2Fub25pY2FsID0gXCJodHRwczovL2F2bi5zeXN0ZW1zXCIsXG4gICAgXG4gICAgdHdpdHRlckNyZWF0b3IgPSBcIkBhdm4uc3lzdGVtc1wiLFxuICAgIHR3aXR0ZXJTaXRlID0gXCJAYXZuLnN5c3RlbXNcIixcbiAgfSkgPT4gKFxuICA8aW50ZXJmYWNlPlxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPnsgdGl0bGUgfTwvdGl0bGU+XG4gICAgICA8bWV0YSBjaGFyU2V0PSd1dGYtOCcgLz5cbiAgICAgIDxtZXRhIG5hbWU9J3ZpZXdwb3J0JyBjb250ZW50PSdpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoJyAvPlxuICAgICAgPG1ldGEgbmFtZT1cImF1dGhvclwiIGNvbnRlbnQ9XCJBbGxhbiBBdmVsYXIgLSBodHRwczovL2FsbGFuYXZlbGFyLmNvbS9cIiAvPlxuICAgICAgXG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnNpdGVfbmFtZVwiIGNvbnRlbnQ9eyBvZ1NpdGVOYW1lIH0gLz5cbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PXsgb2dUaXRsZSB9IC8+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnVybFwiIGNvbnRlbnQ9eyBvZ1VybCB9IC8+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnR5cGVcIiBjb250ZW50PXsgb2dUeXBlIH0gLz5cbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PXsgb2dEZXNjcmlwdGlvbiB9IC8+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD17IHByb2Nlc3MuZW52LkJBQ0tFTkRfVVJMICsgb2dJbWFnZSB9IC8+XG4gICAgXG4gICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpjYXJkXCIgY29udGVudD1cInN1bW1hcnlfbGFyZ2VfaW1hZ2VcIiAvPlxuICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6c2l0ZVwiIGNvbnRlbnQ9eyB0d2l0dGVyU2l0ZSB9IC8+XG4gICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpjcmVhdG9yXCIgY29udGVudD17IHR3aXR0ZXJDcmVhdG9yIH0gLz5cbiAgICBcbiAgICAgIDxsaW5rIHJlbD1cImNhbm9uaWNhbFwiIGhyZWY9eyBjYW5vbmljYWwgfSAvPlxuICAgICAgPGxpbmsgcmVsPVwiYWx0ZXJuYXRlXCIgdHlwZT1cImFwcGxpY2F0aW9uL3Jzcyt4bWxcIiB0aXRsZT17IG9nVGl0bGUgfSBocmVmPXsgZmVlZFhtbCB9IC8+XG4gICAgICA8bGluayByZWw9XCJhbHRlcm5hdGVcIiB0eXBlPVwiYXBwbGljYXRpb24vanNvblwiIHRpdGxlPXsgb2dUaXRsZSB9IGhyZWY9eyBmZWVkSnNvbiB9IC8+XG5cbiAgICAgIDxsaW5rIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBzaXplcz1cIjExNHgxMTRcIiBocmVmPXsgcHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyAnL3N0YXRpYy9pbWFnZXMvaWNvbi5wbmcnfSAvPlxuICAgICAgPGxpbmsgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIHNpemVzPVwiMTIweDEyMFwiIGhyZWY9eyBwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArICcvc3RhdGljL2ltYWdlcy9pY29uLnBuZyd9IC8+XG4gICAgICA8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCIxNDR4MTQ0XCIgaHJlZj17IHByb2Nlc3MuZW52LkJBQ0tFTkRfVVJMICsgJy9zdGF0aWMvaW1hZ2VzL2ljb24ucG5nJ30gLz5cbiAgICAgIDxsaW5rIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBzaXplcz1cIjE1MngxNTJcIiBocmVmPXsgcHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyAnL3N0YXRpYy9pbWFnZXMvaWNvbi5wbmcnfSAvPlxuICAgICAgPGxpbmsgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIHNpemVzPVwiMTgweDE4MFwiIGhyZWY9eyBwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArICcvc3RhdGljL2ltYWdlcy9pY29uLnBuZyd9IC8+XG4gICAgICA8bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3BuZ1wiIGhyZWY9eyBwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArICcvc3RhdGljL2ltYWdlcy9pY29uLnBuZyd9IC8+XG4gICAgICA8bGluayByZWw9XCJzaG9ydGN1dCBpY29uXCIgaHJlZj17IHByb2Nlc3MuZW52LkJBQ0tFTkRfVVJMICsgJy9zdGF0aWMvaW1hZ2VzL2Zhdmljb24uaWNvJ30gLz5cbiAgICAgIFxuICAgICAgPGxpbmsgcmVsPVwibWFzay1pY29uXCIgaHJlZj1cIi9hc3NldHMvc2FmYXJpLXBpbm5lZC10YWIuc3ZnXCIgY29sb3I9XCIjNWJiYWQ1XCIgLz5cbiAgICAgIDxsaW5rIHJlbD1cIm1hbmlmZXN0XCIgaHJlZj17IHByb2Nlc3MuZW52LkJBQ0tFTkRfVVJMICsgJy9zdGF0aWMvbWFuaWZlc3QuanNvbid9IC8+XG4gICAgICBcbiAgICAgIDxtZXRhIG5hbWU9XCJtc2FwcGxpY2F0aW9uLVRpbGVDb2xvclwiIGNvbnRlbnQ9XCIjNTcwMEFFXCIgLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJtc2FwcGxpY2F0aW9uLVRpbGVJbWFnZVwiIGNvbnRlbnQ9eyBwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArICcvc3RhdGljL2ltYWdlcy9hdm4uc3lzdGVtcy5vZy1pbWFnZS5qcGcnfSAvPlxuICAgICAgPG1ldGEgbmFtZT1cIm1zYXBwbGljYXRpb24tY29uZmlnXCIgY29udGVudD17IHByb2Nlc3MuZW52LkJBQ0tFTkRfVVJMICsgJy9zdGF0aWMvYnJvd3NlcmNvbmZpZy54bWwnfSAvPlxuICAgICAgPG1ldGEgbmFtZT1cInRoZW1lLWNvbG9yXCIgY29udGVudD1cIiM1NzAwQUVcIiAvPlxuICAgICAgXG4gICAgICA8bGluayBkZWZlciByZWw9J3N0eWxlc2hlZXQnIGhyZWY9J2h0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuMC4wLWJldGEuMy9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnIGludGVncml0eT0nc2hhMzg0LVp1ZytRaURvSk9yWjV0NGxzc0xkeEdoVnJ1cmJtQldvcG9FbCtNNkJkRWZ3bkNKWnRLeGkxS2d4VXlKcTEzZHknIGNyb3NzT3JpZ2luPSdhbm9ueW1vdXMnIC8+XG4gICAgICA8bGluayByZWw9J3N0eWxlc2hlZXQnIHR5cGU9J3RleHQvY3NzJyBocmVmPXsgcHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyAnL3N0YXRpYy9jc3MvbnByb2dyZXNzLmNzcyd9IC8+XG4gICAgICA8c2NyaXB0IGRlZmVyIHNyYz1cImh0dHBzOi8vY29kZS5qcXVlcnkuY29tL2pxdWVyeS0zLjMuMS5taW4uanNcIj48L3NjcmlwdD5cbiAgICA8L0hlYWQ+XG4gICAgPEhlYWRlciAvPlxuICAgIDxMZWZ0TWVudSAvPlxuICAgIDxwYWdlPlxuICAgICAgICB7IGNoaWxkcmVuIH1cbiAgICA8L3BhZ2U+XG4gICAgPG1lbnVoaWRlcj48L21lbnVoaWRlcj5cbiAgICA8Rm9vdGVyIC8+XG4gICAgPHBhZ2Vsb2FkZXI+PGJhcj48L2Jhcj48L3BhZ2Vsb2FkZXI+XG4gICAgXG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDMyMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKCR7cHJvY2Vzcy5lbnYuQkFDS0VORF9VUkx9L3N0YXRpYy9pbWFnZXMvYm9keS1iZy5qcGcpICNGNUY3RjY7XG4gICAgICAgIH1cbiAgICAgICAgcGFnZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogbWFyZ2luLWxlZnQgMzUwbXMgZWFzZSAwcztcbiAgICAgICAgfVxuICAgICAgICAuZnRsIHtcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICB9XG4gICAgICAgIC5mdHIge1xuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIGJvZHkubG9hZGVkIG1lbnVoaWRlciB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBkaXNwbGF5IDFzIGVhc2UgMXM7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgfVxuICAgICAgICBib2R5LmxvYWRlZCBwYWdlbG9hZGVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgbWVudWhpZGVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjUpO1xuICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IGFsbDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgei1pbmRleDogMTAzMDtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZSAwcztcbiAgICAgICAgICAgIC1tb3otdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlIDBzO1xuICAgICAgICAgICAgLW1zLXRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZSAwcztcbiAgICAgICAgICAgIC1vLXRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZSAwcztcbiAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZSAwcztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLm5wcm9ncmVzcy1idXN5IGJvZHkubG9hZGVkIHBhZ2Vsb2FkZXIge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cbiAgICAgICAgcGFnZWxvYWRlciB7XG4gICAgICAgICAgICBtYXJnaW46IC0xNXB4IDAgMCAtMTAwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwO1xuICAgICAgICAgICAgei1pbmRleDogOTk5OTk5OTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICB9XG4gICAgICAgIHBhZ2Vsb2FkZXIgYmFyIHtcbiAgICAgICAgICAgIG1hcmdpbjogLTJweCAwIDAgLTg3cHg7XG4gICAgICAgICAgICBhbmltYXRpb246IGdyYWR0cmFuc2xhdGUgMnMgaW5maW5pdGUgbGluZWFyO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsbGVmdCB0b3AscmlnaHQgdG9wLGNvbG9yLXN0b3AoMCUsd2hpdGUpLGNvbG9yLXN0b3AoNTAlLCM4NTAwRkYpLGNvbG9yLXN0b3AoMTAwJSx3aGl0ZSkpOztcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogNDAwcHggMXB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzg1MDBGRjtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHdpZHRoOiAxNzRweDtcbiAgICAgICAgICAgIG9wYWNpdHk6IC44O1xuICAgICAgICAgICAgaGVpZ2h0OiA0cHg7XG4gICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgYm9keS5sb2FkZWQgbGVmdG1lbnUsXG4gICAgICAgIGJvZHkubG9hZGVkIGhlYWRlcixcbiAgICAgICAgYm9keS5sb2FkZWQgZm9vdGVyLFxuICAgICAgICBib2R5LmxvYWRlZCBwYWdlIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTI1MHB4KSB7XG4gICAgICAgICAgICBib2R5LmxlZnQtbWVudSBwYWdlIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMzMwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMjUwcHgpIGFuZCAobWF4LXdpZHRoOiAxNTkwcHgpIHtcbiAgICAgICAgICAgIGJvZHkubGVmdC1tZW51IHRvcGltYWdlIGgxIHtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDEwMHB4KSFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBib2R5LmxlZnQtbWVudSBjb250ZW50IHtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDYwcHgpIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTI1MHB4KSB7XG4gICAgICAgICAgICBib2R5LmxlZnQtbWVudSBoZWFkZXIgbG9nbyB7XG4gICAgICAgICAgICAgICAgbGVmdDogNDAwcHghaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYm9keS5sZWZ0LW1lbnUgaGVhZGVyIG5hdnRvZ2dsZSB7XG4gICAgICAgICAgICAgICAgbGVmdDogMzQ1cHghaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm5wcm9ncmVzcy1idXN5IGJvZHkubG9hZGVkIG1lbnVoaWRlcixcbiAgICAgICAgICAgIGJvZHkubG9hZGVkLmxlZnQtbWVudSBtZW51aGlkZXIge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjI1cHgpIHtcbiAgICAgICAgICAgIGJvZHkubGVmdC1tZW51IGhlYWRlciBuYXZ0b2dnbGUgYmFyOm50aC1jaGlsZCgyKSB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2Y0ZjRmNDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzOTlweCkge1xuICAgICAgICAgICAgYm9keS5sZWZ0LW1lbnUgbGVmdG1lbnUsIGxlZnRtZW51IG1lbnVzY3JvbGwge1xuICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA2OXB4KSFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAzMzBweDtcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDI2MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYm9keS5sZWZ0LW1lbnUgaGVhZGVyIG5hdnRvZ2dsZSB7XG4gICAgICAgICAgICAgICAgbGVmdDogY2FsYygxMDAlIC0gNTVweCkhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyOXB4KSB7XG4gICAgICAgICAgICBib2R5LmxlZnQtbWVudSBoZWFkZXIgbmF2dG9nZ2xlIHtcbiAgICAgICAgICAgICAgICBsZWZ0OiAyNzFweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2ludGVyZmFjZT5cbikiXX0= */\n/*@ sourceURL=/home/ubuntu/workspace/estudo/next/components/interface.js */"),
    __self: this
  }));
});

/***/ })

})
//# sourceMappingURL=_error.js.2cbd016b99c1b50c773b.hot-update.js.map