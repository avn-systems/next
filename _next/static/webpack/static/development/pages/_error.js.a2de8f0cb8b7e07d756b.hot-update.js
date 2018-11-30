webpackHotUpdate("static/development/pages/_error.js",{

/***/ "./components/interface.js":
/*!*********************************!*\
  !*** ./components/interface.js ***!
  \*********************************/
/*! exports provided: default, Header, Footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return Footer; });
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
    className: "jsx-977778180",
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
    className: "jsx-977778180",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    charSet: "utf-8",
    className: "jsx-977778180",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    className: "jsx-977778180",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "author",
    content: "Allan Avelar - https://allanavelar.com/",
    className: "jsx-977778180",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    property: "og:site_name",
    content: ogSiteName,
    className: "jsx-977778180",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    property: "og:title",
    content: ogTitle,
    className: "jsx-977778180",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    property: "og:url",
    content: ogUrl,
    className: "jsx-977778180",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    property: "og:type",
    content: ogType,
    className: "jsx-977778180",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    property: "og:description",
    content: ogDescription,
    className: "jsx-977778180",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    property: "og:image",
    content: "" + ogImage,
    className: "jsx-977778180",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "twitter:card",
    content: "summary_large_image",
    className: "jsx-977778180",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "twitter:site",
    content: twitterSite,
    className: "jsx-977778180",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "twitter:creator",
    content: twitterCreator,
    className: "jsx-977778180",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "canonical",
    href: canonical,
    className: "jsx-977778180",
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
    className: "jsx-977778180",
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
    className: "jsx-977778180",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "apple-touch-icon",
    sizes: "114x114",
    href: "/static/images/icon.png",
    className: "jsx-977778180",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "apple-touch-icon",
    sizes: "120x120",
    href: "/static/images/icon.png",
    className: "jsx-977778180",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "apple-touch-icon",
    sizes: "144x144",
    href: "/static/images/icon.png",
    className: "jsx-977778180",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "apple-touch-icon",
    sizes: "152x152",
    href: "/static/images/icon.png",
    className: "jsx-977778180",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/static/images/icon.png",
    className: "jsx-977778180",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "icon",
    type: "image/png",
    href: "/static/images/icon.png",
    className: "jsx-977778180",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "shortcut icon",
    href: "/static/images/favicon.ico",
    className: "jsx-977778180",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "mask-icon",
    href: "/assets/safari-pinned-tab.svg",
    color: "#5bbad5",
    className: "jsx-977778180",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "manifest",
    href: "/static/manifest.json",
    className: "jsx-977778180",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "msapplication-TileColor",
    content: "#5700AE",
    className: "jsx-977778180",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "msapplication-TileImage",
    content: "/static/images/avn.systems.og-image.jpg",
    className: "jsx-977778180",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "msapplication-config",
    content: "/static/browserconfig.xml",
    className: "jsx-977778180",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "theme-color",
    content: "#5700AE",
    className: "jsx-977778180",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/css/bootstrap.min.css",
    integrity: "sha384-Zug+QiDoJOrZ5t4lssLdxGhVrurbmBWopoEl+M6BdEfwnCJZtKxi1KgxUyJq13dy",
    crossOrigin: "anonymous",
    className: "jsx-977778180",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "/static/css/nprogress.css",
    className: "jsx-977778180",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("script", {
    src: "https://code.jquery.com/jquery-3.3.1.min.js",
    className: "jsx-977778180",
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
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("page", {
    className: "jsx-977778180",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, children), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "977778180",
    css: "body{min-width:320px;background:url(/static/images/body-bg.jpg) #F5F7F6;}page{padding:185px 20px;display:block;}page,pre{color:white;}.ftl{float:left;}.ftr{float:right;}@media (max-width:625px){}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VidW50dS93b3Jrc3BhY2UvZXN0dWRvL25leHQvY29tcG9uZW50cy9pbnRlcmZhY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkV1QixBQUc2QixBQUlHLEFBSVAsQUFHRCxBQUdDLFdBRmhCLENBSEEsQUFNQSxJQWR1RCxHQUlyQyxjQUNsQixrQ0FKQSIsImZpbGUiOiIvaG9tZS91YnVudHUvd29ya3NwYWNlL2VzdHVkby9uZXh0L2NvbXBvbmVudHMvaW50ZXJmYWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypnbG9iYWwgJCBuYXZpZ2F0b3IqL1xuXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcblxuaW1wb3J0IE5Qcm9ncmVzcyBmcm9tICducHJvZ3Jlc3MnXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuXG5Sb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZVN0YXJ0JywgKHVybCkgPT4ge1xuICBjb25zb2xlLmxvZyhgTG9hZGluZzogJHt1cmx9YClcbiAgTlByb2dyZXNzLnN0YXJ0KClcbn0pXG5Sb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgKCkgPT4gTlByb2dyZXNzLmRvbmUoKSlcblJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlRXJyb3InLCAoKSA9PiBOUHJvZ3Jlc3MuZG9uZSgpKVxuXG5leHBvcnQgZGVmYXVsdCAoeyBjaGlsZHJlbixcbiAgICB0aXRsZSA9ICdUaGlzIGlzIHRoZSBkZWZhdWx0IHRpdGxlJyxcbiAgICBcbiAgICBvZ1NpdGVOYW1lID0gXCJhdm4uc3lzdGVtc1wiLCBvZ1RpdGxlID0gXCJXZWJzaXRlIHwgYXZuLnN5c3RlbXNcIixcbiAgICBvZ1VybCA9IFwiaHR0cHM6Ly9hdm4uc3lzdGVtc1wiLCBvZ1R5cGUgPSBcImFydGljbGVcIixcbiAgICBvZ0Rlc2NyaXB0aW9uID0gXCJXZWJzaXRlIGNyZWF0ZWQgd2l0aCBuZXh0LmpzIG9wdG1pemVkIGFzIGEgUFdBXCIsXG4gICAgb2dJbWFnZSA9ICcvc3RhdGljL2ltYWdlcy9hdm4uc3lzdGVtcy5vZy1pbWFnZS5qcGcnLFxuICAgIFxuICAgIHR3aXR0ZXJTaXRlID0gXCJAYXZuLnN5c3RlbXNcIixcbiAgICB0d2l0dGVyQ3JlYXRvciA9IFwiQGF2bi5zeXN0ZW1zXCIsXG4gICAgXG4gICAgY2Fub25pY2FsID0gXCJodHRwczovL2F2bi5zeXN0ZW1zXCIsXG4gICAgZmVlZFhtbCA9IFwiaHR0cHM6Ly9hdm4uc3lzdGVtcy9mZWVkLnhtbFwiLFxuICAgIGZlZWRKc29uID0gXCJodHRwczovL2F2bi5zeXN0ZW1zbS9mZWVkLmpzb25cIlxuICB9KSA9PiAoXG4gIDxpbnRlcmZhY2U+XG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+eyB0aXRsZSB9PC90aXRsZT5cbiAgICAgIDxtZXRhIGNoYXJTZXQ9J3V0Zi04JyAvPlxuICAgICAgPG1ldGEgbmFtZT0ndmlld3BvcnQnIGNvbnRlbnQ9J2luaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGgnIC8+XG4gICAgICA8bWV0YSBuYW1lPVwiYXV0aG9yXCIgY29udGVudD1cIkFsbGFuIEF2ZWxhciAtIGh0dHBzOi8vYWxsYW5hdmVsYXIuY29tL1wiIC8+XG4gICAgICBcbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6c2l0ZV9uYW1lXCIgY29udGVudD17IG9nU2l0ZU5hbWUgfSAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9eyBvZ1RpdGxlIH0gLz5cbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dXJsXCIgY29udGVudD17IG9nVXJsIH0gLz5cbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dHlwZVwiIGNvbnRlbnQ9eyBvZ1R5cGUgfSAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9eyBvZ0Rlc2NyaXB0aW9uIH0gLz5cbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PXsgcHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyBvZ0ltYWdlIH0gLz5cbiAgICBcbiAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmNhcmRcIiBjb250ZW50PVwic3VtbWFyeV9sYXJnZV9pbWFnZVwiIC8+XG4gICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpzaXRlXCIgY29udGVudD17IHR3aXR0ZXJTaXRlIH0gLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmNyZWF0b3JcIiBjb250ZW50PXsgdHdpdHRlckNyZWF0b3IgfSAvPlxuICAgIFxuICAgICAgPGxpbmsgcmVsPVwiY2Fub25pY2FsXCIgaHJlZj17IGNhbm9uaWNhbCB9IC8+XG4gICAgICA8bGluayByZWw9XCJhbHRlcm5hdGVcIiB0eXBlPVwiYXBwbGljYXRpb24vcnNzK3htbFwiIHRpdGxlPXsgb2dUaXRsZSB9IGhyZWY9eyBmZWVkWG1sIH0gLz5cbiAgICAgIDxsaW5rIHJlbD1cImFsdGVybmF0ZVwiIHR5cGU9XCJhcHBsaWNhdGlvbi9qc29uXCIgdGl0bGU9eyBvZ1RpdGxlIH0gaHJlZj17IGZlZWRKc29uIH0gLz5cblxuICAgICAgPGxpbmsgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIHNpemVzPVwiMTE0eDExNFwiIGhyZWY9eyBwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArICcvc3RhdGljL2ltYWdlcy9pY29uLnBuZyd9IC8+XG4gICAgICA8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCIxMjB4MTIwXCIgaHJlZj17IHByb2Nlc3MuZW52LkJBQ0tFTkRfVVJMICsgJy9zdGF0aWMvaW1hZ2VzL2ljb24ucG5nJ30gLz5cbiAgICAgIDxsaW5rIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBzaXplcz1cIjE0NHgxNDRcIiBocmVmPXsgcHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyAnL3N0YXRpYy9pbWFnZXMvaWNvbi5wbmcnfSAvPlxuICAgICAgPGxpbmsgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIHNpemVzPVwiMTUyeDE1MlwiIGhyZWY9eyBwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArICcvc3RhdGljL2ltYWdlcy9pY29uLnBuZyd9IC8+XG4gICAgICA8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCIxODB4MTgwXCIgaHJlZj17IHByb2Nlc3MuZW52LkJBQ0tFTkRfVVJMICsgJy9zdGF0aWMvaW1hZ2VzL2ljb24ucG5nJ30gLz5cbiAgICAgIDxsaW5rIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UvcG5nXCIgaHJlZj17IHByb2Nlc3MuZW52LkJBQ0tFTkRfVVJMICsgJy9zdGF0aWMvaW1hZ2VzL2ljb24ucG5nJ30gLz5cbiAgICAgIDxsaW5rIHJlbD1cInNob3J0Y3V0IGljb25cIiBocmVmPXsgcHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyAnL3N0YXRpYy9pbWFnZXMvZmF2aWNvbi5pY28nfSAvPlxuICAgICAgXG4gICAgICA8bGluayByZWw9XCJtYXNrLWljb25cIiBocmVmPVwiL2Fzc2V0cy9zYWZhcmktcGlubmVkLXRhYi5zdmdcIiBjb2xvcj1cIiM1YmJhZDVcIiAvPlxuICAgICAgPGxpbmsgcmVsPVwibWFuaWZlc3RcIiBocmVmPXsgcHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyAnL3N0YXRpYy9tYW5pZmVzdC5qc29uJ30gLz5cbiAgICAgIFxuICAgICAgPG1ldGEgbmFtZT1cIm1zYXBwbGljYXRpb24tVGlsZUNvbG9yXCIgY29udGVudD1cIiM1NzAwQUVcIiAvPlxuICAgICAgPG1ldGEgbmFtZT1cIm1zYXBwbGljYXRpb24tVGlsZUltYWdlXCIgY29udGVudD17IHByb2Nlc3MuZW52LkJBQ0tFTkRfVVJMICsgJy9zdGF0aWMvaW1hZ2VzL2F2bi5zeXN0ZW1zLm9nLWltYWdlLmpwZyd9IC8+XG4gICAgICA8bWV0YSBuYW1lPVwibXNhcHBsaWNhdGlvbi1jb25maWdcIiBjb250ZW50PXsgcHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyAnL3N0YXRpYy9icm93c2VyY29uZmlnLnhtbCd9IC8+XG4gICAgICA8bWV0YSBuYW1lPVwidGhlbWUtY29sb3JcIiBjb250ZW50PVwiIzU3MDBBRVwiIC8+XG4gICAgICBcbiAgICAgIDxsaW5rIHJlbD0nc3R5bGVzaGVldCcgaHJlZj0naHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC4wLjAtYmV0YS4zL2Nzcy9ib290c3RyYXAubWluLmNzcycgaW50ZWdyaXR5PSdzaGEzODQtWnVnK1FpRG9KT3JaNXQ0bHNzTGR4R2hWcnVyYm1CV29wb0VsK002QmRFZnduQ0padEt4aTFLZ3hVeUpxMTNkeScgY3Jvc3NPcmlnaW49J2Fub255bW91cycgLz5cbiAgICAgIDxsaW5rIHJlbD0nc3R5bGVzaGVldCcgdHlwZT0ndGV4dC9jc3MnIGhyZWY9eyBwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArICcvc3RhdGljL2Nzcy9ucHJvZ3Jlc3MuY3NzJ30gLz5cbiAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9jb2RlLmpxdWVyeS5jb20vanF1ZXJ5LTMuMy4xLm1pbi5qc1wiPjwvc2NyaXB0PlxuICAgIDwvSGVhZD5cbiAgICA8SGVhZGVyIC8+XG4gICAgPHBhZ2U+XG4gICAgICAgIHsgY2hpbGRyZW4gfVxuICAgIDwvcGFnZT5cbiAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIG1pbi13aWR0aDogMzIwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoL3N0YXRpYy9pbWFnZXMvYm9keS1iZy5qcGcpICNGNUY3RjY7XG4gICAgICAgIH1cbiAgICAgICAgcGFnZSB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxODVweCAyMHB4O1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cbiAgICAgICAgcGFnZSwgcHJlIHtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgICAgICAuZnRsIHtcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICB9XG4gICAgICAgIC5mdHIge1xuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjI1cHgpIHtcbiAgICAgICAgfVxuICAgIGB9PC9zdHlsZT5cblxuICAgIDxGb290ZXIgLz5cbiAgPC9pbnRlcmZhY2U+XG4pXG5cbmV4cG9ydCBjbGFzcyBIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbXBvbmVudERpZE1vdW50ICgpIHtcbiAgICAgICAgaWYgKCdzZXJ2aWNlV29ya2VyJyBpbiBuYXZpZ2F0b3IpIHtcbiAgICAgICAgLy8gbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXJcbiAgICAgICAgLy8gICAucmVnaXN0ZXIocHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKycvc2VydmljZS13b3JrZXIuanMnKVxuICAgICAgICAvLyAgIC50aGVuKHJlZ2lzdHJhdGlvbiA9PiB7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZygnc2VydmljZSB3b3JrZXIgcmVnaXN0cmF0aW9uIHN1Y2Nlc3NmdWwnKVxuICAgICAgICAvLyAgIH0pXG4gICAgICAgIC8vICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIC8vICAgICBjb25zb2xlLndhcm4oJ3NlcnZpY2Ugd29ya2VyIHJlZ2lzdHJhdGlvbiBmYWlsZWQnLCBlcnIubWVzc2FnZSlcbiAgICAgICAgLy8gICB9KVxuICAgICAgICB9XG4gICAgICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKHdpbmRvdykuc2Nyb2xsVG9wKCkgPiAwICYmICQod2luZG93KS53aWR0aCgpID4gNTUwID8gJChcImhlYWRlclwiKS5hZGRDbGFzcyhcInJlc2l6ZVwiKSA6ICQoXCJoZWFkZXJcIikucmVtb3ZlQ2xhc3MoXCJyZXNpemVcIilcbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgICAgICQoXCJoZWFkZXIgbmF2IGFcIikuaG92ZXIoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKFwiaGVhZGVyIG5hdnNsaWRlclwiKS5jc3Moe1xuICAgICAgICAgICAgICAgIGxlZnQ6ICQodGhpcykucG9zaXRpb24oKS5sZWZ0ICsgcGFyc2VJbnQoJCh0aGlzKS5jc3MoXCJtYXJnaW5MZWZ0XCIpKSArIFwicHhcIixcbiAgICAgICAgICAgICAgICB3aWR0aDogJCh0aGlzKS53aWR0aCgpICsgXCJweFwiLFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IFwiLjk5OVwiXG4gICAgICAgICAgICB9KVxuICAgICAgICB9LCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQoXCJoZWFkZXIgbmF2c2xpZGVyXCIpLmNzcyhcIm9wYWNpdHlcIiwgXCIwXCIpXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZW5kZXIgKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgICAgICAgICA8bG9nbz48dGV4dD5BVk4gU1lTVEVNUzwvdGV4dD48L2xvZ28+XG4gICAgICAgICAgICAgICAgPG5hdj5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nLycgYXM9eyBwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArIGAvYH0+PGE+SG9tZTwvYT48L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9hYm91dCcgYXM9eyBwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArIGAvYWJvdXRgfT48YT5BYm91dDwvYT48L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy90dm1hemUnIGFzPXsgcHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyBgL3R2bWF6ZWB9PjxhPlRWIE1hemU8L2E+PC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvNDA0JyBhcz17IHByb2Nlc3MuZW52LkJBQ0tFTkRfVVJMICsgYC80MDRgfT48YT40MDQ8L2E+PC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgICAgICAgIDxuYXZ0b2dnbGU+PGJhcj48L2Jhcj48YmFyPjwvYmFyPjxiYXI+PC9iYXI+PC9uYXZ0b2dnbGU+XG4gICAgICAgICAgICAgICAgPG5hdnNsaWRlcj48L25hdnNsaWRlcj5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTAwMDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDkwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBoZWFkZXIgbG9nbyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNnB4IDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNzBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDkwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL3N0YXRpYy9pbWFnZXMvaWNvbi5wbmcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjogZ3JheTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMTUwbXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAxNTBtcyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMTUwbXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAtby10cmFuc2l0aW9uOiBhbGwgMTUwbXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMTUwbXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyIGxvZ286aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1maWx0ZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAtbW96LWZpbHRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC1vLWZpbHRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBoZWFkZXIgbG9nbyB0ZXh0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtaW5saW5lLWJveDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDExMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM1ZjVmNWY7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiA2MHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlciBuYXYge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyIG5hdiBhIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDI1cHggMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZDlkOWQ5O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlciBuYXYgYTpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzg1MDBGRjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBoZWFkZXIgbmF2dG9nZ2xlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0NXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBoZWFkZXIgbmF2dG9nZ2xlIGJhciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2FhYTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA3cHggMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyIG5hdnRvZ2dsZTpob3ZlciBiYXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNiYzczZmY7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyIG5hdnNsaWRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiA0cHggc29saWQgIzg1MDBGRjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogNTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMjUwbXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAyNTBtcyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMjUwbXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAtby10cmFuc2l0aW9uOiBhbGwgMjUwbXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMjUwbXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MjVweCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDU4cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXIgbG9nbyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogY2FsYyg1MCUgLSA4NXB4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWZpbHRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtbW96LWZpbHRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtby1maWx0ZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyIG5hdiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlciBuYXZ0b2dnbGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGb290ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbXBvbmVudERpZE1vdW50ICgpIHtcbiAgICAgICAgXG4gICAgfVxuICAgIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGZvb3Rlcj5cbiAgICAgICAgICAgIDxsaWdodC1yaWdodD48L2xpZ2h0LXJpZ2h0PlxuICAgICAgICAgICAgPHZlcnNpb24gY2xhc3NOYW1lPVwiZnRsXCI+dmVyc2lvbjogPGl0ZW0+Mi4xLjAxPC9pdGVtPjwvdmVyc2lvbj5cbiAgICAgICAgICAgIDxpbmZvcyBjbGFzc05hbWU9XCJmdGxcIj5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9hZG1pbi5hdm4uc3lzdGVtcy92MS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj48bG9naW4+8J+UkCBDTElFTlQgTE9HSU48L2xvZ2luPjwvYT4gfCA8Y2xpY2tpdGVtPjxpdGVtPkxPQ0FMOjwvaXRlbT4gV09STERXSURFPC9jbGlja2l0ZW0+IHwgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9hdm5zeXN0ZW1zXCIgdGFyZ2V0PVwiX2JsYW5rXCI+PGl0ZW0+R0lUSFVCLzwvaXRlbT5BVk5TWVNURU1TPC9hPiB8IDxhIGhyZWY9XCJtYWlsdG86bXlhcHBAYXZuLnN5c3RlbXNcIj48aXRlbT5FLU1BSUw6PC9pdGVtPiBDT05UQUNUQEFWTi5TWVNURU1TPC9hPlxuICAgICAgICAgICAgPC9pbmZvcz5cbiAgICAgICAgICAgIDxsYW5ndWFnZSBjbGFzc05hbWU9XCJmdHJcIj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmbGFnLWljb24gZmxhZy1pY29uLXVzIHNlbGVjdGVkIGZ0clwiPjwvaT5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48YT5FbmdsaXNoPGkgY2xhc3NOYW1lPVwiZmxhZy1pY29uIGZsYWctaWNvbi11c1wiPjwvaT48L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImRpc2FibGVcIj48YT5TcGFuaXNoPGkgY2xhc3NOYW1lPVwiZmxhZy1pY29uIGZsYWctaWNvbi1lc1wiPjwvaT48L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImRpc2FibGVcIj48YT5GcmVuY2g8aSBjbGFzc05hbWU9XCJmbGFnLWljb24gZmxhZy1pY29uLWZyXCI+PC9pPjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZGlzYWJsZVwiPjxhPlBvcnR1Z3Vlc2U8aSBjbGFzc05hbWU9XCJmbGFnLWljb24gZmxhZy1pY29uLWJyXCI+PC9pPjwvYT48L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2xhbmd1YWdlPlxuICAgICAgICAgICAgPGNvcHlyaWdodCBjbGFzc05hbWU9XCJmdHJcIj5Db3B5cmlnaHQgPGl0ZW0+MjAxNzwvaXRlbT48L2NvcHlyaWdodD5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICBmb290ZXIge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoLi9zdGF0aWMvaW1hZ2VzL2Zvb3Rlci5qcGcpO1xuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJGcmFua2xpblwiLGFyaWFsLHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTAwMDA7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzdweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICAgICAgd2Via2l0LWJveC1zaGFkb3c6IDAgLTFweCAxMHB4IDAgcmdiKDAsIDAsIDApO1xuICAgICAgICAgICAgICAgICAgICAtbW96LWJveC1zaGFkb3c6IDAgLTFweCAxMHB4IDAgcmdiKDAsIDAsIDApO1xuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIC0xcHggMTBweCAwIHJnYigwLCAwLCAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9vdGVyIGNvcHlyaWdodCwgZm9vdGVyIHZlcnNpb24ge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMnB4IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2JjNzRmZjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9vdGVyIGNvcHlyaWdodCA+IGl0ZW0sIGZvb3RlciB2ZXJzaW9uID4gaXRlbSwgZm9vdGVyIGluZm9zIGl0ZW0ge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI0FCQTQ5QTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9vdGVyIGluZm9zIHtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogY2FsYyg1MCUgLSAyMjFweCk7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzc3NkU2MztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmb290ZXIgaW5mb3MgYSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzc3NkU2MztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmb290ZXIgaW5mb3MgPiBhID4gbG9naW4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNkYzlkMDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZm9vdGVyIGluZm9zIGE6aG92ZXIsIGZvb3RlciBpbmZvcyBhOmhvdmVyIGxvZ2luLCBmb290ZXIgaW5mb3MgY2xpY2tpdGVtOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjYmM3NGZmO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9vdGVyIGxhbmd1YWdlIGkuZmxhZy1pY29uIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA3cHggMTVweCAwcHggMHB4O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9vdGVyIGxhbmd1YWdlIGkuZmxhZy1pY29uLXVzIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vc3RhdGljL2ltYWdlcy9mbGFncy91c2EucG5nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9vdGVyIGxhbmd1YWdlIGkuZmxhZy1pY29uLWVzIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vc3RhdGljL2ltYWdlcy9mbGFncy9zcGFpbi5wbmcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb290ZXIgbGFuZ3VhZ2UgaS5mbGFnLWljb24tZnIge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9zdGF0aWMvaW1hZ2VzL2ZsYWdzL2ZyYW5jZS5wbmcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb290ZXIgbGFuZ3VhZ2UgaS5mbGFnLWljb24tYnIge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9zdGF0aWMvaW1hZ2VzL2ZsYWdzL2JyYXppbC5wbmcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb290ZXIgbGFuZ3VhZ2U6aG92ZXIgdWwge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAxNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb290ZXIgbGFuZ3VhZ2UgdWwge1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICMwMzFjNDU7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAjMDMxYzQ1O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMTVweCA1cHggMDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzI5MjgyNjtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvb3RlciBsYW5ndWFnZSB1bCBsaSB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9vdGVyIGxhbmd1YWdlIHVsIGxpLmRpc2FibGUgYSB7XG4gICAgICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzgyODA3ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9vdGVyIGxhbmd1YWdlIHVsIGxpLmRpc2FibGUgYSA+IGkuZmxhZy1pY29uIHtcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1maWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvb3RlciBsYW5ndWFnZSB1bCBsaSBhIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDEwcHggMCAxNXB4O1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNiYzc0ZmY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvb3RlciBsYW5ndWFnZSB1bCBsaSBhOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvb3RlciBsYW5ndWFnZSB1bCBsaSBhID4gaS5mbGFnLWljb24ge1xuICAgICAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk0MHB4KSB7XG4gICAgICAgICAgICAgICAgICAgIGZvb3RlciBpbmZvcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MjVweCkge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9mb290ZXI+XG4gICAgKX1cbn0iXX0= */\n/*@ sourceURL=/home/ubuntu/workspace/estudo/next/components/interface.js */",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Footer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
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
        className: "jsx-4020095834",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("logo", {
        className: "jsx-4020095834",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("text", {
        className: "jsx-4020095834",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }, "AVN SYSTEMS")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
        className: "jsx-4020095834",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/",
        as: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "jsx-4020095834",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, "Home")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/about",
        as: "/about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "jsx-4020095834",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, "About")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/tvmaze",
        as: "/tvmaze",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "jsx-4020095834",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, "TV Maze")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/404",
        as: "/404",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "jsx-4020095834",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, "404"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("navtoggle", {
        className: "jsx-4020095834",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("bar", {
        className: "jsx-4020095834",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("bar", {
        className: "jsx-4020095834",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("bar", {
        className: "jsx-4020095834",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("navslider", {
        className: "jsx-4020095834",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "4020095834",
        css: "header.jsx-4020095834{overflow:hidden;position:fixed;z-index:10000;height:90px;width:100%;}header.jsx-4020095834 logo.jsx-4020095834{position:absolute;padding:16px 0px;width:170px;left:90px;top:10px;background-image:url(./static/images/icon.png);background-repeat:no-repeat;background-size:contain;-webkit-filter:gray;filter:gray;-webkit-transition:all 150ms ease-in-out;-moz-transition:all 150ms ease-in-out;-ms-transition:all 150ms ease-in-out;-o-transition:all 150ms ease-in-out;-webkit-transition:all 150ms ease-in-out;transition:all 150ms ease-in-out;}header.jsx-4020095834 logo.jsx-4020095834:hover{-webkit-filter:none;-moz-filter:none;-o-filter:none;-webkit-filter:none;filter:none;}header.jsx-4020095834 logo.jsx-4020095834 text.jsx-4020095834{display:-webkit-inline-box;text-transform:uppercase;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;position:relative;font-weight:bold;min-width:110px;font-size:14px;color:#5f5f5f;left:60px;}header.jsx-4020095834 nav.jsx-4020095834{margin:0 20px;float:right;}header.jsx-4020095834 nav.jsx-4020095834 a.jsx-4020095834{-webkit-text-decoration:none;text-decoration:none;display:inline-block;text-transform:uppercase;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;font-weight:bold;margin:25px 10px;font-size:14px;color:#d9d9d9;}header.jsx-4020095834 nav.jsx-4020095834 a.jsx-4020095834:hover{color:#8500FF;}header.jsx-4020095834 navtoggle.jsx-4020095834{cursor:pointer;display:inline-block;position:absolute;width:45px;left:20px;top:15px;}header.jsx-4020095834 navtoggle.jsx-4020095834 bar.jsx-4020095834{border-bottom:2px solid #aaa;display:block;margin:7px 0;width:100%;height:5px;}header.jsx-4020095834 navtoggle.jsx-4020095834:hover bar.jsx-4020095834{border-bottom:2px solid #bc73ff;}header.jsx-4020095834 navslider.jsx-4020095834{border-bottom:4px solid #8500FF;position:absolute;height:0;top:50px;-webkit-transition:all 250ms ease-in-out;-moz-transition:all 250ms ease-in-out;-ms-transition:all 250ms ease-in-out;-o-transition:all 250ms ease-in-out;-webkit-transition:all 250ms ease-in-out;transition:all 250ms ease-in-out;}@media (max-width:625px){header.jsx-4020095834{background:white;height:58px;}header.jsx-4020095834 logo.jsx-4020095834{left:calc(50% - 85px);-webkit-filter:none;-moz-filter:none;-o-filter:none;-webkit-filter:none;filter:none;top:1px;}header.jsx-4020095834 nav.jsx-4020095834{display:none;}header.jsx-4020095834 navtoggle.jsx-4020095834{top:5px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VidW50dS93b3Jrc3BhY2UvZXN0dWRvL25leHQvY29tcG9uZW50cy9pbnRlcmZhY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEk0QixBQUd5QyxBQU9FLEFBa0JFLEFBTU8sQUFXYixBQUlPLEFBVVAsQUFHQyxBQVFjLEFBT0csQUFHQSxBQWNYLEFBSUssQUFRVCxBQUdMLFFBQ1osS0FIQSxDQTdEWSxBQWNoQixDQUd5QixDQTNETixDQTJGQyxDQXBGQyxFQWtCQSxFQXNFTyxJQXBENUIsQ0FaNkIsRUFvQ1gsQUF5QmQsRUEzRmMsQ0F5RWxCLEFBR3NCLEdBckVOLENBb0RNLENBbENILEtBc0VNLENBNUJSLEVBbEVELEVBT0YsR0FxQ1csQUFnQ1osRUFuREcsQUFLTyxFQTZCUixFQVFBLENBbEVBLEFBT0YsRUFxRUEsQUFrQlUsTUFuQ1QsQ0FsRHFDLENBMERwQyxDQWxFZixBQTZFNkMsR0FsQ2hCLEdBbURULENBbkNQLEdBUWIsTUEzQ0EsQUFvQ0EsWUFoQnVCLFVBbURQLEdBakIwQixJQXJFVixDQXVGNUIsMkJBdEZ3QixJQW1CTixFQWtEbUIsZ0JBakRwQixFQW5CTCxlQW9CSSxJQWlEb0IsS0FuQ25CLE9BYkYsQ0FuQjBCLFNBaUN4QixLQWJILFNBZ0RtQixHQWxDbEIsRUFiTCxVQUNkLEdBckIwQyxBQWtDeEIsY0FDbEIsd0JBbEN5QyxrQkFtRXpDLG1CQWxFd0Msb0NBQ0gsMEVBQ3JDIiwiZmlsZSI6Ii9ob21lL3VidW50dS93b3Jrc3BhY2UvZXN0dWRvL25leHQvY29tcG9uZW50cy9pbnRlcmZhY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKmdsb2JhbCAkIG5hdmlnYXRvciovXG5cbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuXG5pbXBvcnQgTlByb2dyZXNzIGZyb20gJ25wcm9ncmVzcydcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5cblJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlU3RhcnQnLCAodXJsKSA9PiB7XG4gIGNvbnNvbGUubG9nKGBMb2FkaW5nOiAke3VybH1gKVxuICBOUHJvZ3Jlc3Muc3RhcnQoKVxufSlcblJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCAoKSA9PiBOUHJvZ3Jlc3MuZG9uZSgpKVxuUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VFcnJvcicsICgpID0+IE5Qcm9ncmVzcy5kb25lKCkpXG5cbmV4cG9ydCBkZWZhdWx0ICh7IGNoaWxkcmVuLFxuICAgIHRpdGxlID0gJ1RoaXMgaXMgdGhlIGRlZmF1bHQgdGl0bGUnLFxuICAgIFxuICAgIG9nU2l0ZU5hbWUgPSBcImF2bi5zeXN0ZW1zXCIsIG9nVGl0bGUgPSBcIldlYnNpdGUgfCBhdm4uc3lzdGVtc1wiLFxuICAgIG9nVXJsID0gXCJodHRwczovL2F2bi5zeXN0ZW1zXCIsIG9nVHlwZSA9IFwiYXJ0aWNsZVwiLFxuICAgIG9nRGVzY3JpcHRpb24gPSBcIldlYnNpdGUgY3JlYXRlZCB3aXRoIG5leHQuanMgb3B0bWl6ZWQgYXMgYSBQV0FcIixcbiAgICBvZ0ltYWdlID0gJy9zdGF0aWMvaW1hZ2VzL2F2bi5zeXN0ZW1zLm9nLWltYWdlLmpwZycsXG4gICAgXG4gICAgdHdpdHRlclNpdGUgPSBcIkBhdm4uc3lzdGVtc1wiLFxuICAgIHR3aXR0ZXJDcmVhdG9yID0gXCJAYXZuLnN5c3RlbXNcIixcbiAgICBcbiAgICBjYW5vbmljYWwgPSBcImh0dHBzOi8vYXZuLnN5c3RlbXNcIixcbiAgICBmZWVkWG1sID0gXCJodHRwczovL2F2bi5zeXN0ZW1zL2ZlZWQueG1sXCIsXG4gICAgZmVlZEpzb24gPSBcImh0dHBzOi8vYXZuLnN5c3RlbXNtL2ZlZWQuanNvblwiXG4gIH0pID0+IChcbiAgPGludGVyZmFjZT5cbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT57IHRpdGxlIH08L3RpdGxlPlxuICAgICAgPG1ldGEgY2hhclNldD0ndXRmLTgnIC8+XG4gICAgICA8bWV0YSBuYW1lPSd2aWV3cG9ydCcgY29udGVudD0naW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aCcgLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJhdXRob3JcIiBjb250ZW50PVwiQWxsYW4gQXZlbGFyIC0gaHR0cHM6Ly9hbGxhbmF2ZWxhci5jb20vXCIgLz5cbiAgICAgIFxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpzaXRlX25hbWVcIiBjb250ZW50PXsgb2dTaXRlTmFtZSB9IC8+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD17IG9nVGl0bGUgfSAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PXsgb2dVcmwgfSAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0eXBlXCIgY29udGVudD17IG9nVHlwZSB9IC8+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD17IG9nRGVzY3JpcHRpb24gfSAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9eyBwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArIG9nSW1hZ2UgfSAvPlxuICAgIFxuICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6Y2FyZFwiIGNvbnRlbnQ9XCJzdW1tYXJ5X2xhcmdlX2ltYWdlXCIgLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOnNpdGVcIiBjb250ZW50PXsgdHdpdHRlclNpdGUgfSAvPlxuICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6Y3JlYXRvclwiIGNvbnRlbnQ9eyB0d2l0dGVyQ3JlYXRvciB9IC8+XG4gICAgXG4gICAgICA8bGluayByZWw9XCJjYW5vbmljYWxcIiBocmVmPXsgY2Fub25pY2FsIH0gLz5cbiAgICAgIDxsaW5rIHJlbD1cImFsdGVybmF0ZVwiIHR5cGU9XCJhcHBsaWNhdGlvbi9yc3MreG1sXCIgdGl0bGU9eyBvZ1RpdGxlIH0gaHJlZj17IGZlZWRYbWwgfSAvPlxuICAgICAgPGxpbmsgcmVsPVwiYWx0ZXJuYXRlXCIgdHlwZT1cImFwcGxpY2F0aW9uL2pzb25cIiB0aXRsZT17IG9nVGl0bGUgfSBocmVmPXsgZmVlZEpzb24gfSAvPlxuXG4gICAgICA8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCIxMTR4MTE0XCIgaHJlZj17IHByb2Nlc3MuZW52LkJBQ0tFTkRfVVJMICsgJy9zdGF0aWMvaW1hZ2VzL2ljb24ucG5nJ30gLz5cbiAgICAgIDxsaW5rIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBzaXplcz1cIjEyMHgxMjBcIiBocmVmPXsgcHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyAnL3N0YXRpYy9pbWFnZXMvaWNvbi5wbmcnfSAvPlxuICAgICAgPGxpbmsgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIHNpemVzPVwiMTQ0eDE0NFwiIGhyZWY9eyBwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArICcvc3RhdGljL2ltYWdlcy9pY29uLnBuZyd9IC8+XG4gICAgICA8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCIxNTJ4MTUyXCIgaHJlZj17IHByb2Nlc3MuZW52LkJBQ0tFTkRfVVJMICsgJy9zdGF0aWMvaW1hZ2VzL2ljb24ucG5nJ30gLz5cbiAgICAgIDxsaW5rIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBzaXplcz1cIjE4MHgxODBcIiBocmVmPXsgcHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyAnL3N0YXRpYy9pbWFnZXMvaWNvbi5wbmcnfSAvPlxuICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS9wbmdcIiBocmVmPXsgcHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyAnL3N0YXRpYy9pbWFnZXMvaWNvbi5wbmcnfSAvPlxuICAgICAgPGxpbmsgcmVsPVwic2hvcnRjdXQgaWNvblwiIGhyZWY9eyBwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArICcvc3RhdGljL2ltYWdlcy9mYXZpY29uLmljbyd9IC8+XG4gICAgICBcbiAgICAgIDxsaW5rIHJlbD1cIm1hc2staWNvblwiIGhyZWY9XCIvYXNzZXRzL3NhZmFyaS1waW5uZWQtdGFiLnN2Z1wiIGNvbG9yPVwiIzViYmFkNVwiIC8+XG4gICAgICA8bGluayByZWw9XCJtYW5pZmVzdFwiIGhyZWY9eyBwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArICcvc3RhdGljL21hbmlmZXN0Lmpzb24nfSAvPlxuICAgICAgXG4gICAgICA8bWV0YSBuYW1lPVwibXNhcHBsaWNhdGlvbi1UaWxlQ29sb3JcIiBjb250ZW50PVwiIzU3MDBBRVwiIC8+XG4gICAgICA8bWV0YSBuYW1lPVwibXNhcHBsaWNhdGlvbi1UaWxlSW1hZ2VcIiBjb250ZW50PXsgcHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyAnL3N0YXRpYy9pbWFnZXMvYXZuLnN5c3RlbXMub2ctaW1hZ2UuanBnJ30gLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJtc2FwcGxpY2F0aW9uLWNvbmZpZ1wiIGNvbnRlbnQ9eyBwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArICcvc3RhdGljL2Jyb3dzZXJjb25maWcueG1sJ30gLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJ0aGVtZS1jb2xvclwiIGNvbnRlbnQ9XCIjNTcwMEFFXCIgLz5cbiAgICAgIFxuICAgICAgPGxpbmsgcmVsPSdzdHlsZXNoZWV0JyBocmVmPSdodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjAuMC1iZXRhLjMvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJyBpbnRlZ3JpdHk9J3NoYTM4NC1adWcrUWlEb0pPclo1dDRsc3NMZHhHaFZydXJibUJXb3BvRWwrTTZCZEVmd25DSlp0S3hpMUtneFV5SnExM2R5JyBjcm9zc09yaWdpbj0nYW5vbnltb3VzJyAvPlxuICAgICAgPGxpbmsgcmVsPSdzdHlsZXNoZWV0JyB0eXBlPSd0ZXh0L2NzcycgaHJlZj17IHByb2Nlc3MuZW52LkJBQ0tFTkRfVVJMICsgJy9zdGF0aWMvY3NzL25wcm9ncmVzcy5jc3MnfSAvPlxuICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL2NvZGUuanF1ZXJ5LmNvbS9qcXVlcnktMy4zLjEubWluLmpzXCI+PC9zY3JpcHQ+XG4gICAgPC9IZWFkPlxuICAgIDxIZWFkZXIgLz5cbiAgICA8cGFnZT5cbiAgICAgICAgeyBjaGlsZHJlbiB9XG4gICAgPC9wYWdlPlxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgICAgbWluLXdpZHRoOiAzMjBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgvc3RhdGljL2ltYWdlcy9ib2R5LWJnLmpwZykgI0Y1RjdGNjtcbiAgICAgICAgfVxuICAgICAgICBwYWdlIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDE4NXB4IDIwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgICAgICBwYWdlLCBwcmUge1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG4gICAgICAgIC5mdGwge1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIH1cbiAgICAgICAgLmZ0ciB7XG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MjVweCkge1xuICAgICAgICB9XG4gICAgYH08L3N0eWxlPlxuXG4gICAgPEZvb3RlciAvPlxuICA8L2ludGVyZmFjZT5cbilcblxuZXhwb3J0IGNsYXNzIEhlYWRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuICAgICAgICBpZiAoJ3NlcnZpY2VXb3JrZXInIGluIG5hdmlnYXRvcikge1xuICAgICAgICAvLyBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlclxuICAgICAgICAvLyAgIC5yZWdpc3Rlcihwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArJy9zZXJ2aWNlLXdvcmtlci5qcycpXG4gICAgICAgIC8vICAgLnRoZW4ocmVnaXN0cmF0aW9uID0+IHtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKCdzZXJ2aWNlIHdvcmtlciByZWdpc3RyYXRpb24gc3VjY2Vzc2Z1bCcpXG4gICAgICAgIC8vICAgfSlcbiAgICAgICAgLy8gICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUud2Fybignc2VydmljZSB3b3JrZXIgcmVnaXN0cmF0aW9uIGZhaWxlZCcsIGVyci5tZXNzYWdlKVxuICAgICAgICAvLyAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQod2luZG93KS5zY3JvbGxUb3AoKSA+IDAgJiYgJCh3aW5kb3cpLndpZHRoKCkgPiA1NTAgPyAkKFwiaGVhZGVyXCIpLmFkZENsYXNzKFwicmVzaXplXCIpIDogJChcImhlYWRlclwiKS5yZW1vdmVDbGFzcyhcInJlc2l6ZVwiKVxuICAgICAgICB9KVxuICAgICAgICBcbiAgICAgICAgJChcImhlYWRlciBuYXYgYVwiKS5ob3ZlcihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQoXCJoZWFkZXIgbmF2c2xpZGVyXCIpLmNzcyh7XG4gICAgICAgICAgICAgICAgbGVmdDogJCh0aGlzKS5wb3NpdGlvbigpLmxlZnQgKyBwYXJzZUludCgkKHRoaXMpLmNzcyhcIm1hcmdpbkxlZnRcIikpICsgXCJweFwiLFxuICAgICAgICAgICAgICAgIHdpZHRoOiAkKHRoaXMpLndpZHRoKCkgKyBcInB4XCIsXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogXCIuOTk5XCJcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJChcImhlYWRlciBuYXZzbGlkZXJcIikuY3NzKFwib3BhY2l0eVwiLCBcIjBcIilcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJlbmRlciAoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgICAgICAgIDxsb2dvPjx0ZXh0PkFWTiBTWVNURU1TPC90ZXh0PjwvbG9nbz5cbiAgICAgICAgICAgICAgICA8bmF2PlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvJyBhcz17IHByb2Nlc3MuZW52LkJBQ0tFTkRfVVJMICsgYC9gfT48YT5Ib21lPC9hPjwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL2Fib3V0JyBhcz17IHByb2Nlc3MuZW52LkJBQ0tFTkRfVVJMICsgYC9hYm91dGB9PjxhPkFib3V0PC9hPjwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL3R2bWF6ZScgYXM9eyBwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArIGAvdHZtYXplYH0+PGE+VFYgTWF6ZTwvYT48L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy80MDQnIGFzPXsgcHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyBgLzQwNGB9PjxhPjQwNDwvYT48L0xpbms+XG4gICAgICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgICAgICAgPG5hdnRvZ2dsZT48YmFyPjwvYmFyPjxiYXI+PC9iYXI+PGJhcj48L2Jhcj48L25hdnRvZ2dsZT5cbiAgICAgICAgICAgICAgICA8bmF2c2xpZGVyPjwvbmF2c2xpZGVyPlxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDAwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogOTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlciBsb2dvIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE2cHggMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE3MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogOTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vc3RhdGljL2ltYWdlcy9pY29uLnBuZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBncmF5O1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAxNTBtcyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDE1MG1zIGVhc2UtaW4tb3V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgLW1zLXRyYW5zaXRpb246IGFsbCAxNTBtcyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC1vLXRyYW5zaXRpb246IGFsbCAxNTBtcyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAxNTBtcyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBoZWFkZXIgbG9nbzpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWZpbHRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC1tb3otZmlsdGVyOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgLW8tZmlsdGVyOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBub25lO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlciBsb2dvIHRleHQge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1pbmxpbmUtYm94O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMTEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzVmNWY1ZjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDYwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyIG5hdiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBoZWFkZXIgbmF2IGEge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMjVweCAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNkOWQ5ZDk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyIG5hdiBhOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjODUwMEZGO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlciBuYXZ0b2dnbGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQ1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlciBuYXZ0b2dnbGUgYmFyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjYWFhO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDdweCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBoZWFkZXIgbmF2dG9nZ2xlOmhvdmVyIGJhciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2JjNzNmZjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBoZWFkZXIgbmF2c2xpZGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjODUwMEZGO1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAyNTBtcyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDI1MG1zIGVhc2UtaW4tb3V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgLW1zLXRyYW5zaXRpb246IGFsbCAyNTBtcyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC1vLXRyYW5zaXRpb246IGFsbCAyNTBtcyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAyNTBtcyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYyNXB4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNThweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlciBsb2dvIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBjYWxjKDUwJSAtIDg1cHgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtZmlsdGVyOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC1tb3otZmlsdGVyOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC1vLWZpbHRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAxcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXIgbmF2IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyIG5hdnRvZ2dsZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZvb3RlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuICAgICAgICBcbiAgICB9XG4gICAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8Zm9vdGVyPlxuICAgICAgICAgICAgPGxpZ2h0LXJpZ2h0PjwvbGlnaHQtcmlnaHQ+XG4gICAgICAgICAgICA8dmVyc2lvbiBjbGFzc05hbWU9XCJmdGxcIj52ZXJzaW9uOiA8aXRlbT4yLjEuMDE8L2l0ZW0+PC92ZXJzaW9uPlxuICAgICAgICAgICAgPGluZm9zIGNsYXNzTmFtZT1cImZ0bFwiPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2FkbWluLmF2bi5zeXN0ZW1zL3YxL1wiIHRhcmdldD1cIl9ibGFua1wiPjxsb2dpbj7wn5SQIENMSUVOVCBMT0dJTjwvbG9naW4+PC9hPiB8IDxjbGlja2l0ZW0+PGl0ZW0+TE9DQUw6PC9pdGVtPiBXT1JMRFdJREU8L2NsaWNraXRlbT4gfCA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2F2bnN5c3RlbXNcIiB0YXJnZXQ9XCJfYmxhbmtcIj48aXRlbT5HSVRIVUIvPC9pdGVtPkFWTlNZU1RFTVM8L2E+IHwgPGEgaHJlZj1cIm1haWx0bzpteWFwcEBhdm4uc3lzdGVtc1wiPjxpdGVtPkUtTUFJTDo8L2l0ZW0+IENPTlRBQ1RAQVZOLlNZU1RFTVM8L2E+XG4gICAgICAgICAgICA8L2luZm9zPlxuICAgICAgICAgICAgPGxhbmd1YWdlIGNsYXNzTmFtZT1cImZ0clwiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZsYWctaWNvbiBmbGFnLWljb24tdXMgc2VsZWN0ZWQgZnRyXCI+PC9pPlxuICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxhPkVuZ2xpc2g8aSBjbGFzc05hbWU9XCJmbGFnLWljb24gZmxhZy1pY29uLXVzXCI+PC9pPjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZGlzYWJsZVwiPjxhPlNwYW5pc2g8aSBjbGFzc05hbWU9XCJmbGFnLWljb24gZmxhZy1pY29uLWVzXCI+PC9pPjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZGlzYWJsZVwiPjxhPkZyZW5jaDxpIGNsYXNzTmFtZT1cImZsYWctaWNvbiBmbGFnLWljb24tZnJcIj48L2k+PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkaXNhYmxlXCI+PGE+UG9ydHVndWVzZTxpIGNsYXNzTmFtZT1cImZsYWctaWNvbiBmbGFnLWljb24tYnJcIj48L2k+PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvbGFuZ3VhZ2U+XG4gICAgICAgICAgICA8Y29weXJpZ2h0IGNsYXNzTmFtZT1cImZ0clwiPkNvcHlyaWdodCA8aXRlbT4yMDE3PC9pdGVtPjwvY29weXJpZ2h0PlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIGZvb3RlciB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCguL3N0YXRpYy9pbWFnZXMvZm9vdGVyLmpwZyk7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkZyYW5rbGluXCIsYXJpYWwsc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDAwMDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzN3B4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgICAgICB3ZWJraXQtYm94LXNoYWRvdzogMCAtMXB4IDEwcHggMCByZ2IoMCwgMCwgMCk7XG4gICAgICAgICAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogMCAtMXB4IDEwcHggMCByZ2IoMCwgMCwgMCk7XG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgLTFweCAxMHB4IDAgcmdiKDAsIDAsIDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb290ZXIgY29weXJpZ2h0LCBmb290ZXIgdmVyc2lvbiB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEycHggMTVweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjYmM3NGZmO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb290ZXIgY29weXJpZ2h0ID4gaXRlbSwgZm9vdGVyIHZlcnNpb24gPiBpdGVtLCBmb290ZXIgaW5mb3MgaXRlbSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjQUJBNDlBO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb290ZXIgaW5mb3Mge1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiBjYWxjKDUwJSAtIDIyMXB4KTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNzc2RTYzO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZvb3RlciBpbmZvcyBhIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNzc2RTYzO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZvb3RlciBpbmZvcyA+IGEgPiBsb2dpbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2RjOWQwMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmb290ZXIgaW5mb3MgYTpob3ZlciwgZm9vdGVyIGluZm9zIGE6aG92ZXIgbG9naW4sIGZvb3RlciBpbmZvcyBjbGlja2l0ZW06aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNiYzc0ZmY7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb290ZXIgbGFuZ3VhZ2UgaS5mbGFnLWljb24ge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDdweCAxNXB4IDBweCAwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb290ZXIgbGFuZ3VhZ2UgaS5mbGFnLWljb24tdXMge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9zdGF0aWMvaW1hZ2VzL2ZsYWdzL3VzYS5wbmcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb290ZXIgbGFuZ3VhZ2UgaS5mbGFnLWljb24tZXMge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9zdGF0aWMvaW1hZ2VzL2ZsYWdzL3NwYWluLnBuZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvb3RlciBsYW5ndWFnZSBpLmZsYWctaWNvbi1mciB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL3N0YXRpYy9pbWFnZXMvZmxhZ3MvZnJhbmNlLnBuZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvb3RlciBsYW5ndWFnZSBpLmZsYWctaWNvbi1iciB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL3N0YXRpYy9pbWFnZXMvZmxhZ3MvYnJhemlsLnBuZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvb3RlciBsYW5ndWFnZTpob3ZlciB1bCB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICBib3R0b206IDE1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvb3RlciBsYW5ndWFnZSB1bCB7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzAzMWM0NTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICMwMzFjNDU7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxNXB4IDVweCAwO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjkyODI2O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9vdGVyIGxhbmd1YWdlIHVsIGxpIHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb290ZXIgbGFuZ3VhZ2UgdWwgbGkuZGlzYWJsZSBhIHtcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjODI4MDdlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb290ZXIgbGFuZ3VhZ2UgdWwgbGkuZGlzYWJsZSBhID4gaS5mbGFnLWljb24ge1xuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWZpbHRlcjogZ3JheXNjYWxlKDEwMCUpO1xuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9vdGVyIGxhbmd1YWdlIHVsIGxpIGEge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMTBweCAwIDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2JjNzRmZjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9vdGVyIGxhbmd1YWdlIHVsIGxpIGE6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9vdGVyIGxhbmd1YWdlIHVsIGxpIGEgPiBpLmZsYWctaWNvbiB7XG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogOTQwcHgpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9vdGVyIGluZm9zIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYyNXB4KSB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2Zvb3Rlcj5cbiAgICApfVxufSJdfQ== */\n/*@ sourceURL=/home/ubuntu/workspace/estudo/next/components/interface.js */",
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
        className: "jsx-742319500",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("light-right", {
        className: "jsx-742319500",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("version", {
        className: "jsx-742319500" + " " + "ftl",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 268
        },
        __self: this
      }, "version: ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("item", {
        className: "jsx-742319500",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 268
        },
        __self: this
      }, "2.1.01")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("infos", {
        className: "jsx-742319500" + " " + "ftl",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 269
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "https://admin.avn.systems/v1/",
        target: "_blank",
        className: "jsx-742319500",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 270
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("login", {
        className: "jsx-742319500",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 270
        },
        __self: this
      }, "\uD83D\uDD10 CLIENT LOGIN")), " | ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("clickitem", {
        className: "jsx-742319500",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 270
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("item", {
        className: "jsx-742319500",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 270
        },
        __self: this
      }, "LOCAL:"), " WORLDWIDE"), " | ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "https://github.com/avnsystems",
        target: "_blank",
        className: "jsx-742319500",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 270
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("item", {
        className: "jsx-742319500",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 270
        },
        __self: this
      }, "GITHUB/"), "AVNSYSTEMS"), " | ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "mailto:myapp@avn.systems",
        className: "jsx-742319500",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 270
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("item", {
        className: "jsx-742319500",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 270
        },
        __self: this
      }, "E-MAIL:"), " CONTACT@AVN.SYSTEMS")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("language", {
        className: "jsx-742319500" + " " + "ftr",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 272
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: "jsx-742319500" + " " + "flag-icon flag-icon-us selected ftr",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 273
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "jsx-742319500",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 274
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-742319500",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 275
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "jsx-742319500",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 275
        },
        __self: this
      }, "English", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: "jsx-742319500" + " " + "flag-icon flag-icon-us",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 275
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-742319500" + " " + "disable",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "jsx-742319500",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276
        },
        __self: this
      }, "Spanish", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: "jsx-742319500" + " " + "flag-icon flag-icon-es",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-742319500" + " " + "disable",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 277
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "jsx-742319500",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 277
        },
        __self: this
      }, "French", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: "jsx-742319500" + " " + "flag-icon flag-icon-fr",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 277
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-742319500" + " " + "disable",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 278
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "jsx-742319500",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 278
        },
        __self: this
      }, "Portuguese", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: "jsx-742319500" + " " + "flag-icon flag-icon-br",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 278
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("copyright", {
        className: "jsx-742319500" + " " + "ftr",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 281
        },
        __self: this
      }, "Copyright ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("item", {
        className: "jsx-742319500",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 281
        },
        __self: this
      }, "2017")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "742319500",
        css: "footer.jsx-742319500{background:url(./static/images/footer.jpg);font-family:\"Franklin\",arial,sans-serif;position:fixed;z-index:10000;height:37px;width:100%;bottom:0;webkit-box-shadow:0 -1px 10px 0 rgb(0,0,0);-moz-box-shadow:0 -1px 10px 0 rgb(0,0,0);box-shadow:0 -1px 10px 0 rgb(0,0,0);}footer.jsx-742319500 copyright.jsx-742319500,footer.jsx-742319500 version.jsx-742319500{padding:12px 15px;font-style:italic;font-size:10px;color:#bc74ff;}footer.jsx-742319500 copyright.jsx-742319500>item.jsx-742319500,footer.jsx-742319500 version.jsx-742319500>item.jsx-742319500,footer.jsx-742319500 infos.jsx-742319500 item.jsx-742319500{color:#ABA49A;}footer.jsx-742319500 infos.jsx-742319500{left:calc(50% - 221px);margin-top:12px;position:fixed;font-size:10px;color:#776E63;}footer.jsx-742319500 infos.jsx-742319500 a.jsx-742319500{color:#776E63;}footer.jsx-742319500 infos.jsx-742319500>a.jsx-742319500>login.jsx-742319500{color:#dc9d00;}footer.jsx-742319500 infos.jsx-742319500 a.jsx-742319500:hover,footer.jsx-742319500 infos.jsx-742319500 a.jsx-742319500:hover login.jsx-742319500,footer.jsx-742319500 infos.jsx-742319500 clickitem.jsx-742319500:hover{-webkit-text-decoration:none;text-decoration:none;color:#bc74ff;}footer.jsx-742319500 language.jsx-742319500 i.flag-icon.jsx-742319500{margin:7px 15px 0px 0px;background-size:contain;cursor:pointer;height:25px;width:25px;}footer.jsx-742319500 language.jsx-742319500 i.flag-icon-us.jsx-742319500{background-image:url(./static/images/flags/usa.png);}footer.jsx-742319500 language.jsx-742319500 i.flag-icon-es.jsx-742319500{background-image:url(./static/images/flags/spain.png);}footer.jsx-742319500 language.jsx-742319500 i.flag-icon-fr.jsx-742319500{background-image:url(./static/images/flags/france.png);}footer.jsx-742319500 language.jsx-742319500 i.flag-icon-br.jsx-742319500{background-image:url(./static/images/flags/brazil.png);}footer.jsx-742319500 language.jsx-742319500:hover ul.jsx-742319500{display:block;bottom:15px;}footer.jsx-742319500 language.jsx-742319500 ul.jsx-742319500{border-left:2px solid #031c45;border-top:2px solid #031c45;padding:5px 15px 5px 0;background:#292826;margin-bottom:15px;text-align:right;list-style:none;position:fixed;display:none;right:0;}footer.jsx-742319500 language.jsx-742319500 ul.jsx-742319500 li.jsx-742319500{height:25px;}footer.jsx-742319500 language.jsx-742319500 ul.jsx-742319500 li.disable.jsx-742319500 a.jsx-742319500{pointer-events:none;color:#82807e;}footer.jsx-742319500 language.jsx-742319500 ul.jsx-742319500 li.disable.jsx-742319500 a.jsx-742319500>i.flag-icon.jsx-742319500{-webkit-filter:grayscale(100%);-webkit-filter:grayscale(100%);filter:grayscale(100%);}footer.jsx-742319500 language.jsx-742319500 ul.jsx-742319500 li.jsx-742319500 a.jsx-742319500{margin:0 10px 0 15px;position:relative;font-style:italic;text-align:right;font-size:12px;color:#bc74ff;}footer.jsx-742319500 language.jsx-742319500 ul.jsx-742319500 li.jsx-742319500 a.jsx-742319500:hover{color:#ffffff;}footer.jsx-742319500 language.jsx-742319500 ul.jsx-742319500 li.jsx-742319500 a.jsx-742319500>i.flag-icon.jsx-742319500{float:right;height:25px;width:25px;margin:0;}@media (max-width:940px){footer.jsx-742319500 infos.jsx-742319500{display:none;}}@media (max-width:625px){}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VidW50dS93b3Jrc3BhY2UvZXN0dWRvL25leHQvY29tcG9uZW50cy9pbnRlcmZhY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeVJ3QixBQUdnRSxBQVl6QixBQU1KLEFBR1MsQUFPTCxBQUdBLEFBR08sQUFJRCxBQU80QixBQUdFLEFBR0MsQUFHQSxBQUd6QyxBQUlnQixBQVlsQixBQUdRLEFBSVcsQUFJVixBQVFQLEFBR0YsQUFRSyxZQTdCckIsQUFzQmdCLENBUVosQ0FyRkosQUFVSSxBQUdBLEFBMEJZLEFBbUNoQixJQWhGc0IsRUFnRUosQ0FRSSxFQS9ERixDQWlCUSxBQTBEYixFQXRDZixJQUdpQyxDQW1CTixHQUgzQixDQW9CYSxDQXBGTSxHQVNBLEFBK0RHLElBckZzQixDQWtHNUMsSUEzRG1CLEVBTEcsQ0FwQkosQ0ErQmxCLEVBdEJtQixBQXlCbkIsQ0FHQSxBQUdBLEVBZ0NxQixFQXhCTSxJQXRCWCxDQUxaLENBcEJKLElBU2tCLEtBK0RDLENBOUNKLE9Bc0JRLENBOURKLEFBd0JmLEVBd0RKLENBdkNBLEdBOENrQixTQXRGQSxHQThESyxFQXlCdkIsU0F0RmdCLFFBOERLLElBN0ROLFdBQ0YsRUE2RE8sT0E1RDZCLFNBNkQ5QixlQUNGLGFBQ0wsTUE5RG1DLEVBK0QvQyx1Q0E5RDBDLG9DQUMxQyIsImZpbGUiOiIvaG9tZS91YnVudHUvd29ya3NwYWNlL2VzdHVkby9uZXh0L2NvbXBvbmVudHMvaW50ZXJmYWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypnbG9iYWwgJCBuYXZpZ2F0b3IqL1xuXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcblxuaW1wb3J0IE5Qcm9ncmVzcyBmcm9tICducHJvZ3Jlc3MnXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuXG5Sb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZVN0YXJ0JywgKHVybCkgPT4ge1xuICBjb25zb2xlLmxvZyhgTG9hZGluZzogJHt1cmx9YClcbiAgTlByb2dyZXNzLnN0YXJ0KClcbn0pXG5Sb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgKCkgPT4gTlByb2dyZXNzLmRvbmUoKSlcblJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlRXJyb3InLCAoKSA9PiBOUHJvZ3Jlc3MuZG9uZSgpKVxuXG5leHBvcnQgZGVmYXVsdCAoeyBjaGlsZHJlbixcbiAgICB0aXRsZSA9ICdUaGlzIGlzIHRoZSBkZWZhdWx0IHRpdGxlJyxcbiAgICBcbiAgICBvZ1NpdGVOYW1lID0gXCJhdm4uc3lzdGVtc1wiLCBvZ1RpdGxlID0gXCJXZWJzaXRlIHwgYXZuLnN5c3RlbXNcIixcbiAgICBvZ1VybCA9IFwiaHR0cHM6Ly9hdm4uc3lzdGVtc1wiLCBvZ1R5cGUgPSBcImFydGljbGVcIixcbiAgICBvZ0Rlc2NyaXB0aW9uID0gXCJXZWJzaXRlIGNyZWF0ZWQgd2l0aCBuZXh0LmpzIG9wdG1pemVkIGFzIGEgUFdBXCIsXG4gICAgb2dJbWFnZSA9ICcvc3RhdGljL2ltYWdlcy9hdm4uc3lzdGVtcy5vZy1pbWFnZS5qcGcnLFxuICAgIFxuICAgIHR3aXR0ZXJTaXRlID0gXCJAYXZuLnN5c3RlbXNcIixcbiAgICB0d2l0dGVyQ3JlYXRvciA9IFwiQGF2bi5zeXN0ZW1zXCIsXG4gICAgXG4gICAgY2Fub25pY2FsID0gXCJodHRwczovL2F2bi5zeXN0ZW1zXCIsXG4gICAgZmVlZFhtbCA9IFwiaHR0cHM6Ly9hdm4uc3lzdGVtcy9mZWVkLnhtbFwiLFxuICAgIGZlZWRKc29uID0gXCJodHRwczovL2F2bi5zeXN0ZW1zbS9mZWVkLmpzb25cIlxuICB9KSA9PiAoXG4gIDxpbnRlcmZhY2U+XG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+eyB0aXRsZSB9PC90aXRsZT5cbiAgICAgIDxtZXRhIGNoYXJTZXQ9J3V0Zi04JyAvPlxuICAgICAgPG1ldGEgbmFtZT0ndmlld3BvcnQnIGNvbnRlbnQ9J2luaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGgnIC8+XG4gICAgICA8bWV0YSBuYW1lPVwiYXV0aG9yXCIgY29udGVudD1cIkFsbGFuIEF2ZWxhciAtIGh0dHBzOi8vYWxsYW5hdmVsYXIuY29tL1wiIC8+XG4gICAgICBcbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6c2l0ZV9uYW1lXCIgY29udGVudD17IG9nU2l0ZU5hbWUgfSAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9eyBvZ1RpdGxlIH0gLz5cbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dXJsXCIgY29udGVudD17IG9nVXJsIH0gLz5cbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dHlwZVwiIGNvbnRlbnQ9eyBvZ1R5cGUgfSAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9eyBvZ0Rlc2NyaXB0aW9uIH0gLz5cbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PXsgcHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyBvZ0ltYWdlIH0gLz5cbiAgICBcbiAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmNhcmRcIiBjb250ZW50PVwic3VtbWFyeV9sYXJnZV9pbWFnZVwiIC8+XG4gICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpzaXRlXCIgY29udGVudD17IHR3aXR0ZXJTaXRlIH0gLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmNyZWF0b3JcIiBjb250ZW50PXsgdHdpdHRlckNyZWF0b3IgfSAvPlxuICAgIFxuICAgICAgPGxpbmsgcmVsPVwiY2Fub25pY2FsXCIgaHJlZj17IGNhbm9uaWNhbCB9IC8+XG4gICAgICA8bGluayByZWw9XCJhbHRlcm5hdGVcIiB0eXBlPVwiYXBwbGljYXRpb24vcnNzK3htbFwiIHRpdGxlPXsgb2dUaXRsZSB9IGhyZWY9eyBmZWVkWG1sIH0gLz5cbiAgICAgIDxsaW5rIHJlbD1cImFsdGVybmF0ZVwiIHR5cGU9XCJhcHBsaWNhdGlvbi9qc29uXCIgdGl0bGU9eyBvZ1RpdGxlIH0gaHJlZj17IGZlZWRKc29uIH0gLz5cblxuICAgICAgPGxpbmsgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIHNpemVzPVwiMTE0eDExNFwiIGhyZWY9eyBwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArICcvc3RhdGljL2ltYWdlcy9pY29uLnBuZyd9IC8+XG4gICAgICA8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCIxMjB4MTIwXCIgaHJlZj17IHByb2Nlc3MuZW52LkJBQ0tFTkRfVVJMICsgJy9zdGF0aWMvaW1hZ2VzL2ljb24ucG5nJ30gLz5cbiAgICAgIDxsaW5rIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBzaXplcz1cIjE0NHgxNDRcIiBocmVmPXsgcHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyAnL3N0YXRpYy9pbWFnZXMvaWNvbi5wbmcnfSAvPlxuICAgICAgPGxpbmsgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIHNpemVzPVwiMTUyeDE1MlwiIGhyZWY9eyBwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArICcvc3RhdGljL2ltYWdlcy9pY29uLnBuZyd9IC8+XG4gICAgICA8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCIxODB4MTgwXCIgaHJlZj17IHByb2Nlc3MuZW52LkJBQ0tFTkRfVVJMICsgJy9zdGF0aWMvaW1hZ2VzL2ljb24ucG5nJ30gLz5cbiAgICAgIDxsaW5rIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UvcG5nXCIgaHJlZj17IHByb2Nlc3MuZW52LkJBQ0tFTkRfVVJMICsgJy9zdGF0aWMvaW1hZ2VzL2ljb24ucG5nJ30gLz5cbiAgICAgIDxsaW5rIHJlbD1cInNob3J0Y3V0IGljb25cIiBocmVmPXsgcHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyAnL3N0YXRpYy9pbWFnZXMvZmF2aWNvbi5pY28nfSAvPlxuICAgICAgXG4gICAgICA8bGluayByZWw9XCJtYXNrLWljb25cIiBocmVmPVwiL2Fzc2V0cy9zYWZhcmktcGlubmVkLXRhYi5zdmdcIiBjb2xvcj1cIiM1YmJhZDVcIiAvPlxuICAgICAgPGxpbmsgcmVsPVwibWFuaWZlc3RcIiBocmVmPXsgcHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyAnL3N0YXRpYy9tYW5pZmVzdC5qc29uJ30gLz5cbiAgICAgIFxuICAgICAgPG1ldGEgbmFtZT1cIm1zYXBwbGljYXRpb24tVGlsZUNvbG9yXCIgY29udGVudD1cIiM1NzAwQUVcIiAvPlxuICAgICAgPG1ldGEgbmFtZT1cIm1zYXBwbGljYXRpb24tVGlsZUltYWdlXCIgY29udGVudD17IHByb2Nlc3MuZW52LkJBQ0tFTkRfVVJMICsgJy9zdGF0aWMvaW1hZ2VzL2F2bi5zeXN0ZW1zLm9nLWltYWdlLmpwZyd9IC8+XG4gICAgICA8bWV0YSBuYW1lPVwibXNhcHBsaWNhdGlvbi1jb25maWdcIiBjb250ZW50PXsgcHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyAnL3N0YXRpYy9icm93c2VyY29uZmlnLnhtbCd9IC8+XG4gICAgICA8bWV0YSBuYW1lPVwidGhlbWUtY29sb3JcIiBjb250ZW50PVwiIzU3MDBBRVwiIC8+XG4gICAgICBcbiAgICAgIDxsaW5rIHJlbD0nc3R5bGVzaGVldCcgaHJlZj0naHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC4wLjAtYmV0YS4zL2Nzcy9ib290c3RyYXAubWluLmNzcycgaW50ZWdyaXR5PSdzaGEzODQtWnVnK1FpRG9KT3JaNXQ0bHNzTGR4R2hWcnVyYm1CV29wb0VsK002QmRFZnduQ0padEt4aTFLZ3hVeUpxMTNkeScgY3Jvc3NPcmlnaW49J2Fub255bW91cycgLz5cbiAgICAgIDxsaW5rIHJlbD0nc3R5bGVzaGVldCcgdHlwZT0ndGV4dC9jc3MnIGhyZWY9eyBwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArICcvc3RhdGljL2Nzcy9ucHJvZ3Jlc3MuY3NzJ30gLz5cbiAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9jb2RlLmpxdWVyeS5jb20vanF1ZXJ5LTMuMy4xLm1pbi5qc1wiPjwvc2NyaXB0PlxuICAgIDwvSGVhZD5cbiAgICA8SGVhZGVyIC8+XG4gICAgPHBhZ2U+XG4gICAgICAgIHsgY2hpbGRyZW4gfVxuICAgIDwvcGFnZT5cbiAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIG1pbi13aWR0aDogMzIwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoL3N0YXRpYy9pbWFnZXMvYm9keS1iZy5qcGcpICNGNUY3RjY7XG4gICAgICAgIH1cbiAgICAgICAgcGFnZSB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxODVweCAyMHB4O1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cbiAgICAgICAgcGFnZSwgcHJlIHtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgICAgICAuZnRsIHtcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICB9XG4gICAgICAgIC5mdHIge1xuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjI1cHgpIHtcbiAgICAgICAgfVxuICAgIGB9PC9zdHlsZT5cblxuICAgIDxGb290ZXIgLz5cbiAgPC9pbnRlcmZhY2U+XG4pXG5cbmV4cG9ydCBjbGFzcyBIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbXBvbmVudERpZE1vdW50ICgpIHtcbiAgICAgICAgaWYgKCdzZXJ2aWNlV29ya2VyJyBpbiBuYXZpZ2F0b3IpIHtcbiAgICAgICAgLy8gbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXJcbiAgICAgICAgLy8gICAucmVnaXN0ZXIocHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKycvc2VydmljZS13b3JrZXIuanMnKVxuICAgICAgICAvLyAgIC50aGVuKHJlZ2lzdHJhdGlvbiA9PiB7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZygnc2VydmljZSB3b3JrZXIgcmVnaXN0cmF0aW9uIHN1Y2Nlc3NmdWwnKVxuICAgICAgICAvLyAgIH0pXG4gICAgICAgIC8vICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIC8vICAgICBjb25zb2xlLndhcm4oJ3NlcnZpY2Ugd29ya2VyIHJlZ2lzdHJhdGlvbiBmYWlsZWQnLCBlcnIubWVzc2FnZSlcbiAgICAgICAgLy8gICB9KVxuICAgICAgICB9XG4gICAgICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKHdpbmRvdykuc2Nyb2xsVG9wKCkgPiAwICYmICQod2luZG93KS53aWR0aCgpID4gNTUwID8gJChcImhlYWRlclwiKS5hZGRDbGFzcyhcInJlc2l6ZVwiKSA6ICQoXCJoZWFkZXJcIikucmVtb3ZlQ2xhc3MoXCJyZXNpemVcIilcbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgICAgICQoXCJoZWFkZXIgbmF2IGFcIikuaG92ZXIoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKFwiaGVhZGVyIG5hdnNsaWRlclwiKS5jc3Moe1xuICAgICAgICAgICAgICAgIGxlZnQ6ICQodGhpcykucG9zaXRpb24oKS5sZWZ0ICsgcGFyc2VJbnQoJCh0aGlzKS5jc3MoXCJtYXJnaW5MZWZ0XCIpKSArIFwicHhcIixcbiAgICAgICAgICAgICAgICB3aWR0aDogJCh0aGlzKS53aWR0aCgpICsgXCJweFwiLFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IFwiLjk5OVwiXG4gICAgICAgICAgICB9KVxuICAgICAgICB9LCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQoXCJoZWFkZXIgbmF2c2xpZGVyXCIpLmNzcyhcIm9wYWNpdHlcIiwgXCIwXCIpXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZW5kZXIgKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgICAgICAgICA8bG9nbz48dGV4dD5BVk4gU1lTVEVNUzwvdGV4dD48L2xvZ28+XG4gICAgICAgICAgICAgICAgPG5hdj5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nLycgYXM9eyBwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArIGAvYH0+PGE+SG9tZTwvYT48L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9hYm91dCcgYXM9eyBwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArIGAvYWJvdXRgfT48YT5BYm91dDwvYT48L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy90dm1hemUnIGFzPXsgcHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyBgL3R2bWF6ZWB9PjxhPlRWIE1hemU8L2E+PC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvNDA0JyBhcz17IHByb2Nlc3MuZW52LkJBQ0tFTkRfVVJMICsgYC80MDRgfT48YT40MDQ8L2E+PC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgICAgICAgIDxuYXZ0b2dnbGU+PGJhcj48L2Jhcj48YmFyPjwvYmFyPjxiYXI+PC9iYXI+PC9uYXZ0b2dnbGU+XG4gICAgICAgICAgICAgICAgPG5hdnNsaWRlcj48L25hdnNsaWRlcj5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTAwMDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDkwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBoZWFkZXIgbG9nbyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNnB4IDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNzBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDkwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL3N0YXRpYy9pbWFnZXMvaWNvbi5wbmcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjogZ3JheTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMTUwbXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAxNTBtcyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMTUwbXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAtby10cmFuc2l0aW9uOiBhbGwgMTUwbXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMTUwbXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyIGxvZ286aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1maWx0ZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAtbW96LWZpbHRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC1vLWZpbHRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBoZWFkZXIgbG9nbyB0ZXh0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtaW5saW5lLWJveDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDExMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM1ZjVmNWY7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiA2MHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlciBuYXYge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyIG5hdiBhIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDI1cHggMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZDlkOWQ5O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlciBuYXYgYTpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzg1MDBGRjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBoZWFkZXIgbmF2dG9nZ2xlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0NXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBoZWFkZXIgbmF2dG9nZ2xlIGJhciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2FhYTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA3cHggMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyIG5hdnRvZ2dsZTpob3ZlciBiYXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNiYzczZmY7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyIG5hdnNsaWRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiA0cHggc29saWQgIzg1MDBGRjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogNTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMjUwbXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAyNTBtcyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMjUwbXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAtby10cmFuc2l0aW9uOiBhbGwgMjUwbXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMjUwbXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MjVweCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDU4cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXIgbG9nbyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogY2FsYyg1MCUgLSA4NXB4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWZpbHRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtbW96LWZpbHRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtby1maWx0ZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyIG5hdiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlciBuYXZ0b2dnbGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGb290ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbXBvbmVudERpZE1vdW50ICgpIHtcbiAgICAgICAgXG4gICAgfVxuICAgIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGZvb3Rlcj5cbiAgICAgICAgICAgIDxsaWdodC1yaWdodD48L2xpZ2h0LXJpZ2h0PlxuICAgICAgICAgICAgPHZlcnNpb24gY2xhc3NOYW1lPVwiZnRsXCI+dmVyc2lvbjogPGl0ZW0+Mi4xLjAxPC9pdGVtPjwvdmVyc2lvbj5cbiAgICAgICAgICAgIDxpbmZvcyBjbGFzc05hbWU9XCJmdGxcIj5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9hZG1pbi5hdm4uc3lzdGVtcy92MS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj48bG9naW4+8J+UkCBDTElFTlQgTE9HSU48L2xvZ2luPjwvYT4gfCA8Y2xpY2tpdGVtPjxpdGVtPkxPQ0FMOjwvaXRlbT4gV09STERXSURFPC9jbGlja2l0ZW0+IHwgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9hdm5zeXN0ZW1zXCIgdGFyZ2V0PVwiX2JsYW5rXCI+PGl0ZW0+R0lUSFVCLzwvaXRlbT5BVk5TWVNURU1TPC9hPiB8IDxhIGhyZWY9XCJtYWlsdG86bXlhcHBAYXZuLnN5c3RlbXNcIj48aXRlbT5FLU1BSUw6PC9pdGVtPiBDT05UQUNUQEFWTi5TWVNURU1TPC9hPlxuICAgICAgICAgICAgPC9pbmZvcz5cbiAgICAgICAgICAgIDxsYW5ndWFnZSBjbGFzc05hbWU9XCJmdHJcIj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmbGFnLWljb24gZmxhZy1pY29uLXVzIHNlbGVjdGVkIGZ0clwiPjwvaT5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48YT5FbmdsaXNoPGkgY2xhc3NOYW1lPVwiZmxhZy1pY29uIGZsYWctaWNvbi11c1wiPjwvaT48L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImRpc2FibGVcIj48YT5TcGFuaXNoPGkgY2xhc3NOYW1lPVwiZmxhZy1pY29uIGZsYWctaWNvbi1lc1wiPjwvaT48L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImRpc2FibGVcIj48YT5GcmVuY2g8aSBjbGFzc05hbWU9XCJmbGFnLWljb24gZmxhZy1pY29uLWZyXCI+PC9pPjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZGlzYWJsZVwiPjxhPlBvcnR1Z3Vlc2U8aSBjbGFzc05hbWU9XCJmbGFnLWljb24gZmxhZy1pY29uLWJyXCI+PC9pPjwvYT48L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2xhbmd1YWdlPlxuICAgICAgICAgICAgPGNvcHlyaWdodCBjbGFzc05hbWU9XCJmdHJcIj5Db3B5cmlnaHQgPGl0ZW0+MjAxNzwvaXRlbT48L2NvcHlyaWdodD5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICBmb290ZXIge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoLi9zdGF0aWMvaW1hZ2VzL2Zvb3Rlci5qcGcpO1xuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJGcmFua2xpblwiLGFyaWFsLHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTAwMDA7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzdweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICAgICAgd2Via2l0LWJveC1zaGFkb3c6IDAgLTFweCAxMHB4IDAgcmdiKDAsIDAsIDApO1xuICAgICAgICAgICAgICAgICAgICAtbW96LWJveC1zaGFkb3c6IDAgLTFweCAxMHB4IDAgcmdiKDAsIDAsIDApO1xuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIC0xcHggMTBweCAwIHJnYigwLCAwLCAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9vdGVyIGNvcHlyaWdodCwgZm9vdGVyIHZlcnNpb24ge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMnB4IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2JjNzRmZjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9vdGVyIGNvcHlyaWdodCA+IGl0ZW0sIGZvb3RlciB2ZXJzaW9uID4gaXRlbSwgZm9vdGVyIGluZm9zIGl0ZW0ge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI0FCQTQ5QTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9vdGVyIGluZm9zIHtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogY2FsYyg1MCUgLSAyMjFweCk7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzc3NkU2MztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmb290ZXIgaW5mb3MgYSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzc3NkU2MztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmb290ZXIgaW5mb3MgPiBhID4gbG9naW4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNkYzlkMDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZm9vdGVyIGluZm9zIGE6aG92ZXIsIGZvb3RlciBpbmZvcyBhOmhvdmVyIGxvZ2luLCBmb290ZXIgaW5mb3MgY2xpY2tpdGVtOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjYmM3NGZmO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9vdGVyIGxhbmd1YWdlIGkuZmxhZy1pY29uIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA3cHggMTVweCAwcHggMHB4O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9vdGVyIGxhbmd1YWdlIGkuZmxhZy1pY29uLXVzIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vc3RhdGljL2ltYWdlcy9mbGFncy91c2EucG5nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9vdGVyIGxhbmd1YWdlIGkuZmxhZy1pY29uLWVzIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vc3RhdGljL2ltYWdlcy9mbGFncy9zcGFpbi5wbmcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb290ZXIgbGFuZ3VhZ2UgaS5mbGFnLWljb24tZnIge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9zdGF0aWMvaW1hZ2VzL2ZsYWdzL2ZyYW5jZS5wbmcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb290ZXIgbGFuZ3VhZ2UgaS5mbGFnLWljb24tYnIge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9zdGF0aWMvaW1hZ2VzL2ZsYWdzL2JyYXppbC5wbmcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb290ZXIgbGFuZ3VhZ2U6aG92ZXIgdWwge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAxNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb290ZXIgbGFuZ3VhZ2UgdWwge1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICMwMzFjNDU7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAjMDMxYzQ1O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMTVweCA1cHggMDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzI5MjgyNjtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvb3RlciBsYW5ndWFnZSB1bCBsaSB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9vdGVyIGxhbmd1YWdlIHVsIGxpLmRpc2FibGUgYSB7XG4gICAgICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzgyODA3ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9vdGVyIGxhbmd1YWdlIHVsIGxpLmRpc2FibGUgYSA+IGkuZmxhZy1pY29uIHtcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1maWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvb3RlciBsYW5ndWFnZSB1bCBsaSBhIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDEwcHggMCAxNXB4O1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNiYzc0ZmY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvb3RlciBsYW5ndWFnZSB1bCBsaSBhOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvb3RlciBsYW5ndWFnZSB1bCBsaSBhID4gaS5mbGFnLWljb24ge1xuICAgICAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk0MHB4KSB7XG4gICAgICAgICAgICAgICAgICAgIGZvb3RlciBpbmZvcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MjVweCkge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9mb290ZXI+XG4gICAgKX1cbn0iXX0= */\n/*@ sourceURL=/home/ubuntu/workspace/estudo/next/components/interface.js */",
        __self: this
      }));
    }
  }]);

  return Footer;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/***/ })

})
//# sourceMappingURL=_error.js.a2de8f0cb8b7e07d756b.hot-update.js.map