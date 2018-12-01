webpackHotUpdate("static/development/pages/_error.js",{

/***/ "./components/interface.js":
/*!*********************************!*\
  !*** ./components/interface.js ***!
  \*********************************/
/*! exports provided: default, Header, Footer, LeftMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return Footer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftMenu", function() { return LeftMenu; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/home/ubuntu/workspace/estudo/next/components/interface.js";



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/*global $ navigator*/





next_router__WEBPACK_IMPORTED_MODULE_5___default.a.events.on('routeChangeStart', function (url) {
  console.log("Loading: ".concat(url));
  nprogress__WEBPACK_IMPORTED_MODULE_4___default.a.start();
});
next_router__WEBPACK_IMPORTED_MODULE_5___default.a.events.on('routeChangeComplete', function () {
  return nprogress__WEBPACK_IMPORTED_MODULE_4___default.a.done();
});
next_router__WEBPACK_IMPORTED_MODULE_5___default.a.events.on('routeChangeError', function () {
  return nprogress__WEBPACK_IMPORTED_MODULE_4___default.a.done();
});
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var children = _ref.children,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? 'This is the default title' : _ref$title,
      _ref$ogSiteName = _ref.ogSiteName,
      ogSiteName = _ref$ogSiteName === void 0 ? "avn.systems" : _ref$ogSiteName,
      _ref$ogTitle = _ref.ogTitle,
      ogTitle = _ref$ogTitle === void 0 ? "Website | avn.systems" : _ref$ogTitle,
      _ref$ogUrl = _ref.ogUrl,
      ogUrl = _ref$ogUrl === void 0 ? "https://avn.systems" : _ref$ogUrl,
      _ref$ogType = _ref.ogType,
      ogType = _ref$ogType === void 0 ? "article" : _ref$ogType,
      _ref$ogDescription = _ref.ogDescription,
      ogDescription = _ref$ogDescription === void 0 ? "Website created with next.js optmized as a PWA" : _ref$ogDescription,
      _ref$ogImage = _ref.ogImage,
      ogImage = _ref$ogImage === void 0 ? '/static/images/avn.systems.og-image.jpg' : _ref$ogImage,
      _ref$twitterSite = _ref.twitterSite,
      twitterSite = _ref$twitterSite === void 0 ? "@avn.systems" : _ref$twitterSite,
      _ref$twitterCreator = _ref.twitterCreator,
      twitterCreator = _ref$twitterCreator === void 0 ? "@avn.systems" : _ref$twitterCreator,
      _ref$canonical = _ref.canonical,
      canonical = _ref$canonical === void 0 ? "https://avn.systems" : _ref$canonical,
      _ref$feedXml = _ref.feedXml,
      feedXml = _ref$feedXml === void 0 ? "https://avn.systems/feed.xml" : _ref$feedXml,
      _ref$feedJson = _ref.feedJson,
      feedJson = _ref$feedJson === void 0 ? "https://avn.systemsm/feed.json" : _ref$feedJson;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("interface", {
    className: "jsx-3259314691",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
    className: "jsx-3259314691",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    charSet: "utf-8",
    className: "jsx-3259314691",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    className: "jsx-3259314691",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "author",
    content: "Allan Avelar - https://allanavelar.com/",
    className: "jsx-3259314691",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    property: "og:site_name",
    content: ogSiteName,
    className: "jsx-3259314691",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    property: "og:title",
    content: ogTitle,
    className: "jsx-3259314691",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    property: "og:url",
    content: ogUrl,
    className: "jsx-3259314691",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    property: "og:type",
    content: ogType,
    className: "jsx-3259314691",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    property: "og:description",
    content: ogDescription,
    className: "jsx-3259314691",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    property: "og:image",
    content: "" + ogImage,
    className: "jsx-3259314691",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "twitter:card",
    content: "summary_large_image",
    className: "jsx-3259314691",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "twitter:site",
    content: twitterSite,
    className: "jsx-3259314691",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "twitter:creator",
    content: twitterCreator,
    className: "jsx-3259314691",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "canonical",
    href: canonical,
    className: "jsx-3259314691",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "alternate",
    type: "application/rss+xml",
    title: ogTitle,
    href: feedXml,
    className: "jsx-3259314691",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "alternate",
    type: "application/json",
    title: ogTitle,
    href: feedJson,
    className: "jsx-3259314691",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "apple-touch-icon",
    sizes: "114x114",
    href: "/static/images/icon.png",
    className: "jsx-3259314691",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "apple-touch-icon",
    sizes: "120x120",
    href: "/static/images/icon.png",
    className: "jsx-3259314691",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "apple-touch-icon",
    sizes: "144x144",
    href: "/static/images/icon.png",
    className: "jsx-3259314691",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "apple-touch-icon",
    sizes: "152x152",
    href: "/static/images/icon.png",
    className: "jsx-3259314691",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/static/images/icon.png",
    className: "jsx-3259314691",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "icon",
    type: "image/png",
    href: "/static/images/icon.png",
    className: "jsx-3259314691",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "shortcut icon",
    href: "/static/images/favicon.ico",
    className: "jsx-3259314691",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "mask-icon",
    href: "/assets/safari-pinned-tab.svg",
    color: "#5bbad5",
    className: "jsx-3259314691",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "manifest",
    href: "/static/manifest.json",
    className: "jsx-3259314691",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "msapplication-TileColor",
    content: "#5700AE",
    className: "jsx-3259314691",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "msapplication-TileImage",
    content: "/static/images/avn.systems.og-image.jpg",
    className: "jsx-3259314691",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "msapplication-config",
    content: "/static/browserconfig.xml",
    className: "jsx-3259314691",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "theme-color",
    content: "#5700AE",
    className: "jsx-3259314691",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    defer: true,
    rel: "stylesheet",
    href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/css/bootstrap.min.css",
    integrity: "sha384-Zug+QiDoJOrZ5t4lssLdxGhVrurbmBWopoEl+M6BdEfwnCJZtKxi1KgxUyJq13dy",
    crossOrigin: "anonymous",
    className: "jsx-3259314691",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "/static/css/nprogress.css",
    className: "jsx-3259314691",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("script", {
    defer: true,
    src: "https://code.jquery.com/jquery-3.3.1.min.js",
    className: "jsx-3259314691",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Header, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LeftMenu, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("page", {
    className: "jsx-3259314691",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, children), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("menuhider", {
    className: "jsx-3259314691",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Footer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("pageloader", {
    className: "jsx-3259314691",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("bar", {
    className: "jsx-3259314691",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3259314691",
    css: "body{min-width:320px;background:url(".concat("", "/static/images/body-bg.jpg) #F5F7F6;}page{padding:185px 20px;display:block;color:white;}pre code{color:white!important;}.ftl{float:left;}.ftr{float:right;}::-webkit-scrollbar{display:none;}body.left-menu leftmenu{left:0;}body.left-menu menuhider{display:block;opacity:1;}body.left-menu header navtoggle{left:350px;}menuhider{background-color:rgba(0,0,0,.5);pointer-events:all;position:fixed;z-index:9999;display:none;opacity:0;bottom:0;right:0;left:0;top:0;-webkit-transition:opacity 1s ease 0s;-moz-transition:opacity 1s ease 0s;-ms-transition:opacity 1s ease 0s;-o-transition:opacity 1s ease 0s;-webkit-transition:opacity 1s ease 0s;transition:opacity 1s ease 0s;}.nprogress-busy pageloader{display:block;}pageloader{margin:-15px 0 0 -100px;border-radius:8px;background:#000;z-index:9999999;position:fixed;display:none;width:200px;height:30px;left:50%;top:50%;}pageloader bar{margin:-2px 0 0 -87px;-webkit-animation:gradtranslate 2s infinite linear;animation:gradtranslate 2s infinite linear;background-image:-webkit-gradient(linear,left top,right top,color-stop(0%,white),color-stop(50%,#8500FF),color-stop(100%,white));background-size:400px 1px;background-color:#8500FF;border-radius:5px;position:absolute;width:174px;opacity:.8;height:4px;left:50%;top:50%;}@media screen and (max-width:399px){body.left-menu leftmenu,leftmenu menuscroll{width:calc(100% - 69px)!important;max-width:330px;min-width:260px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VidW50dS93b3Jrc3BhY2UvZXN0dWRvL25leHQvY29tcG9uZW50cy9pbnRlcmZhY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0Z1QixBQUc2QixBQUlHLEFBS0csQUFHWCxBQUdDLEFBR0MsQUFJTixBQUdPLEFBSUgsQUFHcUIsQUFrQmxCLEFBR1UsQUFZRixBQWdCZ0IsT0ExRDFDLElBVkEsQUFpQkEsQ0FkQSxDQUdBLENBT2MsQUF5QmQsRUFsRG1GLEdBSWpFLEdBS2xCLEFBd0QrQyxFQXZDL0MsQUEyQnNCLFFBckJDLENBM0JQLENBNEVRLFFBM0JKLEdBaERwQixLQTRFd0IsQ0FqREwsT0FzQkMsUUFyQkgsQUFpRGIsUUEzQmUsS0FyQkYsVUFzQkEsR0FyQkgsR0FuQ2QsT0FvQ2EsQUFxQkcsU0FwQkosR0FxQkksRUFPcUgsR0EzQjFILE9BQ0QsQUFvQkcsTUFuQjZCLEdBb0I5QixRQUNaLDJCQXBCdUMsbUNBQ0Qsa0NBQ0QsTUF1QlAsMEJBQ0QsQ0F2Qkssd0JBd0JaLGtCQUNBLGtCQUNOLFFBekJoQixJQTBCZSxXQUNBLFdBQ0YsU0FDRCxRQUNaIiwiZmlsZSI6Ii9ob21lL3VidW50dS93b3Jrc3BhY2UvZXN0dWRvL25leHQvY29tcG9uZW50cy9pbnRlcmZhY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKmdsb2JhbCAkIG5hdmlnYXRvciovXG5cbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuXG5pbXBvcnQgTlByb2dyZXNzIGZyb20gJ25wcm9ncmVzcydcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5cblJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlU3RhcnQnLCAodXJsKSA9PiB7XG4gIGNvbnNvbGUubG9nKGBMb2FkaW5nOiAke3VybH1gKVxuICBOUHJvZ3Jlc3Muc3RhcnQoKVxufSlcblJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCAoKSA9PiBOUHJvZ3Jlc3MuZG9uZSgpKVxuUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VFcnJvcicsICgpID0+IE5Qcm9ncmVzcy5kb25lKCkpXG5cbmV4cG9ydCBkZWZhdWx0ICh7IGNoaWxkcmVuLFxuICAgIHRpdGxlID0gJ1RoaXMgaXMgdGhlIGRlZmF1bHQgdGl0bGUnLFxuICAgIFxuICAgIG9nU2l0ZU5hbWUgPSBcImF2bi5zeXN0ZW1zXCIsIG9nVGl0bGUgPSBcIldlYnNpdGUgfCBhdm4uc3lzdGVtc1wiLFxuICAgIG9nVXJsID0gXCJodHRwczovL2F2bi5zeXN0ZW1zXCIsIG9nVHlwZSA9IFwiYXJ0aWNsZVwiLFxuICAgIG9nRGVzY3JpcHRpb24gPSBcIldlYnNpdGUgY3JlYXRlZCB3aXRoIG5leHQuanMgb3B0bWl6ZWQgYXMgYSBQV0FcIixcbiAgICBvZ0ltYWdlID0gJy9zdGF0aWMvaW1hZ2VzL2F2bi5zeXN0ZW1zLm9nLWltYWdlLmpwZycsXG4gICAgXG4gICAgdHdpdHRlclNpdGUgPSBcIkBhdm4uc3lzdGVtc1wiLFxuICAgIHR3aXR0ZXJDcmVhdG9yID0gXCJAYXZuLnN5c3RlbXNcIixcbiAgICBcbiAgICBjYW5vbmljYWwgPSBcImh0dHBzOi8vYXZuLnN5c3RlbXNcIixcbiAgICBmZWVkWG1sID0gXCJodHRwczovL2F2bi5zeXN0ZW1zL2ZlZWQueG1sXCIsXG4gICAgZmVlZEpzb24gPSBcImh0dHBzOi8vYXZuLnN5c3RlbXNtL2ZlZWQuanNvblwiXG4gIH0pID0+IChcbiAgPGludGVyZmFjZT5cbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT57IHRpdGxlIH08L3RpdGxlPlxuICAgICAgPG1ldGEgY2hhclNldD0ndXRmLTgnIC8+XG4gICAgICA8bWV0YSBuYW1lPSd2aWV3cG9ydCcgY29udGVudD0naW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aCcgLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJhdXRob3JcIiBjb250ZW50PVwiQWxsYW4gQXZlbGFyIC0gaHR0cHM6Ly9hbGxhbmF2ZWxhci5jb20vXCIgLz5cbiAgICAgIFxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpzaXRlX25hbWVcIiBjb250ZW50PXsgb2dTaXRlTmFtZSB9IC8+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD17IG9nVGl0bGUgfSAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PXsgb2dVcmwgfSAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0eXBlXCIgY29udGVudD17IG9nVHlwZSB9IC8+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD17IG9nRGVzY3JpcHRpb24gfSAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9eyBwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArIG9nSW1hZ2UgfSAvPlxuICAgIFxuICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6Y2FyZFwiIGNvbnRlbnQ9XCJzdW1tYXJ5X2xhcmdlX2ltYWdlXCIgLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOnNpdGVcIiBjb250ZW50PXsgdHdpdHRlclNpdGUgfSAvPlxuICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6Y3JlYXRvclwiIGNvbnRlbnQ9eyB0d2l0dGVyQ3JlYXRvciB9IC8+XG4gICAgXG4gICAgICA8bGluayByZWw9XCJjYW5vbmljYWxcIiBocmVmPXsgY2Fub25pY2FsIH0gLz5cbiAgICAgIDxsaW5rIHJlbD1cImFsdGVybmF0ZVwiIHR5cGU9XCJhcHBsaWNhdGlvbi9yc3MreG1sXCIgdGl0bGU9eyBvZ1RpdGxlIH0gaHJlZj17IGZlZWRYbWwgfSAvPlxuICAgICAgPGxpbmsgcmVsPVwiYWx0ZXJuYXRlXCIgdHlwZT1cImFwcGxpY2F0aW9uL2pzb25cIiB0aXRsZT17IG9nVGl0bGUgfSBocmVmPXsgZmVlZEpzb24gfSAvPlxuXG4gICAgICA8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCIxMTR4MTE0XCIgaHJlZj17IHByb2Nlc3MuZW52LkJBQ0tFTkRfVVJMICsgJy9zdGF0aWMvaW1hZ2VzL2ljb24ucG5nJ30gLz5cbiAgICAgIDxsaW5rIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBzaXplcz1cIjEyMHgxMjBcIiBocmVmPXsgcHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyAnL3N0YXRpYy9pbWFnZXMvaWNvbi5wbmcnfSAvPlxuICAgICAgPGxpbmsgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIHNpemVzPVwiMTQ0eDE0NFwiIGhyZWY9eyBwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArICcvc3RhdGljL2ltYWdlcy9pY29uLnBuZyd9IC8+XG4gICAgICA8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCIxNTJ4MTUyXCIgaHJlZj17IHByb2Nlc3MuZW52LkJBQ0tFTkRfVVJMICsgJy9zdGF0aWMvaW1hZ2VzL2ljb24ucG5nJ30gLz5cbiAgICAgIDxsaW5rIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBzaXplcz1cIjE4MHgxODBcIiBocmVmPXsgcHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyAnL3N0YXRpYy9pbWFnZXMvaWNvbi5wbmcnfSAvPlxuICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS9wbmdcIiBocmVmPXsgcHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyAnL3N0YXRpYy9pbWFnZXMvaWNvbi5wbmcnfSAvPlxuICAgICAgPGxpbmsgcmVsPVwic2hvcnRjdXQgaWNvblwiIGhyZWY9eyBwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArICcvc3RhdGljL2ltYWdlcy9mYXZpY29uLmljbyd9IC8+XG4gICAgICBcbiAgICAgIDxsaW5rIHJlbD1cIm1hc2staWNvblwiIGhyZWY9XCIvYXNzZXRzL3NhZmFyaS1waW5uZWQtdGFiLnN2Z1wiIGNvbG9yPVwiIzViYmFkNVwiIC8+XG4gICAgICA8bGluayByZWw9XCJtYW5pZmVzdFwiIGhyZWY9eyBwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArICcvc3RhdGljL21hbmlmZXN0Lmpzb24nfSAvPlxuICAgICAgXG4gICAgICA8bWV0YSBuYW1lPVwibXNhcHBsaWNhdGlvbi1UaWxlQ29sb3JcIiBjb250ZW50PVwiIzU3MDBBRVwiIC8+XG4gICAgICA8bWV0YSBuYW1lPVwibXNhcHBsaWNhdGlvbi1UaWxlSW1hZ2VcIiBjb250ZW50PXsgcHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyAnL3N0YXRpYy9pbWFnZXMvYXZuLnN5c3RlbXMub2ctaW1hZ2UuanBnJ30gLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJtc2FwcGxpY2F0aW9uLWNvbmZpZ1wiIGNvbnRlbnQ9eyBwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArICcvc3RhdGljL2Jyb3dzZXJjb25maWcueG1sJ30gLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJ0aGVtZS1jb2xvclwiIGNvbnRlbnQ9XCIjNTcwMEFFXCIgLz5cbiAgICAgIFxuICAgICAgPGxpbmsgZGVmZXIgcmVsPSdzdHlsZXNoZWV0JyBocmVmPSdodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjAuMC1iZXRhLjMvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJyBpbnRlZ3JpdHk9J3NoYTM4NC1adWcrUWlEb0pPclo1dDRsc3NMZHhHaFZydXJibUJXb3BvRWwrTTZCZEVmd25DSlp0S3hpMUtneFV5SnExM2R5JyBjcm9zc09yaWdpbj0nYW5vbnltb3VzJyAvPlxuICAgICAgPGxpbmsgcmVsPSdzdHlsZXNoZWV0JyB0eXBlPSd0ZXh0L2NzcycgaHJlZj17IHByb2Nlc3MuZW52LkJBQ0tFTkRfVVJMICsgJy9zdGF0aWMvY3NzL25wcm9ncmVzcy5jc3MnfSAvPlxuICAgICAgPHNjcmlwdCBkZWZlciBzcmM9XCJodHRwczovL2NvZGUuanF1ZXJ5LmNvbS9qcXVlcnktMy4zLjEubWluLmpzXCI+PC9zY3JpcHQ+XG4gICAgPC9IZWFkPlxuICAgIDxIZWFkZXIgLz5cbiAgICA8TGVmdE1lbnUgLz5cbiAgICA8cGFnZT5cbiAgICAgICAgeyBjaGlsZHJlbiB9XG4gICAgPC9wYWdlPlxuICAgIDxtZW51aGlkZXI+PC9tZW51aGlkZXI+XG4gICAgPEZvb3RlciAvPlxuICAgIDxwYWdlbG9hZGVyPjxiYXI+PC9iYXI+PC9wYWdlbG9hZGVyPlxuICAgIFxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgICAgbWluLXdpZHRoOiAzMjBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgke3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMfS9zdGF0aWMvaW1hZ2VzL2JvZHktYmcuanBnKSAjRjVGN0Y2O1xuICAgICAgICB9XG4gICAgICAgIHBhZ2Uge1xuICAgICAgICAgICAgcGFkZGluZzogMTg1cHggMjBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG4gICAgICAgIHByZSBjb2RlIHtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZSFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgICAgLmZ0bCB7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgfVxuICAgICAgICAuZnRyIHtcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgfVxuICAgICAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGJvZHkubGVmdC1tZW51IGxlZnRtZW51IHtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIH1cbiAgICAgICAgYm9keS5sZWZ0LW1lbnUgbWVudWhpZGVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgfVxuICAgICAgICBib2R5LmxlZnQtbWVudSBoZWFkZXIgbmF2dG9nZ2xlIHtcbiAgICAgICAgICAgIGxlZnQ6IDM1MHB4O1xuICAgICAgICB9XG4gICAgICAgIG1lbnVoaWRlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC41KTtcbiAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICB6LWluZGV4OiA5OTk5O1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZSAwcztcbiAgICAgICAgICAgIC1tb3otdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlIDBzO1xuICAgICAgICAgICAgLW1zLXRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZSAwcztcbiAgICAgICAgICAgIC1vLXRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZSAwcztcbiAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZSAwcztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLm5wcm9ncmVzcy1idXN5IHBhZ2Vsb2FkZXIge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cbiAgICAgICAgcGFnZWxvYWRlciB7XG4gICAgICAgICAgICBtYXJnaW46IC0xNXB4IDAgMCAtMTAwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwO1xuICAgICAgICAgICAgei1pbmRleDogOTk5OTk5OTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgfVxuICAgICAgICBwYWdlbG9hZGVyIGJhciB7XG4gICAgICAgICAgICBtYXJnaW46IC0ycHggMCAwIC04N3B4O1xuICAgICAgICAgICAgYW5pbWF0aW9uOiBncmFkdHJhbnNsYXRlIDJzIGluZmluaXRlIGxpbmVhcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLGxlZnQgdG9wLHJpZ2h0IHRvcCxjb2xvci1zdG9wKDAlLHdoaXRlKSxjb2xvci1zdG9wKDUwJSwjODUwMEZGKSxjb2xvci1zdG9wKDEwMCUsd2hpdGUpKTs7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDQwMHB4IDFweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM4NTAwRkY7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB3aWR0aDogMTc0cHg7XG4gICAgICAgICAgICBvcGFjaXR5OiAuODtcbiAgICAgICAgICAgIGhlaWdodDogNHB4O1xuICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM5OXB4KSB7XG4gICAgICAgICAgICBib2R5LmxlZnQtbWVudSBsZWZ0bWVudSwgbGVmdG1lbnUgbWVudXNjcm9sbCB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDY5cHgpIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDMzMHB4O1xuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMjYwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvaW50ZXJmYWNlPlxuKVxuXG5leHBvcnQgY2xhc3MgSGVhZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgICAgIGlmICgnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSB7XG4gICAgICAgIC8vIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyXG4gICAgICAgIC8vICAgLnJlZ2lzdGVyKHByb2Nlc3MuZW52LkJBQ0tFTkRfVVJMICsnL3NlcnZpY2Utd29ya2VyLmpzJylcbiAgICAgICAgLy8gICAudGhlbihyZWdpc3RyYXRpb24gPT4ge1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coJ3NlcnZpY2Ugd29ya2VyIHJlZ2lzdHJhdGlvbiBzdWNjZXNzZnVsJylcbiAgICAgICAgLy8gICB9KVxuICAgICAgICAvLyAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAvLyAgICAgY29uc29sZS53YXJuKCdzZXJ2aWNlIHdvcmtlciByZWdpc3RyYXRpb24gZmFpbGVkJywgZXJyLm1lc3NhZ2UpXG4gICAgICAgIC8vICAgfSlcbiAgICAgICAgfVxuICAgICAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJCh3aW5kb3cpLnNjcm9sbFRvcCgpID4gMCAmJiAkKHdpbmRvdykud2lkdGgoKSA+IDU1MCA/ICQoXCJoZWFkZXJcIikuYWRkQ2xhc3MoXCJyZXNpemVcIikgOiAkKFwiaGVhZGVyXCIpLnJlbW92ZUNsYXNzKFwicmVzaXplXCIpXG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgICAgICAkKFwiaGVhZGVyIG5hdiBhXCIpLmhvdmVyKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJChcImhlYWRlciBuYXZzbGlkZXJcIikuY3NzKHtcbiAgICAgICAgICAgICAgICBsZWZ0OiAkKHRoaXMpLnBvc2l0aW9uKCkubGVmdCArIHBhcnNlSW50KCQodGhpcykuY3NzKFwibWFyZ2luTGVmdFwiKSkgKyBcInB4XCIsXG4gICAgICAgICAgICAgICAgd2lkdGg6ICQodGhpcykud2lkdGgoKSArIFwicHhcIixcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiBcIi45OTlcIlxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKFwiaGVhZGVyIG5hdnNsaWRlclwiKS5jc3MoXCJvcGFjaXR5XCIsIFwiMFwiKVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmVuZGVyICgpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgICAgICAgPGxvZ28+PHRleHQ+QVZOIFNZU1RFTVM8L3RleHQ+PC9sb2dvPlxuICAgICAgICAgICAgICAgIDxuYXY+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nIGFzPXsgcHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyBgL2B9PjxhPkhvbWU8L2E+PC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvYWJvdXQnIGFzPXsgcHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyBgL2Fib3V0YH0+PGE+QWJvdXQ8L2E+PC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvdHZtYXplJyBhcz17IHByb2Nlc3MuZW52LkJBQ0tFTkRfVVJMICsgYC90dm1hemVgfT48YT5UViBNYXplPC9hPjwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nLzQwNCcgYXM9eyBwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArIGAvNDA0YH0+PGE+NDA0PC9hPjwvTGluaz5cbiAgICAgICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICAgICAgICA8bmF2dG9nZ2xlPjxiYXI+PC9iYXI+PGJhcj48L2Jhcj48YmFyPjwvYmFyPjwvbmF2dG9nZ2xlPlxuICAgICAgICAgICAgICAgIDxuYXZzbGlkZXI+PC9uYXZzbGlkZXI+XG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgICAgICBoZWFkZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwMDAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA5MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyIGxvZ28ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTZweCAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTcwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiA5MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTH0vc3RhdGljL2ltYWdlcy9pY29uLnBuZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBncmF5O1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAxNTBtcyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDE1MG1zIGVhc2UtaW4tb3V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgLW1zLXRyYW5zaXRpb246IGFsbCAxNTBtcyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC1vLXRyYW5zaXRpb246IGFsbCAxNTBtcyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAxNTBtcyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBoZWFkZXIgbG9nbzpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWZpbHRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC1tb3otZmlsdGVyOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgLW8tZmlsdGVyOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBub25lO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlciBsb2dvIHRleHQge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1pbmxpbmUtYm94O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMTEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzVmNWY1ZjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDYwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyIG5hdiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBoZWFkZXIgbmF2IGEge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMjVweCAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNkOWQ5ZDk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyIG5hdiBhOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjODUwMEZGO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlciBuYXZ0b2dnbGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQ1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlciBuYXZ0b2dnbGUgYmFyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjYWFhO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDdweCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBoZWFkZXIgbmF2dG9nZ2xlOmhvdmVyIGJhciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2JjNzNmZjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBoZWFkZXIgbmF2c2xpZGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjODUwMEZGO1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAyNTBtcyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDI1MG1zIGVhc2UtaW4tb3V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgLW1zLXRyYW5zaXRpb246IGFsbCAyNTBtcyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC1vLXRyYW5zaXRpb246IGFsbCAyNTBtcyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAyNTBtcyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYyNXB4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNThweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlciBsb2dvIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBjYWxjKDUwJSAtIDg1cHgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtZmlsdGVyOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC1tb3otZmlsdGVyOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC1vLWZpbHRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAxcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXIgbmF2IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyIG5hdnRvZ2dsZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZvb3RlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuICAgICAgICBcbiAgICB9XG4gICAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8Zm9vdGVyPlxuICAgICAgICAgICAgPGxpZ2h0LXJpZ2h0PjwvbGlnaHQtcmlnaHQ+XG4gICAgICAgICAgICA8dmVyc2lvbiBjbGFzc05hbWU9XCJmdGxcIj52ZXJzaW9uOiA8aXRlbT4yLjEuMDE8L2l0ZW0+PC92ZXJzaW9uPlxuICAgICAgICAgICAgPGluZm9zIGNsYXNzTmFtZT1cImZ0bFwiPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2FkbWluLmF2bi5zeXN0ZW1zL3YxL1wiIHRhcmdldD1cIl9ibGFua1wiPjxsb2dpbj7wn5SQIENMSUVOVCBMT0dJTjwvbG9naW4+PC9hPiB8IDxjbGlja2l0ZW0+PGl0ZW0+TE9DQUw6PC9pdGVtPiBXT1JMRFdJREU8L2NsaWNraXRlbT4gfCA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2F2bnN5c3RlbXNcIiB0YXJnZXQ9XCJfYmxhbmtcIj48aXRlbT5HSVRIVUIvPC9pdGVtPkFWTlNZU1RFTVM8L2E+IHwgPGEgaHJlZj1cIm1haWx0bzpteWFwcEBhdm4uc3lzdGVtc1wiPjxpdGVtPkUtTUFJTDo8L2l0ZW0+IENPTlRBQ1RAQVZOLlNZU1RFTVM8L2E+XG4gICAgICAgICAgICA8L2luZm9zPlxuICAgICAgICAgICAgPGxhbmd1YWdlIGNsYXNzTmFtZT1cImZ0clwiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZsYWctaWNvbiBmbGFnLWljb24tdXMgc2VsZWN0ZWQgZnRyXCI+PC9pPlxuICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxhPkVuZ2xpc2g8aSBjbGFzc05hbWU9XCJmbGFnLWljb24gZmxhZy1pY29uLXVzXCI+PC9pPjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZGlzYWJsZVwiPjxhPlNwYW5pc2g8aSBjbGFzc05hbWU9XCJmbGFnLWljb24gZmxhZy1pY29uLWVzXCI+PC9pPjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZGlzYWJsZVwiPjxhPkZyZW5jaDxpIGNsYXNzTmFtZT1cImZsYWctaWNvbiBmbGFnLWljb24tZnJcIj48L2k+PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkaXNhYmxlXCI+PGE+UG9ydHVndWVzZTxpIGNsYXNzTmFtZT1cImZsYWctaWNvbiBmbGFnLWljb24tYnJcIj48L2k+PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvbGFuZ3VhZ2U+XG4gICAgICAgICAgICA8Y29weXJpZ2h0IGNsYXNzTmFtZT1cImZ0clwiPkNvcHlyaWdodCA8aXRlbT4yMDE3PC9pdGVtPjwvY29weXJpZ2h0PlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIGZvb3RlciB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgke3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMfS9zdGF0aWMvaW1hZ2VzL2Zvb3Rlci5qcGcpO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwMDAwO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM3cHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICAgICAgICAgIHdlYmtpdC1ib3gtc2hhZG93OiAwIC0xcHggMTBweCAwIHJnYigwLCAwLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgLW1vei1ib3gtc2hhZG93OiAwIC0xcHggMTBweCAwIHJnYigwLCAwLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAtMXB4IDEwcHggMCByZ2IoMCwgMCwgMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvb3RlciBjb3B5cmlnaHQsIGZvb3RlciB2ZXJzaW9uIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTJweCAxNXB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNiYzc0ZmY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvb3RlciBjb3B5cmlnaHQgPiBpdGVtLCBmb290ZXIgdmVyc2lvbiA+IGl0ZW0sIGZvb3RlciBpbmZvcyBpdGVtIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNBQkE0OUE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvb3RlciBpbmZvcyB7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IGNhbGMoNTAlIC0gMjIxcHgpO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM3NzZFNjM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZm9vdGVyIGluZm9zIGEge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM3NzZFNjM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZm9vdGVyIGluZm9zID4gYSA+IGxvZ2luIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZGM5ZDAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZvb3RlciBpbmZvcyBhOmhvdmVyLCBmb290ZXIgaW5mb3MgYTpob3ZlciBsb2dpbiwgZm9vdGVyIGluZm9zIGNsaWNraXRlbTpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2JjNzRmZjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvb3RlciBsYW5ndWFnZSBpLmZsYWctaWNvbiB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogN3B4IDE1cHggMHB4IDBweDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvb3RlciBsYW5ndWFnZSBpLmZsYWctaWNvbi11cyB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMfS9zdGF0aWMvaW1hZ2VzL2ZsYWdzL3VzYS5wbmcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb290ZXIgbGFuZ3VhZ2UgaS5mbGFnLWljb24tZXMge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTH0vc3RhdGljL2ltYWdlcy9mbGFncy9zcGFpbi5wbmcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb290ZXIgbGFuZ3VhZ2UgaS5mbGFnLWljb24tZnIge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTH0vc3RhdGljL2ltYWdlcy9mbGFncy9mcmFuY2UucG5nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9vdGVyIGxhbmd1YWdlIGkuZmxhZy1pY29uLWJyIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7cHJvY2Vzcy5lbnYuQkFDS0VORF9VUkx9L3N0YXRpYy9pbWFnZXMvZmxhZ3MvYnJhemlsLnBuZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvb3RlciBsYW5ndWFnZTpob3ZlciB1bCB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICBib3R0b206IDE1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvb3RlciBsYW5ndWFnZSB1bCB7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzAzMWM0NTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICMwMzFjNDU7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxNXB4IDVweCAwO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjkyODI2O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9vdGVyIGxhbmd1YWdlIHVsIGxpIHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb290ZXIgbGFuZ3VhZ2UgdWwgbGkuZGlzYWJsZSBhIHtcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjODI4MDdlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb290ZXIgbGFuZ3VhZ2UgdWwgbGkuZGlzYWJsZSBhID4gaS5mbGFnLWljb24ge1xuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWZpbHRlcjogZ3JheXNjYWxlKDEwMCUpO1xuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9vdGVyIGxhbmd1YWdlIHVsIGxpIGEge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMTBweCAwIDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2JjNzRmZjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9vdGVyIGxhbmd1YWdlIHVsIGxpIGE6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9vdGVyIGxhbmd1YWdlIHVsIGxpIGEgPiBpLmZsYWctaWNvbiB7XG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogOTQwcHgpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9vdGVyIGluZm9zIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYyNXB4KSB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2Zvb3Rlcj5cbiAgICApfVxufVxuXG5leHBvcnQgY2xhc3MgTGVmdE1lbnUgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbXBvbmVudERpZE1vdW50ICgpIHtcbiAgICAgICAgJChcImxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuLnN1Ym1lbnUtaGFzLW51bWJlcnNcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBpZiAoJChlLnRhcmdldCkuaGFzQ2xhc3MoJ2Rpc2FibGUnKSkge1xuICAgICAgICAgICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoJChlLnRhcmdldCkuYXR0cignaHJlZicpKSB7XG4gICAgICAgICAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdsZWZ0LW1lbnUnKTtcbiAgICAgICAgICAgICAgICAvL3JldHVybiAkLmZuLm5hdmlnYXRlKGUudGFyZ2V0LCBlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5maW5kKCdzdWJtZW51JykudG9nZ2xlQ2xhc3MoXCJvcGVuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAkKFwiaGVhZGVyIG5hdnRvZ2dsZSwgbWVudWhpZGVyXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgJCgnYm9keScpLnRvZ2dsZUNsYXNzKCdsZWZ0LW1lbnUnKTtcbiAgICAgICAgfSlcbiAgICB9XG4gICAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8bGVmdG1lbnU+XG4gICAgXHRcdDxzaWRlYmFydXNlcj5cbiAgICBcdCAgICAgICAgPHBob3RvPlxuICAgIFx0ICAgICAgICAgICAgPHRpdGxlPkJvYSBub2l0ZS4g4piFPC90aXRsZT5cbiAgICBcdCAgICAgICAgICAgIDxzdWJ0aXRsZT5FbnRyZSBjb20gc2V1IGxvZ2luIG91IGNhZGFzdHJlLXNlITwvc3VidGl0bGU+XG4gICAgXHQgICAgICAgIDwvcGhvdG8+XG4gICAgXHRcdCAgICA8YmdpbWc+PC9iZ2ltZz5cbiAgICBcdFx0ICAgIDxiZ3NoYWRvdz48L2Jnc2hhZG93PlxuICAgIFx0XHQ8L3NpZGViYXJ1c2VyPlxuICAgIFx0XHQ8bWVudXNjcm9sbD5cbiAgICAgICAgICAgICAgICA8c2lkZWJhcnNlcGFyYXRvcj5BY2Vzc28gUmVzdHJpdG88L3NpZGViYXJzZXBhcmF0b3I+XG4gICAgICAgICAgICAgICAgPG1lbnVpdGVtcz5cbiAgICAgICAgICAgICAgICAgICAgPGJ0biBocmVmPVwiLy9hZG1pbi5hdm4uc3lzdGVtc1wiIHRhcmdldD1cIl9zZWxmXCI+XG4gICAgICAgICAgICAgICAgICAgIFx0PHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0xNDQgMTEydjUxLjZINDhjLTI2LjUgMC00OCAyMS41LTQ4IDQ4djg4LjZjMCAyNi41IDIxLjUgNDggNDggNDhoOTZ2NTEuNmMwIDQyLjYgNTEuNyA2NC4yIDgxLjkgMzMuOWwxNDQtMTQzLjljMTguNy0xOC43IDE4LjctNDkuMSAwLTY3LjlsLTE0NC0xNDRDMTk1LjggNDggMTQ0IDY5LjMgMTQ0IDExMnptMTkyIDE0NEwxOTIgNDAwdi05OS43SDQ4di04OC42aDE0NFYxMTJsMTQ0IDE0NHptODAgMTkyaC04NGMtNi42IDAtMTItNS40LTEyLTEydi0yNGMwLTYuNiA1LjQtMTIgMTItMTJoODRjMjYuNSAwIDQ4LTIxLjUgNDgtNDhWMTYwYzAtMjYuNS0yMS41LTQ4LTQ4LTQ4aC04NGMtNi42IDAtMTItNS40LTEyLTEyVjc2YzAtNi42IDUuNC0xMiAxMi0xMmg4NGM1MyAwIDk2IDQzIDk2IDk2djE5MmMwIDUzLTQzIDk2LTk2IDk2elwiIGNsYXNzTmFtZT1cIlwiPjwvcGF0aD48L3N2Zz5FbnRyYXI8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWNpcmNsZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjU2IDhDMTE5IDggOCAxMTkgOCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzOTMgOCAyNTYgOHpcIj48L3BhdGg+PC9zdmc+PC9idG4+XG4gICAgICAgICAgICAgICAgICAgIDxidG4gaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJkaXNhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgIFx0PHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDU3NiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yODggMjA4Yy00NC4yIDAtODAgMzUuOC04MCA4MHMzNS44IDgwIDgwIDgwIDgwLTM1LjggODAtODAtMzUuOC04MC04MC04MHptMCAxMjhjLTI2LjUgMC00OC0yMS41LTQ4LTQ4czIxLjUtNDggNDgtNDggNDggMjEuNSA0OCA0OC0yMS41IDQ4LTQ4IDQ4ek01MTIgNjRIMzUyVjMyYzAtMTcuNy0xNC4zLTMyLTMyLTMyaC02NGMtMTcuNyAwLTMyIDE0LjMtMzIgMzJ2MzJINjRDMjguNyA2NCAwIDkyLjcgMCAxMjh2MzIwYzAgMzUuMyAyOC43IDY0IDY0IDY0aDQ0OGMzNS4zIDAgNjQtMjguNyA2NC02NFYxMjhjMC0zNS4zLTI4LjctNjQtNjQtNjR6TTI1NiAzMmg2NHY5NmgtNjRWMzJ6bTEyOCA0NDhIMTkydi0yMS45YzAtOSAyLjYtMTcuNiA3LjYtMjUgNy4yLTEwLjcgMjAuMy0xNy4yIDM1LTE3LjIgMTUuOSAwIDIzLjUgOCA1My40IDhzMzcuNi04IDUzLjQtOGMxNC43IDAgMjcuNyA2LjQgMzUgMTcuMiA1IDcuNCA3LjYgMTYgNy42IDI1VjQ4MHptMTYwLTMyYzAgMTcuNi0xNC40IDMyLTMyIDMyaC05NnYtMjEuOWMwLTE1LjktNC44LTMwLjYtMTMtNDIuOC0xMy44LTIwLjUtMzcuMy0zMS4zLTYxLjUtMzEuMy0yMi4yIDAtMjcuOCA4LTUzLjQgOC0yNS42IDAtMzEuMi04LTUzLjQtOC0yNC4yIDAtNDcuNyAxMC44LTYxLjUgMzEuMy04LjIgMTIuMi0xMyAyNy0xMyA0Mi44VjQ4MEg2NGMtMTcuNiAwLTMyLTE0LjQtMzItMzJWMTI4YzAtMTcuNiAxNC40LTMyIDMyLTMyaDE2MHY2NGgxMjhWOTZoMTYwYzE3LjYgMCAzMiAxNC40IDMyIDMydjMyMHpcIiBjbGFzc05hbWU9XCJcIj48L3BhdGg+PC9zdmc+Q2FkYXN0cmFyLXNlPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6XCI+PC9wYXRoPjwvc3ZnPjwvYnRuPlxuICAgICAgICAgICAgICAgIDwvbWVudWl0ZW1zPlxuICAgICAgICAgICAgICAgIDxzaWRlYmFyZGl2aWRlcj48L3NpZGViYXJkaXZpZGVyPlxuICAgIFx0XHRcdDxtZW51c2l0ZW1vYmlsZT5cbiAgICBcdCAgICAgICAgICAgIDxzaWRlYmFyc2VwYXJhdG9yPldlYnNpdGUgTWVudTwvc2lkZWJhcnNlcGFyYXRvcj5cbiAgICBcdCAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudS1pdGVtcyBtZW51LWljb25zXCI+XG4gICAgXHQgICAgICAgICAgICAgICAgXG4gICAgXHQgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBcdDxzaWRlYmFyZGl2aWRlcj48L3NpZGViYXJkaXZpZGVyPlxuICAgICAgICAgICAgICAgIDwvbWVudXNpdGVtb2JpbGU+XG4gICAgICAgICAgICAgICAgPHNpZGViYXJzZXBhcmF0b3I+TVlBUFAgTW9kZWxzPC9zaWRlYmFyc2VwYXJhdG9yPlxuICAgICAgICAgICAgICAgIDxtZW51aXRlbXM+XG4gICAgICAgICAgICAgICAgICAgIDxidG4gaHJlZj1cIi4vXCI+PHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1tb2JpbGUtYWx0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0xOTIgNDE2YzAgMTcuNy0xNC4zIDMyLTMyIDMycy0zMi0xNC4zLTMyLTMyIDE0LjMtMzIgMzItMzIgMzIgMTQuMyAzMiAzMnptNDgtNjBWOTJjMC02LjYtNS40LTEyLTEyLTEySDkyYy02LjYgMC0xMiA1LjQtMTIgMTJ2MjY0YzAgNi42IDUuNCAxMiAxMiAxMmgxMzZjNi42IDAgMTItNS40IDEyLTEyem04MC0zMDh2NDE2YzAgMjYuNS0yMS41IDQ4LTQ4IDQ4SDQ4Yy0yNi41IDAtNDgtMjEuNS00OC00OFY0OEMwIDIxLjUgMjEuNSAwIDQ4IDBoMjI0YzI2LjUgMCA0OCAyMS41IDQ4IDQ4em0tNDggNDEwVjU0YzAtMy4zLTIuNy02LTYtNkg1NGMtMy4zIDAtNiAyLjctNiA2djQwNGMwIDMuMyAyLjcgNiA2IDZoMjEyYzMuMyAwIDYtMi43IDYtNnpcIj48L3BhdGg+PC9zdmc+QWJvdXQgTXkgQXBwPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6XCI+PC9wYXRoPjwvc3ZnPjwvYnRuPlxuICAgICAgICAgICAgICAgICAgICA8YnRuIGNsYXNzTmFtZT1cInN1Ym1lbnUtaGFzLW51bWJlcnNcIj5cbiAgICAgICAgICAgICAgICAgICAgXHQ8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLXR2XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk00MDAgMjQ0di04YzAtNi42IDUuNC0xMiAxMi0xMmg4YzYuNiAwIDEyIDUuNCAxMiAxMnY4YzAgNi42LTUuNCAxMi0xMiAxMmgtOGMtNi42IDAtMTItNS40LTEyLTEyem0xMiA3Nmg4YzYuNiAwIDEyLTUuNCAxMi0xMnYtOGMwLTYuNi01LjQtMTItMTItMTJoLThjLTYuNiAwLTEyIDUuNC0xMiAxMnY4YzAgNi42IDUuNCAxMiAxMiAxMnptLTM2LTEzNi41cy0xLjUtNy41LTE0NC03LjUtMTQ0LjUgNy41LTE0NC41IDcuNVM4MCAxODQgODAgMjg4czcuNSAxMDQuNSA3LjUgMTA0LjVTODggNDAwIDIzMiA0MDBzMTQ0LTcuNSAxNDQtNy41IDcuNS0uNSA3LjUtMTA0LjUtNy41LTEwNC41LTcuNS0xMDQuNXpNNTEyIDE0NHYyODhjMCAyNi41LTIxLjUgNDgtNDggNDhoLTE2djMyaC00OGwtMTAuNy0zMkgxMjIuN0wxMTIgNTEySDY0di0zMkg0OGMtMjYuNSAwLTQ4LTIxLjUtNDgtNDhWMTQ0YzAtMjYuNSAyMS41LTQ4IDQ4LTQ4aDE0MC45bC01NC01NS4yYy05LjMtOS41LTkuMS0yNC43LjMtMzMuOSA5LjUtOS4zIDI0LjctOS4xIDMzLjkuM0wyNTYgOTZsODYuOS04OC44YzkuMy05LjUgMjQuNS05LjYgMzMuOS0uMyA5LjUgOS4zIDkuNiAyNC41LjMgMzMuOWwtNTQgNTUuMkg0NjRjMjYuNSAwIDQ4IDIxLjUgNDggNDh6bS00OCAwSDQ4djI4OGg0MTZWMTQ0elwiPjwvcGF0aD48L3N2Zz5Db21tdW5pY2F0aW9uPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy10ZXJtaW5hbFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMzQuNDk1IDM2LjQ2NWwyMTEuMDUxIDIxMS4wNWM0LjY4NiA0LjY4NiA0LjY4NiAxMi4yODQgMCAxNi45NzFMMzQuNDk1IDQ3NS41MzVjLTQuNjg2IDQuNjg2LTEyLjI4NCA0LjY4Ni0xNi45NyAwbC03LjA3MS03LjA3Yy00LjY4Ni00LjY4Ni00LjY4Ni0xMi4yODQgMC0xNi45NzFMMjA1Ljk0NyAyNTYgMTAuNDU0IDYwLjUwNmMtNC42ODYtNC42ODYtNC42ODYtMTIuMjg0IDAtMTYuOTcxbDcuMDcxLTcuMDdjNC42ODYtNC42ODcgMTIuMjg0LTQuNjg3IDE2Ljk3IDB6TTY0MCA0Njh2LTEwYzAtNi42MjctNS4zNzMtMTItMTItMTJIMzAwYy02LjYyNyAwLTEyIDUuMzczLTEyIDEydjEwYzAgNi42MjcgNS4zNzMgMTIgMTIgMTJoMzI4YzYuNjI3IDAgMTItNS4zNzMgMTItMTJ6XCI+PC9wYXRoPjwvc3ZnPjxjb3VudD40PC9jb3VudD5cbiAgICBcdCAgICAgICAgICAgICAgICA8c3VibWVudT5cbiAgICBcdCAgICAgICAgICAgICAgICAgICAgPGJ0biBjbGFzc05hbWU9XCJkaXNhYmxlXCI+PHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1hbmdsZS1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjI0LjMgMjczbC0xMzYgMTM2Yy05LjQgOS40LTI0LjYgOS40LTMzLjkgMGwtMjIuNi0yMi42Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOWw5Ni40LTk2LjQtOTYuNC05Ni40Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOUw1NC4zIDEwM2M5LjQtOS40IDI0LjYtOS40IDMzLjkgMGwxMzYgMTM2YzkuNSA5LjQgOS41IDI0LjYuMSAzNHpcIj48L3BhdGg+PC9zdmc+QWfDqm5jaWFzIGUgUHJvZHV0b3JhczxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctY2lyY2xlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNTYgOEMxMTkgOCA4IDExOSA4IDI1NnMxMTEgMjQ4IDI0OCAyNDggMjQ4LTExMSAyNDgtMjQ4UzM5MyA4IDI1NiA4elwiPjwvcGF0aD48L3N2Zz48L2J0bj5cbiAgICBcdCAgICAgICAgICAgICAgICAgICAgPGJ0biBocmVmPVwiLi90aGVtZXMvcHJvZHV0b3Jhcy9cIj48c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWFuZ2xlLXJpZ2h0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yMjQuMyAyNzNsLTEzNiAxMzZjLTkuNCA5LjQtMjQuNiA5LjQtMzMuOSAwbC0yMi42LTIyLjZjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45bDk2LjQtOTYuNC05Ni40LTk2LjRjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45TDU0LjMgMTAzYzkuNC05LjQgMjQuNi05LjQgMzMuOSAwbDEzNiAxMzZjOS41IDkuNCA5LjUgMjQuNi4xIDM0elwiPjwvcGF0aD48L3N2Zz5Qcm9tb8Onw6NvIGUgRXZlbnRvczxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctY2lyY2xlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNTYgOEMxMTkgOCA4IDExOSA4IDI1NnMxMTEgMjQ4IDI0OCAyNDggMjQ4LTExMSAyNDgtMjQ4UzM5MyA4IDI1NiA4elwiPjwvcGF0aD48L3N2Zz48L2J0bj5cbiAgICBcdCAgICAgICAgICAgICAgICAgICAgPGJ0biBocmVmPVwiLi90aGVtZXMvc3VwZXJ0di9cIj48c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWFuZ2xlLXJpZ2h0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yMjQuMyAyNzNsLTEzNiAxMzZjLTkuNCA5LjQtMjQuNiA5LjQtMzMuOSAwbC0yMi42LTIyLjZjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45bDk2LjQtOTYuNC05Ni40LTk2LjRjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45TDU0LjMgMTAzYzkuNC05LjQgMjQuNi05LjQgMzMuOSAwbDEzNiAxMzZjOS41IDkuNCA5LjUgMjQuNi4xIDM0elwiPjwvcGF0aD48L3N2Zz5FbWlzc29yYSBUVjxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctY2lyY2xlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNTYgOEMxMTkgOCA4IDExOSA4IDI1NnMxMTEgMjQ4IDI0OCAyNDggMjQ4LTExMSAyNDgtMjQ4UzM5MyA4IDI1NiA4elwiPjwvcGF0aD48L3N2Zz48L2J0bj5cbiAgICBcdCAgICAgICAgICAgICAgICAgICAgPGJ0biBjbGFzc05hbWU9XCJkaXNhYmxlXCI+PHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1hbmdsZS1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjI0LjMgMjczbC0xMzYgMTM2Yy05LjQgOS40LTI0LjYgOS40LTMzLjkgMGwtMjIuNi0yMi42Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOWw5Ni40LTk2LjQtOTYuNC05Ni40Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOUw1NC4zIDEwM2M5LjQtOS40IDI0LjYtOS40IDMzLjkgMGwxMzYgMTM2YzkuNSA5LjQgOS41IDI0LjYuMSAzNHpcIj48L3BhdGg+PC9zdmc+UsOhZGlvczxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctY2lyY2xlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNTYgOEMxMTkgOCA4IDExOSA4IDI1NnMxMTEgMjQ4IDI0OCAyNDggMjQ4LTExMSAyNDgtMjQ4UzM5MyA4IDI1NiA4elwiPjwvcGF0aD48L3N2Zz48L2J0bj5cbiAgICBcdCAgICAgICAgICAgICAgICA8L3N1Ym1lbnU+XG4gICAgXHQgICAgICAgICAgICA8L2J0bj5cbiAgICAgICAgICAgICAgICAgICAgPGJ0biBjbGFzc05hbWU9XCJzdWJtZW51LWhhcy1udW1iZXJzXCI+XG4gICAgICAgICAgICAgICAgICAgIFx0PHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1zdGFyXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yMjQgMjg4Yzc5LjUgMCAxNDQtNjQuNSAxNDQtMTQ0UzMwMy41IDAgMjI0IDAgODAgNjQuNSA4MCAxNDRzNjQuNSAxNDQgMTQ0IDE0NHptMC0yNDBjNTIuOSAwIDk2IDQzLjEgOTYgOTZzLTQzLjEgOTYtOTYgOTYtOTYtNDMuMS05Ni05NiA0My4xLTk2IDk2LTk2em04OS42IDI1NmMtMTEgMC0yMS44IDIuNi0zMi4yIDYuMi0xOCA2LjMtMzcuMyA5LjgtNTcuNCA5LjhzLTM5LjQtMy41LTU3LjQtOS44Yy0xMC40LTMuNi0yMS4yLTYuMi0zMi4yLTYuMkM2MC4yIDMwNCAwIDM2NC4yIDAgNDM4LjRWNDg4YzAgMTMuMyAxMC43IDI0IDI0IDI0czI0LTEwLjcgMjQtMjR2LTQ5LjZjMC00NS41IDM1LjQtODIuNCA4MC04NS44djUwYy0yMy4xIDYuOS00MCAyOC4xLTQwIDUzLjQgMCAzMC45IDI1LjEgNTYgNTYgNTZzNTYtMjUuMSA1Ni01NmMwLTI1LjMtMTYuOS00Ni41LTQwLTUzLjR2LTQ0LjdjMjAuOCA2LjMgNDIuMyAxMC4xIDY0IDEwLjEgMjEuOCAwIDQzLjItMy44IDY0LTEwLjF2MzYuM2MtMjguMiA3LjUtNDggMzQuNS00OCA2NC42VjQ4OGMwIDQuMiAxLjcgOC4zIDQuNyAxMS4zbDEwLjMgMTAuM2MzLjEgMy4xIDguMiAzLjEgMTEuMyAwbDExLjMtMTEuM2MzLjEtMy4xIDMuMS04LjIgMC0xMS4zbC01LjctNS43VjQ1NmMwLTE5LjQgMTcuNC0zNC44IDM3LjQtMzEuNiAxNS43IDIuNiAyNi42IDE3LjQgMjYuNiAzMy4zdjIzLjZsLTUuNyA1LjdjLTMuMSAzLjEtMy4xIDguMiAwIDExLjNsMTEuMyAxMS4zYzMuMSAzLjEgOC4yIDMuMSAxMS4zIDBsMTAuMy0xMC4zYzMtMyA0LjctNy4xIDQuNy0xMS4zdi0zMmMwLTI5LjctMjAuNS01NC41LTQ4LTYxLjZ2LTQxLjdjNDQuNiAzLjMgODAgNDAuMyA4MCA4NS44VjQ4OGMwIDEzLjMgMTAuNyAyNCAyNCAyNHMyNC0xMC43IDI0LTI0di00OS42Yy4yLTc0LjItNjAtMTM0LjQtMTM0LjItMTM0LjR6TTE2OCA0NTZjMCAxMy4zLTEwLjcgMjQtMjQgMjRzLTI0LTEwLjctMjQtMjQgMTAuNy0yNCAyNC0yNCAyNCAxMC43IDI0IDI0elwiPjwvcGF0aD48L3N2Zz5Qcm9maXNzaW9uYWxzPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy10ZXJtaW5hbFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMzQuNDk1IDM2LjQ2NWwyMTEuMDUxIDIxMS4wNWM0LjY4NiA0LjY4NiA0LjY4NiAxMi4yODQgMCAxNi45NzFMMzQuNDk1IDQ3NS41MzVjLTQuNjg2IDQuNjg2LTEyLjI4NCA0LjY4Ni0xNi45NyAwbC03LjA3MS03LjA3Yy00LjY4Ni00LjY4Ni00LjY4Ni0xMi4yODQgMC0xNi45NzFMMjA1Ljk0NyAyNTYgMTAuNDU0IDYwLjUwNmMtNC42ODYtNC42ODYtNC42ODYtMTIuMjg0IDAtMTYuOTcxbDcuMDcxLTcuMDdjNC42ODYtNC42ODcgMTIuMjg0LTQuNjg3IDE2Ljk3IDB6TTY0MCA0Njh2LTEwYzAtNi42MjctNS4zNzMtMTItMTItMTJIMzAwYy02LjYyNyAwLTEyIDUuMzczLTEyIDEydjEwYzAgNi42MjcgNS4zNzMgMTIgMTIgMTJoMzI4YzYuNjI3IDAgMTItNS4zNzMgMTItMTJ6XCI+PC9wYXRoPjwvc3ZnPjxjb3VudD42PC9jb3VudD5cbiAgICBcdCAgICAgICAgICAgICAgICA8c3VibWVudT5cbiAgICBcdCAgICAgICAgICAgICAgICAgICAgPGJ0biBjbGFzc05hbWU9XCJkaXNhYmxlXCI+PHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1hbmdsZS1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjI0LjMgMjczbC0xMzYgMTM2Yy05LjQgOS40LTI0LjYgOS40LTMzLjkgMGwtMjIuNi0yMi42Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOWw5Ni40LTk2LjQtOTYuNC05Ni40Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOUw1NC4zIDEwM2M5LjQtOS40IDI0LjYtOS40IDMzLjkgMGwxMzYgMTM2YzkuNSA5LjQgOS41IDI0LjYuMSAzNHpcIj48L3BhdGg+PC9zdmc+QXRvcmVzPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6XCI+PC9wYXRoPjwvc3ZnPjwvYnRuPlxuICAgIFx0ICAgICAgICAgICAgICAgICAgICA8YnRuIGhyZWY9XCIuL3RoZW1lcy9jYW50b3Jlcy9cIj48c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWFuZ2xlLXJpZ2h0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yMjQuMyAyNzNsLTEzNiAxMzZjLTkuNCA5LjQtMjQuNiA5LjQtMzMuOSAwbC0yMi42LTIyLjZjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45bDk2LjQtOTYuNC05Ni40LTk2LjRjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45TDU0LjMgMTAzYzkuNC05LjQgMjQuNi05LjQgMzMuOSAwbDEzNiAxMzZjOS41IDkuNCA5LjUgMjQuNi4xIDM0elwiPjwvcGF0aD48L3N2Zz5DYW50b3JlczxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctY2lyY2xlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNTYgOEMxMTkgOCA4IDExOSA4IDI1NnMxMTEgMjQ4IDI0OCAyNDggMjQ4LTExMSAyNDgtMjQ4UzM5MyA4IDI1NiA4elwiPjwvcGF0aD48L3N2Zz48L2J0bj5cbiAgICBcdCAgICAgICAgICAgICAgICAgICAgPGJ0biBjbGFzc05hbWU9XCJkaXNhYmxlXCI+PHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1hbmdsZS1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjI0LjMgMjczbC0xMzYgMTM2Yy05LjQgOS40LTI0LjYgOS40LTMzLjkgMGwtMjIuNi0yMi42Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOWw5Ni40LTk2LjQtOTYuNC05Ni40Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOUw1NC4zIDEwM2M5LjQtOS40IDI0LjYtOS40IDMzLjkgMGwxMzYgMTM2YzkuNSA5LjQgOS41IDI0LjYuMSAzNHpcIj48L3BhdGg+PC9zdmc+RGVudGlzdGFzPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6XCI+PC9wYXRoPjwvc3ZnPjwvYnRuPlxuICAgIFx0ICAgICAgICAgICAgICAgICAgICA8YnRuIGNsYXNzTmFtZT1cImRpc2FibGVcIj48c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWFuZ2xlLXJpZ2h0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yMjQuMyAyNzNsLTEzNiAxMzZjLTkuNCA5LjQtMjQuNiA5LjQtMzMuOSAwbC0yMi42LTIyLjZjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45bDk2LjQtOTYuNC05Ni40LTk2LjRjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45TDU0LjMgMTAzYzkuNC05LjQgMjQuNi05LjQgMzMuOSAwbDEzNiAxMzZjOS41IDkuNCA5LjUgMjQuNi4xIDM0elwiPjwvcGF0aD48L3N2Zz5BcnF1aXRldG9zPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6XCI+PC9wYXRoPjwvc3ZnPjwvYnRuPlxuICAgIFx0ICAgICAgICAgICAgICAgICAgICA8YnRuIGNsYXNzTmFtZT1cImRpc2FibGVcIj48c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWFuZ2xlLXJpZ2h0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yMjQuMyAyNzNsLTEzNiAxMzZjLTkuNCA5LjQtMjQuNiA5LjQtMzMuOSAwbC0yMi42LTIyLjZjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45bDk2LjQtOTYuNC05Ni40LTk2LjRjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45TDU0LjMgMTAzYzkuNC05LjQgMjQuNi05LjQgMzMuOSAwbDEzNiAxMzZjOS41IDkuNCA5LjUgMjQuNi4xIDM0elwiPjwvcGF0aD48L3N2Zz5BZHZvZ2Fkb3M8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWNpcmNsZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjU2IDhDMTE5IDggOCAxMTkgOCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzOTMgOCAyNTYgOHpcIj48L3BhdGg+PC9zdmc+PC9idG4+XG4gICAgXHQgICAgICAgICAgICAgICAgICAgIDxidG4gY2xhc3NOYW1lPVwiZGlzYWJsZVwiPjxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctYW5nbGUtcmlnaHRcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIwIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTIyNC4zIDI3M2wtMTM2IDEzNmMtOS40IDkuNC0yNC42IDkuNC0zMy45IDBsLTIyLjYtMjIuNmMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlsOTYuNC05Ni40LTk2LjQtOTYuNGMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlMNTQuMyAxMDNjOS40LTkuNCAyNC42LTkuNCAzMy45IDBsMTM2IDEzNmM5LjUgOS40IDkuNSAyNC42LjEgMzR6XCI+PC9wYXRoPjwvc3ZnPlByb2dyYW1hZG9yZXM8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWNpcmNsZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjU2IDhDMTE5IDggOCAxMTkgOCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzOTMgOCAyNTYgOHpcIj48L3BhdGg+PC9zdmc+PC9idG4+XG4gICAgXHQgICAgICAgICAgICAgICAgPC9zdWJtZW51PlxuICAgIFx0ICAgICAgICAgICAgPC9idG4+XG4gICAgICAgICAgICAgICAgICAgIDxidG4gY2xhc3NOYW1lPVwic3VibWVudS1oYXMtbnVtYmVyc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1zdG9yZXNcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIwIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTYzNS43IDE3Ni4xbC05MS40LTE2MEM1MzguNiA2LjIgNTI4IDAgNTE2LjUgMGgtMzkzQzExMiAwIDEwMS40IDYuMiA5NS43IDE2LjFsLTkxLjQgMTYwQy03LjkgMTk3LjUgNy40IDIyNCAzMiAyMjRoMzJ2MjU0LjVDNjQgNDk3IDc4LjMgNTEyIDk2IDUxMmgyNTZjMTcuNyAwIDMyLTE1IDMyLTMzLjVWMjI0aDE2MHYyODBjMCA0LjQgMy42IDggOCA4aDE2YzQuNCAwIDgtMy42IDgtOFYyMjRoMzJjMjQuNiAwIDM5LjktMjYuNSAyNy43LTQ3Ljl6TTM1MiA0NzguNWMwIC45LS4zIDEuNC0uMiAxLjVsLTI1NS4yLjJzLS42LS41LS42LTEuN1YzNTJoMjU2djEyNi41em0wLTE1OC41SDk2di05NmgyNTZ2OTZ6TTMyLjEgMTkybDkxLjQtMTYwaDM5M0w2MDggMTkySDMyLjF6XCI+PC9wYXRoPjwvc3ZnPlN0b3JlczxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctdGVybWluYWxcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIwIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTM0LjQ5NSAzNi40NjVsMjExLjA1MSAyMTEuMDVjNC42ODYgNC42ODYgNC42ODYgMTIuMjg0IDAgMTYuOTcxTDM0LjQ5NSA0NzUuNTM1Yy00LjY4NiA0LjY4Ni0xMi4yODQgNC42ODYtMTYuOTcgMGwtNy4wNzEtNy4wN2MtNC42ODYtNC42ODYtNC42ODYtMTIuMjg0IDAtMTYuOTcxTDIwNS45NDcgMjU2IDEwLjQ1NCA2MC41MDZjLTQuNjg2LTQuNjg2LTQuNjg2LTEyLjI4NCAwLTE2Ljk3MWw3LjA3MS03LjA3YzQuNjg2LTQuNjg3IDEyLjI4NC00LjY4NyAxNi45NyAwek02NDAgNDY4di0xMGMwLTYuNjI3LTUuMzczLTEyLTEyLTEySDMwMGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnYxMGMwIDYuNjI3IDUuMzczIDEyIDEyIDEyaDMyOGM2LjYyNyAwIDEyLTUuMzczIDEyLTEyelwiPjwvcGF0aD48L3N2Zz48Y291bnQ+NzwvY291bnQ+XG4gICAgXHQgICAgICAgICAgICAgICAgPHN1Ym1lbnU+XG4gICAgXHQgICAgICAgICAgICAgICAgICAgIDxidG4gaHJlZj1cIi4vdGhlbWVzL21lcmNhZG9saXZyZS9cIj48c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWFuZ2xlLXJpZ2h0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yMjQuMyAyNzNsLTEzNiAxMzZjLTkuNCA5LjQtMjQuNiA5LjQtMzMuOSAwbC0yMi42LTIyLjZjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45bDk2LjQtOTYuNC05Ni40LTk2LjRjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45TDU0LjMgMTAzYzkuNC05LjQgMjQuNi05LjQgMzMuOSAwbDEzNiAxMzZjOS41IDkuNCA5LjUgMjQuNi4xIDM0elwiPjwvcGF0aD48L3N2Zz5NZXJjYWRvIExpdnJlPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6XCI+PC9wYXRoPjwvc3ZnPjwvYnRuPlxuICAgIFx0ICAgICAgICAgICAgICAgICAgICA8YnRuIGNsYXNzTmFtZT1cImRpc2FibGVcIj48c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWFuZ2xlLXJpZ2h0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yMjQuMyAyNzNsLTEzNiAxMzZjLTkuNCA5LjQtMjQuNiA5LjQtMzMuOSAwbC0yMi42LTIyLjZjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45bDk2LjQtOTYuNC05Ni40LTk2LjRjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45TDU0LjMgMTAzYzkuNC05LjQgMjQuNi05LjQgMzMuOSAwbDEzNiAxMzZjOS41IDkuNCA5LjUgMjQuNi4xIDM0elwiPjwvcGF0aD48L3N2Zz5JbmZvcm3DoXRpY2E8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWNpcmNsZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjU2IDhDMTE5IDggOCAxMTkgOCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzOTMgOCAyNTYgOHpcIj48L3BhdGg+PC9zdmc+PC9idG4+XG4gICAgXHQgICAgICAgICAgICAgICAgICAgIDxidG4gY2xhc3NOYW1lPVwiZGlzYWJsZVwiPjxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctYW5nbGUtcmlnaHRcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIwIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTIyNC4zIDI3M2wtMTM2IDEzNmMtOS40IDkuNC0yNC42IDkuNC0zMy45IDBsLTIyLjYtMjIuNmMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlsOTYuNC05Ni40LTk2LjQtOTYuNGMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlMNTQuMyAxMDNjOS40LTkuNCAyNC42LTkuNCAzMy45IDBsMTM2IDEzNmM5LjUgOS40IDkuNSAyNC42LjEgMzR6XCI+PC9wYXRoPjwvc3ZnPkNvbnN0cnXDp8OjbzxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctY2lyY2xlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNTYgOEMxMTkgOCA4IDExOSA4IDI1NnMxMTEgMjQ4IDI0OCAyNDggMjQ4LTExMSAyNDgtMjQ4UzM5MyA4IDI1NiA4elwiPjwvcGF0aD48L3N2Zz48L2J0bj5cbiAgICBcdCAgICAgICAgICAgICAgICAgICAgPGJ0biBjbGFzc05hbWU9XCJkaXNhYmxlXCI+PHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1hbmdsZS1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjI0LjMgMjczbC0xMzYgMTM2Yy05LjQgOS40LTI0LjYgOS40LTMzLjkgMGwtMjIuNi0yMi42Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOWw5Ni40LTk2LjQtOTYuNC05Ni40Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOUw1NC4zIDEwM2M5LjQtOS40IDI0LjYtOS40IDMzLjkgMGwxMzYgMTM2YzkuNSA5LjQgOS41IDI0LjYuMSAzNHpcIj48L3BhdGg+PC9zdmc+Q2Fsw6dhZG9zPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6XCI+PC9wYXRoPjwvc3ZnPjwvYnRuPlxuICAgIFx0ICAgICAgICAgICAgICAgICAgICA8YnRuIGhyZWY9XCIuL3RoZW1lcy9jZWxtYXIvXCI+PHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1hbmdsZS1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjI0LjMgMjczbC0xMzYgMTM2Yy05LjQgOS40LTI0LjYgOS40LTMzLjkgMGwtMjIuNi0yMi42Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOWw5Ni40LTk2LjQtOTYuNC05Ni40Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOUw1NC4zIDEwM2M5LjQtOS40IDI0LjYtOS40IDMzLjkgMGwxMzYgMTM2YzkuNSA5LjQgOS41IDI0LjYuMSAzNHpcIj48L3BhdGg+PC9zdmc+UGxhbmVqYWRvczxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctY2lyY2xlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNTYgOEMxMTkgOCA4IDExOSA4IDI1NnMxMTEgMjQ4IDI0OCAyNDggMjQ4LTExMSAyNDgtMjQ4UzM5MyA4IDI1NiA4elwiPjwvcGF0aD48L3N2Zz48L2J0bj5cbiAgICBcdCAgICAgICAgICAgICAgICAgICAgPGJ0biBjbGFzc05hbWU9XCJkaXNhYmxlXCI+PHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1hbmdsZS1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjI0LjMgMjczbC0xMzYgMTM2Yy05LjQgOS40LTI0LjYgOS40LTMzLjkgMGwtMjIuNi0yMi42Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOWw5Ni40LTk2LjQtOTYuNC05Ni40Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOUw1NC4zIDEwM2M5LjQtOS40IDI0LjYtOS40IDMzLjkgMGwxMzYgMTM2YzkuNSA5LjQgOS41IDI0LjYuMSAzNHpcIj48L3BhdGg+PC9zdmc+Um91cGFzPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6XCI+PC9wYXRoPjwvc3ZnPjwvYnRuPlxuICAgIFx0ICAgICAgICAgICAgICAgIDwvc3VibWVudT5cbiAgICBcdCAgICAgICAgICAgIDwvYnRuPlxuICAgICAgICAgICAgICAgICAgICA8YnRuIGNsYXNzTmFtZT1cInN1Ym1lbnUtaGFzLW51bWJlcnNcIj5cbiAgICAgICAgICAgICAgICAgICAgXHQ8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLXJlc3RhdXJhbnRlc1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMzQ0LjEgNDcwLjNsMTQuMi0xNjQuOGMtNDIuMS0zMy4xLTcwLjQtNzctNzAuNC0xMjkuNUMyODggODEuNyAzNzYuMSAwIDQ0MCAwYzIyLjEgMCA0MCAxNy4zIDQwIDM4LjV2NDM1YzAgMjEuMi0xNy45IDM4LjUtNDAgMzguNWgtNTZjLTIyLjggMC00MS44LTE4LjctMzkuOS00MS43ek0zMjAgMTc2YzAgNTEgMzIuMiA4NS41IDcxLjggMTE0LjVMMzc2IDQ3My4xYy0uMyAzLjcgMy40IDYuOSA4IDYuOWg1NmM0LjMgMCA4LTMgOC02LjV2LTQzNWMwLTMuNS0zLjctNi41LTgtNi41LTQ0LjYgMC0xMjAgNjUuOC0xMjAgMTQ0ek0yNDAuNyAzMy44QzIzNy40IDE0LjMgMjE5LjUgMCAxOTQuNiAwYy0xMS45IDAtMjQuMSAzLjQtMzMuMyAxMS4yQzE1Mi45IDQuMSAxNDEuMyAwIDEyOCAwcy0yNC45IDQuMS0zMy4zIDExLjJDODUuNSAzLjQgNzMuMyAwIDYxLjQgMCAzNi4yIDAgMTguNiAxNC41IDE1LjMgMzMuOCAxMy41IDQzLjIgMCAxMTguNCAwIDE0OS45YzAgNTAuOSAyNi43IDkxLjYgNzEgMTEwLjdMNTkuNiA0NzEuNEM1OC40IDQ5My40IDc1LjkgNTEyIDk4IDUxMmg2MGMyMiAwIDM5LjYtMTguNSAzOC40LTQwLjZMMTg1IDI2MC42YzQ0LjItMTkuMSA3MS01OS44IDcxLTExMC43IDAtMzEuNS0xMy41LTEwNi43LTE1LjMtMTE2LjF6TTE1Mi4zIDI0MGwxMi4yIDIzMy4xYy4yIDMuNy0yLjcgNi45LTYuNSA2LjlIOThjLTMuNyAwLTYuNy0zLjEtNi41LTYuOUwxMDMuNyAyNDBDNjEuMyAyMzEuMiAzMiAxOTcgMzIgMTQ5LjljMC0yOS43IDE0LjgtMTEwLjYgMTQuOC0xMTAuNiAxLjYtOS45IDI4LjMtOS43IDI5LjUuMlYxNjJjLjkgMTEuNSAyOC4yIDExLjcgMjkuNS4ybDcuNC0xMjIuOWMxLjYtOS43IDI3LjktOS43IDI5LjUgMGw3LjQgMTIyLjljMS4zIDExLjQgMjguNiAxMS4yIDI5LjUtLjJWMzkuNmMxLjItOS45IDI3LjktMTAuMSAyOS41LS4yIDAgMCAxNC44IDgwLjkgMTQuOCAxMTAuNi4xIDQ2LjgtMjkgODEuMi03MS42IDkwelwiPjwvcGF0aD48L3N2Zz5BbGltZW50YcOnw6NvPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy10ZXJtaW5hbFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMzQuNDk1IDM2LjQ2NWwyMTEuMDUxIDIxMS4wNWM0LjY4NiA0LjY4NiA0LjY4NiAxMi4yODQgMCAxNi45NzFMMzQuNDk1IDQ3NS41MzVjLTQuNjg2IDQuNjg2LTEyLjI4NCA0LjY4Ni0xNi45NyAwbC03LjA3MS03LjA3Yy00LjY4Ni00LjY4Ni00LjY4Ni0xMi4yODQgMC0xNi45NzFMMjA1Ljk0NyAyNTYgMTAuNDU0IDYwLjUwNmMtNC42ODYtNC42ODYtNC42ODYtMTIuMjg0IDAtMTYuOTcxbDcuMDcxLTcuMDdjNC42ODYtNC42ODcgMTIuMjg0LTQuNjg3IDE2Ljk3IDB6TTY0MCA0Njh2LTEwYzAtNi42MjctNS4zNzMtMTItMTItMTJIMzAwYy02LjYyNyAwLTEyIDUuMzczLTEyIDEydjEwYzAgNi42MjcgNS4zNzMgMTIgMTIgMTJoMzI4YzYuNjI3IDAgMTItNS4zNzMgMTItMTJ6XCI+PC9wYXRoPjwvc3ZnPjxjb3VudD41PC9jb3VudD5cbiAgICBcdCAgICAgICAgICAgICAgICA8c3VibWVudT5cbiAgICBcdCAgICAgICAgICAgICAgICAgICAgPGJ0biBjbGFzc05hbWU9XCJkaXNhYmxlXCI+PHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1hbmdsZS1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjI0LjMgMjczbC0xMzYgMTM2Yy05LjQgOS40LTI0LjYgOS40LTMzLjkgMGwtMjIuNi0yMi42Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOWw5Ni40LTk2LjQtOTYuNC05Ni40Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOUw1NC4zIDEwM2M5LjQtOS40IDI0LjYtOS40IDMzLjkgMGwxMzYgMTM2YzkuNSA5LjQgOS41IDI0LjYuMSAzNHpcIj48L3BhdGg+PC9zdmc+UmVzdGF1cmFudGVzPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6XCI+PC9wYXRoPjwvc3ZnPjwvYnRuPlxuICAgIFx0ICAgICAgICAgICAgICAgICAgICA8YnRuIGNsYXNzTmFtZT1cImRpc2FibGVcIj48c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWFuZ2xlLXJpZ2h0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yMjQuMyAyNzNsLTEzNiAxMzZjLTkuNCA5LjQtMjQuNiA5LjQtMzMuOSAwbC0yMi42LTIyLjZjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45bDk2LjQtOTYuNC05Ni40LTk2LjRjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45TDU0LjMgMTAzYzkuNC05LjQgMjQuNi05LjQgMzMuOSAwbDEzNiAxMzZjOS41IDkuNCA5LjUgMjQuNi4xIDM0elwiPjwvcGF0aD48L3N2Zz5DYWZldGVyaWFzPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6XCI+PC9wYXRoPjwvc3ZnPjwvYnRuPlxuICAgIFx0ICAgICAgICAgICAgICAgICAgICA8YnRuIGhyZWY9XCIuL3RoZW1lcy9jZXJ2ZWphcmlhcy9cIj48c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWFuZ2xlLXJpZ2h0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yMjQuMyAyNzNsLTEzNiAxMzZjLTkuNCA5LjQtMjQuNiA5LjQtMzMuOSAwbC0yMi42LTIyLjZjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45bDk2LjQtOTYuNC05Ni40LTk2LjRjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45TDU0LjMgMTAzYzkuNC05LjQgMjQuNi05LjQgMzMuOSAwbDEzNiAxMzZjOS41IDkuNCA5LjUgMjQuNi4xIDM0elwiPjwvcGF0aD48L3N2Zz5DZXJ2ZWphcmlhczxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctY2lyY2xlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNTYgOEMxMTkgOCA4IDExOSA4IDI1NnMxMTEgMjQ4IDI0OCAyNDggMjQ4LTExMSAyNDgtMjQ4UzM5MyA4IDI1NiA4elwiPjwvcGF0aD48L3N2Zz48L2J0bj5cbiAgICBcdCAgICAgICAgICAgICAgICAgICAgPGJ0biBjbGFzc05hbWU9XCJkaXNhYmxlXCI+PHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1hbmdsZS1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjI0LjMgMjczbC0xMzYgMTM2Yy05LjQgOS40LTI0LjYgOS40LTMzLjkgMGwtMjIuNi0yMi42Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOWw5Ni40LTk2LjQtOTYuNC05Ni40Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOUw1NC4zIDEwM2M5LjQtOS40IDI0LjYtOS40IDMzLjkgMGwxMzYgMTM2YzkuNSA5LjQgOS41IDI0LjYuMSAzNHpcIj48L3BhdGg+PC9zdmc+UGl6emFyaWFzPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6XCI+PC9wYXRoPjwvc3ZnPjwvYnRuPlxuICAgIFx0ICAgICAgICAgICAgICAgICAgICA8YnRuIGNsYXNzTmFtZT1cImRpc2FibGVcIj48c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWFuZ2xlLXJpZ2h0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yMjQuMyAyNzNsLTEzNiAxMzZjLTkuNCA5LjQtMjQuNiA5LjQtMzMuOSAwbC0yMi42LTIyLjZjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45bDk2LjQtOTYuNC05Ni40LTk2LjRjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45TDU0LjMgMTAzYzkuNC05LjQgMjQuNi05LjQgMzMuOSAwbDEzNiAxMzZjOS41IDkuNCA5LjUgMjQuNi4xIDM0elwiPjwvcGF0aD48L3N2Zz5Tb3J2ZXRlcmlhczxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctY2lyY2xlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNTYgOEMxMTkgOCA4IDExOSA4IDI1NnMxMTEgMjQ4IDI0OCAyNDggMjQ4LTExMSAyNDgtMjQ4UzM5MyA4IDI1NiA4elwiPjwvcGF0aD48L3N2Zz48L2J0bj5cbiAgICBcdCAgICAgICAgICAgICAgICA8L3N1Ym1lbnU+XG4gICAgXHQgICAgICAgICAgICA8L2J0bj5cbiAgICAgICAgICAgICAgICAgICAgPGJ0biBjbGFzc05hbWU9XCJzdWJtZW51LWhhcy1udW1iZXJzXCI+XG4gICAgICAgICAgICAgICAgICAgIFx0PHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1zdG9yZXNcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIwIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTYzNS43IDE3Ni4xbC05MS40LTE2MEM1MzguNiA2LjIgNTI4IDAgNTE2LjUgMGgtMzkzQzExMiAwIDEwMS40IDYuMiA5NS43IDE2LjFsLTkxLjQgMTYwQy03LjkgMTk3LjUgNy40IDIyNCAzMiAyMjRoMzJ2MjU0LjVDNjQgNDk3IDc4LjMgNTEyIDk2IDUxMmgyNTZjMTcuNyAwIDMyLTE1IDMyLTMzLjVWMjI0aDE2MHYyODBjMCA0LjQgMy42IDggOCA4aDE2YzQuNCAwIDgtMy42IDgtOFYyMjRoMzJjMjQuNiAwIDM5LjktMjYuNSAyNy43LTQ3Ljl6TTM1MiA0NzguNWMwIC45LS4zIDEuNC0uMiAxLjVsLTI1NS4yLjJzLS42LS41LS42LTEuN1YzNTJoMjU2djEyNi41em0wLTE1OC41SDk2di05NmgyNTZ2OTZ6TTMyLjEgMTkybDkxLjQtMTYwaDM5M0w2MDggMTkySDMyLjF6XCI+PC9wYXRoPjwvc3ZnPkJlbGV6YTxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctdGVybWluYWxcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIwIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTM0LjQ5NSAzNi40NjVsMjExLjA1MSAyMTEuMDVjNC42ODYgNC42ODYgNC42ODYgMTIuMjg0IDAgMTYuOTcxTDM0LjQ5NSA0NzUuNTM1Yy00LjY4NiA0LjY4Ni0xMi4yODQgNC42ODYtMTYuOTcgMGwtNy4wNzEtNy4wN2MtNC42ODYtNC42ODYtNC42ODYtMTIuMjg0IDAtMTYuOTcxTDIwNS45NDcgMjU2IDEwLjQ1NCA2MC41MDZjLTQuNjg2LTQuNjg2LTQuNjg2LTEyLjI4NCAwLTE2Ljk3MWw3LjA3MS03LjA3YzQuNjg2LTQuNjg3IDEyLjI4NC00LjY4NyAxNi45NyAwek02NDAgNDY4di0xMGMwLTYuNjI3LTUuMzczLTEyLTEyLTEySDMwMGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnYxMGMwIDYuNjI3IDUuMzczIDEyIDEyIDEyaDMyOGM2LjYyNyAwIDEyLTUuMzczIDEyLTEyelwiPjwvcGF0aD48L3N2Zz48Y291bnQ+MjwvY291bnQ+XG4gICAgXHQgICAgICAgICAgICAgICAgPHN1Ym1lbnU+XG4gICAgXHQgICAgICAgICAgICAgICAgICAgIDxidG4gY2xhc3NOYW1lPVwiZGlzYWJsZVwiPjxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctYW5nbGUtcmlnaHRcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIwIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTIyNC4zIDI3M2wtMTM2IDEzNmMtOS40IDkuNC0yNC42IDkuNC0zMy45IDBsLTIyLjYtMjIuNmMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlsOTYuNC05Ni40LTk2LjQtOTYuNGMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlMNTQuMyAxMDNjOS40LTkuNCAyNC42LTkuNCAzMy45IDBsMTM2IDEzNmM5LjUgOS40IDkuNSAyNC42LjEgMzR6XCI+PC9wYXRoPjwvc3ZnPlNhbMOjbyBkZSBDYWJlbGVyZWlybzxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctY2lyY2xlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNTYgOEMxMTkgOCA4IDExOSA4IDI1NnMxMTEgMjQ4IDI0OCAyNDggMjQ4LTExMSAyNDgtMjQ4UzM5MyA4IDI1NiA4elwiPjwvcGF0aD48L3N2Zz48L2J0bj5cbiAgICBcdCAgICAgICAgICAgICAgICAgICAgPGJ0biBjbGFzc05hbWU9XCJkaXNhYmxlXCI+PHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1hbmdsZS1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjI0LjMgMjczbC0xMzYgMTM2Yy05LjQgOS40LTI0LjYgOS40LTMzLjkgMGwtMjIuNi0yMi42Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOWw5Ni40LTk2LjQtOTYuNC05Ni40Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOUw1NC4zIDEwM2M5LjQtOS40IDI0LjYtOS40IDMzLjkgMGwxMzYgMTM2YzkuNSA5LjQgOS41IDI0LjYuMSAzNHpcIj48L3BhdGg+PC9zdmc+QWx1Z3VlbCBkZSBSb3VwYXM8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWNpcmNsZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjU2IDhDMTE5IDggOCAxMTkgOCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzOTMgOCAyNTYgOHpcIj48L3BhdGg+PC9zdmc+PC9idG4+XG4gICAgXHQgICAgICAgICAgICAgICAgICAgIDxidG4gY2xhc3NOYW1lPVwiZGlzYWJsZVwiPjxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctYW5nbGUtcmlnaHRcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIwIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTIyNC4zIDI3M2wtMTM2IDEzNmMtOS40IDkuNC0yNC42IDkuNC0zMy45IDBsLTIyLjYtMjIuNmMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlsOTYuNC05Ni40LTk2LjQtOTYuNGMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlMNTQuMyAxMDNjOS40LTkuNCAyNC42LTkuNCAzMy45IDBsMTM2IDEzNmM5LjUgOS40IDkuNSAyNC42LjEgMzR6XCI+PC9wYXRoPjwvc3ZnPkNvc23DqXRpY29zPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6XCI+PC9wYXRoPjwvc3ZnPjwvYnRuPlxuICAgIFx0ICAgICAgICAgICAgICAgIDwvc3VibWVudT5cbiAgICBcdCAgICAgICAgICAgIDwvYnRuPlxuICAgICAgICAgICAgICAgIDwvbWVudWl0ZW1zPlxuICAgICAgICAgICAgICAgIDxzaWRlYmFyZGl2aWRlcj48L3NpZGViYXJkaXZpZGVyPlxuICAgICAgICAgICAgICAgIDxzaWRlYmFyc2VwYXJhdG9yPkZBTEUgQ09OT1NDTzwvc2lkZWJhcnNlcGFyYXRvcj5cbiAgICAgICAgICAgICAgICA8bWVudWNvbnRhY3Q+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJ0ZWw6MTEgOTMwMTggODM2M1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1waG9uZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNNDg3LjggMjQuMUwzODcgLjhjLTE0LjctMy40LTI5LjggNC4yLTM1LjggMTguMWwtNDYuNSAxMDguNWMtNS41IDEyLjctMS44IDI3LjcgOC45IDM2LjVsNTMuOSA0NC4xYy0zNCA2OS4yLTkwLjMgMTI1LjYtMTU5LjYgMTU5LjZsLTQ0LjEtNTMuOWMtOC44LTEwLjctMjMuOC0xNC40LTM2LjUtOC45TDE4LjkgMzUxLjNDNSAzNTcuMy0yLjYgMzcyLjMuOCAzODdMMjQgNDg3LjdDMjcuMyA1MDIgMzkuOSA1MTIgNTQuNSA1MTIgMzA2LjcgNTEyIDUxMiAzMDcuOCA1MTIgNTQuNWMwLTE0LjYtMTAtMjcuMi0yNC4yLTMwLjR6TTU1LjEgNDgwbC0yMy05OS42IDEwNy40LTQ2IDU5LjUgNzIuOGMxMDMuNi00OC42IDE1OS43LTEwNC45IDIwOC4xLTIwOC4xbC03Mi44LTU5LjUgNDYtMTA3LjQgOTkuNiAyM0M0NzkuNyAyODkuNyAyODkuNiA0NzkuNyA1NS4xIDQ4MHpcIj48L3BhdGg+PC9zdmc+TGlnYcOnw6NvPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6XCI+PC9wYXRoPjwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2FwaS53aGF0c2FwcC5jb20vc2VuZD9waG9uZT01NTExOTMwMTg4MzYzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLXdoYXRzYXBwXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0zODAuOSA5Ny4xQzMzOSA1NS4xIDI4My4yIDMyIDIyMy45IDMyYy0xMjIuNCAwLTIyMiA5OS42LTIyMiAyMjIgMCAzOS4xIDEwLjIgNzcuMyAyOS42IDExMUwwIDQ4MGwxMTcuNy0zMC45YzMyLjQgMTcuNyA2OC45IDI3IDEwNi4xIDI3aC4xYzEyMi4zIDAgMjI0LjEtOTkuNiAyMjQuMS0yMjIgMC01OS4zLTI1LjItMTE1LTY3LjEtMTU3em0tMTU3IDM0MS42Yy0zMy4yIDAtNjUuNy04LjktOTQtMjUuN2wtNi43LTQtNjkuOCAxOC4zTDcyIDM1OS4ybC00LjQtN2MtMTguNS0yOS40LTI4LjItNjMuMy0yOC4yLTk4LjIgMC0xMDEuNyA4Mi44LTE4NC41IDE4NC42LTE4NC41IDQ5LjMgMCA5NS42IDE5LjIgMTMwLjQgNTQuMSAzNC44IDM0LjkgNTYuMiA4MS4yIDU2LjEgMTMwLjUgMCAxMDEuOC04NC45IDE4NC42LTE4Ni42IDE4NC42em0xMDEuMi0xMzguMmMtNS41LTIuOC0zMi44LTE2LjItMzcuOS0xOC01LjEtMS45LTguOC0yLjgtMTIuNSAyLjgtMy43IDUuNi0xNC4zIDE4LTE3LjYgMjEuOC0zLjIgMy43LTYuNSA0LjItMTIgMS40LTMyLjYtMTYuMy01NC0yOS4xLTc1LjUtNjYtNS43LTkuOCA1LjctOS4xIDE2LjMtMzAuMyAxLjgtMy43LjktNi45LS41LTkuNy0xLjQtMi44LTEyLjUtMzAuMS0xNy4xLTQxLjItNC41LTEwLjgtOS4xLTkuMy0xMi41LTkuNS0zLjItLjItNi45LS4yLTEwLjYtLjItMy43IDAtOS43IDEuNC0xNC44IDYuOS01LjEgNS42LTE5LjQgMTktMTkuNCA0Ni4zIDAgMjcuMyAxOS45IDUzLjcgMjIuNiA1Ny40IDIuOCAzLjcgMzkuMSA1OS43IDk0LjggODMuOCAzNS4yIDE1LjIgNDkgMTYuNSA2Ni42IDEzLjkgMTAuNy0xLjYgMzIuOC0xMy40IDM3LjQtMjYuNCA0LjYtMTMgNC42LTI0LjEgMy4yLTI2LjQtMS4zLTIuNS01LTMuOS0xMC41LTYuNnpcIj48L3BhdGg+PC9zdmc+V2hhdHNhcHA8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWNpcmNsZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjU2IDhDMTE5IDggOCAxMTkgOCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzOTMgOCAyNTYgOHpcIj48L3BhdGg+PC9zdmc+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIm1haWx0bzpjb250YWN0QGF2bi5zeXN0ZW1zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLW1haWxcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIwIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOC45NDEgOCA4IDExOC45MTkgOCAyNTZjMCAxMzcuMDU4IDExMC45MTkgMjQ4IDI0OCAyNDggNTIuOTI1IDAgMTA0LjY4LTE3LjA3OCAxNDcuMDkyLTQ4LjMxOSA1LjUwMS00LjA1MiA2LjQyMy0xMS45MjQgMi4wOTUtMTcuMjExbC01LjA3NC02LjE5OGMtNC4wMTgtNC45MDktMTEuMTkzLTUuODgzLTE2LjMwNy0yLjEyOUMzNDYuOTMgNDU3LjIwOCAzMDEuOTc0IDQ3MiAyNTYgNDcyYy0xMTkuMzczIDAtMjE2LTk2LjYwNy0yMTYtMjE2IDAtMTE5LjM3NSA5Ni42MDctMjE2IDIxNi0yMTYgMTE4LjQ0NSAwIDIxNiA4MC4wMjQgMjE2IDIwMCAwIDcyLjg3My01Mi44MTkgMTA4LjI0MS0xMTYuMDY1IDEwOC4yNDEtMTkuNzM0IDAtMjMuNjk1LTEwLjgxNi0xOS41MDMtMzMuODY4bDMyLjA3LTE2NC4wNzFjMS40NDktNy40MTEtNC4yMjYtMTQuMzAyLTExLjc3Ny0xNC4zMDJoLTEyLjQyMWExMiAxMiAwIDAgMC0xMS43ODEgOS43MThjLTIuMjk0IDExLjg0Ni0yLjg2IDEzLjQ2NC0zLjg2MSAyNS42NDctMTEuNzI5LTI3LjA3OC0zOC42MzktNDMuMDIzLTczLjM3NS00My4wMjMtNjguMDQ0IDAtMTMzLjE3NiA2Mi45NS0xMzMuMTc2IDE1Ny4wMjcgMCA2MS41ODcgMzMuOTE1IDk4LjM1NCA5MC43MjMgOTguMzU0IDM5LjcyOSAwIDcwLjYwMS0yNC4yNzggODYuNjMzLTQ2Ljk4Mi0xLjIxMSAyNy43ODYgMTcuNDU1IDQyLjIxMyA0NS45NzUgNDIuMjEzQzQ1My4wODkgMzc4Ljk1NCA1MDQgMzIxLjcyOSA1MDQgMjQwIDUwNCAxMDMuODE0IDM5My44NjMgOCAyNTYgOHptLTM3LjkyIDM0Mi42MjdjLTM2LjY4MSAwLTU4LjU4LTI1LjEwOC01OC41OC02Ny4xNjYgMC03NC42OSA1MC43NjUtMTIxLjU0NSA5Ny4yMTctMTIxLjU0NSAzOC44NTcgMCA1OC4xMDIgMjcuNzkgNTguMTAyIDY1LjczNSAwIDU4LjEzMy0zOC4zNjkgMTIyLjk3Ni05Ni43MzkgMTIyLjk3NnpcIj48L3BhdGg+PC9zdmc+RS1tYWlsPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6XCI+PC9wYXRoPjwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJzbXM6MTEgOTMwMTggODM2M1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1tYWlsXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk00MDAgMzJINDhDMjEuNDkgMzIgMCA1My40OSAwIDgwdjM1MmMwIDI2LjUxIDIxLjQ5IDQ4IDQ4IDQ4aDM1MmMyNi41MSAwIDQ4LTIxLjQ5IDQ4LTQ4VjgwYzAtMjYuNTEtMjEuNDktNDgtNDgtNDh6bTE2IDQwMGMwIDguODIyLTcuMTc4IDE2LTE2IDE2SDQ4Yy04LjgyMiAwLTE2LTcuMTc4LTE2LTE2VjgwYzAtOC44MjIgNy4xNzgtMTYgMTYtMTZoMzUyYzguODIyIDAgMTYgNy4xNzggMTYgMTZ2MzUyem0tNjQtMzA0SDk2Yy0xNy42NzMgMC0zMiAxNC4zMjctMzIgMzJ2MTkyYzAgMTcuNjczIDE0LjMyNyAzMiAzMiAzMmgyNTZjMTcuNjczIDAgMzItMTQuMzI3IDMyLTMyVjE2MGMwLTE3LjY3My0xNC4zMjctMzItMzItMzJ6bTAgMzJ2MzMuODU1Yy0xNC4xMzYgMTEuNjI4LTM2LjU2NiAyOS42NjQtODIuMTE3IDY1LjgyMUMyNTkuNDI2IDI2OC4wMTUgMjM4Ljc0OCAyODggMjI0LjI1NiAyODhsLS4yNTYtLjAwMi0uMjU2LjAwMmMtMTQuNDkyIDAtMzUuMTctMTkuOTg0LTQ1LjYyOC0yOC4zMjQtNDUuNTQ0LTM2LjE1Mi02Ny45NzgtNTQuMTkyLTgyLjExNy02NS44MjJWMTYwSDM1MnpNOTYgMzUyVjIzNS4wOTJjMTQuMTA5IDExLjM2NyAzMy42MjQgMjYuOTQ4IDYyLjIyMSA0OS42NDggMTMuNzc3IDExLjAxIDM3LjkwMiAzNS4yNiA2NS41MjMgMzUuMjZsLjI1My0uMDAxLjI1OC4wMDFjMjcuNTI5IDAgNTEuMzkyLTIzLjk3NSA2NS41NDEtMzUuMjc0IDI4LjU4My0yMi42ODkgNDguMDk5LTM4LjI3IDYyLjIwMy00OS42MzRWMzUySDk2elwiPjwvcGF0aD48L3N2Zz5TTVM8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWNpcmNsZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjU2IDhDMTE5IDggOCAxMTkgOCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzOTMgOCAyNTYgOHpcIj48L3BhdGg+PC9zdmc+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L21lbnVjb250YWN0PlxuICAgICAgICAgICAgPC9tZW51c2Nyb2xsPlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIGxlZnRtZW51IHtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogLTM0MHB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTAwMDA7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAzMzBweDtcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDhweCAjMDAwO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWMyMjJlO1xuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGxlZnQgMzUwbXMgZWFzZSAwcztcbiAgICAgICAgICAgICAgICAgICAgLW1vei10cmFuc2l0aW9uOiBsZWZ0IDM1MG1zIGVhc2UgMHM7XG4gICAgICAgICAgICAgICAgICAgIC1tcy10cmFuc2l0aW9uOiBsZWZ0IDM1MG1zIGVhc2UgMHM7XG4gICAgICAgICAgICAgICAgICAgIC1vLXRyYW5zaXRpb246IGxlZnQgMzUwbXMgZWFzZSAwcztcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogbGVmdCAzNTBtcyBlYXNlIDBzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBzaWRlYmFydXNlciB7XG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCA2cHggNHB4IHJnYmEoMCwwLDAsLjMpO1xuICAgICAgICAgICAgICAgICAgICB0b3VjaC1hY3Rpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE4NXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBzaWRlYmFydXNlciBwaG90byB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMfS9zdGF0aWMvaW1hZ2VzL2ljb25zL2ljb24tMTkyeDE5Mi5wbmcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBzaWRlYmFydXNlciBwaG90byB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjMDBmOWE2O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgdG9wO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCA1cHggIzAwMDAwMDtcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggIzAwMDAwMDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxNXB4IDBweCAwcHggMTVweDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogOTBweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDkwcHg7XG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBzaWRlYmFydXNlciBwaG90byB0aXRsZSB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAyODVweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogMTA1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IHNpZGViYXJ1c2VyIHBob3RvIHN1YnRpdGxlIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjkwcHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjY2NjO1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDEwMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBzaWRlYmFydXNlciBiZ2ltZyB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMfS9zdGF0aWMvaW1hZ2VzL2hvbWVwYWdlL2JhY2tncm91bmQtYXZuLTEuanBnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgc2lkZWJhcnVzZXIgYmdpbWcge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IGhhcmQtbGlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2E3ZjdmZjtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE4NXB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgc2lkZWJhcnVzZXIgYmdzaGFkb3cge1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiA5O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE4NXB4O1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20scmdiYSgwLDAsMCwwKSAwLHJnYmEoMCwwLDAsMCkgMjAlLHJnYmEoMCwwLDAsLjEpIDQwJSxyZ2JhKDAsMCwwLC43KSA3MCUscmdiYSgwLDAsMCwxKSAxMDAlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDIzNXB4KTtcbiAgICAgICAgICAgICAgICAgICAgdG91Y2gtYWN0aW9uOiBwYW4teTtcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzMwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgc2lkZWJhcnNlcGFyYXRvcjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgc2lkZWJhcnNlcGFyYXRvciB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNjY2M7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnQtZW51IG1lbnVzY3JvbGwgc2lkZWJhcmRpdmlkZXIge1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wOiBzb2xpZCAxcHggcmdiYSgwLDAsMCwuMik7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCByZ2JhKDI1NSwyNTUsMjU1LC4wMyk7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0bixcbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVjb250YWN0ID4gYSB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xuICAgICAgICAgICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDU1cHg7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNjY2M7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuLmRpc2FibGUsXG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51Y29udGFjdCA+IGEuZGlzYWJsZSB7XG4gICAgICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAuNTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51aXRlbXMgPiBidG4gLnN2Zy1pbmxpbmUsXG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51Y29udGFjdCA+IGEgLnN2Zy1pbmxpbmUge1xuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogLS4xMjVlbTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMjVweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNiNTAwZmY7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjJweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgIHRvcDogM3B4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0biAuc3ZnLWlubGluZS5zdmctY2lyY2xlLFxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWNvbnRhY3QgPiBhIC5zdmctaW5saW5lLnN2Zy1jaXJjbGUge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzQzNDc1MjtcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAyNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0biAuc3ZnLWlubGluZS5zdmctdGVybWluYWwge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzQzNDc1MjtcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtNXB4O1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDE4cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuIC5zdmctaW5saW5lLnN2Zy10diB7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IC00cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuIC5zdmctaW5saW5lLnN2Zy1zdG9yZXMge1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtNXB4O1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDJweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51aXRlbXMgPiBidG4gLnN2Zy1pbmxpbmUuc3ZnLXJlc3RhdXJhbnRlcyxcbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0biAuc3ZnLWlubGluZS5zdmctd2hhdHNhcHAsXG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51aXRlbXMgPiBidG4gLnN2Zy1pbmxpbmUuc3ZnLXBob25lLFxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuIC5zdmctaW5saW5lLnN2Zy1tYWlsLFxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuIC5zdmctaW5saW5lLnN2Zy1zdGFyIHtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogLTJweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51aXRlbXMgPiBidG46aG92ZXIsXG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51Y29udGFjdCA+IGE6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjMyYjNhO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuOmhvdmVyIC5zdmctaW5saW5lLnN2Zy10ZXJtaW5hbCxcbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0bjpob3ZlciAuc3ZnLWlubGluZS5zdmctY2lyY2xlLFxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWNvbnRhY3QgPiBhOmhvdmVyIC5zdmctaW5saW5lLnN2Zy1jaXJjbGUge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuID4gY291bnQge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjYzk0N2ZmO1xuICAgICAgICAgICAgICAgICAgICByaWdodDogLTI1cHg7XG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAtMnB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0biBzdWJtZW51IHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSArIDI1cHgpO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IC0yNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0biBzdWJtZW51IGJ0bi5kaXNhYmxlIHtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogLjU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuIHN1Ym1lbnUgYnRuIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAzNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0biBzdWJtZW51Lm9wZW4ge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0bjpob3ZlciBzdWJtZW51IGJ0biAuc3ZnLWlubGluZS5zdmctY2lyY2xlIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM0MzQ3NTI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuOmhvdmVyIHN1Ym1lbnUgYnRuOm5vdCguZGlzYWJsZSk6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmYzYTRlO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuOmhvdmVyIHN1Ym1lbnUgYnRuOm5vdCguZGlzYWJsZSk6aG92ZXIgLnN2Zy1pbmxpbmUuc3ZnLWNpcmNsZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk0MHB4KSB7XG4gICAgICAgICAgICAgICAgICAgIGZvb3RlciBpbmZvcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA2MjVweCkge1xuICAgICAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2l0ZW1vYmlsZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgIFx0PC9sZWZ0bWVudT5cbiAgICApfVxufSJdfQ== */\n/*@ sourceURL=/home/ubuntu/workspace/estudo/next/components/interface.js */"),
    __self: this
  }));
});
var Header =
/*#__PURE__*/
function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, _getPrototypeOf(Header).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if ('serviceWorker' in navigator) {// navigator.serviceWorker
        //   .register(process.env.BACKEND_URL +'/service-worker.js')
        //   .then(registration => {
        //     console.log('service worker registration successful')
        //   })
        //   .catch(err => {
        //     console.warn('service worker registration failed', err.message)
        //   })
      }

      $(window).scroll(function () {
        $(window).scrollTop() > 0 && $(window).width() > 550 ? $("header").addClass("resize") : $("header").removeClass("resize");
      });
      $("header nav a").hover(function () {
        $("header navslider").css({
          left: $(this).position().left + parseInt($(this).css("marginLeft")) + "px",
          width: $(this).width() + "px",
          opacity: ".999"
        });
      }, function () {
        $("header navslider").css("opacity", "0");
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
        className: "jsx-3733694487",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("logo", {
        className: "jsx-3733694487",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("text", {
        className: "jsx-3733694487",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        },
        __self: this
      }, "AVN SYSTEMS")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
        className: "jsx-3733694487",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/",
        as: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "jsx-3733694487",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        },
        __self: this
      }, "Home")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/about",
        as: "/about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "jsx-3733694487",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        },
        __self: this
      }, "About")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/tvmaze",
        as: "/tvmaze",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "jsx-3733694487",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        },
        __self: this
      }, "TV Maze")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/404",
        as: "/404",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "jsx-3733694487",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        },
        __self: this
      }, "404"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("navtoggle", {
        className: "jsx-3733694487",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("bar", {
        className: "jsx-3733694487",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("bar", {
        className: "jsx-3733694487",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("bar", {
        className: "jsx-3733694487",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("navslider", {
        className: "jsx-3733694487",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "3733694487",
        css: "header.jsx-3733694487{overflow:hidden;position:fixed;z-index:10000;height:90px;width:100%;}header.jsx-3733694487 logo.jsx-3733694487{position:absolute;padding:16px 0px;width:170px;left:90px;top:10px;background-image:url(".concat("", "/static/images/icon.png);background-repeat:no-repeat;background-size:contain;-webkit-filter:gray;filter:gray;-webkit-transition:all 150ms ease-in-out;-moz-transition:all 150ms ease-in-out;-ms-transition:all 150ms ease-in-out;-o-transition:all 150ms ease-in-out;-webkit-transition:all 150ms ease-in-out;transition:all 150ms ease-in-out;}header.jsx-3733694487 logo.jsx-3733694487:hover{-webkit-filter:none;-moz-filter:none;-o-filter:none;-webkit-filter:none;filter:none;}header.jsx-3733694487 logo.jsx-3733694487 text.jsx-3733694487{display:-webkit-inline-box;text-transform:uppercase;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;position:relative;font-weight:bold;min-width:110px;font-size:14px;color:#5f5f5f;left:60px;}header.jsx-3733694487 nav.jsx-3733694487{margin:0 20px;float:right;}header.jsx-3733694487 nav.jsx-3733694487 a.jsx-3733694487{-webkit-text-decoration:none;text-decoration:none;display:inline-block;text-transform:uppercase;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;font-weight:bold;margin:25px 10px;font-size:14px;color:#d9d9d9;}header.jsx-3733694487 nav.jsx-3733694487 a.jsx-3733694487:hover{color:#8500FF;}header.jsx-3733694487 navtoggle.jsx-3733694487{cursor:pointer;display:inline-block;position:absolute;width:45px;left:20px;top:15px;}header.jsx-3733694487 navtoggle.jsx-3733694487 bar.jsx-3733694487{border-bottom:2px solid #aaa;display:block;margin:7px 0;width:100%;height:5px;}header.jsx-3733694487 navtoggle.jsx-3733694487:hover bar.jsx-3733694487{border-bottom:2px solid #bc73ff;}header.jsx-3733694487 navslider.jsx-3733694487{border-bottom:4px solid #8500FF;position:absolute;height:0;top:50px;-webkit-transition:all 250ms ease-in-out;-moz-transition:all 250ms ease-in-out;-ms-transition:all 250ms ease-in-out;-o-transition:all 250ms ease-in-out;-webkit-transition:all 250ms ease-in-out;transition:all 250ms ease-in-out;}@media (max-width:625px){header.jsx-3733694487{background:white;height:58px;}header.jsx-3733694487 logo.jsx-3733694487{left:calc(50% - 85px);-webkit-filter:none;-moz-filter:none;-o-filter:none;-webkit-filter:none;filter:none;top:1px;}header.jsx-3733694487 nav.jsx-3733694487{display:none;}header.jsx-3733694487 navtoggle.jsx-3733694487{top:5px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VidW50dS93b3Jrc3BhY2UvZXN0dWRvL25leHQvY29tcG9uZW50cy9pbnRlcmZhY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb040QixBQUd5QyxBQU9FLEFBa0JFLEFBTU8sQUFXYixBQUlPLEFBVVAsQUFHQyxBQVFjLEFBT0csQUFHQSxBQWNYLEFBSUssQUFRVCxBQUdMLFFBQ1osS0FIQSxDQTdEWSxBQWNoQixDQUd5QixDQTNETixDQTJGQyxDQXBGQyxFQWtCQSxFQXNFTyxJQXBENUIsQ0FaNkIsRUFvQ1gsQUF5QmQsRUEzRmMsQ0F5RWxCLEFBR3NCLEdBckVOLENBb0RNLENBbENILEtBc0VNLENBNUJSLEVBbEVELEVBT0YsR0FxQ1csQUFnQ1osRUFuREcsQUFLTyxFQTZCUixFQVFBLENBbEVBLEFBT0YsRUFxRUEsQUFrQlUsTUFuQ1QsQ0FsRGdFLENBMEQvRCxDQWxFZixBQTZFNkMsR0FsQ2hCLEdBbURULENBbkNQLEdBUWIsTUEzQ0EsQUFvQ0EsWUFoQnVCLFVBbURQLEdBakIwQixLQWtCdEMsMEJBdkY0QixLQW9CVixFQWtEbUIsZ0JBakRwQixLQXBCTyxZQXFCUixJQWlEb0IsS0FuQ25CLEdBbENMLElBcUJHLFVBY0UsS0FiSCxTQWdEbUIsR0FsQ2xCLENBbEMwQixDQXFCL0IsVUFDZCxHQWFrQixjQUNsQixhQW5DMEMsNkJBb0UxQyxTQW5FeUMscUNBQ0Qsb0NBQ0gsMEVBQ3JDIiwiZmlsZSI6Ii9ob21lL3VidW50dS93b3Jrc3BhY2UvZXN0dWRvL25leHQvY29tcG9uZW50cy9pbnRlcmZhY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKmdsb2JhbCAkIG5hdmlnYXRvciovXG5cbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuXG5pbXBvcnQgTlByb2dyZXNzIGZyb20gJ25wcm9ncmVzcydcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5cblJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlU3RhcnQnLCAodXJsKSA9PiB7XG4gIGNvbnNvbGUubG9nKGBMb2FkaW5nOiAke3VybH1gKVxuICBOUHJvZ3Jlc3Muc3RhcnQoKVxufSlcblJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCAoKSA9PiBOUHJvZ3Jlc3MuZG9uZSgpKVxuUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VFcnJvcicsICgpID0+IE5Qcm9ncmVzcy5kb25lKCkpXG5cbmV4cG9ydCBkZWZhdWx0ICh7IGNoaWxkcmVuLFxuICAgIHRpdGxlID0gJ1RoaXMgaXMgdGhlIGRlZmF1bHQgdGl0bGUnLFxuICAgIFxuICAgIG9nU2l0ZU5hbWUgPSBcImF2bi5zeXN0ZW1zXCIsIG9nVGl0bGUgPSBcIldlYnNpdGUgfCBhdm4uc3lzdGVtc1wiLFxuICAgIG9nVXJsID0gXCJodHRwczovL2F2bi5zeXN0ZW1zXCIsIG9nVHlwZSA9IFwiYXJ0aWNsZVwiLFxuICAgIG9nRGVzY3JpcHRpb24gPSBcIldlYnNpdGUgY3JlYXRlZCB3aXRoIG5leHQuanMgb3B0bWl6ZWQgYXMgYSBQV0FcIixcbiAgICBvZ0ltYWdlID0gJy9zdGF0aWMvaW1hZ2VzL2F2bi5zeXN0ZW1zLm9nLWltYWdlLmpwZycsXG4gICAgXG4gICAgdHdpdHRlclNpdGUgPSBcIkBhdm4uc3lzdGVtc1wiLFxuICAgIHR3aXR0ZXJDcmVhdG9yID0gXCJAYXZuLnN5c3RlbXNcIixcbiAgICBcbiAgICBjYW5vbmljYWwgPSBcImh0dHBzOi8vYXZuLnN5c3RlbXNcIixcbiAgICBmZWVkWG1sID0gXCJodHRwczovL2F2bi5zeXN0ZW1zL2ZlZWQueG1sXCIsXG4gICAgZmVlZEpzb24gPSBcImh0dHBzOi8vYXZuLnN5c3RlbXNtL2ZlZWQuanNvblwiXG4gIH0pID0+IChcbiAgPGludGVyZmFjZT5cbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT57IHRpdGxlIH08L3RpdGxlPlxuICAgICAgPG1ldGEgY2hhclNldD0ndXRmLTgnIC8+XG4gICAgICA8bWV0YSBuYW1lPSd2aWV3cG9ydCcgY29udGVudD0naW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aCcgLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJhdXRob3JcIiBjb250ZW50PVwiQWxsYW4gQXZlbGFyIC0gaHR0cHM6Ly9hbGxhbmF2ZWxhci5jb20vXCIgLz5cbiAgICAgIFxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpzaXRlX25hbWVcIiBjb250ZW50PXsgb2dTaXRlTmFtZSB9IC8+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD17IG9nVGl0bGUgfSAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PXsgb2dVcmwgfSAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0eXBlXCIgY29udGVudD17IG9nVHlwZSB9IC8+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD17IG9nRGVzY3JpcHRpb24gfSAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9eyBwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArIG9nSW1hZ2UgfSAvPlxuICAgIFxuICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6Y2FyZFwiIGNvbnRlbnQ9XCJzdW1tYXJ5X2xhcmdlX2ltYWdlXCIgLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOnNpdGVcIiBjb250ZW50PXsgdHdpdHRlclNpdGUgfSAvPlxuICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6Y3JlYXRvclwiIGNvbnRlbnQ9eyB0d2l0dGVyQ3JlYXRvciB9IC8+XG4gICAgXG4gICAgICA8bGluayByZWw9XCJjYW5vbmljYWxcIiBocmVmPXsgY2Fub25pY2FsIH0gLz5cbiAgICAgIDxsaW5rIHJlbD1cImFsdGVybmF0ZVwiIHR5cGU9XCJhcHBsaWNhdGlvbi9yc3MreG1sXCIgdGl0bGU9eyBvZ1RpdGxlIH0gaHJlZj17IGZlZWRYbWwgfSAvPlxuICAgICAgPGxpbmsgcmVsPVwiYWx0ZXJuYXRlXCIgdHlwZT1cImFwcGxpY2F0aW9uL2pzb25cIiB0aXRsZT17IG9nVGl0bGUgfSBocmVmPXsgZmVlZEpzb24gfSAvPlxuXG4gICAgICA8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCIxMTR4MTE0XCIgaHJlZj17IHByb2Nlc3MuZW52LkJBQ0tFTkRfVVJMICsgJy9zdGF0aWMvaW1hZ2VzL2ljb24ucG5nJ30gLz5cbiAgICAgIDxsaW5rIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBzaXplcz1cIjEyMHgxMjBcIiBocmVmPXsgcHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyAnL3N0YXRpYy9pbWFnZXMvaWNvbi5wbmcnfSAvPlxuICAgICAgPGxpbmsgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIHNpemVzPVwiMTQ0eDE0NFwiIGhyZWY9eyBwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArICcvc3RhdGljL2ltYWdlcy9pY29uLnBuZyd9IC8+XG4gICAgICA8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCIxNTJ4MTUyXCIgaHJlZj17IHByb2Nlc3MuZW52LkJBQ0tFTkRfVVJMICsgJy9zdGF0aWMvaW1hZ2VzL2ljb24ucG5nJ30gLz5cbiAgICAgIDxsaW5rIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBzaXplcz1cIjE4MHgxODBcIiBocmVmPXsgcHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyAnL3N0YXRpYy9pbWFnZXMvaWNvbi5wbmcnfSAvPlxuICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS9wbmdcIiBocmVmPXsgcHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyAnL3N0YXRpYy9pbWFnZXMvaWNvbi5wbmcnfSAvPlxuICAgICAgPGxpbmsgcmVsPVwic2hvcnRjdXQgaWNvblwiIGhyZWY9eyBwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArICcvc3RhdGljL2ltYWdlcy9mYXZpY29uLmljbyd9IC8+XG4gICAgICBcbiAgICAgIDxsaW5rIHJlbD1cIm1hc2staWNvblwiIGhyZWY9XCIvYXNzZXRzL3NhZmFyaS1waW5uZWQtdGFiLnN2Z1wiIGNvbG9yPVwiIzViYmFkNVwiIC8+XG4gICAgICA8bGluayByZWw9XCJtYW5pZmVzdFwiIGhyZWY9eyBwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArICcvc3RhdGljL21hbmlmZXN0Lmpzb24nfSAvPlxuICAgICAgXG4gICAgICA8bWV0YSBuYW1lPVwibXNhcHBsaWNhdGlvbi1UaWxlQ29sb3JcIiBjb250ZW50PVwiIzU3MDBBRVwiIC8+XG4gICAgICA8bWV0YSBuYW1lPVwibXNhcHBsaWNhdGlvbi1UaWxlSW1hZ2VcIiBjb250ZW50PXsgcHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyAnL3N0YXRpYy9pbWFnZXMvYXZuLnN5c3RlbXMub2ctaW1hZ2UuanBnJ30gLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJtc2FwcGxpY2F0aW9uLWNvbmZpZ1wiIGNvbnRlbnQ9eyBwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArICcvc3RhdGljL2Jyb3dzZXJjb25maWcueG1sJ30gLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJ0aGVtZS1jb2xvclwiIGNvbnRlbnQ9XCIjNTcwMEFFXCIgLz5cbiAgICAgIFxuICAgICAgPGxpbmsgZGVmZXIgcmVsPSdzdHlsZXNoZWV0JyBocmVmPSdodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjAuMC1iZXRhLjMvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJyBpbnRlZ3JpdHk9J3NoYTM4NC1adWcrUWlEb0pPclo1dDRsc3NMZHhHaFZydXJibUJXb3BvRWwrTTZCZEVmd25DSlp0S3hpMUtneFV5SnExM2R5JyBjcm9zc09yaWdpbj0nYW5vbnltb3VzJyAvPlxuICAgICAgPGxpbmsgcmVsPSdzdHlsZXNoZWV0JyB0eXBlPSd0ZXh0L2NzcycgaHJlZj17IHByb2Nlc3MuZW52LkJBQ0tFTkRfVVJMICsgJy9zdGF0aWMvY3NzL25wcm9ncmVzcy5jc3MnfSAvPlxuICAgICAgPHNjcmlwdCBkZWZlciBzcmM9XCJodHRwczovL2NvZGUuanF1ZXJ5LmNvbS9qcXVlcnktMy4zLjEubWluLmpzXCI+PC9zY3JpcHQ+XG4gICAgPC9IZWFkPlxuICAgIDxIZWFkZXIgLz5cbiAgICA8TGVmdE1lbnUgLz5cbiAgICA8cGFnZT5cbiAgICAgICAgeyBjaGlsZHJlbiB9XG4gICAgPC9wYWdlPlxuICAgIDxtZW51aGlkZXI+PC9tZW51aGlkZXI+XG4gICAgPEZvb3RlciAvPlxuICAgIDxwYWdlbG9hZGVyPjxiYXI+PC9iYXI+PC9wYWdlbG9hZGVyPlxuICAgIFxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgICAgbWluLXdpZHRoOiAzMjBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgke3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMfS9zdGF0aWMvaW1hZ2VzL2JvZHktYmcuanBnKSAjRjVGN0Y2O1xuICAgICAgICB9XG4gICAgICAgIHBhZ2Uge1xuICAgICAgICAgICAgcGFkZGluZzogMTg1cHggMjBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG4gICAgICAgIHByZSBjb2RlIHtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZSFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgICAgLmZ0bCB7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgfVxuICAgICAgICAuZnRyIHtcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgfVxuICAgICAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGJvZHkubGVmdC1tZW51IGxlZnRtZW51IHtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIH1cbiAgICAgICAgYm9keS5sZWZ0LW1lbnUgbWVudWhpZGVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgfVxuICAgICAgICBib2R5LmxlZnQtbWVudSBoZWFkZXIgbmF2dG9nZ2xlIHtcbiAgICAgICAgICAgIGxlZnQ6IDM1MHB4O1xuICAgICAgICB9XG4gICAgICAgIG1lbnVoaWRlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC41KTtcbiAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICB6LWluZGV4OiA5OTk5O1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZSAwcztcbiAgICAgICAgICAgIC1tb3otdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlIDBzO1xuICAgICAgICAgICAgLW1zLXRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZSAwcztcbiAgICAgICAgICAgIC1vLXRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZSAwcztcbiAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZSAwcztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLm5wcm9ncmVzcy1idXN5IHBhZ2Vsb2FkZXIge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cbiAgICAgICAgcGFnZWxvYWRlciB7XG4gICAgICAgICAgICBtYXJnaW46IC0xNXB4IDAgMCAtMTAwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwO1xuICAgICAgICAgICAgei1pbmRleDogOTk5OTk5OTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgfVxuICAgICAgICBwYWdlbG9hZGVyIGJhciB7XG4gICAgICAgICAgICBtYXJnaW46IC0ycHggMCAwIC04N3B4O1xuICAgICAgICAgICAgYW5pbWF0aW9uOiBncmFkdHJhbnNsYXRlIDJzIGluZmluaXRlIGxpbmVhcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLGxlZnQgdG9wLHJpZ2h0IHRvcCxjb2xvci1zdG9wKDAlLHdoaXRlKSxjb2xvci1zdG9wKDUwJSwjODUwMEZGKSxjb2xvci1zdG9wKDEwMCUsd2hpdGUpKTs7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDQwMHB4IDFweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM4NTAwRkY7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB3aWR0aDogMTc0cHg7XG4gICAgICAgICAgICBvcGFjaXR5OiAuODtcbiAgICAgICAgICAgIGhlaWdodDogNHB4O1xuICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM5OXB4KSB7XG4gICAgICAgICAgICBib2R5LmxlZnQtbWVudSBsZWZ0bWVudSwgbGVmdG1lbnUgbWVudXNjcm9sbCB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDY5cHgpIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDMzMHB4O1xuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMjYwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvaW50ZXJmYWNlPlxuKVxuXG5leHBvcnQgY2xhc3MgSGVhZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgICAgIGlmICgnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSB7XG4gICAgICAgIC8vIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyXG4gICAgICAgIC8vICAgLnJlZ2lzdGVyKHByb2Nlc3MuZW52LkJBQ0tFTkRfVVJMICsnL3NlcnZpY2Utd29ya2VyLmpzJylcbiAgICAgICAgLy8gICAudGhlbihyZWdpc3RyYXRpb24gPT4ge1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coJ3NlcnZpY2Ugd29ya2VyIHJlZ2lzdHJhdGlvbiBzdWNjZXNzZnVsJylcbiAgICAgICAgLy8gICB9KVxuICAgICAgICAvLyAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAvLyAgICAgY29uc29sZS53YXJuKCdzZXJ2aWNlIHdvcmtlciByZWdpc3RyYXRpb24gZmFpbGVkJywgZXJyLm1lc3NhZ2UpXG4gICAgICAgIC8vICAgfSlcbiAgICAgICAgfVxuICAgICAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJCh3aW5kb3cpLnNjcm9sbFRvcCgpID4gMCAmJiAkKHdpbmRvdykud2lkdGgoKSA+IDU1MCA/ICQoXCJoZWFkZXJcIikuYWRkQ2xhc3MoXCJyZXNpemVcIikgOiAkKFwiaGVhZGVyXCIpLnJlbW92ZUNsYXNzKFwicmVzaXplXCIpXG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgICAgICAkKFwiaGVhZGVyIG5hdiBhXCIpLmhvdmVyKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJChcImhlYWRlciBuYXZzbGlkZXJcIikuY3NzKHtcbiAgICAgICAgICAgICAgICBsZWZ0OiAkKHRoaXMpLnBvc2l0aW9uKCkubGVmdCArIHBhcnNlSW50KCQodGhpcykuY3NzKFwibWFyZ2luTGVmdFwiKSkgKyBcInB4XCIsXG4gICAgICAgICAgICAgICAgd2lkdGg6ICQodGhpcykud2lkdGgoKSArIFwicHhcIixcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiBcIi45OTlcIlxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKFwiaGVhZGVyIG5hdnNsaWRlclwiKS5jc3MoXCJvcGFjaXR5XCIsIFwiMFwiKVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmVuZGVyICgpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgICAgICAgPGxvZ28+PHRleHQ+QVZOIFNZU1RFTVM8L3RleHQ+PC9sb2dvPlxuICAgICAgICAgICAgICAgIDxuYXY+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nIGFzPXsgcHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyBgL2B9PjxhPkhvbWU8L2E+PC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvYWJvdXQnIGFzPXsgcHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyBgL2Fib3V0YH0+PGE+QWJvdXQ8L2E+PC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvdHZtYXplJyBhcz17IHByb2Nlc3MuZW52LkJBQ0tFTkRfVVJMICsgYC90dm1hemVgfT48YT5UViBNYXplPC9hPjwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nLzQwNCcgYXM9eyBwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArIGAvNDA0YH0+PGE+NDA0PC9hPjwvTGluaz5cbiAgICAgICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICAgICAgICA8bmF2dG9nZ2xlPjxiYXI+PC9iYXI+PGJhcj48L2Jhcj48YmFyPjwvYmFyPjwvbmF2dG9nZ2xlPlxuICAgICAgICAgICAgICAgIDxuYXZzbGlkZXI+PC9uYXZzbGlkZXI+XG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgICAgICBoZWFkZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwMDAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA5MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyIGxvZ28ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTZweCAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTcwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiA5MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTH0vc3RhdGljL2ltYWdlcy9pY29uLnBuZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBncmF5O1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAxNTBtcyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDE1MG1zIGVhc2UtaW4tb3V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgLW1zLXRyYW5zaXRpb246IGFsbCAxNTBtcyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC1vLXRyYW5zaXRpb246IGFsbCAxNTBtcyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAxNTBtcyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBoZWFkZXIgbG9nbzpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWZpbHRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC1tb3otZmlsdGVyOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgLW8tZmlsdGVyOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBub25lO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlciBsb2dvIHRleHQge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1pbmxpbmUtYm94O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMTEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzVmNWY1ZjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDYwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyIG5hdiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBoZWFkZXIgbmF2IGEge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMjVweCAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNkOWQ5ZDk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyIG5hdiBhOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjODUwMEZGO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlciBuYXZ0b2dnbGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQ1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlciBuYXZ0b2dnbGUgYmFyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjYWFhO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDdweCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBoZWFkZXIgbmF2dG9nZ2xlOmhvdmVyIGJhciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2JjNzNmZjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBoZWFkZXIgbmF2c2xpZGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjODUwMEZGO1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAyNTBtcyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDI1MG1zIGVhc2UtaW4tb3V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgLW1zLXRyYW5zaXRpb246IGFsbCAyNTBtcyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC1vLXRyYW5zaXRpb246IGFsbCAyNTBtcyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAyNTBtcyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYyNXB4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNThweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlciBsb2dvIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBjYWxjKDUwJSAtIDg1cHgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtZmlsdGVyOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC1tb3otZmlsdGVyOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC1vLWZpbHRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAxcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXIgbmF2IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyIG5hdnRvZ2dsZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZvb3RlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuICAgICAgICBcbiAgICB9XG4gICAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8Zm9vdGVyPlxuICAgICAgICAgICAgPGxpZ2h0LXJpZ2h0PjwvbGlnaHQtcmlnaHQ+XG4gICAgICAgICAgICA8dmVyc2lvbiBjbGFzc05hbWU9XCJmdGxcIj52ZXJzaW9uOiA8aXRlbT4yLjEuMDE8L2l0ZW0+PC92ZXJzaW9uPlxuICAgICAgICAgICAgPGluZm9zIGNsYXNzTmFtZT1cImZ0bFwiPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2FkbWluLmF2bi5zeXN0ZW1zL3YxL1wiIHRhcmdldD1cIl9ibGFua1wiPjxsb2dpbj7wn5SQIENMSUVOVCBMT0dJTjwvbG9naW4+PC9hPiB8IDxjbGlja2l0ZW0+PGl0ZW0+TE9DQUw6PC9pdGVtPiBXT1JMRFdJREU8L2NsaWNraXRlbT4gfCA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2F2bnN5c3RlbXNcIiB0YXJnZXQ9XCJfYmxhbmtcIj48aXRlbT5HSVRIVUIvPC9pdGVtPkFWTlNZU1RFTVM8L2E+IHwgPGEgaHJlZj1cIm1haWx0bzpteWFwcEBhdm4uc3lzdGVtc1wiPjxpdGVtPkUtTUFJTDo8L2l0ZW0+IENPTlRBQ1RAQVZOLlNZU1RFTVM8L2E+XG4gICAgICAgICAgICA8L2luZm9zPlxuICAgICAgICAgICAgPGxhbmd1YWdlIGNsYXNzTmFtZT1cImZ0clwiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZsYWctaWNvbiBmbGFnLWljb24tdXMgc2VsZWN0ZWQgZnRyXCI+PC9pPlxuICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxhPkVuZ2xpc2g8aSBjbGFzc05hbWU9XCJmbGFnLWljb24gZmxhZy1pY29uLXVzXCI+PC9pPjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZGlzYWJsZVwiPjxhPlNwYW5pc2g8aSBjbGFzc05hbWU9XCJmbGFnLWljb24gZmxhZy1pY29uLWVzXCI+PC9pPjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZGlzYWJsZVwiPjxhPkZyZW5jaDxpIGNsYXNzTmFtZT1cImZsYWctaWNvbiBmbGFnLWljb24tZnJcIj48L2k+PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkaXNhYmxlXCI+PGE+UG9ydHVndWVzZTxpIGNsYXNzTmFtZT1cImZsYWctaWNvbiBmbGFnLWljb24tYnJcIj48L2k+PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvbGFuZ3VhZ2U+XG4gICAgICAgICAgICA8Y29weXJpZ2h0IGNsYXNzTmFtZT1cImZ0clwiPkNvcHlyaWdodCA8aXRlbT4yMDE3PC9pdGVtPjwvY29weXJpZ2h0PlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIGZvb3RlciB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgke3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMfS9zdGF0aWMvaW1hZ2VzL2Zvb3Rlci5qcGcpO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwMDAwO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM3cHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICAgICAgICAgIHdlYmtpdC1ib3gtc2hhZG93OiAwIC0xcHggMTBweCAwIHJnYigwLCAwLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgLW1vei1ib3gtc2hhZG93OiAwIC0xcHggMTBweCAwIHJnYigwLCAwLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAtMXB4IDEwcHggMCByZ2IoMCwgMCwgMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvb3RlciBjb3B5cmlnaHQsIGZvb3RlciB2ZXJzaW9uIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTJweCAxNXB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNiYzc0ZmY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvb3RlciBjb3B5cmlnaHQgPiBpdGVtLCBmb290ZXIgdmVyc2lvbiA+IGl0ZW0sIGZvb3RlciBpbmZvcyBpdGVtIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNBQkE0OUE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvb3RlciBpbmZvcyB7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IGNhbGMoNTAlIC0gMjIxcHgpO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM3NzZFNjM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZm9vdGVyIGluZm9zIGEge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM3NzZFNjM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZm9vdGVyIGluZm9zID4gYSA+IGxvZ2luIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZGM5ZDAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZvb3RlciBpbmZvcyBhOmhvdmVyLCBmb290ZXIgaW5mb3MgYTpob3ZlciBsb2dpbiwgZm9vdGVyIGluZm9zIGNsaWNraXRlbTpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2JjNzRmZjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvb3RlciBsYW5ndWFnZSBpLmZsYWctaWNvbiB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogN3B4IDE1cHggMHB4IDBweDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvb3RlciBsYW5ndWFnZSBpLmZsYWctaWNvbi11cyB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMfS9zdGF0aWMvaW1hZ2VzL2ZsYWdzL3VzYS5wbmcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb290ZXIgbGFuZ3VhZ2UgaS5mbGFnLWljb24tZXMge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTH0vc3RhdGljL2ltYWdlcy9mbGFncy9zcGFpbi5wbmcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb290ZXIgbGFuZ3VhZ2UgaS5mbGFnLWljb24tZnIge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTH0vc3RhdGljL2ltYWdlcy9mbGFncy9mcmFuY2UucG5nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9vdGVyIGxhbmd1YWdlIGkuZmxhZy1pY29uLWJyIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7cHJvY2Vzcy5lbnYuQkFDS0VORF9VUkx9L3N0YXRpYy9pbWFnZXMvZmxhZ3MvYnJhemlsLnBuZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvb3RlciBsYW5ndWFnZTpob3ZlciB1bCB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICBib3R0b206IDE1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvb3RlciBsYW5ndWFnZSB1bCB7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzAzMWM0NTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICMwMzFjNDU7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxNXB4IDVweCAwO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjkyODI2O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9vdGVyIGxhbmd1YWdlIHVsIGxpIHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb290ZXIgbGFuZ3VhZ2UgdWwgbGkuZGlzYWJsZSBhIHtcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjODI4MDdlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb290ZXIgbGFuZ3VhZ2UgdWwgbGkuZGlzYWJsZSBhID4gaS5mbGFnLWljb24ge1xuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWZpbHRlcjogZ3JheXNjYWxlKDEwMCUpO1xuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9vdGVyIGxhbmd1YWdlIHVsIGxpIGEge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMTBweCAwIDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2JjNzRmZjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9vdGVyIGxhbmd1YWdlIHVsIGxpIGE6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9vdGVyIGxhbmd1YWdlIHVsIGxpIGEgPiBpLmZsYWctaWNvbiB7XG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogOTQwcHgpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9vdGVyIGluZm9zIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYyNXB4KSB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2Zvb3Rlcj5cbiAgICApfVxufVxuXG5leHBvcnQgY2xhc3MgTGVmdE1lbnUgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbXBvbmVudERpZE1vdW50ICgpIHtcbiAgICAgICAgJChcImxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuLnN1Ym1lbnUtaGFzLW51bWJlcnNcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBpZiAoJChlLnRhcmdldCkuaGFzQ2xhc3MoJ2Rpc2FibGUnKSkge1xuICAgICAgICAgICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoJChlLnRhcmdldCkuYXR0cignaHJlZicpKSB7XG4gICAgICAgICAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdsZWZ0LW1lbnUnKTtcbiAgICAgICAgICAgICAgICAvL3JldHVybiAkLmZuLm5hdmlnYXRlKGUudGFyZ2V0LCBlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5maW5kKCdzdWJtZW51JykudG9nZ2xlQ2xhc3MoXCJvcGVuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAkKFwiaGVhZGVyIG5hdnRvZ2dsZSwgbWVudWhpZGVyXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgJCgnYm9keScpLnRvZ2dsZUNsYXNzKCdsZWZ0LW1lbnUnKTtcbiAgICAgICAgfSlcbiAgICB9XG4gICAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8bGVmdG1lbnU+XG4gICAgXHRcdDxzaWRlYmFydXNlcj5cbiAgICBcdCAgICAgICAgPHBob3RvPlxuICAgIFx0ICAgICAgICAgICAgPHRpdGxlPkJvYSBub2l0ZS4g4piFPC90aXRsZT5cbiAgICBcdCAgICAgICAgICAgIDxzdWJ0aXRsZT5FbnRyZSBjb20gc2V1IGxvZ2luIG91IGNhZGFzdHJlLXNlITwvc3VidGl0bGU+XG4gICAgXHQgICAgICAgIDwvcGhvdG8+XG4gICAgXHRcdCAgICA8YmdpbWc+PC9iZ2ltZz5cbiAgICBcdFx0ICAgIDxiZ3NoYWRvdz48L2Jnc2hhZG93PlxuICAgIFx0XHQ8L3NpZGViYXJ1c2VyPlxuICAgIFx0XHQ8bWVudXNjcm9sbD5cbiAgICAgICAgICAgICAgICA8c2lkZWJhcnNlcGFyYXRvcj5BY2Vzc28gUmVzdHJpdG88L3NpZGViYXJzZXBhcmF0b3I+XG4gICAgICAgICAgICAgICAgPG1lbnVpdGVtcz5cbiAgICAgICAgICAgICAgICAgICAgPGJ0biBocmVmPVwiLy9hZG1pbi5hdm4uc3lzdGVtc1wiIHRhcmdldD1cIl9zZWxmXCI+XG4gICAgICAgICAgICAgICAgICAgIFx0PHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0xNDQgMTEydjUxLjZINDhjLTI2LjUgMC00OCAyMS41LTQ4IDQ4djg4LjZjMCAyNi41IDIxLjUgNDggNDggNDhoOTZ2NTEuNmMwIDQyLjYgNTEuNyA2NC4yIDgxLjkgMzMuOWwxNDQtMTQzLjljMTguNy0xOC43IDE4LjctNDkuMSAwLTY3LjlsLTE0NC0xNDRDMTk1LjggNDggMTQ0IDY5LjMgMTQ0IDExMnptMTkyIDE0NEwxOTIgNDAwdi05OS43SDQ4di04OC42aDE0NFYxMTJsMTQ0IDE0NHptODAgMTkyaC04NGMtNi42IDAtMTItNS40LTEyLTEydi0yNGMwLTYuNiA1LjQtMTIgMTItMTJoODRjMjYuNSAwIDQ4LTIxLjUgNDgtNDhWMTYwYzAtMjYuNS0yMS41LTQ4LTQ4LTQ4aC04NGMtNi42IDAtMTItNS40LTEyLTEyVjc2YzAtNi42IDUuNC0xMiAxMi0xMmg4NGM1MyAwIDk2IDQzIDk2IDk2djE5MmMwIDUzLTQzIDk2LTk2IDk2elwiIGNsYXNzTmFtZT1cIlwiPjwvcGF0aD48L3N2Zz5FbnRyYXI8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWNpcmNsZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjU2IDhDMTE5IDggOCAxMTkgOCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzOTMgOCAyNTYgOHpcIj48L3BhdGg+PC9zdmc+PC9idG4+XG4gICAgICAgICAgICAgICAgICAgIDxidG4gaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJkaXNhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgIFx0PHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDU3NiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yODggMjA4Yy00NC4yIDAtODAgMzUuOC04MCA4MHMzNS44IDgwIDgwIDgwIDgwLTM1LjggODAtODAtMzUuOC04MC04MC04MHptMCAxMjhjLTI2LjUgMC00OC0yMS41LTQ4LTQ4czIxLjUtNDggNDgtNDggNDggMjEuNSA0OCA0OC0yMS41IDQ4LTQ4IDQ4ek01MTIgNjRIMzUyVjMyYzAtMTcuNy0xNC4zLTMyLTMyLTMyaC02NGMtMTcuNyAwLTMyIDE0LjMtMzIgMzJ2MzJINjRDMjguNyA2NCAwIDkyLjcgMCAxMjh2MzIwYzAgMzUuMyAyOC43IDY0IDY0IDY0aDQ0OGMzNS4zIDAgNjQtMjguNyA2NC02NFYxMjhjMC0zNS4zLTI4LjctNjQtNjQtNjR6TTI1NiAzMmg2NHY5NmgtNjRWMzJ6bTEyOCA0NDhIMTkydi0yMS45YzAtOSAyLjYtMTcuNiA3LjYtMjUgNy4yLTEwLjcgMjAuMy0xNy4yIDM1LTE3LjIgMTUuOSAwIDIzLjUgOCA1My40IDhzMzcuNi04IDUzLjQtOGMxNC43IDAgMjcuNyA2LjQgMzUgMTcuMiA1IDcuNCA3LjYgMTYgNy42IDI1VjQ4MHptMTYwLTMyYzAgMTcuNi0xNC40IDMyLTMyIDMyaC05NnYtMjEuOWMwLTE1LjktNC44LTMwLjYtMTMtNDIuOC0xMy44LTIwLjUtMzcuMy0zMS4zLTYxLjUtMzEuMy0yMi4yIDAtMjcuOCA4LTUzLjQgOC0yNS42IDAtMzEuMi04LTUzLjQtOC0yNC4yIDAtNDcuNyAxMC44LTYxLjUgMzEuMy04LjIgMTIuMi0xMyAyNy0xMyA0Mi44VjQ4MEg2NGMtMTcuNiAwLTMyLTE0LjQtMzItMzJWMTI4YzAtMTcuNiAxNC40LTMyIDMyLTMyaDE2MHY2NGgxMjhWOTZoMTYwYzE3LjYgMCAzMiAxNC40IDMyIDMydjMyMHpcIiBjbGFzc05hbWU9XCJcIj48L3BhdGg+PC9zdmc+Q2FkYXN0cmFyLXNlPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6XCI+PC9wYXRoPjwvc3ZnPjwvYnRuPlxuICAgICAgICAgICAgICAgIDwvbWVudWl0ZW1zPlxuICAgICAgICAgICAgICAgIDxzaWRlYmFyZGl2aWRlcj48L3NpZGViYXJkaXZpZGVyPlxuICAgIFx0XHRcdDxtZW51c2l0ZW1vYmlsZT5cbiAgICBcdCAgICAgICAgICAgIDxzaWRlYmFyc2VwYXJhdG9yPldlYnNpdGUgTWVudTwvc2lkZWJhcnNlcGFyYXRvcj5cbiAgICBcdCAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudS1pdGVtcyBtZW51LWljb25zXCI+XG4gICAgXHQgICAgICAgICAgICAgICAgXG4gICAgXHQgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBcdDxzaWRlYmFyZGl2aWRlcj48L3NpZGViYXJkaXZpZGVyPlxuICAgICAgICAgICAgICAgIDwvbWVudXNpdGVtb2JpbGU+XG4gICAgICAgICAgICAgICAgPHNpZGViYXJzZXBhcmF0b3I+TVlBUFAgTW9kZWxzPC9zaWRlYmFyc2VwYXJhdG9yPlxuICAgICAgICAgICAgICAgIDxtZW51aXRlbXM+XG4gICAgICAgICAgICAgICAgICAgIDxidG4gaHJlZj1cIi4vXCI+PHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1tb2JpbGUtYWx0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0xOTIgNDE2YzAgMTcuNy0xNC4zIDMyLTMyIDMycy0zMi0xNC4zLTMyLTMyIDE0LjMtMzIgMzItMzIgMzIgMTQuMyAzMiAzMnptNDgtNjBWOTJjMC02LjYtNS40LTEyLTEyLTEySDkyYy02LjYgMC0xMiA1LjQtMTIgMTJ2MjY0YzAgNi42IDUuNCAxMiAxMiAxMmgxMzZjNi42IDAgMTItNS40IDEyLTEyem04MC0zMDh2NDE2YzAgMjYuNS0yMS41IDQ4LTQ4IDQ4SDQ4Yy0yNi41IDAtNDgtMjEuNS00OC00OFY0OEMwIDIxLjUgMjEuNSAwIDQ4IDBoMjI0YzI2LjUgMCA0OCAyMS41IDQ4IDQ4em0tNDggNDEwVjU0YzAtMy4zLTIuNy02LTYtNkg1NGMtMy4zIDAtNiAyLjctNiA2djQwNGMwIDMuMyAyLjcgNiA2IDZoMjEyYzMuMyAwIDYtMi43IDYtNnpcIj48L3BhdGg+PC9zdmc+QWJvdXQgTXkgQXBwPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6XCI+PC9wYXRoPjwvc3ZnPjwvYnRuPlxuICAgICAgICAgICAgICAgICAgICA8YnRuIGNsYXNzTmFtZT1cInN1Ym1lbnUtaGFzLW51bWJlcnNcIj5cbiAgICAgICAgICAgICAgICAgICAgXHQ8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLXR2XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk00MDAgMjQ0di04YzAtNi42IDUuNC0xMiAxMi0xMmg4YzYuNiAwIDEyIDUuNCAxMiAxMnY4YzAgNi42LTUuNCAxMi0xMiAxMmgtOGMtNi42IDAtMTItNS40LTEyLTEyem0xMiA3Nmg4YzYuNiAwIDEyLTUuNCAxMi0xMnYtOGMwLTYuNi01LjQtMTItMTItMTJoLThjLTYuNiAwLTEyIDUuNC0xMiAxMnY4YzAgNi42IDUuNCAxMiAxMiAxMnptLTM2LTEzNi41cy0xLjUtNy41LTE0NC03LjUtMTQ0LjUgNy41LTE0NC41IDcuNVM4MCAxODQgODAgMjg4czcuNSAxMDQuNSA3LjUgMTA0LjVTODggNDAwIDIzMiA0MDBzMTQ0LTcuNSAxNDQtNy41IDcuNS0uNSA3LjUtMTA0LjUtNy41LTEwNC41LTcuNS0xMDQuNXpNNTEyIDE0NHYyODhjMCAyNi41LTIxLjUgNDgtNDggNDhoLTE2djMyaC00OGwtMTAuNy0zMkgxMjIuN0wxMTIgNTEySDY0di0zMkg0OGMtMjYuNSAwLTQ4LTIxLjUtNDgtNDhWMTQ0YzAtMjYuNSAyMS41LTQ4IDQ4LTQ4aDE0MC45bC01NC01NS4yYy05LjMtOS41LTkuMS0yNC43LjMtMzMuOSA5LjUtOS4zIDI0LjctOS4xIDMzLjkuM0wyNTYgOTZsODYuOS04OC44YzkuMy05LjUgMjQuNS05LjYgMzMuOS0uMyA5LjUgOS4zIDkuNiAyNC41LjMgMzMuOWwtNTQgNTUuMkg0NjRjMjYuNSAwIDQ4IDIxLjUgNDggNDh6bS00OCAwSDQ4djI4OGg0MTZWMTQ0elwiPjwvcGF0aD48L3N2Zz5Db21tdW5pY2F0aW9uPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy10ZXJtaW5hbFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMzQuNDk1IDM2LjQ2NWwyMTEuMDUxIDIxMS4wNWM0LjY4NiA0LjY4NiA0LjY4NiAxMi4yODQgMCAxNi45NzFMMzQuNDk1IDQ3NS41MzVjLTQuNjg2IDQuNjg2LTEyLjI4NCA0LjY4Ni0xNi45NyAwbC03LjA3MS03LjA3Yy00LjY4Ni00LjY4Ni00LjY4Ni0xMi4yODQgMC0xNi45NzFMMjA1Ljk0NyAyNTYgMTAuNDU0IDYwLjUwNmMtNC42ODYtNC42ODYtNC42ODYtMTIuMjg0IDAtMTYuOTcxbDcuMDcxLTcuMDdjNC42ODYtNC42ODcgMTIuMjg0LTQuNjg3IDE2Ljk3IDB6TTY0MCA0Njh2LTEwYzAtNi42MjctNS4zNzMtMTItMTItMTJIMzAwYy02LjYyNyAwLTEyIDUuMzczLTEyIDEydjEwYzAgNi42MjcgNS4zNzMgMTIgMTIgMTJoMzI4YzYuNjI3IDAgMTItNS4zNzMgMTItMTJ6XCI+PC9wYXRoPjwvc3ZnPjxjb3VudD40PC9jb3VudD5cbiAgICBcdCAgICAgICAgICAgICAgICA8c3VibWVudT5cbiAgICBcdCAgICAgICAgICAgICAgICAgICAgPGJ0biBjbGFzc05hbWU9XCJkaXNhYmxlXCI+PHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1hbmdsZS1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjI0LjMgMjczbC0xMzYgMTM2Yy05LjQgOS40LTI0LjYgOS40LTMzLjkgMGwtMjIuNi0yMi42Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOWw5Ni40LTk2LjQtOTYuNC05Ni40Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOUw1NC4zIDEwM2M5LjQtOS40IDI0LjYtOS40IDMzLjkgMGwxMzYgMTM2YzkuNSA5LjQgOS41IDI0LjYuMSAzNHpcIj48L3BhdGg+PC9zdmc+QWfDqm5jaWFzIGUgUHJvZHV0b3JhczxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctY2lyY2xlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNTYgOEMxMTkgOCA4IDExOSA4IDI1NnMxMTEgMjQ4IDI0OCAyNDggMjQ4LTExMSAyNDgtMjQ4UzM5MyA4IDI1NiA4elwiPjwvcGF0aD48L3N2Zz48L2J0bj5cbiAgICBcdCAgICAgICAgICAgICAgICAgICAgPGJ0biBocmVmPVwiLi90aGVtZXMvcHJvZHV0b3Jhcy9cIj48c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWFuZ2xlLXJpZ2h0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yMjQuMyAyNzNsLTEzNiAxMzZjLTkuNCA5LjQtMjQuNiA5LjQtMzMuOSAwbC0yMi42LTIyLjZjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45bDk2LjQtOTYuNC05Ni40LTk2LjRjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45TDU0LjMgMTAzYzkuNC05LjQgMjQuNi05LjQgMzMuOSAwbDEzNiAxMzZjOS41IDkuNCA5LjUgMjQuNi4xIDM0elwiPjwvcGF0aD48L3N2Zz5Qcm9tb8Onw6NvIGUgRXZlbnRvczxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctY2lyY2xlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNTYgOEMxMTkgOCA4IDExOSA4IDI1NnMxMTEgMjQ4IDI0OCAyNDggMjQ4LTExMSAyNDgtMjQ4UzM5MyA4IDI1NiA4elwiPjwvcGF0aD48L3N2Zz48L2J0bj5cbiAgICBcdCAgICAgICAgICAgICAgICAgICAgPGJ0biBocmVmPVwiLi90aGVtZXMvc3VwZXJ0di9cIj48c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWFuZ2xlLXJpZ2h0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yMjQuMyAyNzNsLTEzNiAxMzZjLTkuNCA5LjQtMjQuNiA5LjQtMzMuOSAwbC0yMi42LTIyLjZjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45bDk2LjQtOTYuNC05Ni40LTk2LjRjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45TDU0LjMgMTAzYzkuNC05LjQgMjQuNi05LjQgMzMuOSAwbDEzNiAxMzZjOS41IDkuNCA5LjUgMjQuNi4xIDM0elwiPjwvcGF0aD48L3N2Zz5FbWlzc29yYSBUVjxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctY2lyY2xlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNTYgOEMxMTkgOCA4IDExOSA4IDI1NnMxMTEgMjQ4IDI0OCAyNDggMjQ4LTExMSAyNDgtMjQ4UzM5MyA4IDI1NiA4elwiPjwvcGF0aD48L3N2Zz48L2J0bj5cbiAgICBcdCAgICAgICAgICAgICAgICAgICAgPGJ0biBjbGFzc05hbWU9XCJkaXNhYmxlXCI+PHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1hbmdsZS1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjI0LjMgMjczbC0xMzYgMTM2Yy05LjQgOS40LTI0LjYgOS40LTMzLjkgMGwtMjIuNi0yMi42Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOWw5Ni40LTk2LjQtOTYuNC05Ni40Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOUw1NC4zIDEwM2M5LjQtOS40IDI0LjYtOS40IDMzLjkgMGwxMzYgMTM2YzkuNSA5LjQgOS41IDI0LjYuMSAzNHpcIj48L3BhdGg+PC9zdmc+UsOhZGlvczxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctY2lyY2xlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNTYgOEMxMTkgOCA4IDExOSA4IDI1NnMxMTEgMjQ4IDI0OCAyNDggMjQ4LTExMSAyNDgtMjQ4UzM5MyA4IDI1NiA4elwiPjwvcGF0aD48L3N2Zz48L2J0bj5cbiAgICBcdCAgICAgICAgICAgICAgICA8L3N1Ym1lbnU+XG4gICAgXHQgICAgICAgICAgICA8L2J0bj5cbiAgICAgICAgICAgICAgICAgICAgPGJ0biBjbGFzc05hbWU9XCJzdWJtZW51LWhhcy1udW1iZXJzXCI+XG4gICAgICAgICAgICAgICAgICAgIFx0PHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1zdGFyXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yMjQgMjg4Yzc5LjUgMCAxNDQtNjQuNSAxNDQtMTQ0UzMwMy41IDAgMjI0IDAgODAgNjQuNSA4MCAxNDRzNjQuNSAxNDQgMTQ0IDE0NHptMC0yNDBjNTIuOSAwIDk2IDQzLjEgOTYgOTZzLTQzLjEgOTYtOTYgOTYtOTYtNDMuMS05Ni05NiA0My4xLTk2IDk2LTk2em04OS42IDI1NmMtMTEgMC0yMS44IDIuNi0zMi4yIDYuMi0xOCA2LjMtMzcuMyA5LjgtNTcuNCA5LjhzLTM5LjQtMy41LTU3LjQtOS44Yy0xMC40LTMuNi0yMS4yLTYuMi0zMi4yLTYuMkM2MC4yIDMwNCAwIDM2NC4yIDAgNDM4LjRWNDg4YzAgMTMuMyAxMC43IDI0IDI0IDI0czI0LTEwLjcgMjQtMjR2LTQ5LjZjMC00NS41IDM1LjQtODIuNCA4MC04NS44djUwYy0yMy4xIDYuOS00MCAyOC4xLTQwIDUzLjQgMCAzMC45IDI1LjEgNTYgNTYgNTZzNTYtMjUuMSA1Ni01NmMwLTI1LjMtMTYuOS00Ni41LTQwLTUzLjR2LTQ0LjdjMjAuOCA2LjMgNDIuMyAxMC4xIDY0IDEwLjEgMjEuOCAwIDQzLjItMy44IDY0LTEwLjF2MzYuM2MtMjguMiA3LjUtNDggMzQuNS00OCA2NC42VjQ4OGMwIDQuMiAxLjcgOC4zIDQuNyAxMS4zbDEwLjMgMTAuM2MzLjEgMy4xIDguMiAzLjEgMTEuMyAwbDExLjMtMTEuM2MzLjEtMy4xIDMuMS04LjIgMC0xMS4zbC01LjctNS43VjQ1NmMwLTE5LjQgMTcuNC0zNC44IDM3LjQtMzEuNiAxNS43IDIuNiAyNi42IDE3LjQgMjYuNiAzMy4zdjIzLjZsLTUuNyA1LjdjLTMuMSAzLjEtMy4xIDguMiAwIDExLjNsMTEuMyAxMS4zYzMuMSAzLjEgOC4yIDMuMSAxMS4zIDBsMTAuMy0xMC4zYzMtMyA0LjctNy4xIDQuNy0xMS4zdi0zMmMwLTI5LjctMjAuNS01NC41LTQ4LTYxLjZ2LTQxLjdjNDQuNiAzLjMgODAgNDAuMyA4MCA4NS44VjQ4OGMwIDEzLjMgMTAuNyAyNCAyNCAyNHMyNC0xMC43IDI0LTI0di00OS42Yy4yLTc0LjItNjAtMTM0LjQtMTM0LjItMTM0LjR6TTE2OCA0NTZjMCAxMy4zLTEwLjcgMjQtMjQgMjRzLTI0LTEwLjctMjQtMjQgMTAuNy0yNCAyNC0yNCAyNCAxMC43IDI0IDI0elwiPjwvcGF0aD48L3N2Zz5Qcm9maXNzaW9uYWxzPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy10ZXJtaW5hbFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMzQuNDk1IDM2LjQ2NWwyMTEuMDUxIDIxMS4wNWM0LjY4NiA0LjY4NiA0LjY4NiAxMi4yODQgMCAxNi45NzFMMzQuNDk1IDQ3NS41MzVjLTQuNjg2IDQuNjg2LTEyLjI4NCA0LjY4Ni0xNi45NyAwbC03LjA3MS03LjA3Yy00LjY4Ni00LjY4Ni00LjY4Ni0xMi4yODQgMC0xNi45NzFMMjA1Ljk0NyAyNTYgMTAuNDU0IDYwLjUwNmMtNC42ODYtNC42ODYtNC42ODYtMTIuMjg0IDAtMTYuOTcxbDcuMDcxLTcuMDdjNC42ODYtNC42ODcgMTIuMjg0LTQuNjg3IDE2Ljk3IDB6TTY0MCA0Njh2LTEwYzAtNi42MjctNS4zNzMtMTItMTItMTJIMzAwYy02LjYyNyAwLTEyIDUuMzczLTEyIDEydjEwYzAgNi42MjcgNS4zNzMgMTIgMTIgMTJoMzI4YzYuNjI3IDAgMTItNS4zNzMgMTItMTJ6XCI+PC9wYXRoPjwvc3ZnPjxjb3VudD42PC9jb3VudD5cbiAgICBcdCAgICAgICAgICAgICAgICA8c3VibWVudT5cbiAgICBcdCAgICAgICAgICAgICAgICAgICAgPGJ0biBjbGFzc05hbWU9XCJkaXNhYmxlXCI+PHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1hbmdsZS1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjI0LjMgMjczbC0xMzYgMTM2Yy05LjQgOS40LTI0LjYgOS40LTMzLjkgMGwtMjIuNi0yMi42Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOWw5Ni40LTk2LjQtOTYuNC05Ni40Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOUw1NC4zIDEwM2M5LjQtOS40IDI0LjYtOS40IDMzLjkgMGwxMzYgMTM2YzkuNSA5LjQgOS41IDI0LjYuMSAzNHpcIj48L3BhdGg+PC9zdmc+QXRvcmVzPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6XCI+PC9wYXRoPjwvc3ZnPjwvYnRuPlxuICAgIFx0ICAgICAgICAgICAgICAgICAgICA8YnRuIGhyZWY9XCIuL3RoZW1lcy9jYW50b3Jlcy9cIj48c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWFuZ2xlLXJpZ2h0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yMjQuMyAyNzNsLTEzNiAxMzZjLTkuNCA5LjQtMjQuNiA5LjQtMzMuOSAwbC0yMi42LTIyLjZjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45bDk2LjQtOTYuNC05Ni40LTk2LjRjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45TDU0LjMgMTAzYzkuNC05LjQgMjQuNi05LjQgMzMuOSAwbDEzNiAxMzZjOS41IDkuNCA5LjUgMjQuNi4xIDM0elwiPjwvcGF0aD48L3N2Zz5DYW50b3JlczxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctY2lyY2xlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNTYgOEMxMTkgOCA4IDExOSA4IDI1NnMxMTEgMjQ4IDI0OCAyNDggMjQ4LTExMSAyNDgtMjQ4UzM5MyA4IDI1NiA4elwiPjwvcGF0aD48L3N2Zz48L2J0bj5cbiAgICBcdCAgICAgICAgICAgICAgICAgICAgPGJ0biBjbGFzc05hbWU9XCJkaXNhYmxlXCI+PHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1hbmdsZS1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjI0LjMgMjczbC0xMzYgMTM2Yy05LjQgOS40LTI0LjYgOS40LTMzLjkgMGwtMjIuNi0yMi42Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOWw5Ni40LTk2LjQtOTYuNC05Ni40Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOUw1NC4zIDEwM2M5LjQtOS40IDI0LjYtOS40IDMzLjkgMGwxMzYgMTM2YzkuNSA5LjQgOS41IDI0LjYuMSAzNHpcIj48L3BhdGg+PC9zdmc+RGVudGlzdGFzPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6XCI+PC9wYXRoPjwvc3ZnPjwvYnRuPlxuICAgIFx0ICAgICAgICAgICAgICAgICAgICA8YnRuIGNsYXNzTmFtZT1cImRpc2FibGVcIj48c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWFuZ2xlLXJpZ2h0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yMjQuMyAyNzNsLTEzNiAxMzZjLTkuNCA5LjQtMjQuNiA5LjQtMzMuOSAwbC0yMi42LTIyLjZjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45bDk2LjQtOTYuNC05Ni40LTk2LjRjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45TDU0LjMgMTAzYzkuNC05LjQgMjQuNi05LjQgMzMuOSAwbDEzNiAxMzZjOS41IDkuNCA5LjUgMjQuNi4xIDM0elwiPjwvcGF0aD48L3N2Zz5BcnF1aXRldG9zPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6XCI+PC9wYXRoPjwvc3ZnPjwvYnRuPlxuICAgIFx0ICAgICAgICAgICAgICAgICAgICA8YnRuIGNsYXNzTmFtZT1cImRpc2FibGVcIj48c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWFuZ2xlLXJpZ2h0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yMjQuMyAyNzNsLTEzNiAxMzZjLTkuNCA5LjQtMjQuNiA5LjQtMzMuOSAwbC0yMi42LTIyLjZjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45bDk2LjQtOTYuNC05Ni40LTk2LjRjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45TDU0LjMgMTAzYzkuNC05LjQgMjQuNi05LjQgMzMuOSAwbDEzNiAxMzZjOS41IDkuNCA5LjUgMjQuNi4xIDM0elwiPjwvcGF0aD48L3N2Zz5BZHZvZ2Fkb3M8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWNpcmNsZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjU2IDhDMTE5IDggOCAxMTkgOCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzOTMgOCAyNTYgOHpcIj48L3BhdGg+PC9zdmc+PC9idG4+XG4gICAgXHQgICAgICAgICAgICAgICAgICAgIDxidG4gY2xhc3NOYW1lPVwiZGlzYWJsZVwiPjxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctYW5nbGUtcmlnaHRcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIwIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTIyNC4zIDI3M2wtMTM2IDEzNmMtOS40IDkuNC0yNC42IDkuNC0zMy45IDBsLTIyLjYtMjIuNmMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlsOTYuNC05Ni40LTk2LjQtOTYuNGMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlMNTQuMyAxMDNjOS40LTkuNCAyNC42LTkuNCAzMy45IDBsMTM2IDEzNmM5LjUgOS40IDkuNSAyNC42LjEgMzR6XCI+PC9wYXRoPjwvc3ZnPlByb2dyYW1hZG9yZXM8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWNpcmNsZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjU2IDhDMTE5IDggOCAxMTkgOCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzOTMgOCAyNTYgOHpcIj48L3BhdGg+PC9zdmc+PC9idG4+XG4gICAgXHQgICAgICAgICAgICAgICAgPC9zdWJtZW51PlxuICAgIFx0ICAgICAgICAgICAgPC9idG4+XG4gICAgICAgICAgICAgICAgICAgIDxidG4gY2xhc3NOYW1lPVwic3VibWVudS1oYXMtbnVtYmVyc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1zdG9yZXNcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIwIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTYzNS43IDE3Ni4xbC05MS40LTE2MEM1MzguNiA2LjIgNTI4IDAgNTE2LjUgMGgtMzkzQzExMiAwIDEwMS40IDYuMiA5NS43IDE2LjFsLTkxLjQgMTYwQy03LjkgMTk3LjUgNy40IDIyNCAzMiAyMjRoMzJ2MjU0LjVDNjQgNDk3IDc4LjMgNTEyIDk2IDUxMmgyNTZjMTcuNyAwIDMyLTE1IDMyLTMzLjVWMjI0aDE2MHYyODBjMCA0LjQgMy42IDggOCA4aDE2YzQuNCAwIDgtMy42IDgtOFYyMjRoMzJjMjQuNiAwIDM5LjktMjYuNSAyNy43LTQ3Ljl6TTM1MiA0NzguNWMwIC45LS4zIDEuNC0uMiAxLjVsLTI1NS4yLjJzLS42LS41LS42LTEuN1YzNTJoMjU2djEyNi41em0wLTE1OC41SDk2di05NmgyNTZ2OTZ6TTMyLjEgMTkybDkxLjQtMTYwaDM5M0w2MDggMTkySDMyLjF6XCI+PC9wYXRoPjwvc3ZnPlN0b3JlczxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctdGVybWluYWxcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIwIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTM0LjQ5NSAzNi40NjVsMjExLjA1MSAyMTEuMDVjNC42ODYgNC42ODYgNC42ODYgMTIuMjg0IDAgMTYuOTcxTDM0LjQ5NSA0NzUuNTM1Yy00LjY4NiA0LjY4Ni0xMi4yODQgNC42ODYtMTYuOTcgMGwtNy4wNzEtNy4wN2MtNC42ODYtNC42ODYtNC42ODYtMTIuMjg0IDAtMTYuOTcxTDIwNS45NDcgMjU2IDEwLjQ1NCA2MC41MDZjLTQuNjg2LTQuNjg2LTQuNjg2LTEyLjI4NCAwLTE2Ljk3MWw3LjA3MS03LjA3YzQuNjg2LTQuNjg3IDEyLjI4NC00LjY4NyAxNi45NyAwek02NDAgNDY4di0xMGMwLTYuNjI3LTUuMzczLTEyLTEyLTEySDMwMGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnYxMGMwIDYuNjI3IDUuMzczIDEyIDEyIDEyaDMyOGM2LjYyNyAwIDEyLTUuMzczIDEyLTEyelwiPjwvcGF0aD48L3N2Zz48Y291bnQ+NzwvY291bnQ+XG4gICAgXHQgICAgICAgICAgICAgICAgPHN1Ym1lbnU+XG4gICAgXHQgICAgICAgICAgICAgICAgICAgIDxidG4gaHJlZj1cIi4vdGhlbWVzL21lcmNhZG9saXZyZS9cIj48c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWFuZ2xlLXJpZ2h0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yMjQuMyAyNzNsLTEzNiAxMzZjLTkuNCA5LjQtMjQuNiA5LjQtMzMuOSAwbC0yMi42LTIyLjZjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45bDk2LjQtOTYuNC05Ni40LTk2LjRjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45TDU0LjMgMTAzYzkuNC05LjQgMjQuNi05LjQgMzMuOSAwbDEzNiAxMzZjOS41IDkuNCA5LjUgMjQuNi4xIDM0elwiPjwvcGF0aD48L3N2Zz5NZXJjYWRvIExpdnJlPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6XCI+PC9wYXRoPjwvc3ZnPjwvYnRuPlxuICAgIFx0ICAgICAgICAgICAgICAgICAgICA8YnRuIGNsYXNzTmFtZT1cImRpc2FibGVcIj48c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWFuZ2xlLXJpZ2h0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yMjQuMyAyNzNsLTEzNiAxMzZjLTkuNCA5LjQtMjQuNiA5LjQtMzMuOSAwbC0yMi42LTIyLjZjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45bDk2LjQtOTYuNC05Ni40LTk2LjRjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45TDU0LjMgMTAzYzkuNC05LjQgMjQuNi05LjQgMzMuOSAwbDEzNiAxMzZjOS41IDkuNCA5LjUgMjQuNi4xIDM0elwiPjwvcGF0aD48L3N2Zz5JbmZvcm3DoXRpY2E8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWNpcmNsZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjU2IDhDMTE5IDggOCAxMTkgOCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzOTMgOCAyNTYgOHpcIj48L3BhdGg+PC9zdmc+PC9idG4+XG4gICAgXHQgICAgICAgICAgICAgICAgICAgIDxidG4gY2xhc3NOYW1lPVwiZGlzYWJsZVwiPjxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctYW5nbGUtcmlnaHRcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIwIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTIyNC4zIDI3M2wtMTM2IDEzNmMtOS40IDkuNC0yNC42IDkuNC0zMy45IDBsLTIyLjYtMjIuNmMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlsOTYuNC05Ni40LTk2LjQtOTYuNGMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlMNTQuMyAxMDNjOS40LTkuNCAyNC42LTkuNCAzMy45IDBsMTM2IDEzNmM5LjUgOS40IDkuNSAyNC42LjEgMzR6XCI+PC9wYXRoPjwvc3ZnPkNvbnN0cnXDp8OjbzxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctY2lyY2xlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNTYgOEMxMTkgOCA4IDExOSA4IDI1NnMxMTEgMjQ4IDI0OCAyNDggMjQ4LTExMSAyNDgtMjQ4UzM5MyA4IDI1NiA4elwiPjwvcGF0aD48L3N2Zz48L2J0bj5cbiAgICBcdCAgICAgICAgICAgICAgICAgICAgPGJ0biBjbGFzc05hbWU9XCJkaXNhYmxlXCI+PHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1hbmdsZS1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjI0LjMgMjczbC0xMzYgMTM2Yy05LjQgOS40LTI0LjYgOS40LTMzLjkgMGwtMjIuNi0yMi42Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOWw5Ni40LTk2LjQtOTYuNC05Ni40Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOUw1NC4zIDEwM2M5LjQtOS40IDI0LjYtOS40IDMzLjkgMGwxMzYgMTM2YzkuNSA5LjQgOS41IDI0LjYuMSAzNHpcIj48L3BhdGg+PC9zdmc+Q2Fsw6dhZG9zPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6XCI+PC9wYXRoPjwvc3ZnPjwvYnRuPlxuICAgIFx0ICAgICAgICAgICAgICAgICAgICA8YnRuIGhyZWY9XCIuL3RoZW1lcy9jZWxtYXIvXCI+PHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1hbmdsZS1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjI0LjMgMjczbC0xMzYgMTM2Yy05LjQgOS40LTI0LjYgOS40LTMzLjkgMGwtMjIuNi0yMi42Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOWw5Ni40LTk2LjQtOTYuNC05Ni40Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOUw1NC4zIDEwM2M5LjQtOS40IDI0LjYtOS40IDMzLjkgMGwxMzYgMTM2YzkuNSA5LjQgOS41IDI0LjYuMSAzNHpcIj48L3BhdGg+PC9zdmc+UGxhbmVqYWRvczxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctY2lyY2xlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNTYgOEMxMTkgOCA4IDExOSA4IDI1NnMxMTEgMjQ4IDI0OCAyNDggMjQ4LTExMSAyNDgtMjQ4UzM5MyA4IDI1NiA4elwiPjwvcGF0aD48L3N2Zz48L2J0bj5cbiAgICBcdCAgICAgICAgICAgICAgICAgICAgPGJ0biBjbGFzc05hbWU9XCJkaXNhYmxlXCI+PHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1hbmdsZS1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjI0LjMgMjczbC0xMzYgMTM2Yy05LjQgOS40LTI0LjYgOS40LTMzLjkgMGwtMjIuNi0yMi42Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOWw5Ni40LTk2LjQtOTYuNC05Ni40Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOUw1NC4zIDEwM2M5LjQtOS40IDI0LjYtOS40IDMzLjkgMGwxMzYgMTM2YzkuNSA5LjQgOS41IDI0LjYuMSAzNHpcIj48L3BhdGg+PC9zdmc+Um91cGFzPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6XCI+PC9wYXRoPjwvc3ZnPjwvYnRuPlxuICAgIFx0ICAgICAgICAgICAgICAgIDwvc3VibWVudT5cbiAgICBcdCAgICAgICAgICAgIDwvYnRuPlxuICAgICAgICAgICAgICAgICAgICA8YnRuIGNsYXNzTmFtZT1cInN1Ym1lbnUtaGFzLW51bWJlcnNcIj5cbiAgICAgICAgICAgICAgICAgICAgXHQ8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLXJlc3RhdXJhbnRlc1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMzQ0LjEgNDcwLjNsMTQuMi0xNjQuOGMtNDIuMS0zMy4xLTcwLjQtNzctNzAuNC0xMjkuNUMyODggODEuNyAzNzYuMSAwIDQ0MCAwYzIyLjEgMCA0MCAxNy4zIDQwIDM4LjV2NDM1YzAgMjEuMi0xNy45IDM4LjUtNDAgMzguNWgtNTZjLTIyLjggMC00MS44LTE4LjctMzkuOS00MS43ek0zMjAgMTc2YzAgNTEgMzIuMiA4NS41IDcxLjggMTE0LjVMMzc2IDQ3My4xYy0uMyAzLjcgMy40IDYuOSA4IDYuOWg1NmM0LjMgMCA4LTMgOC02LjV2LTQzNWMwLTMuNS0zLjctNi41LTgtNi41LTQ0LjYgMC0xMjAgNjUuOC0xMjAgMTQ0ek0yNDAuNyAzMy44QzIzNy40IDE0LjMgMjE5LjUgMCAxOTQuNiAwYy0xMS45IDAtMjQuMSAzLjQtMzMuMyAxMS4yQzE1Mi45IDQuMSAxNDEuMyAwIDEyOCAwcy0yNC45IDQuMS0zMy4zIDExLjJDODUuNSAzLjQgNzMuMyAwIDYxLjQgMCAzNi4yIDAgMTguNiAxNC41IDE1LjMgMzMuOCAxMy41IDQzLjIgMCAxMTguNCAwIDE0OS45YzAgNTAuOSAyNi43IDkxLjYgNzEgMTEwLjdMNTkuNiA0NzEuNEM1OC40IDQ5My40IDc1LjkgNTEyIDk4IDUxMmg2MGMyMiAwIDM5LjYtMTguNSAzOC40LTQwLjZMMTg1IDI2MC42YzQ0LjItMTkuMSA3MS01OS44IDcxLTExMC43IDAtMzEuNS0xMy41LTEwNi43LTE1LjMtMTE2LjF6TTE1Mi4zIDI0MGwxMi4yIDIzMy4xYy4yIDMuNy0yLjcgNi45LTYuNSA2LjlIOThjLTMuNyAwLTYuNy0zLjEtNi41LTYuOUwxMDMuNyAyNDBDNjEuMyAyMzEuMiAzMiAxOTcgMzIgMTQ5LjljMC0yOS43IDE0LjgtMTEwLjYgMTQuOC0xMTAuNiAxLjYtOS45IDI4LjMtOS43IDI5LjUuMlYxNjJjLjkgMTEuNSAyOC4yIDExLjcgMjkuNS4ybDcuNC0xMjIuOWMxLjYtOS43IDI3LjktOS43IDI5LjUgMGw3LjQgMTIyLjljMS4zIDExLjQgMjguNiAxMS4yIDI5LjUtLjJWMzkuNmMxLjItOS45IDI3LjktMTAuMSAyOS41LS4yIDAgMCAxNC44IDgwLjkgMTQuOCAxMTAuNi4xIDQ2LjgtMjkgODEuMi03MS42IDkwelwiPjwvcGF0aD48L3N2Zz5BbGltZW50YcOnw6NvPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy10ZXJtaW5hbFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMzQuNDk1IDM2LjQ2NWwyMTEuMDUxIDIxMS4wNWM0LjY4NiA0LjY4NiA0LjY4NiAxMi4yODQgMCAxNi45NzFMMzQuNDk1IDQ3NS41MzVjLTQuNjg2IDQuNjg2LTEyLjI4NCA0LjY4Ni0xNi45NyAwbC03LjA3MS03LjA3Yy00LjY4Ni00LjY4Ni00LjY4Ni0xMi4yODQgMC0xNi45NzFMMjA1Ljk0NyAyNTYgMTAuNDU0IDYwLjUwNmMtNC42ODYtNC42ODYtNC42ODYtMTIuMjg0IDAtMTYuOTcxbDcuMDcxLTcuMDdjNC42ODYtNC42ODcgMTIuMjg0LTQuNjg3IDE2Ljk3IDB6TTY0MCA0Njh2LTEwYzAtNi42MjctNS4zNzMtMTItMTItMTJIMzAwYy02LjYyNyAwLTEyIDUuMzczLTEyIDEydjEwYzAgNi42MjcgNS4zNzMgMTIgMTIgMTJoMzI4YzYuNjI3IDAgMTItNS4zNzMgMTItMTJ6XCI+PC9wYXRoPjwvc3ZnPjxjb3VudD41PC9jb3VudD5cbiAgICBcdCAgICAgICAgICAgICAgICA8c3VibWVudT5cbiAgICBcdCAgICAgICAgICAgICAgICAgICAgPGJ0biBjbGFzc05hbWU9XCJkaXNhYmxlXCI+PHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1hbmdsZS1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjI0LjMgMjczbC0xMzYgMTM2Yy05LjQgOS40LTI0LjYgOS40LTMzLjkgMGwtMjIuNi0yMi42Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOWw5Ni40LTk2LjQtOTYuNC05Ni40Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOUw1NC4zIDEwM2M5LjQtOS40IDI0LjYtOS40IDMzLjkgMGwxMzYgMTM2YzkuNSA5LjQgOS41IDI0LjYuMSAzNHpcIj48L3BhdGg+PC9zdmc+UmVzdGF1cmFudGVzPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6XCI+PC9wYXRoPjwvc3ZnPjwvYnRuPlxuICAgIFx0ICAgICAgICAgICAgICAgICAgICA8YnRuIGNsYXNzTmFtZT1cImRpc2FibGVcIj48c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWFuZ2xlLXJpZ2h0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yMjQuMyAyNzNsLTEzNiAxMzZjLTkuNCA5LjQtMjQuNiA5LjQtMzMuOSAwbC0yMi42LTIyLjZjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45bDk2LjQtOTYuNC05Ni40LTk2LjRjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45TDU0LjMgMTAzYzkuNC05LjQgMjQuNi05LjQgMzMuOSAwbDEzNiAxMzZjOS41IDkuNCA5LjUgMjQuNi4xIDM0elwiPjwvcGF0aD48L3N2Zz5DYWZldGVyaWFzPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6XCI+PC9wYXRoPjwvc3ZnPjwvYnRuPlxuICAgIFx0ICAgICAgICAgICAgICAgICAgICA8YnRuIGhyZWY9XCIuL3RoZW1lcy9jZXJ2ZWphcmlhcy9cIj48c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWFuZ2xlLXJpZ2h0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yMjQuMyAyNzNsLTEzNiAxMzZjLTkuNCA5LjQtMjQuNiA5LjQtMzMuOSAwbC0yMi42LTIyLjZjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45bDk2LjQtOTYuNC05Ni40LTk2LjRjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45TDU0LjMgMTAzYzkuNC05LjQgMjQuNi05LjQgMzMuOSAwbDEzNiAxMzZjOS41IDkuNCA5LjUgMjQuNi4xIDM0elwiPjwvcGF0aD48L3N2Zz5DZXJ2ZWphcmlhczxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctY2lyY2xlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNTYgOEMxMTkgOCA4IDExOSA4IDI1NnMxMTEgMjQ4IDI0OCAyNDggMjQ4LTExMSAyNDgtMjQ4UzM5MyA4IDI1NiA4elwiPjwvcGF0aD48L3N2Zz48L2J0bj5cbiAgICBcdCAgICAgICAgICAgICAgICAgICAgPGJ0biBjbGFzc05hbWU9XCJkaXNhYmxlXCI+PHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1hbmdsZS1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjI0LjMgMjczbC0xMzYgMTM2Yy05LjQgOS40LTI0LjYgOS40LTMzLjkgMGwtMjIuNi0yMi42Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOWw5Ni40LTk2LjQtOTYuNC05Ni40Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOUw1NC4zIDEwM2M5LjQtOS40IDI0LjYtOS40IDMzLjkgMGwxMzYgMTM2YzkuNSA5LjQgOS41IDI0LjYuMSAzNHpcIj48L3BhdGg+PC9zdmc+UGl6emFyaWFzPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6XCI+PC9wYXRoPjwvc3ZnPjwvYnRuPlxuICAgIFx0ICAgICAgICAgICAgICAgICAgICA8YnRuIGNsYXNzTmFtZT1cImRpc2FibGVcIj48c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWFuZ2xlLXJpZ2h0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yMjQuMyAyNzNsLTEzNiAxMzZjLTkuNCA5LjQtMjQuNiA5LjQtMzMuOSAwbC0yMi42LTIyLjZjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45bDk2LjQtOTYuNC05Ni40LTk2LjRjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45TDU0LjMgMTAzYzkuNC05LjQgMjQuNi05LjQgMzMuOSAwbDEzNiAxMzZjOS41IDkuNCA5LjUgMjQuNi4xIDM0elwiPjwvcGF0aD48L3N2Zz5Tb3J2ZXRlcmlhczxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctY2lyY2xlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNTYgOEMxMTkgOCA4IDExOSA4IDI1NnMxMTEgMjQ4IDI0OCAyNDggMjQ4LTExMSAyNDgtMjQ4UzM5MyA4IDI1NiA4elwiPjwvcGF0aD48L3N2Zz48L2J0bj5cbiAgICBcdCAgICAgICAgICAgICAgICA8L3N1Ym1lbnU+XG4gICAgXHQgICAgICAgICAgICA8L2J0bj5cbiAgICAgICAgICAgICAgICAgICAgPGJ0biBjbGFzc05hbWU9XCJzdWJtZW51LWhhcy1udW1iZXJzXCI+XG4gICAgICAgICAgICAgICAgICAgIFx0PHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1zdG9yZXNcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIwIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTYzNS43IDE3Ni4xbC05MS40LTE2MEM1MzguNiA2LjIgNTI4IDAgNTE2LjUgMGgtMzkzQzExMiAwIDEwMS40IDYuMiA5NS43IDE2LjFsLTkxLjQgMTYwQy03LjkgMTk3LjUgNy40IDIyNCAzMiAyMjRoMzJ2MjU0LjVDNjQgNDk3IDc4LjMgNTEyIDk2IDUxMmgyNTZjMTcuNyAwIDMyLTE1IDMyLTMzLjVWMjI0aDE2MHYyODBjMCA0LjQgMy42IDggOCA4aDE2YzQuNCAwIDgtMy42IDgtOFYyMjRoMzJjMjQuNiAwIDM5LjktMjYuNSAyNy43LTQ3Ljl6TTM1MiA0NzguNWMwIC45LS4zIDEuNC0uMiAxLjVsLTI1NS4yLjJzLS42LS41LS42LTEuN1YzNTJoMjU2djEyNi41em0wLTE1OC41SDk2di05NmgyNTZ2OTZ6TTMyLjEgMTkybDkxLjQtMTYwaDM5M0w2MDggMTkySDMyLjF6XCI+PC9wYXRoPjwvc3ZnPkJlbGV6YTxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctdGVybWluYWxcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIwIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTM0LjQ5NSAzNi40NjVsMjExLjA1MSAyMTEuMDVjNC42ODYgNC42ODYgNC42ODYgMTIuMjg0IDAgMTYuOTcxTDM0LjQ5NSA0NzUuNTM1Yy00LjY4NiA0LjY4Ni0xMi4yODQgNC42ODYtMTYuOTcgMGwtNy4wNzEtNy4wN2MtNC42ODYtNC42ODYtNC42ODYtMTIuMjg0IDAtMTYuOTcxTDIwNS45NDcgMjU2IDEwLjQ1NCA2MC41MDZjLTQuNjg2LTQuNjg2LTQuNjg2LTEyLjI4NCAwLTE2Ljk3MWw3LjA3MS03LjA3YzQuNjg2LTQuNjg3IDEyLjI4NC00LjY4NyAxNi45NyAwek02NDAgNDY4di0xMGMwLTYuNjI3LTUuMzczLTEyLTEyLTEySDMwMGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnYxMGMwIDYuNjI3IDUuMzczIDEyIDEyIDEyaDMyOGM2LjYyNyAwIDEyLTUuMzczIDEyLTEyelwiPjwvcGF0aD48L3N2Zz48Y291bnQ+MjwvY291bnQ+XG4gICAgXHQgICAgICAgICAgICAgICAgPHN1Ym1lbnU+XG4gICAgXHQgICAgICAgICAgICAgICAgICAgIDxidG4gY2xhc3NOYW1lPVwiZGlzYWJsZVwiPjxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctYW5nbGUtcmlnaHRcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIwIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTIyNC4zIDI3M2wtMTM2IDEzNmMtOS40IDkuNC0yNC42IDkuNC0zMy45IDBsLTIyLjYtMjIuNmMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlsOTYuNC05Ni40LTk2LjQtOTYuNGMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlMNTQuMyAxMDNjOS40LTkuNCAyNC42LTkuNCAzMy45IDBsMTM2IDEzNmM5LjUgOS40IDkuNSAyNC42LjEgMzR6XCI+PC9wYXRoPjwvc3ZnPlNhbMOjbyBkZSBDYWJlbGVyZWlybzxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctY2lyY2xlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNTYgOEMxMTkgOCA4IDExOSA4IDI1NnMxMTEgMjQ4IDI0OCAyNDggMjQ4LTExMSAyNDgtMjQ4UzM5MyA4IDI1NiA4elwiPjwvcGF0aD48L3N2Zz48L2J0bj5cbiAgICBcdCAgICAgICAgICAgICAgICAgICAgPGJ0biBjbGFzc05hbWU9XCJkaXNhYmxlXCI+PHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1hbmdsZS1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjI0LjMgMjczbC0xMzYgMTM2Yy05LjQgOS40LTI0LjYgOS40LTMzLjkgMGwtMjIuNi0yMi42Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOWw5Ni40LTk2LjQtOTYuNC05Ni40Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOUw1NC4zIDEwM2M5LjQtOS40IDI0LjYtOS40IDMzLjkgMGwxMzYgMTM2YzkuNSA5LjQgOS41IDI0LjYuMSAzNHpcIj48L3BhdGg+PC9zdmc+QWx1Z3VlbCBkZSBSb3VwYXM8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWNpcmNsZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjU2IDhDMTE5IDggOCAxMTkgOCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzOTMgOCAyNTYgOHpcIj48L3BhdGg+PC9zdmc+PC9idG4+XG4gICAgXHQgICAgICAgICAgICAgICAgICAgIDxidG4gY2xhc3NOYW1lPVwiZGlzYWJsZVwiPjxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctYW5nbGUtcmlnaHRcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIwIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTIyNC4zIDI3M2wtMTM2IDEzNmMtOS40IDkuNC0yNC42IDkuNC0zMy45IDBsLTIyLjYtMjIuNmMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlsOTYuNC05Ni40LTk2LjQtOTYuNGMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlMNTQuMyAxMDNjOS40LTkuNCAyNC42LTkuNCAzMy45IDBsMTM2IDEzNmM5LjUgOS40IDkuNSAyNC42LjEgMzR6XCI+PC9wYXRoPjwvc3ZnPkNvc23DqXRpY29zPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6XCI+PC9wYXRoPjwvc3ZnPjwvYnRuPlxuICAgIFx0ICAgICAgICAgICAgICAgIDwvc3VibWVudT5cbiAgICBcdCAgICAgICAgICAgIDwvYnRuPlxuICAgICAgICAgICAgICAgIDwvbWVudWl0ZW1zPlxuICAgICAgICAgICAgICAgIDxzaWRlYmFyZGl2aWRlcj48L3NpZGViYXJkaXZpZGVyPlxuICAgICAgICAgICAgICAgIDxzaWRlYmFyc2VwYXJhdG9yPkZBTEUgQ09OT1NDTzwvc2lkZWJhcnNlcGFyYXRvcj5cbiAgICAgICAgICAgICAgICA8bWVudWNvbnRhY3Q+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJ0ZWw6MTEgOTMwMTggODM2M1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1waG9uZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNNDg3LjggMjQuMUwzODcgLjhjLTE0LjctMy40LTI5LjggNC4yLTM1LjggMTguMWwtNDYuNSAxMDguNWMtNS41IDEyLjctMS44IDI3LjcgOC45IDM2LjVsNTMuOSA0NC4xYy0zNCA2OS4yLTkwLjMgMTI1LjYtMTU5LjYgMTU5LjZsLTQ0LjEtNTMuOWMtOC44LTEwLjctMjMuOC0xNC40LTM2LjUtOC45TDE4LjkgMzUxLjNDNSAzNTcuMy0yLjYgMzcyLjMuOCAzODdMMjQgNDg3LjdDMjcuMyA1MDIgMzkuOSA1MTIgNTQuNSA1MTIgMzA2LjcgNTEyIDUxMiAzMDcuOCA1MTIgNTQuNWMwLTE0LjYtMTAtMjcuMi0yNC4yLTMwLjR6TTU1LjEgNDgwbC0yMy05OS42IDEwNy40LTQ2IDU5LjUgNzIuOGMxMDMuNi00OC42IDE1OS43LTEwNC45IDIwOC4xLTIwOC4xbC03Mi44LTU5LjUgNDYtMTA3LjQgOTkuNiAyM0M0NzkuNyAyODkuNyAyODkuNiA0NzkuNyA1NS4xIDQ4MHpcIj48L3BhdGg+PC9zdmc+TGlnYcOnw6NvPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6XCI+PC9wYXRoPjwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2FwaS53aGF0c2FwcC5jb20vc2VuZD9waG9uZT01NTExOTMwMTg4MzYzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLXdoYXRzYXBwXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0zODAuOSA5Ny4xQzMzOSA1NS4xIDI4My4yIDMyIDIyMy45IDMyYy0xMjIuNCAwLTIyMiA5OS42LTIyMiAyMjIgMCAzOS4xIDEwLjIgNzcuMyAyOS42IDExMUwwIDQ4MGwxMTcuNy0zMC45YzMyLjQgMTcuNyA2OC45IDI3IDEwNi4xIDI3aC4xYzEyMi4zIDAgMjI0LjEtOTkuNiAyMjQuMS0yMjIgMC01OS4zLTI1LjItMTE1LTY3LjEtMTU3em0tMTU3IDM0MS42Yy0zMy4yIDAtNjUuNy04LjktOTQtMjUuN2wtNi43LTQtNjkuOCAxOC4zTDcyIDM1OS4ybC00LjQtN2MtMTguNS0yOS40LTI4LjItNjMuMy0yOC4yLTk4LjIgMC0xMDEuNyA4Mi44LTE4NC41IDE4NC42LTE4NC41IDQ5LjMgMCA5NS42IDE5LjIgMTMwLjQgNTQuMSAzNC44IDM0LjkgNTYuMiA4MS4yIDU2LjEgMTMwLjUgMCAxMDEuOC04NC45IDE4NC42LTE4Ni42IDE4NC42em0xMDEuMi0xMzguMmMtNS41LTIuOC0zMi44LTE2LjItMzcuOS0xOC01LjEtMS45LTguOC0yLjgtMTIuNSAyLjgtMy43IDUuNi0xNC4zIDE4LTE3LjYgMjEuOC0zLjIgMy43LTYuNSA0LjItMTIgMS40LTMyLjYtMTYuMy01NC0yOS4xLTc1LjUtNjYtNS43LTkuOCA1LjctOS4xIDE2LjMtMzAuMyAxLjgtMy43LjktNi45LS41LTkuNy0xLjQtMi44LTEyLjUtMzAuMS0xNy4xLTQxLjItNC41LTEwLjgtOS4xLTkuMy0xMi41LTkuNS0zLjItLjItNi45LS4yLTEwLjYtLjItMy43IDAtOS43IDEuNC0xNC44IDYuOS01LjEgNS42LTE5LjQgMTktMTkuNCA0Ni4zIDAgMjcuMyAxOS45IDUzLjcgMjIuNiA1Ny40IDIuOCAzLjcgMzkuMSA1OS43IDk0LjggODMuOCAzNS4yIDE1LjIgNDkgMTYuNSA2Ni42IDEzLjkgMTAuNy0xLjYgMzIuOC0xMy40IDM3LjQtMjYuNCA0LjYtMTMgNC42LTI0LjEgMy4yLTI2LjQtMS4zLTIuNS01LTMuOS0xMC41LTYuNnpcIj48L3BhdGg+PC9zdmc+V2hhdHNhcHA8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWNpcmNsZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjU2IDhDMTE5IDggOCAxMTkgOCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzOTMgOCAyNTYgOHpcIj48L3BhdGg+PC9zdmc+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIm1haWx0bzpjb250YWN0QGF2bi5zeXN0ZW1zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLW1haWxcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIwIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOC45NDEgOCA4IDExOC45MTkgOCAyNTZjMCAxMzcuMDU4IDExMC45MTkgMjQ4IDI0OCAyNDggNTIuOTI1IDAgMTA0LjY4LTE3LjA3OCAxNDcuMDkyLTQ4LjMxOSA1LjUwMS00LjA1MiA2LjQyMy0xMS45MjQgMi4wOTUtMTcuMjExbC01LjA3NC02LjE5OGMtNC4wMTgtNC45MDktMTEuMTkzLTUuODgzLTE2LjMwNy0yLjEyOUMzNDYuOTMgNDU3LjIwOCAzMDEuOTc0IDQ3MiAyNTYgNDcyYy0xMTkuMzczIDAtMjE2LTk2LjYwNy0yMTYtMjE2IDAtMTE5LjM3NSA5Ni42MDctMjE2IDIxNi0yMTYgMTE4LjQ0NSAwIDIxNiA4MC4wMjQgMjE2IDIwMCAwIDcyLjg3My01Mi44MTkgMTA4LjI0MS0xMTYuMDY1IDEwOC4yNDEtMTkuNzM0IDAtMjMuNjk1LTEwLjgxNi0xOS41MDMtMzMuODY4bDMyLjA3LTE2NC4wNzFjMS40NDktNy40MTEtNC4yMjYtMTQuMzAyLTExLjc3Ny0xNC4zMDJoLTEyLjQyMWExMiAxMiAwIDAgMC0xMS43ODEgOS43MThjLTIuMjk0IDExLjg0Ni0yLjg2IDEzLjQ2NC0zLjg2MSAyNS42NDctMTEuNzI5LTI3LjA3OC0zOC42MzktNDMuMDIzLTczLjM3NS00My4wMjMtNjguMDQ0IDAtMTMzLjE3NiA2Mi45NS0xMzMuMTc2IDE1Ny4wMjcgMCA2MS41ODcgMzMuOTE1IDk4LjM1NCA5MC43MjMgOTguMzU0IDM5LjcyOSAwIDcwLjYwMS0yNC4yNzggODYuNjMzLTQ2Ljk4Mi0xLjIxMSAyNy43ODYgMTcuNDU1IDQyLjIxMyA0NS45NzUgNDIuMjEzQzQ1My4wODkgMzc4Ljk1NCA1MDQgMzIxLjcyOSA1MDQgMjQwIDUwNCAxMDMuODE0IDM5My44NjMgOCAyNTYgOHptLTM3LjkyIDM0Mi42MjdjLTM2LjY4MSAwLTU4LjU4LTI1LjEwOC01OC41OC02Ny4xNjYgMC03NC42OSA1MC43NjUtMTIxLjU0NSA5Ny4yMTctMTIxLjU0NSAzOC44NTcgMCA1OC4xMDIgMjcuNzkgNTguMTAyIDY1LjczNSAwIDU4LjEzMy0zOC4zNjkgMTIyLjk3Ni05Ni43MzkgMTIyLjk3NnpcIj48L3BhdGg+PC9zdmc+RS1tYWlsPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6XCI+PC9wYXRoPjwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJzbXM6MTEgOTMwMTggODM2M1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1tYWlsXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk00MDAgMzJINDhDMjEuNDkgMzIgMCA1My40OSAwIDgwdjM1MmMwIDI2LjUxIDIxLjQ5IDQ4IDQ4IDQ4aDM1MmMyNi41MSAwIDQ4LTIxLjQ5IDQ4LTQ4VjgwYzAtMjYuNTEtMjEuNDktNDgtNDgtNDh6bTE2IDQwMGMwIDguODIyLTcuMTc4IDE2LTE2IDE2SDQ4Yy04LjgyMiAwLTE2LTcuMTc4LTE2LTE2VjgwYzAtOC44MjIgNy4xNzgtMTYgMTYtMTZoMzUyYzguODIyIDAgMTYgNy4xNzggMTYgMTZ2MzUyem0tNjQtMzA0SDk2Yy0xNy42NzMgMC0zMiAxNC4zMjctMzIgMzJ2MTkyYzAgMTcuNjczIDE0LjMyNyAzMiAzMiAzMmgyNTZjMTcuNjczIDAgMzItMTQuMzI3IDMyLTMyVjE2MGMwLTE3LjY3My0xNC4zMjctMzItMzItMzJ6bTAgMzJ2MzMuODU1Yy0xNC4xMzYgMTEuNjI4LTM2LjU2NiAyOS42NjQtODIuMTE3IDY1LjgyMUMyNTkuNDI2IDI2OC4wMTUgMjM4Ljc0OCAyODggMjI0LjI1NiAyODhsLS4yNTYtLjAwMi0uMjU2LjAwMmMtMTQuNDkyIDAtMzUuMTctMTkuOTg0LTQ1LjYyOC0yOC4zMjQtNDUuNTQ0LTM2LjE1Mi02Ny45NzgtNTQuMTkyLTgyLjExNy02NS44MjJWMTYwSDM1MnpNOTYgMzUyVjIzNS4wOTJjMTQuMTA5IDExLjM2NyAzMy42MjQgMjYuOTQ4IDYyLjIyMSA0OS42NDggMTMuNzc3IDExLjAxIDM3LjkwMiAzNS4yNiA2NS41MjMgMzUuMjZsLjI1My0uMDAxLjI1OC4wMDFjMjcuNTI5IDAgNTEuMzkyLTIzLjk3NSA2NS41NDEtMzUuMjc0IDI4LjU4My0yMi42ODkgNDguMDk5LTM4LjI3IDYyLjIwMy00OS42MzRWMzUySDk2elwiPjwvcGF0aD48L3N2Zz5TTVM8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWNpcmNsZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjU2IDhDMTE5IDggOCAxMTkgOCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzOTMgOCAyNTYgOHpcIj48L3BhdGg+PC9zdmc+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L21lbnVjb250YWN0PlxuICAgICAgICAgICAgPC9tZW51c2Nyb2xsPlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIGxlZnRtZW51IHtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogLTM0MHB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTAwMDA7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAzMzBweDtcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDhweCAjMDAwO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWMyMjJlO1xuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGxlZnQgMzUwbXMgZWFzZSAwcztcbiAgICAgICAgICAgICAgICAgICAgLW1vei10cmFuc2l0aW9uOiBsZWZ0IDM1MG1zIGVhc2UgMHM7XG4gICAgICAgICAgICAgICAgICAgIC1tcy10cmFuc2l0aW9uOiBsZWZ0IDM1MG1zIGVhc2UgMHM7XG4gICAgICAgICAgICAgICAgICAgIC1vLXRyYW5zaXRpb246IGxlZnQgMzUwbXMgZWFzZSAwcztcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogbGVmdCAzNTBtcyBlYXNlIDBzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBzaWRlYmFydXNlciB7XG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCA2cHggNHB4IHJnYmEoMCwwLDAsLjMpO1xuICAgICAgICAgICAgICAgICAgICB0b3VjaC1hY3Rpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE4NXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBzaWRlYmFydXNlciBwaG90byB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMfS9zdGF0aWMvaW1hZ2VzL2ljb25zL2ljb24tMTkyeDE5Mi5wbmcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBzaWRlYmFydXNlciBwaG90byB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjMDBmOWE2O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgdG9wO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCA1cHggIzAwMDAwMDtcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggIzAwMDAwMDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxNXB4IDBweCAwcHggMTVweDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogOTBweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDkwcHg7XG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBzaWRlYmFydXNlciBwaG90byB0aXRsZSB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAyODVweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogMTA1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IHNpZGViYXJ1c2VyIHBob3RvIHN1YnRpdGxlIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjkwcHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjY2NjO1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDEwMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBzaWRlYmFydXNlciBiZ2ltZyB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMfS9zdGF0aWMvaW1hZ2VzL2hvbWVwYWdlL2JhY2tncm91bmQtYXZuLTEuanBnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgc2lkZWJhcnVzZXIgYmdpbWcge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IGhhcmQtbGlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2E3ZjdmZjtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE4NXB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgc2lkZWJhcnVzZXIgYmdzaGFkb3cge1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiA5O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE4NXB4O1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20scmdiYSgwLDAsMCwwKSAwLHJnYmEoMCwwLDAsMCkgMjAlLHJnYmEoMCwwLDAsLjEpIDQwJSxyZ2JhKDAsMCwwLC43KSA3MCUscmdiYSgwLDAsMCwxKSAxMDAlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDIzNXB4KTtcbiAgICAgICAgICAgICAgICAgICAgdG91Y2gtYWN0aW9uOiBwYW4teTtcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzMwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgc2lkZWJhcnNlcGFyYXRvcjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgc2lkZWJhcnNlcGFyYXRvciB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNjY2M7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnQtZW51IG1lbnVzY3JvbGwgc2lkZWJhcmRpdmlkZXIge1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wOiBzb2xpZCAxcHggcmdiYSgwLDAsMCwuMik7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCByZ2JhKDI1NSwyNTUsMjU1LC4wMyk7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0bixcbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVjb250YWN0ID4gYSB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xuICAgICAgICAgICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDU1cHg7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNjY2M7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuLmRpc2FibGUsXG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51Y29udGFjdCA+IGEuZGlzYWJsZSB7XG4gICAgICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAuNTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51aXRlbXMgPiBidG4gLnN2Zy1pbmxpbmUsXG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51Y29udGFjdCA+IGEgLnN2Zy1pbmxpbmUge1xuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogLS4xMjVlbTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMjVweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNiNTAwZmY7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjJweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgIHRvcDogM3B4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0biAuc3ZnLWlubGluZS5zdmctY2lyY2xlLFxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWNvbnRhY3QgPiBhIC5zdmctaW5saW5lLnN2Zy1jaXJjbGUge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzQzNDc1MjtcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAyNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0biAuc3ZnLWlubGluZS5zdmctdGVybWluYWwge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzQzNDc1MjtcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtNXB4O1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDE4cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuIC5zdmctaW5saW5lLnN2Zy10diB7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IC00cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuIC5zdmctaW5saW5lLnN2Zy1zdG9yZXMge1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtNXB4O1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDJweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51aXRlbXMgPiBidG4gLnN2Zy1pbmxpbmUuc3ZnLXJlc3RhdXJhbnRlcyxcbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0biAuc3ZnLWlubGluZS5zdmctd2hhdHNhcHAsXG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51aXRlbXMgPiBidG4gLnN2Zy1pbmxpbmUuc3ZnLXBob25lLFxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuIC5zdmctaW5saW5lLnN2Zy1tYWlsLFxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuIC5zdmctaW5saW5lLnN2Zy1zdGFyIHtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogLTJweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51aXRlbXMgPiBidG46aG92ZXIsXG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51Y29udGFjdCA+IGE6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjMyYjNhO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuOmhvdmVyIC5zdmctaW5saW5lLnN2Zy10ZXJtaW5hbCxcbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0bjpob3ZlciAuc3ZnLWlubGluZS5zdmctY2lyY2xlLFxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWNvbnRhY3QgPiBhOmhvdmVyIC5zdmctaW5saW5lLnN2Zy1jaXJjbGUge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuID4gY291bnQge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjYzk0N2ZmO1xuICAgICAgICAgICAgICAgICAgICByaWdodDogLTI1cHg7XG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAtMnB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0biBzdWJtZW51IHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSArIDI1cHgpO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IC0yNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0biBzdWJtZW51IGJ0bi5kaXNhYmxlIHtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogLjU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuIHN1Ym1lbnUgYnRuIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAzNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0biBzdWJtZW51Lm9wZW4ge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0bjpob3ZlciBzdWJtZW51IGJ0biAuc3ZnLWlubGluZS5zdmctY2lyY2xlIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM0MzQ3NTI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuOmhvdmVyIHN1Ym1lbnUgYnRuOm5vdCguZGlzYWJsZSk6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmYzYTRlO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuOmhvdmVyIHN1Ym1lbnUgYnRuOm5vdCguZGlzYWJsZSk6aG92ZXIgLnN2Zy1pbmxpbmUuc3ZnLWNpcmNsZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk0MHB4KSB7XG4gICAgICAgICAgICAgICAgICAgIGZvb3RlciBpbmZvcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA2MjVweCkge1xuICAgICAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2l0ZW1vYmlsZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgIFx0PC9sZWZ0bWVudT5cbiAgICApfVxufSJdfQ== */\n/*@ sourceURL=/home/ubuntu/workspace/estudo/next/components/interface.js */"),
        __self: this
      }));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);
var Footer =
/*#__PURE__*/
function (_Component2) {
  _inherits(Footer, _Component2);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, _getPrototypeOf(Footer).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("footer", {
        className: "jsx-3153431363",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 336
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("light-right", {
        className: "jsx-3153431363",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 337
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("version", {
        className: "jsx-3153431363" + " " + "ftl",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 338
        },
        __self: this
      }, "version: ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("item", {
        className: "jsx-3153431363",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 338
        },
        __self: this
      }, "2.1.01")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("infos", {
        className: "jsx-3153431363" + " " + "ftl",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 339
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "https://admin.avn.systems/v1/",
        target: "_blank",
        className: "jsx-3153431363",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 340
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("login", {
        className: "jsx-3153431363",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 340
        },
        __self: this
      }, "\uD83D\uDD10 CLIENT LOGIN")), " | ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("clickitem", {
        className: "jsx-3153431363",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 340
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("item", {
        className: "jsx-3153431363",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 340
        },
        __self: this
      }, "LOCAL:"), " WORLDWIDE"), " | ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "https://github.com/avnsystems",
        target: "_blank",
        className: "jsx-3153431363",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 340
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("item", {
        className: "jsx-3153431363",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 340
        },
        __self: this
      }, "GITHUB/"), "AVNSYSTEMS"), " | ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "mailto:myapp@avn.systems",
        className: "jsx-3153431363",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 340
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("item", {
        className: "jsx-3153431363",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 340
        },
        __self: this
      }, "E-MAIL:"), " CONTACT@AVN.SYSTEMS")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("language", {
        className: "jsx-3153431363" + " " + "ftr",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 342
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: "jsx-3153431363" + " " + "flag-icon flag-icon-us selected ftr",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 343
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "jsx-3153431363",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 344
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3153431363",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 345
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "jsx-3153431363",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 345
        },
        __self: this
      }, "English", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: "jsx-3153431363" + " " + "flag-icon flag-icon-us",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 345
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3153431363" + " " + "disable",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 346
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "jsx-3153431363",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 346
        },
        __self: this
      }, "Spanish", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: "jsx-3153431363" + " " + "flag-icon flag-icon-es",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 346
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3153431363" + " " + "disable",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 347
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "jsx-3153431363",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 347
        },
        __self: this
      }, "French", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: "jsx-3153431363" + " " + "flag-icon flag-icon-fr",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 347
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3153431363" + " " + "disable",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 348
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "jsx-3153431363",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 348
        },
        __self: this
      }, "Portuguese", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: "jsx-3153431363" + " " + "flag-icon flag-icon-br",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 348
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("copyright", {
        className: "jsx-3153431363" + " " + "ftr",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 351
        },
        __self: this
      }, "Copyright ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("item", {
        className: "jsx-3153431363",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 351
        },
        __self: this
      }, "2017")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "3153431363",
        css: "footer.jsx-3153431363{background:url(".concat("", "/static/images/footer.jpg);position:fixed;z-index:10000;height:37px;width:100%;bottom:0;webkit-box-shadow:0 -1px 10px 0 rgb(0,0,0);-moz-box-shadow:0 -1px 10px 0 rgb(0,0,0);box-shadow:0 -1px 10px 0 rgb(0,0,0);}footer.jsx-3153431363 copyright.jsx-3153431363,footer.jsx-3153431363 version.jsx-3153431363{padding:12px 15px;font-style:italic;font-size:10px;color:#bc74ff;}footer.jsx-3153431363 copyright.jsx-3153431363>item.jsx-3153431363,footer.jsx-3153431363 version.jsx-3153431363>item.jsx-3153431363,footer.jsx-3153431363 infos.jsx-3153431363 item.jsx-3153431363{color:#ABA49A;}footer.jsx-3153431363 infos.jsx-3153431363{left:calc(50% - 221px);margin-top:12px;position:fixed;font-size:10px;color:#776E63;}footer.jsx-3153431363 infos.jsx-3153431363 a.jsx-3153431363{color:#776E63;}footer.jsx-3153431363 infos.jsx-3153431363>a.jsx-3153431363>login.jsx-3153431363{color:#dc9d00;}footer.jsx-3153431363 infos.jsx-3153431363 a.jsx-3153431363:hover,footer.jsx-3153431363 infos.jsx-3153431363 a.jsx-3153431363:hover login.jsx-3153431363,footer.jsx-3153431363 infos.jsx-3153431363 clickitem.jsx-3153431363:hover{-webkit-text-decoration:none;text-decoration:none;color:#bc74ff;}footer.jsx-3153431363 language.jsx-3153431363 i.flag-icon.jsx-3153431363{margin:7px 15px 0px 0px;background-size:contain;cursor:pointer;height:25px;width:25px;}footer.jsx-3153431363 language.jsx-3153431363 i.flag-icon-us.jsx-3153431363{background-image:url(").concat("", "/static/images/flags/usa.png);}footer.jsx-3153431363 language.jsx-3153431363 i.flag-icon-es.jsx-3153431363{background-image:url(").concat("", "/static/images/flags/spain.png);}footer.jsx-3153431363 language.jsx-3153431363 i.flag-icon-fr.jsx-3153431363{background-image:url(").concat("", "/static/images/flags/france.png);}footer.jsx-3153431363 language.jsx-3153431363 i.flag-icon-br.jsx-3153431363{background-image:url(").concat("", "/static/images/flags/brazil.png);}footer.jsx-3153431363 language.jsx-3153431363:hover ul.jsx-3153431363{display:block;bottom:15px;}footer.jsx-3153431363 language.jsx-3153431363 ul.jsx-3153431363{border-left:2px solid #031c45;border-top:2px solid #031c45;padding:5px 15px 5px 0;background:#292826;margin-bottom:15px;text-align:right;list-style:none;position:fixed;display:none;right:0;}footer.jsx-3153431363 language.jsx-3153431363 ul.jsx-3153431363 li.jsx-3153431363{height:25px;}footer.jsx-3153431363 language.jsx-3153431363 ul.jsx-3153431363 li.disable.jsx-3153431363 a.jsx-3153431363{pointer-events:none;color:#82807e;}footer.jsx-3153431363 language.jsx-3153431363 ul.jsx-3153431363 li.disable.jsx-3153431363 a.jsx-3153431363>i.flag-icon.jsx-3153431363{-webkit-filter:grayscale(100%);-webkit-filter:grayscale(100%);filter:grayscale(100%);}footer.jsx-3153431363 language.jsx-3153431363 ul.jsx-3153431363 li.jsx-3153431363 a.jsx-3153431363{margin:0 10px 0 15px;position:relative;font-style:italic;text-align:right;font-size:12px;color:#bc74ff;}footer.jsx-3153431363 language.jsx-3153431363 ul.jsx-3153431363 li.jsx-3153431363 a.jsx-3153431363:hover{color:#ffffff;}footer.jsx-3153431363 language.jsx-3153431363 ul.jsx-3153431363 li.jsx-3153431363 a.jsx-3153431363>i.flag-icon.jsx-3153431363{float:right;height:25px;width:25px;margin:0;}@media (max-width:940px){footer.jsx-3153431363 infos.jsx-3153431363{display:none;}}@media (max-width:625px){}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VidW50dS93b3Jrc3BhY2UvZXN0dWRvL25leHQvY29tcG9uZW50cy9pbnRlcmZhY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK1Z3QixBQUcyRixBQVdwRCxBQU1KLEFBR1MsQUFPTCxBQUdBLEFBR08sQUFJRCxBQU91RCxBQUdFLEFBR0MsQUFHQSxBQUdwRSxBQUlnQixBQVlsQixBQUdRLEFBSVcsQUFJVixBQVFQLEFBR0YsQUFRSyxZQTdCckIsQUFzQmdCLENBUVosQ0FyRkosQUFVSSxBQUdBLEFBMEJZLEFBbUNoQixJQWhGc0IsRUFnRUosQ0FRSSxFQS9ERixDQWlCUSxBQTBEYixFQXRDZixJQUdpQyxDQW1CTixHQUgzQixDQW9CYSxDQXBGTSxHQVNBLEFBK0RHLEtBYXRCLElBM0RtQixFQUxHLENBcEJKLEdBU0MsR0ErREUsRUF4Qk0sSUF0QlgsQ0FMWixDQXBCSixJQVNrQixDQXZCQyxJQXNGQSxDQTlDSixJQUlmLEVBR0EsQ0FHQSxBQUdBLEFBU3VCLENBdENuQixFQXZCYyxBQStFbEIsQ0F2Q0EsR0E4Q2tCLFVBckZGLEVBNkRPLEVBeUJ2QixRQXJGZSxTQTZETSxFQTVEUixTQUNvQyxNQTREN0IsZ0JBQ0QsZUFDRixNQTdEOEIsT0E4RG5DLFFBQ1osMEJBOUQwQyxvQ0FDMUMiLCJmaWxlIjoiL2hvbWUvdWJ1bnR1L3dvcmtzcGFjZS9lc3R1ZG8vbmV4dC9jb21wb25lbnRzL2ludGVyZmFjZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qZ2xvYmFsICQgbmF2aWdhdG9yKi9cblxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5cbmltcG9ydCBOUHJvZ3Jlc3MgZnJvbSAnbnByb2dyZXNzJ1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcblxuUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VTdGFydCcsICh1cmwpID0+IHtcbiAgY29uc29sZS5sb2coYExvYWRpbmc6ICR7dXJsfWApXG4gIE5Qcm9ncmVzcy5zdGFydCgpXG59KVxuUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VDb21wbGV0ZScsICgpID0+IE5Qcm9ncmVzcy5kb25lKCkpXG5Sb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUVycm9yJywgKCkgPT4gTlByb2dyZXNzLmRvbmUoKSlcblxuZXhwb3J0IGRlZmF1bHQgKHsgY2hpbGRyZW4sXG4gICAgdGl0bGUgPSAnVGhpcyBpcyB0aGUgZGVmYXVsdCB0aXRsZScsXG4gICAgXG4gICAgb2dTaXRlTmFtZSA9IFwiYXZuLnN5c3RlbXNcIiwgb2dUaXRsZSA9IFwiV2Vic2l0ZSB8IGF2bi5zeXN0ZW1zXCIsXG4gICAgb2dVcmwgPSBcImh0dHBzOi8vYXZuLnN5c3RlbXNcIiwgb2dUeXBlID0gXCJhcnRpY2xlXCIsXG4gICAgb2dEZXNjcmlwdGlvbiA9IFwiV2Vic2l0ZSBjcmVhdGVkIHdpdGggbmV4dC5qcyBvcHRtaXplZCBhcyBhIFBXQVwiLFxuICAgIG9nSW1hZ2UgPSAnL3N0YXRpYy9pbWFnZXMvYXZuLnN5c3RlbXMub2ctaW1hZ2UuanBnJyxcbiAgICBcbiAgICB0d2l0dGVyU2l0ZSA9IFwiQGF2bi5zeXN0ZW1zXCIsXG4gICAgdHdpdHRlckNyZWF0b3IgPSBcIkBhdm4uc3lzdGVtc1wiLFxuICAgIFxuICAgIGNhbm9uaWNhbCA9IFwiaHR0cHM6Ly9hdm4uc3lzdGVtc1wiLFxuICAgIGZlZWRYbWwgPSBcImh0dHBzOi8vYXZuLnN5c3RlbXMvZmVlZC54bWxcIixcbiAgICBmZWVkSnNvbiA9IFwiaHR0cHM6Ly9hdm4uc3lzdGVtc20vZmVlZC5qc29uXCJcbiAgfSkgPT4gKFxuICA8aW50ZXJmYWNlPlxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPnsgdGl0bGUgfTwvdGl0bGU+XG4gICAgICA8bWV0YSBjaGFyU2V0PSd1dGYtOCcgLz5cbiAgICAgIDxtZXRhIG5hbWU9J3ZpZXdwb3J0JyBjb250ZW50PSdpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoJyAvPlxuICAgICAgPG1ldGEgbmFtZT1cImF1dGhvclwiIGNvbnRlbnQ9XCJBbGxhbiBBdmVsYXIgLSBodHRwczovL2FsbGFuYXZlbGFyLmNvbS9cIiAvPlxuICAgICAgXG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnNpdGVfbmFtZVwiIGNvbnRlbnQ9eyBvZ1NpdGVOYW1lIH0gLz5cbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PXsgb2dUaXRsZSB9IC8+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnVybFwiIGNvbnRlbnQ9eyBvZ1VybCB9IC8+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnR5cGVcIiBjb250ZW50PXsgb2dUeXBlIH0gLz5cbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PXsgb2dEZXNjcmlwdGlvbiB9IC8+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD17IHByb2Nlc3MuZW52LkJBQ0tFTkRfVVJMICsgb2dJbWFnZSB9IC8+XG4gICAgXG4gICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpjYXJkXCIgY29udGVudD1cInN1bW1hcnlfbGFyZ2VfaW1hZ2VcIiAvPlxuICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6c2l0ZVwiIGNvbnRlbnQ9eyB0d2l0dGVyU2l0ZSB9IC8+XG4gICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpjcmVhdG9yXCIgY29udGVudD17IHR3aXR0ZXJDcmVhdG9yIH0gLz5cbiAgICBcbiAgICAgIDxsaW5rIHJlbD1cImNhbm9uaWNhbFwiIGhyZWY9eyBjYW5vbmljYWwgfSAvPlxuICAgICAgPGxpbmsgcmVsPVwiYWx0ZXJuYXRlXCIgdHlwZT1cImFwcGxpY2F0aW9uL3Jzcyt4bWxcIiB0aXRsZT17IG9nVGl0bGUgfSBocmVmPXsgZmVlZFhtbCB9IC8+XG4gICAgICA8bGluayByZWw9XCJhbHRlcm5hdGVcIiB0eXBlPVwiYXBwbGljYXRpb24vanNvblwiIHRpdGxlPXsgb2dUaXRsZSB9IGhyZWY9eyBmZWVkSnNvbiB9IC8+XG5cbiAgICAgIDxsaW5rIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBzaXplcz1cIjExNHgxMTRcIiBocmVmPXsgcHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyAnL3N0YXRpYy9pbWFnZXMvaWNvbi5wbmcnfSAvPlxuICAgICAgPGxpbmsgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIHNpemVzPVwiMTIweDEyMFwiIGhyZWY9eyBwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArICcvc3RhdGljL2ltYWdlcy9pY29uLnBuZyd9IC8+XG4gICAgICA8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCIxNDR4MTQ0XCIgaHJlZj17IHByb2Nlc3MuZW52LkJBQ0tFTkRfVVJMICsgJy9zdGF0aWMvaW1hZ2VzL2ljb24ucG5nJ30gLz5cbiAgICAgIDxsaW5rIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBzaXplcz1cIjE1MngxNTJcIiBocmVmPXsgcHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyAnL3N0YXRpYy9pbWFnZXMvaWNvbi5wbmcnfSAvPlxuICAgICAgPGxpbmsgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIHNpemVzPVwiMTgweDE4MFwiIGhyZWY9eyBwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArICcvc3RhdGljL2ltYWdlcy9pY29uLnBuZyd9IC8+XG4gICAgICA8bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3BuZ1wiIGhyZWY9eyBwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArICcvc3RhdGljL2ltYWdlcy9pY29uLnBuZyd9IC8+XG4gICAgICA8bGluayByZWw9XCJzaG9ydGN1dCBpY29uXCIgaHJlZj17IHByb2Nlc3MuZW52LkJBQ0tFTkRfVVJMICsgJy9zdGF0aWMvaW1hZ2VzL2Zhdmljb24uaWNvJ30gLz5cbiAgICAgIFxuICAgICAgPGxpbmsgcmVsPVwibWFzay1pY29uXCIgaHJlZj1cIi9hc3NldHMvc2FmYXJpLXBpbm5lZC10YWIuc3ZnXCIgY29sb3I9XCIjNWJiYWQ1XCIgLz5cbiAgICAgIDxsaW5rIHJlbD1cIm1hbmlmZXN0XCIgaHJlZj17IHByb2Nlc3MuZW52LkJBQ0tFTkRfVVJMICsgJy9zdGF0aWMvbWFuaWZlc3QuanNvbid9IC8+XG4gICAgICBcbiAgICAgIDxtZXRhIG5hbWU9XCJtc2FwcGxpY2F0aW9uLVRpbGVDb2xvclwiIGNvbnRlbnQ9XCIjNTcwMEFFXCIgLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJtc2FwcGxpY2F0aW9uLVRpbGVJbWFnZVwiIGNvbnRlbnQ9eyBwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArICcvc3RhdGljL2ltYWdlcy9hdm4uc3lzdGVtcy5vZy1pbWFnZS5qcGcnfSAvPlxuICAgICAgPG1ldGEgbmFtZT1cIm1zYXBwbGljYXRpb24tY29uZmlnXCIgY29udGVudD17IHByb2Nlc3MuZW52LkJBQ0tFTkRfVVJMICsgJy9zdGF0aWMvYnJvd3NlcmNvbmZpZy54bWwnfSAvPlxuICAgICAgPG1ldGEgbmFtZT1cInRoZW1lLWNvbG9yXCIgY29udGVudD1cIiM1NzAwQUVcIiAvPlxuICAgICAgXG4gICAgICA8bGluayBkZWZlciByZWw9J3N0eWxlc2hlZXQnIGhyZWY9J2h0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuMC4wLWJldGEuMy9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnIGludGVncml0eT0nc2hhMzg0LVp1ZytRaURvSk9yWjV0NGxzc0xkeEdoVnJ1cmJtQldvcG9FbCtNNkJkRWZ3bkNKWnRLeGkxS2d4VXlKcTEzZHknIGNyb3NzT3JpZ2luPSdhbm9ueW1vdXMnIC8+XG4gICAgICA8bGluayByZWw9J3N0eWxlc2hlZXQnIHR5cGU9J3RleHQvY3NzJyBocmVmPXsgcHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyAnL3N0YXRpYy9jc3MvbnByb2dyZXNzLmNzcyd9IC8+XG4gICAgICA8c2NyaXB0IGRlZmVyIHNyYz1cImh0dHBzOi8vY29kZS5qcXVlcnkuY29tL2pxdWVyeS0zLjMuMS5taW4uanNcIj48L3NjcmlwdD5cbiAgICA8L0hlYWQ+XG4gICAgPEhlYWRlciAvPlxuICAgIDxMZWZ0TWVudSAvPlxuICAgIDxwYWdlPlxuICAgICAgICB7IGNoaWxkcmVuIH1cbiAgICA8L3BhZ2U+XG4gICAgPG1lbnVoaWRlcj48L21lbnVoaWRlcj5cbiAgICA8Rm9vdGVyIC8+XG4gICAgPHBhZ2Vsb2FkZXI+PGJhcj48L2Jhcj48L3BhZ2Vsb2FkZXI+XG4gICAgXG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDMyMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKCR7cHJvY2Vzcy5lbnYuQkFDS0VORF9VUkx9L3N0YXRpYy9pbWFnZXMvYm9keS1iZy5qcGcpICNGNUY3RjY7XG4gICAgICAgIH1cbiAgICAgICAgcGFnZSB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxODVweCAyMHB4O1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIH1cbiAgICAgICAgcHJlIGNvZGUge1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICAuZnRsIHtcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICB9XG4gICAgICAgIC5mdHIge1xuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgYm9keS5sZWZ0LW1lbnUgbGVmdG1lbnUge1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgfVxuICAgICAgICBib2R5LmxlZnQtbWVudSBtZW51aGlkZXIge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB9XG4gICAgICAgIGJvZHkubGVmdC1tZW51IGhlYWRlciBuYXZ0b2dnbGUge1xuICAgICAgICAgICAgbGVmdDogMzUwcHg7XG4gICAgICAgIH1cbiAgICAgICAgbWVudWhpZGVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjUpO1xuICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IGFsbDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgIHotaW5kZXg6IDk5OTk7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlIDBzO1xuICAgICAgICAgICAgLW1vei10cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2UgMHM7XG4gICAgICAgICAgICAtbXMtdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlIDBzO1xuICAgICAgICAgICAgLW8tdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlIDBzO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlIDBzO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAubnByb2dyZXNzLWJ1c3kgcGFnZWxvYWRlciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgICAgICBwYWdlbG9hZGVyIHtcbiAgICAgICAgICAgIG1hcmdpbjogLTE1cHggMCAwIC0xMDBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDA7XG4gICAgICAgICAgICB6LWluZGV4OiA5OTk5OTk5O1xuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICB9XG4gICAgICAgIHBhZ2Vsb2FkZXIgYmFyIHtcbiAgICAgICAgICAgIG1hcmdpbjogLTJweCAwIDAgLTg3cHg7XG4gICAgICAgICAgICBhbmltYXRpb246IGdyYWR0cmFuc2xhdGUgMnMgaW5maW5pdGUgbGluZWFyO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsbGVmdCB0b3AscmlnaHQgdG9wLGNvbG9yLXN0b3AoMCUsd2hpdGUpLGNvbG9yLXN0b3AoNTAlLCM4NTAwRkYpLGNvbG9yLXN0b3AoMTAwJSx3aGl0ZSkpOztcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogNDAwcHggMXB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzg1MDBGRjtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHdpZHRoOiAxNzRweDtcbiAgICAgICAgICAgIG9wYWNpdHk6IC44O1xuICAgICAgICAgICAgaGVpZ2h0OiA0cHg7XG4gICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzk5cHgpIHtcbiAgICAgICAgICAgIGJvZHkubGVmdC1tZW51IGxlZnRtZW51LCBsZWZ0bWVudSBtZW51c2Nyb2xsIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gNjlweCkhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMzMwcHg7XG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiAyNjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9pbnRlcmZhY2U+XG4pXG5cbmV4cG9ydCBjbGFzcyBIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbXBvbmVudERpZE1vdW50ICgpIHtcbiAgICAgICAgaWYgKCdzZXJ2aWNlV29ya2VyJyBpbiBuYXZpZ2F0b3IpIHtcbiAgICAgICAgLy8gbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXJcbiAgICAgICAgLy8gICAucmVnaXN0ZXIocHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKycvc2VydmljZS13b3JrZXIuanMnKVxuICAgICAgICAvLyAgIC50aGVuKHJlZ2lzdHJhdGlvbiA9PiB7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZygnc2VydmljZSB3b3JrZXIgcmVnaXN0cmF0aW9uIHN1Y2Nlc3NmdWwnKVxuICAgICAgICAvLyAgIH0pXG4gICAgICAgIC8vICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIC8vICAgICBjb25zb2xlLndhcm4oJ3NlcnZpY2Ugd29ya2VyIHJlZ2lzdHJhdGlvbiBmYWlsZWQnLCBlcnIubWVzc2FnZSlcbiAgICAgICAgLy8gICB9KVxuICAgICAgICB9XG4gICAgICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKHdpbmRvdykuc2Nyb2xsVG9wKCkgPiAwICYmICQod2luZG93KS53aWR0aCgpID4gNTUwID8gJChcImhlYWRlclwiKS5hZGRDbGFzcyhcInJlc2l6ZVwiKSA6ICQoXCJoZWFkZXJcIikucmVtb3ZlQ2xhc3MoXCJyZXNpemVcIilcbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgICAgICQoXCJoZWFkZXIgbmF2IGFcIikuaG92ZXIoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKFwiaGVhZGVyIG5hdnNsaWRlclwiKS5jc3Moe1xuICAgICAgICAgICAgICAgIGxlZnQ6ICQodGhpcykucG9zaXRpb24oKS5sZWZ0ICsgcGFyc2VJbnQoJCh0aGlzKS5jc3MoXCJtYXJnaW5MZWZ0XCIpKSArIFwicHhcIixcbiAgICAgICAgICAgICAgICB3aWR0aDogJCh0aGlzKS53aWR0aCgpICsgXCJweFwiLFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IFwiLjk5OVwiXG4gICAgICAgICAgICB9KVxuICAgICAgICB9LCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQoXCJoZWFkZXIgbmF2c2xpZGVyXCIpLmNzcyhcIm9wYWNpdHlcIiwgXCIwXCIpXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZW5kZXIgKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgICAgICAgICA8bG9nbz48dGV4dD5BVk4gU1lTVEVNUzwvdGV4dD48L2xvZ28+XG4gICAgICAgICAgICAgICAgPG5hdj5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nLycgYXM9eyBwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArIGAvYH0+PGE+SG9tZTwvYT48L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9hYm91dCcgYXM9eyBwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArIGAvYWJvdXRgfT48YT5BYm91dDwvYT48L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy90dm1hemUnIGFzPXsgcHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyBgL3R2bWF6ZWB9PjxhPlRWIE1hemU8L2E+PC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvNDA0JyBhcz17IHByb2Nlc3MuZW52LkJBQ0tFTkRfVVJMICsgYC80MDRgfT48YT40MDQ8L2E+PC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgICAgICAgIDxuYXZ0b2dnbGU+PGJhcj48L2Jhcj48YmFyPjwvYmFyPjxiYXI+PC9iYXI+PC9uYXZ0b2dnbGU+XG4gICAgICAgICAgICAgICAgPG5hdnNsaWRlcj48L25hdnNsaWRlcj5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTAwMDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDkwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBoZWFkZXIgbG9nbyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNnB4IDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNzBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDkwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMfS9zdGF0aWMvaW1hZ2VzL2ljb24ucG5nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IGdyYXk7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDE1MG1zIGVhc2UtaW4tb3V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMTUwbXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDE1MG1zIGVhc2UtaW4tb3V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgLW8tdHJhbnNpdGlvbjogYWxsIDE1MG1zIGVhc2UtaW4tb3V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDE1MG1zIGVhc2UtaW4tb3V0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlciBsb2dvOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtZmlsdGVyOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgLW1vei1maWx0ZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAtby1maWx0ZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyIGxvZ28gdGV4dCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWlubGluZS1ib3g7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAxMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNWY1ZjVmO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogNjBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBoZWFkZXIgbmF2IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlciBuYXYgYSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAyNXB4IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2Q5ZDlkOTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBoZWFkZXIgbmF2IGE6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM4NTAwRkY7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyIG5hdnRvZ2dsZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyIG5hdnRvZ2dsZSBiYXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNhYWE7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogN3B4IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNXB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlciBuYXZ0b2dnbGU6aG92ZXIgYmFyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjYmM3M2ZmO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlciBuYXZzbGlkZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICM4NTAwRkY7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDUwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDI1MG1zIGVhc2UtaW4tb3V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMjUwbXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDI1MG1zIGVhc2UtaW4tb3V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgLW8tdHJhbnNpdGlvbjogYWxsIDI1MG1zIGVhc2UtaW4tb3V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDI1MG1zIGVhc2UtaW4tb3V0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjI1cHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1OHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyIGxvZ28ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IGNhbGMoNTAlIC0gODVweCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1maWx0ZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLW1vei1maWx0ZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLW8tZmlsdGVyOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDFweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlciBuYXYge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXIgbmF2dG9nZ2xlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRm9vdGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgICAgIFxuICAgIH1cbiAgICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxmb290ZXI+XG4gICAgICAgICAgICA8bGlnaHQtcmlnaHQ+PC9saWdodC1yaWdodD5cbiAgICAgICAgICAgIDx2ZXJzaW9uIGNsYXNzTmFtZT1cImZ0bFwiPnZlcnNpb246IDxpdGVtPjIuMS4wMTwvaXRlbT48L3ZlcnNpb24+XG4gICAgICAgICAgICA8aW5mb3MgY2xhc3NOYW1lPVwiZnRsXCI+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vYWRtaW4uYXZuLnN5c3RlbXMvdjEvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+PGxvZ2luPvCflJAgQ0xJRU5UIExPR0lOPC9sb2dpbj48L2E+IHwgPGNsaWNraXRlbT48aXRlbT5MT0NBTDo8L2l0ZW0+IFdPUkxEV0lERTwvY2xpY2tpdGVtPiB8IDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vYXZuc3lzdGVtc1wiIHRhcmdldD1cIl9ibGFua1wiPjxpdGVtPkdJVEhVQi88L2l0ZW0+QVZOU1lTVEVNUzwvYT4gfCA8YSBocmVmPVwibWFpbHRvOm15YXBwQGF2bi5zeXN0ZW1zXCI+PGl0ZW0+RS1NQUlMOjwvaXRlbT4gQ09OVEFDVEBBVk4uU1lTVEVNUzwvYT5cbiAgICAgICAgICAgIDwvaW5mb3M+XG4gICAgICAgICAgICA8bGFuZ3VhZ2UgY2xhc3NOYW1lPVwiZnRyXCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmxhZy1pY29uIGZsYWctaWNvbi11cyBzZWxlY3RlZCBmdHJcIj48L2k+XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PGE+RW5nbGlzaDxpIGNsYXNzTmFtZT1cImZsYWctaWNvbiBmbGFnLWljb24tdXNcIj48L2k+PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkaXNhYmxlXCI+PGE+U3BhbmlzaDxpIGNsYXNzTmFtZT1cImZsYWctaWNvbiBmbGFnLWljb24tZXNcIj48L2k+PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkaXNhYmxlXCI+PGE+RnJlbmNoPGkgY2xhc3NOYW1lPVwiZmxhZy1pY29uIGZsYWctaWNvbi1mclwiPjwvaT48L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImRpc2FibGVcIj48YT5Qb3J0dWd1ZXNlPGkgY2xhc3NOYW1lPVwiZmxhZy1pY29uIGZsYWctaWNvbi1iclwiPjwvaT48L2E+PC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9sYW5ndWFnZT5cbiAgICAgICAgICAgIDxjb3B5cmlnaHQgY2xhc3NOYW1lPVwiZnRyXCI+Q29weXJpZ2h0IDxpdGVtPjIwMTc8L2l0ZW0+PC9jb3B5cmlnaHQ+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgZm9vdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKCR7cHJvY2Vzcy5lbnYuQkFDS0VORF9VUkx9L3N0YXRpYy9pbWFnZXMvZm9vdGVyLmpwZyk7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTAwMDA7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzdweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICAgICAgd2Via2l0LWJveC1zaGFkb3c6IDAgLTFweCAxMHB4IDAgcmdiKDAsIDAsIDApO1xuICAgICAgICAgICAgICAgICAgICAtbW96LWJveC1zaGFkb3c6IDAgLTFweCAxMHB4IDAgcmdiKDAsIDAsIDApO1xuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIC0xcHggMTBweCAwIHJnYigwLCAwLCAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9vdGVyIGNvcHlyaWdodCwgZm9vdGVyIHZlcnNpb24ge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMnB4IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2JjNzRmZjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9vdGVyIGNvcHlyaWdodCA+IGl0ZW0sIGZvb3RlciB2ZXJzaW9uID4gaXRlbSwgZm9vdGVyIGluZm9zIGl0ZW0ge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI0FCQTQ5QTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9vdGVyIGluZm9zIHtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogY2FsYyg1MCUgLSAyMjFweCk7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzc3NkU2MztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmb290ZXIgaW5mb3MgYSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzc3NkU2MztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmb290ZXIgaW5mb3MgPiBhID4gbG9naW4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNkYzlkMDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZm9vdGVyIGluZm9zIGE6aG92ZXIsIGZvb3RlciBpbmZvcyBhOmhvdmVyIGxvZ2luLCBmb290ZXIgaW5mb3MgY2xpY2tpdGVtOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjYmM3NGZmO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9vdGVyIGxhbmd1YWdlIGkuZmxhZy1pY29uIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA3cHggMTVweCAwcHggMHB4O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9vdGVyIGxhbmd1YWdlIGkuZmxhZy1pY29uLXVzIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7cHJvY2Vzcy5lbnYuQkFDS0VORF9VUkx9L3N0YXRpYy9pbWFnZXMvZmxhZ3MvdXNhLnBuZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvb3RlciBsYW5ndWFnZSBpLmZsYWctaWNvbi1lcyB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMfS9zdGF0aWMvaW1hZ2VzL2ZsYWdzL3NwYWluLnBuZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvb3RlciBsYW5ndWFnZSBpLmZsYWctaWNvbi1mciB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMfS9zdGF0aWMvaW1hZ2VzL2ZsYWdzL2ZyYW5jZS5wbmcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb290ZXIgbGFuZ3VhZ2UgaS5mbGFnLWljb24tYnIge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTH0vc3RhdGljL2ltYWdlcy9mbGFncy9icmF6aWwucG5nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9vdGVyIGxhbmd1YWdlOmhvdmVyIHVsIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMTVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9vdGVyIGxhbmd1YWdlIHVsIHtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjMDMxYzQ1O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wOiAycHggc29saWQgIzAzMWM0NTtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDE1cHggNXB4IDA7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyOTI4MjY7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb290ZXIgbGFuZ3VhZ2UgdWwgbGkge1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvb3RlciBsYW5ndWFnZSB1bCBsaS5kaXNhYmxlIGEge1xuICAgICAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM4MjgwN2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvb3RlciBsYW5ndWFnZSB1bCBsaS5kaXNhYmxlIGEgPiBpLmZsYWctaWNvbiB7XG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7XG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjogZ3JheXNjYWxlKDEwMCUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb290ZXIgbGFuZ3VhZ2UgdWwgbGkgYSB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAxMHB4IDAgMTVweDtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjYmM3NGZmO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb290ZXIgbGFuZ3VhZ2UgdWwgbGkgYTpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb290ZXIgbGFuZ3VhZ2UgdWwgbGkgYSA+IGkuZmxhZy1pY29uIHtcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5NDBweCkge1xuICAgICAgICAgICAgICAgICAgICBmb290ZXIgaW5mb3Mge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjI1cHgpIHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZm9vdGVyPlxuICAgICl9XG59XG5cbmV4cG9ydCBjbGFzcyBMZWZ0TWVudSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuICAgICAgICAkKFwibGVmdG1lbnUgbWVudXNjcm9sbCBtZW51aXRlbXMgPiBidG4uc3VibWVudS1oYXMtbnVtYmVyc1wiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGlmICgkKGUudGFyZ2V0KS5oYXNDbGFzcygnZGlzYWJsZScpKSB7XG4gICAgICAgICAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICgkKGUudGFyZ2V0KS5hdHRyKCdocmVmJykpIHtcbiAgICAgICAgICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ2xlZnQtbWVudScpO1xuICAgICAgICAgICAgICAgIC8vcmV0dXJuICQuZm4ubmF2aWdhdGUoZS50YXJnZXQsIGUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmZpbmQoJ3N1Ym1lbnUnKS50b2dnbGVDbGFzcyhcIm9wZW5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgICQoXCJoZWFkZXIgbmF2dG9nZ2xlLCBtZW51aGlkZXJcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAkKCdib2R5JykudG9nZ2xlQ2xhc3MoJ2xlZnQtbWVudScpO1xuICAgICAgICB9KVxuICAgIH1cbiAgICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxsZWZ0bWVudT5cbiAgICBcdFx0PHNpZGViYXJ1c2VyPlxuICAgIFx0ICAgICAgICA8cGhvdG8+XG4gICAgXHQgICAgICAgICAgICA8dGl0bGU+Qm9hIG5vaXRlLiDimIU8L3RpdGxlPlxuICAgIFx0ICAgICAgICAgICAgPHN1YnRpdGxlPkVudHJlIGNvbSBzZXUgbG9naW4gb3UgY2FkYXN0cmUtc2UhPC9zdWJ0aXRsZT5cbiAgICBcdCAgICAgICAgPC9waG90bz5cbiAgICBcdFx0ICAgIDxiZ2ltZz48L2JnaW1nPlxuICAgIFx0XHQgICAgPGJnc2hhZG93PjwvYmdzaGFkb3c+XG4gICAgXHRcdDwvc2lkZWJhcnVzZXI+XG4gICAgXHRcdDxtZW51c2Nyb2xsPlxuICAgICAgICAgICAgICAgIDxzaWRlYmFyc2VwYXJhdG9yPkFjZXNzbyBSZXN0cml0bzwvc2lkZWJhcnNlcGFyYXRvcj5cbiAgICAgICAgICAgICAgICA8bWVudWl0ZW1zPlxuICAgICAgICAgICAgICAgICAgICA8YnRuIGhyZWY9XCIvL2FkbWluLmF2bi5zeXN0ZW1zXCIgdGFyZ2V0PVwiX3NlbGZcIj5cbiAgICAgICAgICAgICAgICAgICAgXHQ8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTE0NCAxMTJ2NTEuNkg0OGMtMjYuNSAwLTQ4IDIxLjUtNDggNDh2ODguNmMwIDI2LjUgMjEuNSA0OCA0OCA0OGg5NnY1MS42YzAgNDIuNiA1MS43IDY0LjIgODEuOSAzMy45bDE0NC0xNDMuOWMxOC43LTE4LjcgMTguNy00OS4xIDAtNjcuOWwtMTQ0LTE0NEMxOTUuOCA0OCAxNDQgNjkuMyAxNDQgMTEyem0xOTIgMTQ0TDE5MiA0MDB2LTk5LjdINDh2LTg4LjZoMTQ0VjExMmwxNDQgMTQ0em04MCAxOTJoLTg0Yy02LjYgMC0xMi01LjQtMTItMTJ2LTI0YzAtNi42IDUuNC0xMiAxMi0xMmg4NGMyNi41IDAgNDgtMjEuNSA0OC00OFYxNjBjMC0yNi41LTIxLjUtNDgtNDgtNDhoLTg0Yy02LjYgMC0xMi01LjQtMTItMTJWNzZjMC02LjYgNS40LTEyIDEyLTEyaDg0YzUzIDAgOTYgNDMgOTYgOTZ2MTkyYzAgNTMtNDMgOTYtOTYgOTZ6XCIgY2xhc3NOYW1lPVwiXCI+PC9wYXRoPjwvc3ZnPkVudHJhcjxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctY2lyY2xlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNTYgOEMxMTkgOCA4IDExOSA4IDI1NnMxMTEgMjQ4IDI0OCAyNDggMjQ4LTExMSAyNDgtMjQ4UzM5MyA4IDI1NiA4elwiPjwvcGF0aD48L3N2Zz48L2J0bj5cbiAgICAgICAgICAgICAgICAgICAgPGJ0biBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImRpc2FibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgXHQ8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTc2IDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI4OCAyMDhjLTQ0LjIgMC04MCAzNS44LTgwIDgwczM1LjggODAgODAgODAgODAtMzUuOCA4MC04MC0zNS44LTgwLTgwLTgwem0wIDEyOGMtMjYuNSAwLTQ4LTIxLjUtNDgtNDhzMjEuNS00OCA0OC00OCA0OCAyMS41IDQ4IDQ4LTIxLjUgNDgtNDggNDh6TTUxMiA2NEgzNTJWMzJjMC0xNy43LTE0LjMtMzItMzItMzJoLTY0Yy0xNy43IDAtMzIgMTQuMy0zMiAzMnYzMkg2NEMyOC43IDY0IDAgOTIuNyAwIDEyOHYzMjBjMCAzNS4zIDI4LjcgNjQgNjQgNjRoNDQ4YzM1LjMgMCA2NC0yOC43IDY0LTY0VjEyOGMwLTM1LjMtMjguNy02NC02NC02NHpNMjU2IDMyaDY0djk2aC02NFYzMnptMTI4IDQ0OEgxOTJ2LTIxLjljMC05IDIuNi0xNy42IDcuNi0yNSA3LjItMTAuNyAyMC4zLTE3LjIgMzUtMTcuMiAxNS45IDAgMjMuNSA4IDUzLjQgOHMzNy42LTggNTMuNC04YzE0LjcgMCAyNy43IDYuNCAzNSAxNy4yIDUgNy40IDcuNiAxNiA3LjYgMjVWNDgwem0xNjAtMzJjMCAxNy42LTE0LjQgMzItMzIgMzJoLTk2di0yMS45YzAtMTUuOS00LjgtMzAuNi0xMy00Mi44LTEzLjgtMjAuNS0zNy4zLTMxLjMtNjEuNS0zMS4zLTIyLjIgMC0yNy44IDgtNTMuNCA4LTI1LjYgMC0zMS4yLTgtNTMuNC04LTI0LjIgMC00Ny43IDEwLjgtNjEuNSAzMS4zLTguMiAxMi4yLTEzIDI3LTEzIDQyLjhWNDgwSDY0Yy0xNy42IDAtMzItMTQuNC0zMi0zMlYxMjhjMC0xNy42IDE0LjQtMzIgMzItMzJoMTYwdjY0aDEyOFY5NmgxNjBjMTcuNiAwIDMyIDE0LjQgMzIgMzJ2MzIwelwiIGNsYXNzTmFtZT1cIlwiPjwvcGF0aD48L3N2Zz5DYWRhc3RyYXItc2U8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWNpcmNsZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjU2IDhDMTE5IDggOCAxMTkgOCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzOTMgOCAyNTYgOHpcIj48L3BhdGg+PC9zdmc+PC9idG4+XG4gICAgICAgICAgICAgICAgPC9tZW51aXRlbXM+XG4gICAgICAgICAgICAgICAgPHNpZGViYXJkaXZpZGVyPjwvc2lkZWJhcmRpdmlkZXI+XG4gICAgXHRcdFx0PG1lbnVzaXRlbW9iaWxlPlxuICAgIFx0ICAgICAgICAgICAgPHNpZGViYXJzZXBhcmF0b3I+V2Vic2l0ZSBNZW51PC9zaWRlYmFyc2VwYXJhdG9yPlxuICAgIFx0ICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51LWl0ZW1zIG1lbnUtaWNvbnNcIj5cbiAgICBcdCAgICAgICAgICAgICAgICBcbiAgICBcdCAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIFx0PHNpZGViYXJkaXZpZGVyPjwvc2lkZWJhcmRpdmlkZXI+XG4gICAgICAgICAgICAgICAgPC9tZW51c2l0ZW1vYmlsZT5cbiAgICAgICAgICAgICAgICA8c2lkZWJhcnNlcGFyYXRvcj5NWUFQUCBNb2RlbHM8L3NpZGViYXJzZXBhcmF0b3I+XG4gICAgICAgICAgICAgICAgPG1lbnVpdGVtcz5cbiAgICAgICAgICAgICAgICAgICAgPGJ0biBocmVmPVwiLi9cIj48c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLW1vYmlsZS1hbHRcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIwIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTE5MiA0MTZjMCAxNy43LTE0LjMgMzItMzIgMzJzLTMyLTE0LjMtMzItMzIgMTQuMy0zMiAzMi0zMiAzMiAxNC4zIDMyIDMyem00OC02MFY5MmMwLTYuNi01LjQtMTItMTItMTJIOTJjLTYuNiAwLTEyIDUuNC0xMiAxMnYyNjRjMCA2LjYgNS40IDEyIDEyIDEyaDEzNmM2LjYgMCAxMi01LjQgMTItMTJ6bTgwLTMwOHY0MTZjMCAyNi41LTIxLjUgNDgtNDggNDhINDhjLTI2LjUgMC00OC0yMS41LTQ4LTQ4VjQ4QzAgMjEuNSAyMS41IDAgNDggMGgyMjRjMjYuNSAwIDQ4IDIxLjUgNDggNDh6bS00OCA0MTBWNTRjMC0zLjMtMi43LTYtNi02SDU0Yy0zLjMgMC02IDIuNy02IDZ2NDA0YzAgMy4zIDIuNyA2IDYgNmgyMTJjMy4zIDAgNi0yLjcgNi02elwiPjwvcGF0aD48L3N2Zz5BYm91dCBNeSBBcHA8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWNpcmNsZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjU2IDhDMTE5IDggOCAxMTkgOCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzOTMgOCAyNTYgOHpcIj48L3BhdGg+PC9zdmc+PC9idG4+XG4gICAgICAgICAgICAgICAgICAgIDxidG4gY2xhc3NOYW1lPVwic3VibWVudS1oYXMtbnVtYmVyc1wiPlxuICAgICAgICAgICAgICAgICAgICBcdDxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctdHZcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIwIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTQwMCAyNDR2LThjMC02LjYgNS40LTEyIDEyLTEyaDhjNi42IDAgMTIgNS40IDEyIDEydjhjMCA2LjYtNS40IDEyLTEyIDEyaC04Yy02LjYgMC0xMi01LjQtMTItMTJ6bTEyIDc2aDhjNi42IDAgMTItNS40IDEyLTEydi04YzAtNi42LTUuNC0xMi0xMi0xMmgtOGMtNi42IDAtMTIgNS40LTEyIDEydjhjMCA2LjYgNS40IDEyIDEyIDEyem0tMzYtMTM2LjVzLTEuNS03LjUtMTQ0LTcuNS0xNDQuNSA3LjUtMTQ0LjUgNy41UzgwIDE4NCA4MCAyODhzNy41IDEwNC41IDcuNSAxMDQuNVM4OCA0MDAgMjMyIDQwMHMxNDQtNy41IDE0NC03LjUgNy41LS41IDcuNS0xMDQuNS03LjUtMTA0LjUtNy41LTEwNC41ek01MTIgMTQ0djI4OGMwIDI2LjUtMjEuNSA0OC00OCA0OGgtMTZ2MzJoLTQ4bC0xMC43LTMySDEyMi43TDExMiA1MTJINjR2LTMySDQ4Yy0yNi41IDAtNDgtMjEuNS00OC00OFYxNDRjMC0yNi41IDIxLjUtNDggNDgtNDhoMTQwLjlsLTU0LTU1LjJjLTkuMy05LjUtOS4xLTI0LjcuMy0zMy45IDkuNS05LjMgMjQuNy05LjEgMzMuOS4zTDI1NiA5Nmw4Ni45LTg4LjhjOS4zLTkuNSAyNC41LTkuNiAzMy45LS4zIDkuNSA5LjMgOS42IDI0LjUuMyAzMy45bC01NCA1NS4ySDQ2NGMyNi41IDAgNDggMjEuNSA0OCA0OHptLTQ4IDBINDh2Mjg4aDQxNlYxNDR6XCI+PC9wYXRoPjwvc3ZnPkNvbW11bmljYXRpb248c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLXRlcm1pbmFsXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0zNC40OTUgMzYuNDY1bDIxMS4wNTEgMjExLjA1YzQuNjg2IDQuNjg2IDQuNjg2IDEyLjI4NCAwIDE2Ljk3MUwzNC40OTUgNDc1LjUzNWMtNC42ODYgNC42ODYtMTIuMjg0IDQuNjg2LTE2Ljk3IDBsLTcuMDcxLTcuMDdjLTQuNjg2LTQuNjg2LTQuNjg2LTEyLjI4NCAwLTE2Ljk3MUwyMDUuOTQ3IDI1NiAxMC40NTQgNjAuNTA2Yy00LjY4Ni00LjY4Ni00LjY4Ni0xMi4yODQgMC0xNi45NzFsNy4wNzEtNy4wN2M0LjY4Ni00LjY4NyAxMi4yODQtNC42ODcgMTYuOTcgMHpNNjQwIDQ2OHYtMTBjMC02LjYyNy01LjM3My0xMi0xMi0xMkgzMDBjLTYuNjI3IDAtMTIgNS4zNzMtMTIgMTJ2MTBjMCA2LjYyNyA1LjM3MyAxMiAxMiAxMmgzMjhjNi42MjcgMCAxMi01LjM3MyAxMi0xMnpcIj48L3BhdGg+PC9zdmc+PGNvdW50PjQ8L2NvdW50PlxuICAgIFx0ICAgICAgICAgICAgICAgIDxzdWJtZW51PlxuICAgIFx0ICAgICAgICAgICAgICAgICAgICA8YnRuIGNsYXNzTmFtZT1cImRpc2FibGVcIj48c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWFuZ2xlLXJpZ2h0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yMjQuMyAyNzNsLTEzNiAxMzZjLTkuNCA5LjQtMjQuNiA5LjQtMzMuOSAwbC0yMi42LTIyLjZjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45bDk2LjQtOTYuNC05Ni40LTk2LjRjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45TDU0LjMgMTAzYzkuNC05LjQgMjQuNi05LjQgMzMuOSAwbDEzNiAxMzZjOS41IDkuNCA5LjUgMjQuNi4xIDM0elwiPjwvcGF0aD48L3N2Zz5BZ8OqbmNpYXMgZSBQcm9kdXRvcmFzPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6XCI+PC9wYXRoPjwvc3ZnPjwvYnRuPlxuICAgIFx0ICAgICAgICAgICAgICAgICAgICA8YnRuIGhyZWY9XCIuL3RoZW1lcy9wcm9kdXRvcmFzL1wiPjxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctYW5nbGUtcmlnaHRcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIwIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTIyNC4zIDI3M2wtMTM2IDEzNmMtOS40IDkuNC0yNC42IDkuNC0zMy45IDBsLTIyLjYtMjIuNmMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlsOTYuNC05Ni40LTk2LjQtOTYuNGMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlMNTQuMyAxMDNjOS40LTkuNCAyNC42LTkuNCAzMy45IDBsMTM2IDEzNmM5LjUgOS40IDkuNSAyNC42LjEgMzR6XCI+PC9wYXRoPjwvc3ZnPlByb21vw6fDo28gZSBFdmVudG9zPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6XCI+PC9wYXRoPjwvc3ZnPjwvYnRuPlxuICAgIFx0ICAgICAgICAgICAgICAgICAgICA8YnRuIGhyZWY9XCIuL3RoZW1lcy9zdXBlcnR2L1wiPjxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctYW5nbGUtcmlnaHRcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIwIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTIyNC4zIDI3M2wtMTM2IDEzNmMtOS40IDkuNC0yNC42IDkuNC0zMy45IDBsLTIyLjYtMjIuNmMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlsOTYuNC05Ni40LTk2LjQtOTYuNGMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlMNTQuMyAxMDNjOS40LTkuNCAyNC42LTkuNCAzMy45IDBsMTM2IDEzNmM5LjUgOS40IDkuNSAyNC42LjEgMzR6XCI+PC9wYXRoPjwvc3ZnPkVtaXNzb3JhIFRWPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6XCI+PC9wYXRoPjwvc3ZnPjwvYnRuPlxuICAgIFx0ICAgICAgICAgICAgICAgICAgICA8YnRuIGNsYXNzTmFtZT1cImRpc2FibGVcIj48c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWFuZ2xlLXJpZ2h0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yMjQuMyAyNzNsLTEzNiAxMzZjLTkuNCA5LjQtMjQuNiA5LjQtMzMuOSAwbC0yMi42LTIyLjZjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45bDk2LjQtOTYuNC05Ni40LTk2LjRjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45TDU0LjMgMTAzYzkuNC05LjQgMjQuNi05LjQgMzMuOSAwbDEzNiAxMzZjOS41IDkuNCA5LjUgMjQuNi4xIDM0elwiPjwvcGF0aD48L3N2Zz5Sw6FkaW9zPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6XCI+PC9wYXRoPjwvc3ZnPjwvYnRuPlxuICAgIFx0ICAgICAgICAgICAgICAgIDwvc3VibWVudT5cbiAgICBcdCAgICAgICAgICAgIDwvYnRuPlxuICAgICAgICAgICAgICAgICAgICA8YnRuIGNsYXNzTmFtZT1cInN1Ym1lbnUtaGFzLW51bWJlcnNcIj5cbiAgICAgICAgICAgICAgICAgICAgXHQ8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLXN0YXJcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIwIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTIyNCAyODhjNzkuNSAwIDE0NC02NC41IDE0NC0xNDRTMzAzLjUgMCAyMjQgMCA4MCA2NC41IDgwIDE0NHM2NC41IDE0NCAxNDQgMTQ0em0wLTI0MGM1Mi45IDAgOTYgNDMuMSA5NiA5NnMtNDMuMSA5Ni05NiA5Ni05Ni00My4xLTk2LTk2IDQzLjEtOTYgOTYtOTZ6bTg5LjYgMjU2Yy0xMSAwLTIxLjggMi42LTMyLjIgNi4yLTE4IDYuMy0zNy4zIDkuOC01Ny40IDkuOHMtMzkuNC0zLjUtNTcuNC05LjhjLTEwLjQtMy42LTIxLjItNi4yLTMyLjItNi4yQzYwLjIgMzA0IDAgMzY0LjIgMCA0MzguNFY0ODhjMCAxMy4zIDEwLjcgMjQgMjQgMjRzMjQtMTAuNyAyNC0yNHYtNDkuNmMwLTQ1LjUgMzUuNC04Mi40IDgwLTg1Ljh2NTBjLTIzLjEgNi45LTQwIDI4LjEtNDAgNTMuNCAwIDMwLjkgMjUuMSA1NiA1NiA1NnM1Ni0yNS4xIDU2LTU2YzAtMjUuMy0xNi45LTQ2LjUtNDAtNTMuNHYtNDQuN2MyMC44IDYuMyA0Mi4zIDEwLjEgNjQgMTAuMSAyMS44IDAgNDMuMi0zLjggNjQtMTAuMXYzNi4zYy0yOC4yIDcuNS00OCAzNC41LTQ4IDY0LjZWNDg4YzAgNC4yIDEuNyA4LjMgNC43IDExLjNsMTAuMyAxMC4zYzMuMSAzLjEgOC4yIDMuMSAxMS4zIDBsMTEuMy0xMS4zYzMuMS0zLjEgMy4xLTguMiAwLTExLjNsLTUuNy01LjdWNDU2YzAtMTkuNCAxNy40LTM0LjggMzcuNC0zMS42IDE1LjcgMi42IDI2LjYgMTcuNCAyNi42IDMzLjN2MjMuNmwtNS43IDUuN2MtMy4xIDMuMS0zLjEgOC4yIDAgMTEuM2wxMS4zIDExLjNjMy4xIDMuMSA4LjIgMy4xIDExLjMgMGwxMC4zLTEwLjNjMy0zIDQuNy03LjEgNC43LTExLjN2LTMyYzAtMjkuNy0yMC41LTU0LjUtNDgtNjEuNnYtNDEuN2M0NC42IDMuMyA4MCA0MC4zIDgwIDg1LjhWNDg4YzAgMTMuMyAxMC43IDI0IDI0IDI0czI0LTEwLjcgMjQtMjR2LTQ5LjZjLjItNzQuMi02MC0xMzQuNC0xMzQuMi0xMzQuNHpNMTY4IDQ1NmMwIDEzLjMtMTAuNyAyNC0yNCAyNHMtMjQtMTAuNy0yNC0yNCAxMC43LTI0IDI0LTI0IDI0IDEwLjcgMjQgMjR6XCI+PC9wYXRoPjwvc3ZnPlByb2Zpc3Npb25hbHM8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLXRlcm1pbmFsXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0zNC40OTUgMzYuNDY1bDIxMS4wNTEgMjExLjA1YzQuNjg2IDQuNjg2IDQuNjg2IDEyLjI4NCAwIDE2Ljk3MUwzNC40OTUgNDc1LjUzNWMtNC42ODYgNC42ODYtMTIuMjg0IDQuNjg2LTE2Ljk3IDBsLTcuMDcxLTcuMDdjLTQuNjg2LTQuNjg2LTQuNjg2LTEyLjI4NCAwLTE2Ljk3MUwyMDUuOTQ3IDI1NiAxMC40NTQgNjAuNTA2Yy00LjY4Ni00LjY4Ni00LjY4Ni0xMi4yODQgMC0xNi45NzFsNy4wNzEtNy4wN2M0LjY4Ni00LjY4NyAxMi4yODQtNC42ODcgMTYuOTcgMHpNNjQwIDQ2OHYtMTBjMC02LjYyNy01LjM3My0xMi0xMi0xMkgzMDBjLTYuNjI3IDAtMTIgNS4zNzMtMTIgMTJ2MTBjMCA2LjYyNyA1LjM3MyAxMiAxMiAxMmgzMjhjNi42MjcgMCAxMi01LjM3MyAxMi0xMnpcIj48L3BhdGg+PC9zdmc+PGNvdW50PjY8L2NvdW50PlxuICAgIFx0ICAgICAgICAgICAgICAgIDxzdWJtZW51PlxuICAgIFx0ICAgICAgICAgICAgICAgICAgICA8YnRuIGNsYXNzTmFtZT1cImRpc2FibGVcIj48c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWFuZ2xlLXJpZ2h0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yMjQuMyAyNzNsLTEzNiAxMzZjLTkuNCA5LjQtMjQuNiA5LjQtMzMuOSAwbC0yMi42LTIyLjZjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45bDk2LjQtOTYuNC05Ni40LTk2LjRjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45TDU0LjMgMTAzYzkuNC05LjQgMjQuNi05LjQgMzMuOSAwbDEzNiAxMzZjOS41IDkuNCA5LjUgMjQuNi4xIDM0elwiPjwvcGF0aD48L3N2Zz5BdG9yZXM8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWNpcmNsZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjU2IDhDMTE5IDggOCAxMTkgOCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzOTMgOCAyNTYgOHpcIj48L3BhdGg+PC9zdmc+PC9idG4+XG4gICAgXHQgICAgICAgICAgICAgICAgICAgIDxidG4gaHJlZj1cIi4vdGhlbWVzL2NhbnRvcmVzL1wiPjxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctYW5nbGUtcmlnaHRcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIwIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTIyNC4zIDI3M2wtMTM2IDEzNmMtOS40IDkuNC0yNC42IDkuNC0zMy45IDBsLTIyLjYtMjIuNmMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlsOTYuNC05Ni40LTk2LjQtOTYuNGMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlMNTQuMyAxMDNjOS40LTkuNCAyNC42LTkuNCAzMy45IDBsMTM2IDEzNmM5LjUgOS40IDkuNSAyNC42LjEgMzR6XCI+PC9wYXRoPjwvc3ZnPkNhbnRvcmVzPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6XCI+PC9wYXRoPjwvc3ZnPjwvYnRuPlxuICAgIFx0ICAgICAgICAgICAgICAgICAgICA8YnRuIGNsYXNzTmFtZT1cImRpc2FibGVcIj48c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWFuZ2xlLXJpZ2h0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yMjQuMyAyNzNsLTEzNiAxMzZjLTkuNCA5LjQtMjQuNiA5LjQtMzMuOSAwbC0yMi42LTIyLjZjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45bDk2LjQtOTYuNC05Ni40LTk2LjRjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45TDU0LjMgMTAzYzkuNC05LjQgMjQuNi05LjQgMzMuOSAwbDEzNiAxMzZjOS41IDkuNCA5LjUgMjQuNi4xIDM0elwiPjwvcGF0aD48L3N2Zz5EZW50aXN0YXM8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWNpcmNsZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjU2IDhDMTE5IDggOCAxMTkgOCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzOTMgOCAyNTYgOHpcIj48L3BhdGg+PC9zdmc+PC9idG4+XG4gICAgXHQgICAgICAgICAgICAgICAgICAgIDxidG4gY2xhc3NOYW1lPVwiZGlzYWJsZVwiPjxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctYW5nbGUtcmlnaHRcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIwIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTIyNC4zIDI3M2wtMTM2IDEzNmMtOS40IDkuNC0yNC42IDkuNC0zMy45IDBsLTIyLjYtMjIuNmMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlsOTYuNC05Ni40LTk2LjQtOTYuNGMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlMNTQuMyAxMDNjOS40LTkuNCAyNC42LTkuNCAzMy45IDBsMTM2IDEzNmM5LjUgOS40IDkuNSAyNC42LjEgMzR6XCI+PC9wYXRoPjwvc3ZnPkFycXVpdGV0b3M8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWNpcmNsZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjU2IDhDMTE5IDggOCAxMTkgOCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzOTMgOCAyNTYgOHpcIj48L3BhdGg+PC9zdmc+PC9idG4+XG4gICAgXHQgICAgICAgICAgICAgICAgICAgIDxidG4gY2xhc3NOYW1lPVwiZGlzYWJsZVwiPjxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctYW5nbGUtcmlnaHRcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIwIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTIyNC4zIDI3M2wtMTM2IDEzNmMtOS40IDkuNC0yNC42IDkuNC0zMy45IDBsLTIyLjYtMjIuNmMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlsOTYuNC05Ni40LTk2LjQtOTYuNGMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlMNTQuMyAxMDNjOS40LTkuNCAyNC42LTkuNCAzMy45IDBsMTM2IDEzNmM5LjUgOS40IDkuNSAyNC42LjEgMzR6XCI+PC9wYXRoPjwvc3ZnPkFkdm9nYWRvczxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctY2lyY2xlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNTYgOEMxMTkgOCA4IDExOSA4IDI1NnMxMTEgMjQ4IDI0OCAyNDggMjQ4LTExMSAyNDgtMjQ4UzM5MyA4IDI1NiA4elwiPjwvcGF0aD48L3N2Zz48L2J0bj5cbiAgICBcdCAgICAgICAgICAgICAgICAgICAgPGJ0biBjbGFzc05hbWU9XCJkaXNhYmxlXCI+PHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1hbmdsZS1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjI0LjMgMjczbC0xMzYgMTM2Yy05LjQgOS40LTI0LjYgOS40LTMzLjkgMGwtMjIuNi0yMi42Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOWw5Ni40LTk2LjQtOTYuNC05Ni40Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOUw1NC4zIDEwM2M5LjQtOS40IDI0LjYtOS40IDMzLjkgMGwxMzYgMTM2YzkuNSA5LjQgOS41IDI0LjYuMSAzNHpcIj48L3BhdGg+PC9zdmc+UHJvZ3JhbWFkb3JlczxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctY2lyY2xlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNTYgOEMxMTkgOCA4IDExOSA4IDI1NnMxMTEgMjQ4IDI0OCAyNDggMjQ4LTExMSAyNDgtMjQ4UzM5MyA4IDI1NiA4elwiPjwvcGF0aD48L3N2Zz48L2J0bj5cbiAgICBcdCAgICAgICAgICAgICAgICA8L3N1Ym1lbnU+XG4gICAgXHQgICAgICAgICAgICA8L2J0bj5cbiAgICAgICAgICAgICAgICAgICAgPGJ0biBjbGFzc05hbWU9XCJzdWJtZW51LWhhcy1udW1iZXJzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLXN0b3Jlc1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNNjM1LjcgMTc2LjFsLTkxLjQtMTYwQzUzOC42IDYuMiA1MjggMCA1MTYuNSAwaC0zOTNDMTEyIDAgMTAxLjQgNi4yIDk1LjcgMTYuMWwtOTEuNCAxNjBDLTcuOSAxOTcuNSA3LjQgMjI0IDMyIDIyNGgzMnYyNTQuNUM2NCA0OTcgNzguMyA1MTIgOTYgNTEyaDI1NmMxNy43IDAgMzItMTUgMzItMzMuNVYyMjRoMTYwdjI4MGMwIDQuNCAzLjYgOCA4IDhoMTZjNC40IDAgOC0zLjYgOC04VjIyNGgzMmMyNC42IDAgMzkuOS0yNi41IDI3LjctNDcuOXpNMzUyIDQ3OC41YzAgLjktLjMgMS40LS4yIDEuNWwtMjU1LjIuMnMtLjYtLjUtLjYtMS43VjM1MmgyNTZ2MTI2LjV6bTAtMTU4LjVIOTZ2LTk2aDI1NnY5NnpNMzIuMSAxOTJsOTEuNC0xNjBoMzkzTDYwOCAxOTJIMzIuMXpcIj48L3BhdGg+PC9zdmc+U3RvcmVzPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy10ZXJtaW5hbFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMzQuNDk1IDM2LjQ2NWwyMTEuMDUxIDIxMS4wNWM0LjY4NiA0LjY4NiA0LjY4NiAxMi4yODQgMCAxNi45NzFMMzQuNDk1IDQ3NS41MzVjLTQuNjg2IDQuNjg2LTEyLjI4NCA0LjY4Ni0xNi45NyAwbC03LjA3MS03LjA3Yy00LjY4Ni00LjY4Ni00LjY4Ni0xMi4yODQgMC0xNi45NzFMMjA1Ljk0NyAyNTYgMTAuNDU0IDYwLjUwNmMtNC42ODYtNC42ODYtNC42ODYtMTIuMjg0IDAtMTYuOTcxbDcuMDcxLTcuMDdjNC42ODYtNC42ODcgMTIuMjg0LTQuNjg3IDE2Ljk3IDB6TTY0MCA0Njh2LTEwYzAtNi42MjctNS4zNzMtMTItMTItMTJIMzAwYy02LjYyNyAwLTEyIDUuMzczLTEyIDEydjEwYzAgNi42MjcgNS4zNzMgMTIgMTIgMTJoMzI4YzYuNjI3IDAgMTItNS4zNzMgMTItMTJ6XCI+PC9wYXRoPjwvc3ZnPjxjb3VudD43PC9jb3VudD5cbiAgICBcdCAgICAgICAgICAgICAgICA8c3VibWVudT5cbiAgICBcdCAgICAgICAgICAgICAgICAgICAgPGJ0biBocmVmPVwiLi90aGVtZXMvbWVyY2Fkb2xpdnJlL1wiPjxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctYW5nbGUtcmlnaHRcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIwIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTIyNC4zIDI3M2wtMTM2IDEzNmMtOS40IDkuNC0yNC42IDkuNC0zMy45IDBsLTIyLjYtMjIuNmMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlsOTYuNC05Ni40LTk2LjQtOTYuNGMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlMNTQuMyAxMDNjOS40LTkuNCAyNC42LTkuNCAzMy45IDBsMTM2IDEzNmM5LjUgOS40IDkuNSAyNC42LjEgMzR6XCI+PC9wYXRoPjwvc3ZnPk1lcmNhZG8gTGl2cmU8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWNpcmNsZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjU2IDhDMTE5IDggOCAxMTkgOCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzOTMgOCAyNTYgOHpcIj48L3BhdGg+PC9zdmc+PC9idG4+XG4gICAgXHQgICAgICAgICAgICAgICAgICAgIDxidG4gY2xhc3NOYW1lPVwiZGlzYWJsZVwiPjxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctYW5nbGUtcmlnaHRcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIwIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTIyNC4zIDI3M2wtMTM2IDEzNmMtOS40IDkuNC0yNC42IDkuNC0zMy45IDBsLTIyLjYtMjIuNmMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlsOTYuNC05Ni40LTk2LjQtOTYuNGMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlMNTQuMyAxMDNjOS40LTkuNCAyNC42LTkuNCAzMy45IDBsMTM2IDEzNmM5LjUgOS40IDkuNSAyNC42LjEgMzR6XCI+PC9wYXRoPjwvc3ZnPkluZm9ybcOhdGljYTxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctY2lyY2xlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNTYgOEMxMTkgOCA4IDExOSA4IDI1NnMxMTEgMjQ4IDI0OCAyNDggMjQ4LTExMSAyNDgtMjQ4UzM5MyA4IDI1NiA4elwiPjwvcGF0aD48L3N2Zz48L2J0bj5cbiAgICBcdCAgICAgICAgICAgICAgICAgICAgPGJ0biBjbGFzc05hbWU9XCJkaXNhYmxlXCI+PHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1hbmdsZS1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjI0LjMgMjczbC0xMzYgMTM2Yy05LjQgOS40LTI0LjYgOS40LTMzLjkgMGwtMjIuNi0yMi42Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOWw5Ni40LTk2LjQtOTYuNC05Ni40Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOUw1NC4zIDEwM2M5LjQtOS40IDI0LjYtOS40IDMzLjkgMGwxMzYgMTM2YzkuNSA5LjQgOS41IDI0LjYuMSAzNHpcIj48L3BhdGg+PC9zdmc+Q29uc3RydcOnw6NvPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6XCI+PC9wYXRoPjwvc3ZnPjwvYnRuPlxuICAgIFx0ICAgICAgICAgICAgICAgICAgICA8YnRuIGNsYXNzTmFtZT1cImRpc2FibGVcIj48c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWFuZ2xlLXJpZ2h0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yMjQuMyAyNzNsLTEzNiAxMzZjLTkuNCA5LjQtMjQuNiA5LjQtMzMuOSAwbC0yMi42LTIyLjZjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45bDk2LjQtOTYuNC05Ni40LTk2LjRjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45TDU0LjMgMTAzYzkuNC05LjQgMjQuNi05LjQgMzMuOSAwbDEzNiAxMzZjOS41IDkuNCA5LjUgMjQuNi4xIDM0elwiPjwvcGF0aD48L3N2Zz5DYWzDp2Fkb3M8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWNpcmNsZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjU2IDhDMTE5IDggOCAxMTkgOCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzOTMgOCAyNTYgOHpcIj48L3BhdGg+PC9zdmc+PC9idG4+XG4gICAgXHQgICAgICAgICAgICAgICAgICAgIDxidG4gaHJlZj1cIi4vdGhlbWVzL2NlbG1hci9cIj48c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWFuZ2xlLXJpZ2h0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yMjQuMyAyNzNsLTEzNiAxMzZjLTkuNCA5LjQtMjQuNiA5LjQtMzMuOSAwbC0yMi42LTIyLjZjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45bDk2LjQtOTYuNC05Ni40LTk2LjRjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45TDU0LjMgMTAzYzkuNC05LjQgMjQuNi05LjQgMzMuOSAwbDEzNiAxMzZjOS41IDkuNCA5LjUgMjQuNi4xIDM0elwiPjwvcGF0aD48L3N2Zz5QbGFuZWphZG9zPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6XCI+PC9wYXRoPjwvc3ZnPjwvYnRuPlxuICAgIFx0ICAgICAgICAgICAgICAgICAgICA8YnRuIGNsYXNzTmFtZT1cImRpc2FibGVcIj48c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWFuZ2xlLXJpZ2h0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yMjQuMyAyNzNsLTEzNiAxMzZjLTkuNCA5LjQtMjQuNiA5LjQtMzMuOSAwbC0yMi42LTIyLjZjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45bDk2LjQtOTYuNC05Ni40LTk2LjRjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45TDU0LjMgMTAzYzkuNC05LjQgMjQuNi05LjQgMzMuOSAwbDEzNiAxMzZjOS41IDkuNCA5LjUgMjQuNi4xIDM0elwiPjwvcGF0aD48L3N2Zz5Sb3VwYXM8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWNpcmNsZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjU2IDhDMTE5IDggOCAxMTkgOCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzOTMgOCAyNTYgOHpcIj48L3BhdGg+PC9zdmc+PC9idG4+XG4gICAgXHQgICAgICAgICAgICAgICAgPC9zdWJtZW51PlxuICAgIFx0ICAgICAgICAgICAgPC9idG4+XG4gICAgICAgICAgICAgICAgICAgIDxidG4gY2xhc3NOYW1lPVwic3VibWVudS1oYXMtbnVtYmVyc1wiPlxuICAgICAgICAgICAgICAgICAgICBcdDxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctcmVzdGF1cmFudGVzXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0zNDQuMSA0NzAuM2wxNC4yLTE2NC44Yy00Mi4xLTMzLjEtNzAuNC03Ny03MC40LTEyOS41QzI4OCA4MS43IDM3Ni4xIDAgNDQwIDBjMjIuMSAwIDQwIDE3LjMgNDAgMzguNXY0MzVjMCAyMS4yLTE3LjkgMzguNS00MCAzOC41aC01NmMtMjIuOCAwLTQxLjgtMTguNy0zOS45LTQxLjd6TTMyMCAxNzZjMCA1MSAzMi4yIDg1LjUgNzEuOCAxMTQuNUwzNzYgNDczLjFjLS4zIDMuNyAzLjQgNi45IDggNi45aDU2YzQuMyAwIDgtMyA4LTYuNXYtNDM1YzAtMy41LTMuNy02LjUtOC02LjUtNDQuNiAwLTEyMCA2NS44LTEyMCAxNDR6TTI0MC43IDMzLjhDMjM3LjQgMTQuMyAyMTkuNSAwIDE5NC42IDBjLTExLjkgMC0yNC4xIDMuNC0zMy4zIDExLjJDMTUyLjkgNC4xIDE0MS4zIDAgMTI4IDBzLTI0LjkgNC4xLTMzLjMgMTEuMkM4NS41IDMuNCA3My4zIDAgNjEuNCAwIDM2LjIgMCAxOC42IDE0LjUgMTUuMyAzMy44IDEzLjUgNDMuMiAwIDExOC40IDAgMTQ5LjljMCA1MC45IDI2LjcgOTEuNiA3MSAxMTAuN0w1OS42IDQ3MS40QzU4LjQgNDkzLjQgNzUuOSA1MTIgOTggNTEyaDYwYzIyIDAgMzkuNi0xOC41IDM4LjQtNDAuNkwxODUgMjYwLjZjNDQuMi0xOS4xIDcxLTU5LjggNzEtMTEwLjcgMC0zMS41LTEzLjUtMTA2LjctMTUuMy0xMTYuMXpNMTUyLjMgMjQwbDEyLjIgMjMzLjFjLjIgMy43LTIuNyA2LjktNi41IDYuOUg5OGMtMy43IDAtNi43LTMuMS02LjUtNi45TDEwMy43IDI0MEM2MS4zIDIzMS4yIDMyIDE5NyAzMiAxNDkuOWMwLTI5LjcgMTQuOC0xMTAuNiAxNC44LTExMC42IDEuNi05LjkgMjguMy05LjcgMjkuNS4yVjE2MmMuOSAxMS41IDI4LjIgMTEuNyAyOS41LjJsNy40LTEyMi45YzEuNi05LjcgMjcuOS05LjcgMjkuNSAwbDcuNCAxMjIuOWMxLjMgMTEuNCAyOC42IDExLjIgMjkuNS0uMlYzOS42YzEuMi05LjkgMjcuOS0xMC4xIDI5LjUtLjIgMCAwIDE0LjggODAuOSAxNC44IDExMC42LjEgNDYuOC0yOSA4MS4yLTcxLjYgOTB6XCI+PC9wYXRoPjwvc3ZnPkFsaW1lbnRhw6fDo288c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLXRlcm1pbmFsXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0zNC40OTUgMzYuNDY1bDIxMS4wNTEgMjExLjA1YzQuNjg2IDQuNjg2IDQuNjg2IDEyLjI4NCAwIDE2Ljk3MUwzNC40OTUgNDc1LjUzNWMtNC42ODYgNC42ODYtMTIuMjg0IDQuNjg2LTE2Ljk3IDBsLTcuMDcxLTcuMDdjLTQuNjg2LTQuNjg2LTQuNjg2LTEyLjI4NCAwLTE2Ljk3MUwyMDUuOTQ3IDI1NiAxMC40NTQgNjAuNTA2Yy00LjY4Ni00LjY4Ni00LjY4Ni0xMi4yODQgMC0xNi45NzFsNy4wNzEtNy4wN2M0LjY4Ni00LjY4NyAxMi4yODQtNC42ODcgMTYuOTcgMHpNNjQwIDQ2OHYtMTBjMC02LjYyNy01LjM3My0xMi0xMi0xMkgzMDBjLTYuNjI3IDAtMTIgNS4zNzMtMTIgMTJ2MTBjMCA2LjYyNyA1LjM3MyAxMiAxMiAxMmgzMjhjNi42MjcgMCAxMi01LjM3MyAxMi0xMnpcIj48L3BhdGg+PC9zdmc+PGNvdW50PjU8L2NvdW50PlxuICAgIFx0ICAgICAgICAgICAgICAgIDxzdWJtZW51PlxuICAgIFx0ICAgICAgICAgICAgICAgICAgICA8YnRuIGNsYXNzTmFtZT1cImRpc2FibGVcIj48c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWFuZ2xlLXJpZ2h0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yMjQuMyAyNzNsLTEzNiAxMzZjLTkuNCA5LjQtMjQuNiA5LjQtMzMuOSAwbC0yMi42LTIyLjZjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45bDk2LjQtOTYuNC05Ni40LTk2LjRjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45TDU0LjMgMTAzYzkuNC05LjQgMjQuNi05LjQgMzMuOSAwbDEzNiAxMzZjOS41IDkuNCA5LjUgMjQuNi4xIDM0elwiPjwvcGF0aD48L3N2Zz5SZXN0YXVyYW50ZXM8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWNpcmNsZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjU2IDhDMTE5IDggOCAxMTkgOCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzOTMgOCAyNTYgOHpcIj48L3BhdGg+PC9zdmc+PC9idG4+XG4gICAgXHQgICAgICAgICAgICAgICAgICAgIDxidG4gY2xhc3NOYW1lPVwiZGlzYWJsZVwiPjxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctYW5nbGUtcmlnaHRcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIwIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTIyNC4zIDI3M2wtMTM2IDEzNmMtOS40IDkuNC0yNC42IDkuNC0zMy45IDBsLTIyLjYtMjIuNmMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlsOTYuNC05Ni40LTk2LjQtOTYuNGMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlMNTQuMyAxMDNjOS40LTkuNCAyNC42LTkuNCAzMy45IDBsMTM2IDEzNmM5LjUgOS40IDkuNSAyNC42LjEgMzR6XCI+PC9wYXRoPjwvc3ZnPkNhZmV0ZXJpYXM8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWNpcmNsZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjU2IDhDMTE5IDggOCAxMTkgOCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzOTMgOCAyNTYgOHpcIj48L3BhdGg+PC9zdmc+PC9idG4+XG4gICAgXHQgICAgICAgICAgICAgICAgICAgIDxidG4gaHJlZj1cIi4vdGhlbWVzL2NlcnZlamFyaWFzL1wiPjxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctYW5nbGUtcmlnaHRcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIwIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTIyNC4zIDI3M2wtMTM2IDEzNmMtOS40IDkuNC0yNC42IDkuNC0zMy45IDBsLTIyLjYtMjIuNmMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlsOTYuNC05Ni40LTk2LjQtOTYuNGMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlMNTQuMyAxMDNjOS40LTkuNCAyNC42LTkuNCAzMy45IDBsMTM2IDEzNmM5LjUgOS40IDkuNSAyNC42LjEgMzR6XCI+PC9wYXRoPjwvc3ZnPkNlcnZlamFyaWFzPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6XCI+PC9wYXRoPjwvc3ZnPjwvYnRuPlxuICAgIFx0ICAgICAgICAgICAgICAgICAgICA8YnRuIGNsYXNzTmFtZT1cImRpc2FibGVcIj48c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWFuZ2xlLXJpZ2h0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yMjQuMyAyNzNsLTEzNiAxMzZjLTkuNCA5LjQtMjQuNiA5LjQtMzMuOSAwbC0yMi42LTIyLjZjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45bDk2LjQtOTYuNC05Ni40LTk2LjRjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45TDU0LjMgMTAzYzkuNC05LjQgMjQuNi05LjQgMzMuOSAwbDEzNiAxMzZjOS41IDkuNCA5LjUgMjQuNi4xIDM0elwiPjwvcGF0aD48L3N2Zz5QaXp6YXJpYXM8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWNpcmNsZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjU2IDhDMTE5IDggOCAxMTkgOCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzOTMgOCAyNTYgOHpcIj48L3BhdGg+PC9zdmc+PC9idG4+XG4gICAgXHQgICAgICAgICAgICAgICAgICAgIDxidG4gY2xhc3NOYW1lPVwiZGlzYWJsZVwiPjxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctYW5nbGUtcmlnaHRcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIwIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTIyNC4zIDI3M2wtMTM2IDEzNmMtOS40IDkuNC0yNC42IDkuNC0zMy45IDBsLTIyLjYtMjIuNmMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlsOTYuNC05Ni40LTk2LjQtOTYuNGMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlMNTQuMyAxMDNjOS40LTkuNCAyNC42LTkuNCAzMy45IDBsMTM2IDEzNmM5LjUgOS40IDkuNSAyNC42LjEgMzR6XCI+PC9wYXRoPjwvc3ZnPlNvcnZldGVyaWFzPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6XCI+PC9wYXRoPjwvc3ZnPjwvYnRuPlxuICAgIFx0ICAgICAgICAgICAgICAgIDwvc3VibWVudT5cbiAgICBcdCAgICAgICAgICAgIDwvYnRuPlxuICAgICAgICAgICAgICAgICAgICA8YnRuIGNsYXNzTmFtZT1cInN1Ym1lbnUtaGFzLW51bWJlcnNcIj5cbiAgICAgICAgICAgICAgICAgICAgXHQ8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLXN0b3Jlc1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNNjM1LjcgMTc2LjFsLTkxLjQtMTYwQzUzOC42IDYuMiA1MjggMCA1MTYuNSAwaC0zOTNDMTEyIDAgMTAxLjQgNi4yIDk1LjcgMTYuMWwtOTEuNCAxNjBDLTcuOSAxOTcuNSA3LjQgMjI0IDMyIDIyNGgzMnYyNTQuNUM2NCA0OTcgNzguMyA1MTIgOTYgNTEyaDI1NmMxNy43IDAgMzItMTUgMzItMzMuNVYyMjRoMTYwdjI4MGMwIDQuNCAzLjYgOCA4IDhoMTZjNC40IDAgOC0zLjYgOC04VjIyNGgzMmMyNC42IDAgMzkuOS0yNi41IDI3LjctNDcuOXpNMzUyIDQ3OC41YzAgLjktLjMgMS40LS4yIDEuNWwtMjU1LjIuMnMtLjYtLjUtLjYtMS43VjM1MmgyNTZ2MTI2LjV6bTAtMTU4LjVIOTZ2LTk2aDI1NnY5NnpNMzIuMSAxOTJsOTEuNC0xNjBoMzkzTDYwOCAxOTJIMzIuMXpcIj48L3BhdGg+PC9zdmc+QmVsZXphPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy10ZXJtaW5hbFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMzQuNDk1IDM2LjQ2NWwyMTEuMDUxIDIxMS4wNWM0LjY4NiA0LjY4NiA0LjY4NiAxMi4yODQgMCAxNi45NzFMMzQuNDk1IDQ3NS41MzVjLTQuNjg2IDQuNjg2LTEyLjI4NCA0LjY4Ni0xNi45NyAwbC03LjA3MS03LjA3Yy00LjY4Ni00LjY4Ni00LjY4Ni0xMi4yODQgMC0xNi45NzFMMjA1Ljk0NyAyNTYgMTAuNDU0IDYwLjUwNmMtNC42ODYtNC42ODYtNC42ODYtMTIuMjg0IDAtMTYuOTcxbDcuMDcxLTcuMDdjNC42ODYtNC42ODcgMTIuMjg0LTQuNjg3IDE2Ljk3IDB6TTY0MCA0Njh2LTEwYzAtNi42MjctNS4zNzMtMTItMTItMTJIMzAwYy02LjYyNyAwLTEyIDUuMzczLTEyIDEydjEwYzAgNi42MjcgNS4zNzMgMTIgMTIgMTJoMzI4YzYuNjI3IDAgMTItNS4zNzMgMTItMTJ6XCI+PC9wYXRoPjwvc3ZnPjxjb3VudD4yPC9jb3VudD5cbiAgICBcdCAgICAgICAgICAgICAgICA8c3VibWVudT5cbiAgICBcdCAgICAgICAgICAgICAgICAgICAgPGJ0biBjbGFzc05hbWU9XCJkaXNhYmxlXCI+PHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1hbmdsZS1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjI0LjMgMjczbC0xMzYgMTM2Yy05LjQgOS40LTI0LjYgOS40LTMzLjkgMGwtMjIuNi0yMi42Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOWw5Ni40LTk2LjQtOTYuNC05Ni40Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOUw1NC4zIDEwM2M5LjQtOS40IDI0LjYtOS40IDMzLjkgMGwxMzYgMTM2YzkuNSA5LjQgOS41IDI0LjYuMSAzNHpcIj48L3BhdGg+PC9zdmc+U2Fsw6NvIGRlIENhYmVsZXJlaXJvPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6XCI+PC9wYXRoPjwvc3ZnPjwvYnRuPlxuICAgIFx0ICAgICAgICAgICAgICAgICAgICA8YnRuIGNsYXNzTmFtZT1cImRpc2FibGVcIj48c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWFuZ2xlLXJpZ2h0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yMjQuMyAyNzNsLTEzNiAxMzZjLTkuNCA5LjQtMjQuNiA5LjQtMzMuOSAwbC0yMi42LTIyLjZjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45bDk2LjQtOTYuNC05Ni40LTk2LjRjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45TDU0LjMgMTAzYzkuNC05LjQgMjQuNi05LjQgMzMuOSAwbDEzNiAxMzZjOS41IDkuNCA5LjUgMjQuNi4xIDM0elwiPjwvcGF0aD48L3N2Zz5BbHVndWVsIGRlIFJvdXBhczxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctY2lyY2xlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNTYgOEMxMTkgOCA4IDExOSA4IDI1NnMxMTEgMjQ4IDI0OCAyNDggMjQ4LTExMSAyNDgtMjQ4UzM5MyA4IDI1NiA4elwiPjwvcGF0aD48L3N2Zz48L2J0bj5cbiAgICBcdCAgICAgICAgICAgICAgICAgICAgPGJ0biBjbGFzc05hbWU9XCJkaXNhYmxlXCI+PHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1hbmdsZS1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjI0LjMgMjczbC0xMzYgMTM2Yy05LjQgOS40LTI0LjYgOS40LTMzLjkgMGwtMjIuNi0yMi42Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOWw5Ni40LTk2LjQtOTYuNC05Ni40Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOUw1NC4zIDEwM2M5LjQtOS40IDI0LjYtOS40IDMzLjkgMGwxMzYgMTM2YzkuNSA5LjQgOS41IDI0LjYuMSAzNHpcIj48L3BhdGg+PC9zdmc+Q29zbcOpdGljb3M8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWNpcmNsZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjU2IDhDMTE5IDggOCAxMTkgOCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzOTMgOCAyNTYgOHpcIj48L3BhdGg+PC9zdmc+PC9idG4+XG4gICAgXHQgICAgICAgICAgICAgICAgPC9zdWJtZW51PlxuICAgIFx0ICAgICAgICAgICAgPC9idG4+XG4gICAgICAgICAgICAgICAgPC9tZW51aXRlbXM+XG4gICAgICAgICAgICAgICAgPHNpZGViYXJkaXZpZGVyPjwvc2lkZWJhcmRpdmlkZXI+XG4gICAgICAgICAgICAgICAgPHNpZGViYXJzZXBhcmF0b3I+RkFMRSBDT05PU0NPPC9zaWRlYmFyc2VwYXJhdG9yPlxuICAgICAgICAgICAgICAgIDxtZW51Y29udGFjdD5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cInRlbDoxMSA5MzAxOCA4MzYzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLXBob25lXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk00ODcuOCAyNC4xTDM4NyAuOGMtMTQuNy0zLjQtMjkuOCA0LjItMzUuOCAxOC4xbC00Ni41IDEwOC41Yy01LjUgMTIuNy0xLjggMjcuNyA4LjkgMzYuNWw1My45IDQ0LjFjLTM0IDY5LjItOTAuMyAxMjUuNi0xNTkuNiAxNTkuNmwtNDQuMS01My45Yy04LjgtMTAuNy0yMy44LTE0LjQtMzYuNS04LjlMMTguOSAzNTEuM0M1IDM1Ny4zLTIuNiAzNzIuMy44IDM4N0wyNCA0ODcuN0MyNy4zIDUwMiAzOS45IDUxMiA1NC41IDUxMiAzMDYuNyA1MTIgNTEyIDMwNy44IDUxMiA1NC41YzAtMTQuNi0xMC0yNy4yLTI0LjItMzAuNHpNNTUuMSA0ODBsLTIzLTk5LjYgMTA3LjQtNDYgNTkuNSA3Mi44YzEwMy42LTQ4LjYgMTU5LjctMTA0LjkgMjA4LjEtMjA4LjFsLTcyLjgtNTkuNSA0Ni0xMDcuNCA5OS42IDIzQzQ3OS43IDI4OS43IDI4OS42IDQ3OS43IDU1LjEgNDgwelwiPjwvcGF0aD48L3N2Zz5MaWdhw6fDo288c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWNpcmNsZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjU2IDhDMTE5IDggOCAxMTkgOCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzOTMgOCAyNTYgOHpcIj48L3BhdGg+PC9zdmc+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vYXBpLndoYXRzYXBwLmNvbS9zZW5kP3Bob25lPTU1MTE5MzAxODgzNjNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctd2hhdHNhcHBcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIwIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTM4MC45IDk3LjFDMzM5IDU1LjEgMjgzLjIgMzIgMjIzLjkgMzJjLTEyMi40IDAtMjIyIDk5LjYtMjIyIDIyMiAwIDM5LjEgMTAuMiA3Ny4zIDI5LjYgMTExTDAgNDgwbDExNy43LTMwLjljMzIuNCAxNy43IDY4LjkgMjcgMTA2LjEgMjdoLjFjMTIyLjMgMCAyMjQuMS05OS42IDIyNC4xLTIyMiAwLTU5LjMtMjUuMi0xMTUtNjcuMS0xNTd6bS0xNTcgMzQxLjZjLTMzLjIgMC02NS43LTguOS05NC0yNS43bC02LjctNC02OS44IDE4LjNMNzIgMzU5LjJsLTQuNC03Yy0xOC41LTI5LjQtMjguMi02My4zLTI4LjItOTguMiAwLTEwMS43IDgyLjgtMTg0LjUgMTg0LjYtMTg0LjUgNDkuMyAwIDk1LjYgMTkuMiAxMzAuNCA1NC4xIDM0LjggMzQuOSA1Ni4yIDgxLjIgNTYuMSAxMzAuNSAwIDEwMS44LTg0LjkgMTg0LjYtMTg2LjYgMTg0LjZ6bTEwMS4yLTEzOC4yYy01LjUtMi44LTMyLjgtMTYuMi0zNy45LTE4LTUuMS0xLjktOC44LTIuOC0xMi41IDIuOC0zLjcgNS42LTE0LjMgMTgtMTcuNiAyMS44LTMuMiAzLjctNi41IDQuMi0xMiAxLjQtMzIuNi0xNi4zLTU0LTI5LjEtNzUuNS02Ni01LjctOS44IDUuNy05LjEgMTYuMy0zMC4zIDEuOC0zLjcuOS02LjktLjUtOS43LTEuNC0yLjgtMTIuNS0zMC4xLTE3LjEtNDEuMi00LjUtMTAuOC05LjEtOS4zLTEyLjUtOS41LTMuMi0uMi02LjktLjItMTAuNi0uMi0zLjcgMC05LjcgMS40LTE0LjggNi45LTUuMSA1LjYtMTkuNCAxOS0xOS40IDQ2LjMgMCAyNy4zIDE5LjkgNTMuNyAyMi42IDU3LjQgMi44IDMuNyAzOS4xIDU5LjcgOTQuOCA4My44IDM1LjIgMTUuMiA0OSAxNi41IDY2LjYgMTMuOSAxMC43LTEuNiAzMi44LTEzLjQgMzcuNC0yNi40IDQuNi0xMyA0LjYtMjQuMSAzLjItMjYuNC0xLjMtMi41LTUtMy45LTEwLjUtNi42elwiPjwvcGF0aD48L3N2Zz5XaGF0c2FwcDxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctY2lyY2xlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNTYgOEMxMTkgOCA4IDExOSA4IDI1NnMxMTEgMjQ4IDI0OCAyNDggMjQ4LTExMSAyNDgtMjQ4UzM5MyA4IDI1NiA4elwiPjwvcGF0aD48L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwibWFpbHRvOmNvbnRhY3RAYXZuLnN5c3RlbXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctbWFpbFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjU2IDhDMTE4Ljk0MSA4IDggMTE4LjkxOSA4IDI1NmMwIDEzNy4wNTggMTEwLjkxOSAyNDggMjQ4IDI0OCA1Mi45MjUgMCAxMDQuNjgtMTcuMDc4IDE0Ny4wOTItNDguMzE5IDUuNTAxLTQuMDUyIDYuNDIzLTExLjkyNCAyLjA5NS0xNy4yMTFsLTUuMDc0LTYuMTk4Yy00LjAxOC00LjkwOS0xMS4xOTMtNS44ODMtMTYuMzA3LTIuMTI5QzM0Ni45MyA0NTcuMjA4IDMwMS45NzQgNDcyIDI1NiA0NzJjLTExOS4zNzMgMC0yMTYtOTYuNjA3LTIxNi0yMTYgMC0xMTkuMzc1IDk2LjYwNy0yMTYgMjE2LTIxNiAxMTguNDQ1IDAgMjE2IDgwLjAyNCAyMTYgMjAwIDAgNzIuODczLTUyLjgxOSAxMDguMjQxLTExNi4wNjUgMTA4LjI0MS0xOS43MzQgMC0yMy42OTUtMTAuODE2LTE5LjUwMy0zMy44NjhsMzIuMDctMTY0LjA3MWMxLjQ0OS03LjQxMS00LjIyNi0xNC4zMDItMTEuNzc3LTE0LjMwMmgtMTIuNDIxYTEyIDEyIDAgMCAwLTExLjc4MSA5LjcxOGMtMi4yOTQgMTEuODQ2LTIuODYgMTMuNDY0LTMuODYxIDI1LjY0Ny0xMS43MjktMjcuMDc4LTM4LjYzOS00My4wMjMtNzMuMzc1LTQzLjAyMy02OC4wNDQgMC0xMzMuMTc2IDYyLjk1LTEzMy4xNzYgMTU3LjAyNyAwIDYxLjU4NyAzMy45MTUgOTguMzU0IDkwLjcyMyA5OC4zNTQgMzkuNzI5IDAgNzAuNjAxLTI0LjI3OCA4Ni42MzMtNDYuOTgyLTEuMjExIDI3Ljc4NiAxNy40NTUgNDIuMjEzIDQ1Ljk3NSA0Mi4yMTNDNDUzLjA4OSAzNzguOTU0IDUwNCAzMjEuNzI5IDUwNCAyNDAgNTA0IDEwMy44MTQgMzkzLjg2MyA4IDI1NiA4em0tMzcuOTIgMzQyLjYyN2MtMzYuNjgxIDAtNTguNTgtMjUuMTA4LTU4LjU4LTY3LjE2NiAwLTc0LjY5IDUwLjc2NS0xMjEuNTQ1IDk3LjIxNy0xMjEuNTQ1IDM4Ljg1NyAwIDU4LjEwMiAyNy43OSA1OC4xMDIgNjUuNzM1IDAgNTguMTMzLTM4LjM2OSAxMjIuOTc2LTk2LjczOSAxMjIuOTc2elwiPjwvcGF0aD48L3N2Zz5FLW1haWw8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWNpcmNsZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjU2IDhDMTE5IDggOCAxMTkgOCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzOTMgOCAyNTYgOHpcIj48L3BhdGg+PC9zdmc+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cInNtczoxMSA5MzAxOCA4MzYzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLW1haWxcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIwIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTQwMCAzMkg0OEMyMS40OSAzMiAwIDUzLjQ5IDAgODB2MzUyYzAgMjYuNTEgMjEuNDkgNDggNDggNDhoMzUyYzI2LjUxIDAgNDgtMjEuNDkgNDgtNDhWODBjMC0yNi41MS0yMS40OS00OC00OC00OHptMTYgNDAwYzAgOC44MjItNy4xNzggMTYtMTYgMTZINDhjLTguODIyIDAtMTYtNy4xNzgtMTYtMTZWODBjMC04LjgyMiA3LjE3OC0xNiAxNi0xNmgzNTJjOC44MjIgMCAxNiA3LjE3OCAxNiAxNnYzNTJ6bS02NC0zMDRIOTZjLTE3LjY3MyAwLTMyIDE0LjMyNy0zMiAzMnYxOTJjMCAxNy42NzMgMTQuMzI3IDMyIDMyIDMyaDI1NmMxNy42NzMgMCAzMi0xNC4zMjcgMzItMzJWMTYwYzAtMTcuNjczLTE0LjMyNy0zMi0zMi0zMnptMCAzMnYzMy44NTVjLTE0LjEzNiAxMS42MjgtMzYuNTY2IDI5LjY2NC04Mi4xMTcgNjUuODIxQzI1OS40MjYgMjY4LjAxNSAyMzguNzQ4IDI4OCAyMjQuMjU2IDI4OGwtLjI1Ni0uMDAyLS4yNTYuMDAyYy0xNC40OTIgMC0zNS4xNy0xOS45ODQtNDUuNjI4LTI4LjMyNC00NS41NDQtMzYuMTUyLTY3Ljk3OC01NC4xOTItODIuMTE3LTY1LjgyMlYxNjBIMzUyek05NiAzNTJWMjM1LjA5MmMxNC4xMDkgMTEuMzY3IDMzLjYyNCAyNi45NDggNjIuMjIxIDQ5LjY0OCAxMy43NzcgMTEuMDEgMzcuOTAyIDM1LjI2IDY1LjUyMyAzNS4yNmwuMjUzLS4wMDEuMjU4LjAwMWMyNy41MjkgMCA1MS4zOTItMjMuOTc1IDY1LjU0MS0zNS4yNzQgMjguNTgzLTIyLjY4OSA0OC4wOTktMzguMjcgNjIuMjAzLTQ5LjYzNFYzNTJIOTZ6XCI+PC9wYXRoPjwvc3ZnPlNNUzxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctY2lyY2xlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNTYgOEMxMTkgOCA4IDExOSA4IDI1NnMxMTEgMjQ4IDI0OCAyNDggMjQ4LTExMSAyNDgtMjQ4UzM5MyA4IDI1NiA4elwiPjwvcGF0aD48L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvbWVudWNvbnRhY3Q+XG4gICAgICAgICAgICA8L21lbnVzY3JvbGw+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgbGVmdG1lbnUge1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtMzQwcHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDAwMDtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDMzMHB4O1xuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgOHB4ICMwMDA7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxYzIyMmU7XG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogbGVmdCAzNTBtcyBlYXNlIDBzO1xuICAgICAgICAgICAgICAgICAgICAtbW96LXRyYW5zaXRpb246IGxlZnQgMzUwbXMgZWFzZSAwcztcbiAgICAgICAgICAgICAgICAgICAgLW1zLXRyYW5zaXRpb246IGxlZnQgMzUwbXMgZWFzZSAwcztcbiAgICAgICAgICAgICAgICAgICAgLW8tdHJhbnNpdGlvbjogbGVmdCAzNTBtcyBlYXNlIDBzO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBsZWZ0IDM1MG1zIGVhc2UgMHM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IHNpZGViYXJ1c2VyIHtcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDZweCA0cHggcmdiYSgwLDAsMCwuMyk7XG4gICAgICAgICAgICAgICAgICAgIHRvdWNoLWFjdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTg1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IHNpZGViYXJ1c2VyIHBob3RvIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7cHJvY2Vzcy5lbnYuQkFDS0VORF9VUkx9L3N0YXRpYy9pbWFnZXMvaWNvbnMvaWNvbi0xOTJ4MTkyLnBuZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IHNpZGViYXJ1c2VyIHBob3RvIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMGY5YTY7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciB0b3A7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDVweCAjMDAwMDAwO1xuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAxcHggMXB4IDVweCAjMDAwMDAwO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDE1cHggMHB4IDBweCAxNXB4O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA5MHB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTBweDtcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IHNpZGViYXJ1c2VyIHBob3RvIHRpdGxlIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDI4NXB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAxMDVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgc2lkZWJhcnVzZXIgcGhvdG8gc3VidGl0bGUge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyOTBweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNjY2M7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogMTAwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IHNpZGViYXJ1c2VyIGJnaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7cHJvY2Vzcy5lbnYuQkFDS0VORF9VUkx9L3N0YXRpYy9pbWFnZXMvaG9tZXBhZ2UvYmFja2dyb3VuZC1hdm4tMS5qcGcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBzaWRlYmFydXNlciBiZ2ltZyB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtYmxlbmQtbW9kZTogaGFyZC1saWdodDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTdmN2ZmO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTg1cHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBzaWRlYmFydXNlciBiZ3NoYWRvdyB7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDk7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTg1cHg7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSxyZ2JhKDAsMCwwLDApIDAscmdiYSgwLDAsMCwwKSAyMCUscmdiYSgwLDAsMCwuMSkgNDAlLHJnYmEoMCwwLDAsLjcpIDcwJSxyZ2JhKDAsMCwwLDEpIDEwMCUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjM1cHgpO1xuICAgICAgICAgICAgICAgICAgICB0b3VjaC1hY3Rpb246IHBhbi15O1xuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMzBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBzaWRlYmFyc2VwYXJhdG9yOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBzaWRlYmFyc2VwYXJhdG9yIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2NjYztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGVmdC1lbnUgbWVudXNjcm9sbCBzaWRlYmFyZGl2aWRlciB7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IHNvbGlkIDFweCByZ2JhKDAsMCwwLC4yKTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHJnYmEoMjU1LDI1NSwyNTUsLjAzKTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuLFxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWNvbnRhY3QgPiBhIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG4gICAgICAgICAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNTVweDtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2NjYztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51aXRlbXMgPiBidG4uZGlzYWJsZSxcbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVjb250YWN0ID4gYS5kaXNhYmxlIHtcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IC41O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0biAuc3ZnLWlubGluZSxcbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVjb250YWN0ID4gYSAuc3ZnLWlubGluZSB7XG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiAtLjEyNWVtO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAyNXB4O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2I1MDBmZjtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMnB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAzcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuIC5zdmctaW5saW5lLnN2Zy1jaXJjbGUsXG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51Y29udGFjdCA+IGEgLnN2Zy1pbmxpbmUuc3ZnLWNpcmNsZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNDM0NzUyO1xuICAgICAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNXB4O1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDI1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuIC5zdmctaW5saW5lLnN2Zy10ZXJtaW5hbCB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNDM0NzUyO1xuICAgICAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IC01cHg7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogMThweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51aXRlbXMgPiBidG4gLnN2Zy1pbmxpbmUuc3ZnLXR2IHtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogLTRweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51aXRlbXMgPiBidG4gLnN2Zy1pbmxpbmUuc3ZnLXN0b3JlcyB7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IC01cHg7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogMnB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0biAuc3ZnLWlubGluZS5zdmctcmVzdGF1cmFudGVzLFxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuIC5zdmctaW5saW5lLnN2Zy13aGF0c2FwcCxcbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0biAuc3ZnLWlubGluZS5zdmctcGhvbmUsXG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51aXRlbXMgPiBidG4gLnN2Zy1pbmxpbmUuc3ZnLW1haWwsXG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51aXRlbXMgPiBidG4gLnN2Zy1pbmxpbmUuc3ZnLXN0YXIge1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtMnB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0bjpob3ZlcixcbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVjb250YWN0ID4gYTpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMzJiM2E7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51aXRlbXMgPiBidG46aG92ZXIgLnN2Zy1pbmxpbmUuc3ZnLXRlcm1pbmFsLFxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuOmhvdmVyIC5zdmctaW5saW5lLnN2Zy1jaXJjbGUsXG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51Y29udGFjdCA+IGE6aG92ZXIgLnN2Zy1pbmxpbmUuc3ZnLWNpcmNsZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51aXRlbXMgPiBidG4gPiBjb3VudCB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNjOTQ3ZmY7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAtMjVweDtcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgICAgICAgICB0b3A6IC0ycHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuIHN1Ym1lbnUge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlICsgMjVweCk7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogLTI1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuIHN1Ym1lbnUgYnRuLmRpc2FibGUge1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAuNTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51aXRlbXMgPiBidG4gc3VibWVudSBidG4ge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDM1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuIHN1Ym1lbnUub3BlbiB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuOmhvdmVyIHN1Ym1lbnUgYnRuIC5zdmctaW5saW5lLnN2Zy1jaXJjbGUge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzQzNDc1MjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51aXRlbXMgPiBidG46aG92ZXIgc3VibWVudSBidG46bm90KC5kaXNhYmxlKTpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyZjNhNGU7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51aXRlbXMgPiBidG46aG92ZXIgc3VibWVudSBidG46bm90KC5kaXNhYmxlKTpob3ZlciAuc3ZnLWlubGluZS5zdmctY2lyY2xlIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogOTQwcHgpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9vdGVyIGluZm9zIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDYyNXB4KSB7XG4gICAgICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzaXRlbW9iaWxlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgXHQ8L2xlZnRtZW51PlxuICAgICl9XG59Il19 */\n/*@ sourceURL=/home/ubuntu/workspace/estudo/next/components/interface.js */"),
        __self: this
      }));
    }
  }]);

  return Footer;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);
var LeftMenu =
/*#__PURE__*/
function (_Component3) {
  _inherits(LeftMenu, _Component3);

  function LeftMenu() {
    _classCallCheck(this, LeftMenu);

    return _possibleConstructorReturn(this, _getPrototypeOf(LeftMenu).apply(this, arguments));
  }

  _createClass(LeftMenu, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      $("leftmenu menuscroll menuitems > btn.submenu-has-numbers").on("click", function (e) {
        if ($(e.target).hasClass('disable')) {
          e.stopImmediatePropagation();
          return;
        } else if ($(e.target).attr('href')) {
          $('body').removeClass('left-menu'); //return $.fn.navigate(e.target, e);
        } else {
          $(this).find('submenu').toggleClass("open");
        }
      });
      $("header navtoggle, menuhider").on("click", function (e) {
        $('body').toggleClass('left-menu');
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("leftmenu", {
        className: "jsx-994201825",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 487
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("sidebaruser", {
        className: "jsx-994201825",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 488
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("photo", {
        className: "jsx-994201825",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 489
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
        className: "jsx-994201825",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 490
        },
        __self: this
      }, "Boa noite. \u2605"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("subtitle", {
        className: "jsx-994201825",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 491
        },
        __self: this
      }, "Entre com seu login ou cadastre-se!")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("bgimg", {
        className: "jsx-994201825",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 493
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("bgshadow", {
        className: "jsx-994201825",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 494
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("menuscroll", {
        className: "jsx-994201825",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 496
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("sidebarseparator", {
        className: "jsx-994201825",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 497
        },
        __self: this
      }, "Acesso Restrito"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("menuitems", {
        className: "jsx-994201825",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 498
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("btn", {
        href: "//admin.avn.systems",
        target: "_self",
        className: "jsx-994201825",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 499
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        className: "jsx-994201825" + " " + "svg-inline",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 500
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M144 112v51.6H48c-26.5 0-48 21.5-48 48v88.6c0 26.5 21.5 48 48 48h96v51.6c0 42.6 51.7 64.2 81.9 33.9l144-143.9c18.7-18.7 18.7-49.1 0-67.9l-144-144C195.8 48 144 69.3 144 112zm192 144L192 400v-99.7H48v-88.6h144V112l144 144zm80 192h-84c-6.6 0-12-5.4-12-12v-24c0-6.6 5.4-12 12-12h84c26.5 0 48-21.5 48-48V160c0-26.5-21.5-48-48-48h-84c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h84c53 0 96 43 96 96v192c0 53-43 96-96 96z",
        className: "jsx-994201825" + " " + "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 500
        },
        __self: this
      })), "Entrar", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        className: "jsx-994201825" + " " + "svg-inline svg-circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 500
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z",
        className: "jsx-994201825",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 500
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("btn", {
        href: "#",
        className: "jsx-994201825" + " " + "disable",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 501
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 576 512",
        className: "jsx-994201825" + " " + "svg-inline",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 502
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M288 208c-44.2 0-80 35.8-80 80s35.8 80 80 80 80-35.8 80-80-35.8-80-80-80zm0 128c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zM512 64H352V32c0-17.7-14.3-32-32-32h-64c-17.7 0-32 14.3-32 32v32H64C28.7 64 0 92.7 0 128v320c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64zM256 32h64v96h-64V32zm128 448H192v-21.9c0-9 2.6-17.6 7.6-25 7.2-10.7 20.3-17.2 35-17.2 15.9 0 23.5 8 53.4 8s37.6-8 53.4-8c14.7 0 27.7 6.4 35 17.2 5 7.4 7.6 16 7.6 25V480zm160-32c0 17.6-14.4 32-32 32h-96v-21.9c0-15.9-4.8-30.6-13-42.8-13.8-20.5-37.3-31.3-61.5-31.3-22.2 0-27.8 8-53.4 8-25.6 0-31.2-8-53.4-8-24.2 0-47.7 10.8-61.5 31.3-8.2 12.2-13 27-13 42.8V480H64c-17.6 0-32-14.4-32-32V128c0-17.6 14.4-32 32-32h160v64h128V96h160c17.6 0 32 14.4 32 32v320z",
        className: "jsx-994201825" + " " + "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 502
        },
        __self: this
      })), "Cadastrar-se", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        className: "jsx-994201825" + " " + "svg-inline svg-circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 502
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z",
        className: "jsx-994201825",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 502
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("sidebardivider", {
        className: "jsx-994201825",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 504
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("menusitemobile", {
        className: "jsx-994201825",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 505
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("sidebarseparator", {
        className: "jsx-994201825",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 506
        },
        __self: this
      }, "Website Menu"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-994201825" + " " + "menu-items menu-icons",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 507
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("sidebardivider", {
        className: "jsx-994201825",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 510
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("sidebarseparator", {
        className: "jsx-994201825",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 512
        },
        __self: this
      }, "MYAPP Models"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("menuitems", {
        className: "jsx-994201825",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 513
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("btn", {
        href: "./",
        className: "jsx-994201825",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 514
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 320 512",
        className: "jsx-994201825" + " " + "svg-inline svg-mobile-alt",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 514
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M192 416c0 17.7-14.3 32-32 32s-32-14.3-32-32 14.3-32 32-32 32 14.3 32 32zm48-60V92c0-6.6-5.4-12-12-12H92c-6.6 0-12 5.4-12 12v264c0 6.6 5.4 12 12 12h136c6.6 0 12-5.4 12-12zm80-308v416c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V48C0 21.5 21.5 0 48 0h224c26.5 0 48 21.5 48 48zm-48 410V54c0-3.3-2.7-6-6-6H54c-3.3 0-6 2.7-6 6v404c0 3.3 2.7 6 6 6h212c3.3 0 6-2.7 6-6z",
        className: "jsx-994201825",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 514
        },
        __self: this
      })), "About My App", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        className: "jsx-994201825" + " " + "svg-inline svg-circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 514
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z",
        className: "jsx-994201825",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 514
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("btn", {
        className: "jsx-994201825" + " " + "submenu-has-numbers",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 515
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 320 512",
        className: "jsx-994201825" + " " + "svg-inline svg-tv",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 516
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M400 244v-8c0-6.6 5.4-12 12-12h8c6.6 0 12 5.4 12 12v8c0 6.6-5.4 12-12 12h-8c-6.6 0-12-5.4-12-12zm12 76h8c6.6 0 12-5.4 12-12v-8c0-6.6-5.4-12-12-12h-8c-6.6 0-12 5.4-12 12v8c0 6.6 5.4 12 12 12zm-36-136.5s-1.5-7.5-144-7.5-144.5 7.5-144.5 7.5S80 184 80 288s7.5 104.5 7.5 104.5S88 400 232 400s144-7.5 144-7.5 7.5-.5 7.5-104.5-7.5-104.5-7.5-104.5zM512 144v288c0 26.5-21.5 48-48 48h-16v32h-48l-10.7-32H122.7L112 512H64v-32H48c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48h140.9l-54-55.2c-9.3-9.5-9.1-24.7.3-33.9 9.5-9.3 24.7-9.1 33.9.3L256 96l86.9-88.8c9.3-9.5 24.5-9.6 33.9-.3 9.5 9.3 9.6 24.5.3 33.9l-54 55.2H464c26.5 0 48 21.5 48 48zm-48 0H48v288h416V144z",
        className: "jsx-994201825",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 516
        },
        __self: this
      })), "Communication", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 320 512",
        className: "jsx-994201825" + " " + "svg-inline svg-terminal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 516
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M34.495 36.465l211.051 211.05c4.686 4.686 4.686 12.284 0 16.971L34.495 475.535c-4.686 4.686-12.284 4.686-16.97 0l-7.071-7.07c-4.686-4.686-4.686-12.284 0-16.971L205.947 256 10.454 60.506c-4.686-4.686-4.686-12.284 0-16.971l7.071-7.07c4.686-4.687 12.284-4.687 16.97 0zM640 468v-10c0-6.627-5.373-12-12-12H300c-6.627 0-12 5.373-12 12v10c0 6.627 5.373 12 12 12h328c6.627 0 12-5.373 12-12z",
        className: "jsx-994201825",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 516
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("count", {
        className: "jsx-994201825",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 516
        },
        __self: this
      }, "4"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("submenu", {
        className: "jsx-994201825",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 517
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("btn", {
        className: "jsx-994201825" + " " + "disable",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 518
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 320 512",
        className: "jsx-994201825" + " " + "svg-inline svg-angle-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 518
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z",
        className: "jsx-994201825",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 518
        },
        __self: this
      })), "Ag\xEAncias e Produtoras", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        className: "jsx-994201825" + " " + "svg-inline svg-circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 518
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z",
        className: "jsx-994201825",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 518
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("btn", {
        href: "./themes/produtoras/",
        className: "jsx-994201825",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 519
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 320 512",
        className: "jsx-994201825" + " " + "svg-inline svg-angle-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 519
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z",
        className: "jsx-994201825",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 519
        },
        __self: this
      })), "Promo\xE7\xE3o e Eventos", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        className: "jsx-994201825" + " " + "svg-inline svg-circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 519
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z",
        className: "jsx-994201825",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 519
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("btn", {
        href: "./themes/supertv/",
        className: "jsx-994201825",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 520
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 320 512",
        className: "jsx-994201825" + " " + "svg-inline svg-angle-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 520
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z",
        className: "jsx-994201825",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 520
        },
        __self: this
      })), "Emissora TV", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        className: "jsx-994201825" + " " + "svg-inline svg-circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 520
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z",
        className: "jsx-994201825",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 520
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("btn", {
        className: "jsx-994201825" + " " + "disable",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 521
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 320 512",
        className: "jsx-994201825" + " " + "svg-inline svg-angle-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 521
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z",
        className: "jsx-994201825",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 521
        },
        __self: this
      })), "R\xE1dios", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        className: "jsx-994201825" + " " + "svg-inline svg-circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 521
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z",
        className: "jsx-994201825",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 521
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("btn", {
        className: "jsx-994201825" + " " + "submenu-has-numbers",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 524
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 320 512",
        className: "jsx-994201825" + " " + "svg-inline svg-star",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 525
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96zm89.6 256c-11 0-21.8 2.6-32.2 6.2-18 6.3-37.3 9.8-57.4 9.8s-39.4-3.5-57.4-9.8c-10.4-3.6-21.2-6.2-32.2-6.2C60.2 304 0 364.2 0 438.4V488c0 13.3 10.7 24 24 24s24-10.7 24-24v-49.6c0-45.5 35.4-82.4 80-85.8v50c-23.1 6.9-40 28.1-40 53.4 0 30.9 25.1 56 56 56s56-25.1 56-56c0-25.3-16.9-46.5-40-53.4v-44.7c20.8 6.3 42.3 10.1 64 10.1 21.8 0 43.2-3.8 64-10.1v36.3c-28.2 7.5-48 34.5-48 64.6V488c0 4.2 1.7 8.3 4.7 11.3l10.3 10.3c3.1 3.1 8.2 3.1 11.3 0l11.3-11.3c3.1-3.1 3.1-8.2 0-11.3l-5.7-5.7V456c0-19.4 17.4-34.8 37.4-31.6 15.7 2.6 26.6 17.4 26.6 33.3v23.6l-5.7 5.7c-3.1 3.1-3.1 8.2 0 11.3l11.3 11.3c3.1 3.1 8.2 3.1 11.3 0l10.3-10.3c3-3 4.7-7.1 4.7-11.3v-32c0-29.7-20.5-54.5-48-61.6v-41.7c44.6 3.3 80 40.3 80 85.8V488c0 13.3 10.7 24 24 24s24-10.7 24-24v-49.6c.2-74.2-60-134.4-134.2-134.4zM168 456c0 13.3-10.7 24-24 24s-24-10.7-24-24 10.7-24 24-24 24 10.7 24 24z",
        className: "jsx-994201825",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 525
        },
        __self: this
      })), "Profissionals", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 320 512",
        className: "jsx-994201825" + " " + "svg-inline svg-terminal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 525
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M34.495 36.465l211.051 211.05c4.686 4.686 4.686 12.284 0 16.971L34.495 475.535c-4.686 4.686-12.284 4.686-16.97 0l-7.071-7.07c-4.686-4.686-4.686-12.284 0-16.971L205.947 256 10.454 60.506c-4.686-4.686-4.686-12.284 0-16.971l7.071-7.07c4.686-4.687 12.284-4.687 16.97 0zM640 468v-10c0-6.627-5.373-12-12-12H300c-6.627 0-12 5.373-12 12v10c0 6.627 5.373 12 12 12h328c6.627 0 12-5.373 12-12z",
        className: "jsx-994201825",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 525
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("count", {
        className: "jsx-994201825",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 525
        },
        __self: this
      }, "6"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("submenu", {
        className: "jsx-994201825",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 526
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("btn", {
        className: "jsx-994201825" + " " + "disable",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 527
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 320 512",
        className: "jsx-994201825" + " " + "svg-inline svg-angle-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 527
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z",
        className: "jsx-994201825",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 527
        },
        __self: this
      })), "Atores", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        className: "jsx-994201825" + " " + "svg-inline svg-circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 527
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z",
        className: "jsx-994201825",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 527
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("btn", {
        href: "./themes/cantores/",
        className: "jsx-994201825",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 528
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 320 512",
        className: "jsx-994201825" + " " + "svg-inline svg-angle-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 528
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z",
        className: "jsx-994201825",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 528
        },
        __self: this
      })), "Cantores", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        className: "jsx-994201825" + " " + "svg-inline svg-circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 528
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z",
        className: "jsx-994201825",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 528
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("btn", {
        className: "jsx-994201825" + " " + "disable",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 529
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 320 512",
        className: "jsx-994201825" + " " + "svg-inline svg-angle-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 529
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z",
        className: "jsx-994201825",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 529
        },
        __self: this
      })), "Dentistas", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        className: "jsx-994201825" + " " + "svg-inline svg-circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 529
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z",
        className: "jsx-994201825",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 529
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("btn", {
        className: "jsx-994201825" + " " + "disable",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 530
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 320 512",
        className: "jsx-994201825" + " " + "svg-inline svg-angle-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 530
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z",
        className: "jsx-994201825",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 530
        },
        __self: this
      })), "Arquitetos", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        className: "jsx-994201825" + " " + "svg-inline svg-circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 530
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z",
        className: "jsx-994201825",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 530
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("btn", {
        className: "jsx-994201825" + " " + "disable",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 531
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 320 512",
        className: "jsx-994201825" + " " + "svg-inline svg-angle-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 531
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z",
        className: "jsx-994201825",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 531
        },
        __self: this
      })), "Advogados", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        className: "jsx-994201825" + " " + "svg-inline svg-circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 531
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z",
        className: "jsx-994201825",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 531
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("btn", {
        className: "jsx-994201825" + " " + "disable",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 532
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 320 512",
        className: "jsx-994201825" + " " + "svg-inline svg-angle-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 532
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z",
        className: "jsx-994201825",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 532
        },
        __self: this
      })), "Programadores", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        className: "jsx-994201825" + " " + "svg-inline svg-circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 532
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z",
        className: "jsx-994201825",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 532
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("btn", {
        className: "jsx-994201825" + " " + "submenu-has-numbers",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 535
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 320 512",
        className: "jsx-994201825" + " " + "svg-inline svg-stores",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 536
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M635.7 176.1l-91.4-160C538.6 6.2 528 0 516.5 0h-393C112 0 101.4 6.2 95.7 16.1l-91.4 160C-7.9 197.5 7.4 224 32 224h32v254.5C64 497 78.3 512 96 512h256c17.7 0 32-15 32-33.5V224h160v280c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8V224h32c24.6 0 39.9-26.5 27.7-47.9zM352 478.5c0 .9-.3 1.4-.2 1.5l-255.2.2s-.6-.5-.6-1.7V352h256v126.5zm0-158.5H96v-96h256v96zM32.1 192l91.4-160h393L608 192H32.1z",
        className: "jsx-994201825",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 536
        },
        __self: this
      })), "Stores", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 320 512",
        className: "jsx-994201825" + " " + "svg-inline svg-terminal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 536
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M34.495 36.465l211.051 211.05c4.686 4.686 4.686 12.284 0 16.971L34.495 475.535c-4.686 4.686-12.284 4.686-16.97 0l-7.071-7.07c-4.686-4.686-4.686-12.284 0-16.971L205.947 256 10.454 60.506c-4.686-4.686-4.686-12.284 0-16.971l7.071-7.07c4.686-4.687 12.284-4.687 16.97 0zM640 468v-10c0-6.627-5.373-12-12-12H300c-6.627 0-12 5.373-12 12v10c0 6.627 5.373 12 12 12h328c6.627 0 12-5.373 12-12z",
        className: "jsx-994201825",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 536
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("count", {
        className: "jsx-994201825",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 536
        },
        __self: this
      }, "7"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("submenu", {
        className: "jsx-994201825",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 537
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("btn", {
        href: "./themes/mercadolivre/",
        className: "jsx-994201825",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 538
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 320 512",
        className: "jsx-994201825" + " " + "svg-inline svg-angle-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 538
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z",
        className: "jsx-994201825",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 538
        },
        __self: this
      })), "Mercado Livre", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        className: "jsx-994201825" + " " + "svg-inline svg-circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 538
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z",
        className: "jsx-994201825",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 538
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("btn", {
        className: "jsx-994201825" + " " + "disable",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 539
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 320 512",
        className: "jsx-994201825" + " " + "svg-inline svg-angle-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 539
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z",
        className: "jsx-994201825",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 539
        },
        __self: this
      })), "Inform\xE1tica", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        className: "jsx-994201825" + " " + "svg-inline svg-circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 539
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z",
        className: "jsx-994201825",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 539
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("btn", {
        className: "jsx-994201825" + " " + "disable",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 540
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 320 512",
        className: "jsx-994201825" + " " + "svg-inline svg-angle-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 540
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z",
        className: "jsx-994201825",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 540
        },
        __self: this
      })), "Constru\xE7\xE3o", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        className: "jsx-994201825" + " " + "svg-inline svg-circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 540
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z",
        className: "jsx-994201825",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 540
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("btn", {
        className: "jsx-994201825" + " " + "disable",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 541
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 320 512",
        className: "jsx-994201825" + " " + "svg-inline svg-angle-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 541
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z",
        className: "jsx-994201825",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 541
        },
        __self: this
      })), "Cal\xE7ados", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        className: "jsx-994201825" + " " + "svg-inline svg-circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 541
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z",
        className: "jsx-994201825",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 541
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("btn", {
        href: "./themes/celmar/",
        className: "jsx-994201825",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 542
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 320 512",
        className: "jsx-994201825" + " " + "svg-inline svg-angle-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 542
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z",
        className: "jsx-994201825",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 542
        },
        __self: this
      })), "Planejados", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        className: "jsx-994201825" + " " + "svg-inline svg-circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 542
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z",
        className: "jsx-994201825",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 542
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("btn", {
        className: "jsx-994201825" + " " + "disable",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 543
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 320 512",
        className: "jsx-994201825" + " " + "svg-inline svg-angle-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 543
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z",
        className: "jsx-994201825",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 543
        },
        __self: this
      })), "Roupas", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        className: "jsx-994201825" + " " + "svg-inline svg-circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 543
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z",
        className: "jsx-994201825",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 543
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("btn", {
        className: "jsx-994201825" + " " + "submenu-has-numbers",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 546
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 320 512",
        className: "jsx-994201825" + " " + "svg-inline svg-restaurantes",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 547
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M344.1 470.3l14.2-164.8c-42.1-33.1-70.4-77-70.4-129.5C288 81.7 376.1 0 440 0c22.1 0 40 17.3 40 38.5v435c0 21.2-17.9 38.5-40 38.5h-56c-22.8 0-41.8-18.7-39.9-41.7zM320 176c0 51 32.2 85.5 71.8 114.5L376 473.1c-.3 3.7 3.4 6.9 8 6.9h56c4.3 0 8-3 8-6.5v-435c0-3.5-3.7-6.5-8-6.5-44.6 0-120 65.8-120 144zM240.7 33.8C237.4 14.3 219.5 0 194.6 0c-11.9 0-24.1 3.4-33.3 11.2C152.9 4.1 141.3 0 128 0s-24.9 4.1-33.3 11.2C85.5 3.4 73.3 0 61.4 0 36.2 0 18.6 14.5 15.3 33.8 13.5 43.2 0 118.4 0 149.9c0 50.9 26.7 91.6 71 110.7L59.6 471.4C58.4 493.4 75.9 512 98 512h60c22 0 39.6-18.5 38.4-40.6L185 260.6c44.2-19.1 71-59.8 71-110.7 0-31.5-13.5-106.7-15.3-116.1zM152.3 240l12.2 233.1c.2 3.7-2.7 6.9-6.5 6.9H98c-3.7 0-6.7-3.1-6.5-6.9L103.7 240C61.3 231.2 32 197 32 149.9c0-29.7 14.8-110.6 14.8-110.6 1.6-9.9 28.3-9.7 29.5.2V162c.9 11.5 28.2 11.7 29.5.2l7.4-122.9c1.6-9.7 27.9-9.7 29.5 0l7.4 122.9c1.3 11.4 28.6 11.2 29.5-.2V39.6c1.2-9.9 27.9-10.1 29.5-.2 0 0 14.8 80.9 14.8 110.6.1 46.8-29 81.2-71.6 90z",
        className: "jsx-994201825",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 547
        },
        __self: this
      })), "Alimenta\xE7\xE3o", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 320 512",
        className: "jsx-994201825" + " " + "svg-inline svg-terminal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 547
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M34.495 36.465l211.051 211.05c4.686 4.686 4.686 12.284 0 16.971L34.495 475.535c-4.686 4.686-12.284 4.686-16.97 0l-7.071-7.07c-4.686-4.686-4.686-12.284 0-16.971L205.947 256 10.454 60.506c-4.686-4.686-4.686-12.284 0-16.971l7.071-7.07c4.686-4.687 12.284-4.687 16.97 0zM640 468v-10c0-6.627-5.373-12-12-12H300c-6.627 0-12 5.373-12 12v10c0 6.627 5.373 12 12 12h328c6.627 0 12-5.373 12-12z",
        className: "jsx-994201825",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 547
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("count", {
        className: "jsx-994201825",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 547
        },
        __self: this
      }, "5"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("submenu", {
        className: "jsx-994201825",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 548
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("btn", {
        className: "jsx-994201825" + " " + "disable",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 549
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 320 512",
        className: "jsx-994201825" + " " + "svg-inline svg-angle-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 549
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z",
        className: "jsx-994201825",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 549
        },
        __self: this
      })), "Restaurantes", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        className: "jsx-994201825" + " " + "svg-inline svg-circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 549
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z",
        className: "jsx-994201825",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 549
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("btn", {
        className: "jsx-994201825" + " " + "disable",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 550
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 320 512",
        className: "jsx-994201825" + " " + "svg-inline svg-angle-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 550
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z",
        className: "jsx-994201825",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 550
        },
        __self: this
      })), "Cafeterias", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        className: "jsx-994201825" + " " + "svg-inline svg-circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 550
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z",
        className: "jsx-994201825",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 550
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("btn", {
        href: "./themes/cervejarias/",
        className: "jsx-994201825",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 551
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 320 512",
        className: "jsx-994201825" + " " + "svg-inline svg-angle-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 551
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z",
        className: "jsx-994201825",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 551
        },
        __self: this
      })), "Cervejarias", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        className: "jsx-994201825" + " " + "svg-inline svg-circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 551
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z",
        className: "jsx-994201825",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 551
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("btn", {
        className: "jsx-994201825" + " " + "disable",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 552
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 320 512",
        className: "jsx-994201825" + " " + "svg-inline svg-angle-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 552
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z",
        className: "jsx-994201825",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 552
        },
        __self: this
      })), "Pizzarias", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        className: "jsx-994201825" + " " + "svg-inline svg-circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 552
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z",
        className: "jsx-994201825",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 552
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("btn", {
        className: "jsx-994201825" + " " + "disable",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 553
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 320 512",
        className: "jsx-994201825" + " " + "svg-inline svg-angle-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 553
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z",
        className: "jsx-994201825",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 553
        },
        __self: this
      })), "Sorveterias", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        className: "jsx-994201825" + " " + "svg-inline svg-circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 553
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z",
        className: "jsx-994201825",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 553
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("btn", {
        className: "jsx-994201825" + " " + "submenu-has-numbers",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 556
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 320 512",
        className: "jsx-994201825" + " " + "svg-inline svg-stores",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 557
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M635.7 176.1l-91.4-160C538.6 6.2 528 0 516.5 0h-393C112 0 101.4 6.2 95.7 16.1l-91.4 160C-7.9 197.5 7.4 224 32 224h32v254.5C64 497 78.3 512 96 512h256c17.7 0 32-15 32-33.5V224h160v280c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8V224h32c24.6 0 39.9-26.5 27.7-47.9zM352 478.5c0 .9-.3 1.4-.2 1.5l-255.2.2s-.6-.5-.6-1.7V352h256v126.5zm0-158.5H96v-96h256v96zM32.1 192l91.4-160h393L608 192H32.1z",
        className: "jsx-994201825",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 557
        },
        __self: this
      })), "Beleza", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 320 512",
        className: "jsx-994201825" + " " + "svg-inline svg-terminal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 557
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M34.495 36.465l211.051 211.05c4.686 4.686 4.686 12.284 0 16.971L34.495 475.535c-4.686 4.686-12.284 4.686-16.97 0l-7.071-7.07c-4.686-4.686-4.686-12.284 0-16.971L205.947 256 10.454 60.506c-4.686-4.686-4.686-12.284 0-16.971l7.071-7.07c4.686-4.687 12.284-4.687 16.97 0zM640 468v-10c0-6.627-5.373-12-12-12H300c-6.627 0-12 5.373-12 12v10c0 6.627 5.373 12 12 12h328c6.627 0 12-5.373 12-12z",
        className: "jsx-994201825",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 557
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("count", {
        className: "jsx-994201825",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 557
        },
        __self: this
      }, "2"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("submenu", {
        className: "jsx-994201825",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 558
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("btn", {
        className: "jsx-994201825" + " " + "disable",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 559
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 320 512",
        className: "jsx-994201825" + " " + "svg-inline svg-angle-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 559
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z",
        className: "jsx-994201825",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 559
        },
        __self: this
      })), "Sal\xE3o de Cabelereiro", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        className: "jsx-994201825" + " " + "svg-inline svg-circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 559
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z",
        className: "jsx-994201825",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 559
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("btn", {
        className: "jsx-994201825" + " " + "disable",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 560
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 320 512",
        className: "jsx-994201825" + " " + "svg-inline svg-angle-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 560
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z",
        className: "jsx-994201825",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 560
        },
        __self: this
      })), "Aluguel de Roupas", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        className: "jsx-994201825" + " " + "svg-inline svg-circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 560
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z",
        className: "jsx-994201825",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 560
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("btn", {
        className: "jsx-994201825" + " " + "disable",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 561
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 320 512",
        className: "jsx-994201825" + " " + "svg-inline svg-angle-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 561
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z",
        className: "jsx-994201825",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 561
        },
        __self: this
      })), "Cosm\xE9ticos", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        className: "jsx-994201825" + " " + "svg-inline svg-circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 561
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z",
        className: "jsx-994201825",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 561
        },
        __self: this
      })))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("sidebardivider", {
        className: "jsx-994201825",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 565
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("sidebarseparator", {
        className: "jsx-994201825",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 566
        },
        __self: this
      }, "FALE CONOSCO"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("menucontact", {
        className: "jsx-994201825",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 567
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "tel:11 93018 8363",
        className: "jsx-994201825",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 568
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 320 512",
        className: "jsx-994201825" + " " + "svg-inline svg-phone",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 569
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M487.8 24.1L387 .8c-14.7-3.4-29.8 4.2-35.8 18.1l-46.5 108.5c-5.5 12.7-1.8 27.7 8.9 36.5l53.9 44.1c-34 69.2-90.3 125.6-159.6 159.6l-44.1-53.9c-8.8-10.7-23.8-14.4-36.5-8.9L18.9 351.3C5 357.3-2.6 372.3.8 387L24 487.7C27.3 502 39.9 512 54.5 512 306.7 512 512 307.8 512 54.5c0-14.6-10-27.2-24.2-30.4zM55.1 480l-23-99.6 107.4-46 59.5 72.8c103.6-48.6 159.7-104.9 208.1-208.1l-72.8-59.5 46-107.4 99.6 23C479.7 289.7 289.6 479.7 55.1 480z",
        className: "jsx-994201825",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 569
        },
        __self: this
      })), "Liga\xE7\xE3o", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        className: "jsx-994201825" + " " + "svg-inline svg-circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 569
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z",
        className: "jsx-994201825",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 569
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "https://api.whatsapp.com/send?phone=5511930188363",
        className: "jsx-994201825",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 571
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 320 512",
        className: "jsx-994201825" + " " + "svg-inline svg-whatsapp",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 572
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z",
        className: "jsx-994201825",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 572
        },
        __self: this
      })), "Whatsapp", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        className: "jsx-994201825" + " " + "svg-inline svg-circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 572
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z",
        className: "jsx-994201825",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 572
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "mailto:contact@avn.systems",
        className: "jsx-994201825",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 574
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 320 512",
        className: "jsx-994201825" + " " + "svg-inline svg-mail",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 575
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M256 8C118.941 8 8 118.919 8 256c0 137.058 110.919 248 248 248 52.925 0 104.68-17.078 147.092-48.319 5.501-4.052 6.423-11.924 2.095-17.211l-5.074-6.198c-4.018-4.909-11.193-5.883-16.307-2.129C346.93 457.208 301.974 472 256 472c-119.373 0-216-96.607-216-216 0-119.375 96.607-216 216-216 118.445 0 216 80.024 216 200 0 72.873-52.819 108.241-116.065 108.241-19.734 0-23.695-10.816-19.503-33.868l32.07-164.071c1.449-7.411-4.226-14.302-11.777-14.302h-12.421a12 12 0 0 0-11.781 9.718c-2.294 11.846-2.86 13.464-3.861 25.647-11.729-27.078-38.639-43.023-73.375-43.023-68.044 0-133.176 62.95-133.176 157.027 0 61.587 33.915 98.354 90.723 98.354 39.729 0 70.601-24.278 86.633-46.982-1.211 27.786 17.455 42.213 45.975 42.213C453.089 378.954 504 321.729 504 240 504 103.814 393.863 8 256 8zm-37.92 342.627c-36.681 0-58.58-25.108-58.58-67.166 0-74.69 50.765-121.545 97.217-121.545 38.857 0 58.102 27.79 58.102 65.735 0 58.133-38.369 122.976-96.739 122.976z",
        className: "jsx-994201825",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 575
        },
        __self: this
      })), "E-mail", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        className: "jsx-994201825" + " " + "svg-inline svg-circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 575
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z",
        className: "jsx-994201825",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 575
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "sms:11 93018 8363",
        className: "jsx-994201825",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 577
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 320 512",
        className: "jsx-994201825" + " " + "svg-inline svg-mail",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 578
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm16 400c0 8.822-7.178 16-16 16H48c-8.822 0-16-7.178-16-16V80c0-8.822 7.178-16 16-16h352c8.822 0 16 7.178 16 16v352zm-64-304H96c-17.673 0-32 14.327-32 32v192c0 17.673 14.327 32 32 32h256c17.673 0 32-14.327 32-32V160c0-17.673-14.327-32-32-32zm0 32v33.855c-14.136 11.628-36.566 29.664-82.117 65.821C259.426 268.015 238.748 288 224.256 288l-.256-.002-.256.002c-14.492 0-35.17-19.984-45.628-28.324-45.544-36.152-67.978-54.192-82.117-65.822V160H352zM96 352V235.092c14.109 11.367 33.624 26.948 62.221 49.648 13.777 11.01 37.902 35.26 65.523 35.26l.253-.001.258.001c27.529 0 51.392-23.975 65.541-35.274 28.583-22.689 48.099-38.27 62.203-49.634V352H96z",
        className: "jsx-994201825",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 578
        },
        __self: this
      })), "SMS", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        className: "jsx-994201825" + " " + "svg-inline svg-circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 578
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z",
        className: "jsx-994201825",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 578
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "994201825",
        css: "leftmenu.jsx-994201825{top:0;width:100%;left:-340px;height:100vh;display:block;z-index:10000;position:fixed;max-width:330px;box-shadow:0 0 8px #000;background-color:#1c222e;-webkit-transition:left 350ms ease 0s;-moz-transition:left 350ms ease 0s;-ms-transition:left 350ms ease 0s;-o-transition:left 350ms ease 0s;-webkit-transition:left 350ms ease 0s;transition:left 350ms ease 0s;}leftmenu.jsx-994201825 sidebaruser.jsx-994201825{box-shadow:0 0 6px 4px rgba(0,0,0,.3);touch-action:none;display:block;height:185px;}leftmenu.jsx-994201825 sidebaruser.jsx-994201825 photo.jsx-994201825{background-image:url(".concat("", "/static/images/icons/icon-192x192.png);}leftmenu.jsx-994201825 sidebaruser.jsx-994201825 photo.jsx-994201825{background-color:white;border:2px solid #00f9a6;background-position:center top;text-shadow:1px 1px 5px #000000;box-shadow:1px 1px 5px #000000;margin:15px 0px 0px 15px;background-size:cover;border-radius:50%;position:absolute;height:90px;width:90px;z-index:10;}leftmenu.jsx-994201825 sidebaruser.jsx-994201825 photo.jsx-994201825 title.jsx-994201825{position:relative;min-width:285px;font-size:18px;display:block;color:#fff;top:105px;}leftmenu.jsx-994201825 sidebaruser.jsx-994201825 photo.jsx-994201825 subtitle.jsx-994201825{position:relative;font-size:14px;display:block;width:290px;color:#ccc;top:100px;}leftmenu.jsx-994201825 sidebaruser.jsx-994201825 bgimg.jsx-994201825{background-image:url(").concat("", "/static/images/homepage/background-avn-1.jpg);}leftmenu.jsx-994201825 sidebaruser.jsx-994201825 bgimg.jsx-994201825{background-blend-mode:hard-light;background-position:center;background-color:#a7f7ff;background-size:cover;position:absolute;height:185px;width:100%;}leftmenu.jsx-994201825 sidebaruser.jsx-994201825 bgshadow.jsx-994201825{top:0;left:0;right:0;z-index:9;height:185px;position:absolute;background:linear-gradient(to bottom,rgba(0,0,0,0) 0,rgba(0,0,0,0) 20%,rgba(0,0,0,.1) 40%,rgba(0,0,0,.7) 70%,rgba(0,0,0,1) 100%);}leftmenu.jsx-994201825 menuscroll.jsx-994201825{height:calc(100vh - 235px);touch-action:pan-y;overflow-x:hidden;position:fixed;overflow:auto;width:330px;}leftmenu.jsx-994201825 menuscroll.jsx-994201825 sidebarseparator.jsx-994201825:first-child{margin-top:20px;}leftmenu.jsx-994201825 menuscroll.jsx-994201825 sidebarseparator.jsx-994201825{text-transform:uppercase;margin-bottom:10px;padding-left:20px;margin-top:10px;font-weight:500;font-size:14px;display:block;color:#ccc;}left-enu.jsx-994201825 menuscroll.jsx-994201825 sidebardivider.jsx-994201825{border-top:solid 1px rgba(0,0,0,.2);border-bottom:solid 1px rgba(255,255,255,.03);margin-bottom:20px;margin-top:10px;display:block;}leftmenu.jsx-994201825 menuscroll.jsx-994201825 menuitems.jsx-994201825>btn.jsx-994201825,leftmenu.jsx-994201825 menuscroll.jsx-994201825 menucontact.jsx-994201825>a.jsx-994201825{-webkit-text-decoration:none;text-decoration:none;padding-left:25px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;line-height:55px;cursor:pointer;font-size:15px;display:block;color:#ccc;}leftmenu.jsx-994201825 menuscroll.jsx-994201825 menuitems.jsx-994201825>btn.disable.jsx-994201825,leftmenu.jsx-994201825 menuscroll.jsx-994201825 menucontact.jsx-994201825>a.disable.jsx-994201825{pointer-events:none;opacity:.5;}leftmenu.jsx-994201825 menuscroll.jsx-994201825 menuitems.jsx-994201825>btn.jsx-994201825 .svg-inline.jsx-994201825,leftmenu.jsx-994201825 menuscroll.jsx-994201825 menucontact.jsx-994201825>a.jsx-994201825 .svg-inline.jsx-994201825{vertical-align:-.125em;display:inline-block;overflow:visible;position:relative;margin-right:20px;min-width:25px;color:#b500ff;height:22px;width:auto;top:3px;}leftmenu.jsx-994201825 menuscroll.jsx-994201825 menuitems.jsx-994201825>btn.jsx-994201825 .svg-inline.svg-circle.jsx-994201825,leftmenu.jsx-994201825 menuscroll.jsx-994201825 menucontact.jsx-994201825>a.jsx-994201825 .svg-inline.svg-circle.jsx-994201825{color:#434752;float:right;height:5px;top:25px;}leftmenu.jsx-994201825 menuscroll.jsx-994201825 menuitems.jsx-994201825>btn.jsx-994201825 .svg-inline.svg-terminal.jsx-994201825{color:#434752;float:right;left:-5px;top:18px;}leftmenu.jsx-994201825 menuscroll.jsx-994201825 menuitems.jsx-994201825>btn.jsx-994201825 .svg-inline.svg-tv.jsx-994201825{left:-4px;}leftmenu.jsx-994201825 menuscroll.jsx-994201825 menuitems.jsx-994201825>btn.jsx-994201825 .svg-inline.svg-stores.jsx-994201825{left:-5px;top:2px;}leftmenu.jsx-994201825 menuscroll.jsx-994201825 menuitems.jsx-994201825>btn.jsx-994201825 .svg-inline.svg-restaurantes.jsx-994201825,leftmenu.jsx-994201825 menuscroll.jsx-994201825 menuitems.jsx-994201825>btn.jsx-994201825 .svg-inline.svg-whatsapp.jsx-994201825,leftmenu.jsx-994201825 menuscroll.jsx-994201825 menuitems.jsx-994201825>btn.jsx-994201825 .svg-inline.svg-phone.jsx-994201825,leftmenu.jsx-994201825 menuscroll.jsx-994201825 menuitems.jsx-994201825>btn.jsx-994201825 .svg-inline.svg-mail.jsx-994201825,leftmenu.jsx-994201825 menuscroll.jsx-994201825 menuitems.jsx-994201825>btn.jsx-994201825 .svg-inline.svg-star.jsx-994201825{left:-2px;}leftmenu.jsx-994201825 menuscroll.jsx-994201825 menuitems.jsx-994201825>btn.jsx-994201825:hover,leftmenu.jsx-994201825 menuscroll.jsx-994201825 menucontact.jsx-994201825>a.jsx-994201825:hover{background-color:#232b3a;color:white;}leftmenu.jsx-994201825 menuscroll.jsx-994201825 menuitems.jsx-994201825>btn.jsx-994201825:hover .svg-inline.svg-terminal.jsx-994201825,leftmenu.jsx-994201825 menuscroll.jsx-994201825 menuitems.jsx-994201825>btn.jsx-994201825:hover .svg-inline.svg-circle.jsx-994201825,leftmenu.jsx-994201825 menuscroll.jsx-994201825 menucontact.jsx-994201825>a.jsx-994201825:hover .svg-inline.svg-circle.jsx-994201825{color:white;}leftmenu.jsx-994201825 menuscroll.jsx-994201825 menuitems.jsx-994201825>btn.jsx-994201825>count.jsx-994201825{position:relative;font-weight:bold;font-size:18px;color:#c947ff;right:-25px;float:right;top:-2px;}leftmenu.jsx-994201825 menuscroll.jsx-994201825 menuitems.jsx-994201825>btn.jsx-994201825 submenu.jsx-994201825{width:calc(100% + 25px);position:relative;display:none;left:-25px;}leftmenu.jsx-994201825 menuscroll.jsx-994201825 menuitems.jsx-994201825>btn.jsx-994201825 submenu.jsx-994201825 btn.disable.jsx-994201825{opacity:.5;}leftmenu.jsx-994201825 menuscroll.jsx-994201825 menuitems.jsx-994201825>btn.jsx-994201825 submenu.jsx-994201825 btn.jsx-994201825{padding-left:35px;}leftmenu.jsx-994201825 menuscroll.jsx-994201825 menuitems.jsx-994201825>btn.jsx-994201825 submenu.open.jsx-994201825{display:grid;}leftmenu.jsx-994201825 menuscroll.jsx-994201825 menuitems.jsx-994201825>btn.jsx-994201825:hover submenu.jsx-994201825 btn.jsx-994201825 .svg-inline.svg-circle.jsx-994201825{color:#434752;}leftmenu.jsx-994201825 menuscroll.jsx-994201825 menuitems.jsx-994201825>btn.jsx-994201825:hover submenu.jsx-994201825 btn.jsx-994201825:not(.disable):hover{background-color:#2f3a4e;color:white;}leftmenu.jsx-994201825 menuscroll.jsx-994201825 menuitems.jsx-994201825>btn.jsx-994201825:hover submenu.jsx-994201825 btn.jsx-994201825:not(.disable):hover .svg-inline.svg-circle.jsx-994201825{color:white;}@media (max-width:940px){footer.jsx-994201825 infos.jsx-994201825{display:none;}}@media (min-width:625px){leftmenu.jsx-994201825 menusitemobile.jsx-994201825{display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VidW50dS93b3Jrc3BhY2UvZXN0dWRvL25leHQvY29tcG9uZW50cy9pbnRlcmZhY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcWtCd0IsQUFHMkIsQUFpQmdDLEFBTWtELEFBR2pFLEFBY0wsQUFRQSxBQVE2RSxBQUc5RCxBQVMzQixBQVVxQixBQVFYLEFBR1MsQUFVVyxBQVNmLEFBV0QsQUFLRyxBQWFULEFBTUEsQUFNSixBQUdBLEFBUUEsQUFJZSxBQU1iLEFBR00sQUFTTSxBQU1iLEFBR08sQUFHTCxBQUdDLEFBR1csQUFJYixBQUtLLEFBS0EsTUFyTk4sQUFvRUosSUFpRlgsQUFHWSxBQVFaLENBNEJBLENBbEJBLEFBa0NBLENBdklZLEFBNkhaLEFBZUksQUFLQSxDQTdFWSxBQU1BLEFBc0RoQixFQS9HQSxDQXJGZ0IsQ0F1Q0ksQUFRRCxBQXlHbkIsQUFvQnFCLEFBa0JyQixFQXhFZSxDQWpERCxFQTVDZSxBQWtHSixDQTBESCxDQTdGQyxBQTJFUCxBQW9DQSxDQTlERCxBQU1ELENBbEVTLEVBNUVOLEVBcUVBLEFBaURqQixFQXZFa0IsQUFVYSxDQWxCWixDQXFJQSxDQTNFK0IsQUE4Q3JDLENBTkEsQUEwQmIsQUFvQ0EsQ0F4THNCLElBZEosQUFvTEQsRUEvR0ssQUFrQkEsQUFtQ0QsQ0FxQnJCLENBbkVzQixBQTZEdEIsQ0ExRmdCLENBdkJtQixDQWVqQixDQWtFSSxBQW1FSixLQVNILENBcExHLEFBY0EsR0FpQ0gsQ0FTYyxDQWtFUCxDQXJEK0csQUFrQmpILENBaERMLENBcUNJLEFBZ0dILEVBU2hCLEVBNUVxQixFQXhHRixBQWNGLEFBaUNILElBUkEsRUFxSUUsRUFyRkksQ0FoRWdCLEFBcURsQixBQThDSSxDQTFFdEIsRUErQ3VCLENBaEZ2QixDQXlCQSxDQXZDb0IsQUF1RE0sR0F0QzFCLEFBMkphLEtBaEdHLENBV0csQ0FyQ25CLEVBd0VtQixBQW1EbkIsSUE1SzRCLEFBOEZSLElBbEJwQixFQXJCc0IsRUFnQ0osRUFqRWlCLENBb0dqQixLQTNCQSxNQVBILEVBdkZjLEFBdURaLENBbUVELEtBM0JoQixHQVBBLElBaENlLEFBbUVBLElBckdjLE9BbUM3QixBQW1FWSxDQTNIOEIsR0FxR3JCLElBdUJyQixVQXRHMEIsR0FnRlAsZUFDQSxHQXRHb0IsQ0FzQmpCLEVBMEN0QixTQXVDa0IsT0FoRkksT0FpRlAsU0F2R3VCLEVBdUJ0QixBQWlGaEIsWUFoRmUsV0FDQSxTQXhCc0IsRUF5QnJDLCtCQXhCa0Msb0VBQ2xDIiwiZmlsZSI6Ii9ob21lL3VidW50dS93b3Jrc3BhY2UvZXN0dWRvL25leHQvY29tcG9uZW50cy9pbnRlcmZhY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKmdsb2JhbCAkIG5hdmlnYXRvciovXG5cbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuXG5pbXBvcnQgTlByb2dyZXNzIGZyb20gJ25wcm9ncmVzcydcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5cblJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlU3RhcnQnLCAodXJsKSA9PiB7XG4gIGNvbnNvbGUubG9nKGBMb2FkaW5nOiAke3VybH1gKVxuICBOUHJvZ3Jlc3Muc3RhcnQoKVxufSlcblJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCAoKSA9PiBOUHJvZ3Jlc3MuZG9uZSgpKVxuUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VFcnJvcicsICgpID0+IE5Qcm9ncmVzcy5kb25lKCkpXG5cbmV4cG9ydCBkZWZhdWx0ICh7IGNoaWxkcmVuLFxuICAgIHRpdGxlID0gJ1RoaXMgaXMgdGhlIGRlZmF1bHQgdGl0bGUnLFxuICAgIFxuICAgIG9nU2l0ZU5hbWUgPSBcImF2bi5zeXN0ZW1zXCIsIG9nVGl0bGUgPSBcIldlYnNpdGUgfCBhdm4uc3lzdGVtc1wiLFxuICAgIG9nVXJsID0gXCJodHRwczovL2F2bi5zeXN0ZW1zXCIsIG9nVHlwZSA9IFwiYXJ0aWNsZVwiLFxuICAgIG9nRGVzY3JpcHRpb24gPSBcIldlYnNpdGUgY3JlYXRlZCB3aXRoIG5leHQuanMgb3B0bWl6ZWQgYXMgYSBQV0FcIixcbiAgICBvZ0ltYWdlID0gJy9zdGF0aWMvaW1hZ2VzL2F2bi5zeXN0ZW1zLm9nLWltYWdlLmpwZycsXG4gICAgXG4gICAgdHdpdHRlclNpdGUgPSBcIkBhdm4uc3lzdGVtc1wiLFxuICAgIHR3aXR0ZXJDcmVhdG9yID0gXCJAYXZuLnN5c3RlbXNcIixcbiAgICBcbiAgICBjYW5vbmljYWwgPSBcImh0dHBzOi8vYXZuLnN5c3RlbXNcIixcbiAgICBmZWVkWG1sID0gXCJodHRwczovL2F2bi5zeXN0ZW1zL2ZlZWQueG1sXCIsXG4gICAgZmVlZEpzb24gPSBcImh0dHBzOi8vYXZuLnN5c3RlbXNtL2ZlZWQuanNvblwiXG4gIH0pID0+IChcbiAgPGludGVyZmFjZT5cbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT57IHRpdGxlIH08L3RpdGxlPlxuICAgICAgPG1ldGEgY2hhclNldD0ndXRmLTgnIC8+XG4gICAgICA8bWV0YSBuYW1lPSd2aWV3cG9ydCcgY29udGVudD0naW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aCcgLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJhdXRob3JcIiBjb250ZW50PVwiQWxsYW4gQXZlbGFyIC0gaHR0cHM6Ly9hbGxhbmF2ZWxhci5jb20vXCIgLz5cbiAgICAgIFxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpzaXRlX25hbWVcIiBjb250ZW50PXsgb2dTaXRlTmFtZSB9IC8+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD17IG9nVGl0bGUgfSAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PXsgb2dVcmwgfSAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0eXBlXCIgY29udGVudD17IG9nVHlwZSB9IC8+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD17IG9nRGVzY3JpcHRpb24gfSAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9eyBwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArIG9nSW1hZ2UgfSAvPlxuICAgIFxuICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6Y2FyZFwiIGNvbnRlbnQ9XCJzdW1tYXJ5X2xhcmdlX2ltYWdlXCIgLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOnNpdGVcIiBjb250ZW50PXsgdHdpdHRlclNpdGUgfSAvPlxuICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6Y3JlYXRvclwiIGNvbnRlbnQ9eyB0d2l0dGVyQ3JlYXRvciB9IC8+XG4gICAgXG4gICAgICA8bGluayByZWw9XCJjYW5vbmljYWxcIiBocmVmPXsgY2Fub25pY2FsIH0gLz5cbiAgICAgIDxsaW5rIHJlbD1cImFsdGVybmF0ZVwiIHR5cGU9XCJhcHBsaWNhdGlvbi9yc3MreG1sXCIgdGl0bGU9eyBvZ1RpdGxlIH0gaHJlZj17IGZlZWRYbWwgfSAvPlxuICAgICAgPGxpbmsgcmVsPVwiYWx0ZXJuYXRlXCIgdHlwZT1cImFwcGxpY2F0aW9uL2pzb25cIiB0aXRsZT17IG9nVGl0bGUgfSBocmVmPXsgZmVlZEpzb24gfSAvPlxuXG4gICAgICA8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCIxMTR4MTE0XCIgaHJlZj17IHByb2Nlc3MuZW52LkJBQ0tFTkRfVVJMICsgJy9zdGF0aWMvaW1hZ2VzL2ljb24ucG5nJ30gLz5cbiAgICAgIDxsaW5rIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBzaXplcz1cIjEyMHgxMjBcIiBocmVmPXsgcHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyAnL3N0YXRpYy9pbWFnZXMvaWNvbi5wbmcnfSAvPlxuICAgICAgPGxpbmsgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIHNpemVzPVwiMTQ0eDE0NFwiIGhyZWY9eyBwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArICcvc3RhdGljL2ltYWdlcy9pY29uLnBuZyd9IC8+XG4gICAgICA8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCIxNTJ4MTUyXCIgaHJlZj17IHByb2Nlc3MuZW52LkJBQ0tFTkRfVVJMICsgJy9zdGF0aWMvaW1hZ2VzL2ljb24ucG5nJ30gLz5cbiAgICAgIDxsaW5rIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBzaXplcz1cIjE4MHgxODBcIiBocmVmPXsgcHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyAnL3N0YXRpYy9pbWFnZXMvaWNvbi5wbmcnfSAvPlxuICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS9wbmdcIiBocmVmPXsgcHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyAnL3N0YXRpYy9pbWFnZXMvaWNvbi5wbmcnfSAvPlxuICAgICAgPGxpbmsgcmVsPVwic2hvcnRjdXQgaWNvblwiIGhyZWY9eyBwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArICcvc3RhdGljL2ltYWdlcy9mYXZpY29uLmljbyd9IC8+XG4gICAgICBcbiAgICAgIDxsaW5rIHJlbD1cIm1hc2staWNvblwiIGhyZWY9XCIvYXNzZXRzL3NhZmFyaS1waW5uZWQtdGFiLnN2Z1wiIGNvbG9yPVwiIzViYmFkNVwiIC8+XG4gICAgICA8bGluayByZWw9XCJtYW5pZmVzdFwiIGhyZWY9eyBwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArICcvc3RhdGljL21hbmlmZXN0Lmpzb24nfSAvPlxuICAgICAgXG4gICAgICA8bWV0YSBuYW1lPVwibXNhcHBsaWNhdGlvbi1UaWxlQ29sb3JcIiBjb250ZW50PVwiIzU3MDBBRVwiIC8+XG4gICAgICA8bWV0YSBuYW1lPVwibXNhcHBsaWNhdGlvbi1UaWxlSW1hZ2VcIiBjb250ZW50PXsgcHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyAnL3N0YXRpYy9pbWFnZXMvYXZuLnN5c3RlbXMub2ctaW1hZ2UuanBnJ30gLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJtc2FwcGxpY2F0aW9uLWNvbmZpZ1wiIGNvbnRlbnQ9eyBwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArICcvc3RhdGljL2Jyb3dzZXJjb25maWcueG1sJ30gLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJ0aGVtZS1jb2xvclwiIGNvbnRlbnQ9XCIjNTcwMEFFXCIgLz5cbiAgICAgIFxuICAgICAgPGxpbmsgZGVmZXIgcmVsPSdzdHlsZXNoZWV0JyBocmVmPSdodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjAuMC1iZXRhLjMvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJyBpbnRlZ3JpdHk9J3NoYTM4NC1adWcrUWlEb0pPclo1dDRsc3NMZHhHaFZydXJibUJXb3BvRWwrTTZCZEVmd25DSlp0S3hpMUtneFV5SnExM2R5JyBjcm9zc09yaWdpbj0nYW5vbnltb3VzJyAvPlxuICAgICAgPGxpbmsgcmVsPSdzdHlsZXNoZWV0JyB0eXBlPSd0ZXh0L2NzcycgaHJlZj17IHByb2Nlc3MuZW52LkJBQ0tFTkRfVVJMICsgJy9zdGF0aWMvY3NzL25wcm9ncmVzcy5jc3MnfSAvPlxuICAgICAgPHNjcmlwdCBkZWZlciBzcmM9XCJodHRwczovL2NvZGUuanF1ZXJ5LmNvbS9qcXVlcnktMy4zLjEubWluLmpzXCI+PC9zY3JpcHQ+XG4gICAgPC9IZWFkPlxuICAgIDxIZWFkZXIgLz5cbiAgICA8TGVmdE1lbnUgLz5cbiAgICA8cGFnZT5cbiAgICAgICAgeyBjaGlsZHJlbiB9XG4gICAgPC9wYWdlPlxuICAgIDxtZW51aGlkZXI+PC9tZW51aGlkZXI+XG4gICAgPEZvb3RlciAvPlxuICAgIDxwYWdlbG9hZGVyPjxiYXI+PC9iYXI+PC9wYWdlbG9hZGVyPlxuICAgIFxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgICAgbWluLXdpZHRoOiAzMjBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgke3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMfS9zdGF0aWMvaW1hZ2VzL2JvZHktYmcuanBnKSAjRjVGN0Y2O1xuICAgICAgICB9XG4gICAgICAgIHBhZ2Uge1xuICAgICAgICAgICAgcGFkZGluZzogMTg1cHggMjBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG4gICAgICAgIHByZSBjb2RlIHtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZSFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgICAgLmZ0bCB7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgfVxuICAgICAgICAuZnRyIHtcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgfVxuICAgICAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGJvZHkubGVmdC1tZW51IGxlZnRtZW51IHtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIH1cbiAgICAgICAgYm9keS5sZWZ0LW1lbnUgbWVudWhpZGVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgfVxuICAgICAgICBib2R5LmxlZnQtbWVudSBoZWFkZXIgbmF2dG9nZ2xlIHtcbiAgICAgICAgICAgIGxlZnQ6IDM1MHB4O1xuICAgICAgICB9XG4gICAgICAgIG1lbnVoaWRlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC41KTtcbiAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICB6LWluZGV4OiA5OTk5O1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZSAwcztcbiAgICAgICAgICAgIC1tb3otdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlIDBzO1xuICAgICAgICAgICAgLW1zLXRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZSAwcztcbiAgICAgICAgICAgIC1vLXRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZSAwcztcbiAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZSAwcztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLm5wcm9ncmVzcy1idXN5IHBhZ2Vsb2FkZXIge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cbiAgICAgICAgcGFnZWxvYWRlciB7XG4gICAgICAgICAgICBtYXJnaW46IC0xNXB4IDAgMCAtMTAwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwO1xuICAgICAgICAgICAgei1pbmRleDogOTk5OTk5OTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgfVxuICAgICAgICBwYWdlbG9hZGVyIGJhciB7XG4gICAgICAgICAgICBtYXJnaW46IC0ycHggMCAwIC04N3B4O1xuICAgICAgICAgICAgYW5pbWF0aW9uOiBncmFkdHJhbnNsYXRlIDJzIGluZmluaXRlIGxpbmVhcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLGxlZnQgdG9wLHJpZ2h0IHRvcCxjb2xvci1zdG9wKDAlLHdoaXRlKSxjb2xvci1zdG9wKDUwJSwjODUwMEZGKSxjb2xvci1zdG9wKDEwMCUsd2hpdGUpKTs7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDQwMHB4IDFweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM4NTAwRkY7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB3aWR0aDogMTc0cHg7XG4gICAgICAgICAgICBvcGFjaXR5OiAuODtcbiAgICAgICAgICAgIGhlaWdodDogNHB4O1xuICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM5OXB4KSB7XG4gICAgICAgICAgICBib2R5LmxlZnQtbWVudSBsZWZ0bWVudSwgbGVmdG1lbnUgbWVudXNjcm9sbCB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDY5cHgpIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDMzMHB4O1xuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMjYwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvaW50ZXJmYWNlPlxuKVxuXG5leHBvcnQgY2xhc3MgSGVhZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgICAgIGlmICgnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSB7XG4gICAgICAgIC8vIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyXG4gICAgICAgIC8vICAgLnJlZ2lzdGVyKHByb2Nlc3MuZW52LkJBQ0tFTkRfVVJMICsnL3NlcnZpY2Utd29ya2VyLmpzJylcbiAgICAgICAgLy8gICAudGhlbihyZWdpc3RyYXRpb24gPT4ge1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coJ3NlcnZpY2Ugd29ya2VyIHJlZ2lzdHJhdGlvbiBzdWNjZXNzZnVsJylcbiAgICAgICAgLy8gICB9KVxuICAgICAgICAvLyAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAvLyAgICAgY29uc29sZS53YXJuKCdzZXJ2aWNlIHdvcmtlciByZWdpc3RyYXRpb24gZmFpbGVkJywgZXJyLm1lc3NhZ2UpXG4gICAgICAgIC8vICAgfSlcbiAgICAgICAgfVxuICAgICAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJCh3aW5kb3cpLnNjcm9sbFRvcCgpID4gMCAmJiAkKHdpbmRvdykud2lkdGgoKSA+IDU1MCA/ICQoXCJoZWFkZXJcIikuYWRkQ2xhc3MoXCJyZXNpemVcIikgOiAkKFwiaGVhZGVyXCIpLnJlbW92ZUNsYXNzKFwicmVzaXplXCIpXG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgICAgICAkKFwiaGVhZGVyIG5hdiBhXCIpLmhvdmVyKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJChcImhlYWRlciBuYXZzbGlkZXJcIikuY3NzKHtcbiAgICAgICAgICAgICAgICBsZWZ0OiAkKHRoaXMpLnBvc2l0aW9uKCkubGVmdCArIHBhcnNlSW50KCQodGhpcykuY3NzKFwibWFyZ2luTGVmdFwiKSkgKyBcInB4XCIsXG4gICAgICAgICAgICAgICAgd2lkdGg6ICQodGhpcykud2lkdGgoKSArIFwicHhcIixcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiBcIi45OTlcIlxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKFwiaGVhZGVyIG5hdnNsaWRlclwiKS5jc3MoXCJvcGFjaXR5XCIsIFwiMFwiKVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmVuZGVyICgpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgICAgICAgPGxvZ28+PHRleHQ+QVZOIFNZU1RFTVM8L3RleHQ+PC9sb2dvPlxuICAgICAgICAgICAgICAgIDxuYXY+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nIGFzPXsgcHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyBgL2B9PjxhPkhvbWU8L2E+PC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvYWJvdXQnIGFzPXsgcHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyBgL2Fib3V0YH0+PGE+QWJvdXQ8L2E+PC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvdHZtYXplJyBhcz17IHByb2Nlc3MuZW52LkJBQ0tFTkRfVVJMICsgYC90dm1hemVgfT48YT5UViBNYXplPC9hPjwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nLzQwNCcgYXM9eyBwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArIGAvNDA0YH0+PGE+NDA0PC9hPjwvTGluaz5cbiAgICAgICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICAgICAgICA8bmF2dG9nZ2xlPjxiYXI+PC9iYXI+PGJhcj48L2Jhcj48YmFyPjwvYmFyPjwvbmF2dG9nZ2xlPlxuICAgICAgICAgICAgICAgIDxuYXZzbGlkZXI+PC9uYXZzbGlkZXI+XG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgICAgICBoZWFkZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwMDAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA5MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyIGxvZ28ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTZweCAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTcwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiA5MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTH0vc3RhdGljL2ltYWdlcy9pY29uLnBuZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBncmF5O1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAxNTBtcyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDE1MG1zIGVhc2UtaW4tb3V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgLW1zLXRyYW5zaXRpb246IGFsbCAxNTBtcyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC1vLXRyYW5zaXRpb246IGFsbCAxNTBtcyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAxNTBtcyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBoZWFkZXIgbG9nbzpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWZpbHRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC1tb3otZmlsdGVyOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgLW8tZmlsdGVyOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBub25lO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlciBsb2dvIHRleHQge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1pbmxpbmUtYm94O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMTEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzVmNWY1ZjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDYwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyIG5hdiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBoZWFkZXIgbmF2IGEge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMjVweCAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNkOWQ5ZDk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyIG5hdiBhOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjODUwMEZGO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlciBuYXZ0b2dnbGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQ1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlciBuYXZ0b2dnbGUgYmFyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjYWFhO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDdweCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBoZWFkZXIgbmF2dG9nZ2xlOmhvdmVyIGJhciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2JjNzNmZjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBoZWFkZXIgbmF2c2xpZGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjODUwMEZGO1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAyNTBtcyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDI1MG1zIGVhc2UtaW4tb3V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgLW1zLXRyYW5zaXRpb246IGFsbCAyNTBtcyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC1vLXRyYW5zaXRpb246IGFsbCAyNTBtcyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAyNTBtcyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYyNXB4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNThweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlciBsb2dvIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBjYWxjKDUwJSAtIDg1cHgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtZmlsdGVyOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC1tb3otZmlsdGVyOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC1vLWZpbHRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAxcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXIgbmF2IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyIG5hdnRvZ2dsZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZvb3RlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuICAgICAgICBcbiAgICB9XG4gICAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8Zm9vdGVyPlxuICAgICAgICAgICAgPGxpZ2h0LXJpZ2h0PjwvbGlnaHQtcmlnaHQ+XG4gICAgICAgICAgICA8dmVyc2lvbiBjbGFzc05hbWU9XCJmdGxcIj52ZXJzaW9uOiA8aXRlbT4yLjEuMDE8L2l0ZW0+PC92ZXJzaW9uPlxuICAgICAgICAgICAgPGluZm9zIGNsYXNzTmFtZT1cImZ0bFwiPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2FkbWluLmF2bi5zeXN0ZW1zL3YxL1wiIHRhcmdldD1cIl9ibGFua1wiPjxsb2dpbj7wn5SQIENMSUVOVCBMT0dJTjwvbG9naW4+PC9hPiB8IDxjbGlja2l0ZW0+PGl0ZW0+TE9DQUw6PC9pdGVtPiBXT1JMRFdJREU8L2NsaWNraXRlbT4gfCA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2F2bnN5c3RlbXNcIiB0YXJnZXQ9XCJfYmxhbmtcIj48aXRlbT5HSVRIVUIvPC9pdGVtPkFWTlNZU1RFTVM8L2E+IHwgPGEgaHJlZj1cIm1haWx0bzpteWFwcEBhdm4uc3lzdGVtc1wiPjxpdGVtPkUtTUFJTDo8L2l0ZW0+IENPTlRBQ1RAQVZOLlNZU1RFTVM8L2E+XG4gICAgICAgICAgICA8L2luZm9zPlxuICAgICAgICAgICAgPGxhbmd1YWdlIGNsYXNzTmFtZT1cImZ0clwiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZsYWctaWNvbiBmbGFnLWljb24tdXMgc2VsZWN0ZWQgZnRyXCI+PC9pPlxuICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxhPkVuZ2xpc2g8aSBjbGFzc05hbWU9XCJmbGFnLWljb24gZmxhZy1pY29uLXVzXCI+PC9pPjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZGlzYWJsZVwiPjxhPlNwYW5pc2g8aSBjbGFzc05hbWU9XCJmbGFnLWljb24gZmxhZy1pY29uLWVzXCI+PC9pPjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZGlzYWJsZVwiPjxhPkZyZW5jaDxpIGNsYXNzTmFtZT1cImZsYWctaWNvbiBmbGFnLWljb24tZnJcIj48L2k+PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkaXNhYmxlXCI+PGE+UG9ydHVndWVzZTxpIGNsYXNzTmFtZT1cImZsYWctaWNvbiBmbGFnLWljb24tYnJcIj48L2k+PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvbGFuZ3VhZ2U+XG4gICAgICAgICAgICA8Y29weXJpZ2h0IGNsYXNzTmFtZT1cImZ0clwiPkNvcHlyaWdodCA8aXRlbT4yMDE3PC9pdGVtPjwvY29weXJpZ2h0PlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIGZvb3RlciB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgke3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMfS9zdGF0aWMvaW1hZ2VzL2Zvb3Rlci5qcGcpO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwMDAwO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM3cHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICAgICAgICAgIHdlYmtpdC1ib3gtc2hhZG93OiAwIC0xcHggMTBweCAwIHJnYigwLCAwLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgLW1vei1ib3gtc2hhZG93OiAwIC0xcHggMTBweCAwIHJnYigwLCAwLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAtMXB4IDEwcHggMCByZ2IoMCwgMCwgMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvb3RlciBjb3B5cmlnaHQsIGZvb3RlciB2ZXJzaW9uIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTJweCAxNXB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNiYzc0ZmY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvb3RlciBjb3B5cmlnaHQgPiBpdGVtLCBmb290ZXIgdmVyc2lvbiA+IGl0ZW0sIGZvb3RlciBpbmZvcyBpdGVtIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNBQkE0OUE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvb3RlciBpbmZvcyB7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IGNhbGMoNTAlIC0gMjIxcHgpO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM3NzZFNjM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZm9vdGVyIGluZm9zIGEge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM3NzZFNjM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZm9vdGVyIGluZm9zID4gYSA+IGxvZ2luIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZGM5ZDAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZvb3RlciBpbmZvcyBhOmhvdmVyLCBmb290ZXIgaW5mb3MgYTpob3ZlciBsb2dpbiwgZm9vdGVyIGluZm9zIGNsaWNraXRlbTpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2JjNzRmZjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvb3RlciBsYW5ndWFnZSBpLmZsYWctaWNvbiB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogN3B4IDE1cHggMHB4IDBweDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvb3RlciBsYW5ndWFnZSBpLmZsYWctaWNvbi11cyB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMfS9zdGF0aWMvaW1hZ2VzL2ZsYWdzL3VzYS5wbmcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb290ZXIgbGFuZ3VhZ2UgaS5mbGFnLWljb24tZXMge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTH0vc3RhdGljL2ltYWdlcy9mbGFncy9zcGFpbi5wbmcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb290ZXIgbGFuZ3VhZ2UgaS5mbGFnLWljb24tZnIge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTH0vc3RhdGljL2ltYWdlcy9mbGFncy9mcmFuY2UucG5nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9vdGVyIGxhbmd1YWdlIGkuZmxhZy1pY29uLWJyIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7cHJvY2Vzcy5lbnYuQkFDS0VORF9VUkx9L3N0YXRpYy9pbWFnZXMvZmxhZ3MvYnJhemlsLnBuZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvb3RlciBsYW5ndWFnZTpob3ZlciB1bCB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICBib3R0b206IDE1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvb3RlciBsYW5ndWFnZSB1bCB7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzAzMWM0NTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICMwMzFjNDU7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxNXB4IDVweCAwO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjkyODI2O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9vdGVyIGxhbmd1YWdlIHVsIGxpIHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb290ZXIgbGFuZ3VhZ2UgdWwgbGkuZGlzYWJsZSBhIHtcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjODI4MDdlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb290ZXIgbGFuZ3VhZ2UgdWwgbGkuZGlzYWJsZSBhID4gaS5mbGFnLWljb24ge1xuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWZpbHRlcjogZ3JheXNjYWxlKDEwMCUpO1xuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9vdGVyIGxhbmd1YWdlIHVsIGxpIGEge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMTBweCAwIDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2JjNzRmZjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9vdGVyIGxhbmd1YWdlIHVsIGxpIGE6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9vdGVyIGxhbmd1YWdlIHVsIGxpIGEgPiBpLmZsYWctaWNvbiB7XG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogOTQwcHgpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9vdGVyIGluZm9zIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYyNXB4KSB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2Zvb3Rlcj5cbiAgICApfVxufVxuXG5leHBvcnQgY2xhc3MgTGVmdE1lbnUgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbXBvbmVudERpZE1vdW50ICgpIHtcbiAgICAgICAgJChcImxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuLnN1Ym1lbnUtaGFzLW51bWJlcnNcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBpZiAoJChlLnRhcmdldCkuaGFzQ2xhc3MoJ2Rpc2FibGUnKSkge1xuICAgICAgICAgICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoJChlLnRhcmdldCkuYXR0cignaHJlZicpKSB7XG4gICAgICAgICAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdsZWZ0LW1lbnUnKTtcbiAgICAgICAgICAgICAgICAvL3JldHVybiAkLmZuLm5hdmlnYXRlKGUudGFyZ2V0LCBlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5maW5kKCdzdWJtZW51JykudG9nZ2xlQ2xhc3MoXCJvcGVuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAkKFwiaGVhZGVyIG5hdnRvZ2dsZSwgbWVudWhpZGVyXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgJCgnYm9keScpLnRvZ2dsZUNsYXNzKCdsZWZ0LW1lbnUnKTtcbiAgICAgICAgfSlcbiAgICB9XG4gICAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8bGVmdG1lbnU+XG4gICAgXHRcdDxzaWRlYmFydXNlcj5cbiAgICBcdCAgICAgICAgPHBob3RvPlxuICAgIFx0ICAgICAgICAgICAgPHRpdGxlPkJvYSBub2l0ZS4g4piFPC90aXRsZT5cbiAgICBcdCAgICAgICAgICAgIDxzdWJ0aXRsZT5FbnRyZSBjb20gc2V1IGxvZ2luIG91IGNhZGFzdHJlLXNlITwvc3VidGl0bGU+XG4gICAgXHQgICAgICAgIDwvcGhvdG8+XG4gICAgXHRcdCAgICA8YmdpbWc+PC9iZ2ltZz5cbiAgICBcdFx0ICAgIDxiZ3NoYWRvdz48L2Jnc2hhZG93PlxuICAgIFx0XHQ8L3NpZGViYXJ1c2VyPlxuICAgIFx0XHQ8bWVudXNjcm9sbD5cbiAgICAgICAgICAgICAgICA8c2lkZWJhcnNlcGFyYXRvcj5BY2Vzc28gUmVzdHJpdG88L3NpZGViYXJzZXBhcmF0b3I+XG4gICAgICAgICAgICAgICAgPG1lbnVpdGVtcz5cbiAgICAgICAgICAgICAgICAgICAgPGJ0biBocmVmPVwiLy9hZG1pbi5hdm4uc3lzdGVtc1wiIHRhcmdldD1cIl9zZWxmXCI+XG4gICAgICAgICAgICAgICAgICAgIFx0PHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0xNDQgMTEydjUxLjZINDhjLTI2LjUgMC00OCAyMS41LTQ4IDQ4djg4LjZjMCAyNi41IDIxLjUgNDggNDggNDhoOTZ2NTEuNmMwIDQyLjYgNTEuNyA2NC4yIDgxLjkgMzMuOWwxNDQtMTQzLjljMTguNy0xOC43IDE4LjctNDkuMSAwLTY3LjlsLTE0NC0xNDRDMTk1LjggNDggMTQ0IDY5LjMgMTQ0IDExMnptMTkyIDE0NEwxOTIgNDAwdi05OS43SDQ4di04OC42aDE0NFYxMTJsMTQ0IDE0NHptODAgMTkyaC04NGMtNi42IDAtMTItNS40LTEyLTEydi0yNGMwLTYuNiA1LjQtMTIgMTItMTJoODRjMjYuNSAwIDQ4LTIxLjUgNDgtNDhWMTYwYzAtMjYuNS0yMS41LTQ4LTQ4LTQ4aC04NGMtNi42IDAtMTItNS40LTEyLTEyVjc2YzAtNi42IDUuNC0xMiAxMi0xMmg4NGM1MyAwIDk2IDQzIDk2IDk2djE5MmMwIDUzLTQzIDk2LTk2IDk2elwiIGNsYXNzTmFtZT1cIlwiPjwvcGF0aD48L3N2Zz5FbnRyYXI8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWNpcmNsZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjU2IDhDMTE5IDggOCAxMTkgOCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzOTMgOCAyNTYgOHpcIj48L3BhdGg+PC9zdmc+PC9idG4+XG4gICAgICAgICAgICAgICAgICAgIDxidG4gaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJkaXNhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgIFx0PHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDU3NiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yODggMjA4Yy00NC4yIDAtODAgMzUuOC04MCA4MHMzNS44IDgwIDgwIDgwIDgwLTM1LjggODAtODAtMzUuOC04MC04MC04MHptMCAxMjhjLTI2LjUgMC00OC0yMS41LTQ4LTQ4czIxLjUtNDggNDgtNDggNDggMjEuNSA0OCA0OC0yMS41IDQ4LTQ4IDQ4ek01MTIgNjRIMzUyVjMyYzAtMTcuNy0xNC4zLTMyLTMyLTMyaC02NGMtMTcuNyAwLTMyIDE0LjMtMzIgMzJ2MzJINjRDMjguNyA2NCAwIDkyLjcgMCAxMjh2MzIwYzAgMzUuMyAyOC43IDY0IDY0IDY0aDQ0OGMzNS4zIDAgNjQtMjguNyA2NC02NFYxMjhjMC0zNS4zLTI4LjctNjQtNjQtNjR6TTI1NiAzMmg2NHY5NmgtNjRWMzJ6bTEyOCA0NDhIMTkydi0yMS45YzAtOSAyLjYtMTcuNiA3LjYtMjUgNy4yLTEwLjcgMjAuMy0xNy4yIDM1LTE3LjIgMTUuOSAwIDIzLjUgOCA1My40IDhzMzcuNi04IDUzLjQtOGMxNC43IDAgMjcuNyA2LjQgMzUgMTcuMiA1IDcuNCA3LjYgMTYgNy42IDI1VjQ4MHptMTYwLTMyYzAgMTcuNi0xNC40IDMyLTMyIDMyaC05NnYtMjEuOWMwLTE1LjktNC44LTMwLjYtMTMtNDIuOC0xMy44LTIwLjUtMzcuMy0zMS4zLTYxLjUtMzEuMy0yMi4yIDAtMjcuOCA4LTUzLjQgOC0yNS42IDAtMzEuMi04LTUzLjQtOC0yNC4yIDAtNDcuNyAxMC44LTYxLjUgMzEuMy04LjIgMTIuMi0xMyAyNy0xMyA0Mi44VjQ4MEg2NGMtMTcuNiAwLTMyLTE0LjQtMzItMzJWMTI4YzAtMTcuNiAxNC40LTMyIDMyLTMyaDE2MHY2NGgxMjhWOTZoMTYwYzE3LjYgMCAzMiAxNC40IDMyIDMydjMyMHpcIiBjbGFzc05hbWU9XCJcIj48L3BhdGg+PC9zdmc+Q2FkYXN0cmFyLXNlPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6XCI+PC9wYXRoPjwvc3ZnPjwvYnRuPlxuICAgICAgICAgICAgICAgIDwvbWVudWl0ZW1zPlxuICAgICAgICAgICAgICAgIDxzaWRlYmFyZGl2aWRlcj48L3NpZGViYXJkaXZpZGVyPlxuICAgIFx0XHRcdDxtZW51c2l0ZW1vYmlsZT5cbiAgICBcdCAgICAgICAgICAgIDxzaWRlYmFyc2VwYXJhdG9yPldlYnNpdGUgTWVudTwvc2lkZWJhcnNlcGFyYXRvcj5cbiAgICBcdCAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudS1pdGVtcyBtZW51LWljb25zXCI+XG4gICAgXHQgICAgICAgICAgICAgICAgXG4gICAgXHQgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBcdDxzaWRlYmFyZGl2aWRlcj48L3NpZGViYXJkaXZpZGVyPlxuICAgICAgICAgICAgICAgIDwvbWVudXNpdGVtb2JpbGU+XG4gICAgICAgICAgICAgICAgPHNpZGViYXJzZXBhcmF0b3I+TVlBUFAgTW9kZWxzPC9zaWRlYmFyc2VwYXJhdG9yPlxuICAgICAgICAgICAgICAgIDxtZW51aXRlbXM+XG4gICAgICAgICAgICAgICAgICAgIDxidG4gaHJlZj1cIi4vXCI+PHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1tb2JpbGUtYWx0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0xOTIgNDE2YzAgMTcuNy0xNC4zIDMyLTMyIDMycy0zMi0xNC4zLTMyLTMyIDE0LjMtMzIgMzItMzIgMzIgMTQuMyAzMiAzMnptNDgtNjBWOTJjMC02LjYtNS40LTEyLTEyLTEySDkyYy02LjYgMC0xMiA1LjQtMTIgMTJ2MjY0YzAgNi42IDUuNCAxMiAxMiAxMmgxMzZjNi42IDAgMTItNS40IDEyLTEyem04MC0zMDh2NDE2YzAgMjYuNS0yMS41IDQ4LTQ4IDQ4SDQ4Yy0yNi41IDAtNDgtMjEuNS00OC00OFY0OEMwIDIxLjUgMjEuNSAwIDQ4IDBoMjI0YzI2LjUgMCA0OCAyMS41IDQ4IDQ4em0tNDggNDEwVjU0YzAtMy4zLTIuNy02LTYtNkg1NGMtMy4zIDAtNiAyLjctNiA2djQwNGMwIDMuMyAyLjcgNiA2IDZoMjEyYzMuMyAwIDYtMi43IDYtNnpcIj48L3BhdGg+PC9zdmc+QWJvdXQgTXkgQXBwPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6XCI+PC9wYXRoPjwvc3ZnPjwvYnRuPlxuICAgICAgICAgICAgICAgICAgICA8YnRuIGNsYXNzTmFtZT1cInN1Ym1lbnUtaGFzLW51bWJlcnNcIj5cbiAgICAgICAgICAgICAgICAgICAgXHQ8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLXR2XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk00MDAgMjQ0di04YzAtNi42IDUuNC0xMiAxMi0xMmg4YzYuNiAwIDEyIDUuNCAxMiAxMnY4YzAgNi42LTUuNCAxMi0xMiAxMmgtOGMtNi42IDAtMTItNS40LTEyLTEyem0xMiA3Nmg4YzYuNiAwIDEyLTUuNCAxMi0xMnYtOGMwLTYuNi01LjQtMTItMTItMTJoLThjLTYuNiAwLTEyIDUuNC0xMiAxMnY4YzAgNi42IDUuNCAxMiAxMiAxMnptLTM2LTEzNi41cy0xLjUtNy41LTE0NC03LjUtMTQ0LjUgNy41LTE0NC41IDcuNVM4MCAxODQgODAgMjg4czcuNSAxMDQuNSA3LjUgMTA0LjVTODggNDAwIDIzMiA0MDBzMTQ0LTcuNSAxNDQtNy41IDcuNS0uNSA3LjUtMTA0LjUtNy41LTEwNC41LTcuNS0xMDQuNXpNNTEyIDE0NHYyODhjMCAyNi41LTIxLjUgNDgtNDggNDhoLTE2djMyaC00OGwtMTAuNy0zMkgxMjIuN0wxMTIgNTEySDY0di0zMkg0OGMtMjYuNSAwLTQ4LTIxLjUtNDgtNDhWMTQ0YzAtMjYuNSAyMS41LTQ4IDQ4LTQ4aDE0MC45bC01NC01NS4yYy05LjMtOS41LTkuMS0yNC43LjMtMzMuOSA5LjUtOS4zIDI0LjctOS4xIDMzLjkuM0wyNTYgOTZsODYuOS04OC44YzkuMy05LjUgMjQuNS05LjYgMzMuOS0uMyA5LjUgOS4zIDkuNiAyNC41LjMgMzMuOWwtNTQgNTUuMkg0NjRjMjYuNSAwIDQ4IDIxLjUgNDggNDh6bS00OCAwSDQ4djI4OGg0MTZWMTQ0elwiPjwvcGF0aD48L3N2Zz5Db21tdW5pY2F0aW9uPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy10ZXJtaW5hbFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMzQuNDk1IDM2LjQ2NWwyMTEuMDUxIDIxMS4wNWM0LjY4NiA0LjY4NiA0LjY4NiAxMi4yODQgMCAxNi45NzFMMzQuNDk1IDQ3NS41MzVjLTQuNjg2IDQuNjg2LTEyLjI4NCA0LjY4Ni0xNi45NyAwbC03LjA3MS03LjA3Yy00LjY4Ni00LjY4Ni00LjY4Ni0xMi4yODQgMC0xNi45NzFMMjA1Ljk0NyAyNTYgMTAuNDU0IDYwLjUwNmMtNC42ODYtNC42ODYtNC42ODYtMTIuMjg0IDAtMTYuOTcxbDcuMDcxLTcuMDdjNC42ODYtNC42ODcgMTIuMjg0LTQuNjg3IDE2Ljk3IDB6TTY0MCA0Njh2LTEwYzAtNi42MjctNS4zNzMtMTItMTItMTJIMzAwYy02LjYyNyAwLTEyIDUuMzczLTEyIDEydjEwYzAgNi42MjcgNS4zNzMgMTIgMTIgMTJoMzI4YzYuNjI3IDAgMTItNS4zNzMgMTItMTJ6XCI+PC9wYXRoPjwvc3ZnPjxjb3VudD40PC9jb3VudD5cbiAgICBcdCAgICAgICAgICAgICAgICA8c3VibWVudT5cbiAgICBcdCAgICAgICAgICAgICAgICAgICAgPGJ0biBjbGFzc05hbWU9XCJkaXNhYmxlXCI+PHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1hbmdsZS1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjI0LjMgMjczbC0xMzYgMTM2Yy05LjQgOS40LTI0LjYgOS40LTMzLjkgMGwtMjIuNi0yMi42Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOWw5Ni40LTk2LjQtOTYuNC05Ni40Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOUw1NC4zIDEwM2M5LjQtOS40IDI0LjYtOS40IDMzLjkgMGwxMzYgMTM2YzkuNSA5LjQgOS41IDI0LjYuMSAzNHpcIj48L3BhdGg+PC9zdmc+QWfDqm5jaWFzIGUgUHJvZHV0b3JhczxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctY2lyY2xlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNTYgOEMxMTkgOCA4IDExOSA4IDI1NnMxMTEgMjQ4IDI0OCAyNDggMjQ4LTExMSAyNDgtMjQ4UzM5MyA4IDI1NiA4elwiPjwvcGF0aD48L3N2Zz48L2J0bj5cbiAgICBcdCAgICAgICAgICAgICAgICAgICAgPGJ0biBocmVmPVwiLi90aGVtZXMvcHJvZHV0b3Jhcy9cIj48c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWFuZ2xlLXJpZ2h0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yMjQuMyAyNzNsLTEzNiAxMzZjLTkuNCA5LjQtMjQuNiA5LjQtMzMuOSAwbC0yMi42LTIyLjZjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45bDk2LjQtOTYuNC05Ni40LTk2LjRjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45TDU0LjMgMTAzYzkuNC05LjQgMjQuNi05LjQgMzMuOSAwbDEzNiAxMzZjOS41IDkuNCA5LjUgMjQuNi4xIDM0elwiPjwvcGF0aD48L3N2Zz5Qcm9tb8Onw6NvIGUgRXZlbnRvczxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctY2lyY2xlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNTYgOEMxMTkgOCA4IDExOSA4IDI1NnMxMTEgMjQ4IDI0OCAyNDggMjQ4LTExMSAyNDgtMjQ4UzM5MyA4IDI1NiA4elwiPjwvcGF0aD48L3N2Zz48L2J0bj5cbiAgICBcdCAgICAgICAgICAgICAgICAgICAgPGJ0biBocmVmPVwiLi90aGVtZXMvc3VwZXJ0di9cIj48c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWFuZ2xlLXJpZ2h0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yMjQuMyAyNzNsLTEzNiAxMzZjLTkuNCA5LjQtMjQuNiA5LjQtMzMuOSAwbC0yMi42LTIyLjZjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45bDk2LjQtOTYuNC05Ni40LTk2LjRjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45TDU0LjMgMTAzYzkuNC05LjQgMjQuNi05LjQgMzMuOSAwbDEzNiAxMzZjOS41IDkuNCA5LjUgMjQuNi4xIDM0elwiPjwvcGF0aD48L3N2Zz5FbWlzc29yYSBUVjxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctY2lyY2xlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNTYgOEMxMTkgOCA4IDExOSA4IDI1NnMxMTEgMjQ4IDI0OCAyNDggMjQ4LTExMSAyNDgtMjQ4UzM5MyA4IDI1NiA4elwiPjwvcGF0aD48L3N2Zz48L2J0bj5cbiAgICBcdCAgICAgICAgICAgICAgICAgICAgPGJ0biBjbGFzc05hbWU9XCJkaXNhYmxlXCI+PHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1hbmdsZS1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjI0LjMgMjczbC0xMzYgMTM2Yy05LjQgOS40LTI0LjYgOS40LTMzLjkgMGwtMjIuNi0yMi42Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOWw5Ni40LTk2LjQtOTYuNC05Ni40Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOUw1NC4zIDEwM2M5LjQtOS40IDI0LjYtOS40IDMzLjkgMGwxMzYgMTM2YzkuNSA5LjQgOS41IDI0LjYuMSAzNHpcIj48L3BhdGg+PC9zdmc+UsOhZGlvczxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctY2lyY2xlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNTYgOEMxMTkgOCA4IDExOSA4IDI1NnMxMTEgMjQ4IDI0OCAyNDggMjQ4LTExMSAyNDgtMjQ4UzM5MyA4IDI1NiA4elwiPjwvcGF0aD48L3N2Zz48L2J0bj5cbiAgICBcdCAgICAgICAgICAgICAgICA8L3N1Ym1lbnU+XG4gICAgXHQgICAgICAgICAgICA8L2J0bj5cbiAgICAgICAgICAgICAgICAgICAgPGJ0biBjbGFzc05hbWU9XCJzdWJtZW51LWhhcy1udW1iZXJzXCI+XG4gICAgICAgICAgICAgICAgICAgIFx0PHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1zdGFyXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yMjQgMjg4Yzc5LjUgMCAxNDQtNjQuNSAxNDQtMTQ0UzMwMy41IDAgMjI0IDAgODAgNjQuNSA4MCAxNDRzNjQuNSAxNDQgMTQ0IDE0NHptMC0yNDBjNTIuOSAwIDk2IDQzLjEgOTYgOTZzLTQzLjEgOTYtOTYgOTYtOTYtNDMuMS05Ni05NiA0My4xLTk2IDk2LTk2em04OS42IDI1NmMtMTEgMC0yMS44IDIuNi0zMi4yIDYuMi0xOCA2LjMtMzcuMyA5LjgtNTcuNCA5LjhzLTM5LjQtMy41LTU3LjQtOS44Yy0xMC40LTMuNi0yMS4yLTYuMi0zMi4yLTYuMkM2MC4yIDMwNCAwIDM2NC4yIDAgNDM4LjRWNDg4YzAgMTMuMyAxMC43IDI0IDI0IDI0czI0LTEwLjcgMjQtMjR2LTQ5LjZjMC00NS41IDM1LjQtODIuNCA4MC04NS44djUwYy0yMy4xIDYuOS00MCAyOC4xLTQwIDUzLjQgMCAzMC45IDI1LjEgNTYgNTYgNTZzNTYtMjUuMSA1Ni01NmMwLTI1LjMtMTYuOS00Ni41LTQwLTUzLjR2LTQ0LjdjMjAuOCA2LjMgNDIuMyAxMC4xIDY0IDEwLjEgMjEuOCAwIDQzLjItMy44IDY0LTEwLjF2MzYuM2MtMjguMiA3LjUtNDggMzQuNS00OCA2NC42VjQ4OGMwIDQuMiAxLjcgOC4zIDQuNyAxMS4zbDEwLjMgMTAuM2MzLjEgMy4xIDguMiAzLjEgMTEuMyAwbDExLjMtMTEuM2MzLjEtMy4xIDMuMS04LjIgMC0xMS4zbC01LjctNS43VjQ1NmMwLTE5LjQgMTcuNC0zNC44IDM3LjQtMzEuNiAxNS43IDIuNiAyNi42IDE3LjQgMjYuNiAzMy4zdjIzLjZsLTUuNyA1LjdjLTMuMSAzLjEtMy4xIDguMiAwIDExLjNsMTEuMyAxMS4zYzMuMSAzLjEgOC4yIDMuMSAxMS4zIDBsMTAuMy0xMC4zYzMtMyA0LjctNy4xIDQuNy0xMS4zdi0zMmMwLTI5LjctMjAuNS01NC41LTQ4LTYxLjZ2LTQxLjdjNDQuNiAzLjMgODAgNDAuMyA4MCA4NS44VjQ4OGMwIDEzLjMgMTAuNyAyNCAyNCAyNHMyNC0xMC43IDI0LTI0di00OS42Yy4yLTc0LjItNjAtMTM0LjQtMTM0LjItMTM0LjR6TTE2OCA0NTZjMCAxMy4zLTEwLjcgMjQtMjQgMjRzLTI0LTEwLjctMjQtMjQgMTAuNy0yNCAyNC0yNCAyNCAxMC43IDI0IDI0elwiPjwvcGF0aD48L3N2Zz5Qcm9maXNzaW9uYWxzPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy10ZXJtaW5hbFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMzQuNDk1IDM2LjQ2NWwyMTEuMDUxIDIxMS4wNWM0LjY4NiA0LjY4NiA0LjY4NiAxMi4yODQgMCAxNi45NzFMMzQuNDk1IDQ3NS41MzVjLTQuNjg2IDQuNjg2LTEyLjI4NCA0LjY4Ni0xNi45NyAwbC03LjA3MS03LjA3Yy00LjY4Ni00LjY4Ni00LjY4Ni0xMi4yODQgMC0xNi45NzFMMjA1Ljk0NyAyNTYgMTAuNDU0IDYwLjUwNmMtNC42ODYtNC42ODYtNC42ODYtMTIuMjg0IDAtMTYuOTcxbDcuMDcxLTcuMDdjNC42ODYtNC42ODcgMTIuMjg0LTQuNjg3IDE2Ljk3IDB6TTY0MCA0Njh2LTEwYzAtNi42MjctNS4zNzMtMTItMTItMTJIMzAwYy02LjYyNyAwLTEyIDUuMzczLTEyIDEydjEwYzAgNi42MjcgNS4zNzMgMTIgMTIgMTJoMzI4YzYuNjI3IDAgMTItNS4zNzMgMTItMTJ6XCI+PC9wYXRoPjwvc3ZnPjxjb3VudD42PC9jb3VudD5cbiAgICBcdCAgICAgICAgICAgICAgICA8c3VibWVudT5cbiAgICBcdCAgICAgICAgICAgICAgICAgICAgPGJ0biBjbGFzc05hbWU9XCJkaXNhYmxlXCI+PHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1hbmdsZS1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjI0LjMgMjczbC0xMzYgMTM2Yy05LjQgOS40LTI0LjYgOS40LTMzLjkgMGwtMjIuNi0yMi42Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOWw5Ni40LTk2LjQtOTYuNC05Ni40Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOUw1NC4zIDEwM2M5LjQtOS40IDI0LjYtOS40IDMzLjkgMGwxMzYgMTM2YzkuNSA5LjQgOS41IDI0LjYuMSAzNHpcIj48L3BhdGg+PC9zdmc+QXRvcmVzPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6XCI+PC9wYXRoPjwvc3ZnPjwvYnRuPlxuICAgIFx0ICAgICAgICAgICAgICAgICAgICA8YnRuIGhyZWY9XCIuL3RoZW1lcy9jYW50b3Jlcy9cIj48c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWFuZ2xlLXJpZ2h0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yMjQuMyAyNzNsLTEzNiAxMzZjLTkuNCA5LjQtMjQuNiA5LjQtMzMuOSAwbC0yMi42LTIyLjZjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45bDk2LjQtOTYuNC05Ni40LTk2LjRjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45TDU0LjMgMTAzYzkuNC05LjQgMjQuNi05LjQgMzMuOSAwbDEzNiAxMzZjOS41IDkuNCA5LjUgMjQuNi4xIDM0elwiPjwvcGF0aD48L3N2Zz5DYW50b3JlczxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctY2lyY2xlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNTYgOEMxMTkgOCA4IDExOSA4IDI1NnMxMTEgMjQ4IDI0OCAyNDggMjQ4LTExMSAyNDgtMjQ4UzM5MyA4IDI1NiA4elwiPjwvcGF0aD48L3N2Zz48L2J0bj5cbiAgICBcdCAgICAgICAgICAgICAgICAgICAgPGJ0biBjbGFzc05hbWU9XCJkaXNhYmxlXCI+PHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1hbmdsZS1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjI0LjMgMjczbC0xMzYgMTM2Yy05LjQgOS40LTI0LjYgOS40LTMzLjkgMGwtMjIuNi0yMi42Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOWw5Ni40LTk2LjQtOTYuNC05Ni40Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOUw1NC4zIDEwM2M5LjQtOS40IDI0LjYtOS40IDMzLjkgMGwxMzYgMTM2YzkuNSA5LjQgOS41IDI0LjYuMSAzNHpcIj48L3BhdGg+PC9zdmc+RGVudGlzdGFzPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6XCI+PC9wYXRoPjwvc3ZnPjwvYnRuPlxuICAgIFx0ICAgICAgICAgICAgICAgICAgICA8YnRuIGNsYXNzTmFtZT1cImRpc2FibGVcIj48c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWFuZ2xlLXJpZ2h0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yMjQuMyAyNzNsLTEzNiAxMzZjLTkuNCA5LjQtMjQuNiA5LjQtMzMuOSAwbC0yMi42LTIyLjZjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45bDk2LjQtOTYuNC05Ni40LTk2LjRjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45TDU0LjMgMTAzYzkuNC05LjQgMjQuNi05LjQgMzMuOSAwbDEzNiAxMzZjOS41IDkuNCA5LjUgMjQuNi4xIDM0elwiPjwvcGF0aD48L3N2Zz5BcnF1aXRldG9zPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6XCI+PC9wYXRoPjwvc3ZnPjwvYnRuPlxuICAgIFx0ICAgICAgICAgICAgICAgICAgICA8YnRuIGNsYXNzTmFtZT1cImRpc2FibGVcIj48c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWFuZ2xlLXJpZ2h0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yMjQuMyAyNzNsLTEzNiAxMzZjLTkuNCA5LjQtMjQuNiA5LjQtMzMuOSAwbC0yMi42LTIyLjZjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45bDk2LjQtOTYuNC05Ni40LTk2LjRjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45TDU0LjMgMTAzYzkuNC05LjQgMjQuNi05LjQgMzMuOSAwbDEzNiAxMzZjOS41IDkuNCA5LjUgMjQuNi4xIDM0elwiPjwvcGF0aD48L3N2Zz5BZHZvZ2Fkb3M8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWNpcmNsZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjU2IDhDMTE5IDggOCAxMTkgOCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzOTMgOCAyNTYgOHpcIj48L3BhdGg+PC9zdmc+PC9idG4+XG4gICAgXHQgICAgICAgICAgICAgICAgICAgIDxidG4gY2xhc3NOYW1lPVwiZGlzYWJsZVwiPjxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctYW5nbGUtcmlnaHRcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIwIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTIyNC4zIDI3M2wtMTM2IDEzNmMtOS40IDkuNC0yNC42IDkuNC0zMy45IDBsLTIyLjYtMjIuNmMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlsOTYuNC05Ni40LTk2LjQtOTYuNGMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlMNTQuMyAxMDNjOS40LTkuNCAyNC42LTkuNCAzMy45IDBsMTM2IDEzNmM5LjUgOS40IDkuNSAyNC42LjEgMzR6XCI+PC9wYXRoPjwvc3ZnPlByb2dyYW1hZG9yZXM8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWNpcmNsZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjU2IDhDMTE5IDggOCAxMTkgOCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzOTMgOCAyNTYgOHpcIj48L3BhdGg+PC9zdmc+PC9idG4+XG4gICAgXHQgICAgICAgICAgICAgICAgPC9zdWJtZW51PlxuICAgIFx0ICAgICAgICAgICAgPC9idG4+XG4gICAgICAgICAgICAgICAgICAgIDxidG4gY2xhc3NOYW1lPVwic3VibWVudS1oYXMtbnVtYmVyc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1zdG9yZXNcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIwIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTYzNS43IDE3Ni4xbC05MS40LTE2MEM1MzguNiA2LjIgNTI4IDAgNTE2LjUgMGgtMzkzQzExMiAwIDEwMS40IDYuMiA5NS43IDE2LjFsLTkxLjQgMTYwQy03LjkgMTk3LjUgNy40IDIyNCAzMiAyMjRoMzJ2MjU0LjVDNjQgNDk3IDc4LjMgNTEyIDk2IDUxMmgyNTZjMTcuNyAwIDMyLTE1IDMyLTMzLjVWMjI0aDE2MHYyODBjMCA0LjQgMy42IDggOCA4aDE2YzQuNCAwIDgtMy42IDgtOFYyMjRoMzJjMjQuNiAwIDM5LjktMjYuNSAyNy43LTQ3Ljl6TTM1MiA0NzguNWMwIC45LS4zIDEuNC0uMiAxLjVsLTI1NS4yLjJzLS42LS41LS42LTEuN1YzNTJoMjU2djEyNi41em0wLTE1OC41SDk2di05NmgyNTZ2OTZ6TTMyLjEgMTkybDkxLjQtMTYwaDM5M0w2MDggMTkySDMyLjF6XCI+PC9wYXRoPjwvc3ZnPlN0b3JlczxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctdGVybWluYWxcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIwIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTM0LjQ5NSAzNi40NjVsMjExLjA1MSAyMTEuMDVjNC42ODYgNC42ODYgNC42ODYgMTIuMjg0IDAgMTYuOTcxTDM0LjQ5NSA0NzUuNTM1Yy00LjY4NiA0LjY4Ni0xMi4yODQgNC42ODYtMTYuOTcgMGwtNy4wNzEtNy4wN2MtNC42ODYtNC42ODYtNC42ODYtMTIuMjg0IDAtMTYuOTcxTDIwNS45NDcgMjU2IDEwLjQ1NCA2MC41MDZjLTQuNjg2LTQuNjg2LTQuNjg2LTEyLjI4NCAwLTE2Ljk3MWw3LjA3MS03LjA3YzQuNjg2LTQuNjg3IDEyLjI4NC00LjY4NyAxNi45NyAwek02NDAgNDY4di0xMGMwLTYuNjI3LTUuMzczLTEyLTEyLTEySDMwMGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnYxMGMwIDYuNjI3IDUuMzczIDEyIDEyIDEyaDMyOGM2LjYyNyAwIDEyLTUuMzczIDEyLTEyelwiPjwvcGF0aD48L3N2Zz48Y291bnQ+NzwvY291bnQ+XG4gICAgXHQgICAgICAgICAgICAgICAgPHN1Ym1lbnU+XG4gICAgXHQgICAgICAgICAgICAgICAgICAgIDxidG4gaHJlZj1cIi4vdGhlbWVzL21lcmNhZG9saXZyZS9cIj48c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWFuZ2xlLXJpZ2h0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yMjQuMyAyNzNsLTEzNiAxMzZjLTkuNCA5LjQtMjQuNiA5LjQtMzMuOSAwbC0yMi42LTIyLjZjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45bDk2LjQtOTYuNC05Ni40LTk2LjRjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45TDU0LjMgMTAzYzkuNC05LjQgMjQuNi05LjQgMzMuOSAwbDEzNiAxMzZjOS41IDkuNCA5LjUgMjQuNi4xIDM0elwiPjwvcGF0aD48L3N2Zz5NZXJjYWRvIExpdnJlPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6XCI+PC9wYXRoPjwvc3ZnPjwvYnRuPlxuICAgIFx0ICAgICAgICAgICAgICAgICAgICA8YnRuIGNsYXNzTmFtZT1cImRpc2FibGVcIj48c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWFuZ2xlLXJpZ2h0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yMjQuMyAyNzNsLTEzNiAxMzZjLTkuNCA5LjQtMjQuNiA5LjQtMzMuOSAwbC0yMi42LTIyLjZjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45bDk2LjQtOTYuNC05Ni40LTk2LjRjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45TDU0LjMgMTAzYzkuNC05LjQgMjQuNi05LjQgMzMuOSAwbDEzNiAxMzZjOS41IDkuNCA5LjUgMjQuNi4xIDM0elwiPjwvcGF0aD48L3N2Zz5JbmZvcm3DoXRpY2E8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWNpcmNsZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjU2IDhDMTE5IDggOCAxMTkgOCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzOTMgOCAyNTYgOHpcIj48L3BhdGg+PC9zdmc+PC9idG4+XG4gICAgXHQgICAgICAgICAgICAgICAgICAgIDxidG4gY2xhc3NOYW1lPVwiZGlzYWJsZVwiPjxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctYW5nbGUtcmlnaHRcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIwIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTIyNC4zIDI3M2wtMTM2IDEzNmMtOS40IDkuNC0yNC42IDkuNC0zMy45IDBsLTIyLjYtMjIuNmMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlsOTYuNC05Ni40LTk2LjQtOTYuNGMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlMNTQuMyAxMDNjOS40LTkuNCAyNC42LTkuNCAzMy45IDBsMTM2IDEzNmM5LjUgOS40IDkuNSAyNC42LjEgMzR6XCI+PC9wYXRoPjwvc3ZnPkNvbnN0cnXDp8OjbzxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctY2lyY2xlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNTYgOEMxMTkgOCA4IDExOSA4IDI1NnMxMTEgMjQ4IDI0OCAyNDggMjQ4LTExMSAyNDgtMjQ4UzM5MyA4IDI1NiA4elwiPjwvcGF0aD48L3N2Zz48L2J0bj5cbiAgICBcdCAgICAgICAgICAgICAgICAgICAgPGJ0biBjbGFzc05hbWU9XCJkaXNhYmxlXCI+PHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1hbmdsZS1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjI0LjMgMjczbC0xMzYgMTM2Yy05LjQgOS40LTI0LjYgOS40LTMzLjkgMGwtMjIuNi0yMi42Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOWw5Ni40LTk2LjQtOTYuNC05Ni40Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOUw1NC4zIDEwM2M5LjQtOS40IDI0LjYtOS40IDMzLjkgMGwxMzYgMTM2YzkuNSA5LjQgOS41IDI0LjYuMSAzNHpcIj48L3BhdGg+PC9zdmc+Q2Fsw6dhZG9zPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6XCI+PC9wYXRoPjwvc3ZnPjwvYnRuPlxuICAgIFx0ICAgICAgICAgICAgICAgICAgICA8YnRuIGhyZWY9XCIuL3RoZW1lcy9jZWxtYXIvXCI+PHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1hbmdsZS1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjI0LjMgMjczbC0xMzYgMTM2Yy05LjQgOS40LTI0LjYgOS40LTMzLjkgMGwtMjIuNi0yMi42Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOWw5Ni40LTk2LjQtOTYuNC05Ni40Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOUw1NC4zIDEwM2M5LjQtOS40IDI0LjYtOS40IDMzLjkgMGwxMzYgMTM2YzkuNSA5LjQgOS41IDI0LjYuMSAzNHpcIj48L3BhdGg+PC9zdmc+UGxhbmVqYWRvczxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctY2lyY2xlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNTYgOEMxMTkgOCA4IDExOSA4IDI1NnMxMTEgMjQ4IDI0OCAyNDggMjQ4LTExMSAyNDgtMjQ4UzM5MyA4IDI1NiA4elwiPjwvcGF0aD48L3N2Zz48L2J0bj5cbiAgICBcdCAgICAgICAgICAgICAgICAgICAgPGJ0biBjbGFzc05hbWU9XCJkaXNhYmxlXCI+PHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1hbmdsZS1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjI0LjMgMjczbC0xMzYgMTM2Yy05LjQgOS40LTI0LjYgOS40LTMzLjkgMGwtMjIuNi0yMi42Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOWw5Ni40LTk2LjQtOTYuNC05Ni40Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOUw1NC4zIDEwM2M5LjQtOS40IDI0LjYtOS40IDMzLjkgMGwxMzYgMTM2YzkuNSA5LjQgOS41IDI0LjYuMSAzNHpcIj48L3BhdGg+PC9zdmc+Um91cGFzPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6XCI+PC9wYXRoPjwvc3ZnPjwvYnRuPlxuICAgIFx0ICAgICAgICAgICAgICAgIDwvc3VibWVudT5cbiAgICBcdCAgICAgICAgICAgIDwvYnRuPlxuICAgICAgICAgICAgICAgICAgICA8YnRuIGNsYXNzTmFtZT1cInN1Ym1lbnUtaGFzLW51bWJlcnNcIj5cbiAgICAgICAgICAgICAgICAgICAgXHQ8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLXJlc3RhdXJhbnRlc1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMzQ0LjEgNDcwLjNsMTQuMi0xNjQuOGMtNDIuMS0zMy4xLTcwLjQtNzctNzAuNC0xMjkuNUMyODggODEuNyAzNzYuMSAwIDQ0MCAwYzIyLjEgMCA0MCAxNy4zIDQwIDM4LjV2NDM1YzAgMjEuMi0xNy45IDM4LjUtNDAgMzguNWgtNTZjLTIyLjggMC00MS44LTE4LjctMzkuOS00MS43ek0zMjAgMTc2YzAgNTEgMzIuMiA4NS41IDcxLjggMTE0LjVMMzc2IDQ3My4xYy0uMyAzLjcgMy40IDYuOSA4IDYuOWg1NmM0LjMgMCA4LTMgOC02LjV2LTQzNWMwLTMuNS0zLjctNi41LTgtNi41LTQ0LjYgMC0xMjAgNjUuOC0xMjAgMTQ0ek0yNDAuNyAzMy44QzIzNy40IDE0LjMgMjE5LjUgMCAxOTQuNiAwYy0xMS45IDAtMjQuMSAzLjQtMzMuMyAxMS4yQzE1Mi45IDQuMSAxNDEuMyAwIDEyOCAwcy0yNC45IDQuMS0zMy4zIDExLjJDODUuNSAzLjQgNzMuMyAwIDYxLjQgMCAzNi4yIDAgMTguNiAxNC41IDE1LjMgMzMuOCAxMy41IDQzLjIgMCAxMTguNCAwIDE0OS45YzAgNTAuOSAyNi43IDkxLjYgNzEgMTEwLjdMNTkuNiA0NzEuNEM1OC40IDQ5My40IDc1LjkgNTEyIDk4IDUxMmg2MGMyMiAwIDM5LjYtMTguNSAzOC40LTQwLjZMMTg1IDI2MC42YzQ0LjItMTkuMSA3MS01OS44IDcxLTExMC43IDAtMzEuNS0xMy41LTEwNi43LTE1LjMtMTE2LjF6TTE1Mi4zIDI0MGwxMi4yIDIzMy4xYy4yIDMuNy0yLjcgNi45LTYuNSA2LjlIOThjLTMuNyAwLTYuNy0zLjEtNi41LTYuOUwxMDMuNyAyNDBDNjEuMyAyMzEuMiAzMiAxOTcgMzIgMTQ5LjljMC0yOS43IDE0LjgtMTEwLjYgMTQuOC0xMTAuNiAxLjYtOS45IDI4LjMtOS43IDI5LjUuMlYxNjJjLjkgMTEuNSAyOC4yIDExLjcgMjkuNS4ybDcuNC0xMjIuOWMxLjYtOS43IDI3LjktOS43IDI5LjUgMGw3LjQgMTIyLjljMS4zIDExLjQgMjguNiAxMS4yIDI5LjUtLjJWMzkuNmMxLjItOS45IDI3LjktMTAuMSAyOS41LS4yIDAgMCAxNC44IDgwLjkgMTQuOCAxMTAuNi4xIDQ2LjgtMjkgODEuMi03MS42IDkwelwiPjwvcGF0aD48L3N2Zz5BbGltZW50YcOnw6NvPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy10ZXJtaW5hbFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMzQuNDk1IDM2LjQ2NWwyMTEuMDUxIDIxMS4wNWM0LjY4NiA0LjY4NiA0LjY4NiAxMi4yODQgMCAxNi45NzFMMzQuNDk1IDQ3NS41MzVjLTQuNjg2IDQuNjg2LTEyLjI4NCA0LjY4Ni0xNi45NyAwbC03LjA3MS03LjA3Yy00LjY4Ni00LjY4Ni00LjY4Ni0xMi4yODQgMC0xNi45NzFMMjA1Ljk0NyAyNTYgMTAuNDU0IDYwLjUwNmMtNC42ODYtNC42ODYtNC42ODYtMTIuMjg0IDAtMTYuOTcxbDcuMDcxLTcuMDdjNC42ODYtNC42ODcgMTIuMjg0LTQuNjg3IDE2Ljk3IDB6TTY0MCA0Njh2LTEwYzAtNi42MjctNS4zNzMtMTItMTItMTJIMzAwYy02LjYyNyAwLTEyIDUuMzczLTEyIDEydjEwYzAgNi42MjcgNS4zNzMgMTIgMTIgMTJoMzI4YzYuNjI3IDAgMTItNS4zNzMgMTItMTJ6XCI+PC9wYXRoPjwvc3ZnPjxjb3VudD41PC9jb3VudD5cbiAgICBcdCAgICAgICAgICAgICAgICA8c3VibWVudT5cbiAgICBcdCAgICAgICAgICAgICAgICAgICAgPGJ0biBjbGFzc05hbWU9XCJkaXNhYmxlXCI+PHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1hbmdsZS1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjI0LjMgMjczbC0xMzYgMTM2Yy05LjQgOS40LTI0LjYgOS40LTMzLjkgMGwtMjIuNi0yMi42Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOWw5Ni40LTk2LjQtOTYuNC05Ni40Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOUw1NC4zIDEwM2M5LjQtOS40IDI0LjYtOS40IDMzLjkgMGwxMzYgMTM2YzkuNSA5LjQgOS41IDI0LjYuMSAzNHpcIj48L3BhdGg+PC9zdmc+UmVzdGF1cmFudGVzPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6XCI+PC9wYXRoPjwvc3ZnPjwvYnRuPlxuICAgIFx0ICAgICAgICAgICAgICAgICAgICA8YnRuIGNsYXNzTmFtZT1cImRpc2FibGVcIj48c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWFuZ2xlLXJpZ2h0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yMjQuMyAyNzNsLTEzNiAxMzZjLTkuNCA5LjQtMjQuNiA5LjQtMzMuOSAwbC0yMi42LTIyLjZjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45bDk2LjQtOTYuNC05Ni40LTk2LjRjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45TDU0LjMgMTAzYzkuNC05LjQgMjQuNi05LjQgMzMuOSAwbDEzNiAxMzZjOS41IDkuNCA5LjUgMjQuNi4xIDM0elwiPjwvcGF0aD48L3N2Zz5DYWZldGVyaWFzPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6XCI+PC9wYXRoPjwvc3ZnPjwvYnRuPlxuICAgIFx0ICAgICAgICAgICAgICAgICAgICA8YnRuIGhyZWY9XCIuL3RoZW1lcy9jZXJ2ZWphcmlhcy9cIj48c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWFuZ2xlLXJpZ2h0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yMjQuMyAyNzNsLTEzNiAxMzZjLTkuNCA5LjQtMjQuNiA5LjQtMzMuOSAwbC0yMi42LTIyLjZjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45bDk2LjQtOTYuNC05Ni40LTk2LjRjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45TDU0LjMgMTAzYzkuNC05LjQgMjQuNi05LjQgMzMuOSAwbDEzNiAxMzZjOS41IDkuNCA5LjUgMjQuNi4xIDM0elwiPjwvcGF0aD48L3N2Zz5DZXJ2ZWphcmlhczxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctY2lyY2xlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNTYgOEMxMTkgOCA4IDExOSA4IDI1NnMxMTEgMjQ4IDI0OCAyNDggMjQ4LTExMSAyNDgtMjQ4UzM5MyA4IDI1NiA4elwiPjwvcGF0aD48L3N2Zz48L2J0bj5cbiAgICBcdCAgICAgICAgICAgICAgICAgICAgPGJ0biBjbGFzc05hbWU9XCJkaXNhYmxlXCI+PHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1hbmdsZS1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjI0LjMgMjczbC0xMzYgMTM2Yy05LjQgOS40LTI0LjYgOS40LTMzLjkgMGwtMjIuNi0yMi42Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOWw5Ni40LTk2LjQtOTYuNC05Ni40Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOUw1NC4zIDEwM2M5LjQtOS40IDI0LjYtOS40IDMzLjkgMGwxMzYgMTM2YzkuNSA5LjQgOS41IDI0LjYuMSAzNHpcIj48L3BhdGg+PC9zdmc+UGl6emFyaWFzPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6XCI+PC9wYXRoPjwvc3ZnPjwvYnRuPlxuICAgIFx0ICAgICAgICAgICAgICAgICAgICA8YnRuIGNsYXNzTmFtZT1cImRpc2FibGVcIj48c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWFuZ2xlLXJpZ2h0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yMjQuMyAyNzNsLTEzNiAxMzZjLTkuNCA5LjQtMjQuNiA5LjQtMzMuOSAwbC0yMi42LTIyLjZjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45bDk2LjQtOTYuNC05Ni40LTk2LjRjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45TDU0LjMgMTAzYzkuNC05LjQgMjQuNi05LjQgMzMuOSAwbDEzNiAxMzZjOS41IDkuNCA5LjUgMjQuNi4xIDM0elwiPjwvcGF0aD48L3N2Zz5Tb3J2ZXRlcmlhczxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctY2lyY2xlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNTYgOEMxMTkgOCA4IDExOSA4IDI1NnMxMTEgMjQ4IDI0OCAyNDggMjQ4LTExMSAyNDgtMjQ4UzM5MyA4IDI1NiA4elwiPjwvcGF0aD48L3N2Zz48L2J0bj5cbiAgICBcdCAgICAgICAgICAgICAgICA8L3N1Ym1lbnU+XG4gICAgXHQgICAgICAgICAgICA8L2J0bj5cbiAgICAgICAgICAgICAgICAgICAgPGJ0biBjbGFzc05hbWU9XCJzdWJtZW51LWhhcy1udW1iZXJzXCI+XG4gICAgICAgICAgICAgICAgICAgIFx0PHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1zdG9yZXNcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIwIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTYzNS43IDE3Ni4xbC05MS40LTE2MEM1MzguNiA2LjIgNTI4IDAgNTE2LjUgMGgtMzkzQzExMiAwIDEwMS40IDYuMiA5NS43IDE2LjFsLTkxLjQgMTYwQy03LjkgMTk3LjUgNy40IDIyNCAzMiAyMjRoMzJ2MjU0LjVDNjQgNDk3IDc4LjMgNTEyIDk2IDUxMmgyNTZjMTcuNyAwIDMyLTE1IDMyLTMzLjVWMjI0aDE2MHYyODBjMCA0LjQgMy42IDggOCA4aDE2YzQuNCAwIDgtMy42IDgtOFYyMjRoMzJjMjQuNiAwIDM5LjktMjYuNSAyNy43LTQ3Ljl6TTM1MiA0NzguNWMwIC45LS4zIDEuNC0uMiAxLjVsLTI1NS4yLjJzLS42LS41LS42LTEuN1YzNTJoMjU2djEyNi41em0wLTE1OC41SDk2di05NmgyNTZ2OTZ6TTMyLjEgMTkybDkxLjQtMTYwaDM5M0w2MDggMTkySDMyLjF6XCI+PC9wYXRoPjwvc3ZnPkJlbGV6YTxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctdGVybWluYWxcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIwIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTM0LjQ5NSAzNi40NjVsMjExLjA1MSAyMTEuMDVjNC42ODYgNC42ODYgNC42ODYgMTIuMjg0IDAgMTYuOTcxTDM0LjQ5NSA0NzUuNTM1Yy00LjY4NiA0LjY4Ni0xMi4yODQgNC42ODYtMTYuOTcgMGwtNy4wNzEtNy4wN2MtNC42ODYtNC42ODYtNC42ODYtMTIuMjg0IDAtMTYuOTcxTDIwNS45NDcgMjU2IDEwLjQ1NCA2MC41MDZjLTQuNjg2LTQuNjg2LTQuNjg2LTEyLjI4NCAwLTE2Ljk3MWw3LjA3MS03LjA3YzQuNjg2LTQuNjg3IDEyLjI4NC00LjY4NyAxNi45NyAwek02NDAgNDY4di0xMGMwLTYuNjI3LTUuMzczLTEyLTEyLTEySDMwMGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnYxMGMwIDYuNjI3IDUuMzczIDEyIDEyIDEyaDMyOGM2LjYyNyAwIDEyLTUuMzczIDEyLTEyelwiPjwvcGF0aD48L3N2Zz48Y291bnQ+MjwvY291bnQ+XG4gICAgXHQgICAgICAgICAgICAgICAgPHN1Ym1lbnU+XG4gICAgXHQgICAgICAgICAgICAgICAgICAgIDxidG4gY2xhc3NOYW1lPVwiZGlzYWJsZVwiPjxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctYW5nbGUtcmlnaHRcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIwIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTIyNC4zIDI3M2wtMTM2IDEzNmMtOS40IDkuNC0yNC42IDkuNC0zMy45IDBsLTIyLjYtMjIuNmMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlsOTYuNC05Ni40LTk2LjQtOTYuNGMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlMNTQuMyAxMDNjOS40LTkuNCAyNC42LTkuNCAzMy45IDBsMTM2IDEzNmM5LjUgOS40IDkuNSAyNC42LjEgMzR6XCI+PC9wYXRoPjwvc3ZnPlNhbMOjbyBkZSBDYWJlbGVyZWlybzxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctY2lyY2xlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNTYgOEMxMTkgOCA4IDExOSA4IDI1NnMxMTEgMjQ4IDI0OCAyNDggMjQ4LTExMSAyNDgtMjQ4UzM5MyA4IDI1NiA4elwiPjwvcGF0aD48L3N2Zz48L2J0bj5cbiAgICBcdCAgICAgICAgICAgICAgICAgICAgPGJ0biBjbGFzc05hbWU9XCJkaXNhYmxlXCI+PHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1hbmdsZS1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjI0LjMgMjczbC0xMzYgMTM2Yy05LjQgOS40LTI0LjYgOS40LTMzLjkgMGwtMjIuNi0yMi42Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOWw5Ni40LTk2LjQtOTYuNC05Ni40Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOUw1NC4zIDEwM2M5LjQtOS40IDI0LjYtOS40IDMzLjkgMGwxMzYgMTM2YzkuNSA5LjQgOS41IDI0LjYuMSAzNHpcIj48L3BhdGg+PC9zdmc+QWx1Z3VlbCBkZSBSb3VwYXM8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWNpcmNsZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjU2IDhDMTE5IDggOCAxMTkgOCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzOTMgOCAyNTYgOHpcIj48L3BhdGg+PC9zdmc+PC9idG4+XG4gICAgXHQgICAgICAgICAgICAgICAgICAgIDxidG4gY2xhc3NOYW1lPVwiZGlzYWJsZVwiPjxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctYW5nbGUtcmlnaHRcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIwIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTIyNC4zIDI3M2wtMTM2IDEzNmMtOS40IDkuNC0yNC42IDkuNC0zMy45IDBsLTIyLjYtMjIuNmMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlsOTYuNC05Ni40LTk2LjQtOTYuNGMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlMNTQuMyAxMDNjOS40LTkuNCAyNC42LTkuNCAzMy45IDBsMTM2IDEzNmM5LjUgOS40IDkuNSAyNC42LjEgMzR6XCI+PC9wYXRoPjwvc3ZnPkNvc23DqXRpY29zPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6XCI+PC9wYXRoPjwvc3ZnPjwvYnRuPlxuICAgIFx0ICAgICAgICAgICAgICAgIDwvc3VibWVudT5cbiAgICBcdCAgICAgICAgICAgIDwvYnRuPlxuICAgICAgICAgICAgICAgIDwvbWVudWl0ZW1zPlxuICAgICAgICAgICAgICAgIDxzaWRlYmFyZGl2aWRlcj48L3NpZGViYXJkaXZpZGVyPlxuICAgICAgICAgICAgICAgIDxzaWRlYmFyc2VwYXJhdG9yPkZBTEUgQ09OT1NDTzwvc2lkZWJhcnNlcGFyYXRvcj5cbiAgICAgICAgICAgICAgICA8bWVudWNvbnRhY3Q+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJ0ZWw6MTEgOTMwMTggODM2M1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1waG9uZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNNDg3LjggMjQuMUwzODcgLjhjLTE0LjctMy40LTI5LjggNC4yLTM1LjggMTguMWwtNDYuNSAxMDguNWMtNS41IDEyLjctMS44IDI3LjcgOC45IDM2LjVsNTMuOSA0NC4xYy0zNCA2OS4yLTkwLjMgMTI1LjYtMTU5LjYgMTU5LjZsLTQ0LjEtNTMuOWMtOC44LTEwLjctMjMuOC0xNC40LTM2LjUtOC45TDE4LjkgMzUxLjNDNSAzNTcuMy0yLjYgMzcyLjMuOCAzODdMMjQgNDg3LjdDMjcuMyA1MDIgMzkuOSA1MTIgNTQuNSA1MTIgMzA2LjcgNTEyIDUxMiAzMDcuOCA1MTIgNTQuNWMwLTE0LjYtMTAtMjcuMi0yNC4yLTMwLjR6TTU1LjEgNDgwbC0yMy05OS42IDEwNy40LTQ2IDU5LjUgNzIuOGMxMDMuNi00OC42IDE1OS43LTEwNC45IDIwOC4xLTIwOC4xbC03Mi44LTU5LjUgNDYtMTA3LjQgOTkuNiAyM0M0NzkuNyAyODkuNyAyODkuNiA0NzkuNyA1NS4xIDQ4MHpcIj48L3BhdGg+PC9zdmc+TGlnYcOnw6NvPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6XCI+PC9wYXRoPjwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2FwaS53aGF0c2FwcC5jb20vc2VuZD9waG9uZT01NTExOTMwMTg4MzYzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLXdoYXRzYXBwXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0zODAuOSA5Ny4xQzMzOSA1NS4xIDI4My4yIDMyIDIyMy45IDMyYy0xMjIuNCAwLTIyMiA5OS42LTIyMiAyMjIgMCAzOS4xIDEwLjIgNzcuMyAyOS42IDExMUwwIDQ4MGwxMTcuNy0zMC45YzMyLjQgMTcuNyA2OC45IDI3IDEwNi4xIDI3aC4xYzEyMi4zIDAgMjI0LjEtOTkuNiAyMjQuMS0yMjIgMC01OS4zLTI1LjItMTE1LTY3LjEtMTU3em0tMTU3IDM0MS42Yy0zMy4yIDAtNjUuNy04LjktOTQtMjUuN2wtNi43LTQtNjkuOCAxOC4zTDcyIDM1OS4ybC00LjQtN2MtMTguNS0yOS40LTI4LjItNjMuMy0yOC4yLTk4LjIgMC0xMDEuNyA4Mi44LTE4NC41IDE4NC42LTE4NC41IDQ5LjMgMCA5NS42IDE5LjIgMTMwLjQgNTQuMSAzNC44IDM0LjkgNTYuMiA4MS4yIDU2LjEgMTMwLjUgMCAxMDEuOC04NC45IDE4NC42LTE4Ni42IDE4NC42em0xMDEuMi0xMzguMmMtNS41LTIuOC0zMi44LTE2LjItMzcuOS0xOC01LjEtMS45LTguOC0yLjgtMTIuNSAyLjgtMy43IDUuNi0xNC4zIDE4LTE3LjYgMjEuOC0zLjIgMy43LTYuNSA0LjItMTIgMS40LTMyLjYtMTYuMy01NC0yOS4xLTc1LjUtNjYtNS43LTkuOCA1LjctOS4xIDE2LjMtMzAuMyAxLjgtMy43LjktNi45LS41LTkuNy0xLjQtMi44LTEyLjUtMzAuMS0xNy4xLTQxLjItNC41LTEwLjgtOS4xLTkuMy0xMi41LTkuNS0zLjItLjItNi45LS4yLTEwLjYtLjItMy43IDAtOS43IDEuNC0xNC44IDYuOS01LjEgNS42LTE5LjQgMTktMTkuNCA0Ni4zIDAgMjcuMyAxOS45IDUzLjcgMjIuNiA1Ny40IDIuOCAzLjcgMzkuMSA1OS43IDk0LjggODMuOCAzNS4yIDE1LjIgNDkgMTYuNSA2Ni42IDEzLjkgMTAuNy0xLjYgMzIuOC0xMy40IDM3LjQtMjYuNCA0LjYtMTMgNC42LTI0LjEgMy4yLTI2LjQtMS4zLTIuNS01LTMuOS0xMC41LTYuNnpcIj48L3BhdGg+PC9zdmc+V2hhdHNhcHA8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWNpcmNsZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjU2IDhDMTE5IDggOCAxMTkgOCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzOTMgOCAyNTYgOHpcIj48L3BhdGg+PC9zdmc+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIm1haWx0bzpjb250YWN0QGF2bi5zeXN0ZW1zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLW1haWxcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIwIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOC45NDEgOCA4IDExOC45MTkgOCAyNTZjMCAxMzcuMDU4IDExMC45MTkgMjQ4IDI0OCAyNDggNTIuOTI1IDAgMTA0LjY4LTE3LjA3OCAxNDcuMDkyLTQ4LjMxOSA1LjUwMS00LjA1MiA2LjQyMy0xMS45MjQgMi4wOTUtMTcuMjExbC01LjA3NC02LjE5OGMtNC4wMTgtNC45MDktMTEuMTkzLTUuODgzLTE2LjMwNy0yLjEyOUMzNDYuOTMgNDU3LjIwOCAzMDEuOTc0IDQ3MiAyNTYgNDcyYy0xMTkuMzczIDAtMjE2LTk2LjYwNy0yMTYtMjE2IDAtMTE5LjM3NSA5Ni42MDctMjE2IDIxNi0yMTYgMTE4LjQ0NSAwIDIxNiA4MC4wMjQgMjE2IDIwMCAwIDcyLjg3My01Mi44MTkgMTA4LjI0MS0xMTYuMDY1IDEwOC4yNDEtMTkuNzM0IDAtMjMuNjk1LTEwLjgxNi0xOS41MDMtMzMuODY4bDMyLjA3LTE2NC4wNzFjMS40NDktNy40MTEtNC4yMjYtMTQuMzAyLTExLjc3Ny0xNC4zMDJoLTEyLjQyMWExMiAxMiAwIDAgMC0xMS43ODEgOS43MThjLTIuMjk0IDExLjg0Ni0yLjg2IDEzLjQ2NC0zLjg2MSAyNS42NDctMTEuNzI5LTI3LjA3OC0zOC42MzktNDMuMDIzLTczLjM3NS00My4wMjMtNjguMDQ0IDAtMTMzLjE3NiA2Mi45NS0xMzMuMTc2IDE1Ny4wMjcgMCA2MS41ODcgMzMuOTE1IDk4LjM1NCA5MC43MjMgOTguMzU0IDM5LjcyOSAwIDcwLjYwMS0yNC4yNzggODYuNjMzLTQ2Ljk4Mi0xLjIxMSAyNy43ODYgMTcuNDU1IDQyLjIxMyA0NS45NzUgNDIuMjEzQzQ1My4wODkgMzc4Ljk1NCA1MDQgMzIxLjcyOSA1MDQgMjQwIDUwNCAxMDMuODE0IDM5My44NjMgOCAyNTYgOHptLTM3LjkyIDM0Mi42MjdjLTM2LjY4MSAwLTU4LjU4LTI1LjEwOC01OC41OC02Ny4xNjYgMC03NC42OSA1MC43NjUtMTIxLjU0NSA5Ny4yMTctMTIxLjU0NSAzOC44NTcgMCA1OC4xMDIgMjcuNzkgNTguMTAyIDY1LjczNSAwIDU4LjEzMy0zOC4zNjkgMTIyLjk3Ni05Ni43MzkgMTIyLjk3NnpcIj48L3BhdGg+PC9zdmc+RS1tYWlsPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6XCI+PC9wYXRoPjwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJzbXM6MTEgOTMwMTggODM2M1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1tYWlsXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk00MDAgMzJINDhDMjEuNDkgMzIgMCA1My40OSAwIDgwdjM1MmMwIDI2LjUxIDIxLjQ5IDQ4IDQ4IDQ4aDM1MmMyNi41MSAwIDQ4LTIxLjQ5IDQ4LTQ4VjgwYzAtMjYuNTEtMjEuNDktNDgtNDgtNDh6bTE2IDQwMGMwIDguODIyLTcuMTc4IDE2LTE2IDE2SDQ4Yy04LjgyMiAwLTE2LTcuMTc4LTE2LTE2VjgwYzAtOC44MjIgNy4xNzgtMTYgMTYtMTZoMzUyYzguODIyIDAgMTYgNy4xNzggMTYgMTZ2MzUyem0tNjQtMzA0SDk2Yy0xNy42NzMgMC0zMiAxNC4zMjctMzIgMzJ2MTkyYzAgMTcuNjczIDE0LjMyNyAzMiAzMiAzMmgyNTZjMTcuNjczIDAgMzItMTQuMzI3IDMyLTMyVjE2MGMwLTE3LjY3My0xNC4zMjctMzItMzItMzJ6bTAgMzJ2MzMuODU1Yy0xNC4xMzYgMTEuNjI4LTM2LjU2NiAyOS42NjQtODIuMTE3IDY1LjgyMUMyNTkuNDI2IDI2OC4wMTUgMjM4Ljc0OCAyODggMjI0LjI1NiAyODhsLS4yNTYtLjAwMi0uMjU2LjAwMmMtMTQuNDkyIDAtMzUuMTctMTkuOTg0LTQ1LjYyOC0yOC4zMjQtNDUuNTQ0LTM2LjE1Mi02Ny45NzgtNTQuMTkyLTgyLjExNy02NS44MjJWMTYwSDM1MnpNOTYgMzUyVjIzNS4wOTJjMTQuMTA5IDExLjM2NyAzMy42MjQgMjYuOTQ4IDYyLjIyMSA0OS42NDggMTMuNzc3IDExLjAxIDM3LjkwMiAzNS4yNiA2NS41MjMgMzUuMjZsLjI1My0uMDAxLjI1OC4wMDFjMjcuNTI5IDAgNTEuMzkyLTIzLjk3NSA2NS41NDEtMzUuMjc0IDI4LjU4My0yMi42ODkgNDguMDk5LTM4LjI3IDYyLjIwMy00OS42MzRWMzUySDk2elwiPjwvcGF0aD48L3N2Zz5TTVM8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWNpcmNsZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjU2IDhDMTE5IDggOCAxMTkgOCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzOTMgOCAyNTYgOHpcIj48L3BhdGg+PC9zdmc+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L21lbnVjb250YWN0PlxuICAgICAgICAgICAgPC9tZW51c2Nyb2xsPlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIGxlZnRtZW51IHtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogLTM0MHB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTAwMDA7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAzMzBweDtcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDhweCAjMDAwO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWMyMjJlO1xuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGxlZnQgMzUwbXMgZWFzZSAwcztcbiAgICAgICAgICAgICAgICAgICAgLW1vei10cmFuc2l0aW9uOiBsZWZ0IDM1MG1zIGVhc2UgMHM7XG4gICAgICAgICAgICAgICAgICAgIC1tcy10cmFuc2l0aW9uOiBsZWZ0IDM1MG1zIGVhc2UgMHM7XG4gICAgICAgICAgICAgICAgICAgIC1vLXRyYW5zaXRpb246IGxlZnQgMzUwbXMgZWFzZSAwcztcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogbGVmdCAzNTBtcyBlYXNlIDBzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBzaWRlYmFydXNlciB7XG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCA2cHggNHB4IHJnYmEoMCwwLDAsLjMpO1xuICAgICAgICAgICAgICAgICAgICB0b3VjaC1hY3Rpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE4NXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBzaWRlYmFydXNlciBwaG90byB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMfS9zdGF0aWMvaW1hZ2VzL2ljb25zL2ljb24tMTkyeDE5Mi5wbmcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBzaWRlYmFydXNlciBwaG90byB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjMDBmOWE2O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgdG9wO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCA1cHggIzAwMDAwMDtcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggIzAwMDAwMDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxNXB4IDBweCAwcHggMTVweDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogOTBweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDkwcHg7XG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBzaWRlYmFydXNlciBwaG90byB0aXRsZSB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAyODVweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogMTA1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IHNpZGViYXJ1c2VyIHBob3RvIHN1YnRpdGxlIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjkwcHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjY2NjO1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDEwMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBzaWRlYmFydXNlciBiZ2ltZyB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMfS9zdGF0aWMvaW1hZ2VzL2hvbWVwYWdlL2JhY2tncm91bmQtYXZuLTEuanBnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgc2lkZWJhcnVzZXIgYmdpbWcge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IGhhcmQtbGlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2E3ZjdmZjtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE4NXB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgc2lkZWJhcnVzZXIgYmdzaGFkb3cge1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiA5O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE4NXB4O1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20scmdiYSgwLDAsMCwwKSAwLHJnYmEoMCwwLDAsMCkgMjAlLHJnYmEoMCwwLDAsLjEpIDQwJSxyZ2JhKDAsMCwwLC43KSA3MCUscmdiYSgwLDAsMCwxKSAxMDAlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDIzNXB4KTtcbiAgICAgICAgICAgICAgICAgICAgdG91Y2gtYWN0aW9uOiBwYW4teTtcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzMwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgc2lkZWJhcnNlcGFyYXRvcjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgc2lkZWJhcnNlcGFyYXRvciB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNjY2M7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnQtZW51IG1lbnVzY3JvbGwgc2lkZWJhcmRpdmlkZXIge1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wOiBzb2xpZCAxcHggcmdiYSgwLDAsMCwuMik7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCByZ2JhKDI1NSwyNTUsMjU1LC4wMyk7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0bixcbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVjb250YWN0ID4gYSB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xuICAgICAgICAgICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDU1cHg7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNjY2M7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuLmRpc2FibGUsXG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51Y29udGFjdCA+IGEuZGlzYWJsZSB7XG4gICAgICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAuNTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51aXRlbXMgPiBidG4gLnN2Zy1pbmxpbmUsXG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51Y29udGFjdCA+IGEgLnN2Zy1pbmxpbmUge1xuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogLS4xMjVlbTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMjVweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNiNTAwZmY7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjJweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgIHRvcDogM3B4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0biAuc3ZnLWlubGluZS5zdmctY2lyY2xlLFxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWNvbnRhY3QgPiBhIC5zdmctaW5saW5lLnN2Zy1jaXJjbGUge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzQzNDc1MjtcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAyNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0biAuc3ZnLWlubGluZS5zdmctdGVybWluYWwge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzQzNDc1MjtcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtNXB4O1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDE4cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuIC5zdmctaW5saW5lLnN2Zy10diB7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IC00cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuIC5zdmctaW5saW5lLnN2Zy1zdG9yZXMge1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtNXB4O1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDJweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51aXRlbXMgPiBidG4gLnN2Zy1pbmxpbmUuc3ZnLXJlc3RhdXJhbnRlcyxcbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0biAuc3ZnLWlubGluZS5zdmctd2hhdHNhcHAsXG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51aXRlbXMgPiBidG4gLnN2Zy1pbmxpbmUuc3ZnLXBob25lLFxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuIC5zdmctaW5saW5lLnN2Zy1tYWlsLFxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuIC5zdmctaW5saW5lLnN2Zy1zdGFyIHtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogLTJweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51aXRlbXMgPiBidG46aG92ZXIsXG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51Y29udGFjdCA+IGE6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjMyYjNhO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuOmhvdmVyIC5zdmctaW5saW5lLnN2Zy10ZXJtaW5hbCxcbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0bjpob3ZlciAuc3ZnLWlubGluZS5zdmctY2lyY2xlLFxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWNvbnRhY3QgPiBhOmhvdmVyIC5zdmctaW5saW5lLnN2Zy1jaXJjbGUge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuID4gY291bnQge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjYzk0N2ZmO1xuICAgICAgICAgICAgICAgICAgICByaWdodDogLTI1cHg7XG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAtMnB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0biBzdWJtZW51IHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSArIDI1cHgpO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IC0yNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0biBzdWJtZW51IGJ0bi5kaXNhYmxlIHtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogLjU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuIHN1Ym1lbnUgYnRuIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAzNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0biBzdWJtZW51Lm9wZW4ge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0bjpob3ZlciBzdWJtZW51IGJ0biAuc3ZnLWlubGluZS5zdmctY2lyY2xlIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM0MzQ3NTI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuOmhvdmVyIHN1Ym1lbnUgYnRuOm5vdCguZGlzYWJsZSk6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmYzYTRlO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuOmhvdmVyIHN1Ym1lbnUgYnRuOm5vdCguZGlzYWJsZSk6aG92ZXIgLnN2Zy1pbmxpbmUuc3ZnLWNpcmNsZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk0MHB4KSB7XG4gICAgICAgICAgICAgICAgICAgIGZvb3RlciBpbmZvcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA2MjVweCkge1xuICAgICAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2l0ZW1vYmlsZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgIFx0PC9sZWZ0bWVudT5cbiAgICApfVxufSJdfQ== */\n/*@ sourceURL=/home/ubuntu/workspace/estudo/next/components/interface.js */"),
        __self: this
      }));
    }
  }]);

  return LeftMenu;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/***/ })

})
//# sourceMappingURL=_error.js.4910b9d75739056d5f03.hot-update.js.map