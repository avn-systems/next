webpackHotUpdate("static/development/pages/index.js",{

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
}); // Router.events.on('routeChangeComplete', () => NProgress.done())
// Router.events.on('routeChangeError', () => NProgress.done())

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
    className: "jsx-4143779597",
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
    className: "jsx-4143779597",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    charSet: "utf-8",
    className: "jsx-4143779597",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    className: "jsx-4143779597",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "author",
    content: "Allan Avelar - https://allanavelar.com/",
    className: "jsx-4143779597",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    property: "og:site_name",
    content: ogSiteName,
    className: "jsx-4143779597",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    property: "og:title",
    content: ogTitle,
    className: "jsx-4143779597",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    property: "og:url",
    content: ogUrl,
    className: "jsx-4143779597",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    property: "og:type",
    content: ogType,
    className: "jsx-4143779597",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    property: "og:description",
    content: ogDescription,
    className: "jsx-4143779597",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    property: "og:image",
    content: "" + ogImage,
    className: "jsx-4143779597",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "twitter:card",
    content: "summary_large_image",
    className: "jsx-4143779597",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "twitter:site",
    content: twitterSite,
    className: "jsx-4143779597",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "twitter:creator",
    content: twitterCreator,
    className: "jsx-4143779597",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "canonical",
    href: canonical,
    className: "jsx-4143779597",
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
    className: "jsx-4143779597",
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
    className: "jsx-4143779597",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "apple-touch-icon",
    sizes: "114x114",
    href: "/static/images/icon.png",
    className: "jsx-4143779597",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "apple-touch-icon",
    sizes: "120x120",
    href: "/static/images/icon.png",
    className: "jsx-4143779597",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "apple-touch-icon",
    sizes: "144x144",
    href: "/static/images/icon.png",
    className: "jsx-4143779597",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "apple-touch-icon",
    sizes: "152x152",
    href: "/static/images/icon.png",
    className: "jsx-4143779597",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/static/images/icon.png",
    className: "jsx-4143779597",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "icon",
    type: "image/png",
    href: "/static/images/icon.png",
    className: "jsx-4143779597",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "shortcut icon",
    href: "/static/images/favicon.ico",
    className: "jsx-4143779597",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "mask-icon",
    href: "/assets/safari-pinned-tab.svg",
    color: "#5bbad5",
    className: "jsx-4143779597",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "manifest",
    href: "/static/manifest.json",
    className: "jsx-4143779597",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "msapplication-TileColor",
    content: "#5700AE",
    className: "jsx-4143779597",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "msapplication-TileImage",
    content: "/static/images/avn.systems.og-image.jpg",
    className: "jsx-4143779597",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "msapplication-config",
    content: "/static/browserconfig.xml",
    className: "jsx-4143779597",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "theme-color",
    content: "#5700AE",
    className: "jsx-4143779597",
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
    className: "jsx-4143779597",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "/static/css/nprogress.css",
    className: "jsx-4143779597",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("script", {
    defer: true,
    src: "https://code.jquery.com/jquery-3.3.1.min.js",
    className: "jsx-4143779597",
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
    className: "jsx-4143779597",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, children), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("menuhider", {
    className: "jsx-4143779597",
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
    className: "jsx-4143779597",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("bar", {
    className: "jsx-4143779597",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "4143779597",
    css: "body{min-width:320px;background:url(".concat("", "/static/images/body-bg.jpg) #F5F7F6;}page{padding:185px 20px;display:block;display:none;color:white;}pre code{color:white!important;}.ftl{float:left;}.ftr{float:right;}::-webkit-scrollbar{display:none;}body.left-menu leftmenu{left:0;}body.left-menu header navtoggle{left:350px;}body.loaded menuhider{-webkit-transition:display 1s ease 1s;transition:display 1s ease 1s;display:none;opacity:0;}.nprogress-busy body.loaded menuhider,body.loaded.left-menu menuhider{display:block;opacity:1;}body.loaded pageloader{display:none;}menuhider{background-color:rgba(0,0,0,.5);pointer-events:all;position:fixed;display:block;z-index:1030;opacity:1;bottom:0;right:0;left:0;top:0;-webkit-transition:opacity 1s ease 0s;-moz-transition:opacity 1s ease 0s;-ms-transition:opacity 1s ease 0s;-o-transition:opacity 1s ease 0s;-webkit-transition:opacity 1s ease 0s;transition:opacity 1s ease 0s;}.nprogress-busy body.loaded pageloader{display:block;}pageloader{margin:-15px 0 0 -100px;border-radius:8px;background:#000;z-index:9999999;position:fixed;width:200px;height:30px;left:50%;top:50%;}pageloader bar{margin:-2px 0 0 -87px;-webkit-animation:gradtranslate 2s infinite linear;animation:gradtranslate 2s infinite linear;background-image:-webkit-gradient(linear,left top,right top,color-stop(0%,white),color-stop(50%,#8500FF),color-stop(100%,white));background-size:400px 1px;background-color:#8500FF;border-radius:5px;position:absolute;width:174px;opacity:.8;height:4px;left:50%;top:50%;}body.loaded leftmenu,body.loaded header,body.loaded footer,body.loaded page{display:block;}@media screen and (max-width:399px){body.left-menu leftmenu,leftmenu menuscroll{width:calc(100% - 69px)!important;max-width:330px;min-width:260px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VidW50dS93b3Jrc3BhY2UvZXN0dWRvL25leHQvY29tcG9uZW50cy9pbnRlcmZhY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0Z1QixBQUc2QixBQUlHLEFBTUcsQUFHWCxBQUdDLEFBR0MsQUFJTixBQUdJLEFBR21CLEFBTWhCLEFBSUQsQUFHbUIsQUFrQmxCLEFBR1UsQUFXRixBQWtCUixBQUt3QixPQXpFMUMsSUFWQSxBQWFBLENBVkEsQ0FHQSxBQW9CQSxDQUpjLEFBeUJkLEFBZ0NBLEVBNUZtRixHQUlqRSxHQU1sQixBQWdFK0MsRUF0Qy9DLEFBMkJzQixRQXJCQyxDQXJDTixDQTRGTyxRQWpDSixJQTFESixJQTRGUSxDQXZETCxPQXBDbkIsQUEwRG9CLFFBckJGLEFBdURkLEVBdEVhLE1BcUNFLE1BckJGLENBZkgsUUFxQ0UsRUFwQ2hCLEVBZWMsRUE3Q2QsTUFtRWdCLEVBckJILFNBQ0QsQ0FxQkMsR0FNd0gsSUExQjFILEVBcUJDLEtBcEJGLEdBcUJWLEdBcEIwQyxzQ0FDSCxtQ0FDRCxrQ0FDRCxLQXNCUCwwQkFDRCxFQXRCSyx1QkF1Qlosa0JBQ0Esa0JBQ04sU0F4QmhCLEdBeUJlLFdBQ0EsV0FDRixTQUNELFFBQ1oiLCJmaWxlIjoiL2hvbWUvdWJ1bnR1L3dvcmtzcGFjZS9lc3R1ZG8vbmV4dC9jb21wb25lbnRzL2ludGVyZmFjZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qZ2xvYmFsICQgbmF2aWdhdG9yKi9cblxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5cbmltcG9ydCBOUHJvZ3Jlc3MgZnJvbSAnbnByb2dyZXNzJ1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcblxuUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VTdGFydCcsICh1cmwpID0+IHtcbiAgY29uc29sZS5sb2coYExvYWRpbmc6ICR7dXJsfWApXG4gIE5Qcm9ncmVzcy5zdGFydCgpXG59KVxuLy8gUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VDb21wbGV0ZScsICgpID0+IE5Qcm9ncmVzcy5kb25lKCkpXG4vLyBSb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUVycm9yJywgKCkgPT4gTlByb2dyZXNzLmRvbmUoKSlcblxuZXhwb3J0IGRlZmF1bHQgKHsgY2hpbGRyZW4sXG4gICAgdGl0bGUgPSAnVGhpcyBpcyB0aGUgZGVmYXVsdCB0aXRsZScsXG4gICAgXG4gICAgb2dTaXRlTmFtZSA9IFwiYXZuLnN5c3RlbXNcIiwgb2dUaXRsZSA9IFwiV2Vic2l0ZSB8IGF2bi5zeXN0ZW1zXCIsXG4gICAgb2dVcmwgPSBcImh0dHBzOi8vYXZuLnN5c3RlbXNcIiwgb2dUeXBlID0gXCJhcnRpY2xlXCIsXG4gICAgb2dEZXNjcmlwdGlvbiA9IFwiV2Vic2l0ZSBjcmVhdGVkIHdpdGggbmV4dC5qcyBvcHRtaXplZCBhcyBhIFBXQVwiLFxuICAgIG9nSW1hZ2UgPSAnL3N0YXRpYy9pbWFnZXMvYXZuLnN5c3RlbXMub2ctaW1hZ2UuanBnJyxcbiAgICBcbiAgICB0d2l0dGVyU2l0ZSA9IFwiQGF2bi5zeXN0ZW1zXCIsXG4gICAgdHdpdHRlckNyZWF0b3IgPSBcIkBhdm4uc3lzdGVtc1wiLFxuICAgIFxuICAgIGNhbm9uaWNhbCA9IFwiaHR0cHM6Ly9hdm4uc3lzdGVtc1wiLFxuICAgIGZlZWRYbWwgPSBcImh0dHBzOi8vYXZuLnN5c3RlbXMvZmVlZC54bWxcIixcbiAgICBmZWVkSnNvbiA9IFwiaHR0cHM6Ly9hdm4uc3lzdGVtc20vZmVlZC5qc29uXCJcbiAgfSkgPT4gKFxuICA8aW50ZXJmYWNlPlxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPnsgdGl0bGUgfTwvdGl0bGU+XG4gICAgICA8bWV0YSBjaGFyU2V0PSd1dGYtOCcgLz5cbiAgICAgIDxtZXRhIG5hbWU9J3ZpZXdwb3J0JyBjb250ZW50PSdpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoJyAvPlxuICAgICAgPG1ldGEgbmFtZT1cImF1dGhvclwiIGNvbnRlbnQ9XCJBbGxhbiBBdmVsYXIgLSBodHRwczovL2FsbGFuYXZlbGFyLmNvbS9cIiAvPlxuICAgICAgXG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnNpdGVfbmFtZVwiIGNvbnRlbnQ9eyBvZ1NpdGVOYW1lIH0gLz5cbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PXsgb2dUaXRsZSB9IC8+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnVybFwiIGNvbnRlbnQ9eyBvZ1VybCB9IC8+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnR5cGVcIiBjb250ZW50PXsgb2dUeXBlIH0gLz5cbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PXsgb2dEZXNjcmlwdGlvbiB9IC8+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD17IHByb2Nlc3MuZW52LkJBQ0tFTkRfVVJMICsgb2dJbWFnZSB9IC8+XG4gICAgXG4gICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpjYXJkXCIgY29udGVudD1cInN1bW1hcnlfbGFyZ2VfaW1hZ2VcIiAvPlxuICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6c2l0ZVwiIGNvbnRlbnQ9eyB0d2l0dGVyU2l0ZSB9IC8+XG4gICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpjcmVhdG9yXCIgY29udGVudD17IHR3aXR0ZXJDcmVhdG9yIH0gLz5cbiAgICBcbiAgICAgIDxsaW5rIHJlbD1cImNhbm9uaWNhbFwiIGhyZWY9eyBjYW5vbmljYWwgfSAvPlxuICAgICAgPGxpbmsgcmVsPVwiYWx0ZXJuYXRlXCIgdHlwZT1cImFwcGxpY2F0aW9uL3Jzcyt4bWxcIiB0aXRsZT17IG9nVGl0bGUgfSBocmVmPXsgZmVlZFhtbCB9IC8+XG4gICAgICA8bGluayByZWw9XCJhbHRlcm5hdGVcIiB0eXBlPVwiYXBwbGljYXRpb24vanNvblwiIHRpdGxlPXsgb2dUaXRsZSB9IGhyZWY9eyBmZWVkSnNvbiB9IC8+XG5cbiAgICAgIDxsaW5rIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBzaXplcz1cIjExNHgxMTRcIiBocmVmPXsgcHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyAnL3N0YXRpYy9pbWFnZXMvaWNvbi5wbmcnfSAvPlxuICAgICAgPGxpbmsgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIHNpemVzPVwiMTIweDEyMFwiIGhyZWY9eyBwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArICcvc3RhdGljL2ltYWdlcy9pY29uLnBuZyd9IC8+XG4gICAgICA8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCIxNDR4MTQ0XCIgaHJlZj17IHByb2Nlc3MuZW52LkJBQ0tFTkRfVVJMICsgJy9zdGF0aWMvaW1hZ2VzL2ljb24ucG5nJ30gLz5cbiAgICAgIDxsaW5rIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBzaXplcz1cIjE1MngxNTJcIiBocmVmPXsgcHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyAnL3N0YXRpYy9pbWFnZXMvaWNvbi5wbmcnfSAvPlxuICAgICAgPGxpbmsgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIHNpemVzPVwiMTgweDE4MFwiIGhyZWY9eyBwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArICcvc3RhdGljL2ltYWdlcy9pY29uLnBuZyd9IC8+XG4gICAgICA8bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3BuZ1wiIGhyZWY9eyBwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArICcvc3RhdGljL2ltYWdlcy9pY29uLnBuZyd9IC8+XG4gICAgICA8bGluayByZWw9XCJzaG9ydGN1dCBpY29uXCIgaHJlZj17IHByb2Nlc3MuZW52LkJBQ0tFTkRfVVJMICsgJy9zdGF0aWMvaW1hZ2VzL2Zhdmljb24uaWNvJ30gLz5cbiAgICAgIFxuICAgICAgPGxpbmsgcmVsPVwibWFzay1pY29uXCIgaHJlZj1cIi9hc3NldHMvc2FmYXJpLXBpbm5lZC10YWIuc3ZnXCIgY29sb3I9XCIjNWJiYWQ1XCIgLz5cbiAgICAgIDxsaW5rIHJlbD1cIm1hbmlmZXN0XCIgaHJlZj17IHByb2Nlc3MuZW52LkJBQ0tFTkRfVVJMICsgJy9zdGF0aWMvbWFuaWZlc3QuanNvbid9IC8+XG4gICAgICBcbiAgICAgIDxtZXRhIG5hbWU9XCJtc2FwcGxpY2F0aW9uLVRpbGVDb2xvclwiIGNvbnRlbnQ9XCIjNTcwMEFFXCIgLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJtc2FwcGxpY2F0aW9uLVRpbGVJbWFnZVwiIGNvbnRlbnQ9eyBwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArICcvc3RhdGljL2ltYWdlcy9hdm4uc3lzdGVtcy5vZy1pbWFnZS5qcGcnfSAvPlxuICAgICAgPG1ldGEgbmFtZT1cIm1zYXBwbGljYXRpb24tY29uZmlnXCIgY29udGVudD17IHByb2Nlc3MuZW52LkJBQ0tFTkRfVVJMICsgJy9zdGF0aWMvYnJvd3NlcmNvbmZpZy54bWwnfSAvPlxuICAgICAgPG1ldGEgbmFtZT1cInRoZW1lLWNvbG9yXCIgY29udGVudD1cIiM1NzAwQUVcIiAvPlxuICAgICAgXG4gICAgICA8bGluayBkZWZlciByZWw9J3N0eWxlc2hlZXQnIGhyZWY9J2h0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuMC4wLWJldGEuMy9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnIGludGVncml0eT0nc2hhMzg0LVp1ZytRaURvSk9yWjV0NGxzc0xkeEdoVnJ1cmJtQldvcG9FbCtNNkJkRWZ3bkNKWnRLeGkxS2d4VXlKcTEzZHknIGNyb3NzT3JpZ2luPSdhbm9ueW1vdXMnIC8+XG4gICAgICA8bGluayByZWw9J3N0eWxlc2hlZXQnIHR5cGU9J3RleHQvY3NzJyBocmVmPXsgcHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyAnL3N0YXRpYy9jc3MvbnByb2dyZXNzLmNzcyd9IC8+XG4gICAgICA8c2NyaXB0IGRlZmVyIHNyYz1cImh0dHBzOi8vY29kZS5qcXVlcnkuY29tL2pxdWVyeS0zLjMuMS5taW4uanNcIj48L3NjcmlwdD5cbiAgICA8L0hlYWQ+XG4gICAgPEhlYWRlciAvPlxuICAgIDxMZWZ0TWVudSAvPlxuICAgIDxwYWdlPlxuICAgICAgICB7IGNoaWxkcmVuIH1cbiAgICA8L3BhZ2U+XG4gICAgPG1lbnVoaWRlcj48L21lbnVoaWRlcj5cbiAgICA8Rm9vdGVyIC8+XG4gICAgPHBhZ2Vsb2FkZXI+PGJhcj48L2Jhcj48L3BhZ2Vsb2FkZXI+XG4gICAgXG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDMyMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKCR7cHJvY2Vzcy5lbnYuQkFDS0VORF9VUkx9L3N0YXRpYy9pbWFnZXMvYm9keS1iZy5qcGcpICNGNUY3RjY7XG4gICAgICAgIH1cbiAgICAgICAgcGFnZSB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxODVweCAyMHB4O1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG4gICAgICAgIHByZSBjb2RlIHtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZSFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgICAgLmZ0bCB7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgfVxuICAgICAgICAuZnRyIHtcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgfVxuICAgICAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGJvZHkubGVmdC1tZW51IGxlZnRtZW51IHtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIH1cbiAgICAgICAgYm9keS5sZWZ0LW1lbnUgaGVhZGVyIG5hdnRvZ2dsZSB7XG4gICAgICAgICAgICBsZWZ0OiAzNTBweDtcbiAgICAgICAgfVxuICAgICAgICBib2R5LmxvYWRlZCBtZW51aGlkZXIge1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogZGlzcGxheSAxcyBlYXNlIDFzO1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIH1cbiAgICAgICAgLm5wcm9ncmVzcy1idXN5IGJvZHkubG9hZGVkIG1lbnVoaWRlcixcbiAgICAgICAgYm9keS5sb2FkZWQubGVmdC1tZW51IG1lbnVoaWRlciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIH1cbiAgICAgICAgYm9keS5sb2FkZWQgcGFnZWxvYWRlciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICAgIG1lbnVoaWRlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC41KTtcbiAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHotaW5kZXg6IDEwMzA7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2UgMHM7XG4gICAgICAgICAgICAtbW96LXRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZSAwcztcbiAgICAgICAgICAgIC1tcy10cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2UgMHM7XG4gICAgICAgICAgICAtby10cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2UgMHM7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2UgMHM7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5ucHJvZ3Jlc3MtYnVzeSBib2R5LmxvYWRlZCBwYWdlbG9hZGVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG4gICAgICAgIHBhZ2Vsb2FkZXIge1xuICAgICAgICAgICAgbWFyZ2luOiAtMTVweCAwIDAgLTEwMHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwMDtcbiAgICAgICAgICAgIHotaW5kZXg6IDk5OTk5OTk7XG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgfVxuICAgICAgICBwYWdlbG9hZGVyIGJhciB7XG4gICAgICAgICAgICBtYXJnaW46IC0ycHggMCAwIC04N3B4O1xuICAgICAgICAgICAgYW5pbWF0aW9uOiBncmFkdHJhbnNsYXRlIDJzIGluZmluaXRlIGxpbmVhcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLGxlZnQgdG9wLHJpZ2h0IHRvcCxjb2xvci1zdG9wKDAlLHdoaXRlKSxjb2xvci1zdG9wKDUwJSwjODUwMEZGKSxjb2xvci1zdG9wKDEwMCUsd2hpdGUpKTs7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDQwMHB4IDFweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM4NTAwRkY7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB3aWR0aDogMTc0cHg7XG4gICAgICAgICAgICBvcGFjaXR5OiAuODtcbiAgICAgICAgICAgIGhlaWdodDogNHB4O1xuICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGJvZHkubG9hZGVkIGxlZnRtZW51LFxuICAgICAgICBib2R5LmxvYWRlZCBoZWFkZXIsXG4gICAgICAgIGJvZHkubG9hZGVkIGZvb3RlcixcbiAgICAgICAgYm9keS5sb2FkZWQgcGFnZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzk5cHgpIHtcbiAgICAgICAgICAgIGJvZHkubGVmdC1tZW51IGxlZnRtZW51LCBsZWZ0bWVudSBtZW51c2Nyb2xsIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gNjlweCkhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMzMwcHg7XG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiAyNjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9pbnRlcmZhY2U+XG4pXG5cbmV4cG9ydCBjbGFzcyBIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbXBvbmVudERpZE1vdW50ICgpIHtcbiAgICAgICAgaWYgKCdzZXJ2aWNlV29ya2VyJyBpbiBuYXZpZ2F0b3IpIHtcbiAgICAgICAgLy8gbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXJcbiAgICAgICAgLy8gICAucmVnaXN0ZXIocHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKycvc2VydmljZS13b3JrZXIuanMnKVxuICAgICAgICAvLyAgIC50aGVuKHJlZ2lzdHJhdGlvbiA9PiB7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZygnc2VydmljZSB3b3JrZXIgcmVnaXN0cmF0aW9uIHN1Y2Nlc3NmdWwnKVxuICAgICAgICAvLyAgIH0pXG4gICAgICAgIC8vICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIC8vICAgICBjb25zb2xlLndhcm4oJ3NlcnZpY2Ugd29ya2VyIHJlZ2lzdHJhdGlvbiBmYWlsZWQnLCBlcnIubWVzc2FnZSlcbiAgICAgICAgLy8gICB9KVxuICAgICAgICB9XG4gICAgICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKHdpbmRvdykuc2Nyb2xsVG9wKCkgPiAwICYmICQod2luZG93KS53aWR0aCgpID4gNTUwID8gJChcImhlYWRlclwiKS5hZGRDbGFzcyhcInJlc2l6ZVwiKSA6ICQoXCJoZWFkZXJcIikucmVtb3ZlQ2xhc3MoXCJyZXNpemVcIilcbiAgICAgICAgfSlcbiAgICAgICAgJCh3aW5kb3cpLm9uKCdsb2FkJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoXCJsb2FkZWRcIilcbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgICAgICQoXCJoZWFkZXIgbmF2IGFcIikuaG92ZXIoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKFwiaGVhZGVyIG5hdnNsaWRlclwiKS5jc3Moe1xuICAgICAgICAgICAgICAgIGxlZnQ6ICQodGhpcykucG9zaXRpb24oKS5sZWZ0ICsgcGFyc2VJbnQoJCh0aGlzKS5jc3MoXCJtYXJnaW5MZWZ0XCIpKSArIFwicHhcIixcbiAgICAgICAgICAgICAgICB3aWR0aDogJCh0aGlzKS53aWR0aCgpICsgXCJweFwiLFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IFwiLjk5OVwiXG4gICAgICAgICAgICB9KVxuICAgICAgICB9LCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQoXCJoZWFkZXIgbmF2c2xpZGVyXCIpLmNzcyhcIm9wYWNpdHlcIiwgXCIwXCIpXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZW5kZXIgKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgICAgICAgICA8bG9nbz48dGV4dD5BVk4gU1lTVEVNUzwvdGV4dD48L2xvZ28+XG4gICAgICAgICAgICAgICAgPG5hdj5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nLycgYXM9eyBwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArIGAvYH0+PGE+SG9tZTwvYT48L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9hYm91dCcgYXM9eyBwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArIGAvYWJvdXRgfT48YT5BYm91dDwvYT48L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy90dm1hemUnIGFzPXsgcHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyBgL3R2bWF6ZWB9PjxhPlRWIE1hemU8L2E+PC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvNDA0JyBhcz17IHByb2Nlc3MuZW52LkJBQ0tFTkRfVVJMICsgYC80MDRgfT48YT40MDQ8L2E+PC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgICAgICAgIDxuYXZ0b2dnbGU+PGJhcj48L2Jhcj48YmFyPjwvYmFyPjxiYXI+PC9iYXI+PC9uYXZ0b2dnbGU+XG4gICAgICAgICAgICAgICAgPG5hdnNsaWRlcj48L25hdnNsaWRlcj5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTAwMDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA5MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyIGxvZ28ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTZweCAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTcwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiA5MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTH0vc3RhdGljL2ltYWdlcy9pY29uLnBuZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBncmF5O1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAxNTBtcyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDE1MG1zIGVhc2UtaW4tb3V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgLW1zLXRyYW5zaXRpb246IGFsbCAxNTBtcyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC1vLXRyYW5zaXRpb246IGFsbCAxNTBtcyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAxNTBtcyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBoZWFkZXIgbG9nbzpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWZpbHRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC1tb3otZmlsdGVyOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgLW8tZmlsdGVyOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBub25lO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlciBsb2dvIHRleHQge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1pbmxpbmUtYm94O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMTEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzVmNWY1ZjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDYwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyIG5hdiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBoZWFkZXIgbmF2IGEge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMjVweCAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNkOWQ5ZDk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyIG5hdiBhOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjODUwMEZGO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlciBuYXZ0b2dnbGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQ1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlciBuYXZ0b2dnbGUgYmFyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjYWFhO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDdweCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBoZWFkZXIgbmF2dG9nZ2xlOmhvdmVyIGJhciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2JjNzNmZjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBoZWFkZXIgbmF2c2xpZGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjODUwMEZGO1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAyNTBtcyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDI1MG1zIGVhc2UtaW4tb3V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgLW1zLXRyYW5zaXRpb246IGFsbCAyNTBtcyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC1vLXRyYW5zaXRpb246IGFsbCAyNTBtcyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAyNTBtcyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYyNXB4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNThweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlciBsb2dvIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBjYWxjKDUwJSAtIDg1cHgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtZmlsdGVyOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC1tb3otZmlsdGVyOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC1vLWZpbHRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAxcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXIgbmF2IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyIG5hdnRvZ2dsZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZvb3RlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuICAgICAgICBcbiAgICB9XG4gICAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8Zm9vdGVyPlxuICAgICAgICAgICAgPGxpZ2h0LXJpZ2h0PjwvbGlnaHQtcmlnaHQ+XG4gICAgICAgICAgICA8dmVyc2lvbiBjbGFzc05hbWU9XCJmdGxcIj52ZXJzaW9uOiA8aXRlbT4yLjEuMDE8L2l0ZW0+PC92ZXJzaW9uPlxuICAgICAgICAgICAgPGluZm9zIGNsYXNzTmFtZT1cImZ0bFwiPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2FkbWluLmF2bi5zeXN0ZW1zL3YxL1wiIHRhcmdldD1cIl9ibGFua1wiPjxsb2dpbj7wn5SQIENMSUVOVCBMT0dJTjwvbG9naW4+PC9hPiB8IDxjbGlja2l0ZW0+PGl0ZW0+TE9DQUw6PC9pdGVtPiBXT1JMRFdJREU8L2NsaWNraXRlbT4gfCA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2F2bnN5c3RlbXNcIiB0YXJnZXQ9XCJfYmxhbmtcIj48aXRlbT5HSVRIVUIvPC9pdGVtPkFWTlNZU1RFTVM8L2E+IHwgPGEgaHJlZj1cIm1haWx0bzpteWFwcEBhdm4uc3lzdGVtc1wiPjxpdGVtPkUtTUFJTDo8L2l0ZW0+IENPTlRBQ1RAQVZOLlNZU1RFTVM8L2E+XG4gICAgICAgICAgICA8L2luZm9zPlxuICAgICAgICAgICAgPGxhbmd1YWdlIGNsYXNzTmFtZT1cImZ0clwiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZsYWctaWNvbiBmbGFnLWljb24tdXMgc2VsZWN0ZWQgZnRyXCI+PC9pPlxuICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxhPkVuZ2xpc2g8aSBjbGFzc05hbWU9XCJmbGFnLWljb24gZmxhZy1pY29uLXVzXCI+PC9pPjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZGlzYWJsZVwiPjxhPlNwYW5pc2g8aSBjbGFzc05hbWU9XCJmbGFnLWljb24gZmxhZy1pY29uLWVzXCI+PC9pPjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZGlzYWJsZVwiPjxhPkZyZW5jaDxpIGNsYXNzTmFtZT1cImZsYWctaWNvbiBmbGFnLWljb24tZnJcIj48L2k+PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkaXNhYmxlXCI+PGE+UG9ydHVndWVzZTxpIGNsYXNzTmFtZT1cImZsYWctaWNvbiBmbGFnLWljb24tYnJcIj48L2k+PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvbGFuZ3VhZ2U+XG4gICAgICAgICAgICA8Y29weXJpZ2h0IGNsYXNzTmFtZT1cImZ0clwiPkNvcHlyaWdodCA8aXRlbT4yMDE3PC9pdGVtPjwvY29weXJpZ2h0PlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIGZvb3RlciB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgke3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMfS9zdGF0aWMvaW1hZ2VzL2Zvb3Rlci5qcGcpO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwMDAwO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM3cHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICAgICAgICAgIHdlYmtpdC1ib3gtc2hhZG93OiAwIC0xcHggMTBweCAwIHJnYigwLCAwLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgLW1vei1ib3gtc2hhZG93OiAwIC0xcHggMTBweCAwIHJnYigwLCAwLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAtMXB4IDEwcHggMCByZ2IoMCwgMCwgMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvb3RlciBjb3B5cmlnaHQsIGZvb3RlciB2ZXJzaW9uIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTJweCAxNXB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNiYzc0ZmY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvb3RlciBjb3B5cmlnaHQgPiBpdGVtLCBmb290ZXIgdmVyc2lvbiA+IGl0ZW0sIGZvb3RlciBpbmZvcyBpdGVtIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNBQkE0OUE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvb3RlciBpbmZvcyB7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IGNhbGMoNTAlIC0gMjIxcHgpO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM3NzZFNjM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZm9vdGVyIGluZm9zIGEge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM3NzZFNjM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZm9vdGVyIGluZm9zID4gYSA+IGxvZ2luIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZGM5ZDAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZvb3RlciBpbmZvcyBhOmhvdmVyLCBmb290ZXIgaW5mb3MgYTpob3ZlciBsb2dpbiwgZm9vdGVyIGluZm9zIGNsaWNraXRlbTpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2JjNzRmZjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvb3RlciBsYW5ndWFnZSBpLmZsYWctaWNvbiB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogN3B4IDE1cHggMHB4IDBweDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvb3RlciBsYW5ndWFnZSBpLmZsYWctaWNvbi11cyB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMfS9zdGF0aWMvaW1hZ2VzL2ZsYWdzL3VzYS5wbmcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb290ZXIgbGFuZ3VhZ2UgaS5mbGFnLWljb24tZXMge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTH0vc3RhdGljL2ltYWdlcy9mbGFncy9zcGFpbi5wbmcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb290ZXIgbGFuZ3VhZ2UgaS5mbGFnLWljb24tZnIge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTH0vc3RhdGljL2ltYWdlcy9mbGFncy9mcmFuY2UucG5nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9vdGVyIGxhbmd1YWdlIGkuZmxhZy1pY29uLWJyIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7cHJvY2Vzcy5lbnYuQkFDS0VORF9VUkx9L3N0YXRpYy9pbWFnZXMvZmxhZ3MvYnJhemlsLnBuZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvb3RlciBsYW5ndWFnZTpob3ZlciB1bCB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICBib3R0b206IDE1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvb3RlciBsYW5ndWFnZSB1bCB7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzAzMWM0NTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICMwMzFjNDU7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxNXB4IDVweCAwO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjkyODI2O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9vdGVyIGxhbmd1YWdlIHVsIGxpIHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb290ZXIgbGFuZ3VhZ2UgdWwgbGkuZGlzYWJsZSBhIHtcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjODI4MDdlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb290ZXIgbGFuZ3VhZ2UgdWwgbGkuZGlzYWJsZSBhID4gaS5mbGFnLWljb24ge1xuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWZpbHRlcjogZ3JheXNjYWxlKDEwMCUpO1xuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9vdGVyIGxhbmd1YWdlIHVsIGxpIGEge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMTBweCAwIDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2JjNzRmZjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9vdGVyIGxhbmd1YWdlIHVsIGxpIGE6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9vdGVyIGxhbmd1YWdlIHVsIGxpIGEgPiBpLmZsYWctaWNvbiB7XG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogOTQwcHgpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9vdGVyIGluZm9zIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYyNXB4KSB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2Zvb3Rlcj5cbiAgICApfVxufVxuXG5leHBvcnQgY2xhc3MgTGVmdE1lbnUgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbXBvbmVudERpZE1vdW50ICgpIHtcbiAgICAgICAgJChcImxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuLnN1Ym1lbnUtaGFzLW51bWJlcnNcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBpZiAoJChlLnRhcmdldCkuaGFzQ2xhc3MoJ2Rpc2FibGUnKSkge1xuICAgICAgICAgICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoJChlLnRhcmdldCkuYXR0cignaHJlZicpKSB7XG4gICAgICAgICAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdsZWZ0LW1lbnUnKTtcbiAgICAgICAgICAgICAgICAvL3JldHVybiAkLmZuLm5hdmlnYXRlKGUudGFyZ2V0LCBlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5maW5kKCdzdWJtZW51JykudG9nZ2xlQ2xhc3MoXCJvcGVuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAkKFwiaGVhZGVyIG5hdnRvZ2dsZSwgbWVudWhpZGVyXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgJCgnYm9keScpLnRvZ2dsZUNsYXNzKCdsZWZ0LW1lbnUnKTtcbiAgICAgICAgfSlcbiAgICB9XG4gICAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8bGVmdG1lbnU+XG4gICAgXHRcdDxzaWRlYmFydXNlcj5cbiAgICBcdCAgICAgICAgPHBob3RvPlxuICAgIFx0ICAgICAgICAgICAgPHRpdGxlPkJvYSBub2l0ZS4g4piFPC90aXRsZT5cbiAgICBcdCAgICAgICAgICAgIDxzdWJ0aXRsZT5FbnRyZSBjb20gc2V1IGxvZ2luIG91IGNhZGFzdHJlLXNlITwvc3VidGl0bGU+XG4gICAgXHQgICAgICAgIDwvcGhvdG8+XG4gICAgXHRcdCAgICA8YmdpbWc+PC9iZ2ltZz5cbiAgICBcdFx0ICAgIDxiZ3NoYWRvdz48L2Jnc2hhZG93PlxuICAgIFx0XHQ8L3NpZGViYXJ1c2VyPlxuICAgIFx0XHQ8bWVudXNjcm9sbD5cbiAgICAgICAgICAgICAgICA8c2lkZWJhcnNlcGFyYXRvcj5BY2Vzc28gUmVzdHJpdG88L3NpZGViYXJzZXBhcmF0b3I+XG4gICAgICAgICAgICAgICAgPG1lbnVpdGVtcz5cbiAgICAgICAgICAgICAgICAgICAgPGJ0biBocmVmPVwiLy9hZG1pbi5hdm4uc3lzdGVtc1wiIHRhcmdldD1cIl9zZWxmXCI+XG4gICAgICAgICAgICAgICAgICAgIFx0PHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0xNDQgMTEydjUxLjZINDhjLTI2LjUgMC00OCAyMS41LTQ4IDQ4djg4LjZjMCAyNi41IDIxLjUgNDggNDggNDhoOTZ2NTEuNmMwIDQyLjYgNTEuNyA2NC4yIDgxLjkgMzMuOWwxNDQtMTQzLjljMTguNy0xOC43IDE4LjctNDkuMSAwLTY3LjlsLTE0NC0xNDRDMTk1LjggNDggMTQ0IDY5LjMgMTQ0IDExMnptMTkyIDE0NEwxOTIgNDAwdi05OS43SDQ4di04OC42aDE0NFYxMTJsMTQ0IDE0NHptODAgMTkyaC04NGMtNi42IDAtMTItNS40LTEyLTEydi0yNGMwLTYuNiA1LjQtMTIgMTItMTJoODRjMjYuNSAwIDQ4LTIxLjUgNDgtNDhWMTYwYzAtMjYuNS0yMS41LTQ4LTQ4LTQ4aC04NGMtNi42IDAtMTItNS40LTEyLTEyVjc2YzAtNi42IDUuNC0xMiAxMi0xMmg4NGM1MyAwIDk2IDQzIDk2IDk2djE5MmMwIDUzLTQzIDk2LTk2IDk2elwiIGNsYXNzTmFtZT1cIlwiPjwvcGF0aD48L3N2Zz5FbnRyYXI8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWNpcmNsZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjU2IDhDMTE5IDggOCAxMTkgOCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzOTMgOCAyNTYgOHpcIj48L3BhdGg+PC9zdmc+PC9idG4+XG4gICAgICAgICAgICAgICAgICAgIDxidG4gaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJkaXNhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgIFx0PHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDU3NiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yODggMjA4Yy00NC4yIDAtODAgMzUuOC04MCA4MHMzNS44IDgwIDgwIDgwIDgwLTM1LjggODAtODAtMzUuOC04MC04MC04MHptMCAxMjhjLTI2LjUgMC00OC0yMS41LTQ4LTQ4czIxLjUtNDggNDgtNDggNDggMjEuNSA0OCA0OC0yMS41IDQ4LTQ4IDQ4ek01MTIgNjRIMzUyVjMyYzAtMTcuNy0xNC4zLTMyLTMyLTMyaC02NGMtMTcuNyAwLTMyIDE0LjMtMzIgMzJ2MzJINjRDMjguNyA2NCAwIDkyLjcgMCAxMjh2MzIwYzAgMzUuMyAyOC43IDY0IDY0IDY0aDQ0OGMzNS4zIDAgNjQtMjguNyA2NC02NFYxMjhjMC0zNS4zLTI4LjctNjQtNjQtNjR6TTI1NiAzMmg2NHY5NmgtNjRWMzJ6bTEyOCA0NDhIMTkydi0yMS45YzAtOSAyLjYtMTcuNiA3LjYtMjUgNy4yLTEwLjcgMjAuMy0xNy4yIDM1LTE3LjIgMTUuOSAwIDIzLjUgOCA1My40IDhzMzcuNi04IDUzLjQtOGMxNC43IDAgMjcuNyA2LjQgMzUgMTcuMiA1IDcuNCA3LjYgMTYgNy42IDI1VjQ4MHptMTYwLTMyYzAgMTcuNi0xNC40IDMyLTMyIDMyaC05NnYtMjEuOWMwLTE1LjktNC44LTMwLjYtMTMtNDIuOC0xMy44LTIwLjUtMzcuMy0zMS4zLTYxLjUtMzEuMy0yMi4yIDAtMjcuOCA4LTUzLjQgOC0yNS42IDAtMzEuMi04LTUzLjQtOC0yNC4yIDAtNDcuNyAxMC44LTYxLjUgMzEuMy04LjIgMTIuMi0xMyAyNy0xMyA0Mi44VjQ4MEg2NGMtMTcuNiAwLTMyLTE0LjQtMzItMzJWMTI4YzAtMTcuNiAxNC40LTMyIDMyLTMyaDE2MHY2NGgxMjhWOTZoMTYwYzE3LjYgMCAzMiAxNC40IDMyIDMydjMyMHpcIiBjbGFzc05hbWU9XCJcIj48L3BhdGg+PC9zdmc+Q2FkYXN0cmFyLXNlPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6XCI+PC9wYXRoPjwvc3ZnPjwvYnRuPlxuICAgICAgICAgICAgICAgIDwvbWVudWl0ZW1zPlxuICAgICAgICAgICAgICAgIDxzaWRlYmFyZGl2aWRlcj48L3NpZGViYXJkaXZpZGVyPlxuICAgIFx0XHRcdDxtZW51c2l0ZW1vYmlsZT5cbiAgICBcdCAgICAgICAgICAgIDxzaWRlYmFyc2VwYXJhdG9yPldlYnNpdGUgTWVudTwvc2lkZWJhcnNlcGFyYXRvcj5cbiAgICBcdCAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudS1pdGVtcyBtZW51LWljb25zXCI+XG4gICAgXHQgICAgICAgICAgICAgICAgXG4gICAgXHQgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBcdDxzaWRlYmFyZGl2aWRlcj48L3NpZGViYXJkaXZpZGVyPlxuICAgICAgICAgICAgICAgIDwvbWVudXNpdGVtb2JpbGU+XG4gICAgICAgICAgICAgICAgPHNpZGViYXJzZXBhcmF0b3I+TVlBUFAgTW9kZWxzPC9zaWRlYmFyc2VwYXJhdG9yPlxuICAgICAgICAgICAgICAgIDxtZW51aXRlbXM+XG4gICAgICAgICAgICAgICAgICAgIDxidG4gaHJlZj1cIi4vXCI+PHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1tb2JpbGUtYWx0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0xOTIgNDE2YzAgMTcuNy0xNC4zIDMyLTMyIDMycy0zMi0xNC4zLTMyLTMyIDE0LjMtMzIgMzItMzIgMzIgMTQuMyAzMiAzMnptNDgtNjBWOTJjMC02LjYtNS40LTEyLTEyLTEySDkyYy02LjYgMC0xMiA1LjQtMTIgMTJ2MjY0YzAgNi42IDUuNCAxMiAxMiAxMmgxMzZjNi42IDAgMTItNS40IDEyLTEyem04MC0zMDh2NDE2YzAgMjYuNS0yMS41IDQ4LTQ4IDQ4SDQ4Yy0yNi41IDAtNDgtMjEuNS00OC00OFY0OEMwIDIxLjUgMjEuNSAwIDQ4IDBoMjI0YzI2LjUgMCA0OCAyMS41IDQ4IDQ4em0tNDggNDEwVjU0YzAtMy4zLTIuNy02LTYtNkg1NGMtMy4zIDAtNiAyLjctNiA2djQwNGMwIDMuMyAyLjcgNiA2IDZoMjEyYzMuMyAwIDYtMi43IDYtNnpcIj48L3BhdGg+PC9zdmc+QWJvdXQgTXkgQXBwPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6XCI+PC9wYXRoPjwvc3ZnPjwvYnRuPlxuICAgICAgICAgICAgICAgICAgICA8YnRuIGNsYXNzTmFtZT1cInN1Ym1lbnUtaGFzLW51bWJlcnNcIj5cbiAgICAgICAgICAgICAgICAgICAgXHQ8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLXR2XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk00MDAgMjQ0di04YzAtNi42IDUuNC0xMiAxMi0xMmg4YzYuNiAwIDEyIDUuNCAxMiAxMnY4YzAgNi42LTUuNCAxMi0xMiAxMmgtOGMtNi42IDAtMTItNS40LTEyLTEyem0xMiA3Nmg4YzYuNiAwIDEyLTUuNCAxMi0xMnYtOGMwLTYuNi01LjQtMTItMTItMTJoLThjLTYuNiAwLTEyIDUuNC0xMiAxMnY4YzAgNi42IDUuNCAxMiAxMiAxMnptLTM2LTEzNi41cy0xLjUtNy41LTE0NC03LjUtMTQ0LjUgNy41LTE0NC41IDcuNVM4MCAxODQgODAgMjg4czcuNSAxMDQuNSA3LjUgMTA0LjVTODggNDAwIDIzMiA0MDBzMTQ0LTcuNSAxNDQtNy41IDcuNS0uNSA3LjUtMTA0LjUtNy41LTEwNC41LTcuNS0xMDQuNXpNNTEyIDE0NHYyODhjMCAyNi41LTIxLjUgNDgtNDggNDhoLTE2djMyaC00OGwtMTAuNy0zMkgxMjIuN0wxMTIgNTEySDY0di0zMkg0OGMtMjYuNSAwLTQ4LTIxLjUtNDgtNDhWMTQ0YzAtMjYuNSAyMS41LTQ4IDQ4LTQ4aDE0MC45bC01NC01NS4yYy05LjMtOS41LTkuMS0yNC43LjMtMzMuOSA5LjUtOS4zIDI0LjctOS4xIDMzLjkuM0wyNTYgOTZsODYuOS04OC44YzkuMy05LjUgMjQuNS05LjYgMzMuOS0uMyA5LjUgOS4zIDkuNiAyNC41LjMgMzMuOWwtNTQgNTUuMkg0NjRjMjYuNSAwIDQ4IDIxLjUgNDggNDh6bS00OCAwSDQ4djI4OGg0MTZWMTQ0elwiPjwvcGF0aD48L3N2Zz5Db21tdW5pY2F0aW9uPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy10ZXJtaW5hbFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMzQuNDk1IDM2LjQ2NWwyMTEuMDUxIDIxMS4wNWM0LjY4NiA0LjY4NiA0LjY4NiAxMi4yODQgMCAxNi45NzFMMzQuNDk1IDQ3NS41MzVjLTQuNjg2IDQuNjg2LTEyLjI4NCA0LjY4Ni0xNi45NyAwbC03LjA3MS03LjA3Yy00LjY4Ni00LjY4Ni00LjY4Ni0xMi4yODQgMC0xNi45NzFMMjA1Ljk0NyAyNTYgMTAuNDU0IDYwLjUwNmMtNC42ODYtNC42ODYtNC42ODYtMTIuMjg0IDAtMTYuOTcxbDcuMDcxLTcuMDdjNC42ODYtNC42ODcgMTIuMjg0LTQuNjg3IDE2Ljk3IDB6TTY0MCA0Njh2LTEwYzAtNi42MjctNS4zNzMtMTItMTItMTJIMzAwYy02LjYyNyAwLTEyIDUuMzczLTEyIDEydjEwYzAgNi42MjcgNS4zNzMgMTIgMTIgMTJoMzI4YzYuNjI3IDAgMTItNS4zNzMgMTItMTJ6XCI+PC9wYXRoPjwvc3ZnPjxjb3VudD40PC9jb3VudD5cbiAgICBcdCAgICAgICAgICAgICAgICA8c3VibWVudT5cbiAgICBcdCAgICAgICAgICAgICAgICAgICAgPGJ0biBjbGFzc05hbWU9XCJkaXNhYmxlXCI+PHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1hbmdsZS1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjI0LjMgMjczbC0xMzYgMTM2Yy05LjQgOS40LTI0LjYgOS40LTMzLjkgMGwtMjIuNi0yMi42Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOWw5Ni40LTk2LjQtOTYuNC05Ni40Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOUw1NC4zIDEwM2M5LjQtOS40IDI0LjYtOS40IDMzLjkgMGwxMzYgMTM2YzkuNSA5LjQgOS41IDI0LjYuMSAzNHpcIj48L3BhdGg+PC9zdmc+QWfDqm5jaWFzIGUgUHJvZHV0b3JhczxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctY2lyY2xlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNTYgOEMxMTkgOCA4IDExOSA4IDI1NnMxMTEgMjQ4IDI0OCAyNDggMjQ4LTExMSAyNDgtMjQ4UzM5MyA4IDI1NiA4elwiPjwvcGF0aD48L3N2Zz48L2J0bj5cbiAgICBcdCAgICAgICAgICAgICAgICAgICAgPGJ0biBocmVmPVwiLi90aGVtZXMvcHJvZHV0b3Jhcy9cIj48c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWFuZ2xlLXJpZ2h0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yMjQuMyAyNzNsLTEzNiAxMzZjLTkuNCA5LjQtMjQuNiA5LjQtMzMuOSAwbC0yMi42LTIyLjZjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45bDk2LjQtOTYuNC05Ni40LTk2LjRjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45TDU0LjMgMTAzYzkuNC05LjQgMjQuNi05LjQgMzMuOSAwbDEzNiAxMzZjOS41IDkuNCA5LjUgMjQuNi4xIDM0elwiPjwvcGF0aD48L3N2Zz5Qcm9tb8Onw6NvIGUgRXZlbnRvczxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctY2lyY2xlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNTYgOEMxMTkgOCA4IDExOSA4IDI1NnMxMTEgMjQ4IDI0OCAyNDggMjQ4LTExMSAyNDgtMjQ4UzM5MyA4IDI1NiA4elwiPjwvcGF0aD48L3N2Zz48L2J0bj5cbiAgICBcdCAgICAgICAgICAgICAgICAgICAgPGJ0biBocmVmPVwiLi90aGVtZXMvc3VwZXJ0di9cIj48c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWFuZ2xlLXJpZ2h0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yMjQuMyAyNzNsLTEzNiAxMzZjLTkuNCA5LjQtMjQuNiA5LjQtMzMuOSAwbC0yMi42LTIyLjZjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45bDk2LjQtOTYuNC05Ni40LTk2LjRjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45TDU0LjMgMTAzYzkuNC05LjQgMjQuNi05LjQgMzMuOSAwbDEzNiAxMzZjOS41IDkuNCA5LjUgMjQuNi4xIDM0elwiPjwvcGF0aD48L3N2Zz5FbWlzc29yYSBUVjxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctY2lyY2xlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNTYgOEMxMTkgOCA4IDExOSA4IDI1NnMxMTEgMjQ4IDI0OCAyNDggMjQ4LTExMSAyNDgtMjQ4UzM5MyA4IDI1NiA4elwiPjwvcGF0aD48L3N2Zz48L2J0bj5cbiAgICBcdCAgICAgICAgICAgICAgICAgICAgPGJ0biBjbGFzc05hbWU9XCJkaXNhYmxlXCI+PHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1hbmdsZS1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjI0LjMgMjczbC0xMzYgMTM2Yy05LjQgOS40LTI0LjYgOS40LTMzLjkgMGwtMjIuNi0yMi42Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOWw5Ni40LTk2LjQtOTYuNC05Ni40Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOUw1NC4zIDEwM2M5LjQtOS40IDI0LjYtOS40IDMzLjkgMGwxMzYgMTM2YzkuNSA5LjQgOS41IDI0LjYuMSAzNHpcIj48L3BhdGg+PC9zdmc+UsOhZGlvczxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctY2lyY2xlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNTYgOEMxMTkgOCA4IDExOSA4IDI1NnMxMTEgMjQ4IDI0OCAyNDggMjQ4LTExMSAyNDgtMjQ4UzM5MyA4IDI1NiA4elwiPjwvcGF0aD48L3N2Zz48L2J0bj5cbiAgICBcdCAgICAgICAgICAgICAgICA8L3N1Ym1lbnU+XG4gICAgXHQgICAgICAgICAgICA8L2J0bj5cbiAgICAgICAgICAgICAgICAgICAgPGJ0biBjbGFzc05hbWU9XCJzdWJtZW51LWhhcy1udW1iZXJzXCI+XG4gICAgICAgICAgICAgICAgICAgIFx0PHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1zdGFyXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yMjQgMjg4Yzc5LjUgMCAxNDQtNjQuNSAxNDQtMTQ0UzMwMy41IDAgMjI0IDAgODAgNjQuNSA4MCAxNDRzNjQuNSAxNDQgMTQ0IDE0NHptMC0yNDBjNTIuOSAwIDk2IDQzLjEgOTYgOTZzLTQzLjEgOTYtOTYgOTYtOTYtNDMuMS05Ni05NiA0My4xLTk2IDk2LTk2em04OS42IDI1NmMtMTEgMC0yMS44IDIuNi0zMi4yIDYuMi0xOCA2LjMtMzcuMyA5LjgtNTcuNCA5LjhzLTM5LjQtMy41LTU3LjQtOS44Yy0xMC40LTMuNi0yMS4yLTYuMi0zMi4yLTYuMkM2MC4yIDMwNCAwIDM2NC4yIDAgNDM4LjRWNDg4YzAgMTMuMyAxMC43IDI0IDI0IDI0czI0LTEwLjcgMjQtMjR2LTQ5LjZjMC00NS41IDM1LjQtODIuNCA4MC04NS44djUwYy0yMy4xIDYuOS00MCAyOC4xLTQwIDUzLjQgMCAzMC45IDI1LjEgNTYgNTYgNTZzNTYtMjUuMSA1Ni01NmMwLTI1LjMtMTYuOS00Ni41LTQwLTUzLjR2LTQ0LjdjMjAuOCA2LjMgNDIuMyAxMC4xIDY0IDEwLjEgMjEuOCAwIDQzLjItMy44IDY0LTEwLjF2MzYuM2MtMjguMiA3LjUtNDggMzQuNS00OCA2NC42VjQ4OGMwIDQuMiAxLjcgOC4zIDQuNyAxMS4zbDEwLjMgMTAuM2MzLjEgMy4xIDguMiAzLjEgMTEuMyAwbDExLjMtMTEuM2MzLjEtMy4xIDMuMS04LjIgMC0xMS4zbC01LjctNS43VjQ1NmMwLTE5LjQgMTcuNC0zNC44IDM3LjQtMzEuNiAxNS43IDIuNiAyNi42IDE3LjQgMjYuNiAzMy4zdjIzLjZsLTUuNyA1LjdjLTMuMSAzLjEtMy4xIDguMiAwIDExLjNsMTEuMyAxMS4zYzMuMSAzLjEgOC4yIDMuMSAxMS4zIDBsMTAuMy0xMC4zYzMtMyA0LjctNy4xIDQuNy0xMS4zdi0zMmMwLTI5LjctMjAuNS01NC41LTQ4LTYxLjZ2LTQxLjdjNDQuNiAzLjMgODAgNDAuMyA4MCA4NS44VjQ4OGMwIDEzLjMgMTAuNyAyNCAyNCAyNHMyNC0xMC43IDI0LTI0di00OS42Yy4yLTc0LjItNjAtMTM0LjQtMTM0LjItMTM0LjR6TTE2OCA0NTZjMCAxMy4zLTEwLjcgMjQtMjQgMjRzLTI0LTEwLjctMjQtMjQgMTAuNy0yNCAyNC0yNCAyNCAxMC43IDI0IDI0elwiPjwvcGF0aD48L3N2Zz5Qcm9maXNzaW9uYWxzPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy10ZXJtaW5hbFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMzQuNDk1IDM2LjQ2NWwyMTEuMDUxIDIxMS4wNWM0LjY4NiA0LjY4NiA0LjY4NiAxMi4yODQgMCAxNi45NzFMMzQuNDk1IDQ3NS41MzVjLTQuNjg2IDQuNjg2LTEyLjI4NCA0LjY4Ni0xNi45NyAwbC03LjA3MS03LjA3Yy00LjY4Ni00LjY4Ni00LjY4Ni0xMi4yODQgMC0xNi45NzFMMjA1Ljk0NyAyNTYgMTAuNDU0IDYwLjUwNmMtNC42ODYtNC42ODYtNC42ODYtMTIuMjg0IDAtMTYuOTcxbDcuMDcxLTcuMDdjNC42ODYtNC42ODcgMTIuMjg0LTQuNjg3IDE2Ljk3IDB6TTY0MCA0Njh2LTEwYzAtNi42MjctNS4zNzMtMTItMTItMTJIMzAwYy02LjYyNyAwLTEyIDUuMzczLTEyIDEydjEwYzAgNi42MjcgNS4zNzMgMTIgMTIgMTJoMzI4YzYuNjI3IDAgMTItNS4zNzMgMTItMTJ6XCI+PC9wYXRoPjwvc3ZnPjxjb3VudD42PC9jb3VudD5cbiAgICBcdCAgICAgICAgICAgICAgICA8c3VibWVudT5cbiAgICBcdCAgICAgICAgICAgICAgICAgICAgPGJ0biBjbGFzc05hbWU9XCJkaXNhYmxlXCI+PHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1hbmdsZS1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjI0LjMgMjczbC0xMzYgMTM2Yy05LjQgOS40LTI0LjYgOS40LTMzLjkgMGwtMjIuNi0yMi42Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOWw5Ni40LTk2LjQtOTYuNC05Ni40Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOUw1NC4zIDEwM2M5LjQtOS40IDI0LjYtOS40IDMzLjkgMGwxMzYgMTM2YzkuNSA5LjQgOS41IDI0LjYuMSAzNHpcIj48L3BhdGg+PC9zdmc+QXRvcmVzPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6XCI+PC9wYXRoPjwvc3ZnPjwvYnRuPlxuICAgIFx0ICAgICAgICAgICAgICAgICAgICA8YnRuIGhyZWY9XCIuL3RoZW1lcy9jYW50b3Jlcy9cIj48c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWFuZ2xlLXJpZ2h0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yMjQuMyAyNzNsLTEzNiAxMzZjLTkuNCA5LjQtMjQuNiA5LjQtMzMuOSAwbC0yMi42LTIyLjZjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45bDk2LjQtOTYuNC05Ni40LTk2LjRjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45TDU0LjMgMTAzYzkuNC05LjQgMjQuNi05LjQgMzMuOSAwbDEzNiAxMzZjOS41IDkuNCA5LjUgMjQuNi4xIDM0elwiPjwvcGF0aD48L3N2Zz5DYW50b3JlczxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctY2lyY2xlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNTYgOEMxMTkgOCA4IDExOSA4IDI1NnMxMTEgMjQ4IDI0OCAyNDggMjQ4LTExMSAyNDgtMjQ4UzM5MyA4IDI1NiA4elwiPjwvcGF0aD48L3N2Zz48L2J0bj5cbiAgICBcdCAgICAgICAgICAgICAgICAgICAgPGJ0biBjbGFzc05hbWU9XCJkaXNhYmxlXCI+PHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1hbmdsZS1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjI0LjMgMjczbC0xMzYgMTM2Yy05LjQgOS40LTI0LjYgOS40LTMzLjkgMGwtMjIuNi0yMi42Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOWw5Ni40LTk2LjQtOTYuNC05Ni40Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOUw1NC4zIDEwM2M5LjQtOS40IDI0LjYtOS40IDMzLjkgMGwxMzYgMTM2YzkuNSA5LjQgOS41IDI0LjYuMSAzNHpcIj48L3BhdGg+PC9zdmc+RGVudGlzdGFzPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6XCI+PC9wYXRoPjwvc3ZnPjwvYnRuPlxuICAgIFx0ICAgICAgICAgICAgICAgICAgICA8YnRuIGNsYXNzTmFtZT1cImRpc2FibGVcIj48c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWFuZ2xlLXJpZ2h0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yMjQuMyAyNzNsLTEzNiAxMzZjLTkuNCA5LjQtMjQuNiA5LjQtMzMuOSAwbC0yMi42LTIyLjZjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45bDk2LjQtOTYuNC05Ni40LTk2LjRjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45TDU0LjMgMTAzYzkuNC05LjQgMjQuNi05LjQgMzMuOSAwbDEzNiAxMzZjOS41IDkuNCA5LjUgMjQuNi4xIDM0elwiPjwvcGF0aD48L3N2Zz5BcnF1aXRldG9zPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6XCI+PC9wYXRoPjwvc3ZnPjwvYnRuPlxuICAgIFx0ICAgICAgICAgICAgICAgICAgICA8YnRuIGNsYXNzTmFtZT1cImRpc2FibGVcIj48c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWFuZ2xlLXJpZ2h0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yMjQuMyAyNzNsLTEzNiAxMzZjLTkuNCA5LjQtMjQuNiA5LjQtMzMuOSAwbC0yMi42LTIyLjZjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45bDk2LjQtOTYuNC05Ni40LTk2LjRjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45TDU0LjMgMTAzYzkuNC05LjQgMjQuNi05LjQgMzMuOSAwbDEzNiAxMzZjOS41IDkuNCA5LjUgMjQuNi4xIDM0elwiPjwvcGF0aD48L3N2Zz5BZHZvZ2Fkb3M8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWNpcmNsZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjU2IDhDMTE5IDggOCAxMTkgOCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzOTMgOCAyNTYgOHpcIj48L3BhdGg+PC9zdmc+PC9idG4+XG4gICAgXHQgICAgICAgICAgICAgICAgICAgIDxidG4gY2xhc3NOYW1lPVwiZGlzYWJsZVwiPjxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctYW5nbGUtcmlnaHRcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIwIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTIyNC4zIDI3M2wtMTM2IDEzNmMtOS40IDkuNC0yNC42IDkuNC0zMy45IDBsLTIyLjYtMjIuNmMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlsOTYuNC05Ni40LTk2LjQtOTYuNGMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlMNTQuMyAxMDNjOS40LTkuNCAyNC42LTkuNCAzMy45IDBsMTM2IDEzNmM5LjUgOS40IDkuNSAyNC42LjEgMzR6XCI+PC9wYXRoPjwvc3ZnPlByb2dyYW1hZG9yZXM8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWNpcmNsZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjU2IDhDMTE5IDggOCAxMTkgOCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzOTMgOCAyNTYgOHpcIj48L3BhdGg+PC9zdmc+PC9idG4+XG4gICAgXHQgICAgICAgICAgICAgICAgPC9zdWJtZW51PlxuICAgIFx0ICAgICAgICAgICAgPC9idG4+XG4gICAgICAgICAgICAgICAgICAgIDxidG4gY2xhc3NOYW1lPVwic3VibWVudS1oYXMtbnVtYmVyc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1zdG9yZXNcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIwIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTYzNS43IDE3Ni4xbC05MS40LTE2MEM1MzguNiA2LjIgNTI4IDAgNTE2LjUgMGgtMzkzQzExMiAwIDEwMS40IDYuMiA5NS43IDE2LjFsLTkxLjQgMTYwQy03LjkgMTk3LjUgNy40IDIyNCAzMiAyMjRoMzJ2MjU0LjVDNjQgNDk3IDc4LjMgNTEyIDk2IDUxMmgyNTZjMTcuNyAwIDMyLTE1IDMyLTMzLjVWMjI0aDE2MHYyODBjMCA0LjQgMy42IDggOCA4aDE2YzQuNCAwIDgtMy42IDgtOFYyMjRoMzJjMjQuNiAwIDM5LjktMjYuNSAyNy43LTQ3Ljl6TTM1MiA0NzguNWMwIC45LS4zIDEuNC0uMiAxLjVsLTI1NS4yLjJzLS42LS41LS42LTEuN1YzNTJoMjU2djEyNi41em0wLTE1OC41SDk2di05NmgyNTZ2OTZ6TTMyLjEgMTkybDkxLjQtMTYwaDM5M0w2MDggMTkySDMyLjF6XCI+PC9wYXRoPjwvc3ZnPlN0b3JlczxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctdGVybWluYWxcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIwIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTM0LjQ5NSAzNi40NjVsMjExLjA1MSAyMTEuMDVjNC42ODYgNC42ODYgNC42ODYgMTIuMjg0IDAgMTYuOTcxTDM0LjQ5NSA0NzUuNTM1Yy00LjY4NiA0LjY4Ni0xMi4yODQgNC42ODYtMTYuOTcgMGwtNy4wNzEtNy4wN2MtNC42ODYtNC42ODYtNC42ODYtMTIuMjg0IDAtMTYuOTcxTDIwNS45NDcgMjU2IDEwLjQ1NCA2MC41MDZjLTQuNjg2LTQuNjg2LTQuNjg2LTEyLjI4NCAwLTE2Ljk3MWw3LjA3MS03LjA3YzQuNjg2LTQuNjg3IDEyLjI4NC00LjY4NyAxNi45NyAwek02NDAgNDY4di0xMGMwLTYuNjI3LTUuMzczLTEyLTEyLTEySDMwMGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnYxMGMwIDYuNjI3IDUuMzczIDEyIDEyIDEyaDMyOGM2LjYyNyAwIDEyLTUuMzczIDEyLTEyelwiPjwvcGF0aD48L3N2Zz48Y291bnQ+NzwvY291bnQ+XG4gICAgXHQgICAgICAgICAgICAgICAgPHN1Ym1lbnU+XG4gICAgXHQgICAgICAgICAgICAgICAgICAgIDxidG4gaHJlZj1cIi4vdGhlbWVzL21lcmNhZG9saXZyZS9cIj48c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWFuZ2xlLXJpZ2h0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yMjQuMyAyNzNsLTEzNiAxMzZjLTkuNCA5LjQtMjQuNiA5LjQtMzMuOSAwbC0yMi42LTIyLjZjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45bDk2LjQtOTYuNC05Ni40LTk2LjRjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45TDU0LjMgMTAzYzkuNC05LjQgMjQuNi05LjQgMzMuOSAwbDEzNiAxMzZjOS41IDkuNCA5LjUgMjQuNi4xIDM0elwiPjwvcGF0aD48L3N2Zz5NZXJjYWRvIExpdnJlPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6XCI+PC9wYXRoPjwvc3ZnPjwvYnRuPlxuICAgIFx0ICAgICAgICAgICAgICAgICAgICA8YnRuIGNsYXNzTmFtZT1cImRpc2FibGVcIj48c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWFuZ2xlLXJpZ2h0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yMjQuMyAyNzNsLTEzNiAxMzZjLTkuNCA5LjQtMjQuNiA5LjQtMzMuOSAwbC0yMi42LTIyLjZjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45bDk2LjQtOTYuNC05Ni40LTk2LjRjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45TDU0LjMgMTAzYzkuNC05LjQgMjQuNi05LjQgMzMuOSAwbDEzNiAxMzZjOS41IDkuNCA5LjUgMjQuNi4xIDM0elwiPjwvcGF0aD48L3N2Zz5JbmZvcm3DoXRpY2E8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWNpcmNsZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjU2IDhDMTE5IDggOCAxMTkgOCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzOTMgOCAyNTYgOHpcIj48L3BhdGg+PC9zdmc+PC9idG4+XG4gICAgXHQgICAgICAgICAgICAgICAgICAgIDxidG4gY2xhc3NOYW1lPVwiZGlzYWJsZVwiPjxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctYW5nbGUtcmlnaHRcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIwIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTIyNC4zIDI3M2wtMTM2IDEzNmMtOS40IDkuNC0yNC42IDkuNC0zMy45IDBsLTIyLjYtMjIuNmMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlsOTYuNC05Ni40LTk2LjQtOTYuNGMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlMNTQuMyAxMDNjOS40LTkuNCAyNC42LTkuNCAzMy45IDBsMTM2IDEzNmM5LjUgOS40IDkuNSAyNC42LjEgMzR6XCI+PC9wYXRoPjwvc3ZnPkNvbnN0cnXDp8OjbzxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctY2lyY2xlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNTYgOEMxMTkgOCA4IDExOSA4IDI1NnMxMTEgMjQ4IDI0OCAyNDggMjQ4LTExMSAyNDgtMjQ4UzM5MyA4IDI1NiA4elwiPjwvcGF0aD48L3N2Zz48L2J0bj5cbiAgICBcdCAgICAgICAgICAgICAgICAgICAgPGJ0biBjbGFzc05hbWU9XCJkaXNhYmxlXCI+PHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1hbmdsZS1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjI0LjMgMjczbC0xMzYgMTM2Yy05LjQgOS40LTI0LjYgOS40LTMzLjkgMGwtMjIuNi0yMi42Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOWw5Ni40LTk2LjQtOTYuNC05Ni40Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOUw1NC4zIDEwM2M5LjQtOS40IDI0LjYtOS40IDMzLjkgMGwxMzYgMTM2YzkuNSA5LjQgOS41IDI0LjYuMSAzNHpcIj48L3BhdGg+PC9zdmc+Q2Fsw6dhZG9zPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6XCI+PC9wYXRoPjwvc3ZnPjwvYnRuPlxuICAgIFx0ICAgICAgICAgICAgICAgICAgICA8YnRuIGhyZWY9XCIuL3RoZW1lcy9jZWxtYXIvXCI+PHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1hbmdsZS1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjI0LjMgMjczbC0xMzYgMTM2Yy05LjQgOS40LTI0LjYgOS40LTMzLjkgMGwtMjIuNi0yMi42Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOWw5Ni40LTk2LjQtOTYuNC05Ni40Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOUw1NC4zIDEwM2M5LjQtOS40IDI0LjYtOS40IDMzLjkgMGwxMzYgMTM2YzkuNSA5LjQgOS41IDI0LjYuMSAzNHpcIj48L3BhdGg+PC9zdmc+UGxhbmVqYWRvczxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctY2lyY2xlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNTYgOEMxMTkgOCA4IDExOSA4IDI1NnMxMTEgMjQ4IDI0OCAyNDggMjQ4LTExMSAyNDgtMjQ4UzM5MyA4IDI1NiA4elwiPjwvcGF0aD48L3N2Zz48L2J0bj5cbiAgICBcdCAgICAgICAgICAgICAgICAgICAgPGJ0biBjbGFzc05hbWU9XCJkaXNhYmxlXCI+PHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1hbmdsZS1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjI0LjMgMjczbC0xMzYgMTM2Yy05LjQgOS40LTI0LjYgOS40LTMzLjkgMGwtMjIuNi0yMi42Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOWw5Ni40LTk2LjQtOTYuNC05Ni40Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOUw1NC4zIDEwM2M5LjQtOS40IDI0LjYtOS40IDMzLjkgMGwxMzYgMTM2YzkuNSA5LjQgOS41IDI0LjYuMSAzNHpcIj48L3BhdGg+PC9zdmc+Um91cGFzPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6XCI+PC9wYXRoPjwvc3ZnPjwvYnRuPlxuICAgIFx0ICAgICAgICAgICAgICAgIDwvc3VibWVudT5cbiAgICBcdCAgICAgICAgICAgIDwvYnRuPlxuICAgICAgICAgICAgICAgICAgICA8YnRuIGNsYXNzTmFtZT1cInN1Ym1lbnUtaGFzLW51bWJlcnNcIj5cbiAgICAgICAgICAgICAgICAgICAgXHQ8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLXJlc3RhdXJhbnRlc1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMzQ0LjEgNDcwLjNsMTQuMi0xNjQuOGMtNDIuMS0zMy4xLTcwLjQtNzctNzAuNC0xMjkuNUMyODggODEuNyAzNzYuMSAwIDQ0MCAwYzIyLjEgMCA0MCAxNy4zIDQwIDM4LjV2NDM1YzAgMjEuMi0xNy45IDM4LjUtNDAgMzguNWgtNTZjLTIyLjggMC00MS44LTE4LjctMzkuOS00MS43ek0zMjAgMTc2YzAgNTEgMzIuMiA4NS41IDcxLjggMTE0LjVMMzc2IDQ3My4xYy0uMyAzLjcgMy40IDYuOSA4IDYuOWg1NmM0LjMgMCA4LTMgOC02LjV2LTQzNWMwLTMuNS0zLjctNi41LTgtNi41LTQ0LjYgMC0xMjAgNjUuOC0xMjAgMTQ0ek0yNDAuNyAzMy44QzIzNy40IDE0LjMgMjE5LjUgMCAxOTQuNiAwYy0xMS45IDAtMjQuMSAzLjQtMzMuMyAxMS4yQzE1Mi45IDQuMSAxNDEuMyAwIDEyOCAwcy0yNC45IDQuMS0zMy4zIDExLjJDODUuNSAzLjQgNzMuMyAwIDYxLjQgMCAzNi4yIDAgMTguNiAxNC41IDE1LjMgMzMuOCAxMy41IDQzLjIgMCAxMTguNCAwIDE0OS45YzAgNTAuOSAyNi43IDkxLjYgNzEgMTEwLjdMNTkuNiA0NzEuNEM1OC40IDQ5My40IDc1LjkgNTEyIDk4IDUxMmg2MGMyMiAwIDM5LjYtMTguNSAzOC40LTQwLjZMMTg1IDI2MC42YzQ0LjItMTkuMSA3MS01OS44IDcxLTExMC43IDAtMzEuNS0xMy41LTEwNi43LTE1LjMtMTE2LjF6TTE1Mi4zIDI0MGwxMi4yIDIzMy4xYy4yIDMuNy0yLjcgNi45LTYuNSA2LjlIOThjLTMuNyAwLTYuNy0zLjEtNi41LTYuOUwxMDMuNyAyNDBDNjEuMyAyMzEuMiAzMiAxOTcgMzIgMTQ5LjljMC0yOS43IDE0LjgtMTEwLjYgMTQuOC0xMTAuNiAxLjYtOS45IDI4LjMtOS43IDI5LjUuMlYxNjJjLjkgMTEuNSAyOC4yIDExLjcgMjkuNS4ybDcuNC0xMjIuOWMxLjYtOS43IDI3LjktOS43IDI5LjUgMGw3LjQgMTIyLjljMS4zIDExLjQgMjguNiAxMS4yIDI5LjUtLjJWMzkuNmMxLjItOS45IDI3LjktMTAuMSAyOS41LS4yIDAgMCAxNC44IDgwLjkgMTQuOCAxMTAuNi4xIDQ2LjgtMjkgODEuMi03MS42IDkwelwiPjwvcGF0aD48L3N2Zz5BbGltZW50YcOnw6NvPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy10ZXJtaW5hbFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMzQuNDk1IDM2LjQ2NWwyMTEuMDUxIDIxMS4wNWM0LjY4NiA0LjY4NiA0LjY4NiAxMi4yODQgMCAxNi45NzFMMzQuNDk1IDQ3NS41MzVjLTQuNjg2IDQuNjg2LTEyLjI4NCA0LjY4Ni0xNi45NyAwbC03LjA3MS03LjA3Yy00LjY4Ni00LjY4Ni00LjY4Ni0xMi4yODQgMC0xNi45NzFMMjA1Ljk0NyAyNTYgMTAuNDU0IDYwLjUwNmMtNC42ODYtNC42ODYtNC42ODYtMTIuMjg0IDAtMTYuOTcxbDcuMDcxLTcuMDdjNC42ODYtNC42ODcgMTIuMjg0LTQuNjg3IDE2Ljk3IDB6TTY0MCA0Njh2LTEwYzAtNi42MjctNS4zNzMtMTItMTItMTJIMzAwYy02LjYyNyAwLTEyIDUuMzczLTEyIDEydjEwYzAgNi42MjcgNS4zNzMgMTIgMTIgMTJoMzI4YzYuNjI3IDAgMTItNS4zNzMgMTItMTJ6XCI+PC9wYXRoPjwvc3ZnPjxjb3VudD41PC9jb3VudD5cbiAgICBcdCAgICAgICAgICAgICAgICA8c3VibWVudT5cbiAgICBcdCAgICAgICAgICAgICAgICAgICAgPGJ0biBjbGFzc05hbWU9XCJkaXNhYmxlXCI+PHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1hbmdsZS1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjI0LjMgMjczbC0xMzYgMTM2Yy05LjQgOS40LTI0LjYgOS40LTMzLjkgMGwtMjIuNi0yMi42Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOWw5Ni40LTk2LjQtOTYuNC05Ni40Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOUw1NC4zIDEwM2M5LjQtOS40IDI0LjYtOS40IDMzLjkgMGwxMzYgMTM2YzkuNSA5LjQgOS41IDI0LjYuMSAzNHpcIj48L3BhdGg+PC9zdmc+UmVzdGF1cmFudGVzPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6XCI+PC9wYXRoPjwvc3ZnPjwvYnRuPlxuICAgIFx0ICAgICAgICAgICAgICAgICAgICA8YnRuIGNsYXNzTmFtZT1cImRpc2FibGVcIj48c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWFuZ2xlLXJpZ2h0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yMjQuMyAyNzNsLTEzNiAxMzZjLTkuNCA5LjQtMjQuNiA5LjQtMzMuOSAwbC0yMi42LTIyLjZjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45bDk2LjQtOTYuNC05Ni40LTk2LjRjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45TDU0LjMgMTAzYzkuNC05LjQgMjQuNi05LjQgMzMuOSAwbDEzNiAxMzZjOS41IDkuNCA5LjUgMjQuNi4xIDM0elwiPjwvcGF0aD48L3N2Zz5DYWZldGVyaWFzPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6XCI+PC9wYXRoPjwvc3ZnPjwvYnRuPlxuICAgIFx0ICAgICAgICAgICAgICAgICAgICA8YnRuIGhyZWY9XCIuL3RoZW1lcy9jZXJ2ZWphcmlhcy9cIj48c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWFuZ2xlLXJpZ2h0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yMjQuMyAyNzNsLTEzNiAxMzZjLTkuNCA5LjQtMjQuNiA5LjQtMzMuOSAwbC0yMi42LTIyLjZjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45bDk2LjQtOTYuNC05Ni40LTk2LjRjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45TDU0LjMgMTAzYzkuNC05LjQgMjQuNi05LjQgMzMuOSAwbDEzNiAxMzZjOS41IDkuNCA5LjUgMjQuNi4xIDM0elwiPjwvcGF0aD48L3N2Zz5DZXJ2ZWphcmlhczxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctY2lyY2xlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNTYgOEMxMTkgOCA4IDExOSA4IDI1NnMxMTEgMjQ4IDI0OCAyNDggMjQ4LTExMSAyNDgtMjQ4UzM5MyA4IDI1NiA4elwiPjwvcGF0aD48L3N2Zz48L2J0bj5cbiAgICBcdCAgICAgICAgICAgICAgICAgICAgPGJ0biBjbGFzc05hbWU9XCJkaXNhYmxlXCI+PHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1hbmdsZS1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjI0LjMgMjczbC0xMzYgMTM2Yy05LjQgOS40LTI0LjYgOS40LTMzLjkgMGwtMjIuNi0yMi42Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOWw5Ni40LTk2LjQtOTYuNC05Ni40Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOUw1NC4zIDEwM2M5LjQtOS40IDI0LjYtOS40IDMzLjkgMGwxMzYgMTM2YzkuNSA5LjQgOS41IDI0LjYuMSAzNHpcIj48L3BhdGg+PC9zdmc+UGl6emFyaWFzPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6XCI+PC9wYXRoPjwvc3ZnPjwvYnRuPlxuICAgIFx0ICAgICAgICAgICAgICAgICAgICA8YnRuIGNsYXNzTmFtZT1cImRpc2FibGVcIj48c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWFuZ2xlLXJpZ2h0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yMjQuMyAyNzNsLTEzNiAxMzZjLTkuNCA5LjQtMjQuNiA5LjQtMzMuOSAwbC0yMi42LTIyLjZjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45bDk2LjQtOTYuNC05Ni40LTk2LjRjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45TDU0LjMgMTAzYzkuNC05LjQgMjQuNi05LjQgMzMuOSAwbDEzNiAxMzZjOS41IDkuNCA5LjUgMjQuNi4xIDM0elwiPjwvcGF0aD48L3N2Zz5Tb3J2ZXRlcmlhczxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctY2lyY2xlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNTYgOEMxMTkgOCA4IDExOSA4IDI1NnMxMTEgMjQ4IDI0OCAyNDggMjQ4LTExMSAyNDgtMjQ4UzM5MyA4IDI1NiA4elwiPjwvcGF0aD48L3N2Zz48L2J0bj5cbiAgICBcdCAgICAgICAgICAgICAgICA8L3N1Ym1lbnU+XG4gICAgXHQgICAgICAgICAgICA8L2J0bj5cbiAgICAgICAgICAgICAgICAgICAgPGJ0biBjbGFzc05hbWU9XCJzdWJtZW51LWhhcy1udW1iZXJzXCI+XG4gICAgICAgICAgICAgICAgICAgIFx0PHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1zdG9yZXNcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIwIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTYzNS43IDE3Ni4xbC05MS40LTE2MEM1MzguNiA2LjIgNTI4IDAgNTE2LjUgMGgtMzkzQzExMiAwIDEwMS40IDYuMiA5NS43IDE2LjFsLTkxLjQgMTYwQy03LjkgMTk3LjUgNy40IDIyNCAzMiAyMjRoMzJ2MjU0LjVDNjQgNDk3IDc4LjMgNTEyIDk2IDUxMmgyNTZjMTcuNyAwIDMyLTE1IDMyLTMzLjVWMjI0aDE2MHYyODBjMCA0LjQgMy42IDggOCA4aDE2YzQuNCAwIDgtMy42IDgtOFYyMjRoMzJjMjQuNiAwIDM5LjktMjYuNSAyNy43LTQ3Ljl6TTM1MiA0NzguNWMwIC45LS4zIDEuNC0uMiAxLjVsLTI1NS4yLjJzLS42LS41LS42LTEuN1YzNTJoMjU2djEyNi41em0wLTE1OC41SDk2di05NmgyNTZ2OTZ6TTMyLjEgMTkybDkxLjQtMTYwaDM5M0w2MDggMTkySDMyLjF6XCI+PC9wYXRoPjwvc3ZnPkJlbGV6YTxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctdGVybWluYWxcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIwIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTM0LjQ5NSAzNi40NjVsMjExLjA1MSAyMTEuMDVjNC42ODYgNC42ODYgNC42ODYgMTIuMjg0IDAgMTYuOTcxTDM0LjQ5NSA0NzUuNTM1Yy00LjY4NiA0LjY4Ni0xMi4yODQgNC42ODYtMTYuOTcgMGwtNy4wNzEtNy4wN2MtNC42ODYtNC42ODYtNC42ODYtMTIuMjg0IDAtMTYuOTcxTDIwNS45NDcgMjU2IDEwLjQ1NCA2MC41MDZjLTQuNjg2LTQuNjg2LTQuNjg2LTEyLjI4NCAwLTE2Ljk3MWw3LjA3MS03LjA3YzQuNjg2LTQuNjg3IDEyLjI4NC00LjY4NyAxNi45NyAwek02NDAgNDY4di0xMGMwLTYuNjI3LTUuMzczLTEyLTEyLTEySDMwMGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnYxMGMwIDYuNjI3IDUuMzczIDEyIDEyIDEyaDMyOGM2LjYyNyAwIDEyLTUuMzczIDEyLTEyelwiPjwvcGF0aD48L3N2Zz48Y291bnQ+MjwvY291bnQ+XG4gICAgXHQgICAgICAgICAgICAgICAgPHN1Ym1lbnU+XG4gICAgXHQgICAgICAgICAgICAgICAgICAgIDxidG4gY2xhc3NOYW1lPVwiZGlzYWJsZVwiPjxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctYW5nbGUtcmlnaHRcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIwIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTIyNC4zIDI3M2wtMTM2IDEzNmMtOS40IDkuNC0yNC42IDkuNC0zMy45IDBsLTIyLjYtMjIuNmMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlsOTYuNC05Ni40LTk2LjQtOTYuNGMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlMNTQuMyAxMDNjOS40LTkuNCAyNC42LTkuNCAzMy45IDBsMTM2IDEzNmM5LjUgOS40IDkuNSAyNC42LjEgMzR6XCI+PC9wYXRoPjwvc3ZnPlNhbMOjbyBkZSBDYWJlbGVyZWlybzxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctY2lyY2xlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNTYgOEMxMTkgOCA4IDExOSA4IDI1NnMxMTEgMjQ4IDI0OCAyNDggMjQ4LTExMSAyNDgtMjQ4UzM5MyA4IDI1NiA4elwiPjwvcGF0aD48L3N2Zz48L2J0bj5cbiAgICBcdCAgICAgICAgICAgICAgICAgICAgPGJ0biBjbGFzc05hbWU9XCJkaXNhYmxlXCI+PHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1hbmdsZS1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjI0LjMgMjczbC0xMzYgMTM2Yy05LjQgOS40LTI0LjYgOS40LTMzLjkgMGwtMjIuNi0yMi42Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOWw5Ni40LTk2LjQtOTYuNC05Ni40Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOUw1NC4zIDEwM2M5LjQtOS40IDI0LjYtOS40IDMzLjkgMGwxMzYgMTM2YzkuNSA5LjQgOS41IDI0LjYuMSAzNHpcIj48L3BhdGg+PC9zdmc+QWx1Z3VlbCBkZSBSb3VwYXM8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWNpcmNsZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjU2IDhDMTE5IDggOCAxMTkgOCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzOTMgOCAyNTYgOHpcIj48L3BhdGg+PC9zdmc+PC9idG4+XG4gICAgXHQgICAgICAgICAgICAgICAgICAgIDxidG4gY2xhc3NOYW1lPVwiZGlzYWJsZVwiPjxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctYW5nbGUtcmlnaHRcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIwIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTIyNC4zIDI3M2wtMTM2IDEzNmMtOS40IDkuNC0yNC42IDkuNC0zMy45IDBsLTIyLjYtMjIuNmMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlsOTYuNC05Ni40LTk2LjQtOTYuNGMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlMNTQuMyAxMDNjOS40LTkuNCAyNC42LTkuNCAzMy45IDBsMTM2IDEzNmM5LjUgOS40IDkuNSAyNC42LjEgMzR6XCI+PC9wYXRoPjwvc3ZnPkNvc23DqXRpY29zPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6XCI+PC9wYXRoPjwvc3ZnPjwvYnRuPlxuICAgIFx0ICAgICAgICAgICAgICAgIDwvc3VibWVudT5cbiAgICBcdCAgICAgICAgICAgIDwvYnRuPlxuICAgICAgICAgICAgICAgIDwvbWVudWl0ZW1zPlxuICAgICAgICAgICAgICAgIDxzaWRlYmFyZGl2aWRlcj48L3NpZGViYXJkaXZpZGVyPlxuICAgICAgICAgICAgICAgIDxzaWRlYmFyc2VwYXJhdG9yPkZBTEUgQ09OT1NDTzwvc2lkZWJhcnNlcGFyYXRvcj5cbiAgICAgICAgICAgICAgICA8bWVudWNvbnRhY3Q+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJ0ZWw6MTEgOTMwMTggODM2M1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1waG9uZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNNDg3LjggMjQuMUwzODcgLjhjLTE0LjctMy40LTI5LjggNC4yLTM1LjggMTguMWwtNDYuNSAxMDguNWMtNS41IDEyLjctMS44IDI3LjcgOC45IDM2LjVsNTMuOSA0NC4xYy0zNCA2OS4yLTkwLjMgMTI1LjYtMTU5LjYgMTU5LjZsLTQ0LjEtNTMuOWMtOC44LTEwLjctMjMuOC0xNC40LTM2LjUtOC45TDE4LjkgMzUxLjNDNSAzNTcuMy0yLjYgMzcyLjMuOCAzODdMMjQgNDg3LjdDMjcuMyA1MDIgMzkuOSA1MTIgNTQuNSA1MTIgMzA2LjcgNTEyIDUxMiAzMDcuOCA1MTIgNTQuNWMwLTE0LjYtMTAtMjcuMi0yNC4yLTMwLjR6TTU1LjEgNDgwbC0yMy05OS42IDEwNy40LTQ2IDU5LjUgNzIuOGMxMDMuNi00OC42IDE1OS43LTEwNC45IDIwOC4xLTIwOC4xbC03Mi44LTU5LjUgNDYtMTA3LjQgOTkuNiAyM0M0NzkuNyAyODkuNyAyODkuNiA0NzkuNyA1NS4xIDQ4MHpcIj48L3BhdGg+PC9zdmc+TGlnYcOnw6NvPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6XCI+PC9wYXRoPjwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2FwaS53aGF0c2FwcC5jb20vc2VuZD9waG9uZT01NTExOTMwMTg4MzYzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLXdoYXRzYXBwXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0zODAuOSA5Ny4xQzMzOSA1NS4xIDI4My4yIDMyIDIyMy45IDMyYy0xMjIuNCAwLTIyMiA5OS42LTIyMiAyMjIgMCAzOS4xIDEwLjIgNzcuMyAyOS42IDExMUwwIDQ4MGwxMTcuNy0zMC45YzMyLjQgMTcuNyA2OC45IDI3IDEwNi4xIDI3aC4xYzEyMi4zIDAgMjI0LjEtOTkuNiAyMjQuMS0yMjIgMC01OS4zLTI1LjItMTE1LTY3LjEtMTU3em0tMTU3IDM0MS42Yy0zMy4yIDAtNjUuNy04LjktOTQtMjUuN2wtNi43LTQtNjkuOCAxOC4zTDcyIDM1OS4ybC00LjQtN2MtMTguNS0yOS40LTI4LjItNjMuMy0yOC4yLTk4LjIgMC0xMDEuNyA4Mi44LTE4NC41IDE4NC42LTE4NC41IDQ5LjMgMCA5NS42IDE5LjIgMTMwLjQgNTQuMSAzNC44IDM0LjkgNTYuMiA4MS4yIDU2LjEgMTMwLjUgMCAxMDEuOC04NC45IDE4NC42LTE4Ni42IDE4NC42em0xMDEuMi0xMzguMmMtNS41LTIuOC0zMi44LTE2LjItMzcuOS0xOC01LjEtMS45LTguOC0yLjgtMTIuNSAyLjgtMy43IDUuNi0xNC4zIDE4LTE3LjYgMjEuOC0zLjIgMy43LTYuNSA0LjItMTIgMS40LTMyLjYtMTYuMy01NC0yOS4xLTc1LjUtNjYtNS43LTkuOCA1LjctOS4xIDE2LjMtMzAuMyAxLjgtMy43LjktNi45LS41LTkuNy0xLjQtMi44LTEyLjUtMzAuMS0xNy4xLTQxLjItNC41LTEwLjgtOS4xLTkuMy0xMi41LTkuNS0zLjItLjItNi45LS4yLTEwLjYtLjItMy43IDAtOS43IDEuNC0xNC44IDYuOS01LjEgNS42LTE5LjQgMTktMTkuNCA0Ni4zIDAgMjcuMyAxOS45IDUzLjcgMjIuNiA1Ny40IDIuOCAzLjcgMzkuMSA1OS43IDk0LjggODMuOCAzNS4yIDE1LjIgNDkgMTYuNSA2Ni42IDEzLjkgMTAuNy0xLjYgMzIuOC0xMy40IDM3LjQtMjYuNCA0LjYtMTMgNC42LTI0LjEgMy4yLTI2LjQtMS4zLTIuNS01LTMuOS0xMC41LTYuNnpcIj48L3BhdGg+PC9zdmc+V2hhdHNhcHA8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWNpcmNsZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjU2IDhDMTE5IDggOCAxMTkgOCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzOTMgOCAyNTYgOHpcIj48L3BhdGg+PC9zdmc+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIm1haWx0bzpjb250YWN0QGF2bi5zeXN0ZW1zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLW1haWxcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIwIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOC45NDEgOCA4IDExOC45MTkgOCAyNTZjMCAxMzcuMDU4IDExMC45MTkgMjQ4IDI0OCAyNDggNTIuOTI1IDAgMTA0LjY4LTE3LjA3OCAxNDcuMDkyLTQ4LjMxOSA1LjUwMS00LjA1MiA2LjQyMy0xMS45MjQgMi4wOTUtMTcuMjExbC01LjA3NC02LjE5OGMtNC4wMTgtNC45MDktMTEuMTkzLTUuODgzLTE2LjMwNy0yLjEyOUMzNDYuOTMgNDU3LjIwOCAzMDEuOTc0IDQ3MiAyNTYgNDcyYy0xMTkuMzczIDAtMjE2LTk2LjYwNy0yMTYtMjE2IDAtMTE5LjM3NSA5Ni42MDctMjE2IDIxNi0yMTYgMTE4LjQ0NSAwIDIxNiA4MC4wMjQgMjE2IDIwMCAwIDcyLjg3My01Mi44MTkgMTA4LjI0MS0xMTYuMDY1IDEwOC4yNDEtMTkuNzM0IDAtMjMuNjk1LTEwLjgxNi0xOS41MDMtMzMuODY4bDMyLjA3LTE2NC4wNzFjMS40NDktNy40MTEtNC4yMjYtMTQuMzAyLTExLjc3Ny0xNC4zMDJoLTEyLjQyMWExMiAxMiAwIDAgMC0xMS43ODEgOS43MThjLTIuMjk0IDExLjg0Ni0yLjg2IDEzLjQ2NC0zLjg2MSAyNS42NDctMTEuNzI5LTI3LjA3OC0zOC42MzktNDMuMDIzLTczLjM3NS00My4wMjMtNjguMDQ0IDAtMTMzLjE3NiA2Mi45NS0xMzMuMTc2IDE1Ny4wMjcgMCA2MS41ODcgMzMuOTE1IDk4LjM1NCA5MC43MjMgOTguMzU0IDM5LjcyOSAwIDcwLjYwMS0yNC4yNzggODYuNjMzLTQ2Ljk4Mi0xLjIxMSAyNy43ODYgMTcuNDU1IDQyLjIxMyA0NS45NzUgNDIuMjEzQzQ1My4wODkgMzc4Ljk1NCA1MDQgMzIxLjcyOSA1MDQgMjQwIDUwNCAxMDMuODE0IDM5My44NjMgOCAyNTYgOHptLTM3LjkyIDM0Mi42MjdjLTM2LjY4MSAwLTU4LjU4LTI1LjEwOC01OC41OC02Ny4xNjYgMC03NC42OSA1MC43NjUtMTIxLjU0NSA5Ny4yMTctMTIxLjU0NSAzOC44NTcgMCA1OC4xMDIgMjcuNzkgNTguMTAyIDY1LjczNSAwIDU4LjEzMy0zOC4zNjkgMTIyLjk3Ni05Ni43MzkgMTIyLjk3NnpcIj48L3BhdGg+PC9zdmc+RS1tYWlsPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6XCI+PC9wYXRoPjwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJzbXM6MTEgOTMwMTggODM2M1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1tYWlsXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk00MDAgMzJINDhDMjEuNDkgMzIgMCA1My40OSAwIDgwdjM1MmMwIDI2LjUxIDIxLjQ5IDQ4IDQ4IDQ4aDM1MmMyNi41MSAwIDQ4LTIxLjQ5IDQ4LTQ4VjgwYzAtMjYuNTEtMjEuNDktNDgtNDgtNDh6bTE2IDQwMGMwIDguODIyLTcuMTc4IDE2LTE2IDE2SDQ4Yy04LjgyMiAwLTE2LTcuMTc4LTE2LTE2VjgwYzAtOC44MjIgNy4xNzgtMTYgMTYtMTZoMzUyYzguODIyIDAgMTYgNy4xNzggMTYgMTZ2MzUyem0tNjQtMzA0SDk2Yy0xNy42NzMgMC0zMiAxNC4zMjctMzIgMzJ2MTkyYzAgMTcuNjczIDE0LjMyNyAzMiAzMiAzMmgyNTZjMTcuNjczIDAgMzItMTQuMzI3IDMyLTMyVjE2MGMwLTE3LjY3My0xNC4zMjctMzItMzItMzJ6bTAgMzJ2MzMuODU1Yy0xNC4xMzYgMTEuNjI4LTM2LjU2NiAyOS42NjQtODIuMTE3IDY1LjgyMUMyNTkuNDI2IDI2OC4wMTUgMjM4Ljc0OCAyODggMjI0LjI1NiAyODhsLS4yNTYtLjAwMi0uMjU2LjAwMmMtMTQuNDkyIDAtMzUuMTctMTkuOTg0LTQ1LjYyOC0yOC4zMjQtNDUuNTQ0LTM2LjE1Mi02Ny45NzgtNTQuMTkyLTgyLjExNy02NS44MjJWMTYwSDM1MnpNOTYgMzUyVjIzNS4wOTJjMTQuMTA5IDExLjM2NyAzMy42MjQgMjYuOTQ4IDYyLjIyMSA0OS42NDggMTMuNzc3IDExLjAxIDM3LjkwMiAzNS4yNiA2NS41MjMgMzUuMjZsLjI1My0uMDAxLjI1OC4wMDFjMjcuNTI5IDAgNTEuMzkyLTIzLjk3NSA2NS41NDEtMzUuMjc0IDI4LjU4My0yMi42ODkgNDguMDk5LTM4LjI3IDYyLjIwMy00OS42MzRWMzUySDk2elwiPjwvcGF0aD48L3N2Zz5TTVM8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWNpcmNsZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjU2IDhDMTE5IDggOCAxMTkgOCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzOTMgOCAyNTYgOHpcIj48L3BhdGg+PC9zdmc+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L21lbnVjb250YWN0PlxuICAgICAgICAgICAgPC9tZW51c2Nyb2xsPlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIGxlZnRtZW51IHtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogLTM0MHB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTAwMDA7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAzMzBweDtcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDhweCAjMDAwO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWMyMjJlO1xuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGxlZnQgMzUwbXMgZWFzZSAwcztcbiAgICAgICAgICAgICAgICAgICAgLW1vei10cmFuc2l0aW9uOiBsZWZ0IDM1MG1zIGVhc2UgMHM7XG4gICAgICAgICAgICAgICAgICAgIC1tcy10cmFuc2l0aW9uOiBsZWZ0IDM1MG1zIGVhc2UgMHM7XG4gICAgICAgICAgICAgICAgICAgIC1vLXRyYW5zaXRpb246IGxlZnQgMzUwbXMgZWFzZSAwcztcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogbGVmdCAzNTBtcyBlYXNlIDBzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBzaWRlYmFydXNlciB7XG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCA2cHggNHB4IHJnYmEoMCwwLDAsLjMpO1xuICAgICAgICAgICAgICAgICAgICB0b3VjaC1hY3Rpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE4NXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBzaWRlYmFydXNlciBwaG90byB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMfS9zdGF0aWMvaW1hZ2VzL2ljb25zL2ljb24tMTkyeDE5Mi5wbmcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBzaWRlYmFydXNlciBwaG90byB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjMDBmOWE2O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgdG9wO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCA1cHggIzAwMDAwMDtcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggIzAwMDAwMDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxNXB4IDBweCAwcHggMTVweDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogOTBweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDkwcHg7XG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBzaWRlYmFydXNlciBwaG90byB0aXRsZSB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAyODVweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogMTA1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IHNpZGViYXJ1c2VyIHBob3RvIHN1YnRpdGxlIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjkwcHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjY2NjO1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDEwMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBzaWRlYmFydXNlciBiZ2ltZyB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMfS9zdGF0aWMvaW1hZ2VzL2hvbWVwYWdlL2JhY2tncm91bmQtYXZuLTEuanBnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgc2lkZWJhcnVzZXIgYmdpbWcge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IGhhcmQtbGlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2E3ZjdmZjtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE4NXB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgc2lkZWJhcnVzZXIgYmdzaGFkb3cge1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiA5O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE4NXB4O1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20scmdiYSgwLDAsMCwwKSAwLHJnYmEoMCwwLDAsMCkgMjAlLHJnYmEoMCwwLDAsLjEpIDQwJSxyZ2JhKDAsMCwwLC43KSA3MCUscmdiYSgwLDAsMCwxKSAxMDAlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDIzNXB4KTtcbiAgICAgICAgICAgICAgICAgICAgdG91Y2gtYWN0aW9uOiBwYW4teTtcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzMwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgc2lkZWJhcnNlcGFyYXRvcjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgc2lkZWJhcnNlcGFyYXRvciB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNjY2M7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnQtZW51IG1lbnVzY3JvbGwgc2lkZWJhcmRpdmlkZXIge1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wOiBzb2xpZCAxcHggcmdiYSgwLDAsMCwuMik7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCByZ2JhKDI1NSwyNTUsMjU1LC4wMyk7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0bixcbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVjb250YWN0ID4gYSB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xuICAgICAgICAgICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDU1cHg7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNjY2M7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuLmRpc2FibGUsXG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51Y29udGFjdCA+IGEuZGlzYWJsZSB7XG4gICAgICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAuNTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51aXRlbXMgPiBidG4gLnN2Zy1pbmxpbmUsXG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51Y29udGFjdCA+IGEgLnN2Zy1pbmxpbmUge1xuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogLS4xMjVlbTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMjVweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNiNTAwZmY7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjJweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgIHRvcDogM3B4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0biAuc3ZnLWlubGluZS5zdmctY2lyY2xlLFxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWNvbnRhY3QgPiBhIC5zdmctaW5saW5lLnN2Zy1jaXJjbGUge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzQzNDc1MjtcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAyNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0biAuc3ZnLWlubGluZS5zdmctdGVybWluYWwge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzQzNDc1MjtcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtNXB4O1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDE4cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuIC5zdmctaW5saW5lLnN2Zy10diB7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IC00cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuIC5zdmctaW5saW5lLnN2Zy1zdG9yZXMge1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtNXB4O1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDJweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51aXRlbXMgPiBidG4gLnN2Zy1pbmxpbmUuc3ZnLXJlc3RhdXJhbnRlcyxcbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0biAuc3ZnLWlubGluZS5zdmctd2hhdHNhcHAsXG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51aXRlbXMgPiBidG4gLnN2Zy1pbmxpbmUuc3ZnLXBob25lLFxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuIC5zdmctaW5saW5lLnN2Zy1tYWlsLFxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuIC5zdmctaW5saW5lLnN2Zy1zdGFyIHtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogLTJweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51aXRlbXMgPiBidG46aG92ZXIsXG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51Y29udGFjdCA+IGE6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjMyYjNhO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuOmhvdmVyIC5zdmctaW5saW5lLnN2Zy10ZXJtaW5hbCxcbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0bjpob3ZlciAuc3ZnLWlubGluZS5zdmctY2lyY2xlLFxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWNvbnRhY3QgPiBhOmhvdmVyIC5zdmctaW5saW5lLnN2Zy1jaXJjbGUge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuID4gY291bnQge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjYzk0N2ZmO1xuICAgICAgICAgICAgICAgICAgICByaWdodDogLTI1cHg7XG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAtMnB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0biBzdWJtZW51IHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSArIDI1cHgpO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IC0yNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0biBzdWJtZW51IGJ0bi5kaXNhYmxlIHtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogLjU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuIHN1Ym1lbnUgYnRuIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAzNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0biBzdWJtZW51Lm9wZW4ge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0bjpob3ZlciBzdWJtZW51IGJ0biAuc3ZnLWlubGluZS5zdmctY2lyY2xlIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM0MzQ3NTI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuOmhvdmVyIHN1Ym1lbnUgYnRuOm5vdCguZGlzYWJsZSk6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmYzYTRlO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuOmhvdmVyIHN1Ym1lbnUgYnRuOm5vdCguZGlzYWJsZSk6aG92ZXIgLnN2Zy1pbmxpbmUuc3ZnLWNpcmNsZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk0MHB4KSB7XG4gICAgICAgICAgICAgICAgICAgIGZvb3RlciBpbmZvcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA2MjVweCkge1xuICAgICAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2l0ZW1vYmlsZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgIFx0PC9sZWZ0bWVudT5cbiAgICApfVxufSJdfQ== */\n/*@ sourceURL=/home/ubuntu/workspace/estudo/next/components/interface.js */"),
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
      $(window).on('load', function () {
        $('body').addClass("loaded");
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
        className: "jsx-3837368654",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("logo", {
        className: "jsx-3837368654",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("text", {
        className: "jsx-3837368654",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223
        },
        __self: this
      }, "AVN SYSTEMS")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
        className: "jsx-3837368654",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/",
        as: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "jsx-3837368654",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225
        },
        __self: this
      }, "Home")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/about",
        as: "/about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "jsx-3837368654",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226
        },
        __self: this
      }, "About")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/tvmaze",
        as: "/tvmaze",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "jsx-3837368654",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        },
        __self: this
      }, "TV Maze")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/404",
        as: "/404",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "jsx-3837368654",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        },
        __self: this
      }, "404"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("navtoggle", {
        className: "jsx-3837368654",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("bar", {
        className: "jsx-3837368654",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("bar", {
        className: "jsx-3837368654",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("bar", {
        className: "jsx-3837368654",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("navslider", {
        className: "jsx-3837368654",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "3837368654",
        css: "header.jsx-3837368654{overflow:hidden;position:fixed;z-index:10000;display:none;height:90px;width:100%;}header.jsx-3837368654 logo.jsx-3837368654{position:absolute;padding:16px 0px;width:170px;left:90px;top:10px;background-image:url(".concat("", "/static/images/icon.png);background-repeat:no-repeat;background-size:contain;-webkit-filter:gray;filter:gray;-webkit-transition:all 150ms ease-in-out;-moz-transition:all 150ms ease-in-out;-ms-transition:all 150ms ease-in-out;-o-transition:all 150ms ease-in-out;-webkit-transition:all 150ms ease-in-out;transition:all 150ms ease-in-out;}header.jsx-3837368654 logo.jsx-3837368654:hover{-webkit-filter:none;-moz-filter:none;-o-filter:none;-webkit-filter:none;filter:none;}header.jsx-3837368654 logo.jsx-3837368654 text.jsx-3837368654{display:-webkit-inline-box;text-transform:uppercase;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;position:relative;font-weight:bold;min-width:110px;font-size:14px;color:#5f5f5f;left:60px;}header.jsx-3837368654 nav.jsx-3837368654{margin:0 20px;float:right;}header.jsx-3837368654 nav.jsx-3837368654 a.jsx-3837368654{-webkit-text-decoration:none;text-decoration:none;display:inline-block;text-transform:uppercase;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;font-weight:bold;margin:25px 10px;font-size:14px;color:#d9d9d9;}header.jsx-3837368654 nav.jsx-3837368654 a.jsx-3837368654:hover{color:#8500FF;}header.jsx-3837368654 navtoggle.jsx-3837368654{cursor:pointer;display:inline-block;position:absolute;width:45px;left:20px;top:15px;}header.jsx-3837368654 navtoggle.jsx-3837368654 bar.jsx-3837368654{border-bottom:2px solid #aaa;display:block;margin:7px 0;width:100%;height:5px;}header.jsx-3837368654 navtoggle.jsx-3837368654:hover bar.jsx-3837368654{border-bottom:2px solid #bc73ff;}header.jsx-3837368654 navslider.jsx-3837368654{border-bottom:4px solid #8500FF;position:absolute;height:0;top:50px;-webkit-transition:all 250ms ease-in-out;-moz-transition:all 250ms ease-in-out;-ms-transition:all 250ms ease-in-out;-o-transition:all 250ms ease-in-out;-webkit-transition:all 250ms ease-in-out;transition:all 250ms ease-in-out;}@media (max-width:625px){header.jsx-3837368654{background:white;height:58px;}header.jsx-3837368654 logo.jsx-3837368654{left:calc(50% - 85px);-webkit-filter:none;-moz-filter:none;-o-filter:none;-webkit-filter:none;filter:none;top:1px;}header.jsx-3837368654 nav.jsx-3837368654{display:none;}header.jsx-3837368654 navtoggle.jsx-3837368654{top:5px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VidW50dS93b3Jrc3BhY2UvZXN0dWRvL25leHQvY29tcG9uZW50cy9pbnRlcmZhY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdU80QixBQUd5QyxBQVFFLEFBa0JFLEFBTU8sQUFXYixBQUlPLEFBVVAsQUFHQyxBQVFjLEFBT0csQUFHQSxBQWNYLEFBSUssQUFRVCxBQUdMLFFBQ1osS0FIQSxDQTdEWSxBQWNoQixDQUd5QixDQTVETixDQTRGQyxDQXBGQyxFQWtCQSxFQXNFTyxJQXBENUIsQ0FaNkIsRUFvQ1gsQUF5QmQsRUE1RmMsQ0EwRWxCLEFBR3NCLEdBckVOLENBb0RNLENBbENILEtBc0VNLENBNUJSLEVBbkVBLEVBUUgsR0FxQ1csQUFnQ1osRUFuREcsQUFLTyxFQTZCUixFQVFBLENBM0RGLENBUkcsQ0E2RUgsQUFrQlUsTUFuQ1QsQ0FsRGdFLENBMEQvRCxDQVc4QixFQTlFOUIsQ0E0Q2MsR0FtRFQsQ0FuQ1AsR0FRYixHQW5FQSxHQXdCQSxBQW9DQSxZQWhCdUIsVUFtRFAsR0FqQjBCLEtBa0J0QywwQkF2RjRCLEtBb0JWLEVBa0RtQixnQkFqRHBCLEtBcEJPLFlBcUJSLElBaURvQixLQW5DbkIsR0FsQ0wsSUFxQkcsVUFjRSxLQWJILFNBZ0RtQixHQWxDbEIsQ0FsQzBCLENBcUIvQixVQUNkLEdBYWtCLGNBQ2xCLGFBbkMwQyw2QkFvRTFDLFNBbkV5QyxxQ0FDRCxvQ0FDSCwwRUFDckMiLCJmaWxlIjoiL2hvbWUvdWJ1bnR1L3dvcmtzcGFjZS9lc3R1ZG8vbmV4dC9jb21wb25lbnRzL2ludGVyZmFjZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qZ2xvYmFsICQgbmF2aWdhdG9yKi9cblxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5cbmltcG9ydCBOUHJvZ3Jlc3MgZnJvbSAnbnByb2dyZXNzJ1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcblxuUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VTdGFydCcsICh1cmwpID0+IHtcbiAgY29uc29sZS5sb2coYExvYWRpbmc6ICR7dXJsfWApXG4gIE5Qcm9ncmVzcy5zdGFydCgpXG59KVxuLy8gUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VDb21wbGV0ZScsICgpID0+IE5Qcm9ncmVzcy5kb25lKCkpXG4vLyBSb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUVycm9yJywgKCkgPT4gTlByb2dyZXNzLmRvbmUoKSlcblxuZXhwb3J0IGRlZmF1bHQgKHsgY2hpbGRyZW4sXG4gICAgdGl0bGUgPSAnVGhpcyBpcyB0aGUgZGVmYXVsdCB0aXRsZScsXG4gICAgXG4gICAgb2dTaXRlTmFtZSA9IFwiYXZuLnN5c3RlbXNcIiwgb2dUaXRsZSA9IFwiV2Vic2l0ZSB8IGF2bi5zeXN0ZW1zXCIsXG4gICAgb2dVcmwgPSBcImh0dHBzOi8vYXZuLnN5c3RlbXNcIiwgb2dUeXBlID0gXCJhcnRpY2xlXCIsXG4gICAgb2dEZXNjcmlwdGlvbiA9IFwiV2Vic2l0ZSBjcmVhdGVkIHdpdGggbmV4dC5qcyBvcHRtaXplZCBhcyBhIFBXQVwiLFxuICAgIG9nSW1hZ2UgPSAnL3N0YXRpYy9pbWFnZXMvYXZuLnN5c3RlbXMub2ctaW1hZ2UuanBnJyxcbiAgICBcbiAgICB0d2l0dGVyU2l0ZSA9IFwiQGF2bi5zeXN0ZW1zXCIsXG4gICAgdHdpdHRlckNyZWF0b3IgPSBcIkBhdm4uc3lzdGVtc1wiLFxuICAgIFxuICAgIGNhbm9uaWNhbCA9IFwiaHR0cHM6Ly9hdm4uc3lzdGVtc1wiLFxuICAgIGZlZWRYbWwgPSBcImh0dHBzOi8vYXZuLnN5c3RlbXMvZmVlZC54bWxcIixcbiAgICBmZWVkSnNvbiA9IFwiaHR0cHM6Ly9hdm4uc3lzdGVtc20vZmVlZC5qc29uXCJcbiAgfSkgPT4gKFxuICA8aW50ZXJmYWNlPlxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPnsgdGl0bGUgfTwvdGl0bGU+XG4gICAgICA8bWV0YSBjaGFyU2V0PSd1dGYtOCcgLz5cbiAgICAgIDxtZXRhIG5hbWU9J3ZpZXdwb3J0JyBjb250ZW50PSdpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoJyAvPlxuICAgICAgPG1ldGEgbmFtZT1cImF1dGhvclwiIGNvbnRlbnQ9XCJBbGxhbiBBdmVsYXIgLSBodHRwczovL2FsbGFuYXZlbGFyLmNvbS9cIiAvPlxuICAgICAgXG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnNpdGVfbmFtZVwiIGNvbnRlbnQ9eyBvZ1NpdGVOYW1lIH0gLz5cbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PXsgb2dUaXRsZSB9IC8+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnVybFwiIGNvbnRlbnQ9eyBvZ1VybCB9IC8+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnR5cGVcIiBjb250ZW50PXsgb2dUeXBlIH0gLz5cbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PXsgb2dEZXNjcmlwdGlvbiB9IC8+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD17IHByb2Nlc3MuZW52LkJBQ0tFTkRfVVJMICsgb2dJbWFnZSB9IC8+XG4gICAgXG4gICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpjYXJkXCIgY29udGVudD1cInN1bW1hcnlfbGFyZ2VfaW1hZ2VcIiAvPlxuICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6c2l0ZVwiIGNvbnRlbnQ9eyB0d2l0dGVyU2l0ZSB9IC8+XG4gICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpjcmVhdG9yXCIgY29udGVudD17IHR3aXR0ZXJDcmVhdG9yIH0gLz5cbiAgICBcbiAgICAgIDxsaW5rIHJlbD1cImNhbm9uaWNhbFwiIGhyZWY9eyBjYW5vbmljYWwgfSAvPlxuICAgICAgPGxpbmsgcmVsPVwiYWx0ZXJuYXRlXCIgdHlwZT1cImFwcGxpY2F0aW9uL3Jzcyt4bWxcIiB0aXRsZT17IG9nVGl0bGUgfSBocmVmPXsgZmVlZFhtbCB9IC8+XG4gICAgICA8bGluayByZWw9XCJhbHRlcm5hdGVcIiB0eXBlPVwiYXBwbGljYXRpb24vanNvblwiIHRpdGxlPXsgb2dUaXRsZSB9IGhyZWY9eyBmZWVkSnNvbiB9IC8+XG5cbiAgICAgIDxsaW5rIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBzaXplcz1cIjExNHgxMTRcIiBocmVmPXsgcHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyAnL3N0YXRpYy9pbWFnZXMvaWNvbi5wbmcnfSAvPlxuICAgICAgPGxpbmsgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIHNpemVzPVwiMTIweDEyMFwiIGhyZWY9eyBwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArICcvc3RhdGljL2ltYWdlcy9pY29uLnBuZyd9IC8+XG4gICAgICA8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCIxNDR4MTQ0XCIgaHJlZj17IHByb2Nlc3MuZW52LkJBQ0tFTkRfVVJMICsgJy9zdGF0aWMvaW1hZ2VzL2ljb24ucG5nJ30gLz5cbiAgICAgIDxsaW5rIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBzaXplcz1cIjE1MngxNTJcIiBocmVmPXsgcHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyAnL3N0YXRpYy9pbWFnZXMvaWNvbi5wbmcnfSAvPlxuICAgICAgPGxpbmsgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIHNpemVzPVwiMTgweDE4MFwiIGhyZWY9eyBwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArICcvc3RhdGljL2ltYWdlcy9pY29uLnBuZyd9IC8+XG4gICAgICA8bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3BuZ1wiIGhyZWY9eyBwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArICcvc3RhdGljL2ltYWdlcy9pY29uLnBuZyd9IC8+XG4gICAgICA8bGluayByZWw9XCJzaG9ydGN1dCBpY29uXCIgaHJlZj17IHByb2Nlc3MuZW52LkJBQ0tFTkRfVVJMICsgJy9zdGF0aWMvaW1hZ2VzL2Zhdmljb24uaWNvJ30gLz5cbiAgICAgIFxuICAgICAgPGxpbmsgcmVsPVwibWFzay1pY29uXCIgaHJlZj1cIi9hc3NldHMvc2FmYXJpLXBpbm5lZC10YWIuc3ZnXCIgY29sb3I9XCIjNWJiYWQ1XCIgLz5cbiAgICAgIDxsaW5rIHJlbD1cIm1hbmlmZXN0XCIgaHJlZj17IHByb2Nlc3MuZW52LkJBQ0tFTkRfVVJMICsgJy9zdGF0aWMvbWFuaWZlc3QuanNvbid9IC8+XG4gICAgICBcbiAgICAgIDxtZXRhIG5hbWU9XCJtc2FwcGxpY2F0aW9uLVRpbGVDb2xvclwiIGNvbnRlbnQ9XCIjNTcwMEFFXCIgLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJtc2FwcGxpY2F0aW9uLVRpbGVJbWFnZVwiIGNvbnRlbnQ9eyBwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArICcvc3RhdGljL2ltYWdlcy9hdm4uc3lzdGVtcy5vZy1pbWFnZS5qcGcnfSAvPlxuICAgICAgPG1ldGEgbmFtZT1cIm1zYXBwbGljYXRpb24tY29uZmlnXCIgY29udGVudD17IHByb2Nlc3MuZW52LkJBQ0tFTkRfVVJMICsgJy9zdGF0aWMvYnJvd3NlcmNvbmZpZy54bWwnfSAvPlxuICAgICAgPG1ldGEgbmFtZT1cInRoZW1lLWNvbG9yXCIgY29udGVudD1cIiM1NzAwQUVcIiAvPlxuICAgICAgXG4gICAgICA8bGluayBkZWZlciByZWw9J3N0eWxlc2hlZXQnIGhyZWY9J2h0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuMC4wLWJldGEuMy9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnIGludGVncml0eT0nc2hhMzg0LVp1ZytRaURvSk9yWjV0NGxzc0xkeEdoVnJ1cmJtQldvcG9FbCtNNkJkRWZ3bkNKWnRLeGkxS2d4VXlKcTEzZHknIGNyb3NzT3JpZ2luPSdhbm9ueW1vdXMnIC8+XG4gICAgICA8bGluayByZWw9J3N0eWxlc2hlZXQnIHR5cGU9J3RleHQvY3NzJyBocmVmPXsgcHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyAnL3N0YXRpYy9jc3MvbnByb2dyZXNzLmNzcyd9IC8+XG4gICAgICA8c2NyaXB0IGRlZmVyIHNyYz1cImh0dHBzOi8vY29kZS5qcXVlcnkuY29tL2pxdWVyeS0zLjMuMS5taW4uanNcIj48L3NjcmlwdD5cbiAgICA8L0hlYWQ+XG4gICAgPEhlYWRlciAvPlxuICAgIDxMZWZ0TWVudSAvPlxuICAgIDxwYWdlPlxuICAgICAgICB7IGNoaWxkcmVuIH1cbiAgICA8L3BhZ2U+XG4gICAgPG1lbnVoaWRlcj48L21lbnVoaWRlcj5cbiAgICA8Rm9vdGVyIC8+XG4gICAgPHBhZ2Vsb2FkZXI+PGJhcj48L2Jhcj48L3BhZ2Vsb2FkZXI+XG4gICAgXG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDMyMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKCR7cHJvY2Vzcy5lbnYuQkFDS0VORF9VUkx9L3N0YXRpYy9pbWFnZXMvYm9keS1iZy5qcGcpICNGNUY3RjY7XG4gICAgICAgIH1cbiAgICAgICAgcGFnZSB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxODVweCAyMHB4O1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG4gICAgICAgIHByZSBjb2RlIHtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZSFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgICAgLmZ0bCB7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgfVxuICAgICAgICAuZnRyIHtcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgfVxuICAgICAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGJvZHkubGVmdC1tZW51IGxlZnRtZW51IHtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIH1cbiAgICAgICAgYm9keS5sZWZ0LW1lbnUgaGVhZGVyIG5hdnRvZ2dsZSB7XG4gICAgICAgICAgICBsZWZ0OiAzNTBweDtcbiAgICAgICAgfVxuICAgICAgICBib2R5LmxvYWRlZCBtZW51aGlkZXIge1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogZGlzcGxheSAxcyBlYXNlIDFzO1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIH1cbiAgICAgICAgLm5wcm9ncmVzcy1idXN5IGJvZHkubG9hZGVkIG1lbnVoaWRlcixcbiAgICAgICAgYm9keS5sb2FkZWQubGVmdC1tZW51IG1lbnVoaWRlciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIH1cbiAgICAgICAgYm9keS5sb2FkZWQgcGFnZWxvYWRlciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICAgIG1lbnVoaWRlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC41KTtcbiAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHotaW5kZXg6IDEwMzA7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2UgMHM7XG4gICAgICAgICAgICAtbW96LXRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZSAwcztcbiAgICAgICAgICAgIC1tcy10cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2UgMHM7XG4gICAgICAgICAgICAtby10cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2UgMHM7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2UgMHM7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5ucHJvZ3Jlc3MtYnVzeSBib2R5LmxvYWRlZCBwYWdlbG9hZGVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG4gICAgICAgIHBhZ2Vsb2FkZXIge1xuICAgICAgICAgICAgbWFyZ2luOiAtMTVweCAwIDAgLTEwMHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwMDtcbiAgICAgICAgICAgIHotaW5kZXg6IDk5OTk5OTk7XG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgfVxuICAgICAgICBwYWdlbG9hZGVyIGJhciB7XG4gICAgICAgICAgICBtYXJnaW46IC0ycHggMCAwIC04N3B4O1xuICAgICAgICAgICAgYW5pbWF0aW9uOiBncmFkdHJhbnNsYXRlIDJzIGluZmluaXRlIGxpbmVhcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLGxlZnQgdG9wLHJpZ2h0IHRvcCxjb2xvci1zdG9wKDAlLHdoaXRlKSxjb2xvci1zdG9wKDUwJSwjODUwMEZGKSxjb2xvci1zdG9wKDEwMCUsd2hpdGUpKTs7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDQwMHB4IDFweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM4NTAwRkY7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB3aWR0aDogMTc0cHg7XG4gICAgICAgICAgICBvcGFjaXR5OiAuODtcbiAgICAgICAgICAgIGhlaWdodDogNHB4O1xuICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGJvZHkubG9hZGVkIGxlZnRtZW51LFxuICAgICAgICBib2R5LmxvYWRlZCBoZWFkZXIsXG4gICAgICAgIGJvZHkubG9hZGVkIGZvb3RlcixcbiAgICAgICAgYm9keS5sb2FkZWQgcGFnZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzk5cHgpIHtcbiAgICAgICAgICAgIGJvZHkubGVmdC1tZW51IGxlZnRtZW51LCBsZWZ0bWVudSBtZW51c2Nyb2xsIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gNjlweCkhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMzMwcHg7XG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiAyNjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9pbnRlcmZhY2U+XG4pXG5cbmV4cG9ydCBjbGFzcyBIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbXBvbmVudERpZE1vdW50ICgpIHtcbiAgICAgICAgaWYgKCdzZXJ2aWNlV29ya2VyJyBpbiBuYXZpZ2F0b3IpIHtcbiAgICAgICAgLy8gbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXJcbiAgICAgICAgLy8gICAucmVnaXN0ZXIocHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKycvc2VydmljZS13b3JrZXIuanMnKVxuICAgICAgICAvLyAgIC50aGVuKHJlZ2lzdHJhdGlvbiA9PiB7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZygnc2VydmljZSB3b3JrZXIgcmVnaXN0cmF0aW9uIHN1Y2Nlc3NmdWwnKVxuICAgICAgICAvLyAgIH0pXG4gICAgICAgIC8vICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIC8vICAgICBjb25zb2xlLndhcm4oJ3NlcnZpY2Ugd29ya2VyIHJlZ2lzdHJhdGlvbiBmYWlsZWQnLCBlcnIubWVzc2FnZSlcbiAgICAgICAgLy8gICB9KVxuICAgICAgICB9XG4gICAgICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKHdpbmRvdykuc2Nyb2xsVG9wKCkgPiAwICYmICQod2luZG93KS53aWR0aCgpID4gNTUwID8gJChcImhlYWRlclwiKS5hZGRDbGFzcyhcInJlc2l6ZVwiKSA6ICQoXCJoZWFkZXJcIikucmVtb3ZlQ2xhc3MoXCJyZXNpemVcIilcbiAgICAgICAgfSlcbiAgICAgICAgJCh3aW5kb3cpLm9uKCdsb2FkJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoXCJsb2FkZWRcIilcbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgICAgICQoXCJoZWFkZXIgbmF2IGFcIikuaG92ZXIoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKFwiaGVhZGVyIG5hdnNsaWRlclwiKS5jc3Moe1xuICAgICAgICAgICAgICAgIGxlZnQ6ICQodGhpcykucG9zaXRpb24oKS5sZWZ0ICsgcGFyc2VJbnQoJCh0aGlzKS5jc3MoXCJtYXJnaW5MZWZ0XCIpKSArIFwicHhcIixcbiAgICAgICAgICAgICAgICB3aWR0aDogJCh0aGlzKS53aWR0aCgpICsgXCJweFwiLFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IFwiLjk5OVwiXG4gICAgICAgICAgICB9KVxuICAgICAgICB9LCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQoXCJoZWFkZXIgbmF2c2xpZGVyXCIpLmNzcyhcIm9wYWNpdHlcIiwgXCIwXCIpXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZW5kZXIgKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgICAgICAgICA8bG9nbz48dGV4dD5BVk4gU1lTVEVNUzwvdGV4dD48L2xvZ28+XG4gICAgICAgICAgICAgICAgPG5hdj5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nLycgYXM9eyBwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArIGAvYH0+PGE+SG9tZTwvYT48L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9hYm91dCcgYXM9eyBwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArIGAvYWJvdXRgfT48YT5BYm91dDwvYT48L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy90dm1hemUnIGFzPXsgcHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyBgL3R2bWF6ZWB9PjxhPlRWIE1hemU8L2E+PC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvNDA0JyBhcz17IHByb2Nlc3MuZW52LkJBQ0tFTkRfVVJMICsgYC80MDRgfT48YT40MDQ8L2E+PC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgICAgICAgIDxuYXZ0b2dnbGU+PGJhcj48L2Jhcj48YmFyPjwvYmFyPjxiYXI+PC9iYXI+PC9uYXZ0b2dnbGU+XG4gICAgICAgICAgICAgICAgPG5hdnNsaWRlcj48L25hdnNsaWRlcj5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTAwMDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA5MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyIGxvZ28ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTZweCAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTcwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiA5MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTH0vc3RhdGljL2ltYWdlcy9pY29uLnBuZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBncmF5O1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAxNTBtcyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDE1MG1zIGVhc2UtaW4tb3V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgLW1zLXRyYW5zaXRpb246IGFsbCAxNTBtcyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC1vLXRyYW5zaXRpb246IGFsbCAxNTBtcyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAxNTBtcyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBoZWFkZXIgbG9nbzpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWZpbHRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC1tb3otZmlsdGVyOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgLW8tZmlsdGVyOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBub25lO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlciBsb2dvIHRleHQge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1pbmxpbmUtYm94O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMTEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzVmNWY1ZjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDYwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyIG5hdiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBoZWFkZXIgbmF2IGEge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMjVweCAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNkOWQ5ZDk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyIG5hdiBhOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjODUwMEZGO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlciBuYXZ0b2dnbGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQ1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlciBuYXZ0b2dnbGUgYmFyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjYWFhO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDdweCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBoZWFkZXIgbmF2dG9nZ2xlOmhvdmVyIGJhciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2JjNzNmZjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBoZWFkZXIgbmF2c2xpZGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjODUwMEZGO1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAyNTBtcyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDI1MG1zIGVhc2UtaW4tb3V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgLW1zLXRyYW5zaXRpb246IGFsbCAyNTBtcyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC1vLXRyYW5zaXRpb246IGFsbCAyNTBtcyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAyNTBtcyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYyNXB4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNThweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlciBsb2dvIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBjYWxjKDUwJSAtIDg1cHgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtZmlsdGVyOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC1tb3otZmlsdGVyOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC1vLWZpbHRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAxcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXIgbmF2IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyIG5hdnRvZ2dsZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZvb3RlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuICAgICAgICBcbiAgICB9XG4gICAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8Zm9vdGVyPlxuICAgICAgICAgICAgPGxpZ2h0LXJpZ2h0PjwvbGlnaHQtcmlnaHQ+XG4gICAgICAgICAgICA8dmVyc2lvbiBjbGFzc05hbWU9XCJmdGxcIj52ZXJzaW9uOiA8aXRlbT4yLjEuMDE8L2l0ZW0+PC92ZXJzaW9uPlxuICAgICAgICAgICAgPGluZm9zIGNsYXNzTmFtZT1cImZ0bFwiPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2FkbWluLmF2bi5zeXN0ZW1zL3YxL1wiIHRhcmdldD1cIl9ibGFua1wiPjxsb2dpbj7wn5SQIENMSUVOVCBMT0dJTjwvbG9naW4+PC9hPiB8IDxjbGlja2l0ZW0+PGl0ZW0+TE9DQUw6PC9pdGVtPiBXT1JMRFdJREU8L2NsaWNraXRlbT4gfCA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2F2bnN5c3RlbXNcIiB0YXJnZXQ9XCJfYmxhbmtcIj48aXRlbT5HSVRIVUIvPC9pdGVtPkFWTlNZU1RFTVM8L2E+IHwgPGEgaHJlZj1cIm1haWx0bzpteWFwcEBhdm4uc3lzdGVtc1wiPjxpdGVtPkUtTUFJTDo8L2l0ZW0+IENPTlRBQ1RAQVZOLlNZU1RFTVM8L2E+XG4gICAgICAgICAgICA8L2luZm9zPlxuICAgICAgICAgICAgPGxhbmd1YWdlIGNsYXNzTmFtZT1cImZ0clwiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZsYWctaWNvbiBmbGFnLWljb24tdXMgc2VsZWN0ZWQgZnRyXCI+PC9pPlxuICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxhPkVuZ2xpc2g8aSBjbGFzc05hbWU9XCJmbGFnLWljb24gZmxhZy1pY29uLXVzXCI+PC9pPjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZGlzYWJsZVwiPjxhPlNwYW5pc2g8aSBjbGFzc05hbWU9XCJmbGFnLWljb24gZmxhZy1pY29uLWVzXCI+PC9pPjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZGlzYWJsZVwiPjxhPkZyZW5jaDxpIGNsYXNzTmFtZT1cImZsYWctaWNvbiBmbGFnLWljb24tZnJcIj48L2k+PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkaXNhYmxlXCI+PGE+UG9ydHVndWVzZTxpIGNsYXNzTmFtZT1cImZsYWctaWNvbiBmbGFnLWljb24tYnJcIj48L2k+PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvbGFuZ3VhZ2U+XG4gICAgICAgICAgICA8Y29weXJpZ2h0IGNsYXNzTmFtZT1cImZ0clwiPkNvcHlyaWdodCA8aXRlbT4yMDE3PC9pdGVtPjwvY29weXJpZ2h0PlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIGZvb3RlciB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgke3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMfS9zdGF0aWMvaW1hZ2VzL2Zvb3Rlci5qcGcpO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwMDAwO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM3cHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICAgICAgICAgIHdlYmtpdC1ib3gtc2hhZG93OiAwIC0xcHggMTBweCAwIHJnYigwLCAwLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgLW1vei1ib3gtc2hhZG93OiAwIC0xcHggMTBweCAwIHJnYigwLCAwLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAtMXB4IDEwcHggMCByZ2IoMCwgMCwgMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvb3RlciBjb3B5cmlnaHQsIGZvb3RlciB2ZXJzaW9uIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTJweCAxNXB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNiYzc0ZmY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvb3RlciBjb3B5cmlnaHQgPiBpdGVtLCBmb290ZXIgdmVyc2lvbiA+IGl0ZW0sIGZvb3RlciBpbmZvcyBpdGVtIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNBQkE0OUE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvb3RlciBpbmZvcyB7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IGNhbGMoNTAlIC0gMjIxcHgpO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM3NzZFNjM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZm9vdGVyIGluZm9zIGEge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM3NzZFNjM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZm9vdGVyIGluZm9zID4gYSA+IGxvZ2luIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZGM5ZDAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZvb3RlciBpbmZvcyBhOmhvdmVyLCBmb290ZXIgaW5mb3MgYTpob3ZlciBsb2dpbiwgZm9vdGVyIGluZm9zIGNsaWNraXRlbTpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2JjNzRmZjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvb3RlciBsYW5ndWFnZSBpLmZsYWctaWNvbiB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogN3B4IDE1cHggMHB4IDBweDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvb3RlciBsYW5ndWFnZSBpLmZsYWctaWNvbi11cyB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMfS9zdGF0aWMvaW1hZ2VzL2ZsYWdzL3VzYS5wbmcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb290ZXIgbGFuZ3VhZ2UgaS5mbGFnLWljb24tZXMge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTH0vc3RhdGljL2ltYWdlcy9mbGFncy9zcGFpbi5wbmcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb290ZXIgbGFuZ3VhZ2UgaS5mbGFnLWljb24tZnIge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTH0vc3RhdGljL2ltYWdlcy9mbGFncy9mcmFuY2UucG5nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9vdGVyIGxhbmd1YWdlIGkuZmxhZy1pY29uLWJyIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7cHJvY2Vzcy5lbnYuQkFDS0VORF9VUkx9L3N0YXRpYy9pbWFnZXMvZmxhZ3MvYnJhemlsLnBuZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvb3RlciBsYW5ndWFnZTpob3ZlciB1bCB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICBib3R0b206IDE1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvb3RlciBsYW5ndWFnZSB1bCB7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzAzMWM0NTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICMwMzFjNDU7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxNXB4IDVweCAwO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjkyODI2O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9vdGVyIGxhbmd1YWdlIHVsIGxpIHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb290ZXIgbGFuZ3VhZ2UgdWwgbGkuZGlzYWJsZSBhIHtcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjODI4MDdlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb290ZXIgbGFuZ3VhZ2UgdWwgbGkuZGlzYWJsZSBhID4gaS5mbGFnLWljb24ge1xuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWZpbHRlcjogZ3JheXNjYWxlKDEwMCUpO1xuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9vdGVyIGxhbmd1YWdlIHVsIGxpIGEge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMTBweCAwIDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2JjNzRmZjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9vdGVyIGxhbmd1YWdlIHVsIGxpIGE6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9vdGVyIGxhbmd1YWdlIHVsIGxpIGEgPiBpLmZsYWctaWNvbiB7XG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogOTQwcHgpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9vdGVyIGluZm9zIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYyNXB4KSB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2Zvb3Rlcj5cbiAgICApfVxufVxuXG5leHBvcnQgY2xhc3MgTGVmdE1lbnUgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbXBvbmVudERpZE1vdW50ICgpIHtcbiAgICAgICAgJChcImxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuLnN1Ym1lbnUtaGFzLW51bWJlcnNcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBpZiAoJChlLnRhcmdldCkuaGFzQ2xhc3MoJ2Rpc2FibGUnKSkge1xuICAgICAgICAgICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoJChlLnRhcmdldCkuYXR0cignaHJlZicpKSB7XG4gICAgICAgICAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdsZWZ0LW1lbnUnKTtcbiAgICAgICAgICAgICAgICAvL3JldHVybiAkLmZuLm5hdmlnYXRlKGUudGFyZ2V0LCBlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5maW5kKCdzdWJtZW51JykudG9nZ2xlQ2xhc3MoXCJvcGVuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAkKFwiaGVhZGVyIG5hdnRvZ2dsZSwgbWVudWhpZGVyXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgJCgnYm9keScpLnRvZ2dsZUNsYXNzKCdsZWZ0LW1lbnUnKTtcbiAgICAgICAgfSlcbiAgICB9XG4gICAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8bGVmdG1lbnU+XG4gICAgXHRcdDxzaWRlYmFydXNlcj5cbiAgICBcdCAgICAgICAgPHBob3RvPlxuICAgIFx0ICAgICAgICAgICAgPHRpdGxlPkJvYSBub2l0ZS4g4piFPC90aXRsZT5cbiAgICBcdCAgICAgICAgICAgIDxzdWJ0aXRsZT5FbnRyZSBjb20gc2V1IGxvZ2luIG91IGNhZGFzdHJlLXNlITwvc3VidGl0bGU+XG4gICAgXHQgICAgICAgIDwvcGhvdG8+XG4gICAgXHRcdCAgICA8YmdpbWc+PC9iZ2ltZz5cbiAgICBcdFx0ICAgIDxiZ3NoYWRvdz48L2Jnc2hhZG93PlxuICAgIFx0XHQ8L3NpZGViYXJ1c2VyPlxuICAgIFx0XHQ8bWVudXNjcm9sbD5cbiAgICAgICAgICAgICAgICA8c2lkZWJhcnNlcGFyYXRvcj5BY2Vzc28gUmVzdHJpdG88L3NpZGViYXJzZXBhcmF0b3I+XG4gICAgICAgICAgICAgICAgPG1lbnVpdGVtcz5cbiAgICAgICAgICAgICAgICAgICAgPGJ0biBocmVmPVwiLy9hZG1pbi5hdm4uc3lzdGVtc1wiIHRhcmdldD1cIl9zZWxmXCI+XG4gICAgICAgICAgICAgICAgICAgIFx0PHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0xNDQgMTEydjUxLjZINDhjLTI2LjUgMC00OCAyMS41LTQ4IDQ4djg4LjZjMCAyNi41IDIxLjUgNDggNDggNDhoOTZ2NTEuNmMwIDQyLjYgNTEuNyA2NC4yIDgxLjkgMzMuOWwxNDQtMTQzLjljMTguNy0xOC43IDE4LjctNDkuMSAwLTY3LjlsLTE0NC0xNDRDMTk1LjggNDggMTQ0IDY5LjMgMTQ0IDExMnptMTkyIDE0NEwxOTIgNDAwdi05OS43SDQ4di04OC42aDE0NFYxMTJsMTQ0IDE0NHptODAgMTkyaC04NGMtNi42IDAtMTItNS40LTEyLTEydi0yNGMwLTYuNiA1LjQtMTIgMTItMTJoODRjMjYuNSAwIDQ4LTIxLjUgNDgtNDhWMTYwYzAtMjYuNS0yMS41LTQ4LTQ4LTQ4aC04NGMtNi42IDAtMTItNS40LTEyLTEyVjc2YzAtNi42IDUuNC0xMiAxMi0xMmg4NGM1MyAwIDk2IDQzIDk2IDk2djE5MmMwIDUzLTQzIDk2LTk2IDk2elwiIGNsYXNzTmFtZT1cIlwiPjwvcGF0aD48L3N2Zz5FbnRyYXI8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWNpcmNsZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjU2IDhDMTE5IDggOCAxMTkgOCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzOTMgOCAyNTYgOHpcIj48L3BhdGg+PC9zdmc+PC9idG4+XG4gICAgICAgICAgICAgICAgICAgIDxidG4gaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJkaXNhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgIFx0PHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDU3NiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yODggMjA4Yy00NC4yIDAtODAgMzUuOC04MCA4MHMzNS44IDgwIDgwIDgwIDgwLTM1LjggODAtODAtMzUuOC04MC04MC04MHptMCAxMjhjLTI2LjUgMC00OC0yMS41LTQ4LTQ4czIxLjUtNDggNDgtNDggNDggMjEuNSA0OCA0OC0yMS41IDQ4LTQ4IDQ4ek01MTIgNjRIMzUyVjMyYzAtMTcuNy0xNC4zLTMyLTMyLTMyaC02NGMtMTcuNyAwLTMyIDE0LjMtMzIgMzJ2MzJINjRDMjguNyA2NCAwIDkyLjcgMCAxMjh2MzIwYzAgMzUuMyAyOC43IDY0IDY0IDY0aDQ0OGMzNS4zIDAgNjQtMjguNyA2NC02NFYxMjhjMC0zNS4zLTI4LjctNjQtNjQtNjR6TTI1NiAzMmg2NHY5NmgtNjRWMzJ6bTEyOCA0NDhIMTkydi0yMS45YzAtOSAyLjYtMTcuNiA3LjYtMjUgNy4yLTEwLjcgMjAuMy0xNy4yIDM1LTE3LjIgMTUuOSAwIDIzLjUgOCA1My40IDhzMzcuNi04IDUzLjQtOGMxNC43IDAgMjcuNyA2LjQgMzUgMTcuMiA1IDcuNCA3LjYgMTYgNy42IDI1VjQ4MHptMTYwLTMyYzAgMTcuNi0xNC40IDMyLTMyIDMyaC05NnYtMjEuOWMwLTE1LjktNC44LTMwLjYtMTMtNDIuOC0xMy44LTIwLjUtMzcuMy0zMS4zLTYxLjUtMzEuMy0yMi4yIDAtMjcuOCA4LTUzLjQgOC0yNS42IDAtMzEuMi04LTUzLjQtOC0yNC4yIDAtNDcuNyAxMC44LTYxLjUgMzEuMy04LjIgMTIuMi0xMyAyNy0xMyA0Mi44VjQ4MEg2NGMtMTcuNiAwLTMyLTE0LjQtMzItMzJWMTI4YzAtMTcuNiAxNC40LTMyIDMyLTMyaDE2MHY2NGgxMjhWOTZoMTYwYzE3LjYgMCAzMiAxNC40IDMyIDMydjMyMHpcIiBjbGFzc05hbWU9XCJcIj48L3BhdGg+PC9zdmc+Q2FkYXN0cmFyLXNlPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6XCI+PC9wYXRoPjwvc3ZnPjwvYnRuPlxuICAgICAgICAgICAgICAgIDwvbWVudWl0ZW1zPlxuICAgICAgICAgICAgICAgIDxzaWRlYmFyZGl2aWRlcj48L3NpZGViYXJkaXZpZGVyPlxuICAgIFx0XHRcdDxtZW51c2l0ZW1vYmlsZT5cbiAgICBcdCAgICAgICAgICAgIDxzaWRlYmFyc2VwYXJhdG9yPldlYnNpdGUgTWVudTwvc2lkZWJhcnNlcGFyYXRvcj5cbiAgICBcdCAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudS1pdGVtcyBtZW51LWljb25zXCI+XG4gICAgXHQgICAgICAgICAgICAgICAgXG4gICAgXHQgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBcdDxzaWRlYmFyZGl2aWRlcj48L3NpZGViYXJkaXZpZGVyPlxuICAgICAgICAgICAgICAgIDwvbWVudXNpdGVtb2JpbGU+XG4gICAgICAgICAgICAgICAgPHNpZGViYXJzZXBhcmF0b3I+TVlBUFAgTW9kZWxzPC9zaWRlYmFyc2VwYXJhdG9yPlxuICAgICAgICAgICAgICAgIDxtZW51aXRlbXM+XG4gICAgICAgICAgICAgICAgICAgIDxidG4gaHJlZj1cIi4vXCI+PHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1tb2JpbGUtYWx0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0xOTIgNDE2YzAgMTcuNy0xNC4zIDMyLTMyIDMycy0zMi0xNC4zLTMyLTMyIDE0LjMtMzIgMzItMzIgMzIgMTQuMyAzMiAzMnptNDgtNjBWOTJjMC02LjYtNS40LTEyLTEyLTEySDkyYy02LjYgMC0xMiA1LjQtMTIgMTJ2MjY0YzAgNi42IDUuNCAxMiAxMiAxMmgxMzZjNi42IDAgMTItNS40IDEyLTEyem04MC0zMDh2NDE2YzAgMjYuNS0yMS41IDQ4LTQ4IDQ4SDQ4Yy0yNi41IDAtNDgtMjEuNS00OC00OFY0OEMwIDIxLjUgMjEuNSAwIDQ4IDBoMjI0YzI2LjUgMCA0OCAyMS41IDQ4IDQ4em0tNDggNDEwVjU0YzAtMy4zLTIuNy02LTYtNkg1NGMtMy4zIDAtNiAyLjctNiA2djQwNGMwIDMuMyAyLjcgNiA2IDZoMjEyYzMuMyAwIDYtMi43IDYtNnpcIj48L3BhdGg+PC9zdmc+QWJvdXQgTXkgQXBwPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6XCI+PC9wYXRoPjwvc3ZnPjwvYnRuPlxuICAgICAgICAgICAgICAgICAgICA8YnRuIGNsYXNzTmFtZT1cInN1Ym1lbnUtaGFzLW51bWJlcnNcIj5cbiAgICAgICAgICAgICAgICAgICAgXHQ8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLXR2XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk00MDAgMjQ0di04YzAtNi42IDUuNC0xMiAxMi0xMmg4YzYuNiAwIDEyIDUuNCAxMiAxMnY4YzAgNi42LTUuNCAxMi0xMiAxMmgtOGMtNi42IDAtMTItNS40LTEyLTEyem0xMiA3Nmg4YzYuNiAwIDEyLTUuNCAxMi0xMnYtOGMwLTYuNi01LjQtMTItMTItMTJoLThjLTYuNiAwLTEyIDUuNC0xMiAxMnY4YzAgNi42IDUuNCAxMiAxMiAxMnptLTM2LTEzNi41cy0xLjUtNy41LTE0NC03LjUtMTQ0LjUgNy41LTE0NC41IDcuNVM4MCAxODQgODAgMjg4czcuNSAxMDQuNSA3LjUgMTA0LjVTODggNDAwIDIzMiA0MDBzMTQ0LTcuNSAxNDQtNy41IDcuNS0uNSA3LjUtMTA0LjUtNy41LTEwNC41LTcuNS0xMDQuNXpNNTEyIDE0NHYyODhjMCAyNi41LTIxLjUgNDgtNDggNDhoLTE2djMyaC00OGwtMTAuNy0zMkgxMjIuN0wxMTIgNTEySDY0di0zMkg0OGMtMjYuNSAwLTQ4LTIxLjUtNDgtNDhWMTQ0YzAtMjYuNSAyMS41LTQ4IDQ4LTQ4aDE0MC45bC01NC01NS4yYy05LjMtOS41LTkuMS0yNC43LjMtMzMuOSA5LjUtOS4zIDI0LjctOS4xIDMzLjkuM0wyNTYgOTZsODYuOS04OC44YzkuMy05LjUgMjQuNS05LjYgMzMuOS0uMyA5LjUgOS4zIDkuNiAyNC41LjMgMzMuOWwtNTQgNTUuMkg0NjRjMjYuNSAwIDQ4IDIxLjUgNDggNDh6bS00OCAwSDQ4djI4OGg0MTZWMTQ0elwiPjwvcGF0aD48L3N2Zz5Db21tdW5pY2F0aW9uPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy10ZXJtaW5hbFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMzQuNDk1IDM2LjQ2NWwyMTEuMDUxIDIxMS4wNWM0LjY4NiA0LjY4NiA0LjY4NiAxMi4yODQgMCAxNi45NzFMMzQuNDk1IDQ3NS41MzVjLTQuNjg2IDQuNjg2LTEyLjI4NCA0LjY4Ni0xNi45NyAwbC03LjA3MS03LjA3Yy00LjY4Ni00LjY4Ni00LjY4Ni0xMi4yODQgMC0xNi45NzFMMjA1Ljk0NyAyNTYgMTAuNDU0IDYwLjUwNmMtNC42ODYtNC42ODYtNC42ODYtMTIuMjg0IDAtMTYuOTcxbDcuMDcxLTcuMDdjNC42ODYtNC42ODcgMTIuMjg0LTQuNjg3IDE2Ljk3IDB6TTY0MCA0Njh2LTEwYzAtNi42MjctNS4zNzMtMTItMTItMTJIMzAwYy02LjYyNyAwLTEyIDUuMzczLTEyIDEydjEwYzAgNi42MjcgNS4zNzMgMTIgMTIgMTJoMzI4YzYuNjI3IDAgMTItNS4zNzMgMTItMTJ6XCI+PC9wYXRoPjwvc3ZnPjxjb3VudD40PC9jb3VudD5cbiAgICBcdCAgICAgICAgICAgICAgICA8c3VibWVudT5cbiAgICBcdCAgICAgICAgICAgICAgICAgICAgPGJ0biBjbGFzc05hbWU9XCJkaXNhYmxlXCI+PHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1hbmdsZS1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjI0LjMgMjczbC0xMzYgMTM2Yy05LjQgOS40LTI0LjYgOS40LTMzLjkgMGwtMjIuNi0yMi42Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOWw5Ni40LTk2LjQtOTYuNC05Ni40Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOUw1NC4zIDEwM2M5LjQtOS40IDI0LjYtOS40IDMzLjkgMGwxMzYgMTM2YzkuNSA5LjQgOS41IDI0LjYuMSAzNHpcIj48L3BhdGg+PC9zdmc+QWfDqm5jaWFzIGUgUHJvZHV0b3JhczxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctY2lyY2xlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNTYgOEMxMTkgOCA4IDExOSA4IDI1NnMxMTEgMjQ4IDI0OCAyNDggMjQ4LTExMSAyNDgtMjQ4UzM5MyA4IDI1NiA4elwiPjwvcGF0aD48L3N2Zz48L2J0bj5cbiAgICBcdCAgICAgICAgICAgICAgICAgICAgPGJ0biBocmVmPVwiLi90aGVtZXMvcHJvZHV0b3Jhcy9cIj48c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWFuZ2xlLXJpZ2h0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yMjQuMyAyNzNsLTEzNiAxMzZjLTkuNCA5LjQtMjQuNiA5LjQtMzMuOSAwbC0yMi42LTIyLjZjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45bDk2LjQtOTYuNC05Ni40LTk2LjRjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45TDU0LjMgMTAzYzkuNC05LjQgMjQuNi05LjQgMzMuOSAwbDEzNiAxMzZjOS41IDkuNCA5LjUgMjQuNi4xIDM0elwiPjwvcGF0aD48L3N2Zz5Qcm9tb8Onw6NvIGUgRXZlbnRvczxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctY2lyY2xlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNTYgOEMxMTkgOCA4IDExOSA4IDI1NnMxMTEgMjQ4IDI0OCAyNDggMjQ4LTExMSAyNDgtMjQ4UzM5MyA4IDI1NiA4elwiPjwvcGF0aD48L3N2Zz48L2J0bj5cbiAgICBcdCAgICAgICAgICAgICAgICAgICAgPGJ0biBocmVmPVwiLi90aGVtZXMvc3VwZXJ0di9cIj48c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWFuZ2xlLXJpZ2h0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yMjQuMyAyNzNsLTEzNiAxMzZjLTkuNCA5LjQtMjQuNiA5LjQtMzMuOSAwbC0yMi42LTIyLjZjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45bDk2LjQtOTYuNC05Ni40LTk2LjRjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45TDU0LjMgMTAzYzkuNC05LjQgMjQuNi05LjQgMzMuOSAwbDEzNiAxMzZjOS41IDkuNCA5LjUgMjQuNi4xIDM0elwiPjwvcGF0aD48L3N2Zz5FbWlzc29yYSBUVjxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctY2lyY2xlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNTYgOEMxMTkgOCA4IDExOSA4IDI1NnMxMTEgMjQ4IDI0OCAyNDggMjQ4LTExMSAyNDgtMjQ4UzM5MyA4IDI1NiA4elwiPjwvcGF0aD48L3N2Zz48L2J0bj5cbiAgICBcdCAgICAgICAgICAgICAgICAgICAgPGJ0biBjbGFzc05hbWU9XCJkaXNhYmxlXCI+PHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1hbmdsZS1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjI0LjMgMjczbC0xMzYgMTM2Yy05LjQgOS40LTI0LjYgOS40LTMzLjkgMGwtMjIuNi0yMi42Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOWw5Ni40LTk2LjQtOTYuNC05Ni40Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOUw1NC4zIDEwM2M5LjQtOS40IDI0LjYtOS40IDMzLjkgMGwxMzYgMTM2YzkuNSA5LjQgOS41IDI0LjYuMSAzNHpcIj48L3BhdGg+PC9zdmc+UsOhZGlvczxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctY2lyY2xlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNTYgOEMxMTkgOCA4IDExOSA4IDI1NnMxMTEgMjQ4IDI0OCAyNDggMjQ4LTExMSAyNDgtMjQ4UzM5MyA4IDI1NiA4elwiPjwvcGF0aD48L3N2Zz48L2J0bj5cbiAgICBcdCAgICAgICAgICAgICAgICA8L3N1Ym1lbnU+XG4gICAgXHQgICAgICAgICAgICA8L2J0bj5cbiAgICAgICAgICAgICAgICAgICAgPGJ0biBjbGFzc05hbWU9XCJzdWJtZW51LWhhcy1udW1iZXJzXCI+XG4gICAgICAgICAgICAgICAgICAgIFx0PHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1zdGFyXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yMjQgMjg4Yzc5LjUgMCAxNDQtNjQuNSAxNDQtMTQ0UzMwMy41IDAgMjI0IDAgODAgNjQuNSA4MCAxNDRzNjQuNSAxNDQgMTQ0IDE0NHptMC0yNDBjNTIuOSAwIDk2IDQzLjEgOTYgOTZzLTQzLjEgOTYtOTYgOTYtOTYtNDMuMS05Ni05NiA0My4xLTk2IDk2LTk2em04OS42IDI1NmMtMTEgMC0yMS44IDIuNi0zMi4yIDYuMi0xOCA2LjMtMzcuMyA5LjgtNTcuNCA5LjhzLTM5LjQtMy41LTU3LjQtOS44Yy0xMC40LTMuNi0yMS4yLTYuMi0zMi4yLTYuMkM2MC4yIDMwNCAwIDM2NC4yIDAgNDM4LjRWNDg4YzAgMTMuMyAxMC43IDI0IDI0IDI0czI0LTEwLjcgMjQtMjR2LTQ5LjZjMC00NS41IDM1LjQtODIuNCA4MC04NS44djUwYy0yMy4xIDYuOS00MCAyOC4xLTQwIDUzLjQgMCAzMC45IDI1LjEgNTYgNTYgNTZzNTYtMjUuMSA1Ni01NmMwLTI1LjMtMTYuOS00Ni41LTQwLTUzLjR2LTQ0LjdjMjAuOCA2LjMgNDIuMyAxMC4xIDY0IDEwLjEgMjEuOCAwIDQzLjItMy44IDY0LTEwLjF2MzYuM2MtMjguMiA3LjUtNDggMzQuNS00OCA2NC42VjQ4OGMwIDQuMiAxLjcgOC4zIDQuNyAxMS4zbDEwLjMgMTAuM2MzLjEgMy4xIDguMiAzLjEgMTEuMyAwbDExLjMtMTEuM2MzLjEtMy4xIDMuMS04LjIgMC0xMS4zbC01LjctNS43VjQ1NmMwLTE5LjQgMTcuNC0zNC44IDM3LjQtMzEuNiAxNS43IDIuNiAyNi42IDE3LjQgMjYuNiAzMy4zdjIzLjZsLTUuNyA1LjdjLTMuMSAzLjEtMy4xIDguMiAwIDExLjNsMTEuMyAxMS4zYzMuMSAzLjEgOC4yIDMuMSAxMS4zIDBsMTAuMy0xMC4zYzMtMyA0LjctNy4xIDQuNy0xMS4zdi0zMmMwLTI5LjctMjAuNS01NC41LTQ4LTYxLjZ2LTQxLjdjNDQuNiAzLjMgODAgNDAuMyA4MCA4NS44VjQ4OGMwIDEzLjMgMTAuNyAyNCAyNCAyNHMyNC0xMC43IDI0LTI0di00OS42Yy4yLTc0LjItNjAtMTM0LjQtMTM0LjItMTM0LjR6TTE2OCA0NTZjMCAxMy4zLTEwLjcgMjQtMjQgMjRzLTI0LTEwLjctMjQtMjQgMTAuNy0yNCAyNC0yNCAyNCAxMC43IDI0IDI0elwiPjwvcGF0aD48L3N2Zz5Qcm9maXNzaW9uYWxzPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy10ZXJtaW5hbFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMzQuNDk1IDM2LjQ2NWwyMTEuMDUxIDIxMS4wNWM0LjY4NiA0LjY4NiA0LjY4NiAxMi4yODQgMCAxNi45NzFMMzQuNDk1IDQ3NS41MzVjLTQuNjg2IDQuNjg2LTEyLjI4NCA0LjY4Ni0xNi45NyAwbC03LjA3MS03LjA3Yy00LjY4Ni00LjY4Ni00LjY4Ni0xMi4yODQgMC0xNi45NzFMMjA1Ljk0NyAyNTYgMTAuNDU0IDYwLjUwNmMtNC42ODYtNC42ODYtNC42ODYtMTIuMjg0IDAtMTYuOTcxbDcuMDcxLTcuMDdjNC42ODYtNC42ODcgMTIuMjg0LTQuNjg3IDE2Ljk3IDB6TTY0MCA0Njh2LTEwYzAtNi42MjctNS4zNzMtMTItMTItMTJIMzAwYy02LjYyNyAwLTEyIDUuMzczLTEyIDEydjEwYzAgNi42MjcgNS4zNzMgMTIgMTIgMTJoMzI4YzYuNjI3IDAgMTItNS4zNzMgMTItMTJ6XCI+PC9wYXRoPjwvc3ZnPjxjb3VudD42PC9jb3VudD5cbiAgICBcdCAgICAgICAgICAgICAgICA8c3VibWVudT5cbiAgICBcdCAgICAgICAgICAgICAgICAgICAgPGJ0biBjbGFzc05hbWU9XCJkaXNhYmxlXCI+PHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1hbmdsZS1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjI0LjMgMjczbC0xMzYgMTM2Yy05LjQgOS40LTI0LjYgOS40LTMzLjkgMGwtMjIuNi0yMi42Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOWw5Ni40LTk2LjQtOTYuNC05Ni40Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOUw1NC4zIDEwM2M5LjQtOS40IDI0LjYtOS40IDMzLjkgMGwxMzYgMTM2YzkuNSA5LjQgOS41IDI0LjYuMSAzNHpcIj48L3BhdGg+PC9zdmc+QXRvcmVzPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6XCI+PC9wYXRoPjwvc3ZnPjwvYnRuPlxuICAgIFx0ICAgICAgICAgICAgICAgICAgICA8YnRuIGhyZWY9XCIuL3RoZW1lcy9jYW50b3Jlcy9cIj48c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWFuZ2xlLXJpZ2h0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yMjQuMyAyNzNsLTEzNiAxMzZjLTkuNCA5LjQtMjQuNiA5LjQtMzMuOSAwbC0yMi42LTIyLjZjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45bDk2LjQtOTYuNC05Ni40LTk2LjRjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45TDU0LjMgMTAzYzkuNC05LjQgMjQuNi05LjQgMzMuOSAwbDEzNiAxMzZjOS41IDkuNCA5LjUgMjQuNi4xIDM0elwiPjwvcGF0aD48L3N2Zz5DYW50b3JlczxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctY2lyY2xlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNTYgOEMxMTkgOCA4IDExOSA4IDI1NnMxMTEgMjQ4IDI0OCAyNDggMjQ4LTExMSAyNDgtMjQ4UzM5MyA4IDI1NiA4elwiPjwvcGF0aD48L3N2Zz48L2J0bj5cbiAgICBcdCAgICAgICAgICAgICAgICAgICAgPGJ0biBjbGFzc05hbWU9XCJkaXNhYmxlXCI+PHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1hbmdsZS1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjI0LjMgMjczbC0xMzYgMTM2Yy05LjQgOS40LTI0LjYgOS40LTMzLjkgMGwtMjIuNi0yMi42Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOWw5Ni40LTk2LjQtOTYuNC05Ni40Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOUw1NC4zIDEwM2M5LjQtOS40IDI0LjYtOS40IDMzLjkgMGwxMzYgMTM2YzkuNSA5LjQgOS41IDI0LjYuMSAzNHpcIj48L3BhdGg+PC9zdmc+RGVudGlzdGFzPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6XCI+PC9wYXRoPjwvc3ZnPjwvYnRuPlxuICAgIFx0ICAgICAgICAgICAgICAgICAgICA8YnRuIGNsYXNzTmFtZT1cImRpc2FibGVcIj48c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWFuZ2xlLXJpZ2h0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yMjQuMyAyNzNsLTEzNiAxMzZjLTkuNCA5LjQtMjQuNiA5LjQtMzMuOSAwbC0yMi42LTIyLjZjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45bDk2LjQtOTYuNC05Ni40LTk2LjRjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45TDU0LjMgMTAzYzkuNC05LjQgMjQuNi05LjQgMzMuOSAwbDEzNiAxMzZjOS41IDkuNCA5LjUgMjQuNi4xIDM0elwiPjwvcGF0aD48L3N2Zz5BcnF1aXRldG9zPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6XCI+PC9wYXRoPjwvc3ZnPjwvYnRuPlxuICAgIFx0ICAgICAgICAgICAgICAgICAgICA8YnRuIGNsYXNzTmFtZT1cImRpc2FibGVcIj48c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWFuZ2xlLXJpZ2h0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yMjQuMyAyNzNsLTEzNiAxMzZjLTkuNCA5LjQtMjQuNiA5LjQtMzMuOSAwbC0yMi42LTIyLjZjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45bDk2LjQtOTYuNC05Ni40LTk2LjRjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45TDU0LjMgMTAzYzkuNC05LjQgMjQuNi05LjQgMzMuOSAwbDEzNiAxMzZjOS41IDkuNCA5LjUgMjQuNi4xIDM0elwiPjwvcGF0aD48L3N2Zz5BZHZvZ2Fkb3M8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWNpcmNsZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjU2IDhDMTE5IDggOCAxMTkgOCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzOTMgOCAyNTYgOHpcIj48L3BhdGg+PC9zdmc+PC9idG4+XG4gICAgXHQgICAgICAgICAgICAgICAgICAgIDxidG4gY2xhc3NOYW1lPVwiZGlzYWJsZVwiPjxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctYW5nbGUtcmlnaHRcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIwIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTIyNC4zIDI3M2wtMTM2IDEzNmMtOS40IDkuNC0yNC42IDkuNC0zMy45IDBsLTIyLjYtMjIuNmMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlsOTYuNC05Ni40LTk2LjQtOTYuNGMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlMNTQuMyAxMDNjOS40LTkuNCAyNC42LTkuNCAzMy45IDBsMTM2IDEzNmM5LjUgOS40IDkuNSAyNC42LjEgMzR6XCI+PC9wYXRoPjwvc3ZnPlByb2dyYW1hZG9yZXM8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWNpcmNsZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjU2IDhDMTE5IDggOCAxMTkgOCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzOTMgOCAyNTYgOHpcIj48L3BhdGg+PC9zdmc+PC9idG4+XG4gICAgXHQgICAgICAgICAgICAgICAgPC9zdWJtZW51PlxuICAgIFx0ICAgICAgICAgICAgPC9idG4+XG4gICAgICAgICAgICAgICAgICAgIDxidG4gY2xhc3NOYW1lPVwic3VibWVudS1oYXMtbnVtYmVyc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1zdG9yZXNcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIwIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTYzNS43IDE3Ni4xbC05MS40LTE2MEM1MzguNiA2LjIgNTI4IDAgNTE2LjUgMGgtMzkzQzExMiAwIDEwMS40IDYuMiA5NS43IDE2LjFsLTkxLjQgMTYwQy03LjkgMTk3LjUgNy40IDIyNCAzMiAyMjRoMzJ2MjU0LjVDNjQgNDk3IDc4LjMgNTEyIDk2IDUxMmgyNTZjMTcuNyAwIDMyLTE1IDMyLTMzLjVWMjI0aDE2MHYyODBjMCA0LjQgMy42IDggOCA4aDE2YzQuNCAwIDgtMy42IDgtOFYyMjRoMzJjMjQuNiAwIDM5LjktMjYuNSAyNy43LTQ3Ljl6TTM1MiA0NzguNWMwIC45LS4zIDEuNC0uMiAxLjVsLTI1NS4yLjJzLS42LS41LS42LTEuN1YzNTJoMjU2djEyNi41em0wLTE1OC41SDk2di05NmgyNTZ2OTZ6TTMyLjEgMTkybDkxLjQtMTYwaDM5M0w2MDggMTkySDMyLjF6XCI+PC9wYXRoPjwvc3ZnPlN0b3JlczxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctdGVybWluYWxcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIwIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTM0LjQ5NSAzNi40NjVsMjExLjA1MSAyMTEuMDVjNC42ODYgNC42ODYgNC42ODYgMTIuMjg0IDAgMTYuOTcxTDM0LjQ5NSA0NzUuNTM1Yy00LjY4NiA0LjY4Ni0xMi4yODQgNC42ODYtMTYuOTcgMGwtNy4wNzEtNy4wN2MtNC42ODYtNC42ODYtNC42ODYtMTIuMjg0IDAtMTYuOTcxTDIwNS45NDcgMjU2IDEwLjQ1NCA2MC41MDZjLTQuNjg2LTQuNjg2LTQuNjg2LTEyLjI4NCAwLTE2Ljk3MWw3LjA3MS03LjA3YzQuNjg2LTQuNjg3IDEyLjI4NC00LjY4NyAxNi45NyAwek02NDAgNDY4di0xMGMwLTYuNjI3LTUuMzczLTEyLTEyLTEySDMwMGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnYxMGMwIDYuNjI3IDUuMzczIDEyIDEyIDEyaDMyOGM2LjYyNyAwIDEyLTUuMzczIDEyLTEyelwiPjwvcGF0aD48L3N2Zz48Y291bnQ+NzwvY291bnQ+XG4gICAgXHQgICAgICAgICAgICAgICAgPHN1Ym1lbnU+XG4gICAgXHQgICAgICAgICAgICAgICAgICAgIDxidG4gaHJlZj1cIi4vdGhlbWVzL21lcmNhZG9saXZyZS9cIj48c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWFuZ2xlLXJpZ2h0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yMjQuMyAyNzNsLTEzNiAxMzZjLTkuNCA5LjQtMjQuNiA5LjQtMzMuOSAwbC0yMi42LTIyLjZjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45bDk2LjQtOTYuNC05Ni40LTk2LjRjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45TDU0LjMgMTAzYzkuNC05LjQgMjQuNi05LjQgMzMuOSAwbDEzNiAxMzZjOS41IDkuNCA5LjUgMjQuNi4xIDM0elwiPjwvcGF0aD48L3N2Zz5NZXJjYWRvIExpdnJlPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6XCI+PC9wYXRoPjwvc3ZnPjwvYnRuPlxuICAgIFx0ICAgICAgICAgICAgICAgICAgICA8YnRuIGNsYXNzTmFtZT1cImRpc2FibGVcIj48c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWFuZ2xlLXJpZ2h0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yMjQuMyAyNzNsLTEzNiAxMzZjLTkuNCA5LjQtMjQuNiA5LjQtMzMuOSAwbC0yMi42LTIyLjZjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45bDk2LjQtOTYuNC05Ni40LTk2LjRjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45TDU0LjMgMTAzYzkuNC05LjQgMjQuNi05LjQgMzMuOSAwbDEzNiAxMzZjOS41IDkuNCA5LjUgMjQuNi4xIDM0elwiPjwvcGF0aD48L3N2Zz5JbmZvcm3DoXRpY2E8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWNpcmNsZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjU2IDhDMTE5IDggOCAxMTkgOCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzOTMgOCAyNTYgOHpcIj48L3BhdGg+PC9zdmc+PC9idG4+XG4gICAgXHQgICAgICAgICAgICAgICAgICAgIDxidG4gY2xhc3NOYW1lPVwiZGlzYWJsZVwiPjxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctYW5nbGUtcmlnaHRcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIwIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTIyNC4zIDI3M2wtMTM2IDEzNmMtOS40IDkuNC0yNC42IDkuNC0zMy45IDBsLTIyLjYtMjIuNmMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlsOTYuNC05Ni40LTk2LjQtOTYuNGMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlMNTQuMyAxMDNjOS40LTkuNCAyNC42LTkuNCAzMy45IDBsMTM2IDEzNmM5LjUgOS40IDkuNSAyNC42LjEgMzR6XCI+PC9wYXRoPjwvc3ZnPkNvbnN0cnXDp8OjbzxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctY2lyY2xlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNTYgOEMxMTkgOCA4IDExOSA4IDI1NnMxMTEgMjQ4IDI0OCAyNDggMjQ4LTExMSAyNDgtMjQ4UzM5MyA4IDI1NiA4elwiPjwvcGF0aD48L3N2Zz48L2J0bj5cbiAgICBcdCAgICAgICAgICAgICAgICAgICAgPGJ0biBjbGFzc05hbWU9XCJkaXNhYmxlXCI+PHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1hbmdsZS1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjI0LjMgMjczbC0xMzYgMTM2Yy05LjQgOS40LTI0LjYgOS40LTMzLjkgMGwtMjIuNi0yMi42Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOWw5Ni40LTk2LjQtOTYuNC05Ni40Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOUw1NC4zIDEwM2M5LjQtOS40IDI0LjYtOS40IDMzLjkgMGwxMzYgMTM2YzkuNSA5LjQgOS41IDI0LjYuMSAzNHpcIj48L3BhdGg+PC9zdmc+Q2Fsw6dhZG9zPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6XCI+PC9wYXRoPjwvc3ZnPjwvYnRuPlxuICAgIFx0ICAgICAgICAgICAgICAgICAgICA8YnRuIGhyZWY9XCIuL3RoZW1lcy9jZWxtYXIvXCI+PHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1hbmdsZS1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjI0LjMgMjczbC0xMzYgMTM2Yy05LjQgOS40LTI0LjYgOS40LTMzLjkgMGwtMjIuNi0yMi42Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOWw5Ni40LTk2LjQtOTYuNC05Ni40Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOUw1NC4zIDEwM2M5LjQtOS40IDI0LjYtOS40IDMzLjkgMGwxMzYgMTM2YzkuNSA5LjQgOS41IDI0LjYuMSAzNHpcIj48L3BhdGg+PC9zdmc+UGxhbmVqYWRvczxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctY2lyY2xlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNTYgOEMxMTkgOCA4IDExOSA4IDI1NnMxMTEgMjQ4IDI0OCAyNDggMjQ4LTExMSAyNDgtMjQ4UzM5MyA4IDI1NiA4elwiPjwvcGF0aD48L3N2Zz48L2J0bj5cbiAgICBcdCAgICAgICAgICAgICAgICAgICAgPGJ0biBjbGFzc05hbWU9XCJkaXNhYmxlXCI+PHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1hbmdsZS1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjI0LjMgMjczbC0xMzYgMTM2Yy05LjQgOS40LTI0LjYgOS40LTMzLjkgMGwtMjIuNi0yMi42Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOWw5Ni40LTk2LjQtOTYuNC05Ni40Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOUw1NC4zIDEwM2M5LjQtOS40IDI0LjYtOS40IDMzLjkgMGwxMzYgMTM2YzkuNSA5LjQgOS41IDI0LjYuMSAzNHpcIj48L3BhdGg+PC9zdmc+Um91cGFzPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6XCI+PC9wYXRoPjwvc3ZnPjwvYnRuPlxuICAgIFx0ICAgICAgICAgICAgICAgIDwvc3VibWVudT5cbiAgICBcdCAgICAgICAgICAgIDwvYnRuPlxuICAgICAgICAgICAgICAgICAgICA8YnRuIGNsYXNzTmFtZT1cInN1Ym1lbnUtaGFzLW51bWJlcnNcIj5cbiAgICAgICAgICAgICAgICAgICAgXHQ8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLXJlc3RhdXJhbnRlc1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMzQ0LjEgNDcwLjNsMTQuMi0xNjQuOGMtNDIuMS0zMy4xLTcwLjQtNzctNzAuNC0xMjkuNUMyODggODEuNyAzNzYuMSAwIDQ0MCAwYzIyLjEgMCA0MCAxNy4zIDQwIDM4LjV2NDM1YzAgMjEuMi0xNy45IDM4LjUtNDAgMzguNWgtNTZjLTIyLjggMC00MS44LTE4LjctMzkuOS00MS43ek0zMjAgMTc2YzAgNTEgMzIuMiA4NS41IDcxLjggMTE0LjVMMzc2IDQ3My4xYy0uMyAzLjcgMy40IDYuOSA4IDYuOWg1NmM0LjMgMCA4LTMgOC02LjV2LTQzNWMwLTMuNS0zLjctNi41LTgtNi41LTQ0LjYgMC0xMjAgNjUuOC0xMjAgMTQ0ek0yNDAuNyAzMy44QzIzNy40IDE0LjMgMjE5LjUgMCAxOTQuNiAwYy0xMS45IDAtMjQuMSAzLjQtMzMuMyAxMS4yQzE1Mi45IDQuMSAxNDEuMyAwIDEyOCAwcy0yNC45IDQuMS0zMy4zIDExLjJDODUuNSAzLjQgNzMuMyAwIDYxLjQgMCAzNi4yIDAgMTguNiAxNC41IDE1LjMgMzMuOCAxMy41IDQzLjIgMCAxMTguNCAwIDE0OS45YzAgNTAuOSAyNi43IDkxLjYgNzEgMTEwLjdMNTkuNiA0NzEuNEM1OC40IDQ5My40IDc1LjkgNTEyIDk4IDUxMmg2MGMyMiAwIDM5LjYtMTguNSAzOC40LTQwLjZMMTg1IDI2MC42YzQ0LjItMTkuMSA3MS01OS44IDcxLTExMC43IDAtMzEuNS0xMy41LTEwNi43LTE1LjMtMTE2LjF6TTE1Mi4zIDI0MGwxMi4yIDIzMy4xYy4yIDMuNy0yLjcgNi45LTYuNSA2LjlIOThjLTMuNyAwLTYuNy0zLjEtNi41LTYuOUwxMDMuNyAyNDBDNjEuMyAyMzEuMiAzMiAxOTcgMzIgMTQ5LjljMC0yOS43IDE0LjgtMTEwLjYgMTQuOC0xMTAuNiAxLjYtOS45IDI4LjMtOS43IDI5LjUuMlYxNjJjLjkgMTEuNSAyOC4yIDExLjcgMjkuNS4ybDcuNC0xMjIuOWMxLjYtOS43IDI3LjktOS43IDI5LjUgMGw3LjQgMTIyLjljMS4zIDExLjQgMjguNiAxMS4yIDI5LjUtLjJWMzkuNmMxLjItOS45IDI3LjktMTAuMSAyOS41LS4yIDAgMCAxNC44IDgwLjkgMTQuOCAxMTAuNi4xIDQ2LjgtMjkgODEuMi03MS42IDkwelwiPjwvcGF0aD48L3N2Zz5BbGltZW50YcOnw6NvPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy10ZXJtaW5hbFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMzQuNDk1IDM2LjQ2NWwyMTEuMDUxIDIxMS4wNWM0LjY4NiA0LjY4NiA0LjY4NiAxMi4yODQgMCAxNi45NzFMMzQuNDk1IDQ3NS41MzVjLTQuNjg2IDQuNjg2LTEyLjI4NCA0LjY4Ni0xNi45NyAwbC03LjA3MS03LjA3Yy00LjY4Ni00LjY4Ni00LjY4Ni0xMi4yODQgMC0xNi45NzFMMjA1Ljk0NyAyNTYgMTAuNDU0IDYwLjUwNmMtNC42ODYtNC42ODYtNC42ODYtMTIuMjg0IDAtMTYuOTcxbDcuMDcxLTcuMDdjNC42ODYtNC42ODcgMTIuMjg0LTQuNjg3IDE2Ljk3IDB6TTY0MCA0Njh2LTEwYzAtNi42MjctNS4zNzMtMTItMTItMTJIMzAwYy02LjYyNyAwLTEyIDUuMzczLTEyIDEydjEwYzAgNi42MjcgNS4zNzMgMTIgMTIgMTJoMzI4YzYuNjI3IDAgMTItNS4zNzMgMTItMTJ6XCI+PC9wYXRoPjwvc3ZnPjxjb3VudD41PC9jb3VudD5cbiAgICBcdCAgICAgICAgICAgICAgICA8c3VibWVudT5cbiAgICBcdCAgICAgICAgICAgICAgICAgICAgPGJ0biBjbGFzc05hbWU9XCJkaXNhYmxlXCI+PHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1hbmdsZS1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjI0LjMgMjczbC0xMzYgMTM2Yy05LjQgOS40LTI0LjYgOS40LTMzLjkgMGwtMjIuNi0yMi42Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOWw5Ni40LTk2LjQtOTYuNC05Ni40Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOUw1NC4zIDEwM2M5LjQtOS40IDI0LjYtOS40IDMzLjkgMGwxMzYgMTM2YzkuNSA5LjQgOS41IDI0LjYuMSAzNHpcIj48L3BhdGg+PC9zdmc+UmVzdGF1cmFudGVzPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6XCI+PC9wYXRoPjwvc3ZnPjwvYnRuPlxuICAgIFx0ICAgICAgICAgICAgICAgICAgICA8YnRuIGNsYXNzTmFtZT1cImRpc2FibGVcIj48c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWFuZ2xlLXJpZ2h0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yMjQuMyAyNzNsLTEzNiAxMzZjLTkuNCA5LjQtMjQuNiA5LjQtMzMuOSAwbC0yMi42LTIyLjZjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45bDk2LjQtOTYuNC05Ni40LTk2LjRjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45TDU0LjMgMTAzYzkuNC05LjQgMjQuNi05LjQgMzMuOSAwbDEzNiAxMzZjOS41IDkuNCA5LjUgMjQuNi4xIDM0elwiPjwvcGF0aD48L3N2Zz5DYWZldGVyaWFzPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6XCI+PC9wYXRoPjwvc3ZnPjwvYnRuPlxuICAgIFx0ICAgICAgICAgICAgICAgICAgICA8YnRuIGhyZWY9XCIuL3RoZW1lcy9jZXJ2ZWphcmlhcy9cIj48c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWFuZ2xlLXJpZ2h0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yMjQuMyAyNzNsLTEzNiAxMzZjLTkuNCA5LjQtMjQuNiA5LjQtMzMuOSAwbC0yMi42LTIyLjZjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45bDk2LjQtOTYuNC05Ni40LTk2LjRjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45TDU0LjMgMTAzYzkuNC05LjQgMjQuNi05LjQgMzMuOSAwbDEzNiAxMzZjOS41IDkuNCA5LjUgMjQuNi4xIDM0elwiPjwvcGF0aD48L3N2Zz5DZXJ2ZWphcmlhczxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctY2lyY2xlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNTYgOEMxMTkgOCA4IDExOSA4IDI1NnMxMTEgMjQ4IDI0OCAyNDggMjQ4LTExMSAyNDgtMjQ4UzM5MyA4IDI1NiA4elwiPjwvcGF0aD48L3N2Zz48L2J0bj5cbiAgICBcdCAgICAgICAgICAgICAgICAgICAgPGJ0biBjbGFzc05hbWU9XCJkaXNhYmxlXCI+PHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1hbmdsZS1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjI0LjMgMjczbC0xMzYgMTM2Yy05LjQgOS40LTI0LjYgOS40LTMzLjkgMGwtMjIuNi0yMi42Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOWw5Ni40LTk2LjQtOTYuNC05Ni40Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOUw1NC4zIDEwM2M5LjQtOS40IDI0LjYtOS40IDMzLjkgMGwxMzYgMTM2YzkuNSA5LjQgOS41IDI0LjYuMSAzNHpcIj48L3BhdGg+PC9zdmc+UGl6emFyaWFzPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6XCI+PC9wYXRoPjwvc3ZnPjwvYnRuPlxuICAgIFx0ICAgICAgICAgICAgICAgICAgICA8YnRuIGNsYXNzTmFtZT1cImRpc2FibGVcIj48c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWFuZ2xlLXJpZ2h0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yMjQuMyAyNzNsLTEzNiAxMzZjLTkuNCA5LjQtMjQuNiA5LjQtMzMuOSAwbC0yMi42LTIyLjZjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45bDk2LjQtOTYuNC05Ni40LTk2LjRjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45TDU0LjMgMTAzYzkuNC05LjQgMjQuNi05LjQgMzMuOSAwbDEzNiAxMzZjOS41IDkuNCA5LjUgMjQuNi4xIDM0elwiPjwvcGF0aD48L3N2Zz5Tb3J2ZXRlcmlhczxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctY2lyY2xlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNTYgOEMxMTkgOCA4IDExOSA4IDI1NnMxMTEgMjQ4IDI0OCAyNDggMjQ4LTExMSAyNDgtMjQ4UzM5MyA4IDI1NiA4elwiPjwvcGF0aD48L3N2Zz48L2J0bj5cbiAgICBcdCAgICAgICAgICAgICAgICA8L3N1Ym1lbnU+XG4gICAgXHQgICAgICAgICAgICA8L2J0bj5cbiAgICAgICAgICAgICAgICAgICAgPGJ0biBjbGFzc05hbWU9XCJzdWJtZW51LWhhcy1udW1iZXJzXCI+XG4gICAgICAgICAgICAgICAgICAgIFx0PHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1zdG9yZXNcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIwIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTYzNS43IDE3Ni4xbC05MS40LTE2MEM1MzguNiA2LjIgNTI4IDAgNTE2LjUgMGgtMzkzQzExMiAwIDEwMS40IDYuMiA5NS43IDE2LjFsLTkxLjQgMTYwQy03LjkgMTk3LjUgNy40IDIyNCAzMiAyMjRoMzJ2MjU0LjVDNjQgNDk3IDc4LjMgNTEyIDk2IDUxMmgyNTZjMTcuNyAwIDMyLTE1IDMyLTMzLjVWMjI0aDE2MHYyODBjMCA0LjQgMy42IDggOCA4aDE2YzQuNCAwIDgtMy42IDgtOFYyMjRoMzJjMjQuNiAwIDM5LjktMjYuNSAyNy43LTQ3Ljl6TTM1MiA0NzguNWMwIC45LS4zIDEuNC0uMiAxLjVsLTI1NS4yLjJzLS42LS41LS42LTEuN1YzNTJoMjU2djEyNi41em0wLTE1OC41SDk2di05NmgyNTZ2OTZ6TTMyLjEgMTkybDkxLjQtMTYwaDM5M0w2MDggMTkySDMyLjF6XCI+PC9wYXRoPjwvc3ZnPkJlbGV6YTxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctdGVybWluYWxcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIwIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTM0LjQ5NSAzNi40NjVsMjExLjA1MSAyMTEuMDVjNC42ODYgNC42ODYgNC42ODYgMTIuMjg0IDAgMTYuOTcxTDM0LjQ5NSA0NzUuNTM1Yy00LjY4NiA0LjY4Ni0xMi4yODQgNC42ODYtMTYuOTcgMGwtNy4wNzEtNy4wN2MtNC42ODYtNC42ODYtNC42ODYtMTIuMjg0IDAtMTYuOTcxTDIwNS45NDcgMjU2IDEwLjQ1NCA2MC41MDZjLTQuNjg2LTQuNjg2LTQuNjg2LTEyLjI4NCAwLTE2Ljk3MWw3LjA3MS03LjA3YzQuNjg2LTQuNjg3IDEyLjI4NC00LjY4NyAxNi45NyAwek02NDAgNDY4di0xMGMwLTYuNjI3LTUuMzczLTEyLTEyLTEySDMwMGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnYxMGMwIDYuNjI3IDUuMzczIDEyIDEyIDEyaDMyOGM2LjYyNyAwIDEyLTUuMzczIDEyLTEyelwiPjwvcGF0aD48L3N2Zz48Y291bnQ+MjwvY291bnQ+XG4gICAgXHQgICAgICAgICAgICAgICAgPHN1Ym1lbnU+XG4gICAgXHQgICAgICAgICAgICAgICAgICAgIDxidG4gY2xhc3NOYW1lPVwiZGlzYWJsZVwiPjxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctYW5nbGUtcmlnaHRcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIwIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTIyNC4zIDI3M2wtMTM2IDEzNmMtOS40IDkuNC0yNC42IDkuNC0zMy45IDBsLTIyLjYtMjIuNmMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlsOTYuNC05Ni40LTk2LjQtOTYuNGMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlMNTQuMyAxMDNjOS40LTkuNCAyNC42LTkuNCAzMy45IDBsMTM2IDEzNmM5LjUgOS40IDkuNSAyNC42LjEgMzR6XCI+PC9wYXRoPjwvc3ZnPlNhbMOjbyBkZSBDYWJlbGVyZWlybzxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctY2lyY2xlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNTYgOEMxMTkgOCA4IDExOSA4IDI1NnMxMTEgMjQ4IDI0OCAyNDggMjQ4LTExMSAyNDgtMjQ4UzM5MyA4IDI1NiA4elwiPjwvcGF0aD48L3N2Zz48L2J0bj5cbiAgICBcdCAgICAgICAgICAgICAgICAgICAgPGJ0biBjbGFzc05hbWU9XCJkaXNhYmxlXCI+PHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1hbmdsZS1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjI0LjMgMjczbC0xMzYgMTM2Yy05LjQgOS40LTI0LjYgOS40LTMzLjkgMGwtMjIuNi0yMi42Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOWw5Ni40LTk2LjQtOTYuNC05Ni40Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOUw1NC4zIDEwM2M5LjQtOS40IDI0LjYtOS40IDMzLjkgMGwxMzYgMTM2YzkuNSA5LjQgOS41IDI0LjYuMSAzNHpcIj48L3BhdGg+PC9zdmc+QWx1Z3VlbCBkZSBSb3VwYXM8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWNpcmNsZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjU2IDhDMTE5IDggOCAxMTkgOCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzOTMgOCAyNTYgOHpcIj48L3BhdGg+PC9zdmc+PC9idG4+XG4gICAgXHQgICAgICAgICAgICAgICAgICAgIDxidG4gY2xhc3NOYW1lPVwiZGlzYWJsZVwiPjxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctYW5nbGUtcmlnaHRcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIwIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTIyNC4zIDI3M2wtMTM2IDEzNmMtOS40IDkuNC0yNC42IDkuNC0zMy45IDBsLTIyLjYtMjIuNmMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlsOTYuNC05Ni40LTk2LjQtOTYuNGMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlMNTQuMyAxMDNjOS40LTkuNCAyNC42LTkuNCAzMy45IDBsMTM2IDEzNmM5LjUgOS40IDkuNSAyNC42LjEgMzR6XCI+PC9wYXRoPjwvc3ZnPkNvc23DqXRpY29zPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6XCI+PC9wYXRoPjwvc3ZnPjwvYnRuPlxuICAgIFx0ICAgICAgICAgICAgICAgIDwvc3VibWVudT5cbiAgICBcdCAgICAgICAgICAgIDwvYnRuPlxuICAgICAgICAgICAgICAgIDwvbWVudWl0ZW1zPlxuICAgICAgICAgICAgICAgIDxzaWRlYmFyZGl2aWRlcj48L3NpZGViYXJkaXZpZGVyPlxuICAgICAgICAgICAgICAgIDxzaWRlYmFyc2VwYXJhdG9yPkZBTEUgQ09OT1NDTzwvc2lkZWJhcnNlcGFyYXRvcj5cbiAgICAgICAgICAgICAgICA8bWVudWNvbnRhY3Q+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJ0ZWw6MTEgOTMwMTggODM2M1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1waG9uZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNNDg3LjggMjQuMUwzODcgLjhjLTE0LjctMy40LTI5LjggNC4yLTM1LjggMTguMWwtNDYuNSAxMDguNWMtNS41IDEyLjctMS44IDI3LjcgOC45IDM2LjVsNTMuOSA0NC4xYy0zNCA2OS4yLTkwLjMgMTI1LjYtMTU5LjYgMTU5LjZsLTQ0LjEtNTMuOWMtOC44LTEwLjctMjMuOC0xNC40LTM2LjUtOC45TDE4LjkgMzUxLjNDNSAzNTcuMy0yLjYgMzcyLjMuOCAzODdMMjQgNDg3LjdDMjcuMyA1MDIgMzkuOSA1MTIgNTQuNSA1MTIgMzA2LjcgNTEyIDUxMiAzMDcuOCA1MTIgNTQuNWMwLTE0LjYtMTAtMjcuMi0yNC4yLTMwLjR6TTU1LjEgNDgwbC0yMy05OS42IDEwNy40LTQ2IDU5LjUgNzIuOGMxMDMuNi00OC42IDE1OS43LTEwNC45IDIwOC4xLTIwOC4xbC03Mi44LTU5LjUgNDYtMTA3LjQgOTkuNiAyM0M0NzkuNyAyODkuNyAyODkuNiA0NzkuNyA1NS4xIDQ4MHpcIj48L3BhdGg+PC9zdmc+TGlnYcOnw6NvPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6XCI+PC9wYXRoPjwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2FwaS53aGF0c2FwcC5jb20vc2VuZD9waG9uZT01NTExOTMwMTg4MzYzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLXdoYXRzYXBwXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0zODAuOSA5Ny4xQzMzOSA1NS4xIDI4My4yIDMyIDIyMy45IDMyYy0xMjIuNCAwLTIyMiA5OS42LTIyMiAyMjIgMCAzOS4xIDEwLjIgNzcuMyAyOS42IDExMUwwIDQ4MGwxMTcuNy0zMC45YzMyLjQgMTcuNyA2OC45IDI3IDEwNi4xIDI3aC4xYzEyMi4zIDAgMjI0LjEtOTkuNiAyMjQuMS0yMjIgMC01OS4zLTI1LjItMTE1LTY3LjEtMTU3em0tMTU3IDM0MS42Yy0zMy4yIDAtNjUuNy04LjktOTQtMjUuN2wtNi43LTQtNjkuOCAxOC4zTDcyIDM1OS4ybC00LjQtN2MtMTguNS0yOS40LTI4LjItNjMuMy0yOC4yLTk4LjIgMC0xMDEuNyA4Mi44LTE4NC41IDE4NC42LTE4NC41IDQ5LjMgMCA5NS42IDE5LjIgMTMwLjQgNTQuMSAzNC44IDM0LjkgNTYuMiA4MS4yIDU2LjEgMTMwLjUgMCAxMDEuOC04NC45IDE4NC42LTE4Ni42IDE4NC42em0xMDEuMi0xMzguMmMtNS41LTIuOC0zMi44LTE2LjItMzcuOS0xOC01LjEtMS45LTguOC0yLjgtMTIuNSAyLjgtMy43IDUuNi0xNC4zIDE4LTE3LjYgMjEuOC0zLjIgMy43LTYuNSA0LjItMTIgMS40LTMyLjYtMTYuMy01NC0yOS4xLTc1LjUtNjYtNS43LTkuOCA1LjctOS4xIDE2LjMtMzAuMyAxLjgtMy43LjktNi45LS41LTkuNy0xLjQtMi44LTEyLjUtMzAuMS0xNy4xLTQxLjItNC41LTEwLjgtOS4xLTkuMy0xMi41LTkuNS0zLjItLjItNi45LS4yLTEwLjYtLjItMy43IDAtOS43IDEuNC0xNC44IDYuOS01LjEgNS42LTE5LjQgMTktMTkuNCA0Ni4zIDAgMjcuMyAxOS45IDUzLjcgMjIuNiA1Ny40IDIuOCAzLjcgMzkuMSA1OS43IDk0LjggODMuOCAzNS4yIDE1LjIgNDkgMTYuNSA2Ni42IDEzLjkgMTAuNy0xLjYgMzIuOC0xMy40IDM3LjQtMjYuNCA0LjYtMTMgNC42LTI0LjEgMy4yLTI2LjQtMS4zLTIuNS01LTMuOS0xMC41LTYuNnpcIj48L3BhdGg+PC9zdmc+V2hhdHNhcHA8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWNpcmNsZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjU2IDhDMTE5IDggOCAxMTkgOCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzOTMgOCAyNTYgOHpcIj48L3BhdGg+PC9zdmc+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIm1haWx0bzpjb250YWN0QGF2bi5zeXN0ZW1zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLW1haWxcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIwIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOC45NDEgOCA4IDExOC45MTkgOCAyNTZjMCAxMzcuMDU4IDExMC45MTkgMjQ4IDI0OCAyNDggNTIuOTI1IDAgMTA0LjY4LTE3LjA3OCAxNDcuMDkyLTQ4LjMxOSA1LjUwMS00LjA1MiA2LjQyMy0xMS45MjQgMi4wOTUtMTcuMjExbC01LjA3NC02LjE5OGMtNC4wMTgtNC45MDktMTEuMTkzLTUuODgzLTE2LjMwNy0yLjEyOUMzNDYuOTMgNDU3LjIwOCAzMDEuOTc0IDQ3MiAyNTYgNDcyYy0xMTkuMzczIDAtMjE2LTk2LjYwNy0yMTYtMjE2IDAtMTE5LjM3NSA5Ni42MDctMjE2IDIxNi0yMTYgMTE4LjQ0NSAwIDIxNiA4MC4wMjQgMjE2IDIwMCAwIDcyLjg3My01Mi44MTkgMTA4LjI0MS0xMTYuMDY1IDEwOC4yNDEtMTkuNzM0IDAtMjMuNjk1LTEwLjgxNi0xOS41MDMtMzMuODY4bDMyLjA3LTE2NC4wNzFjMS40NDktNy40MTEtNC4yMjYtMTQuMzAyLTExLjc3Ny0xNC4zMDJoLTEyLjQyMWExMiAxMiAwIDAgMC0xMS43ODEgOS43MThjLTIuMjk0IDExLjg0Ni0yLjg2IDEzLjQ2NC0zLjg2MSAyNS42NDctMTEuNzI5LTI3LjA3OC0zOC42MzktNDMuMDIzLTczLjM3NS00My4wMjMtNjguMDQ0IDAtMTMzLjE3NiA2Mi45NS0xMzMuMTc2IDE1Ny4wMjcgMCA2MS41ODcgMzMuOTE1IDk4LjM1NCA5MC43MjMgOTguMzU0IDM5LjcyOSAwIDcwLjYwMS0yNC4yNzggODYuNjMzLTQ2Ljk4Mi0xLjIxMSAyNy43ODYgMTcuNDU1IDQyLjIxMyA0NS45NzUgNDIuMjEzQzQ1My4wODkgMzc4Ljk1NCA1MDQgMzIxLjcyOSA1MDQgMjQwIDUwNCAxMDMuODE0IDM5My44NjMgOCAyNTYgOHptLTM3LjkyIDM0Mi42MjdjLTM2LjY4MSAwLTU4LjU4LTI1LjEwOC01OC41OC02Ny4xNjYgMC03NC42OSA1MC43NjUtMTIxLjU0NSA5Ny4yMTctMTIxLjU0NSAzOC44NTcgMCA1OC4xMDIgMjcuNzkgNTguMTAyIDY1LjczNSAwIDU4LjEzMy0zOC4zNjkgMTIyLjk3Ni05Ni43MzkgMTIyLjk3NnpcIj48L3BhdGg+PC9zdmc+RS1tYWlsPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6XCI+PC9wYXRoPjwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJzbXM6MTEgOTMwMTggODM2M1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1tYWlsXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk00MDAgMzJINDhDMjEuNDkgMzIgMCA1My40OSAwIDgwdjM1MmMwIDI2LjUxIDIxLjQ5IDQ4IDQ4IDQ4aDM1MmMyNi41MSAwIDQ4LTIxLjQ5IDQ4LTQ4VjgwYzAtMjYuNTEtMjEuNDktNDgtNDgtNDh6bTE2IDQwMGMwIDguODIyLTcuMTc4IDE2LTE2IDE2SDQ4Yy04LjgyMiAwLTE2LTcuMTc4LTE2LTE2VjgwYzAtOC44MjIgNy4xNzgtMTYgMTYtMTZoMzUyYzguODIyIDAgMTYgNy4xNzggMTYgMTZ2MzUyem0tNjQtMzA0SDk2Yy0xNy42NzMgMC0zMiAxNC4zMjctMzIgMzJ2MTkyYzAgMTcuNjczIDE0LjMyNyAzMiAzMiAzMmgyNTZjMTcuNjczIDAgMzItMTQuMzI3IDMyLTMyVjE2MGMwLTE3LjY3My0xNC4zMjctMzItMzItMzJ6bTAgMzJ2MzMuODU1Yy0xNC4xMzYgMTEuNjI4LTM2LjU2NiAyOS42NjQtODIuMTE3IDY1LjgyMUMyNTkuNDI2IDI2OC4wMTUgMjM4Ljc0OCAyODggMjI0LjI1NiAyODhsLS4yNTYtLjAwMi0uMjU2LjAwMmMtMTQuNDkyIDAtMzUuMTctMTkuOTg0LTQ1LjYyOC0yOC4zMjQtNDUuNTQ0LTM2LjE1Mi02Ny45NzgtNTQuMTkyLTgyLjExNy02NS44MjJWMTYwSDM1MnpNOTYgMzUyVjIzNS4wOTJjMTQuMTA5IDExLjM2NyAzMy42MjQgMjYuOTQ4IDYyLjIyMSA0OS42NDggMTMuNzc3IDExLjAxIDM3LjkwMiAzNS4yNiA2NS41MjMgMzUuMjZsLjI1My0uMDAxLjI1OC4wMDFjMjcuNTI5IDAgNTEuMzkyLTIzLjk3NSA2NS41NDEtMzUuMjc0IDI4LjU4My0yMi42ODkgNDguMDk5LTM4LjI3IDYyLjIwMy00OS42MzRWMzUySDk2elwiPjwvcGF0aD48L3N2Zz5TTVM8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWNpcmNsZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjU2IDhDMTE5IDggOCAxMTkgOCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzOTMgOCAyNTYgOHpcIj48L3BhdGg+PC9zdmc+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L21lbnVjb250YWN0PlxuICAgICAgICAgICAgPC9tZW51c2Nyb2xsPlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIGxlZnRtZW51IHtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogLTM0MHB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTAwMDA7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAzMzBweDtcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDhweCAjMDAwO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWMyMjJlO1xuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGxlZnQgMzUwbXMgZWFzZSAwcztcbiAgICAgICAgICAgICAgICAgICAgLW1vei10cmFuc2l0aW9uOiBsZWZ0IDM1MG1zIGVhc2UgMHM7XG4gICAgICAgICAgICAgICAgICAgIC1tcy10cmFuc2l0aW9uOiBsZWZ0IDM1MG1zIGVhc2UgMHM7XG4gICAgICAgICAgICAgICAgICAgIC1vLXRyYW5zaXRpb246IGxlZnQgMzUwbXMgZWFzZSAwcztcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogbGVmdCAzNTBtcyBlYXNlIDBzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBzaWRlYmFydXNlciB7XG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCA2cHggNHB4IHJnYmEoMCwwLDAsLjMpO1xuICAgICAgICAgICAgICAgICAgICB0b3VjaC1hY3Rpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE4NXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBzaWRlYmFydXNlciBwaG90byB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMfS9zdGF0aWMvaW1hZ2VzL2ljb25zL2ljb24tMTkyeDE5Mi5wbmcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBzaWRlYmFydXNlciBwaG90byB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjMDBmOWE2O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgdG9wO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCA1cHggIzAwMDAwMDtcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggIzAwMDAwMDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxNXB4IDBweCAwcHggMTVweDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogOTBweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDkwcHg7XG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBzaWRlYmFydXNlciBwaG90byB0aXRsZSB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAyODVweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogMTA1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IHNpZGViYXJ1c2VyIHBob3RvIHN1YnRpdGxlIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjkwcHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjY2NjO1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDEwMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBzaWRlYmFydXNlciBiZ2ltZyB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMfS9zdGF0aWMvaW1hZ2VzL2hvbWVwYWdlL2JhY2tncm91bmQtYXZuLTEuanBnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgc2lkZWJhcnVzZXIgYmdpbWcge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IGhhcmQtbGlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2E3ZjdmZjtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE4NXB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgc2lkZWJhcnVzZXIgYmdzaGFkb3cge1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiA5O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE4NXB4O1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20scmdiYSgwLDAsMCwwKSAwLHJnYmEoMCwwLDAsMCkgMjAlLHJnYmEoMCwwLDAsLjEpIDQwJSxyZ2JhKDAsMCwwLC43KSA3MCUscmdiYSgwLDAsMCwxKSAxMDAlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDIzNXB4KTtcbiAgICAgICAgICAgICAgICAgICAgdG91Y2gtYWN0aW9uOiBwYW4teTtcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzMwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgc2lkZWJhcnNlcGFyYXRvcjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgc2lkZWJhcnNlcGFyYXRvciB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNjY2M7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnQtZW51IG1lbnVzY3JvbGwgc2lkZWJhcmRpdmlkZXIge1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wOiBzb2xpZCAxcHggcmdiYSgwLDAsMCwuMik7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCByZ2JhKDI1NSwyNTUsMjU1LC4wMyk7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0bixcbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVjb250YWN0ID4gYSB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xuICAgICAgICAgICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDU1cHg7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNjY2M7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuLmRpc2FibGUsXG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51Y29udGFjdCA+IGEuZGlzYWJsZSB7XG4gICAgICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAuNTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51aXRlbXMgPiBidG4gLnN2Zy1pbmxpbmUsXG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51Y29udGFjdCA+IGEgLnN2Zy1pbmxpbmUge1xuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogLS4xMjVlbTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMjVweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNiNTAwZmY7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjJweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgIHRvcDogM3B4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0biAuc3ZnLWlubGluZS5zdmctY2lyY2xlLFxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWNvbnRhY3QgPiBhIC5zdmctaW5saW5lLnN2Zy1jaXJjbGUge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzQzNDc1MjtcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAyNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0biAuc3ZnLWlubGluZS5zdmctdGVybWluYWwge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzQzNDc1MjtcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtNXB4O1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDE4cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuIC5zdmctaW5saW5lLnN2Zy10diB7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IC00cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuIC5zdmctaW5saW5lLnN2Zy1zdG9yZXMge1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtNXB4O1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDJweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51aXRlbXMgPiBidG4gLnN2Zy1pbmxpbmUuc3ZnLXJlc3RhdXJhbnRlcyxcbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0biAuc3ZnLWlubGluZS5zdmctd2hhdHNhcHAsXG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51aXRlbXMgPiBidG4gLnN2Zy1pbmxpbmUuc3ZnLXBob25lLFxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuIC5zdmctaW5saW5lLnN2Zy1tYWlsLFxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuIC5zdmctaW5saW5lLnN2Zy1zdGFyIHtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogLTJweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51aXRlbXMgPiBidG46aG92ZXIsXG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51Y29udGFjdCA+IGE6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjMyYjNhO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuOmhvdmVyIC5zdmctaW5saW5lLnN2Zy10ZXJtaW5hbCxcbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0bjpob3ZlciAuc3ZnLWlubGluZS5zdmctY2lyY2xlLFxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWNvbnRhY3QgPiBhOmhvdmVyIC5zdmctaW5saW5lLnN2Zy1jaXJjbGUge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuID4gY291bnQge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjYzk0N2ZmO1xuICAgICAgICAgICAgICAgICAgICByaWdodDogLTI1cHg7XG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAtMnB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0biBzdWJtZW51IHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSArIDI1cHgpO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IC0yNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0biBzdWJtZW51IGJ0bi5kaXNhYmxlIHtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogLjU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuIHN1Ym1lbnUgYnRuIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAzNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0biBzdWJtZW51Lm9wZW4ge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0bjpob3ZlciBzdWJtZW51IGJ0biAuc3ZnLWlubGluZS5zdmctY2lyY2xlIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM0MzQ3NTI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuOmhvdmVyIHN1Ym1lbnUgYnRuOm5vdCguZGlzYWJsZSk6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmYzYTRlO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuOmhvdmVyIHN1Ym1lbnUgYnRuOm5vdCguZGlzYWJsZSk6aG92ZXIgLnN2Zy1pbmxpbmUuc3ZnLWNpcmNsZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk0MHB4KSB7XG4gICAgICAgICAgICAgICAgICAgIGZvb3RlciBpbmZvcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA2MjVweCkge1xuICAgICAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2l0ZW1vYmlsZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgIFx0PC9sZWZ0bWVudT5cbiAgICApfVxufSJdfQ== */\n/*@ sourceURL=/home/ubuntu/workspace/estudo/next/components/interface.js */"),
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
        className: "jsx-3777211049",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 356
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("light-right", {
        className: "jsx-3777211049",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 357
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("version", {
        className: "jsx-3777211049" + " " + "ftl",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 358
        },
        __self: this
      }, "version: ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("item", {
        className: "jsx-3777211049",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 358
        },
        __self: this
      }, "2.1.01")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("infos", {
        className: "jsx-3777211049" + " " + "ftl",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 359
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "https://admin.avn.systems/v1/",
        target: "_blank",
        className: "jsx-3777211049",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 360
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("login", {
        className: "jsx-3777211049",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 360
        },
        __self: this
      }, "\uD83D\uDD10 CLIENT LOGIN")), " | ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("clickitem", {
        className: "jsx-3777211049",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 360
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("item", {
        className: "jsx-3777211049",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 360
        },
        __self: this
      }, "LOCAL:"), " WORLDWIDE"), " | ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "https://github.com/avnsystems",
        target: "_blank",
        className: "jsx-3777211049",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 360
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("item", {
        className: "jsx-3777211049",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 360
        },
        __self: this
      }, "GITHUB/"), "AVNSYSTEMS"), " | ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "mailto:myapp@avn.systems",
        className: "jsx-3777211049",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 360
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("item", {
        className: "jsx-3777211049",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 360
        },
        __self: this
      }, "E-MAIL:"), " CONTACT@AVN.SYSTEMS")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("language", {
        className: "jsx-3777211049" + " " + "ftr",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 362
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: "jsx-3777211049" + " " + "flag-icon flag-icon-us selected ftr",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 363
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "jsx-3777211049",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 364
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3777211049",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 365
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "jsx-3777211049",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 365
        },
        __self: this
      }, "English", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: "jsx-3777211049" + " " + "flag-icon flag-icon-us",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 365
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3777211049" + " " + "disable",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 366
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "jsx-3777211049",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 366
        },
        __self: this
      }, "Spanish", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: "jsx-3777211049" + " " + "flag-icon flag-icon-es",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 366
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3777211049" + " " + "disable",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 367
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "jsx-3777211049",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 367
        },
        __self: this
      }, "French", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: "jsx-3777211049" + " " + "flag-icon flag-icon-fr",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 367
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3777211049" + " " + "disable",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 368
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "jsx-3777211049",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 368
        },
        __self: this
      }, "Portuguese", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: "jsx-3777211049" + " " + "flag-icon flag-icon-br",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 368
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("copyright", {
        className: "jsx-3777211049" + " " + "ftr",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 371
        },
        __self: this
      }, "Copyright ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("item", {
        className: "jsx-3777211049",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 371
        },
        __self: this
      }, "2017")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "3777211049",
        css: "footer.jsx-3777211049{background:url(".concat("", "/static/images/footer.jpg);position:fixed;z-index:10000;display:none;height:37px;width:100%;bottom:0;webkit-box-shadow:0 -1px 10px 0 rgb(0,0,0);-moz-box-shadow:0 -1px 10px 0 rgb(0,0,0);box-shadow:0 -1px 10px 0 rgb(0,0,0);}footer.jsx-3777211049 copyright.jsx-3777211049,footer.jsx-3777211049 version.jsx-3777211049{padding:12px 15px;font-style:italic;font-size:10px;color:#bc74ff;}footer.jsx-3777211049 copyright.jsx-3777211049>item.jsx-3777211049,footer.jsx-3777211049 version.jsx-3777211049>item.jsx-3777211049,footer.jsx-3777211049 infos.jsx-3777211049 item.jsx-3777211049{color:#ABA49A;}footer.jsx-3777211049 infos.jsx-3777211049{left:calc(50% - 221px);margin-top:12px;position:fixed;font-size:10px;color:#776E63;}footer.jsx-3777211049 infos.jsx-3777211049 a.jsx-3777211049{color:#776E63;}footer.jsx-3777211049 infos.jsx-3777211049>a.jsx-3777211049>login.jsx-3777211049{color:#dc9d00;}footer.jsx-3777211049 infos.jsx-3777211049 a.jsx-3777211049:hover,footer.jsx-3777211049 infos.jsx-3777211049 a.jsx-3777211049:hover login.jsx-3777211049,footer.jsx-3777211049 infos.jsx-3777211049 clickitem.jsx-3777211049:hover{-webkit-text-decoration:none;text-decoration:none;color:#bc74ff;}footer.jsx-3777211049 language.jsx-3777211049 i.flag-icon.jsx-3777211049{margin:7px 15px 0px 0px;background-size:contain;cursor:pointer;height:25px;width:25px;}footer.jsx-3777211049 language.jsx-3777211049 i.flag-icon-us.jsx-3777211049{background-image:url(").concat("", "/static/images/flags/usa.png);}footer.jsx-3777211049 language.jsx-3777211049 i.flag-icon-es.jsx-3777211049{background-image:url(").concat("", "/static/images/flags/spain.png);}footer.jsx-3777211049 language.jsx-3777211049 i.flag-icon-fr.jsx-3777211049{background-image:url(").concat("", "/static/images/flags/france.png);}footer.jsx-3777211049 language.jsx-3777211049 i.flag-icon-br.jsx-3777211049{background-image:url(").concat("", "/static/images/flags/brazil.png);}footer.jsx-3777211049 language.jsx-3777211049:hover ul.jsx-3777211049{display:block;bottom:15px;}footer.jsx-3777211049 language.jsx-3777211049 ul.jsx-3777211049{border-left:2px solid #031c45;border-top:2px solid #031c45;padding:5px 15px 5px 0;background:#292826;margin-bottom:15px;text-align:right;list-style:none;position:fixed;display:none;right:0;}footer.jsx-3777211049 language.jsx-3777211049 ul.jsx-3777211049 li.jsx-3777211049{height:25px;}footer.jsx-3777211049 language.jsx-3777211049 ul.jsx-3777211049 li.disable.jsx-3777211049 a.jsx-3777211049{pointer-events:none;color:#82807e;}footer.jsx-3777211049 language.jsx-3777211049 ul.jsx-3777211049 li.disable.jsx-3777211049 a.jsx-3777211049>i.flag-icon.jsx-3777211049{-webkit-filter:grayscale(100%);-webkit-filter:grayscale(100%);filter:grayscale(100%);}footer.jsx-3777211049 language.jsx-3777211049 ul.jsx-3777211049 li.jsx-3777211049 a.jsx-3777211049{margin:0 10px 0 15px;position:relative;font-style:italic;text-align:right;font-size:12px;color:#bc74ff;}footer.jsx-3777211049 language.jsx-3777211049 ul.jsx-3777211049 li.jsx-3777211049 a.jsx-3777211049:hover{color:#ffffff;}footer.jsx-3777211049 language.jsx-3777211049 ul.jsx-3777211049 li.jsx-3777211049 a.jsx-3777211049>i.flag-icon.jsx-3777211049{float:right;height:25px;width:25px;margin:0;}@media (max-width:940px){footer.jsx-3777211049 infos.jsx-3777211049{display:none;}}@media (max-width:625px){}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VidW50dS93b3Jrc3BhY2UvZXN0dWRvL25leHQvY29tcG9uZW50cy9pbnRlcmZhY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbVh3QixBQUcyRixBQVlwRCxBQU1KLEFBR1MsQUFPTCxBQUdBLEFBR08sQUFJRCxBQU91RCxBQUdFLEFBR0MsQUFHQSxBQUdwRSxBQUlnQixBQVlsQixBQUdRLEFBSVcsQUFJVixBQVFQLEFBR0YsQUFRSyxZQTdCckIsQUFzQmdCLENBUVosQ0FyRkosQUFVSSxBQUdBLEFBMEJZLEFBbUNoQixJQWhGc0IsRUFnRUosQ0FRSSxFQS9ERixDQWlCUSxBQTBEYixFQXRDZixJQUdpQyxDQW1CTixHQUgzQixDQW9CYSxDQXBGTSxHQVNBLEFBK0RHLEtBYXRCLElBM0RtQixFQUxHLENBcEJKLEdBU0MsR0ErREUsRUF4Qk0sSUF0QlgsQ0FMWixDQXBCSixJQVNrQixDQXhCQyxJQXVGQSxDQTlDSixJQUlmLEVBR0EsQ0FHQSxBQUdBLEFBU3VCLENBdENuQixFQXhCYyxBQWdGbEIsQ0F2Q0EsR0E4Q2tCLFVBdEZELEVBOERNLEVBeUJ2QixTQXRGZ0IsUUE4REssSUE3RE4sV0FDRixFQTZETyxPQTVENkIsU0E2RDlCLGVBQ0YsYUFDTCxNQTlEbUMsRUErRC9DLHVDQTlEMEMsb0NBQzFDIiwiZmlsZSI6Ii9ob21lL3VidW50dS93b3Jrc3BhY2UvZXN0dWRvL25leHQvY29tcG9uZW50cy9pbnRlcmZhY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKmdsb2JhbCAkIG5hdmlnYXRvciovXG5cbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuXG5pbXBvcnQgTlByb2dyZXNzIGZyb20gJ25wcm9ncmVzcydcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5cblJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlU3RhcnQnLCAodXJsKSA9PiB7XG4gIGNvbnNvbGUubG9nKGBMb2FkaW5nOiAke3VybH1gKVxuICBOUHJvZ3Jlc3Muc3RhcnQoKVxufSlcbi8vIFJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCAoKSA9PiBOUHJvZ3Jlc3MuZG9uZSgpKVxuLy8gUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VFcnJvcicsICgpID0+IE5Qcm9ncmVzcy5kb25lKCkpXG5cbmV4cG9ydCBkZWZhdWx0ICh7IGNoaWxkcmVuLFxuICAgIHRpdGxlID0gJ1RoaXMgaXMgdGhlIGRlZmF1bHQgdGl0bGUnLFxuICAgIFxuICAgIG9nU2l0ZU5hbWUgPSBcImF2bi5zeXN0ZW1zXCIsIG9nVGl0bGUgPSBcIldlYnNpdGUgfCBhdm4uc3lzdGVtc1wiLFxuICAgIG9nVXJsID0gXCJodHRwczovL2F2bi5zeXN0ZW1zXCIsIG9nVHlwZSA9IFwiYXJ0aWNsZVwiLFxuICAgIG9nRGVzY3JpcHRpb24gPSBcIldlYnNpdGUgY3JlYXRlZCB3aXRoIG5leHQuanMgb3B0bWl6ZWQgYXMgYSBQV0FcIixcbiAgICBvZ0ltYWdlID0gJy9zdGF0aWMvaW1hZ2VzL2F2bi5zeXN0ZW1zLm9nLWltYWdlLmpwZycsXG4gICAgXG4gICAgdHdpdHRlclNpdGUgPSBcIkBhdm4uc3lzdGVtc1wiLFxuICAgIHR3aXR0ZXJDcmVhdG9yID0gXCJAYXZuLnN5c3RlbXNcIixcbiAgICBcbiAgICBjYW5vbmljYWwgPSBcImh0dHBzOi8vYXZuLnN5c3RlbXNcIixcbiAgICBmZWVkWG1sID0gXCJodHRwczovL2F2bi5zeXN0ZW1zL2ZlZWQueG1sXCIsXG4gICAgZmVlZEpzb24gPSBcImh0dHBzOi8vYXZuLnN5c3RlbXNtL2ZlZWQuanNvblwiXG4gIH0pID0+IChcbiAgPGludGVyZmFjZT5cbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT57IHRpdGxlIH08L3RpdGxlPlxuICAgICAgPG1ldGEgY2hhclNldD0ndXRmLTgnIC8+XG4gICAgICA8bWV0YSBuYW1lPSd2aWV3cG9ydCcgY29udGVudD0naW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aCcgLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJhdXRob3JcIiBjb250ZW50PVwiQWxsYW4gQXZlbGFyIC0gaHR0cHM6Ly9hbGxhbmF2ZWxhci5jb20vXCIgLz5cbiAgICAgIFxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpzaXRlX25hbWVcIiBjb250ZW50PXsgb2dTaXRlTmFtZSB9IC8+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD17IG9nVGl0bGUgfSAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PXsgb2dVcmwgfSAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0eXBlXCIgY29udGVudD17IG9nVHlwZSB9IC8+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD17IG9nRGVzY3JpcHRpb24gfSAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9eyBwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArIG9nSW1hZ2UgfSAvPlxuICAgIFxuICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6Y2FyZFwiIGNvbnRlbnQ9XCJzdW1tYXJ5X2xhcmdlX2ltYWdlXCIgLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOnNpdGVcIiBjb250ZW50PXsgdHdpdHRlclNpdGUgfSAvPlxuICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6Y3JlYXRvclwiIGNvbnRlbnQ9eyB0d2l0dGVyQ3JlYXRvciB9IC8+XG4gICAgXG4gICAgICA8bGluayByZWw9XCJjYW5vbmljYWxcIiBocmVmPXsgY2Fub25pY2FsIH0gLz5cbiAgICAgIDxsaW5rIHJlbD1cImFsdGVybmF0ZVwiIHR5cGU9XCJhcHBsaWNhdGlvbi9yc3MreG1sXCIgdGl0bGU9eyBvZ1RpdGxlIH0gaHJlZj17IGZlZWRYbWwgfSAvPlxuICAgICAgPGxpbmsgcmVsPVwiYWx0ZXJuYXRlXCIgdHlwZT1cImFwcGxpY2F0aW9uL2pzb25cIiB0aXRsZT17IG9nVGl0bGUgfSBocmVmPXsgZmVlZEpzb24gfSAvPlxuXG4gICAgICA8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCIxMTR4MTE0XCIgaHJlZj17IHByb2Nlc3MuZW52LkJBQ0tFTkRfVVJMICsgJy9zdGF0aWMvaW1hZ2VzL2ljb24ucG5nJ30gLz5cbiAgICAgIDxsaW5rIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBzaXplcz1cIjEyMHgxMjBcIiBocmVmPXsgcHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyAnL3N0YXRpYy9pbWFnZXMvaWNvbi5wbmcnfSAvPlxuICAgICAgPGxpbmsgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIHNpemVzPVwiMTQ0eDE0NFwiIGhyZWY9eyBwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArICcvc3RhdGljL2ltYWdlcy9pY29uLnBuZyd9IC8+XG4gICAgICA8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCIxNTJ4MTUyXCIgaHJlZj17IHByb2Nlc3MuZW52LkJBQ0tFTkRfVVJMICsgJy9zdGF0aWMvaW1hZ2VzL2ljb24ucG5nJ30gLz5cbiAgICAgIDxsaW5rIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBzaXplcz1cIjE4MHgxODBcIiBocmVmPXsgcHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyAnL3N0YXRpYy9pbWFnZXMvaWNvbi5wbmcnfSAvPlxuICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS9wbmdcIiBocmVmPXsgcHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyAnL3N0YXRpYy9pbWFnZXMvaWNvbi5wbmcnfSAvPlxuICAgICAgPGxpbmsgcmVsPVwic2hvcnRjdXQgaWNvblwiIGhyZWY9eyBwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArICcvc3RhdGljL2ltYWdlcy9mYXZpY29uLmljbyd9IC8+XG4gICAgICBcbiAgICAgIDxsaW5rIHJlbD1cIm1hc2staWNvblwiIGhyZWY9XCIvYXNzZXRzL3NhZmFyaS1waW5uZWQtdGFiLnN2Z1wiIGNvbG9yPVwiIzViYmFkNVwiIC8+XG4gICAgICA8bGluayByZWw9XCJtYW5pZmVzdFwiIGhyZWY9eyBwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArICcvc3RhdGljL21hbmlmZXN0Lmpzb24nfSAvPlxuICAgICAgXG4gICAgICA8bWV0YSBuYW1lPVwibXNhcHBsaWNhdGlvbi1UaWxlQ29sb3JcIiBjb250ZW50PVwiIzU3MDBBRVwiIC8+XG4gICAgICA8bWV0YSBuYW1lPVwibXNhcHBsaWNhdGlvbi1UaWxlSW1hZ2VcIiBjb250ZW50PXsgcHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyAnL3N0YXRpYy9pbWFnZXMvYXZuLnN5c3RlbXMub2ctaW1hZ2UuanBnJ30gLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJtc2FwcGxpY2F0aW9uLWNvbmZpZ1wiIGNvbnRlbnQ9eyBwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArICcvc3RhdGljL2Jyb3dzZXJjb25maWcueG1sJ30gLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJ0aGVtZS1jb2xvclwiIGNvbnRlbnQ9XCIjNTcwMEFFXCIgLz5cbiAgICAgIFxuICAgICAgPGxpbmsgZGVmZXIgcmVsPSdzdHlsZXNoZWV0JyBocmVmPSdodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjAuMC1iZXRhLjMvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJyBpbnRlZ3JpdHk9J3NoYTM4NC1adWcrUWlEb0pPclo1dDRsc3NMZHhHaFZydXJibUJXb3BvRWwrTTZCZEVmd25DSlp0S3hpMUtneFV5SnExM2R5JyBjcm9zc09yaWdpbj0nYW5vbnltb3VzJyAvPlxuICAgICAgPGxpbmsgcmVsPSdzdHlsZXNoZWV0JyB0eXBlPSd0ZXh0L2NzcycgaHJlZj17IHByb2Nlc3MuZW52LkJBQ0tFTkRfVVJMICsgJy9zdGF0aWMvY3NzL25wcm9ncmVzcy5jc3MnfSAvPlxuICAgICAgPHNjcmlwdCBkZWZlciBzcmM9XCJodHRwczovL2NvZGUuanF1ZXJ5LmNvbS9qcXVlcnktMy4zLjEubWluLmpzXCI+PC9zY3JpcHQ+XG4gICAgPC9IZWFkPlxuICAgIDxIZWFkZXIgLz5cbiAgICA8TGVmdE1lbnUgLz5cbiAgICA8cGFnZT5cbiAgICAgICAgeyBjaGlsZHJlbiB9XG4gICAgPC9wYWdlPlxuICAgIDxtZW51aGlkZXI+PC9tZW51aGlkZXI+XG4gICAgPEZvb3RlciAvPlxuICAgIDxwYWdlbG9hZGVyPjxiYXI+PC9iYXI+PC9wYWdlbG9hZGVyPlxuICAgIFxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgICAgbWluLXdpZHRoOiAzMjBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgke3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMfS9zdGF0aWMvaW1hZ2VzL2JvZHktYmcuanBnKSAjRjVGN0Y2O1xuICAgICAgICB9XG4gICAgICAgIHBhZ2Uge1xuICAgICAgICAgICAgcGFkZGluZzogMTg1cHggMjBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgICAgICBwcmUgY29kZSB7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGUhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICAgIC5mdGwge1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIH1cbiAgICAgICAgLmZ0ciB7XG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBib2R5LmxlZnQtbWVudSBsZWZ0bWVudSB7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB9XG4gICAgICAgIGJvZHkubGVmdC1tZW51IGhlYWRlciBuYXZ0b2dnbGUge1xuICAgICAgICAgICAgbGVmdDogMzUwcHg7XG4gICAgICAgIH1cbiAgICAgICAgYm9keS5sb2FkZWQgbWVudWhpZGVyIHtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGRpc3BsYXkgMXMgZWFzZSAxcztcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB9XG4gICAgICAgIC5ucHJvZ3Jlc3MtYnVzeSBib2R5LmxvYWRlZCBtZW51aGlkZXIsXG4gICAgICAgIGJvZHkubG9hZGVkLmxlZnQtbWVudSBtZW51aGlkZXIge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB9XG4gICAgICAgIGJvZHkubG9hZGVkIHBhZ2Vsb2FkZXIge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICBtZW51aGlkZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwuNSk7XG4gICAgICAgICAgICBwb2ludGVyLWV2ZW50czogYWxsO1xuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB6LWluZGV4OiAxMDMwO1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlIDBzO1xuICAgICAgICAgICAgLW1vei10cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2UgMHM7XG4gICAgICAgICAgICAtbXMtdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlIDBzO1xuICAgICAgICAgICAgLW8tdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlIDBzO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlIDBzO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAubnByb2dyZXNzLWJ1c3kgYm9keS5sb2FkZWQgcGFnZWxvYWRlciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgICAgICBwYWdlbG9hZGVyIHtcbiAgICAgICAgICAgIG1hcmdpbjogLTE1cHggMCAwIC0xMDBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDA7XG4gICAgICAgICAgICB6LWluZGV4OiA5OTk5OTk5O1xuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIH1cbiAgICAgICAgcGFnZWxvYWRlciBiYXIge1xuICAgICAgICAgICAgbWFyZ2luOiAtMnB4IDAgMCAtODdweDtcbiAgICAgICAgICAgIGFuaW1hdGlvbjogZ3JhZHRyYW5zbGF0ZSAycyBpbmZpbml0ZSBsaW5lYXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhcixsZWZ0IHRvcCxyaWdodCB0b3AsY29sb3Itc3RvcCgwJSx3aGl0ZSksY29sb3Itc3RvcCg1MCUsIzg1MDBGRiksY29sb3Itc3RvcCgxMDAlLHdoaXRlKSk7O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiA0MDBweCAxcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODUwMEZGO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgd2lkdGg6IDE3NHB4O1xuICAgICAgICAgICAgb3BhY2l0eTogLjg7XG4gICAgICAgICAgICBoZWlnaHQ6IDRweDtcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBib2R5LmxvYWRlZCBsZWZ0bWVudSxcbiAgICAgICAgYm9keS5sb2FkZWQgaGVhZGVyLFxuICAgICAgICBib2R5LmxvYWRlZCBmb290ZXIsXG4gICAgICAgIGJvZHkubG9hZGVkIHBhZ2Uge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM5OXB4KSB7XG4gICAgICAgICAgICBib2R5LmxlZnQtbWVudSBsZWZ0bWVudSwgbGVmdG1lbnUgbWVudXNjcm9sbCB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDY5cHgpIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDMzMHB4O1xuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMjYwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvaW50ZXJmYWNlPlxuKVxuXG5leHBvcnQgY2xhc3MgSGVhZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgICAgIGlmICgnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSB7XG4gICAgICAgIC8vIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyXG4gICAgICAgIC8vICAgLnJlZ2lzdGVyKHByb2Nlc3MuZW52LkJBQ0tFTkRfVVJMICsnL3NlcnZpY2Utd29ya2VyLmpzJylcbiAgICAgICAgLy8gICAudGhlbihyZWdpc3RyYXRpb24gPT4ge1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coJ3NlcnZpY2Ugd29ya2VyIHJlZ2lzdHJhdGlvbiBzdWNjZXNzZnVsJylcbiAgICAgICAgLy8gICB9KVxuICAgICAgICAvLyAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAvLyAgICAgY29uc29sZS53YXJuKCdzZXJ2aWNlIHdvcmtlciByZWdpc3RyYXRpb24gZmFpbGVkJywgZXJyLm1lc3NhZ2UpXG4gICAgICAgIC8vICAgfSlcbiAgICAgICAgfVxuICAgICAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJCh3aW5kb3cpLnNjcm9sbFRvcCgpID4gMCAmJiAkKHdpbmRvdykud2lkdGgoKSA+IDU1MCA/ICQoXCJoZWFkZXJcIikuYWRkQ2xhc3MoXCJyZXNpemVcIikgOiAkKFwiaGVhZGVyXCIpLnJlbW92ZUNsYXNzKFwicmVzaXplXCIpXG4gICAgICAgIH0pXG4gICAgICAgICQod2luZG93KS5vbignbG9hZCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJCgnYm9keScpLmFkZENsYXNzKFwibG9hZGVkXCIpXG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgICAgICAkKFwiaGVhZGVyIG5hdiBhXCIpLmhvdmVyKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJChcImhlYWRlciBuYXZzbGlkZXJcIikuY3NzKHtcbiAgICAgICAgICAgICAgICBsZWZ0OiAkKHRoaXMpLnBvc2l0aW9uKCkubGVmdCArIHBhcnNlSW50KCQodGhpcykuY3NzKFwibWFyZ2luTGVmdFwiKSkgKyBcInB4XCIsXG4gICAgICAgICAgICAgICAgd2lkdGg6ICQodGhpcykud2lkdGgoKSArIFwicHhcIixcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiBcIi45OTlcIlxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKFwiaGVhZGVyIG5hdnNsaWRlclwiKS5jc3MoXCJvcGFjaXR5XCIsIFwiMFwiKVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmVuZGVyICgpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgICAgICAgPGxvZ28+PHRleHQ+QVZOIFNZU1RFTVM8L3RleHQ+PC9sb2dvPlxuICAgICAgICAgICAgICAgIDxuYXY+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nIGFzPXsgcHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyBgL2B9PjxhPkhvbWU8L2E+PC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvYWJvdXQnIGFzPXsgcHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyBgL2Fib3V0YH0+PGE+QWJvdXQ8L2E+PC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvdHZtYXplJyBhcz17IHByb2Nlc3MuZW52LkJBQ0tFTkRfVVJMICsgYC90dm1hemVgfT48YT5UViBNYXplPC9hPjwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nLzQwNCcgYXM9eyBwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArIGAvNDA0YH0+PGE+NDA0PC9hPjwvTGluaz5cbiAgICAgICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICAgICAgICA8bmF2dG9nZ2xlPjxiYXI+PC9iYXI+PGJhcj48L2Jhcj48YmFyPjwvYmFyPjwvbmF2dG9nZ2xlPlxuICAgICAgICAgICAgICAgIDxuYXZzbGlkZXI+PC9uYXZzbGlkZXI+XG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgICAgICBoZWFkZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwMDAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogOTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlciBsb2dvIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE2cHggMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE3MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogOTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7cHJvY2Vzcy5lbnYuQkFDS0VORF9VUkx9L3N0YXRpYy9pbWFnZXMvaWNvbi5wbmcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjogZ3JheTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMTUwbXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAxNTBtcyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMTUwbXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAtby10cmFuc2l0aW9uOiBhbGwgMTUwbXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMTUwbXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyIGxvZ286aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1maWx0ZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAtbW96LWZpbHRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC1vLWZpbHRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBoZWFkZXIgbG9nbyB0ZXh0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtaW5saW5lLWJveDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDExMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM1ZjVmNWY7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiA2MHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlciBuYXYge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyIG5hdiBhIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDI1cHggMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZDlkOWQ5O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlciBuYXYgYTpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzg1MDBGRjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBoZWFkZXIgbmF2dG9nZ2xlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0NXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBoZWFkZXIgbmF2dG9nZ2xlIGJhciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2FhYTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA3cHggMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyIG5hdnRvZ2dsZTpob3ZlciBiYXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNiYzczZmY7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyIG5hdnNsaWRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiA0cHggc29saWQgIzg1MDBGRjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogNTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMjUwbXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAyNTBtcyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMjUwbXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAtby10cmFuc2l0aW9uOiBhbGwgMjUwbXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMjUwbXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MjVweCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDU4cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXIgbG9nbyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogY2FsYyg1MCUgLSA4NXB4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWZpbHRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtbW96LWZpbHRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtby1maWx0ZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyIG5hdiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlciBuYXZ0b2dnbGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGb290ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbXBvbmVudERpZE1vdW50ICgpIHtcbiAgICAgICAgXG4gICAgfVxuICAgIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGZvb3Rlcj5cbiAgICAgICAgICAgIDxsaWdodC1yaWdodD48L2xpZ2h0LXJpZ2h0PlxuICAgICAgICAgICAgPHZlcnNpb24gY2xhc3NOYW1lPVwiZnRsXCI+dmVyc2lvbjogPGl0ZW0+Mi4xLjAxPC9pdGVtPjwvdmVyc2lvbj5cbiAgICAgICAgICAgIDxpbmZvcyBjbGFzc05hbWU9XCJmdGxcIj5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9hZG1pbi5hdm4uc3lzdGVtcy92MS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj48bG9naW4+8J+UkCBDTElFTlQgTE9HSU48L2xvZ2luPjwvYT4gfCA8Y2xpY2tpdGVtPjxpdGVtPkxPQ0FMOjwvaXRlbT4gV09STERXSURFPC9jbGlja2l0ZW0+IHwgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9hdm5zeXN0ZW1zXCIgdGFyZ2V0PVwiX2JsYW5rXCI+PGl0ZW0+R0lUSFVCLzwvaXRlbT5BVk5TWVNURU1TPC9hPiB8IDxhIGhyZWY9XCJtYWlsdG86bXlhcHBAYXZuLnN5c3RlbXNcIj48aXRlbT5FLU1BSUw6PC9pdGVtPiBDT05UQUNUQEFWTi5TWVNURU1TPC9hPlxuICAgICAgICAgICAgPC9pbmZvcz5cbiAgICAgICAgICAgIDxsYW5ndWFnZSBjbGFzc05hbWU9XCJmdHJcIj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmbGFnLWljb24gZmxhZy1pY29uLXVzIHNlbGVjdGVkIGZ0clwiPjwvaT5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48YT5FbmdsaXNoPGkgY2xhc3NOYW1lPVwiZmxhZy1pY29uIGZsYWctaWNvbi11c1wiPjwvaT48L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImRpc2FibGVcIj48YT5TcGFuaXNoPGkgY2xhc3NOYW1lPVwiZmxhZy1pY29uIGZsYWctaWNvbi1lc1wiPjwvaT48L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImRpc2FibGVcIj48YT5GcmVuY2g8aSBjbGFzc05hbWU9XCJmbGFnLWljb24gZmxhZy1pY29uLWZyXCI+PC9pPjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZGlzYWJsZVwiPjxhPlBvcnR1Z3Vlc2U8aSBjbGFzc05hbWU9XCJmbGFnLWljb24gZmxhZy1pY29uLWJyXCI+PC9pPjwvYT48L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2xhbmd1YWdlPlxuICAgICAgICAgICAgPGNvcHlyaWdodCBjbGFzc05hbWU9XCJmdHJcIj5Db3B5cmlnaHQgPGl0ZW0+MjAxNzwvaXRlbT48L2NvcHlyaWdodD5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICBmb290ZXIge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJHtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTH0vc3RhdGljL2ltYWdlcy9mb290ZXIuanBnKTtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDAwMDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzN3B4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgICAgICB3ZWJraXQtYm94LXNoYWRvdzogMCAtMXB4IDEwcHggMCByZ2IoMCwgMCwgMCk7XG4gICAgICAgICAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogMCAtMXB4IDEwcHggMCByZ2IoMCwgMCwgMCk7XG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgLTFweCAxMHB4IDAgcmdiKDAsIDAsIDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb290ZXIgY29weXJpZ2h0LCBmb290ZXIgdmVyc2lvbiB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEycHggMTVweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjYmM3NGZmO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb290ZXIgY29weXJpZ2h0ID4gaXRlbSwgZm9vdGVyIHZlcnNpb24gPiBpdGVtLCBmb290ZXIgaW5mb3MgaXRlbSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjQUJBNDlBO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb290ZXIgaW5mb3Mge1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiBjYWxjKDUwJSAtIDIyMXB4KTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNzc2RTYzO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZvb3RlciBpbmZvcyBhIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNzc2RTYzO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZvb3RlciBpbmZvcyA+IGEgPiBsb2dpbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2RjOWQwMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmb290ZXIgaW5mb3MgYTpob3ZlciwgZm9vdGVyIGluZm9zIGE6aG92ZXIgbG9naW4sIGZvb3RlciBpbmZvcyBjbGlja2l0ZW06aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNiYzc0ZmY7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb290ZXIgbGFuZ3VhZ2UgaS5mbGFnLWljb24ge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDdweCAxNXB4IDBweCAwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb290ZXIgbGFuZ3VhZ2UgaS5mbGFnLWljb24tdXMge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTH0vc3RhdGljL2ltYWdlcy9mbGFncy91c2EucG5nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9vdGVyIGxhbmd1YWdlIGkuZmxhZy1pY29uLWVzIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7cHJvY2Vzcy5lbnYuQkFDS0VORF9VUkx9L3N0YXRpYy9pbWFnZXMvZmxhZ3Mvc3BhaW4ucG5nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9vdGVyIGxhbmd1YWdlIGkuZmxhZy1pY29uLWZyIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7cHJvY2Vzcy5lbnYuQkFDS0VORF9VUkx9L3N0YXRpYy9pbWFnZXMvZmxhZ3MvZnJhbmNlLnBuZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvb3RlciBsYW5ndWFnZSBpLmZsYWctaWNvbi1iciB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMfS9zdGF0aWMvaW1hZ2VzL2ZsYWdzL2JyYXppbC5wbmcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb290ZXIgbGFuZ3VhZ2U6aG92ZXIgdWwge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAxNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb290ZXIgbGFuZ3VhZ2UgdWwge1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICMwMzFjNDU7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAjMDMxYzQ1O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMTVweCA1cHggMDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzI5MjgyNjtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvb3RlciBsYW5ndWFnZSB1bCBsaSB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9vdGVyIGxhbmd1YWdlIHVsIGxpLmRpc2FibGUgYSB7XG4gICAgICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzgyODA3ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9vdGVyIGxhbmd1YWdlIHVsIGxpLmRpc2FibGUgYSA+IGkuZmxhZy1pY29uIHtcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1maWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvb3RlciBsYW5ndWFnZSB1bCBsaSBhIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDEwcHggMCAxNXB4O1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNiYzc0ZmY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvb3RlciBsYW5ndWFnZSB1bCBsaSBhOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvb3RlciBsYW5ndWFnZSB1bCBsaSBhID4gaS5mbGFnLWljb24ge1xuICAgICAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk0MHB4KSB7XG4gICAgICAgICAgICAgICAgICAgIGZvb3RlciBpbmZvcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MjVweCkge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9mb290ZXI+XG4gICAgKX1cbn1cblxuZXhwb3J0IGNsYXNzIExlZnRNZW51IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgICAgICQoXCJsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0bi5zdWJtZW51LWhhcy1udW1iZXJzXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgaWYgKCQoZS50YXJnZXQpLmhhc0NsYXNzKCdkaXNhYmxlJykpIHtcbiAgICAgICAgICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKCQoZS50YXJnZXQpLmF0dHIoJ2hyZWYnKSkge1xuICAgICAgICAgICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnbGVmdC1tZW51Jyk7XG4gICAgICAgICAgICAgICAgLy9yZXR1cm4gJC5mbi5uYXZpZ2F0ZShlLnRhcmdldCwgZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQodGhpcykuZmluZCgnc3VibWVudScpLnRvZ2dsZUNsYXNzKFwib3BlblwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgJChcImhlYWRlciBuYXZ0b2dnbGUsIG1lbnVoaWRlclwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICQoJ2JvZHknKS50b2dnbGVDbGFzcygnbGVmdC1tZW51Jyk7XG4gICAgICAgIH0pXG4gICAgfVxuICAgIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGxlZnRtZW51PlxuICAgIFx0XHQ8c2lkZWJhcnVzZXI+XG4gICAgXHQgICAgICAgIDxwaG90bz5cbiAgICBcdCAgICAgICAgICAgIDx0aXRsZT5Cb2Egbm9pdGUuIOKYhTwvdGl0bGU+XG4gICAgXHQgICAgICAgICAgICA8c3VidGl0bGU+RW50cmUgY29tIHNldSBsb2dpbiBvdSBjYWRhc3RyZS1zZSE8L3N1YnRpdGxlPlxuICAgIFx0ICAgICAgICA8L3Bob3RvPlxuICAgIFx0XHQgICAgPGJnaW1nPjwvYmdpbWc+XG4gICAgXHRcdCAgICA8YmdzaGFkb3c+PC9iZ3NoYWRvdz5cbiAgICBcdFx0PC9zaWRlYmFydXNlcj5cbiAgICBcdFx0PG1lbnVzY3JvbGw+XG4gICAgICAgICAgICAgICAgPHNpZGViYXJzZXBhcmF0b3I+QWNlc3NvIFJlc3RyaXRvPC9zaWRlYmFyc2VwYXJhdG9yPlxuICAgICAgICAgICAgICAgIDxtZW51aXRlbXM+XG4gICAgICAgICAgICAgICAgICAgIDxidG4gaHJlZj1cIi8vYWRtaW4uYXZuLnN5c3RlbXNcIiB0YXJnZXQ9XCJfc2VsZlwiPlxuICAgICAgICAgICAgICAgICAgICBcdDxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMTQ0IDExMnY1MS42SDQ4Yy0yNi41IDAtNDggMjEuNS00OCA0OHY4OC42YzAgMjYuNSAyMS41IDQ4IDQ4IDQ4aDk2djUxLjZjMCA0Mi42IDUxLjcgNjQuMiA4MS45IDMzLjlsMTQ0LTE0My45YzE4LjctMTguNyAxOC43LTQ5LjEgMC02Ny45bC0xNDQtMTQ0QzE5NS44IDQ4IDE0NCA2OS4zIDE0NCAxMTJ6bTE5MiAxNDRMMTkyIDQwMHYtOTkuN0g0OHYtODguNmgxNDRWMTEybDE0NCAxNDR6bTgwIDE5MmgtODRjLTYuNiAwLTEyLTUuNC0xMi0xMnYtMjRjMC02LjYgNS40LTEyIDEyLTEyaDg0YzI2LjUgMCA0OC0yMS41IDQ4LTQ4VjE2MGMwLTI2LjUtMjEuNS00OC00OC00OGgtODRjLTYuNiAwLTEyLTUuNC0xMi0xMlY3NmMwLTYuNiA1LjQtMTIgMTItMTJoODRjNTMgMCA5NiA0MyA5NiA5NnYxOTJjMCA1My00MyA5Ni05NiA5NnpcIiBjbGFzc05hbWU9XCJcIj48L3BhdGg+PC9zdmc+RW50cmFyPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6XCI+PC9wYXRoPjwvc3ZnPjwvYnRuPlxuICAgICAgICAgICAgICAgICAgICA8YnRuIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiZGlzYWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICBcdDxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1NzYgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjg4IDIwOGMtNDQuMiAwLTgwIDM1LjgtODAgODBzMzUuOCA4MCA4MCA4MCA4MC0zNS44IDgwLTgwLTM1LjgtODAtODAtODB6bTAgMTI4Yy0yNi41IDAtNDgtMjEuNS00OC00OHMyMS41LTQ4IDQ4LTQ4IDQ4IDIxLjUgNDggNDgtMjEuNSA0OC00OCA0OHpNNTEyIDY0SDM1MlYzMmMwLTE3LjctMTQuMy0zMi0zMi0zMmgtNjRjLTE3LjcgMC0zMiAxNC4zLTMyIDMydjMySDY0QzI4LjcgNjQgMCA5Mi43IDAgMTI4djMyMGMwIDM1LjMgMjguNyA2NCA2NCA2NGg0NDhjMzUuMyAwIDY0LTI4LjcgNjQtNjRWMTI4YzAtMzUuMy0yOC43LTY0LTY0LTY0ek0yNTYgMzJoNjR2OTZoLTY0VjMyem0xMjggNDQ4SDE5MnYtMjEuOWMwLTkgMi42LTE3LjYgNy42LTI1IDcuMi0xMC43IDIwLjMtMTcuMiAzNS0xNy4yIDE1LjkgMCAyMy41IDggNTMuNCA4czM3LjYtOCA1My40LThjMTQuNyAwIDI3LjcgNi40IDM1IDE3LjIgNSA3LjQgNy42IDE2IDcuNiAyNVY0ODB6bTE2MC0zMmMwIDE3LjYtMTQuNCAzMi0zMiAzMmgtOTZ2LTIxLjljMC0xNS45LTQuOC0zMC42LTEzLTQyLjgtMTMuOC0yMC41LTM3LjMtMzEuMy02MS41LTMxLjMtMjIuMiAwLTI3LjggOC01My40IDgtMjUuNiAwLTMxLjItOC01My40LTgtMjQuMiAwLTQ3LjcgMTAuOC02MS41IDMxLjMtOC4yIDEyLjItMTMgMjctMTMgNDIuOFY0ODBINjRjLTE3LjYgMC0zMi0xNC40LTMyLTMyVjEyOGMwLTE3LjYgMTQuNC0zMiAzMi0zMmgxNjB2NjRoMTI4Vjk2aDE2MGMxNy42IDAgMzIgMTQuNCAzMiAzMnYzMjB6XCIgY2xhc3NOYW1lPVwiXCI+PC9wYXRoPjwvc3ZnPkNhZGFzdHJhci1zZTxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctY2lyY2xlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNTYgOEMxMTkgOCA4IDExOSA4IDI1NnMxMTEgMjQ4IDI0OCAyNDggMjQ4LTExMSAyNDgtMjQ4UzM5MyA4IDI1NiA4elwiPjwvcGF0aD48L3N2Zz48L2J0bj5cbiAgICAgICAgICAgICAgICA8L21lbnVpdGVtcz5cbiAgICAgICAgICAgICAgICA8c2lkZWJhcmRpdmlkZXI+PC9zaWRlYmFyZGl2aWRlcj5cbiAgICBcdFx0XHQ8bWVudXNpdGVtb2JpbGU+XG4gICAgXHQgICAgICAgICAgICA8c2lkZWJhcnNlcGFyYXRvcj5XZWJzaXRlIE1lbnU8L3NpZGViYXJzZXBhcmF0b3I+XG4gICAgXHQgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtaXRlbXMgbWVudS1pY29uc1wiPlxuICAgIFx0ICAgICAgICAgICAgICAgIFxuICAgIFx0ICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgXHQ8c2lkZWJhcmRpdmlkZXI+PC9zaWRlYmFyZGl2aWRlcj5cbiAgICAgICAgICAgICAgICA8L21lbnVzaXRlbW9iaWxlPlxuICAgICAgICAgICAgICAgIDxzaWRlYmFyc2VwYXJhdG9yPk1ZQVBQIE1vZGVsczwvc2lkZWJhcnNlcGFyYXRvcj5cbiAgICAgICAgICAgICAgICA8bWVudWl0ZW1zPlxuICAgICAgICAgICAgICAgICAgICA8YnRuIGhyZWY9XCIuL1wiPjxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctbW9iaWxlLWFsdFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMTkyIDQxNmMwIDE3LjctMTQuMyAzMi0zMiAzMnMtMzItMTQuMy0zMi0zMiAxNC4zLTMyIDMyLTMyIDMyIDE0LjMgMzIgMzJ6bTQ4LTYwVjkyYzAtNi42LTUuNC0xMi0xMi0xMkg5MmMtNi42IDAtMTIgNS40LTEyIDEydjI2NGMwIDYuNiA1LjQgMTIgMTIgMTJoMTM2YzYuNiAwIDEyLTUuNCAxMi0xMnptODAtMzA4djQxNmMwIDI2LjUtMjEuNSA0OC00OCA0OEg0OGMtMjYuNSAwLTQ4LTIxLjUtNDgtNDhWNDhDMCAyMS41IDIxLjUgMCA0OCAwaDIyNGMyNi41IDAgNDggMjEuNSA0OCA0OHptLTQ4IDQxMFY1NGMwLTMuMy0yLjctNi02LTZINTRjLTMuMyAwLTYgMi43LTYgNnY0MDRjMCAzLjMgMi43IDYgNiA2aDIxMmMzLjMgMCA2LTIuNyA2LTZ6XCI+PC9wYXRoPjwvc3ZnPkFib3V0IE15IEFwcDxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctY2lyY2xlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNTYgOEMxMTkgOCA4IDExOSA4IDI1NnMxMTEgMjQ4IDI0OCAyNDggMjQ4LTExMSAyNDgtMjQ4UzM5MyA4IDI1NiA4elwiPjwvcGF0aD48L3N2Zz48L2J0bj5cbiAgICAgICAgICAgICAgICAgICAgPGJ0biBjbGFzc05hbWU9XCJzdWJtZW51LWhhcy1udW1iZXJzXCI+XG4gICAgICAgICAgICAgICAgICAgIFx0PHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy10dlwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNNDAwIDI0NHYtOGMwLTYuNiA1LjQtMTIgMTItMTJoOGM2LjYgMCAxMiA1LjQgMTIgMTJ2OGMwIDYuNi01LjQgMTItMTIgMTJoLThjLTYuNiAwLTEyLTUuNC0xMi0xMnptMTIgNzZoOGM2LjYgMCAxMi01LjQgMTItMTJ2LThjMC02LjYtNS40LTEyLTEyLTEyaC04Yy02LjYgMC0xMiA1LjQtMTIgMTJ2OGMwIDYuNiA1LjQgMTIgMTIgMTJ6bS0zNi0xMzYuNXMtMS41LTcuNS0xNDQtNy41LTE0NC41IDcuNS0xNDQuNSA3LjVTODAgMTg0IDgwIDI4OHM3LjUgMTA0LjUgNy41IDEwNC41Uzg4IDQwMCAyMzIgNDAwczE0NC03LjUgMTQ0LTcuNSA3LjUtLjUgNy41LTEwNC41LTcuNS0xMDQuNS03LjUtMTA0LjV6TTUxMiAxNDR2Mjg4YzAgMjYuNS0yMS41IDQ4LTQ4IDQ4aC0xNnYzMmgtNDhsLTEwLjctMzJIMTIyLjdMMTEyIDUxMkg2NHYtMzJINDhjLTI2LjUgMC00OC0yMS41LTQ4LTQ4VjE0NGMwLTI2LjUgMjEuNS00OCA0OC00OGgxNDAuOWwtNTQtNTUuMmMtOS4zLTkuNS05LjEtMjQuNy4zLTMzLjkgOS41LTkuMyAyNC43LTkuMSAzMy45LjNMMjU2IDk2bDg2LjktODguOGM5LjMtOS41IDI0LjUtOS42IDMzLjktLjMgOS41IDkuMyA5LjYgMjQuNS4zIDMzLjlsLTU0IDU1LjJINDY0YzI2LjUgMCA0OCAyMS41IDQ4IDQ4em0tNDggMEg0OHYyODhoNDE2VjE0NHpcIj48L3BhdGg+PC9zdmc+Q29tbXVuaWNhdGlvbjxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctdGVybWluYWxcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIwIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTM0LjQ5NSAzNi40NjVsMjExLjA1MSAyMTEuMDVjNC42ODYgNC42ODYgNC42ODYgMTIuMjg0IDAgMTYuOTcxTDM0LjQ5NSA0NzUuNTM1Yy00LjY4NiA0LjY4Ni0xMi4yODQgNC42ODYtMTYuOTcgMGwtNy4wNzEtNy4wN2MtNC42ODYtNC42ODYtNC42ODYtMTIuMjg0IDAtMTYuOTcxTDIwNS45NDcgMjU2IDEwLjQ1NCA2MC41MDZjLTQuNjg2LTQuNjg2LTQuNjg2LTEyLjI4NCAwLTE2Ljk3MWw3LjA3MS03LjA3YzQuNjg2LTQuNjg3IDEyLjI4NC00LjY4NyAxNi45NyAwek02NDAgNDY4di0xMGMwLTYuNjI3LTUuMzczLTEyLTEyLTEySDMwMGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnYxMGMwIDYuNjI3IDUuMzczIDEyIDEyIDEyaDMyOGM2LjYyNyAwIDEyLTUuMzczIDEyLTEyelwiPjwvcGF0aD48L3N2Zz48Y291bnQ+NDwvY291bnQ+XG4gICAgXHQgICAgICAgICAgICAgICAgPHN1Ym1lbnU+XG4gICAgXHQgICAgICAgICAgICAgICAgICAgIDxidG4gY2xhc3NOYW1lPVwiZGlzYWJsZVwiPjxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctYW5nbGUtcmlnaHRcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIwIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTIyNC4zIDI3M2wtMTM2IDEzNmMtOS40IDkuNC0yNC42IDkuNC0zMy45IDBsLTIyLjYtMjIuNmMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlsOTYuNC05Ni40LTk2LjQtOTYuNGMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlMNTQuMyAxMDNjOS40LTkuNCAyNC42LTkuNCAzMy45IDBsMTM2IDEzNmM5LjUgOS40IDkuNSAyNC42LjEgMzR6XCI+PC9wYXRoPjwvc3ZnPkFnw6puY2lhcyBlIFByb2R1dG9yYXM8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWNpcmNsZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjU2IDhDMTE5IDggOCAxMTkgOCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzOTMgOCAyNTYgOHpcIj48L3BhdGg+PC9zdmc+PC9idG4+XG4gICAgXHQgICAgICAgICAgICAgICAgICAgIDxidG4gaHJlZj1cIi4vdGhlbWVzL3Byb2R1dG9yYXMvXCI+PHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1hbmdsZS1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjI0LjMgMjczbC0xMzYgMTM2Yy05LjQgOS40LTI0LjYgOS40LTMzLjkgMGwtMjIuNi0yMi42Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOWw5Ni40LTk2LjQtOTYuNC05Ni40Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOUw1NC4zIDEwM2M5LjQtOS40IDI0LjYtOS40IDMzLjkgMGwxMzYgMTM2YzkuNSA5LjQgOS41IDI0LjYuMSAzNHpcIj48L3BhdGg+PC9zdmc+UHJvbW/Dp8OjbyBlIEV2ZW50b3M8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWNpcmNsZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjU2IDhDMTE5IDggOCAxMTkgOCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzOTMgOCAyNTYgOHpcIj48L3BhdGg+PC9zdmc+PC9idG4+XG4gICAgXHQgICAgICAgICAgICAgICAgICAgIDxidG4gaHJlZj1cIi4vdGhlbWVzL3N1cGVydHYvXCI+PHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1hbmdsZS1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjI0LjMgMjczbC0xMzYgMTM2Yy05LjQgOS40LTI0LjYgOS40LTMzLjkgMGwtMjIuNi0yMi42Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOWw5Ni40LTk2LjQtOTYuNC05Ni40Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOUw1NC4zIDEwM2M5LjQtOS40IDI0LjYtOS40IDMzLjkgMGwxMzYgMTM2YzkuNSA5LjQgOS41IDI0LjYuMSAzNHpcIj48L3BhdGg+PC9zdmc+RW1pc3NvcmEgVFY8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWNpcmNsZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjU2IDhDMTE5IDggOCAxMTkgOCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzOTMgOCAyNTYgOHpcIj48L3BhdGg+PC9zdmc+PC9idG4+XG4gICAgXHQgICAgICAgICAgICAgICAgICAgIDxidG4gY2xhc3NOYW1lPVwiZGlzYWJsZVwiPjxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctYW5nbGUtcmlnaHRcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIwIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTIyNC4zIDI3M2wtMTM2IDEzNmMtOS40IDkuNC0yNC42IDkuNC0zMy45IDBsLTIyLjYtMjIuNmMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlsOTYuNC05Ni40LTk2LjQtOTYuNGMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlMNTQuMyAxMDNjOS40LTkuNCAyNC42LTkuNCAzMy45IDBsMTM2IDEzNmM5LjUgOS40IDkuNSAyNC42LjEgMzR6XCI+PC9wYXRoPjwvc3ZnPlLDoWRpb3M8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWNpcmNsZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjU2IDhDMTE5IDggOCAxMTkgOCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzOTMgOCAyNTYgOHpcIj48L3BhdGg+PC9zdmc+PC9idG4+XG4gICAgXHQgICAgICAgICAgICAgICAgPC9zdWJtZW51PlxuICAgIFx0ICAgICAgICAgICAgPC9idG4+XG4gICAgICAgICAgICAgICAgICAgIDxidG4gY2xhc3NOYW1lPVwic3VibWVudS1oYXMtbnVtYmVyc1wiPlxuICAgICAgICAgICAgICAgICAgICBcdDxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctc3RhclwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjI0IDI4OGM3OS41IDAgMTQ0LTY0LjUgMTQ0LTE0NFMzMDMuNSAwIDIyNCAwIDgwIDY0LjUgODAgMTQ0czY0LjUgMTQ0IDE0NCAxNDR6bTAtMjQwYzUyLjkgMCA5NiA0My4xIDk2IDk2cy00My4xIDk2LTk2IDk2LTk2LTQzLjEtOTYtOTYgNDMuMS05NiA5Ni05NnptODkuNiAyNTZjLTExIDAtMjEuOCAyLjYtMzIuMiA2LjItMTggNi4zLTM3LjMgOS44LTU3LjQgOS44cy0zOS40LTMuNS01Ny40LTkuOGMtMTAuNC0zLjYtMjEuMi02LjItMzIuMi02LjJDNjAuMiAzMDQgMCAzNjQuMiAwIDQzOC40VjQ4OGMwIDEzLjMgMTAuNyAyNCAyNCAyNHMyNC0xMC43IDI0LTI0di00OS42YzAtNDUuNSAzNS40LTgyLjQgODAtODUuOHY1MGMtMjMuMSA2LjktNDAgMjguMS00MCA1My40IDAgMzAuOSAyNS4xIDU2IDU2IDU2czU2LTI1LjEgNTYtNTZjMC0yNS4zLTE2LjktNDYuNS00MC01My40di00NC43YzIwLjggNi4zIDQyLjMgMTAuMSA2NCAxMC4xIDIxLjggMCA0My4yLTMuOCA2NC0xMC4xdjM2LjNjLTI4LjIgNy41LTQ4IDM0LjUtNDggNjQuNlY0ODhjMCA0LjIgMS43IDguMyA0LjcgMTEuM2wxMC4zIDEwLjNjMy4xIDMuMSA4LjIgMy4xIDExLjMgMGwxMS4zLTExLjNjMy4xLTMuMSAzLjEtOC4yIDAtMTEuM2wtNS43LTUuN1Y0NTZjMC0xOS40IDE3LjQtMzQuOCAzNy40LTMxLjYgMTUuNyAyLjYgMjYuNiAxNy40IDI2LjYgMzMuM3YyMy42bC01LjcgNS43Yy0zLjEgMy4xLTMuMSA4LjIgMCAxMS4zbDExLjMgMTEuM2MzLjEgMy4xIDguMiAzLjEgMTEuMyAwbDEwLjMtMTAuM2MzLTMgNC43LTcuMSA0LjctMTEuM3YtMzJjMC0yOS43LTIwLjUtNTQuNS00OC02MS42di00MS43YzQ0LjYgMy4zIDgwIDQwLjMgODAgODUuOFY0ODhjMCAxMy4zIDEwLjcgMjQgMjQgMjRzMjQtMTAuNyAyNC0yNHYtNDkuNmMuMi03NC4yLTYwLTEzNC40LTEzNC4yLTEzNC40ek0xNjggNDU2YzAgMTMuMy0xMC43IDI0LTI0IDI0cy0yNC0xMC43LTI0LTI0IDEwLjctMjQgMjQtMjQgMjQgMTAuNyAyNCAyNHpcIj48L3BhdGg+PC9zdmc+UHJvZmlzc2lvbmFsczxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctdGVybWluYWxcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIwIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTM0LjQ5NSAzNi40NjVsMjExLjA1MSAyMTEuMDVjNC42ODYgNC42ODYgNC42ODYgMTIuMjg0IDAgMTYuOTcxTDM0LjQ5NSA0NzUuNTM1Yy00LjY4NiA0LjY4Ni0xMi4yODQgNC42ODYtMTYuOTcgMGwtNy4wNzEtNy4wN2MtNC42ODYtNC42ODYtNC42ODYtMTIuMjg0IDAtMTYuOTcxTDIwNS45NDcgMjU2IDEwLjQ1NCA2MC41MDZjLTQuNjg2LTQuNjg2LTQuNjg2LTEyLjI4NCAwLTE2Ljk3MWw3LjA3MS03LjA3YzQuNjg2LTQuNjg3IDEyLjI4NC00LjY4NyAxNi45NyAwek02NDAgNDY4di0xMGMwLTYuNjI3LTUuMzczLTEyLTEyLTEySDMwMGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnYxMGMwIDYuNjI3IDUuMzczIDEyIDEyIDEyaDMyOGM2LjYyNyAwIDEyLTUuMzczIDEyLTEyelwiPjwvcGF0aD48L3N2Zz48Y291bnQ+NjwvY291bnQ+XG4gICAgXHQgICAgICAgICAgICAgICAgPHN1Ym1lbnU+XG4gICAgXHQgICAgICAgICAgICAgICAgICAgIDxidG4gY2xhc3NOYW1lPVwiZGlzYWJsZVwiPjxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctYW5nbGUtcmlnaHRcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIwIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTIyNC4zIDI3M2wtMTM2IDEzNmMtOS40IDkuNC0yNC42IDkuNC0zMy45IDBsLTIyLjYtMjIuNmMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlsOTYuNC05Ni40LTk2LjQtOTYuNGMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlMNTQuMyAxMDNjOS40LTkuNCAyNC42LTkuNCAzMy45IDBsMTM2IDEzNmM5LjUgOS40IDkuNSAyNC42LjEgMzR6XCI+PC9wYXRoPjwvc3ZnPkF0b3JlczxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctY2lyY2xlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNTYgOEMxMTkgOCA4IDExOSA4IDI1NnMxMTEgMjQ4IDI0OCAyNDggMjQ4LTExMSAyNDgtMjQ4UzM5MyA4IDI1NiA4elwiPjwvcGF0aD48L3N2Zz48L2J0bj5cbiAgICBcdCAgICAgICAgICAgICAgICAgICAgPGJ0biBocmVmPVwiLi90aGVtZXMvY2FudG9yZXMvXCI+PHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1hbmdsZS1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjI0LjMgMjczbC0xMzYgMTM2Yy05LjQgOS40LTI0LjYgOS40LTMzLjkgMGwtMjIuNi0yMi42Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOWw5Ni40LTk2LjQtOTYuNC05Ni40Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOUw1NC4zIDEwM2M5LjQtOS40IDI0LjYtOS40IDMzLjkgMGwxMzYgMTM2YzkuNSA5LjQgOS41IDI0LjYuMSAzNHpcIj48L3BhdGg+PC9zdmc+Q2FudG9yZXM8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWNpcmNsZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjU2IDhDMTE5IDggOCAxMTkgOCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzOTMgOCAyNTYgOHpcIj48L3BhdGg+PC9zdmc+PC9idG4+XG4gICAgXHQgICAgICAgICAgICAgICAgICAgIDxidG4gY2xhc3NOYW1lPVwiZGlzYWJsZVwiPjxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctYW5nbGUtcmlnaHRcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIwIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTIyNC4zIDI3M2wtMTM2IDEzNmMtOS40IDkuNC0yNC42IDkuNC0zMy45IDBsLTIyLjYtMjIuNmMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlsOTYuNC05Ni40LTk2LjQtOTYuNGMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlMNTQuMyAxMDNjOS40LTkuNCAyNC42LTkuNCAzMy45IDBsMTM2IDEzNmM5LjUgOS40IDkuNSAyNC42LjEgMzR6XCI+PC9wYXRoPjwvc3ZnPkRlbnRpc3RhczxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctY2lyY2xlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNTYgOEMxMTkgOCA4IDExOSA4IDI1NnMxMTEgMjQ4IDI0OCAyNDggMjQ4LTExMSAyNDgtMjQ4UzM5MyA4IDI1NiA4elwiPjwvcGF0aD48L3N2Zz48L2J0bj5cbiAgICBcdCAgICAgICAgICAgICAgICAgICAgPGJ0biBjbGFzc05hbWU9XCJkaXNhYmxlXCI+PHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1hbmdsZS1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjI0LjMgMjczbC0xMzYgMTM2Yy05LjQgOS40LTI0LjYgOS40LTMzLjkgMGwtMjIuNi0yMi42Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOWw5Ni40LTk2LjQtOTYuNC05Ni40Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOUw1NC4zIDEwM2M5LjQtOS40IDI0LjYtOS40IDMzLjkgMGwxMzYgMTM2YzkuNSA5LjQgOS41IDI0LjYuMSAzNHpcIj48L3BhdGg+PC9zdmc+QXJxdWl0ZXRvczxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctY2lyY2xlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNTYgOEMxMTkgOCA4IDExOSA4IDI1NnMxMTEgMjQ4IDI0OCAyNDggMjQ4LTExMSAyNDgtMjQ4UzM5MyA4IDI1NiA4elwiPjwvcGF0aD48L3N2Zz48L2J0bj5cbiAgICBcdCAgICAgICAgICAgICAgICAgICAgPGJ0biBjbGFzc05hbWU9XCJkaXNhYmxlXCI+PHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1hbmdsZS1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjI0LjMgMjczbC0xMzYgMTM2Yy05LjQgOS40LTI0LjYgOS40LTMzLjkgMGwtMjIuNi0yMi42Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOWw5Ni40LTk2LjQtOTYuNC05Ni40Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOUw1NC4zIDEwM2M5LjQtOS40IDI0LjYtOS40IDMzLjkgMGwxMzYgMTM2YzkuNSA5LjQgOS41IDI0LjYuMSAzNHpcIj48L3BhdGg+PC9zdmc+QWR2b2dhZG9zPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6XCI+PC9wYXRoPjwvc3ZnPjwvYnRuPlxuICAgIFx0ICAgICAgICAgICAgICAgICAgICA8YnRuIGNsYXNzTmFtZT1cImRpc2FibGVcIj48c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWFuZ2xlLXJpZ2h0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yMjQuMyAyNzNsLTEzNiAxMzZjLTkuNCA5LjQtMjQuNiA5LjQtMzMuOSAwbC0yMi42LTIyLjZjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45bDk2LjQtOTYuNC05Ni40LTk2LjRjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45TDU0LjMgMTAzYzkuNC05LjQgMjQuNi05LjQgMzMuOSAwbDEzNiAxMzZjOS41IDkuNCA5LjUgMjQuNi4xIDM0elwiPjwvcGF0aD48L3N2Zz5Qcm9ncmFtYWRvcmVzPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6XCI+PC9wYXRoPjwvc3ZnPjwvYnRuPlxuICAgIFx0ICAgICAgICAgICAgICAgIDwvc3VibWVudT5cbiAgICBcdCAgICAgICAgICAgIDwvYnRuPlxuICAgICAgICAgICAgICAgICAgICA8YnRuIGNsYXNzTmFtZT1cInN1Ym1lbnUtaGFzLW51bWJlcnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctc3RvcmVzXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk02MzUuNyAxNzYuMWwtOTEuNC0xNjBDNTM4LjYgNi4yIDUyOCAwIDUxNi41IDBoLTM5M0MxMTIgMCAxMDEuNCA2LjIgOTUuNyAxNi4xbC05MS40IDE2MEMtNy45IDE5Ny41IDcuNCAyMjQgMzIgMjI0aDMydjI1NC41QzY0IDQ5NyA3OC4zIDUxMiA5NiA1MTJoMjU2YzE3LjcgMCAzMi0xNSAzMi0zMy41VjIyNGgxNjB2MjgwYzAgNC40IDMuNiA4IDggOGgxNmM0LjQgMCA4LTMuNiA4LThWMjI0aDMyYzI0LjYgMCAzOS45LTI2LjUgMjcuNy00Ny45ek0zNTIgNDc4LjVjMCAuOS0uMyAxLjQtLjIgMS41bC0yNTUuMi4ycy0uNi0uNS0uNi0xLjdWMzUyaDI1NnYxMjYuNXptMC0xNTguNUg5NnYtOTZoMjU2djk2ek0zMi4xIDE5Mmw5MS40LTE2MGgzOTNMNjA4IDE5MkgzMi4xelwiPjwvcGF0aD48L3N2Zz5TdG9yZXM8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLXRlcm1pbmFsXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0zNC40OTUgMzYuNDY1bDIxMS4wNTEgMjExLjA1YzQuNjg2IDQuNjg2IDQuNjg2IDEyLjI4NCAwIDE2Ljk3MUwzNC40OTUgNDc1LjUzNWMtNC42ODYgNC42ODYtMTIuMjg0IDQuNjg2LTE2Ljk3IDBsLTcuMDcxLTcuMDdjLTQuNjg2LTQuNjg2LTQuNjg2LTEyLjI4NCAwLTE2Ljk3MUwyMDUuOTQ3IDI1NiAxMC40NTQgNjAuNTA2Yy00LjY4Ni00LjY4Ni00LjY4Ni0xMi4yODQgMC0xNi45NzFsNy4wNzEtNy4wN2M0LjY4Ni00LjY4NyAxMi4yODQtNC42ODcgMTYuOTcgMHpNNjQwIDQ2OHYtMTBjMC02LjYyNy01LjM3My0xMi0xMi0xMkgzMDBjLTYuNjI3IDAtMTIgNS4zNzMtMTIgMTJ2MTBjMCA2LjYyNyA1LjM3MyAxMiAxMiAxMmgzMjhjNi42MjcgMCAxMi01LjM3MyAxMi0xMnpcIj48L3BhdGg+PC9zdmc+PGNvdW50Pjc8L2NvdW50PlxuICAgIFx0ICAgICAgICAgICAgICAgIDxzdWJtZW51PlxuICAgIFx0ICAgICAgICAgICAgICAgICAgICA8YnRuIGhyZWY9XCIuL3RoZW1lcy9tZXJjYWRvbGl2cmUvXCI+PHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1hbmdsZS1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjI0LjMgMjczbC0xMzYgMTM2Yy05LjQgOS40LTI0LjYgOS40LTMzLjkgMGwtMjIuNi0yMi42Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOWw5Ni40LTk2LjQtOTYuNC05Ni40Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOUw1NC4zIDEwM2M5LjQtOS40IDI0LjYtOS40IDMzLjkgMGwxMzYgMTM2YzkuNSA5LjQgOS41IDI0LjYuMSAzNHpcIj48L3BhdGg+PC9zdmc+TWVyY2FkbyBMaXZyZTxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctY2lyY2xlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNTYgOEMxMTkgOCA4IDExOSA4IDI1NnMxMTEgMjQ4IDI0OCAyNDggMjQ4LTExMSAyNDgtMjQ4UzM5MyA4IDI1NiA4elwiPjwvcGF0aD48L3N2Zz48L2J0bj5cbiAgICBcdCAgICAgICAgICAgICAgICAgICAgPGJ0biBjbGFzc05hbWU9XCJkaXNhYmxlXCI+PHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1hbmdsZS1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjI0LjMgMjczbC0xMzYgMTM2Yy05LjQgOS40LTI0LjYgOS40LTMzLjkgMGwtMjIuNi0yMi42Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOWw5Ni40LTk2LjQtOTYuNC05Ni40Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOUw1NC4zIDEwM2M5LjQtOS40IDI0LjYtOS40IDMzLjkgMGwxMzYgMTM2YzkuNSA5LjQgOS41IDI0LjYuMSAzNHpcIj48L3BhdGg+PC9zdmc+SW5mb3Jtw6F0aWNhPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6XCI+PC9wYXRoPjwvc3ZnPjwvYnRuPlxuICAgIFx0ICAgICAgICAgICAgICAgICAgICA8YnRuIGNsYXNzTmFtZT1cImRpc2FibGVcIj48c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWFuZ2xlLXJpZ2h0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yMjQuMyAyNzNsLTEzNiAxMzZjLTkuNCA5LjQtMjQuNiA5LjQtMzMuOSAwbC0yMi42LTIyLjZjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45bDk2LjQtOTYuNC05Ni40LTk2LjRjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45TDU0LjMgMTAzYzkuNC05LjQgMjQuNi05LjQgMzMuOSAwbDEzNiAxMzZjOS41IDkuNCA5LjUgMjQuNi4xIDM0elwiPjwvcGF0aD48L3N2Zz5Db25zdHJ1w6fDo288c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWNpcmNsZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjU2IDhDMTE5IDggOCAxMTkgOCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzOTMgOCAyNTYgOHpcIj48L3BhdGg+PC9zdmc+PC9idG4+XG4gICAgXHQgICAgICAgICAgICAgICAgICAgIDxidG4gY2xhc3NOYW1lPVwiZGlzYWJsZVwiPjxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctYW5nbGUtcmlnaHRcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIwIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTIyNC4zIDI3M2wtMTM2IDEzNmMtOS40IDkuNC0yNC42IDkuNC0zMy45IDBsLTIyLjYtMjIuNmMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlsOTYuNC05Ni40LTk2LjQtOTYuNGMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlMNTQuMyAxMDNjOS40LTkuNCAyNC42LTkuNCAzMy45IDBsMTM2IDEzNmM5LjUgOS40IDkuNSAyNC42LjEgMzR6XCI+PC9wYXRoPjwvc3ZnPkNhbMOnYWRvczxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctY2lyY2xlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNTYgOEMxMTkgOCA4IDExOSA4IDI1NnMxMTEgMjQ4IDI0OCAyNDggMjQ4LTExMSAyNDgtMjQ4UzM5MyA4IDI1NiA4elwiPjwvcGF0aD48L3N2Zz48L2J0bj5cbiAgICBcdCAgICAgICAgICAgICAgICAgICAgPGJ0biBocmVmPVwiLi90aGVtZXMvY2VsbWFyL1wiPjxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctYW5nbGUtcmlnaHRcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIwIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTIyNC4zIDI3M2wtMTM2IDEzNmMtOS40IDkuNC0yNC42IDkuNC0zMy45IDBsLTIyLjYtMjIuNmMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlsOTYuNC05Ni40LTk2LjQtOTYuNGMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlMNTQuMyAxMDNjOS40LTkuNCAyNC42LTkuNCAzMy45IDBsMTM2IDEzNmM5LjUgOS40IDkuNSAyNC42LjEgMzR6XCI+PC9wYXRoPjwvc3ZnPlBsYW5lamFkb3M8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWNpcmNsZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjU2IDhDMTE5IDggOCAxMTkgOCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzOTMgOCAyNTYgOHpcIj48L3BhdGg+PC9zdmc+PC9idG4+XG4gICAgXHQgICAgICAgICAgICAgICAgICAgIDxidG4gY2xhc3NOYW1lPVwiZGlzYWJsZVwiPjxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctYW5nbGUtcmlnaHRcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIwIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTIyNC4zIDI3M2wtMTM2IDEzNmMtOS40IDkuNC0yNC42IDkuNC0zMy45IDBsLTIyLjYtMjIuNmMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlsOTYuNC05Ni40LTk2LjQtOTYuNGMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlMNTQuMyAxMDNjOS40LTkuNCAyNC42LTkuNCAzMy45IDBsMTM2IDEzNmM5LjUgOS40IDkuNSAyNC42LjEgMzR6XCI+PC9wYXRoPjwvc3ZnPlJvdXBhczxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctY2lyY2xlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNTYgOEMxMTkgOCA4IDExOSA4IDI1NnMxMTEgMjQ4IDI0OCAyNDggMjQ4LTExMSAyNDgtMjQ4UzM5MyA4IDI1NiA4elwiPjwvcGF0aD48L3N2Zz48L2J0bj5cbiAgICBcdCAgICAgICAgICAgICAgICA8L3N1Ym1lbnU+XG4gICAgXHQgICAgICAgICAgICA8L2J0bj5cbiAgICAgICAgICAgICAgICAgICAgPGJ0biBjbGFzc05hbWU9XCJzdWJtZW51LWhhcy1udW1iZXJzXCI+XG4gICAgICAgICAgICAgICAgICAgIFx0PHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1yZXN0YXVyYW50ZXNcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIwIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTM0NC4xIDQ3MC4zbDE0LjItMTY0LjhjLTQyLjEtMzMuMS03MC40LTc3LTcwLjQtMTI5LjVDMjg4IDgxLjcgMzc2LjEgMCA0NDAgMGMyMi4xIDAgNDAgMTcuMyA0MCAzOC41djQzNWMwIDIxLjItMTcuOSAzOC41LTQwIDM4LjVoLTU2Yy0yMi44IDAtNDEuOC0xOC43LTM5LjktNDEuN3pNMzIwIDE3NmMwIDUxIDMyLjIgODUuNSA3MS44IDExNC41TDM3NiA0NzMuMWMtLjMgMy43IDMuNCA2LjkgOCA2LjloNTZjNC4zIDAgOC0zIDgtNi41di00MzVjMC0zLjUtMy43LTYuNS04LTYuNS00NC42IDAtMTIwIDY1LjgtMTIwIDE0NHpNMjQwLjcgMzMuOEMyMzcuNCAxNC4zIDIxOS41IDAgMTk0LjYgMGMtMTEuOSAwLTI0LjEgMy40LTMzLjMgMTEuMkMxNTIuOSA0LjEgMTQxLjMgMCAxMjggMHMtMjQuOSA0LjEtMzMuMyAxMS4yQzg1LjUgMy40IDczLjMgMCA2MS40IDAgMzYuMiAwIDE4LjYgMTQuNSAxNS4zIDMzLjggMTMuNSA0My4yIDAgMTE4LjQgMCAxNDkuOWMwIDUwLjkgMjYuNyA5MS42IDcxIDExMC43TDU5LjYgNDcxLjRDNTguNCA0OTMuNCA3NS45IDUxMiA5OCA1MTJoNjBjMjIgMCAzOS42LTE4LjUgMzguNC00MC42TDE4NSAyNjAuNmM0NC4yLTE5LjEgNzEtNTkuOCA3MS0xMTAuNyAwLTMxLjUtMTMuNS0xMDYuNy0xNS4zLTExNi4xek0xNTIuMyAyNDBsMTIuMiAyMzMuMWMuMiAzLjctMi43IDYuOS02LjUgNi45SDk4Yy0zLjcgMC02LjctMy4xLTYuNS02LjlMMTAzLjcgMjQwQzYxLjMgMjMxLjIgMzIgMTk3IDMyIDE0OS45YzAtMjkuNyAxNC44LTExMC42IDE0LjgtMTEwLjYgMS42LTkuOSAyOC4zLTkuNyAyOS41LjJWMTYyYy45IDExLjUgMjguMiAxMS43IDI5LjUuMmw3LjQtMTIyLjljMS42LTkuNyAyNy45LTkuNyAyOS41IDBsNy40IDEyMi45YzEuMyAxMS40IDI4LjYgMTEuMiAyOS41LS4yVjM5LjZjMS4yLTkuOSAyNy45LTEwLjEgMjkuNS0uMiAwIDAgMTQuOCA4MC45IDE0LjggMTEwLjYuMSA0Ni44LTI5IDgxLjItNzEuNiA5MHpcIj48L3BhdGg+PC9zdmc+QWxpbWVudGHDp8OjbzxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctdGVybWluYWxcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIwIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTM0LjQ5NSAzNi40NjVsMjExLjA1MSAyMTEuMDVjNC42ODYgNC42ODYgNC42ODYgMTIuMjg0IDAgMTYuOTcxTDM0LjQ5NSA0NzUuNTM1Yy00LjY4NiA0LjY4Ni0xMi4yODQgNC42ODYtMTYuOTcgMGwtNy4wNzEtNy4wN2MtNC42ODYtNC42ODYtNC42ODYtMTIuMjg0IDAtMTYuOTcxTDIwNS45NDcgMjU2IDEwLjQ1NCA2MC41MDZjLTQuNjg2LTQuNjg2LTQuNjg2LTEyLjI4NCAwLTE2Ljk3MWw3LjA3MS03LjA3YzQuNjg2LTQuNjg3IDEyLjI4NC00LjY4NyAxNi45NyAwek02NDAgNDY4di0xMGMwLTYuNjI3LTUuMzczLTEyLTEyLTEySDMwMGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnYxMGMwIDYuNjI3IDUuMzczIDEyIDEyIDEyaDMyOGM2LjYyNyAwIDEyLTUuMzczIDEyLTEyelwiPjwvcGF0aD48L3N2Zz48Y291bnQ+NTwvY291bnQ+XG4gICAgXHQgICAgICAgICAgICAgICAgPHN1Ym1lbnU+XG4gICAgXHQgICAgICAgICAgICAgICAgICAgIDxidG4gY2xhc3NOYW1lPVwiZGlzYWJsZVwiPjxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctYW5nbGUtcmlnaHRcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIwIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTIyNC4zIDI3M2wtMTM2IDEzNmMtOS40IDkuNC0yNC42IDkuNC0zMy45IDBsLTIyLjYtMjIuNmMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlsOTYuNC05Ni40LTk2LjQtOTYuNGMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlMNTQuMyAxMDNjOS40LTkuNCAyNC42LTkuNCAzMy45IDBsMTM2IDEzNmM5LjUgOS40IDkuNSAyNC42LjEgMzR6XCI+PC9wYXRoPjwvc3ZnPlJlc3RhdXJhbnRlczxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctY2lyY2xlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNTYgOEMxMTkgOCA4IDExOSA4IDI1NnMxMTEgMjQ4IDI0OCAyNDggMjQ4LTExMSAyNDgtMjQ4UzM5MyA4IDI1NiA4elwiPjwvcGF0aD48L3N2Zz48L2J0bj5cbiAgICBcdCAgICAgICAgICAgICAgICAgICAgPGJ0biBjbGFzc05hbWU9XCJkaXNhYmxlXCI+PHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1hbmdsZS1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjI0LjMgMjczbC0xMzYgMTM2Yy05LjQgOS40LTI0LjYgOS40LTMzLjkgMGwtMjIuNi0yMi42Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOWw5Ni40LTk2LjQtOTYuNC05Ni40Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOUw1NC4zIDEwM2M5LjQtOS40IDI0LjYtOS40IDMzLjkgMGwxMzYgMTM2YzkuNSA5LjQgOS41IDI0LjYuMSAzNHpcIj48L3BhdGg+PC9zdmc+Q2FmZXRlcmlhczxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctY2lyY2xlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNTYgOEMxMTkgOCA4IDExOSA4IDI1NnMxMTEgMjQ4IDI0OCAyNDggMjQ4LTExMSAyNDgtMjQ4UzM5MyA4IDI1NiA4elwiPjwvcGF0aD48L3N2Zz48L2J0bj5cbiAgICBcdCAgICAgICAgICAgICAgICAgICAgPGJ0biBocmVmPVwiLi90aGVtZXMvY2VydmVqYXJpYXMvXCI+PHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1hbmdsZS1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjI0LjMgMjczbC0xMzYgMTM2Yy05LjQgOS40LTI0LjYgOS40LTMzLjkgMGwtMjIuNi0yMi42Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOWw5Ni40LTk2LjQtOTYuNC05Ni40Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOUw1NC4zIDEwM2M5LjQtOS40IDI0LjYtOS40IDMzLjkgMGwxMzYgMTM2YzkuNSA5LjQgOS41IDI0LjYuMSAzNHpcIj48L3BhdGg+PC9zdmc+Q2VydmVqYXJpYXM8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWNpcmNsZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjU2IDhDMTE5IDggOCAxMTkgOCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzOTMgOCAyNTYgOHpcIj48L3BhdGg+PC9zdmc+PC9idG4+XG4gICAgXHQgICAgICAgICAgICAgICAgICAgIDxidG4gY2xhc3NOYW1lPVwiZGlzYWJsZVwiPjxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctYW5nbGUtcmlnaHRcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIwIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTIyNC4zIDI3M2wtMTM2IDEzNmMtOS40IDkuNC0yNC42IDkuNC0zMy45IDBsLTIyLjYtMjIuNmMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlsOTYuNC05Ni40LTk2LjQtOTYuNGMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlMNTQuMyAxMDNjOS40LTkuNCAyNC42LTkuNCAzMy45IDBsMTM2IDEzNmM5LjUgOS40IDkuNSAyNC42LjEgMzR6XCI+PC9wYXRoPjwvc3ZnPlBpenphcmlhczxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctY2lyY2xlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNTYgOEMxMTkgOCA4IDExOSA4IDI1NnMxMTEgMjQ4IDI0OCAyNDggMjQ4LTExMSAyNDgtMjQ4UzM5MyA4IDI1NiA4elwiPjwvcGF0aD48L3N2Zz48L2J0bj5cbiAgICBcdCAgICAgICAgICAgICAgICAgICAgPGJ0biBjbGFzc05hbWU9XCJkaXNhYmxlXCI+PHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1hbmdsZS1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjI0LjMgMjczbC0xMzYgMTM2Yy05LjQgOS40LTI0LjYgOS40LTMzLjkgMGwtMjIuNi0yMi42Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOWw5Ni40LTk2LjQtOTYuNC05Ni40Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOUw1NC4zIDEwM2M5LjQtOS40IDI0LjYtOS40IDMzLjkgMGwxMzYgMTM2YzkuNSA5LjQgOS41IDI0LjYuMSAzNHpcIj48L3BhdGg+PC9zdmc+U29ydmV0ZXJpYXM8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWNpcmNsZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjU2IDhDMTE5IDggOCAxMTkgOCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzOTMgOCAyNTYgOHpcIj48L3BhdGg+PC9zdmc+PC9idG4+XG4gICAgXHQgICAgICAgICAgICAgICAgPC9zdWJtZW51PlxuICAgIFx0ICAgICAgICAgICAgPC9idG4+XG4gICAgICAgICAgICAgICAgICAgIDxidG4gY2xhc3NOYW1lPVwic3VibWVudS1oYXMtbnVtYmVyc1wiPlxuICAgICAgICAgICAgICAgICAgICBcdDxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctc3RvcmVzXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk02MzUuNyAxNzYuMWwtOTEuNC0xNjBDNTM4LjYgNi4yIDUyOCAwIDUxNi41IDBoLTM5M0MxMTIgMCAxMDEuNCA2LjIgOTUuNyAxNi4xbC05MS40IDE2MEMtNy45IDE5Ny41IDcuNCAyMjQgMzIgMjI0aDMydjI1NC41QzY0IDQ5NyA3OC4zIDUxMiA5NiA1MTJoMjU2YzE3LjcgMCAzMi0xNSAzMi0zMy41VjIyNGgxNjB2MjgwYzAgNC40IDMuNiA4IDggOGgxNmM0LjQgMCA4LTMuNiA4LThWMjI0aDMyYzI0LjYgMCAzOS45LTI2LjUgMjcuNy00Ny45ek0zNTIgNDc4LjVjMCAuOS0uMyAxLjQtLjIgMS41bC0yNTUuMi4ycy0uNi0uNS0uNi0xLjdWMzUyaDI1NnYxMjYuNXptMC0xNTguNUg5NnYtOTZoMjU2djk2ek0zMi4xIDE5Mmw5MS40LTE2MGgzOTNMNjA4IDE5MkgzMi4xelwiPjwvcGF0aD48L3N2Zz5CZWxlemE8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLXRlcm1pbmFsXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0zNC40OTUgMzYuNDY1bDIxMS4wNTEgMjExLjA1YzQuNjg2IDQuNjg2IDQuNjg2IDEyLjI4NCAwIDE2Ljk3MUwzNC40OTUgNDc1LjUzNWMtNC42ODYgNC42ODYtMTIuMjg0IDQuNjg2LTE2Ljk3IDBsLTcuMDcxLTcuMDdjLTQuNjg2LTQuNjg2LTQuNjg2LTEyLjI4NCAwLTE2Ljk3MUwyMDUuOTQ3IDI1NiAxMC40NTQgNjAuNTA2Yy00LjY4Ni00LjY4Ni00LjY4Ni0xMi4yODQgMC0xNi45NzFsNy4wNzEtNy4wN2M0LjY4Ni00LjY4NyAxMi4yODQtNC42ODcgMTYuOTcgMHpNNjQwIDQ2OHYtMTBjMC02LjYyNy01LjM3My0xMi0xMi0xMkgzMDBjLTYuNjI3IDAtMTIgNS4zNzMtMTIgMTJ2MTBjMCA2LjYyNyA1LjM3MyAxMiAxMiAxMmgzMjhjNi42MjcgMCAxMi01LjM3MyAxMi0xMnpcIj48L3BhdGg+PC9zdmc+PGNvdW50PjI8L2NvdW50PlxuICAgIFx0ICAgICAgICAgICAgICAgIDxzdWJtZW51PlxuICAgIFx0ICAgICAgICAgICAgICAgICAgICA8YnRuIGNsYXNzTmFtZT1cImRpc2FibGVcIj48c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWFuZ2xlLXJpZ2h0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yMjQuMyAyNzNsLTEzNiAxMzZjLTkuNCA5LjQtMjQuNiA5LjQtMzMuOSAwbC0yMi42LTIyLjZjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45bDk2LjQtOTYuNC05Ni40LTk2LjRjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45TDU0LjMgMTAzYzkuNC05LjQgMjQuNi05LjQgMzMuOSAwbDEzNiAxMzZjOS41IDkuNCA5LjUgMjQuNi4xIDM0elwiPjwvcGF0aD48L3N2Zz5TYWzDo28gZGUgQ2FiZWxlcmVpcm88c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWNpcmNsZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjU2IDhDMTE5IDggOCAxMTkgOCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzOTMgOCAyNTYgOHpcIj48L3BhdGg+PC9zdmc+PC9idG4+XG4gICAgXHQgICAgICAgICAgICAgICAgICAgIDxidG4gY2xhc3NOYW1lPVwiZGlzYWJsZVwiPjxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctYW5nbGUtcmlnaHRcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIwIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTIyNC4zIDI3M2wtMTM2IDEzNmMtOS40IDkuNC0yNC42IDkuNC0zMy45IDBsLTIyLjYtMjIuNmMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlsOTYuNC05Ni40LTk2LjQtOTYuNGMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlMNTQuMyAxMDNjOS40LTkuNCAyNC42LTkuNCAzMy45IDBsMTM2IDEzNmM5LjUgOS40IDkuNSAyNC42LjEgMzR6XCI+PC9wYXRoPjwvc3ZnPkFsdWd1ZWwgZGUgUm91cGFzPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6XCI+PC9wYXRoPjwvc3ZnPjwvYnRuPlxuICAgIFx0ICAgICAgICAgICAgICAgICAgICA8YnRuIGNsYXNzTmFtZT1cImRpc2FibGVcIj48c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWFuZ2xlLXJpZ2h0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yMjQuMyAyNzNsLTEzNiAxMzZjLTkuNCA5LjQtMjQuNiA5LjQtMzMuOSAwbC0yMi42LTIyLjZjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45bDk2LjQtOTYuNC05Ni40LTk2LjRjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45TDU0LjMgMTAzYzkuNC05LjQgMjQuNi05LjQgMzMuOSAwbDEzNiAxMzZjOS41IDkuNCA5LjUgMjQuNi4xIDM0elwiPjwvcGF0aD48L3N2Zz5Db3Ntw6l0aWNvczxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctY2lyY2xlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNTYgOEMxMTkgOCA4IDExOSA4IDI1NnMxMTEgMjQ4IDI0OCAyNDggMjQ4LTExMSAyNDgtMjQ4UzM5MyA4IDI1NiA4elwiPjwvcGF0aD48L3N2Zz48L2J0bj5cbiAgICBcdCAgICAgICAgICAgICAgICA8L3N1Ym1lbnU+XG4gICAgXHQgICAgICAgICAgICA8L2J0bj5cbiAgICAgICAgICAgICAgICA8L21lbnVpdGVtcz5cbiAgICAgICAgICAgICAgICA8c2lkZWJhcmRpdmlkZXI+PC9zaWRlYmFyZGl2aWRlcj5cbiAgICAgICAgICAgICAgICA8c2lkZWJhcnNlcGFyYXRvcj5GQUxFIENPTk9TQ088L3NpZGViYXJzZXBhcmF0b3I+XG4gICAgICAgICAgICAgICAgPG1lbnVjb250YWN0PlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwidGVsOjExIDkzMDE4IDgzNjNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctcGhvbmVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIwIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTQ4Ny44IDI0LjFMMzg3IC44Yy0xNC43LTMuNC0yOS44IDQuMi0zNS44IDE4LjFsLTQ2LjUgMTA4LjVjLTUuNSAxMi43LTEuOCAyNy43IDguOSAzNi41bDUzLjkgNDQuMWMtMzQgNjkuMi05MC4zIDEyNS42LTE1OS42IDE1OS42bC00NC4xLTUzLjljLTguOC0xMC43LTIzLjgtMTQuNC0zNi41LTguOUwxOC45IDM1MS4zQzUgMzU3LjMtMi42IDM3Mi4zLjggMzg3TDI0IDQ4Ny43QzI3LjMgNTAyIDM5LjkgNTEyIDU0LjUgNTEyIDMwNi43IDUxMiA1MTIgMzA3LjggNTEyIDU0LjVjMC0xNC42LTEwLTI3LjItMjQuMi0zMC40ek01NS4xIDQ4MGwtMjMtOTkuNiAxMDcuNC00NiA1OS41IDcyLjhjMTAzLjYtNDguNiAxNTkuNy0xMDQuOSAyMDguMS0yMDguMWwtNzIuOC01OS41IDQ2LTEwNy40IDk5LjYgMjNDNDc5LjcgMjg5LjcgMjg5LjYgNDc5LjcgNTUuMSA0ODB6XCI+PC9wYXRoPjwvc3ZnPkxpZ2HDp8OjbzxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctY2lyY2xlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNTYgOEMxMTkgOCA4IDExOSA4IDI1NnMxMTEgMjQ4IDI0OCAyNDggMjQ4LTExMSAyNDgtMjQ4UzM5MyA4IDI1NiA4elwiPjwvcGF0aD48L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9hcGkud2hhdHNhcHAuY29tL3NlbmQ/cGhvbmU9NTUxMTkzMDE4ODM2M1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy13aGF0c2FwcFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMzgwLjkgOTcuMUMzMzkgNTUuMSAyODMuMiAzMiAyMjMuOSAzMmMtMTIyLjQgMC0yMjIgOTkuNi0yMjIgMjIyIDAgMzkuMSAxMC4yIDc3LjMgMjkuNiAxMTFMMCA0ODBsMTE3LjctMzAuOWMzMi40IDE3LjcgNjguOSAyNyAxMDYuMSAyN2guMWMxMjIuMyAwIDIyNC4xLTk5LjYgMjI0LjEtMjIyIDAtNTkuMy0yNS4yLTExNS02Ny4xLTE1N3ptLTE1NyAzNDEuNmMtMzMuMiAwLTY1LjctOC45LTk0LTI1LjdsLTYuNy00LTY5LjggMTguM0w3MiAzNTkuMmwtNC40LTdjLTE4LjUtMjkuNC0yOC4yLTYzLjMtMjguMi05OC4yIDAtMTAxLjcgODIuOC0xODQuNSAxODQuNi0xODQuNSA0OS4zIDAgOTUuNiAxOS4yIDEzMC40IDU0LjEgMzQuOCAzNC45IDU2LjIgODEuMiA1Ni4xIDEzMC41IDAgMTAxLjgtODQuOSAxODQuNi0xODYuNiAxODQuNnptMTAxLjItMTM4LjJjLTUuNS0yLjgtMzIuOC0xNi4yLTM3LjktMTgtNS4xLTEuOS04LjgtMi44LTEyLjUgMi44LTMuNyA1LjYtMTQuMyAxOC0xNy42IDIxLjgtMy4yIDMuNy02LjUgNC4yLTEyIDEuNC0zMi42LTE2LjMtNTQtMjkuMS03NS41LTY2LTUuNy05LjggNS43LTkuMSAxNi4zLTMwLjMgMS44LTMuNy45LTYuOS0uNS05LjctMS40LTIuOC0xMi41LTMwLjEtMTcuMS00MS4yLTQuNS0xMC44LTkuMS05LjMtMTIuNS05LjUtMy4yLS4yLTYuOS0uMi0xMC42LS4yLTMuNyAwLTkuNyAxLjQtMTQuOCA2LjktNS4xIDUuNi0xOS40IDE5LTE5LjQgNDYuMyAwIDI3LjMgMTkuOSA1My43IDIyLjYgNTcuNCAyLjggMy43IDM5LjEgNTkuNyA5NC44IDgzLjggMzUuMiAxNS4yIDQ5IDE2LjUgNjYuNiAxMy45IDEwLjctMS42IDMyLjgtMTMuNCAzNy40LTI2LjQgNC42LTEzIDQuNi0yNC4xIDMuMi0yNi40LTEuMy0yLjUtNS0zLjktMTAuNS02LjZ6XCI+PC9wYXRoPjwvc3ZnPldoYXRzYXBwPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6XCI+PC9wYXRoPjwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJtYWlsdG86Y29udGFjdEBhdm4uc3lzdGVtc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1tYWlsXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNTYgOEMxMTguOTQxIDggOCAxMTguOTE5IDggMjU2YzAgMTM3LjA1OCAxMTAuOTE5IDI0OCAyNDggMjQ4IDUyLjkyNSAwIDEwNC42OC0xNy4wNzggMTQ3LjA5Mi00OC4zMTkgNS41MDEtNC4wNTIgNi40MjMtMTEuOTI0IDIuMDk1LTE3LjIxMWwtNS4wNzQtNi4xOThjLTQuMDE4LTQuOTA5LTExLjE5My01Ljg4My0xNi4zMDctMi4xMjlDMzQ2LjkzIDQ1Ny4yMDggMzAxLjk3NCA0NzIgMjU2IDQ3MmMtMTE5LjM3MyAwLTIxNi05Ni42MDctMjE2LTIxNiAwLTExOS4zNzUgOTYuNjA3LTIxNiAyMTYtMjE2IDExOC40NDUgMCAyMTYgODAuMDI0IDIxNiAyMDAgMCA3Mi44NzMtNTIuODE5IDEwOC4yNDEtMTE2LjA2NSAxMDguMjQxLTE5LjczNCAwLTIzLjY5NS0xMC44MTYtMTkuNTAzLTMzLjg2OGwzMi4wNy0xNjQuMDcxYzEuNDQ5LTcuNDExLTQuMjI2LTE0LjMwMi0xMS43NzctMTQuMzAyaC0xMi40MjFhMTIgMTIgMCAwIDAtMTEuNzgxIDkuNzE4Yy0yLjI5NCAxMS44NDYtMi44NiAxMy40NjQtMy44NjEgMjUuNjQ3LTExLjcyOS0yNy4wNzgtMzguNjM5LTQzLjAyMy03My4zNzUtNDMuMDIzLTY4LjA0NCAwLTEzMy4xNzYgNjIuOTUtMTMzLjE3NiAxNTcuMDI3IDAgNjEuNTg3IDMzLjkxNSA5OC4zNTQgOTAuNzIzIDk4LjM1NCAzOS43MjkgMCA3MC42MDEtMjQuMjc4IDg2LjYzMy00Ni45ODItMS4yMTEgMjcuNzg2IDE3LjQ1NSA0Mi4yMTMgNDUuOTc1IDQyLjIxM0M0NTMuMDg5IDM3OC45NTQgNTA0IDMyMS43MjkgNTA0IDI0MCA1MDQgMTAzLjgxNCAzOTMuODYzIDggMjU2IDh6bS0zNy45MiAzNDIuNjI3Yy0zNi42ODEgMC01OC41OC0yNS4xMDgtNTguNTgtNjcuMTY2IDAtNzQuNjkgNTAuNzY1LTEyMS41NDUgOTcuMjE3LTEyMS41NDUgMzguODU3IDAgNTguMTAyIDI3Ljc5IDU4LjEwMiA2NS43MzUgMCA1OC4xMzMtMzguMzY5IDEyMi45NzYtOTYuNzM5IDEyMi45NzZ6XCI+PC9wYXRoPjwvc3ZnPkUtbWFpbDxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctY2lyY2xlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNTYgOEMxMTkgOCA4IDExOSA4IDI1NnMxMTEgMjQ4IDI0OCAyNDggMjQ4LTExMSAyNDgtMjQ4UzM5MyA4IDI1NiA4elwiPjwvcGF0aD48L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwic21zOjExIDkzMDE4IDgzNjNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctbWFpbFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNNDAwIDMySDQ4QzIxLjQ5IDMyIDAgNTMuNDkgMCA4MHYzNTJjMCAyNi41MSAyMS40OSA0OCA0OCA0OGgzNTJjMjYuNTEgMCA0OC0yMS40OSA0OC00OFY4MGMwLTI2LjUxLTIxLjQ5LTQ4LTQ4LTQ4em0xNiA0MDBjMCA4LjgyMi03LjE3OCAxNi0xNiAxNkg0OGMtOC44MjIgMC0xNi03LjE3OC0xNi0xNlY4MGMwLTguODIyIDcuMTc4LTE2IDE2LTE2aDM1MmM4LjgyMiAwIDE2IDcuMTc4IDE2IDE2djM1MnptLTY0LTMwNEg5NmMtMTcuNjczIDAtMzIgMTQuMzI3LTMyIDMydjE5MmMwIDE3LjY3MyAxNC4zMjcgMzIgMzIgMzJoMjU2YzE3LjY3MyAwIDMyLTE0LjMyNyAzMi0zMlYxNjBjMC0xNy42NzMtMTQuMzI3LTMyLTMyLTMyem0wIDMydjMzLjg1NWMtMTQuMTM2IDExLjYyOC0zNi41NjYgMjkuNjY0LTgyLjExNyA2NS44MjFDMjU5LjQyNiAyNjguMDE1IDIzOC43NDggMjg4IDIyNC4yNTYgMjg4bC0uMjU2LS4wMDItLjI1Ni4wMDJjLTE0LjQ5MiAwLTM1LjE3LTE5Ljk4NC00NS42MjgtMjguMzI0LTQ1LjU0NC0zNi4xNTItNjcuOTc4LTU0LjE5Mi04Mi4xMTctNjUuODIyVjE2MEgzNTJ6TTk2IDM1MlYyMzUuMDkyYzE0LjEwOSAxMS4zNjcgMzMuNjI0IDI2Ljk0OCA2Mi4yMjEgNDkuNjQ4IDEzLjc3NyAxMS4wMSAzNy45MDIgMzUuMjYgNjUuNTIzIDM1LjI2bC4yNTMtLjAwMS4yNTguMDAxYzI3LjUyOSAwIDUxLjM5Mi0yMy45NzUgNjUuNTQxLTM1LjI3NCAyOC41ODMtMjIuNjg5IDQ4LjA5OS0zOC4yNyA2Mi4yMDMtNDkuNjM0VjM1Mkg5NnpcIj48L3BhdGg+PC9zdmc+U01TPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6XCI+PC9wYXRoPjwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9tZW51Y29udGFjdD5cbiAgICAgICAgICAgIDwvbWVudXNjcm9sbD5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICBsZWZ0bWVudSB7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IC0zNDBweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwMDAwO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMzMwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCA4cHggIzAwMDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFjMjIyZTtcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBsZWZ0IDM1MG1zIGVhc2UgMHM7XG4gICAgICAgICAgICAgICAgICAgIC1tb3otdHJhbnNpdGlvbjogbGVmdCAzNTBtcyBlYXNlIDBzO1xuICAgICAgICAgICAgICAgICAgICAtbXMtdHJhbnNpdGlvbjogbGVmdCAzNTBtcyBlYXNlIDBzO1xuICAgICAgICAgICAgICAgICAgICAtby10cmFuc2l0aW9uOiBsZWZ0IDM1MG1zIGVhc2UgMHM7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGxlZnQgMzUwbXMgZWFzZSAwcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgc2lkZWJhcnVzZXIge1xuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgNnB4IDRweCByZ2JhKDAsMCwwLC4zKTtcbiAgICAgICAgICAgICAgICAgICAgdG91Y2gtYWN0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxODVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgc2lkZWJhcnVzZXIgcGhvdG8ge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTH0vc3RhdGljL2ltYWdlcy9pY29ucy9pY29uLTE5MngxOTIucG5nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgc2lkZWJhcnVzZXIgcGhvdG8ge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzAwZjlhNjtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIHRvcDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDFweCAxcHggNXB4ICMwMDAwMDA7XG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggNXB4ICMwMDAwMDA7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTVweCAwcHggMHB4IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDkwcHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MHB4O1xuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgc2lkZWJhcnVzZXIgcGhvdG8gdGl0bGUge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMjg1cHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDEwNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBzaWRlYmFydXNlciBwaG90byBzdWJ0aXRsZSB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI5MHB4O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2NjYztcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAxMDBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgc2lkZWJhcnVzZXIgYmdpbWcge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTH0vc3RhdGljL2ltYWdlcy9ob21lcGFnZS9iYWNrZ3JvdW5kLWF2bi0xLmpwZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IHNpZGViYXJ1c2VyIGJnaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBoYXJkLWxpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNhN2Y3ZmY7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxODVweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IHNpZGViYXJ1c2VyIGJnc2hhZG93IHtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogOTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxODVweDtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLHJnYmEoMCwwLDAsMCkgMCxyZ2JhKDAsMCwwLDApIDIwJSxyZ2JhKDAsMCwwLC4xKSA0MCUscmdiYSgwLDAsMCwuNykgNzAlLHJnYmEoMCwwLDAsMSkgMTAwJSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwge1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAyMzVweCk7XG4gICAgICAgICAgICAgICAgICAgIHRvdWNoLWFjdGlvbjogcGFuLXk7XG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMzMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIHNpZGViYXJzZXBhcmF0b3I6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIHNpZGViYXJzZXBhcmF0b3Ige1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjY2NjO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0LWVudSBtZW51c2Nyb2xsIHNpZGViYXJkaXZpZGVyIHtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogc29saWQgMXB4IHJnYmEoMCwwLDAsLjIpO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggcmdiYSgyNTUsMjU1LDI1NSwuMDMpO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51aXRlbXMgPiBidG4sXG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51Y29udGFjdCA+IGEge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjVweDtcbiAgICAgICAgICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA1NXB4O1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjY2NjO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0bi5kaXNhYmxlLFxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWNvbnRhY3QgPiBhLmRpc2FibGUge1xuICAgICAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogLjU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuIC5zdmctaW5saW5lLFxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWNvbnRhY3QgPiBhIC5zdmctaW5saW5lIHtcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IC0uMTI1ZW07XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDI1cHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjYjUwMGZmO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIycHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDNweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51aXRlbXMgPiBidG4gLnN2Zy1pbmxpbmUuc3ZnLWNpcmNsZSxcbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVjb250YWN0ID4gYSAuc3ZnLWlubGluZS5zdmctY2lyY2xlIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM0MzQ3NTI7XG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1cHg7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogMjVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51aXRlbXMgPiBidG4gLnN2Zy1pbmxpbmUuc3ZnLXRlcm1pbmFsIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM0MzQ3NTI7XG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogLTVweDtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAxOHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0biAuc3ZnLWlubGluZS5zdmctdHYge1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtNHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0biAuc3ZnLWlubGluZS5zdmctc3RvcmVzIHtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogLTVweDtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAycHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuIC5zdmctaW5saW5lLnN2Zy1yZXN0YXVyYW50ZXMsXG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51aXRlbXMgPiBidG4gLnN2Zy1pbmxpbmUuc3ZnLXdoYXRzYXBwLFxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuIC5zdmctaW5saW5lLnN2Zy1waG9uZSxcbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0biAuc3ZnLWlubGluZS5zdmctbWFpbCxcbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0biAuc3ZnLWlubGluZS5zdmctc3RhciB7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IC0ycHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuOmhvdmVyLFxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWNvbnRhY3QgPiBhOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIzMmIzYTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0bjpob3ZlciAuc3ZnLWlubGluZS5zdmctdGVybWluYWwsXG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51aXRlbXMgPiBidG46aG92ZXIgLnN2Zy1pbmxpbmUuc3ZnLWNpcmNsZSxcbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVjb250YWN0ID4gYTpob3ZlciAuc3ZnLWlubGluZS5zdmctY2lyY2xlIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0biA+IGNvdW50IHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2M5NDdmZjtcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IC0yNXB4O1xuICAgICAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogLTJweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51aXRlbXMgPiBidG4gc3VibWVudSB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgKyAyNXB4KTtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtMjVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51aXRlbXMgPiBidG4gc3VibWVudSBidG4uZGlzYWJsZSB7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IC41O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0biBzdWJtZW51IGJ0biB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMzVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51aXRlbXMgPiBidG4gc3VibWVudS5vcGVuIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51aXRlbXMgPiBidG46aG92ZXIgc3VibWVudSBidG4gLnN2Zy1pbmxpbmUuc3ZnLWNpcmNsZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNDM0NzUyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0bjpob3ZlciBzdWJtZW51IGJ0bjpub3QoLmRpc2FibGUpOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzJmM2E0ZTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0bjpob3ZlciBzdWJtZW51IGJ0bjpub3QoLmRpc2FibGUpOmhvdmVyIC5zdmctaW5saW5lLnN2Zy1jaXJjbGUge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5NDBweCkge1xuICAgICAgICAgICAgICAgICAgICBmb290ZXIgaW5mb3Mge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNjI1cHgpIHtcbiAgICAgICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNpdGVtb2JpbGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICBcdDwvbGVmdG1lbnU+XG4gICAgKX1cbn0iXX0= */\n/*@ sourceURL=/home/ubuntu/workspace/estudo/next/components/interface.js */"),
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
        className: "jsx-925935266",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 508
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("sidebaruser", {
        className: "jsx-925935266",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 509
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("photo", {
        className: "jsx-925935266",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 510
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
        className: "jsx-925935266",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 511
        },
        __self: this
      }, "Boa noite. \u2605"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("subtitle", {
        className: "jsx-925935266",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 512
        },
        __self: this
      }, "Entre com seu login ou cadastre-se!")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("bgimg", {
        className: "jsx-925935266",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 514
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("bgshadow", {
        className: "jsx-925935266",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 515
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("menuscroll", {
        className: "jsx-925935266",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 517
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("sidebarseparator", {
        className: "jsx-925935266",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 518
        },
        __self: this
      }, "Acesso Restrito"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("menuitems", {
        className: "jsx-925935266",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 519
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("btn", {
        href: "//admin.avn.systems",
        target: "_self",
        className: "jsx-925935266",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 520
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        className: "jsx-925935266" + " " + "svg-inline",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 521
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M144 112v51.6H48c-26.5 0-48 21.5-48 48v88.6c0 26.5 21.5 48 48 48h96v51.6c0 42.6 51.7 64.2 81.9 33.9l144-143.9c18.7-18.7 18.7-49.1 0-67.9l-144-144C195.8 48 144 69.3 144 112zm192 144L192 400v-99.7H48v-88.6h144V112l144 144zm80 192h-84c-6.6 0-12-5.4-12-12v-24c0-6.6 5.4-12 12-12h84c26.5 0 48-21.5 48-48V160c0-26.5-21.5-48-48-48h-84c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h84c53 0 96 43 96 96v192c0 53-43 96-96 96z",
        className: "jsx-925935266" + " " + "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 521
        },
        __self: this
      })), "Entrar", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        className: "jsx-925935266" + " " + "svg-inline svg-circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 521
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z",
        className: "jsx-925935266",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 521
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("btn", {
        href: "#",
        className: "jsx-925935266" + " " + "disable",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 522
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 576 512",
        className: "jsx-925935266" + " " + "svg-inline",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 523
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M288 208c-44.2 0-80 35.8-80 80s35.8 80 80 80 80-35.8 80-80-35.8-80-80-80zm0 128c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zM512 64H352V32c0-17.7-14.3-32-32-32h-64c-17.7 0-32 14.3-32 32v32H64C28.7 64 0 92.7 0 128v320c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64zM256 32h64v96h-64V32zm128 448H192v-21.9c0-9 2.6-17.6 7.6-25 7.2-10.7 20.3-17.2 35-17.2 15.9 0 23.5 8 53.4 8s37.6-8 53.4-8c14.7 0 27.7 6.4 35 17.2 5 7.4 7.6 16 7.6 25V480zm160-32c0 17.6-14.4 32-32 32h-96v-21.9c0-15.9-4.8-30.6-13-42.8-13.8-20.5-37.3-31.3-61.5-31.3-22.2 0-27.8 8-53.4 8-25.6 0-31.2-8-53.4-8-24.2 0-47.7 10.8-61.5 31.3-8.2 12.2-13 27-13 42.8V480H64c-17.6 0-32-14.4-32-32V128c0-17.6 14.4-32 32-32h160v64h128V96h160c17.6 0 32 14.4 32 32v320z",
        className: "jsx-925935266" + " " + "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 523
        },
        __self: this
      })), "Cadastrar-se", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        className: "jsx-925935266" + " " + "svg-inline svg-circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 523
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z",
        className: "jsx-925935266",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 523
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("sidebardivider", {
        className: "jsx-925935266",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 525
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("menusitemobile", {
        className: "jsx-925935266",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 526
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("sidebarseparator", {
        className: "jsx-925935266",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 527
        },
        __self: this
      }, "Website Menu"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-925935266" + " " + "menu-items menu-icons",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 528
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("sidebardivider", {
        className: "jsx-925935266",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 531
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("sidebarseparator", {
        className: "jsx-925935266",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 533
        },
        __self: this
      }, "MYAPP Models"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("menuitems", {
        className: "jsx-925935266",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 534
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("btn", {
        href: "./",
        className: "jsx-925935266",
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
        className: "jsx-925935266" + " " + "svg-inline svg-mobile-alt",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 535
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M192 416c0 17.7-14.3 32-32 32s-32-14.3-32-32 14.3-32 32-32 32 14.3 32 32zm48-60V92c0-6.6-5.4-12-12-12H92c-6.6 0-12 5.4-12 12v264c0 6.6 5.4 12 12 12h136c6.6 0 12-5.4 12-12zm80-308v416c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V48C0 21.5 21.5 0 48 0h224c26.5 0 48 21.5 48 48zm-48 410V54c0-3.3-2.7-6-6-6H54c-3.3 0-6 2.7-6 6v404c0 3.3 2.7 6 6 6h212c3.3 0 6-2.7 6-6z",
        className: "jsx-925935266",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 535
        },
        __self: this
      })), "About My App", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        className: "jsx-925935266" + " " + "svg-inline svg-circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 535
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z",
        className: "jsx-925935266",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 535
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("btn", {
        className: "jsx-925935266" + " " + "submenu-has-numbers",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 536
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 320 512",
        className: "jsx-925935266" + " " + "svg-inline svg-tv",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 537
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M400 244v-8c0-6.6 5.4-12 12-12h8c6.6 0 12 5.4 12 12v8c0 6.6-5.4 12-12 12h-8c-6.6 0-12-5.4-12-12zm12 76h8c6.6 0 12-5.4 12-12v-8c0-6.6-5.4-12-12-12h-8c-6.6 0-12 5.4-12 12v8c0 6.6 5.4 12 12 12zm-36-136.5s-1.5-7.5-144-7.5-144.5 7.5-144.5 7.5S80 184 80 288s7.5 104.5 7.5 104.5S88 400 232 400s144-7.5 144-7.5 7.5-.5 7.5-104.5-7.5-104.5-7.5-104.5zM512 144v288c0 26.5-21.5 48-48 48h-16v32h-48l-10.7-32H122.7L112 512H64v-32H48c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48h140.9l-54-55.2c-9.3-9.5-9.1-24.7.3-33.9 9.5-9.3 24.7-9.1 33.9.3L256 96l86.9-88.8c9.3-9.5 24.5-9.6 33.9-.3 9.5 9.3 9.6 24.5.3 33.9l-54 55.2H464c26.5 0 48 21.5 48 48zm-48 0H48v288h416V144z",
        className: "jsx-925935266",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 537
        },
        __self: this
      })), "Communication", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 320 512",
        className: "jsx-925935266" + " " + "svg-inline svg-terminal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 537
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M34.495 36.465l211.051 211.05c4.686 4.686 4.686 12.284 0 16.971L34.495 475.535c-4.686 4.686-12.284 4.686-16.97 0l-7.071-7.07c-4.686-4.686-4.686-12.284 0-16.971L205.947 256 10.454 60.506c-4.686-4.686-4.686-12.284 0-16.971l7.071-7.07c4.686-4.687 12.284-4.687 16.97 0zM640 468v-10c0-6.627-5.373-12-12-12H300c-6.627 0-12 5.373-12 12v10c0 6.627 5.373 12 12 12h328c6.627 0 12-5.373 12-12z",
        className: "jsx-925935266",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 537
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("count", {
        className: "jsx-925935266",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 537
        },
        __self: this
      }, "4"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("submenu", {
        className: "jsx-925935266",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 538
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("btn", {
        className: "jsx-925935266" + " " + "disable",
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
        className: "jsx-925935266" + " " + "svg-inline svg-angle-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 539
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z",
        className: "jsx-925935266",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 539
        },
        __self: this
      })), "Ag\xEAncias e Produtoras", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        className: "jsx-925935266" + " " + "svg-inline svg-circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 539
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z",
        className: "jsx-925935266",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 539
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("btn", {
        href: "./themes/produtoras/",
        className: "jsx-925935266",
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
        className: "jsx-925935266" + " " + "svg-inline svg-angle-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 540
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z",
        className: "jsx-925935266",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 540
        },
        __self: this
      })), "Promo\xE7\xE3o e Eventos", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        className: "jsx-925935266" + " " + "svg-inline svg-circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 540
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z",
        className: "jsx-925935266",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 540
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("btn", {
        href: "./themes/supertv/",
        className: "jsx-925935266",
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
        className: "jsx-925935266" + " " + "svg-inline svg-angle-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 541
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z",
        className: "jsx-925935266",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 541
        },
        __self: this
      })), "Emissora TV", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        className: "jsx-925935266" + " " + "svg-inline svg-circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 541
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z",
        className: "jsx-925935266",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 541
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("btn", {
        className: "jsx-925935266" + " " + "disable",
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
        className: "jsx-925935266" + " " + "svg-inline svg-angle-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 542
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z",
        className: "jsx-925935266",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 542
        },
        __self: this
      })), "R\xE1dios", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        className: "jsx-925935266" + " " + "svg-inline svg-circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 542
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z",
        className: "jsx-925935266",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 542
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("btn", {
        className: "jsx-925935266" + " " + "submenu-has-numbers",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 545
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 320 512",
        className: "jsx-925935266" + " " + "svg-inline svg-star",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 546
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96zm89.6 256c-11 0-21.8 2.6-32.2 6.2-18 6.3-37.3 9.8-57.4 9.8s-39.4-3.5-57.4-9.8c-10.4-3.6-21.2-6.2-32.2-6.2C60.2 304 0 364.2 0 438.4V488c0 13.3 10.7 24 24 24s24-10.7 24-24v-49.6c0-45.5 35.4-82.4 80-85.8v50c-23.1 6.9-40 28.1-40 53.4 0 30.9 25.1 56 56 56s56-25.1 56-56c0-25.3-16.9-46.5-40-53.4v-44.7c20.8 6.3 42.3 10.1 64 10.1 21.8 0 43.2-3.8 64-10.1v36.3c-28.2 7.5-48 34.5-48 64.6V488c0 4.2 1.7 8.3 4.7 11.3l10.3 10.3c3.1 3.1 8.2 3.1 11.3 0l11.3-11.3c3.1-3.1 3.1-8.2 0-11.3l-5.7-5.7V456c0-19.4 17.4-34.8 37.4-31.6 15.7 2.6 26.6 17.4 26.6 33.3v23.6l-5.7 5.7c-3.1 3.1-3.1 8.2 0 11.3l11.3 11.3c3.1 3.1 8.2 3.1 11.3 0l10.3-10.3c3-3 4.7-7.1 4.7-11.3v-32c0-29.7-20.5-54.5-48-61.6v-41.7c44.6 3.3 80 40.3 80 85.8V488c0 13.3 10.7 24 24 24s24-10.7 24-24v-49.6c.2-74.2-60-134.4-134.2-134.4zM168 456c0 13.3-10.7 24-24 24s-24-10.7-24-24 10.7-24 24-24 24 10.7 24 24z",
        className: "jsx-925935266",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 546
        },
        __self: this
      })), "Profissionals", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 320 512",
        className: "jsx-925935266" + " " + "svg-inline svg-terminal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 546
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M34.495 36.465l211.051 211.05c4.686 4.686 4.686 12.284 0 16.971L34.495 475.535c-4.686 4.686-12.284 4.686-16.97 0l-7.071-7.07c-4.686-4.686-4.686-12.284 0-16.971L205.947 256 10.454 60.506c-4.686-4.686-4.686-12.284 0-16.971l7.071-7.07c4.686-4.687 12.284-4.687 16.97 0zM640 468v-10c0-6.627-5.373-12-12-12H300c-6.627 0-12 5.373-12 12v10c0 6.627 5.373 12 12 12h328c6.627 0 12-5.373 12-12z",
        className: "jsx-925935266",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 546
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("count", {
        className: "jsx-925935266",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 546
        },
        __self: this
      }, "6"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("submenu", {
        className: "jsx-925935266",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 547
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("btn", {
        className: "jsx-925935266" + " " + "disable",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 548
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 320 512",
        className: "jsx-925935266" + " " + "svg-inline svg-angle-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 548
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z",
        className: "jsx-925935266",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 548
        },
        __self: this
      })), "Atores", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        className: "jsx-925935266" + " " + "svg-inline svg-circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 548
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z",
        className: "jsx-925935266",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 548
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("btn", {
        href: "./themes/cantores/",
        className: "jsx-925935266",
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
        className: "jsx-925935266" + " " + "svg-inline svg-angle-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 549
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z",
        className: "jsx-925935266",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 549
        },
        __self: this
      })), "Cantores", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        className: "jsx-925935266" + " " + "svg-inline svg-circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 549
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z",
        className: "jsx-925935266",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 549
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("btn", {
        className: "jsx-925935266" + " " + "disable",
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
        className: "jsx-925935266" + " " + "svg-inline svg-angle-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 550
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z",
        className: "jsx-925935266",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 550
        },
        __self: this
      })), "Dentistas", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        className: "jsx-925935266" + " " + "svg-inline svg-circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 550
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z",
        className: "jsx-925935266",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 550
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("btn", {
        className: "jsx-925935266" + " " + "disable",
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
        className: "jsx-925935266" + " " + "svg-inline svg-angle-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 551
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z",
        className: "jsx-925935266",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 551
        },
        __self: this
      })), "Arquitetos", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        className: "jsx-925935266" + " " + "svg-inline svg-circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 551
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z",
        className: "jsx-925935266",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 551
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("btn", {
        className: "jsx-925935266" + " " + "disable",
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
        className: "jsx-925935266" + " " + "svg-inline svg-angle-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 552
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z",
        className: "jsx-925935266",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 552
        },
        __self: this
      })), "Advogados", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        className: "jsx-925935266" + " " + "svg-inline svg-circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 552
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z",
        className: "jsx-925935266",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 552
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("btn", {
        className: "jsx-925935266" + " " + "disable",
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
        className: "jsx-925935266" + " " + "svg-inline svg-angle-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 553
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z",
        className: "jsx-925935266",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 553
        },
        __self: this
      })), "Programadores", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        className: "jsx-925935266" + " " + "svg-inline svg-circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 553
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z",
        className: "jsx-925935266",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 553
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("btn", {
        className: "jsx-925935266" + " " + "submenu-has-numbers",
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
        className: "jsx-925935266" + " " + "svg-inline svg-stores",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 557
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M635.7 176.1l-91.4-160C538.6 6.2 528 0 516.5 0h-393C112 0 101.4 6.2 95.7 16.1l-91.4 160C-7.9 197.5 7.4 224 32 224h32v254.5C64 497 78.3 512 96 512h256c17.7 0 32-15 32-33.5V224h160v280c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8V224h32c24.6 0 39.9-26.5 27.7-47.9zM352 478.5c0 .9-.3 1.4-.2 1.5l-255.2.2s-.6-.5-.6-1.7V352h256v126.5zm0-158.5H96v-96h256v96zM32.1 192l91.4-160h393L608 192H32.1z",
        className: "jsx-925935266",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 557
        },
        __self: this
      })), "Stores", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 320 512",
        className: "jsx-925935266" + " " + "svg-inline svg-terminal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 557
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M34.495 36.465l211.051 211.05c4.686 4.686 4.686 12.284 0 16.971L34.495 475.535c-4.686 4.686-12.284 4.686-16.97 0l-7.071-7.07c-4.686-4.686-4.686-12.284 0-16.971L205.947 256 10.454 60.506c-4.686-4.686-4.686-12.284 0-16.971l7.071-7.07c4.686-4.687 12.284-4.687 16.97 0zM640 468v-10c0-6.627-5.373-12-12-12H300c-6.627 0-12 5.373-12 12v10c0 6.627 5.373 12 12 12h328c6.627 0 12-5.373 12-12z",
        className: "jsx-925935266",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 557
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("count", {
        className: "jsx-925935266",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 557
        },
        __self: this
      }, "7"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("submenu", {
        className: "jsx-925935266",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 558
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("btn", {
        href: "./themes/mercadolivre/",
        className: "jsx-925935266",
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
        className: "jsx-925935266" + " " + "svg-inline svg-angle-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 559
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z",
        className: "jsx-925935266",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 559
        },
        __self: this
      })), "Mercado Livre", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        className: "jsx-925935266" + " " + "svg-inline svg-circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 559
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z",
        className: "jsx-925935266",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 559
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("btn", {
        className: "jsx-925935266" + " " + "disable",
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
        className: "jsx-925935266" + " " + "svg-inline svg-angle-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 560
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z",
        className: "jsx-925935266",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 560
        },
        __self: this
      })), "Inform\xE1tica", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        className: "jsx-925935266" + " " + "svg-inline svg-circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 560
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z",
        className: "jsx-925935266",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 560
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("btn", {
        className: "jsx-925935266" + " " + "disable",
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
        className: "jsx-925935266" + " " + "svg-inline svg-angle-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 561
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z",
        className: "jsx-925935266",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 561
        },
        __self: this
      })), "Constru\xE7\xE3o", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        className: "jsx-925935266" + " " + "svg-inline svg-circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 561
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z",
        className: "jsx-925935266",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 561
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("btn", {
        className: "jsx-925935266" + " " + "disable",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 562
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 320 512",
        className: "jsx-925935266" + " " + "svg-inline svg-angle-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 562
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z",
        className: "jsx-925935266",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 562
        },
        __self: this
      })), "Cal\xE7ados", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        className: "jsx-925935266" + " " + "svg-inline svg-circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 562
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z",
        className: "jsx-925935266",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 562
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("btn", {
        href: "./themes/celmar/",
        className: "jsx-925935266",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 563
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 320 512",
        className: "jsx-925935266" + " " + "svg-inline svg-angle-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 563
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z",
        className: "jsx-925935266",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 563
        },
        __self: this
      })), "Planejados", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        className: "jsx-925935266" + " " + "svg-inline svg-circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 563
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z",
        className: "jsx-925935266",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 563
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("btn", {
        className: "jsx-925935266" + " " + "disable",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 564
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 320 512",
        className: "jsx-925935266" + " " + "svg-inline svg-angle-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 564
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z",
        className: "jsx-925935266",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 564
        },
        __self: this
      })), "Roupas", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        className: "jsx-925935266" + " " + "svg-inline svg-circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 564
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z",
        className: "jsx-925935266",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 564
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("btn", {
        className: "jsx-925935266" + " " + "submenu-has-numbers",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 567
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 320 512",
        className: "jsx-925935266" + " " + "svg-inline svg-restaurantes",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 568
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M344.1 470.3l14.2-164.8c-42.1-33.1-70.4-77-70.4-129.5C288 81.7 376.1 0 440 0c22.1 0 40 17.3 40 38.5v435c0 21.2-17.9 38.5-40 38.5h-56c-22.8 0-41.8-18.7-39.9-41.7zM320 176c0 51 32.2 85.5 71.8 114.5L376 473.1c-.3 3.7 3.4 6.9 8 6.9h56c4.3 0 8-3 8-6.5v-435c0-3.5-3.7-6.5-8-6.5-44.6 0-120 65.8-120 144zM240.7 33.8C237.4 14.3 219.5 0 194.6 0c-11.9 0-24.1 3.4-33.3 11.2C152.9 4.1 141.3 0 128 0s-24.9 4.1-33.3 11.2C85.5 3.4 73.3 0 61.4 0 36.2 0 18.6 14.5 15.3 33.8 13.5 43.2 0 118.4 0 149.9c0 50.9 26.7 91.6 71 110.7L59.6 471.4C58.4 493.4 75.9 512 98 512h60c22 0 39.6-18.5 38.4-40.6L185 260.6c44.2-19.1 71-59.8 71-110.7 0-31.5-13.5-106.7-15.3-116.1zM152.3 240l12.2 233.1c.2 3.7-2.7 6.9-6.5 6.9H98c-3.7 0-6.7-3.1-6.5-6.9L103.7 240C61.3 231.2 32 197 32 149.9c0-29.7 14.8-110.6 14.8-110.6 1.6-9.9 28.3-9.7 29.5.2V162c.9 11.5 28.2 11.7 29.5.2l7.4-122.9c1.6-9.7 27.9-9.7 29.5 0l7.4 122.9c1.3 11.4 28.6 11.2 29.5-.2V39.6c1.2-9.9 27.9-10.1 29.5-.2 0 0 14.8 80.9 14.8 110.6.1 46.8-29 81.2-71.6 90z",
        className: "jsx-925935266",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 568
        },
        __self: this
      })), "Alimenta\xE7\xE3o", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 320 512",
        className: "jsx-925935266" + " " + "svg-inline svg-terminal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 568
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M34.495 36.465l211.051 211.05c4.686 4.686 4.686 12.284 0 16.971L34.495 475.535c-4.686 4.686-12.284 4.686-16.97 0l-7.071-7.07c-4.686-4.686-4.686-12.284 0-16.971L205.947 256 10.454 60.506c-4.686-4.686-4.686-12.284 0-16.971l7.071-7.07c4.686-4.687 12.284-4.687 16.97 0zM640 468v-10c0-6.627-5.373-12-12-12H300c-6.627 0-12 5.373-12 12v10c0 6.627 5.373 12 12 12h328c6.627 0 12-5.373 12-12z",
        className: "jsx-925935266",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 568
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("count", {
        className: "jsx-925935266",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 568
        },
        __self: this
      }, "5"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("submenu", {
        className: "jsx-925935266",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 569
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("btn", {
        className: "jsx-925935266" + " " + "disable",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 570
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 320 512",
        className: "jsx-925935266" + " " + "svg-inline svg-angle-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 570
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z",
        className: "jsx-925935266",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 570
        },
        __self: this
      })), "Restaurantes", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        className: "jsx-925935266" + " " + "svg-inline svg-circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 570
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z",
        className: "jsx-925935266",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 570
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("btn", {
        className: "jsx-925935266" + " " + "disable",
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
        className: "jsx-925935266" + " " + "svg-inline svg-angle-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 571
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z",
        className: "jsx-925935266",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 571
        },
        __self: this
      })), "Cafeterias", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        className: "jsx-925935266" + " " + "svg-inline svg-circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 571
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z",
        className: "jsx-925935266",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 571
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("btn", {
        href: "./themes/cervejarias/",
        className: "jsx-925935266",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 572
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 320 512",
        className: "jsx-925935266" + " " + "svg-inline svg-angle-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 572
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z",
        className: "jsx-925935266",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 572
        },
        __self: this
      })), "Cervejarias", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        className: "jsx-925935266" + " " + "svg-inline svg-circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 572
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z",
        className: "jsx-925935266",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 572
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("btn", {
        className: "jsx-925935266" + " " + "disable",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 573
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 320 512",
        className: "jsx-925935266" + " " + "svg-inline svg-angle-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 573
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z",
        className: "jsx-925935266",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 573
        },
        __self: this
      })), "Pizzarias", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        className: "jsx-925935266" + " " + "svg-inline svg-circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 573
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z",
        className: "jsx-925935266",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 573
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("btn", {
        className: "jsx-925935266" + " " + "disable",
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
        className: "jsx-925935266" + " " + "svg-inline svg-angle-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 574
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z",
        className: "jsx-925935266",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 574
        },
        __self: this
      })), "Sorveterias", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        className: "jsx-925935266" + " " + "svg-inline svg-circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 574
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z",
        className: "jsx-925935266",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 574
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("btn", {
        className: "jsx-925935266" + " " + "submenu-has-numbers",
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
        className: "jsx-925935266" + " " + "svg-inline svg-stores",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 578
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M635.7 176.1l-91.4-160C538.6 6.2 528 0 516.5 0h-393C112 0 101.4 6.2 95.7 16.1l-91.4 160C-7.9 197.5 7.4 224 32 224h32v254.5C64 497 78.3 512 96 512h256c17.7 0 32-15 32-33.5V224h160v280c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8V224h32c24.6 0 39.9-26.5 27.7-47.9zM352 478.5c0 .9-.3 1.4-.2 1.5l-255.2.2s-.6-.5-.6-1.7V352h256v126.5zm0-158.5H96v-96h256v96zM32.1 192l91.4-160h393L608 192H32.1z",
        className: "jsx-925935266",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 578
        },
        __self: this
      })), "Beleza", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 320 512",
        className: "jsx-925935266" + " " + "svg-inline svg-terminal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 578
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M34.495 36.465l211.051 211.05c4.686 4.686 4.686 12.284 0 16.971L34.495 475.535c-4.686 4.686-12.284 4.686-16.97 0l-7.071-7.07c-4.686-4.686-4.686-12.284 0-16.971L205.947 256 10.454 60.506c-4.686-4.686-4.686-12.284 0-16.971l7.071-7.07c4.686-4.687 12.284-4.687 16.97 0zM640 468v-10c0-6.627-5.373-12-12-12H300c-6.627 0-12 5.373-12 12v10c0 6.627 5.373 12 12 12h328c6.627 0 12-5.373 12-12z",
        className: "jsx-925935266",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 578
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("count", {
        className: "jsx-925935266",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 578
        },
        __self: this
      }, "2"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("submenu", {
        className: "jsx-925935266",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 579
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("btn", {
        className: "jsx-925935266" + " " + "disable",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 580
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 320 512",
        className: "jsx-925935266" + " " + "svg-inline svg-angle-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 580
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z",
        className: "jsx-925935266",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 580
        },
        __self: this
      })), "Sal\xE3o de Cabelereiro", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        className: "jsx-925935266" + " " + "svg-inline svg-circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 580
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z",
        className: "jsx-925935266",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 580
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("btn", {
        className: "jsx-925935266" + " " + "disable",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 581
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 320 512",
        className: "jsx-925935266" + " " + "svg-inline svg-angle-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 581
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z",
        className: "jsx-925935266",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 581
        },
        __self: this
      })), "Aluguel de Roupas", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        className: "jsx-925935266" + " " + "svg-inline svg-circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 581
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z",
        className: "jsx-925935266",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 581
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("btn", {
        className: "jsx-925935266" + " " + "disable",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 582
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 320 512",
        className: "jsx-925935266" + " " + "svg-inline svg-angle-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 582
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z",
        className: "jsx-925935266",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 582
        },
        __self: this
      })), "Cosm\xE9ticos", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        className: "jsx-925935266" + " " + "svg-inline svg-circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 582
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z",
        className: "jsx-925935266",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 582
        },
        __self: this
      })))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("sidebardivider", {
        className: "jsx-925935266",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 586
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("sidebarseparator", {
        className: "jsx-925935266",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 587
        },
        __self: this
      }, "FALE CONOSCO"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("menucontact", {
        className: "jsx-925935266",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 588
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "tel:11 93018 8363",
        className: "jsx-925935266",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 589
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 320 512",
        className: "jsx-925935266" + " " + "svg-inline svg-phone",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 590
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M487.8 24.1L387 .8c-14.7-3.4-29.8 4.2-35.8 18.1l-46.5 108.5c-5.5 12.7-1.8 27.7 8.9 36.5l53.9 44.1c-34 69.2-90.3 125.6-159.6 159.6l-44.1-53.9c-8.8-10.7-23.8-14.4-36.5-8.9L18.9 351.3C5 357.3-2.6 372.3.8 387L24 487.7C27.3 502 39.9 512 54.5 512 306.7 512 512 307.8 512 54.5c0-14.6-10-27.2-24.2-30.4zM55.1 480l-23-99.6 107.4-46 59.5 72.8c103.6-48.6 159.7-104.9 208.1-208.1l-72.8-59.5 46-107.4 99.6 23C479.7 289.7 289.6 479.7 55.1 480z",
        className: "jsx-925935266",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 590
        },
        __self: this
      })), "Liga\xE7\xE3o", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        className: "jsx-925935266" + " " + "svg-inline svg-circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 590
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z",
        className: "jsx-925935266",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 590
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "https://api.whatsapp.com/send?phone=5511930188363",
        className: "jsx-925935266",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 592
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 320 512",
        className: "jsx-925935266" + " " + "svg-inline svg-whatsapp",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 593
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z",
        className: "jsx-925935266",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 593
        },
        __self: this
      })), "Whatsapp", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        className: "jsx-925935266" + " " + "svg-inline svg-circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 593
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z",
        className: "jsx-925935266",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 593
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "mailto:contact@avn.systems",
        className: "jsx-925935266",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 595
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 320 512",
        className: "jsx-925935266" + " " + "svg-inline svg-mail",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 596
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M256 8C118.941 8 8 118.919 8 256c0 137.058 110.919 248 248 248 52.925 0 104.68-17.078 147.092-48.319 5.501-4.052 6.423-11.924 2.095-17.211l-5.074-6.198c-4.018-4.909-11.193-5.883-16.307-2.129C346.93 457.208 301.974 472 256 472c-119.373 0-216-96.607-216-216 0-119.375 96.607-216 216-216 118.445 0 216 80.024 216 200 0 72.873-52.819 108.241-116.065 108.241-19.734 0-23.695-10.816-19.503-33.868l32.07-164.071c1.449-7.411-4.226-14.302-11.777-14.302h-12.421a12 12 0 0 0-11.781 9.718c-2.294 11.846-2.86 13.464-3.861 25.647-11.729-27.078-38.639-43.023-73.375-43.023-68.044 0-133.176 62.95-133.176 157.027 0 61.587 33.915 98.354 90.723 98.354 39.729 0 70.601-24.278 86.633-46.982-1.211 27.786 17.455 42.213 45.975 42.213C453.089 378.954 504 321.729 504 240 504 103.814 393.863 8 256 8zm-37.92 342.627c-36.681 0-58.58-25.108-58.58-67.166 0-74.69 50.765-121.545 97.217-121.545 38.857 0 58.102 27.79 58.102 65.735 0 58.133-38.369 122.976-96.739 122.976z",
        className: "jsx-925935266",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 596
        },
        __self: this
      })), "E-mail", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        className: "jsx-925935266" + " " + "svg-inline svg-circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 596
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z",
        className: "jsx-925935266",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 596
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "sms:11 93018 8363",
        className: "jsx-925935266",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 598
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 320 512",
        className: "jsx-925935266" + " " + "svg-inline svg-mail",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 599
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm16 400c0 8.822-7.178 16-16 16H48c-8.822 0-16-7.178-16-16V80c0-8.822 7.178-16 16-16h352c8.822 0 16 7.178 16 16v352zm-64-304H96c-17.673 0-32 14.327-32 32v192c0 17.673 14.327 32 32 32h256c17.673 0 32-14.327 32-32V160c0-17.673-14.327-32-32-32zm0 32v33.855c-14.136 11.628-36.566 29.664-82.117 65.821C259.426 268.015 238.748 288 224.256 288l-.256-.002-.256.002c-14.492 0-35.17-19.984-45.628-28.324-45.544-36.152-67.978-54.192-82.117-65.822V160H352zM96 352V235.092c14.109 11.367 33.624 26.948 62.221 49.648 13.777 11.01 37.902 35.26 65.523 35.26l.253-.001.258.001c27.529 0 51.392-23.975 65.541-35.274 28.583-22.689 48.099-38.27 62.203-49.634V352H96z",
        className: "jsx-925935266",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 599
        },
        __self: this
      })), "SMS", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        className: "jsx-925935266" + " " + "svg-inline svg-circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 599
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z",
        className: "jsx-925935266",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 599
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "925935266",
        css: "leftmenu.jsx-925935266{top:0;width:100%;left:-340px;height:100vh;display:none;display:block;z-index:10000;position:fixed;max-width:330px;box-shadow:0 0 8px #000;background-color:#1c222e;-webkit-transition:left 350ms ease 0s;-moz-transition:left 350ms ease 0s;-ms-transition:left 350ms ease 0s;-o-transition:left 350ms ease 0s;-webkit-transition:left 350ms ease 0s;transition:left 350ms ease 0s;}leftmenu.jsx-925935266 sidebaruser.jsx-925935266{box-shadow:0 0 6px 4px rgba(0,0,0,.3);touch-action:none;display:block;height:185px;}leftmenu.jsx-925935266 sidebaruser.jsx-925935266 photo.jsx-925935266{background-image:url(".concat("", "/static/images/icons/icon-192x192.png);}leftmenu.jsx-925935266 sidebaruser.jsx-925935266 photo.jsx-925935266{background-color:white;border:2px solid #00f9a6;background-position:center top;text-shadow:1px 1px 5px #000000;box-shadow:1px 1px 5px #000000;margin:15px 0px 0px 15px;background-size:cover;border-radius:50%;position:absolute;height:90px;width:90px;z-index:10;}leftmenu.jsx-925935266 sidebaruser.jsx-925935266 photo.jsx-925935266 title.jsx-925935266{position:relative;min-width:285px;font-size:18px;display:block;color:#fff;top:105px;}leftmenu.jsx-925935266 sidebaruser.jsx-925935266 photo.jsx-925935266 subtitle.jsx-925935266{position:relative;font-size:14px;display:block;width:290px;color:#ccc;top:100px;}leftmenu.jsx-925935266 sidebaruser.jsx-925935266 bgimg.jsx-925935266{background-image:url(").concat("", "/static/images/homepage/background-avn-1.jpg);}leftmenu.jsx-925935266 sidebaruser.jsx-925935266 bgimg.jsx-925935266{background-blend-mode:hard-light;background-position:center;background-color:#a7f7ff;background-size:cover;position:absolute;height:185px;width:100%;}leftmenu.jsx-925935266 sidebaruser.jsx-925935266 bgshadow.jsx-925935266{top:0;left:0;right:0;z-index:9;height:185px;position:absolute;background:linear-gradient(to bottom,rgba(0,0,0,0) 0,rgba(0,0,0,0) 20%,rgba(0,0,0,.1) 40%,rgba(0,0,0,.7) 70%,rgba(0,0,0,1) 100%);}leftmenu.jsx-925935266 menuscroll.jsx-925935266{height:calc(100vh - 235px);touch-action:pan-y;overflow-x:hidden;position:fixed;overflow:auto;width:330px;}leftmenu.jsx-925935266 menuscroll.jsx-925935266 sidebarseparator.jsx-925935266:first-child{margin-top:20px;}leftmenu.jsx-925935266 menuscroll.jsx-925935266 sidebarseparator.jsx-925935266{text-transform:uppercase;margin-bottom:10px;padding-left:20px;margin-top:10px;font-weight:500;font-size:14px;display:block;color:#ccc;}left-enu.jsx-925935266 menuscroll.jsx-925935266 sidebardivider.jsx-925935266{border-top:solid 1px rgba(0,0,0,.2);border-bottom:solid 1px rgba(255,255,255,.03);margin-bottom:20px;margin-top:10px;display:block;}leftmenu.jsx-925935266 menuscroll.jsx-925935266 menuitems.jsx-925935266>btn.jsx-925935266,leftmenu.jsx-925935266 menuscroll.jsx-925935266 menucontact.jsx-925935266>a.jsx-925935266{-webkit-text-decoration:none;text-decoration:none;padding-left:25px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;line-height:55px;cursor:pointer;font-size:15px;display:block;color:#ccc;}leftmenu.jsx-925935266 menuscroll.jsx-925935266 menuitems.jsx-925935266>btn.disable.jsx-925935266,leftmenu.jsx-925935266 menuscroll.jsx-925935266 menucontact.jsx-925935266>a.disable.jsx-925935266{pointer-events:none;opacity:.5;}leftmenu.jsx-925935266 menuscroll.jsx-925935266 menuitems.jsx-925935266>btn.jsx-925935266 .svg-inline.jsx-925935266,leftmenu.jsx-925935266 menuscroll.jsx-925935266 menucontact.jsx-925935266>a.jsx-925935266 .svg-inline.jsx-925935266{vertical-align:-.125em;display:inline-block;overflow:visible;position:relative;margin-right:20px;min-width:25px;color:#b500ff;height:22px;width:auto;top:3px;}leftmenu.jsx-925935266 menuscroll.jsx-925935266 menuitems.jsx-925935266>btn.jsx-925935266 .svg-inline.svg-circle.jsx-925935266,leftmenu.jsx-925935266 menuscroll.jsx-925935266 menucontact.jsx-925935266>a.jsx-925935266 .svg-inline.svg-circle.jsx-925935266{color:#434752;float:right;height:5px;top:25px;}leftmenu.jsx-925935266 menuscroll.jsx-925935266 menuitems.jsx-925935266>btn.jsx-925935266 .svg-inline.svg-terminal.jsx-925935266{color:#434752;float:right;left:-5px;top:18px;}leftmenu.jsx-925935266 menuscroll.jsx-925935266 menuitems.jsx-925935266>btn.jsx-925935266 .svg-inline.svg-tv.jsx-925935266{left:-4px;}leftmenu.jsx-925935266 menuscroll.jsx-925935266 menuitems.jsx-925935266>btn.jsx-925935266 .svg-inline.svg-stores.jsx-925935266{left:-5px;top:2px;}leftmenu.jsx-925935266 menuscroll.jsx-925935266 menuitems.jsx-925935266>btn.jsx-925935266 .svg-inline.svg-restaurantes.jsx-925935266,leftmenu.jsx-925935266 menuscroll.jsx-925935266 menuitems.jsx-925935266>btn.jsx-925935266 .svg-inline.svg-whatsapp.jsx-925935266,leftmenu.jsx-925935266 menuscroll.jsx-925935266 menuitems.jsx-925935266>btn.jsx-925935266 .svg-inline.svg-phone.jsx-925935266,leftmenu.jsx-925935266 menuscroll.jsx-925935266 menuitems.jsx-925935266>btn.jsx-925935266 .svg-inline.svg-mail.jsx-925935266,leftmenu.jsx-925935266 menuscroll.jsx-925935266 menuitems.jsx-925935266>btn.jsx-925935266 .svg-inline.svg-star.jsx-925935266{left:-2px;}leftmenu.jsx-925935266 menuscroll.jsx-925935266 menuitems.jsx-925935266>btn.jsx-925935266:hover,leftmenu.jsx-925935266 menuscroll.jsx-925935266 menucontact.jsx-925935266>a.jsx-925935266:hover{background-color:#232b3a;color:white;}leftmenu.jsx-925935266 menuscroll.jsx-925935266 menuitems.jsx-925935266>btn.jsx-925935266:hover .svg-inline.svg-terminal.jsx-925935266,leftmenu.jsx-925935266 menuscroll.jsx-925935266 menuitems.jsx-925935266>btn.jsx-925935266:hover .svg-inline.svg-circle.jsx-925935266,leftmenu.jsx-925935266 menuscroll.jsx-925935266 menucontact.jsx-925935266>a.jsx-925935266:hover .svg-inline.svg-circle.jsx-925935266{color:white;}leftmenu.jsx-925935266 menuscroll.jsx-925935266 menuitems.jsx-925935266>btn.jsx-925935266>count.jsx-925935266{position:relative;font-weight:bold;font-size:18px;color:#c947ff;right:-25px;float:right;top:-2px;}leftmenu.jsx-925935266 menuscroll.jsx-925935266 menuitems.jsx-925935266>btn.jsx-925935266 submenu.jsx-925935266{width:calc(100% + 25px);position:relative;display:none;left:-25px;}leftmenu.jsx-925935266 menuscroll.jsx-925935266 menuitems.jsx-925935266>btn.jsx-925935266 submenu.jsx-925935266 btn.disable.jsx-925935266{opacity:.5;}leftmenu.jsx-925935266 menuscroll.jsx-925935266 menuitems.jsx-925935266>btn.jsx-925935266 submenu.jsx-925935266 btn.jsx-925935266{padding-left:35px;}leftmenu.jsx-925935266 menuscroll.jsx-925935266 menuitems.jsx-925935266>btn.jsx-925935266 submenu.open.jsx-925935266{display:grid;}leftmenu.jsx-925935266 menuscroll.jsx-925935266 menuitems.jsx-925935266>btn.jsx-925935266:hover submenu.jsx-925935266 btn.jsx-925935266 .svg-inline.svg-circle.jsx-925935266{color:#434752;}leftmenu.jsx-925935266 menuscroll.jsx-925935266 menuitems.jsx-925935266>btn.jsx-925935266:hover submenu.jsx-925935266 btn.jsx-925935266:not(.disable):hover{background-color:#2f3a4e;color:white;}leftmenu.jsx-925935266 menuscroll.jsx-925935266 menuitems.jsx-925935266>btn.jsx-925935266:hover submenu.jsx-925935266 btn.jsx-925935266:not(.disable):hover .svg-inline.svg-circle.jsx-925935266{color:white;}@media (max-width:940px){footer.jsx-925935266 infos.jsx-925935266{display:none;}}@media (min-width:625px){leftmenu.jsx-925935266 menusitemobile.jsx-925935266{display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VidW50dS93b3Jrc3BhY2UvZXN0dWRvL25leHQvY29tcG9uZW50cy9pbnRlcmZhY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMGxCd0IsQUFHMkIsQUFrQmdDLEFBTWtELEFBR2pFLEFBY0wsQUFRQSxBQVE2RSxBQUc5RCxBQVMzQixBQVVxQixBQVFYLEFBR1MsQUFVVyxBQVNmLEFBV0QsQUFLRyxBQWFULEFBTUEsQUFNSixBQUdBLEFBUUEsQUFJZSxBQU1iLEFBR00sQUFTTSxBQU1iLEFBR08sQUFHTCxBQUdDLEFBR1csQUFJYixBQUtLLEFBS0EsTUF0Tk4sQUFxRUosSUFpRlgsQUFHWSxBQVFaLENBNEJBLENBbEJBLEFBa0NBLENBdklZLEFBNkhaLEFBZUksQUFLQSxDQTdFWSxBQU1BLEFBc0RoQixFQS9HQSxDQXRGZ0IsQ0F3Q0ksQUFRRCxBQXlHbkIsQUFvQnFCLEFBa0JyQixFQXhFZSxDQWpERCxFQTVDZSxBQWtHSixDQTBESCxDQTdGQyxBQTJFUCxBQW9DQSxDQTlERCxBQU1ELENBbEVTLEVBN0VOLEVBc0VBLEFBaURqQixFQXZFa0IsQUFVYSxDQWxCWixDQXFJQSxDQTNFK0IsQUE4Q3JDLENBTkEsQUEwQmIsQUFvQ0EsQ0F4THNCLElBZkwsQUFxTEEsRUEvR0ssQUFrQkEsQUFtQ0QsQ0FxQnJCLENBbkVzQixBQTZEdEIsQ0ExRmdCLENBdkJtQixDQWVqQixDQWtFSSxBQW1FSixLQTVLQSxBQXFMSCxDQXRLRyxHQWlDSCxDQVNjLENBa0VQLENBckQrRyxBQWtCakgsQ0FoREwsQ0FxQ0ksQUFnR0gsRUFTaEIsRUE1RXFCLENBekdILENBZUQsQUFpQ0gsSUFSQSxFQXFJRSxFQXJGSSxDQWhFZ0IsQUFxRGxCLEFBOENJLENBMUV0QixFQStDdUIsQ0EvRkosQUFlbkIsQ0F5QkEsQ0FnQjBCLEdBdEMxQixBQTJKYSxLQWhHRyxDQVdHLENBckNuQixFQXdFbUIsQUFtRG5CLENBN0tvQixHQStGQSxJQWxCcEIsRUFyQnNCLEVBZ0NKLEVBakVpQixDQW9HakIsRUExSFUsR0ErRlYsTUFQSCxFQWhDRSxDQW1FRCxLQTNCaEIsR0FQQSxJQXhGNkIsQUF3RGQsQUFtRUEsSUFyR2MsT0FtQzdCLEFBbUVZLElBdEJTLElBdUJyQixNQTVIMEMsSUFzQmhCLEdBZ0ZQLGVBQ0EsSUFoRkcsRUEwQ3RCLFNBdUNrQixDQXZHcUIsTUF1QmpCLE9BaUZQLFdBaEZDLEFBaUZoQixXQXhHc0MsQ0F3QnZCLFdBQ0EsV0FDZixXQXpCcUMsaUNBQ0gsb0VBQ2xDIiwiZmlsZSI6Ii9ob21lL3VidW50dS93b3Jrc3BhY2UvZXN0dWRvL25leHQvY29tcG9uZW50cy9pbnRlcmZhY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKmdsb2JhbCAkIG5hdmlnYXRvciovXG5cbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuXG5pbXBvcnQgTlByb2dyZXNzIGZyb20gJ25wcm9ncmVzcydcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5cblJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlU3RhcnQnLCAodXJsKSA9PiB7XG4gIGNvbnNvbGUubG9nKGBMb2FkaW5nOiAke3VybH1gKVxuICBOUHJvZ3Jlc3Muc3RhcnQoKVxufSlcbi8vIFJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCAoKSA9PiBOUHJvZ3Jlc3MuZG9uZSgpKVxuLy8gUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VFcnJvcicsICgpID0+IE5Qcm9ncmVzcy5kb25lKCkpXG5cbmV4cG9ydCBkZWZhdWx0ICh7IGNoaWxkcmVuLFxuICAgIHRpdGxlID0gJ1RoaXMgaXMgdGhlIGRlZmF1bHQgdGl0bGUnLFxuICAgIFxuICAgIG9nU2l0ZU5hbWUgPSBcImF2bi5zeXN0ZW1zXCIsIG9nVGl0bGUgPSBcIldlYnNpdGUgfCBhdm4uc3lzdGVtc1wiLFxuICAgIG9nVXJsID0gXCJodHRwczovL2F2bi5zeXN0ZW1zXCIsIG9nVHlwZSA9IFwiYXJ0aWNsZVwiLFxuICAgIG9nRGVzY3JpcHRpb24gPSBcIldlYnNpdGUgY3JlYXRlZCB3aXRoIG5leHQuanMgb3B0bWl6ZWQgYXMgYSBQV0FcIixcbiAgICBvZ0ltYWdlID0gJy9zdGF0aWMvaW1hZ2VzL2F2bi5zeXN0ZW1zLm9nLWltYWdlLmpwZycsXG4gICAgXG4gICAgdHdpdHRlclNpdGUgPSBcIkBhdm4uc3lzdGVtc1wiLFxuICAgIHR3aXR0ZXJDcmVhdG9yID0gXCJAYXZuLnN5c3RlbXNcIixcbiAgICBcbiAgICBjYW5vbmljYWwgPSBcImh0dHBzOi8vYXZuLnN5c3RlbXNcIixcbiAgICBmZWVkWG1sID0gXCJodHRwczovL2F2bi5zeXN0ZW1zL2ZlZWQueG1sXCIsXG4gICAgZmVlZEpzb24gPSBcImh0dHBzOi8vYXZuLnN5c3RlbXNtL2ZlZWQuanNvblwiXG4gIH0pID0+IChcbiAgPGludGVyZmFjZT5cbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT57IHRpdGxlIH08L3RpdGxlPlxuICAgICAgPG1ldGEgY2hhclNldD0ndXRmLTgnIC8+XG4gICAgICA8bWV0YSBuYW1lPSd2aWV3cG9ydCcgY29udGVudD0naW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aCcgLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJhdXRob3JcIiBjb250ZW50PVwiQWxsYW4gQXZlbGFyIC0gaHR0cHM6Ly9hbGxhbmF2ZWxhci5jb20vXCIgLz5cbiAgICAgIFxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpzaXRlX25hbWVcIiBjb250ZW50PXsgb2dTaXRlTmFtZSB9IC8+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD17IG9nVGl0bGUgfSAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PXsgb2dVcmwgfSAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0eXBlXCIgY29udGVudD17IG9nVHlwZSB9IC8+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD17IG9nRGVzY3JpcHRpb24gfSAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9eyBwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArIG9nSW1hZ2UgfSAvPlxuICAgIFxuICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6Y2FyZFwiIGNvbnRlbnQ9XCJzdW1tYXJ5X2xhcmdlX2ltYWdlXCIgLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOnNpdGVcIiBjb250ZW50PXsgdHdpdHRlclNpdGUgfSAvPlxuICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6Y3JlYXRvclwiIGNvbnRlbnQ9eyB0d2l0dGVyQ3JlYXRvciB9IC8+XG4gICAgXG4gICAgICA8bGluayByZWw9XCJjYW5vbmljYWxcIiBocmVmPXsgY2Fub25pY2FsIH0gLz5cbiAgICAgIDxsaW5rIHJlbD1cImFsdGVybmF0ZVwiIHR5cGU9XCJhcHBsaWNhdGlvbi9yc3MreG1sXCIgdGl0bGU9eyBvZ1RpdGxlIH0gaHJlZj17IGZlZWRYbWwgfSAvPlxuICAgICAgPGxpbmsgcmVsPVwiYWx0ZXJuYXRlXCIgdHlwZT1cImFwcGxpY2F0aW9uL2pzb25cIiB0aXRsZT17IG9nVGl0bGUgfSBocmVmPXsgZmVlZEpzb24gfSAvPlxuXG4gICAgICA8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCIxMTR4MTE0XCIgaHJlZj17IHByb2Nlc3MuZW52LkJBQ0tFTkRfVVJMICsgJy9zdGF0aWMvaW1hZ2VzL2ljb24ucG5nJ30gLz5cbiAgICAgIDxsaW5rIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBzaXplcz1cIjEyMHgxMjBcIiBocmVmPXsgcHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyAnL3N0YXRpYy9pbWFnZXMvaWNvbi5wbmcnfSAvPlxuICAgICAgPGxpbmsgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIHNpemVzPVwiMTQ0eDE0NFwiIGhyZWY9eyBwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArICcvc3RhdGljL2ltYWdlcy9pY29uLnBuZyd9IC8+XG4gICAgICA8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCIxNTJ4MTUyXCIgaHJlZj17IHByb2Nlc3MuZW52LkJBQ0tFTkRfVVJMICsgJy9zdGF0aWMvaW1hZ2VzL2ljb24ucG5nJ30gLz5cbiAgICAgIDxsaW5rIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBzaXplcz1cIjE4MHgxODBcIiBocmVmPXsgcHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyAnL3N0YXRpYy9pbWFnZXMvaWNvbi5wbmcnfSAvPlxuICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS9wbmdcIiBocmVmPXsgcHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyAnL3N0YXRpYy9pbWFnZXMvaWNvbi5wbmcnfSAvPlxuICAgICAgPGxpbmsgcmVsPVwic2hvcnRjdXQgaWNvblwiIGhyZWY9eyBwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArICcvc3RhdGljL2ltYWdlcy9mYXZpY29uLmljbyd9IC8+XG4gICAgICBcbiAgICAgIDxsaW5rIHJlbD1cIm1hc2staWNvblwiIGhyZWY9XCIvYXNzZXRzL3NhZmFyaS1waW5uZWQtdGFiLnN2Z1wiIGNvbG9yPVwiIzViYmFkNVwiIC8+XG4gICAgICA8bGluayByZWw9XCJtYW5pZmVzdFwiIGhyZWY9eyBwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArICcvc3RhdGljL21hbmlmZXN0Lmpzb24nfSAvPlxuICAgICAgXG4gICAgICA8bWV0YSBuYW1lPVwibXNhcHBsaWNhdGlvbi1UaWxlQ29sb3JcIiBjb250ZW50PVwiIzU3MDBBRVwiIC8+XG4gICAgICA8bWV0YSBuYW1lPVwibXNhcHBsaWNhdGlvbi1UaWxlSW1hZ2VcIiBjb250ZW50PXsgcHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyAnL3N0YXRpYy9pbWFnZXMvYXZuLnN5c3RlbXMub2ctaW1hZ2UuanBnJ30gLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJtc2FwcGxpY2F0aW9uLWNvbmZpZ1wiIGNvbnRlbnQ9eyBwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArICcvc3RhdGljL2Jyb3dzZXJjb25maWcueG1sJ30gLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJ0aGVtZS1jb2xvclwiIGNvbnRlbnQ9XCIjNTcwMEFFXCIgLz5cbiAgICAgIFxuICAgICAgPGxpbmsgZGVmZXIgcmVsPSdzdHlsZXNoZWV0JyBocmVmPSdodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjAuMC1iZXRhLjMvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJyBpbnRlZ3JpdHk9J3NoYTM4NC1adWcrUWlEb0pPclo1dDRsc3NMZHhHaFZydXJibUJXb3BvRWwrTTZCZEVmd25DSlp0S3hpMUtneFV5SnExM2R5JyBjcm9zc09yaWdpbj0nYW5vbnltb3VzJyAvPlxuICAgICAgPGxpbmsgcmVsPSdzdHlsZXNoZWV0JyB0eXBlPSd0ZXh0L2NzcycgaHJlZj17IHByb2Nlc3MuZW52LkJBQ0tFTkRfVVJMICsgJy9zdGF0aWMvY3NzL25wcm9ncmVzcy5jc3MnfSAvPlxuICAgICAgPHNjcmlwdCBkZWZlciBzcmM9XCJodHRwczovL2NvZGUuanF1ZXJ5LmNvbS9qcXVlcnktMy4zLjEubWluLmpzXCI+PC9zY3JpcHQ+XG4gICAgPC9IZWFkPlxuICAgIDxIZWFkZXIgLz5cbiAgICA8TGVmdE1lbnUgLz5cbiAgICA8cGFnZT5cbiAgICAgICAgeyBjaGlsZHJlbiB9XG4gICAgPC9wYWdlPlxuICAgIDxtZW51aGlkZXI+PC9tZW51aGlkZXI+XG4gICAgPEZvb3RlciAvPlxuICAgIDxwYWdlbG9hZGVyPjxiYXI+PC9iYXI+PC9wYWdlbG9hZGVyPlxuICAgIFxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgICAgbWluLXdpZHRoOiAzMjBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgke3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMfS9zdGF0aWMvaW1hZ2VzL2JvZHktYmcuanBnKSAjRjVGN0Y2O1xuICAgICAgICB9XG4gICAgICAgIHBhZ2Uge1xuICAgICAgICAgICAgcGFkZGluZzogMTg1cHggMjBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgICAgICBwcmUgY29kZSB7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGUhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICAgIC5mdGwge1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIH1cbiAgICAgICAgLmZ0ciB7XG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBib2R5LmxlZnQtbWVudSBsZWZ0bWVudSB7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB9XG4gICAgICAgIGJvZHkubGVmdC1tZW51IGhlYWRlciBuYXZ0b2dnbGUge1xuICAgICAgICAgICAgbGVmdDogMzUwcHg7XG4gICAgICAgIH1cbiAgICAgICAgYm9keS5sb2FkZWQgbWVudWhpZGVyIHtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGRpc3BsYXkgMXMgZWFzZSAxcztcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB9XG4gICAgICAgIC5ucHJvZ3Jlc3MtYnVzeSBib2R5LmxvYWRlZCBtZW51aGlkZXIsXG4gICAgICAgIGJvZHkubG9hZGVkLmxlZnQtbWVudSBtZW51aGlkZXIge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB9XG4gICAgICAgIGJvZHkubG9hZGVkIHBhZ2Vsb2FkZXIge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICBtZW51aGlkZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwuNSk7XG4gICAgICAgICAgICBwb2ludGVyLWV2ZW50czogYWxsO1xuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB6LWluZGV4OiAxMDMwO1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlIDBzO1xuICAgICAgICAgICAgLW1vei10cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2UgMHM7XG4gICAgICAgICAgICAtbXMtdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlIDBzO1xuICAgICAgICAgICAgLW8tdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlIDBzO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlIDBzO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAubnByb2dyZXNzLWJ1c3kgYm9keS5sb2FkZWQgcGFnZWxvYWRlciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgICAgICBwYWdlbG9hZGVyIHtcbiAgICAgICAgICAgIG1hcmdpbjogLTE1cHggMCAwIC0xMDBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDA7XG4gICAgICAgICAgICB6LWluZGV4OiA5OTk5OTk5O1xuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIH1cbiAgICAgICAgcGFnZWxvYWRlciBiYXIge1xuICAgICAgICAgICAgbWFyZ2luOiAtMnB4IDAgMCAtODdweDtcbiAgICAgICAgICAgIGFuaW1hdGlvbjogZ3JhZHRyYW5zbGF0ZSAycyBpbmZpbml0ZSBsaW5lYXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhcixsZWZ0IHRvcCxyaWdodCB0b3AsY29sb3Itc3RvcCgwJSx3aGl0ZSksY29sb3Itc3RvcCg1MCUsIzg1MDBGRiksY29sb3Itc3RvcCgxMDAlLHdoaXRlKSk7O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiA0MDBweCAxcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODUwMEZGO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgd2lkdGg6IDE3NHB4O1xuICAgICAgICAgICAgb3BhY2l0eTogLjg7XG4gICAgICAgICAgICBoZWlnaHQ6IDRweDtcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBib2R5LmxvYWRlZCBsZWZ0bWVudSxcbiAgICAgICAgYm9keS5sb2FkZWQgaGVhZGVyLFxuICAgICAgICBib2R5LmxvYWRlZCBmb290ZXIsXG4gICAgICAgIGJvZHkubG9hZGVkIHBhZ2Uge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM5OXB4KSB7XG4gICAgICAgICAgICBib2R5LmxlZnQtbWVudSBsZWZ0bWVudSwgbGVmdG1lbnUgbWVudXNjcm9sbCB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDY5cHgpIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDMzMHB4O1xuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMjYwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvaW50ZXJmYWNlPlxuKVxuXG5leHBvcnQgY2xhc3MgSGVhZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgICAgIGlmICgnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSB7XG4gICAgICAgIC8vIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyXG4gICAgICAgIC8vICAgLnJlZ2lzdGVyKHByb2Nlc3MuZW52LkJBQ0tFTkRfVVJMICsnL3NlcnZpY2Utd29ya2VyLmpzJylcbiAgICAgICAgLy8gICAudGhlbihyZWdpc3RyYXRpb24gPT4ge1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coJ3NlcnZpY2Ugd29ya2VyIHJlZ2lzdHJhdGlvbiBzdWNjZXNzZnVsJylcbiAgICAgICAgLy8gICB9KVxuICAgICAgICAvLyAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAvLyAgICAgY29uc29sZS53YXJuKCdzZXJ2aWNlIHdvcmtlciByZWdpc3RyYXRpb24gZmFpbGVkJywgZXJyLm1lc3NhZ2UpXG4gICAgICAgIC8vICAgfSlcbiAgICAgICAgfVxuICAgICAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJCh3aW5kb3cpLnNjcm9sbFRvcCgpID4gMCAmJiAkKHdpbmRvdykud2lkdGgoKSA+IDU1MCA/ICQoXCJoZWFkZXJcIikuYWRkQ2xhc3MoXCJyZXNpemVcIikgOiAkKFwiaGVhZGVyXCIpLnJlbW92ZUNsYXNzKFwicmVzaXplXCIpXG4gICAgICAgIH0pXG4gICAgICAgICQod2luZG93KS5vbignbG9hZCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJCgnYm9keScpLmFkZENsYXNzKFwibG9hZGVkXCIpXG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgICAgICAkKFwiaGVhZGVyIG5hdiBhXCIpLmhvdmVyKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJChcImhlYWRlciBuYXZzbGlkZXJcIikuY3NzKHtcbiAgICAgICAgICAgICAgICBsZWZ0OiAkKHRoaXMpLnBvc2l0aW9uKCkubGVmdCArIHBhcnNlSW50KCQodGhpcykuY3NzKFwibWFyZ2luTGVmdFwiKSkgKyBcInB4XCIsXG4gICAgICAgICAgICAgICAgd2lkdGg6ICQodGhpcykud2lkdGgoKSArIFwicHhcIixcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiBcIi45OTlcIlxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKFwiaGVhZGVyIG5hdnNsaWRlclwiKS5jc3MoXCJvcGFjaXR5XCIsIFwiMFwiKVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmVuZGVyICgpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgICAgICAgPGxvZ28+PHRleHQ+QVZOIFNZU1RFTVM8L3RleHQ+PC9sb2dvPlxuICAgICAgICAgICAgICAgIDxuYXY+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nIGFzPXsgcHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyBgL2B9PjxhPkhvbWU8L2E+PC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvYWJvdXQnIGFzPXsgcHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyBgL2Fib3V0YH0+PGE+QWJvdXQ8L2E+PC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvdHZtYXplJyBhcz17IHByb2Nlc3MuZW52LkJBQ0tFTkRfVVJMICsgYC90dm1hemVgfT48YT5UViBNYXplPC9hPjwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nLzQwNCcgYXM9eyBwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArIGAvNDA0YH0+PGE+NDA0PC9hPjwvTGluaz5cbiAgICAgICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICAgICAgICA8bmF2dG9nZ2xlPjxiYXI+PC9iYXI+PGJhcj48L2Jhcj48YmFyPjwvYmFyPjwvbmF2dG9nZ2xlPlxuICAgICAgICAgICAgICAgIDxuYXZzbGlkZXI+PC9uYXZzbGlkZXI+XG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgICAgICBoZWFkZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwMDAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogOTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlciBsb2dvIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE2cHggMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE3MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogOTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7cHJvY2Vzcy5lbnYuQkFDS0VORF9VUkx9L3N0YXRpYy9pbWFnZXMvaWNvbi5wbmcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjogZ3JheTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMTUwbXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAxNTBtcyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMTUwbXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAtby10cmFuc2l0aW9uOiBhbGwgMTUwbXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMTUwbXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyIGxvZ286aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1maWx0ZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAtbW96LWZpbHRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC1vLWZpbHRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBoZWFkZXIgbG9nbyB0ZXh0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtaW5saW5lLWJveDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDExMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM1ZjVmNWY7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiA2MHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlciBuYXYge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyIG5hdiBhIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDI1cHggMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZDlkOWQ5O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlciBuYXYgYTpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzg1MDBGRjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBoZWFkZXIgbmF2dG9nZ2xlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0NXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBoZWFkZXIgbmF2dG9nZ2xlIGJhciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2FhYTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA3cHggMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyIG5hdnRvZ2dsZTpob3ZlciBiYXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNiYzczZmY7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyIG5hdnNsaWRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiA0cHggc29saWQgIzg1MDBGRjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogNTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMjUwbXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAyNTBtcyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMjUwbXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAtby10cmFuc2l0aW9uOiBhbGwgMjUwbXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMjUwbXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MjVweCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDU4cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXIgbG9nbyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogY2FsYyg1MCUgLSA4NXB4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWZpbHRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtbW96LWZpbHRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtby1maWx0ZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyIG5hdiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlciBuYXZ0b2dnbGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGb290ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbXBvbmVudERpZE1vdW50ICgpIHtcbiAgICAgICAgXG4gICAgfVxuICAgIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGZvb3Rlcj5cbiAgICAgICAgICAgIDxsaWdodC1yaWdodD48L2xpZ2h0LXJpZ2h0PlxuICAgICAgICAgICAgPHZlcnNpb24gY2xhc3NOYW1lPVwiZnRsXCI+dmVyc2lvbjogPGl0ZW0+Mi4xLjAxPC9pdGVtPjwvdmVyc2lvbj5cbiAgICAgICAgICAgIDxpbmZvcyBjbGFzc05hbWU9XCJmdGxcIj5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9hZG1pbi5hdm4uc3lzdGVtcy92MS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj48bG9naW4+8J+UkCBDTElFTlQgTE9HSU48L2xvZ2luPjwvYT4gfCA8Y2xpY2tpdGVtPjxpdGVtPkxPQ0FMOjwvaXRlbT4gV09STERXSURFPC9jbGlja2l0ZW0+IHwgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9hdm5zeXN0ZW1zXCIgdGFyZ2V0PVwiX2JsYW5rXCI+PGl0ZW0+R0lUSFVCLzwvaXRlbT5BVk5TWVNURU1TPC9hPiB8IDxhIGhyZWY9XCJtYWlsdG86bXlhcHBAYXZuLnN5c3RlbXNcIj48aXRlbT5FLU1BSUw6PC9pdGVtPiBDT05UQUNUQEFWTi5TWVNURU1TPC9hPlxuICAgICAgICAgICAgPC9pbmZvcz5cbiAgICAgICAgICAgIDxsYW5ndWFnZSBjbGFzc05hbWU9XCJmdHJcIj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmbGFnLWljb24gZmxhZy1pY29uLXVzIHNlbGVjdGVkIGZ0clwiPjwvaT5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48YT5FbmdsaXNoPGkgY2xhc3NOYW1lPVwiZmxhZy1pY29uIGZsYWctaWNvbi11c1wiPjwvaT48L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImRpc2FibGVcIj48YT5TcGFuaXNoPGkgY2xhc3NOYW1lPVwiZmxhZy1pY29uIGZsYWctaWNvbi1lc1wiPjwvaT48L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImRpc2FibGVcIj48YT5GcmVuY2g8aSBjbGFzc05hbWU9XCJmbGFnLWljb24gZmxhZy1pY29uLWZyXCI+PC9pPjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZGlzYWJsZVwiPjxhPlBvcnR1Z3Vlc2U8aSBjbGFzc05hbWU9XCJmbGFnLWljb24gZmxhZy1pY29uLWJyXCI+PC9pPjwvYT48L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2xhbmd1YWdlPlxuICAgICAgICAgICAgPGNvcHlyaWdodCBjbGFzc05hbWU9XCJmdHJcIj5Db3B5cmlnaHQgPGl0ZW0+MjAxNzwvaXRlbT48L2NvcHlyaWdodD5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICBmb290ZXIge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJHtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTH0vc3RhdGljL2ltYWdlcy9mb290ZXIuanBnKTtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDAwMDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzN3B4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgICAgICB3ZWJraXQtYm94LXNoYWRvdzogMCAtMXB4IDEwcHggMCByZ2IoMCwgMCwgMCk7XG4gICAgICAgICAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogMCAtMXB4IDEwcHggMCByZ2IoMCwgMCwgMCk7XG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgLTFweCAxMHB4IDAgcmdiKDAsIDAsIDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb290ZXIgY29weXJpZ2h0LCBmb290ZXIgdmVyc2lvbiB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEycHggMTVweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjYmM3NGZmO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb290ZXIgY29weXJpZ2h0ID4gaXRlbSwgZm9vdGVyIHZlcnNpb24gPiBpdGVtLCBmb290ZXIgaW5mb3MgaXRlbSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjQUJBNDlBO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb290ZXIgaW5mb3Mge1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiBjYWxjKDUwJSAtIDIyMXB4KTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNzc2RTYzO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZvb3RlciBpbmZvcyBhIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNzc2RTYzO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZvb3RlciBpbmZvcyA+IGEgPiBsb2dpbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2RjOWQwMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmb290ZXIgaW5mb3MgYTpob3ZlciwgZm9vdGVyIGluZm9zIGE6aG92ZXIgbG9naW4sIGZvb3RlciBpbmZvcyBjbGlja2l0ZW06aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNiYzc0ZmY7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb290ZXIgbGFuZ3VhZ2UgaS5mbGFnLWljb24ge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDdweCAxNXB4IDBweCAwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb290ZXIgbGFuZ3VhZ2UgaS5mbGFnLWljb24tdXMge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTH0vc3RhdGljL2ltYWdlcy9mbGFncy91c2EucG5nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9vdGVyIGxhbmd1YWdlIGkuZmxhZy1pY29uLWVzIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7cHJvY2Vzcy5lbnYuQkFDS0VORF9VUkx9L3N0YXRpYy9pbWFnZXMvZmxhZ3Mvc3BhaW4ucG5nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9vdGVyIGxhbmd1YWdlIGkuZmxhZy1pY29uLWZyIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7cHJvY2Vzcy5lbnYuQkFDS0VORF9VUkx9L3N0YXRpYy9pbWFnZXMvZmxhZ3MvZnJhbmNlLnBuZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvb3RlciBsYW5ndWFnZSBpLmZsYWctaWNvbi1iciB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMfS9zdGF0aWMvaW1hZ2VzL2ZsYWdzL2JyYXppbC5wbmcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb290ZXIgbGFuZ3VhZ2U6aG92ZXIgdWwge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAxNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb290ZXIgbGFuZ3VhZ2UgdWwge1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICMwMzFjNDU7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAjMDMxYzQ1O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMTVweCA1cHggMDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzI5MjgyNjtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvb3RlciBsYW5ndWFnZSB1bCBsaSB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9vdGVyIGxhbmd1YWdlIHVsIGxpLmRpc2FibGUgYSB7XG4gICAgICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzgyODA3ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9vdGVyIGxhbmd1YWdlIHVsIGxpLmRpc2FibGUgYSA+IGkuZmxhZy1pY29uIHtcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1maWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvb3RlciBsYW5ndWFnZSB1bCBsaSBhIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDEwcHggMCAxNXB4O1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNiYzc0ZmY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvb3RlciBsYW5ndWFnZSB1bCBsaSBhOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvb3RlciBsYW5ndWFnZSB1bCBsaSBhID4gaS5mbGFnLWljb24ge1xuICAgICAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk0MHB4KSB7XG4gICAgICAgICAgICAgICAgICAgIGZvb3RlciBpbmZvcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MjVweCkge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9mb290ZXI+XG4gICAgKX1cbn1cblxuZXhwb3J0IGNsYXNzIExlZnRNZW51IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgICAgICQoXCJsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0bi5zdWJtZW51LWhhcy1udW1iZXJzXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgaWYgKCQoZS50YXJnZXQpLmhhc0NsYXNzKCdkaXNhYmxlJykpIHtcbiAgICAgICAgICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKCQoZS50YXJnZXQpLmF0dHIoJ2hyZWYnKSkge1xuICAgICAgICAgICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnbGVmdC1tZW51Jyk7XG4gICAgICAgICAgICAgICAgLy9yZXR1cm4gJC5mbi5uYXZpZ2F0ZShlLnRhcmdldCwgZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQodGhpcykuZmluZCgnc3VibWVudScpLnRvZ2dsZUNsYXNzKFwib3BlblwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgJChcImhlYWRlciBuYXZ0b2dnbGUsIG1lbnVoaWRlclwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICQoJ2JvZHknKS50b2dnbGVDbGFzcygnbGVmdC1tZW51Jyk7XG4gICAgICAgIH0pXG4gICAgfVxuICAgIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGxlZnRtZW51PlxuICAgIFx0XHQ8c2lkZWJhcnVzZXI+XG4gICAgXHQgICAgICAgIDxwaG90bz5cbiAgICBcdCAgICAgICAgICAgIDx0aXRsZT5Cb2Egbm9pdGUuIOKYhTwvdGl0bGU+XG4gICAgXHQgICAgICAgICAgICA8c3VidGl0bGU+RW50cmUgY29tIHNldSBsb2dpbiBvdSBjYWRhc3RyZS1zZSE8L3N1YnRpdGxlPlxuICAgIFx0ICAgICAgICA8L3Bob3RvPlxuICAgIFx0XHQgICAgPGJnaW1nPjwvYmdpbWc+XG4gICAgXHRcdCAgICA8YmdzaGFkb3c+PC9iZ3NoYWRvdz5cbiAgICBcdFx0PC9zaWRlYmFydXNlcj5cbiAgICBcdFx0PG1lbnVzY3JvbGw+XG4gICAgICAgICAgICAgICAgPHNpZGViYXJzZXBhcmF0b3I+QWNlc3NvIFJlc3RyaXRvPC9zaWRlYmFyc2VwYXJhdG9yPlxuICAgICAgICAgICAgICAgIDxtZW51aXRlbXM+XG4gICAgICAgICAgICAgICAgICAgIDxidG4gaHJlZj1cIi8vYWRtaW4uYXZuLnN5c3RlbXNcIiB0YXJnZXQ9XCJfc2VsZlwiPlxuICAgICAgICAgICAgICAgICAgICBcdDxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMTQ0IDExMnY1MS42SDQ4Yy0yNi41IDAtNDggMjEuNS00OCA0OHY4OC42YzAgMjYuNSAyMS41IDQ4IDQ4IDQ4aDk2djUxLjZjMCA0Mi42IDUxLjcgNjQuMiA4MS45IDMzLjlsMTQ0LTE0My45YzE4LjctMTguNyAxOC43LTQ5LjEgMC02Ny45bC0xNDQtMTQ0QzE5NS44IDQ4IDE0NCA2OS4zIDE0NCAxMTJ6bTE5MiAxNDRMMTkyIDQwMHYtOTkuN0g0OHYtODguNmgxNDRWMTEybDE0NCAxNDR6bTgwIDE5MmgtODRjLTYuNiAwLTEyLTUuNC0xMi0xMnYtMjRjMC02LjYgNS40LTEyIDEyLTEyaDg0YzI2LjUgMCA0OC0yMS41IDQ4LTQ4VjE2MGMwLTI2LjUtMjEuNS00OC00OC00OGgtODRjLTYuNiAwLTEyLTUuNC0xMi0xMlY3NmMwLTYuNiA1LjQtMTIgMTItMTJoODRjNTMgMCA5NiA0MyA5NiA5NnYxOTJjMCA1My00MyA5Ni05NiA5NnpcIiBjbGFzc05hbWU9XCJcIj48L3BhdGg+PC9zdmc+RW50cmFyPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6XCI+PC9wYXRoPjwvc3ZnPjwvYnRuPlxuICAgICAgICAgICAgICAgICAgICA8YnRuIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiZGlzYWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICBcdDxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1NzYgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjg4IDIwOGMtNDQuMiAwLTgwIDM1LjgtODAgODBzMzUuOCA4MCA4MCA4MCA4MC0zNS44IDgwLTgwLTM1LjgtODAtODAtODB6bTAgMTI4Yy0yNi41IDAtNDgtMjEuNS00OC00OHMyMS41LTQ4IDQ4LTQ4IDQ4IDIxLjUgNDggNDgtMjEuNSA0OC00OCA0OHpNNTEyIDY0SDM1MlYzMmMwLTE3LjctMTQuMy0zMi0zMi0zMmgtNjRjLTE3LjcgMC0zMiAxNC4zLTMyIDMydjMySDY0QzI4LjcgNjQgMCA5Mi43IDAgMTI4djMyMGMwIDM1LjMgMjguNyA2NCA2NCA2NGg0NDhjMzUuMyAwIDY0LTI4LjcgNjQtNjRWMTI4YzAtMzUuMy0yOC43LTY0LTY0LTY0ek0yNTYgMzJoNjR2OTZoLTY0VjMyem0xMjggNDQ4SDE5MnYtMjEuOWMwLTkgMi42LTE3LjYgNy42LTI1IDcuMi0xMC43IDIwLjMtMTcuMiAzNS0xNy4yIDE1LjkgMCAyMy41IDggNTMuNCA4czM3LjYtOCA1My40LThjMTQuNyAwIDI3LjcgNi40IDM1IDE3LjIgNSA3LjQgNy42IDE2IDcuNiAyNVY0ODB6bTE2MC0zMmMwIDE3LjYtMTQuNCAzMi0zMiAzMmgtOTZ2LTIxLjljMC0xNS45LTQuOC0zMC42LTEzLTQyLjgtMTMuOC0yMC41LTM3LjMtMzEuMy02MS41LTMxLjMtMjIuMiAwLTI3LjggOC01My40IDgtMjUuNiAwLTMxLjItOC01My40LTgtMjQuMiAwLTQ3LjcgMTAuOC02MS41IDMxLjMtOC4yIDEyLjItMTMgMjctMTMgNDIuOFY0ODBINjRjLTE3LjYgMC0zMi0xNC40LTMyLTMyVjEyOGMwLTE3LjYgMTQuNC0zMiAzMi0zMmgxNjB2NjRoMTI4Vjk2aDE2MGMxNy42IDAgMzIgMTQuNCAzMiAzMnYzMjB6XCIgY2xhc3NOYW1lPVwiXCI+PC9wYXRoPjwvc3ZnPkNhZGFzdHJhci1zZTxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctY2lyY2xlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNTYgOEMxMTkgOCA4IDExOSA4IDI1NnMxMTEgMjQ4IDI0OCAyNDggMjQ4LTExMSAyNDgtMjQ4UzM5MyA4IDI1NiA4elwiPjwvcGF0aD48L3N2Zz48L2J0bj5cbiAgICAgICAgICAgICAgICA8L21lbnVpdGVtcz5cbiAgICAgICAgICAgICAgICA8c2lkZWJhcmRpdmlkZXI+PC9zaWRlYmFyZGl2aWRlcj5cbiAgICBcdFx0XHQ8bWVudXNpdGVtb2JpbGU+XG4gICAgXHQgICAgICAgICAgICA8c2lkZWJhcnNlcGFyYXRvcj5XZWJzaXRlIE1lbnU8L3NpZGViYXJzZXBhcmF0b3I+XG4gICAgXHQgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtaXRlbXMgbWVudS1pY29uc1wiPlxuICAgIFx0ICAgICAgICAgICAgICAgIFxuICAgIFx0ICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgXHQ8c2lkZWJhcmRpdmlkZXI+PC9zaWRlYmFyZGl2aWRlcj5cbiAgICAgICAgICAgICAgICA8L21lbnVzaXRlbW9iaWxlPlxuICAgICAgICAgICAgICAgIDxzaWRlYmFyc2VwYXJhdG9yPk1ZQVBQIE1vZGVsczwvc2lkZWJhcnNlcGFyYXRvcj5cbiAgICAgICAgICAgICAgICA8bWVudWl0ZW1zPlxuICAgICAgICAgICAgICAgICAgICA8YnRuIGhyZWY9XCIuL1wiPjxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctbW9iaWxlLWFsdFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMTkyIDQxNmMwIDE3LjctMTQuMyAzMi0zMiAzMnMtMzItMTQuMy0zMi0zMiAxNC4zLTMyIDMyLTMyIDMyIDE0LjMgMzIgMzJ6bTQ4LTYwVjkyYzAtNi42LTUuNC0xMi0xMi0xMkg5MmMtNi42IDAtMTIgNS40LTEyIDEydjI2NGMwIDYuNiA1LjQgMTIgMTIgMTJoMTM2YzYuNiAwIDEyLTUuNCAxMi0xMnptODAtMzA4djQxNmMwIDI2LjUtMjEuNSA0OC00OCA0OEg0OGMtMjYuNSAwLTQ4LTIxLjUtNDgtNDhWNDhDMCAyMS41IDIxLjUgMCA0OCAwaDIyNGMyNi41IDAgNDggMjEuNSA0OCA0OHptLTQ4IDQxMFY1NGMwLTMuMy0yLjctNi02LTZINTRjLTMuMyAwLTYgMi43LTYgNnY0MDRjMCAzLjMgMi43IDYgNiA2aDIxMmMzLjMgMCA2LTIuNyA2LTZ6XCI+PC9wYXRoPjwvc3ZnPkFib3V0IE15IEFwcDxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctY2lyY2xlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNTYgOEMxMTkgOCA4IDExOSA4IDI1NnMxMTEgMjQ4IDI0OCAyNDggMjQ4LTExMSAyNDgtMjQ4UzM5MyA4IDI1NiA4elwiPjwvcGF0aD48L3N2Zz48L2J0bj5cbiAgICAgICAgICAgICAgICAgICAgPGJ0biBjbGFzc05hbWU9XCJzdWJtZW51LWhhcy1udW1iZXJzXCI+XG4gICAgICAgICAgICAgICAgICAgIFx0PHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy10dlwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNNDAwIDI0NHYtOGMwLTYuNiA1LjQtMTIgMTItMTJoOGM2LjYgMCAxMiA1LjQgMTIgMTJ2OGMwIDYuNi01LjQgMTItMTIgMTJoLThjLTYuNiAwLTEyLTUuNC0xMi0xMnptMTIgNzZoOGM2LjYgMCAxMi01LjQgMTItMTJ2LThjMC02LjYtNS40LTEyLTEyLTEyaC04Yy02LjYgMC0xMiA1LjQtMTIgMTJ2OGMwIDYuNiA1LjQgMTIgMTIgMTJ6bS0zNi0xMzYuNXMtMS41LTcuNS0xNDQtNy41LTE0NC41IDcuNS0xNDQuNSA3LjVTODAgMTg0IDgwIDI4OHM3LjUgMTA0LjUgNy41IDEwNC41Uzg4IDQwMCAyMzIgNDAwczE0NC03LjUgMTQ0LTcuNSA3LjUtLjUgNy41LTEwNC41LTcuNS0xMDQuNS03LjUtMTA0LjV6TTUxMiAxNDR2Mjg4YzAgMjYuNS0yMS41IDQ4LTQ4IDQ4aC0xNnYzMmgtNDhsLTEwLjctMzJIMTIyLjdMMTEyIDUxMkg2NHYtMzJINDhjLTI2LjUgMC00OC0yMS41LTQ4LTQ4VjE0NGMwLTI2LjUgMjEuNS00OCA0OC00OGgxNDAuOWwtNTQtNTUuMmMtOS4zLTkuNS05LjEtMjQuNy4zLTMzLjkgOS41LTkuMyAyNC43LTkuMSAzMy45LjNMMjU2IDk2bDg2LjktODguOGM5LjMtOS41IDI0LjUtOS42IDMzLjktLjMgOS41IDkuMyA5LjYgMjQuNS4zIDMzLjlsLTU0IDU1LjJINDY0YzI2LjUgMCA0OCAyMS41IDQ4IDQ4em0tNDggMEg0OHYyODhoNDE2VjE0NHpcIj48L3BhdGg+PC9zdmc+Q29tbXVuaWNhdGlvbjxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctdGVybWluYWxcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIwIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTM0LjQ5NSAzNi40NjVsMjExLjA1MSAyMTEuMDVjNC42ODYgNC42ODYgNC42ODYgMTIuMjg0IDAgMTYuOTcxTDM0LjQ5NSA0NzUuNTM1Yy00LjY4NiA0LjY4Ni0xMi4yODQgNC42ODYtMTYuOTcgMGwtNy4wNzEtNy4wN2MtNC42ODYtNC42ODYtNC42ODYtMTIuMjg0IDAtMTYuOTcxTDIwNS45NDcgMjU2IDEwLjQ1NCA2MC41MDZjLTQuNjg2LTQuNjg2LTQuNjg2LTEyLjI4NCAwLTE2Ljk3MWw3LjA3MS03LjA3YzQuNjg2LTQuNjg3IDEyLjI4NC00LjY4NyAxNi45NyAwek02NDAgNDY4di0xMGMwLTYuNjI3LTUuMzczLTEyLTEyLTEySDMwMGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnYxMGMwIDYuNjI3IDUuMzczIDEyIDEyIDEyaDMyOGM2LjYyNyAwIDEyLTUuMzczIDEyLTEyelwiPjwvcGF0aD48L3N2Zz48Y291bnQ+NDwvY291bnQ+XG4gICAgXHQgICAgICAgICAgICAgICAgPHN1Ym1lbnU+XG4gICAgXHQgICAgICAgICAgICAgICAgICAgIDxidG4gY2xhc3NOYW1lPVwiZGlzYWJsZVwiPjxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctYW5nbGUtcmlnaHRcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIwIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTIyNC4zIDI3M2wtMTM2IDEzNmMtOS40IDkuNC0yNC42IDkuNC0zMy45IDBsLTIyLjYtMjIuNmMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlsOTYuNC05Ni40LTk2LjQtOTYuNGMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlMNTQuMyAxMDNjOS40LTkuNCAyNC42LTkuNCAzMy45IDBsMTM2IDEzNmM5LjUgOS40IDkuNSAyNC42LjEgMzR6XCI+PC9wYXRoPjwvc3ZnPkFnw6puY2lhcyBlIFByb2R1dG9yYXM8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWNpcmNsZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjU2IDhDMTE5IDggOCAxMTkgOCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzOTMgOCAyNTYgOHpcIj48L3BhdGg+PC9zdmc+PC9idG4+XG4gICAgXHQgICAgICAgICAgICAgICAgICAgIDxidG4gaHJlZj1cIi4vdGhlbWVzL3Byb2R1dG9yYXMvXCI+PHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1hbmdsZS1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjI0LjMgMjczbC0xMzYgMTM2Yy05LjQgOS40LTI0LjYgOS40LTMzLjkgMGwtMjIuNi0yMi42Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOWw5Ni40LTk2LjQtOTYuNC05Ni40Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOUw1NC4zIDEwM2M5LjQtOS40IDI0LjYtOS40IDMzLjkgMGwxMzYgMTM2YzkuNSA5LjQgOS41IDI0LjYuMSAzNHpcIj48L3BhdGg+PC9zdmc+UHJvbW/Dp8OjbyBlIEV2ZW50b3M8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWNpcmNsZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjU2IDhDMTE5IDggOCAxMTkgOCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzOTMgOCAyNTYgOHpcIj48L3BhdGg+PC9zdmc+PC9idG4+XG4gICAgXHQgICAgICAgICAgICAgICAgICAgIDxidG4gaHJlZj1cIi4vdGhlbWVzL3N1cGVydHYvXCI+PHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1hbmdsZS1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjI0LjMgMjczbC0xMzYgMTM2Yy05LjQgOS40LTI0LjYgOS40LTMzLjkgMGwtMjIuNi0yMi42Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOWw5Ni40LTk2LjQtOTYuNC05Ni40Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOUw1NC4zIDEwM2M5LjQtOS40IDI0LjYtOS40IDMzLjkgMGwxMzYgMTM2YzkuNSA5LjQgOS41IDI0LjYuMSAzNHpcIj48L3BhdGg+PC9zdmc+RW1pc3NvcmEgVFY8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWNpcmNsZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjU2IDhDMTE5IDggOCAxMTkgOCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzOTMgOCAyNTYgOHpcIj48L3BhdGg+PC9zdmc+PC9idG4+XG4gICAgXHQgICAgICAgICAgICAgICAgICAgIDxidG4gY2xhc3NOYW1lPVwiZGlzYWJsZVwiPjxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctYW5nbGUtcmlnaHRcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIwIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTIyNC4zIDI3M2wtMTM2IDEzNmMtOS40IDkuNC0yNC42IDkuNC0zMy45IDBsLTIyLjYtMjIuNmMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlsOTYuNC05Ni40LTk2LjQtOTYuNGMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlMNTQuMyAxMDNjOS40LTkuNCAyNC42LTkuNCAzMy45IDBsMTM2IDEzNmM5LjUgOS40IDkuNSAyNC42LjEgMzR6XCI+PC9wYXRoPjwvc3ZnPlLDoWRpb3M8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWNpcmNsZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjU2IDhDMTE5IDggOCAxMTkgOCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzOTMgOCAyNTYgOHpcIj48L3BhdGg+PC9zdmc+PC9idG4+XG4gICAgXHQgICAgICAgICAgICAgICAgPC9zdWJtZW51PlxuICAgIFx0ICAgICAgICAgICAgPC9idG4+XG4gICAgICAgICAgICAgICAgICAgIDxidG4gY2xhc3NOYW1lPVwic3VibWVudS1oYXMtbnVtYmVyc1wiPlxuICAgICAgICAgICAgICAgICAgICBcdDxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctc3RhclwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjI0IDI4OGM3OS41IDAgMTQ0LTY0LjUgMTQ0LTE0NFMzMDMuNSAwIDIyNCAwIDgwIDY0LjUgODAgMTQ0czY0LjUgMTQ0IDE0NCAxNDR6bTAtMjQwYzUyLjkgMCA5NiA0My4xIDk2IDk2cy00My4xIDk2LTk2IDk2LTk2LTQzLjEtOTYtOTYgNDMuMS05NiA5Ni05NnptODkuNiAyNTZjLTExIDAtMjEuOCAyLjYtMzIuMiA2LjItMTggNi4zLTM3LjMgOS44LTU3LjQgOS44cy0zOS40LTMuNS01Ny40LTkuOGMtMTAuNC0zLjYtMjEuMi02LjItMzIuMi02LjJDNjAuMiAzMDQgMCAzNjQuMiAwIDQzOC40VjQ4OGMwIDEzLjMgMTAuNyAyNCAyNCAyNHMyNC0xMC43IDI0LTI0di00OS42YzAtNDUuNSAzNS40LTgyLjQgODAtODUuOHY1MGMtMjMuMSA2LjktNDAgMjguMS00MCA1My40IDAgMzAuOSAyNS4xIDU2IDU2IDU2czU2LTI1LjEgNTYtNTZjMC0yNS4zLTE2LjktNDYuNS00MC01My40di00NC43YzIwLjggNi4zIDQyLjMgMTAuMSA2NCAxMC4xIDIxLjggMCA0My4yLTMuOCA2NC0xMC4xdjM2LjNjLTI4LjIgNy41LTQ4IDM0LjUtNDggNjQuNlY0ODhjMCA0LjIgMS43IDguMyA0LjcgMTEuM2wxMC4zIDEwLjNjMy4xIDMuMSA4LjIgMy4xIDExLjMgMGwxMS4zLTExLjNjMy4xLTMuMSAzLjEtOC4yIDAtMTEuM2wtNS43LTUuN1Y0NTZjMC0xOS40IDE3LjQtMzQuOCAzNy40LTMxLjYgMTUuNyAyLjYgMjYuNiAxNy40IDI2LjYgMzMuM3YyMy42bC01LjcgNS43Yy0zLjEgMy4xLTMuMSA4LjIgMCAxMS4zbDExLjMgMTEuM2MzLjEgMy4xIDguMiAzLjEgMTEuMyAwbDEwLjMtMTAuM2MzLTMgNC43LTcuMSA0LjctMTEuM3YtMzJjMC0yOS43LTIwLjUtNTQuNS00OC02MS42di00MS43YzQ0LjYgMy4zIDgwIDQwLjMgODAgODUuOFY0ODhjMCAxMy4zIDEwLjcgMjQgMjQgMjRzMjQtMTAuNyAyNC0yNHYtNDkuNmMuMi03NC4yLTYwLTEzNC40LTEzNC4yLTEzNC40ek0xNjggNDU2YzAgMTMuMy0xMC43IDI0LTI0IDI0cy0yNC0xMC43LTI0LTI0IDEwLjctMjQgMjQtMjQgMjQgMTAuNyAyNCAyNHpcIj48L3BhdGg+PC9zdmc+UHJvZmlzc2lvbmFsczxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctdGVybWluYWxcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIwIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTM0LjQ5NSAzNi40NjVsMjExLjA1MSAyMTEuMDVjNC42ODYgNC42ODYgNC42ODYgMTIuMjg0IDAgMTYuOTcxTDM0LjQ5NSA0NzUuNTM1Yy00LjY4NiA0LjY4Ni0xMi4yODQgNC42ODYtMTYuOTcgMGwtNy4wNzEtNy4wN2MtNC42ODYtNC42ODYtNC42ODYtMTIuMjg0IDAtMTYuOTcxTDIwNS45NDcgMjU2IDEwLjQ1NCA2MC41MDZjLTQuNjg2LTQuNjg2LTQuNjg2LTEyLjI4NCAwLTE2Ljk3MWw3LjA3MS03LjA3YzQuNjg2LTQuNjg3IDEyLjI4NC00LjY4NyAxNi45NyAwek02NDAgNDY4di0xMGMwLTYuNjI3LTUuMzczLTEyLTEyLTEySDMwMGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnYxMGMwIDYuNjI3IDUuMzczIDEyIDEyIDEyaDMyOGM2LjYyNyAwIDEyLTUuMzczIDEyLTEyelwiPjwvcGF0aD48L3N2Zz48Y291bnQ+NjwvY291bnQ+XG4gICAgXHQgICAgICAgICAgICAgICAgPHN1Ym1lbnU+XG4gICAgXHQgICAgICAgICAgICAgICAgICAgIDxidG4gY2xhc3NOYW1lPVwiZGlzYWJsZVwiPjxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctYW5nbGUtcmlnaHRcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIwIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTIyNC4zIDI3M2wtMTM2IDEzNmMtOS40IDkuNC0yNC42IDkuNC0zMy45IDBsLTIyLjYtMjIuNmMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlsOTYuNC05Ni40LTk2LjQtOTYuNGMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlMNTQuMyAxMDNjOS40LTkuNCAyNC42LTkuNCAzMy45IDBsMTM2IDEzNmM5LjUgOS40IDkuNSAyNC42LjEgMzR6XCI+PC9wYXRoPjwvc3ZnPkF0b3JlczxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctY2lyY2xlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNTYgOEMxMTkgOCA4IDExOSA4IDI1NnMxMTEgMjQ4IDI0OCAyNDggMjQ4LTExMSAyNDgtMjQ4UzM5MyA4IDI1NiA4elwiPjwvcGF0aD48L3N2Zz48L2J0bj5cbiAgICBcdCAgICAgICAgICAgICAgICAgICAgPGJ0biBocmVmPVwiLi90aGVtZXMvY2FudG9yZXMvXCI+PHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1hbmdsZS1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjI0LjMgMjczbC0xMzYgMTM2Yy05LjQgOS40LTI0LjYgOS40LTMzLjkgMGwtMjIuNi0yMi42Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOWw5Ni40LTk2LjQtOTYuNC05Ni40Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOUw1NC4zIDEwM2M5LjQtOS40IDI0LjYtOS40IDMzLjkgMGwxMzYgMTM2YzkuNSA5LjQgOS41IDI0LjYuMSAzNHpcIj48L3BhdGg+PC9zdmc+Q2FudG9yZXM8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWNpcmNsZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjU2IDhDMTE5IDggOCAxMTkgOCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzOTMgOCAyNTYgOHpcIj48L3BhdGg+PC9zdmc+PC9idG4+XG4gICAgXHQgICAgICAgICAgICAgICAgICAgIDxidG4gY2xhc3NOYW1lPVwiZGlzYWJsZVwiPjxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctYW5nbGUtcmlnaHRcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIwIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTIyNC4zIDI3M2wtMTM2IDEzNmMtOS40IDkuNC0yNC42IDkuNC0zMy45IDBsLTIyLjYtMjIuNmMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlsOTYuNC05Ni40LTk2LjQtOTYuNGMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlMNTQuMyAxMDNjOS40LTkuNCAyNC42LTkuNCAzMy45IDBsMTM2IDEzNmM5LjUgOS40IDkuNSAyNC42LjEgMzR6XCI+PC9wYXRoPjwvc3ZnPkRlbnRpc3RhczxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctY2lyY2xlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNTYgOEMxMTkgOCA4IDExOSA4IDI1NnMxMTEgMjQ4IDI0OCAyNDggMjQ4LTExMSAyNDgtMjQ4UzM5MyA4IDI1NiA4elwiPjwvcGF0aD48L3N2Zz48L2J0bj5cbiAgICBcdCAgICAgICAgICAgICAgICAgICAgPGJ0biBjbGFzc05hbWU9XCJkaXNhYmxlXCI+PHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1hbmdsZS1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjI0LjMgMjczbC0xMzYgMTM2Yy05LjQgOS40LTI0LjYgOS40LTMzLjkgMGwtMjIuNi0yMi42Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOWw5Ni40LTk2LjQtOTYuNC05Ni40Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOUw1NC4zIDEwM2M5LjQtOS40IDI0LjYtOS40IDMzLjkgMGwxMzYgMTM2YzkuNSA5LjQgOS41IDI0LjYuMSAzNHpcIj48L3BhdGg+PC9zdmc+QXJxdWl0ZXRvczxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctY2lyY2xlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNTYgOEMxMTkgOCA4IDExOSA4IDI1NnMxMTEgMjQ4IDI0OCAyNDggMjQ4LTExMSAyNDgtMjQ4UzM5MyA4IDI1NiA4elwiPjwvcGF0aD48L3N2Zz48L2J0bj5cbiAgICBcdCAgICAgICAgICAgICAgICAgICAgPGJ0biBjbGFzc05hbWU9XCJkaXNhYmxlXCI+PHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1hbmdsZS1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjI0LjMgMjczbC0xMzYgMTM2Yy05LjQgOS40LTI0LjYgOS40LTMzLjkgMGwtMjIuNi0yMi42Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOWw5Ni40LTk2LjQtOTYuNC05Ni40Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOUw1NC4zIDEwM2M5LjQtOS40IDI0LjYtOS40IDMzLjkgMGwxMzYgMTM2YzkuNSA5LjQgOS41IDI0LjYuMSAzNHpcIj48L3BhdGg+PC9zdmc+QWR2b2dhZG9zPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6XCI+PC9wYXRoPjwvc3ZnPjwvYnRuPlxuICAgIFx0ICAgICAgICAgICAgICAgICAgICA8YnRuIGNsYXNzTmFtZT1cImRpc2FibGVcIj48c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWFuZ2xlLXJpZ2h0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yMjQuMyAyNzNsLTEzNiAxMzZjLTkuNCA5LjQtMjQuNiA5LjQtMzMuOSAwbC0yMi42LTIyLjZjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45bDk2LjQtOTYuNC05Ni40LTk2LjRjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45TDU0LjMgMTAzYzkuNC05LjQgMjQuNi05LjQgMzMuOSAwbDEzNiAxMzZjOS41IDkuNCA5LjUgMjQuNi4xIDM0elwiPjwvcGF0aD48L3N2Zz5Qcm9ncmFtYWRvcmVzPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6XCI+PC9wYXRoPjwvc3ZnPjwvYnRuPlxuICAgIFx0ICAgICAgICAgICAgICAgIDwvc3VibWVudT5cbiAgICBcdCAgICAgICAgICAgIDwvYnRuPlxuICAgICAgICAgICAgICAgICAgICA8YnRuIGNsYXNzTmFtZT1cInN1Ym1lbnUtaGFzLW51bWJlcnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctc3RvcmVzXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk02MzUuNyAxNzYuMWwtOTEuNC0xNjBDNTM4LjYgNi4yIDUyOCAwIDUxNi41IDBoLTM5M0MxMTIgMCAxMDEuNCA2LjIgOTUuNyAxNi4xbC05MS40IDE2MEMtNy45IDE5Ny41IDcuNCAyMjQgMzIgMjI0aDMydjI1NC41QzY0IDQ5NyA3OC4zIDUxMiA5NiA1MTJoMjU2YzE3LjcgMCAzMi0xNSAzMi0zMy41VjIyNGgxNjB2MjgwYzAgNC40IDMuNiA4IDggOGgxNmM0LjQgMCA4LTMuNiA4LThWMjI0aDMyYzI0LjYgMCAzOS45LTI2LjUgMjcuNy00Ny45ek0zNTIgNDc4LjVjMCAuOS0uMyAxLjQtLjIgMS41bC0yNTUuMi4ycy0uNi0uNS0uNi0xLjdWMzUyaDI1NnYxMjYuNXptMC0xNTguNUg5NnYtOTZoMjU2djk2ek0zMi4xIDE5Mmw5MS40LTE2MGgzOTNMNjA4IDE5MkgzMi4xelwiPjwvcGF0aD48L3N2Zz5TdG9yZXM8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLXRlcm1pbmFsXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0zNC40OTUgMzYuNDY1bDIxMS4wNTEgMjExLjA1YzQuNjg2IDQuNjg2IDQuNjg2IDEyLjI4NCAwIDE2Ljk3MUwzNC40OTUgNDc1LjUzNWMtNC42ODYgNC42ODYtMTIuMjg0IDQuNjg2LTE2Ljk3IDBsLTcuMDcxLTcuMDdjLTQuNjg2LTQuNjg2LTQuNjg2LTEyLjI4NCAwLTE2Ljk3MUwyMDUuOTQ3IDI1NiAxMC40NTQgNjAuNTA2Yy00LjY4Ni00LjY4Ni00LjY4Ni0xMi4yODQgMC0xNi45NzFsNy4wNzEtNy4wN2M0LjY4Ni00LjY4NyAxMi4yODQtNC42ODcgMTYuOTcgMHpNNjQwIDQ2OHYtMTBjMC02LjYyNy01LjM3My0xMi0xMi0xMkgzMDBjLTYuNjI3IDAtMTIgNS4zNzMtMTIgMTJ2MTBjMCA2LjYyNyA1LjM3MyAxMiAxMiAxMmgzMjhjNi42MjcgMCAxMi01LjM3MyAxMi0xMnpcIj48L3BhdGg+PC9zdmc+PGNvdW50Pjc8L2NvdW50PlxuICAgIFx0ICAgICAgICAgICAgICAgIDxzdWJtZW51PlxuICAgIFx0ICAgICAgICAgICAgICAgICAgICA8YnRuIGhyZWY9XCIuL3RoZW1lcy9tZXJjYWRvbGl2cmUvXCI+PHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1hbmdsZS1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjI0LjMgMjczbC0xMzYgMTM2Yy05LjQgOS40LTI0LjYgOS40LTMzLjkgMGwtMjIuNi0yMi42Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOWw5Ni40LTk2LjQtOTYuNC05Ni40Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOUw1NC4zIDEwM2M5LjQtOS40IDI0LjYtOS40IDMzLjkgMGwxMzYgMTM2YzkuNSA5LjQgOS41IDI0LjYuMSAzNHpcIj48L3BhdGg+PC9zdmc+TWVyY2FkbyBMaXZyZTxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctY2lyY2xlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNTYgOEMxMTkgOCA4IDExOSA4IDI1NnMxMTEgMjQ4IDI0OCAyNDggMjQ4LTExMSAyNDgtMjQ4UzM5MyA4IDI1NiA4elwiPjwvcGF0aD48L3N2Zz48L2J0bj5cbiAgICBcdCAgICAgICAgICAgICAgICAgICAgPGJ0biBjbGFzc05hbWU9XCJkaXNhYmxlXCI+PHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1hbmdsZS1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjI0LjMgMjczbC0xMzYgMTM2Yy05LjQgOS40LTI0LjYgOS40LTMzLjkgMGwtMjIuNi0yMi42Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOWw5Ni40LTk2LjQtOTYuNC05Ni40Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOUw1NC4zIDEwM2M5LjQtOS40IDI0LjYtOS40IDMzLjkgMGwxMzYgMTM2YzkuNSA5LjQgOS41IDI0LjYuMSAzNHpcIj48L3BhdGg+PC9zdmc+SW5mb3Jtw6F0aWNhPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6XCI+PC9wYXRoPjwvc3ZnPjwvYnRuPlxuICAgIFx0ICAgICAgICAgICAgICAgICAgICA8YnRuIGNsYXNzTmFtZT1cImRpc2FibGVcIj48c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWFuZ2xlLXJpZ2h0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yMjQuMyAyNzNsLTEzNiAxMzZjLTkuNCA5LjQtMjQuNiA5LjQtMzMuOSAwbC0yMi42LTIyLjZjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45bDk2LjQtOTYuNC05Ni40LTk2LjRjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45TDU0LjMgMTAzYzkuNC05LjQgMjQuNi05LjQgMzMuOSAwbDEzNiAxMzZjOS41IDkuNCA5LjUgMjQuNi4xIDM0elwiPjwvcGF0aD48L3N2Zz5Db25zdHJ1w6fDo288c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWNpcmNsZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjU2IDhDMTE5IDggOCAxMTkgOCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzOTMgOCAyNTYgOHpcIj48L3BhdGg+PC9zdmc+PC9idG4+XG4gICAgXHQgICAgICAgICAgICAgICAgICAgIDxidG4gY2xhc3NOYW1lPVwiZGlzYWJsZVwiPjxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctYW5nbGUtcmlnaHRcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIwIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTIyNC4zIDI3M2wtMTM2IDEzNmMtOS40IDkuNC0yNC42IDkuNC0zMy45IDBsLTIyLjYtMjIuNmMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlsOTYuNC05Ni40LTk2LjQtOTYuNGMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlMNTQuMyAxMDNjOS40LTkuNCAyNC42LTkuNCAzMy45IDBsMTM2IDEzNmM5LjUgOS40IDkuNSAyNC42LjEgMzR6XCI+PC9wYXRoPjwvc3ZnPkNhbMOnYWRvczxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctY2lyY2xlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNTYgOEMxMTkgOCA4IDExOSA4IDI1NnMxMTEgMjQ4IDI0OCAyNDggMjQ4LTExMSAyNDgtMjQ4UzM5MyA4IDI1NiA4elwiPjwvcGF0aD48L3N2Zz48L2J0bj5cbiAgICBcdCAgICAgICAgICAgICAgICAgICAgPGJ0biBocmVmPVwiLi90aGVtZXMvY2VsbWFyL1wiPjxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctYW5nbGUtcmlnaHRcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIwIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTIyNC4zIDI3M2wtMTM2IDEzNmMtOS40IDkuNC0yNC42IDkuNC0zMy45IDBsLTIyLjYtMjIuNmMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlsOTYuNC05Ni40LTk2LjQtOTYuNGMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlMNTQuMyAxMDNjOS40LTkuNCAyNC42LTkuNCAzMy45IDBsMTM2IDEzNmM5LjUgOS40IDkuNSAyNC42LjEgMzR6XCI+PC9wYXRoPjwvc3ZnPlBsYW5lamFkb3M8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWNpcmNsZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjU2IDhDMTE5IDggOCAxMTkgOCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzOTMgOCAyNTYgOHpcIj48L3BhdGg+PC9zdmc+PC9idG4+XG4gICAgXHQgICAgICAgICAgICAgICAgICAgIDxidG4gY2xhc3NOYW1lPVwiZGlzYWJsZVwiPjxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctYW5nbGUtcmlnaHRcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIwIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTIyNC4zIDI3M2wtMTM2IDEzNmMtOS40IDkuNC0yNC42IDkuNC0zMy45IDBsLTIyLjYtMjIuNmMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlsOTYuNC05Ni40LTk2LjQtOTYuNGMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlMNTQuMyAxMDNjOS40LTkuNCAyNC42LTkuNCAzMy45IDBsMTM2IDEzNmM5LjUgOS40IDkuNSAyNC42LjEgMzR6XCI+PC9wYXRoPjwvc3ZnPlJvdXBhczxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctY2lyY2xlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNTYgOEMxMTkgOCA4IDExOSA4IDI1NnMxMTEgMjQ4IDI0OCAyNDggMjQ4LTExMSAyNDgtMjQ4UzM5MyA4IDI1NiA4elwiPjwvcGF0aD48L3N2Zz48L2J0bj5cbiAgICBcdCAgICAgICAgICAgICAgICA8L3N1Ym1lbnU+XG4gICAgXHQgICAgICAgICAgICA8L2J0bj5cbiAgICAgICAgICAgICAgICAgICAgPGJ0biBjbGFzc05hbWU9XCJzdWJtZW51LWhhcy1udW1iZXJzXCI+XG4gICAgICAgICAgICAgICAgICAgIFx0PHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1yZXN0YXVyYW50ZXNcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIwIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTM0NC4xIDQ3MC4zbDE0LjItMTY0LjhjLTQyLjEtMzMuMS03MC40LTc3LTcwLjQtMTI5LjVDMjg4IDgxLjcgMzc2LjEgMCA0NDAgMGMyMi4xIDAgNDAgMTcuMyA0MCAzOC41djQzNWMwIDIxLjItMTcuOSAzOC41LTQwIDM4LjVoLTU2Yy0yMi44IDAtNDEuOC0xOC43LTM5LjktNDEuN3pNMzIwIDE3NmMwIDUxIDMyLjIgODUuNSA3MS44IDExNC41TDM3NiA0NzMuMWMtLjMgMy43IDMuNCA2LjkgOCA2LjloNTZjNC4zIDAgOC0zIDgtNi41di00MzVjMC0zLjUtMy43LTYuNS04LTYuNS00NC42IDAtMTIwIDY1LjgtMTIwIDE0NHpNMjQwLjcgMzMuOEMyMzcuNCAxNC4zIDIxOS41IDAgMTk0LjYgMGMtMTEuOSAwLTI0LjEgMy40LTMzLjMgMTEuMkMxNTIuOSA0LjEgMTQxLjMgMCAxMjggMHMtMjQuOSA0LjEtMzMuMyAxMS4yQzg1LjUgMy40IDczLjMgMCA2MS40IDAgMzYuMiAwIDE4LjYgMTQuNSAxNS4zIDMzLjggMTMuNSA0My4yIDAgMTE4LjQgMCAxNDkuOWMwIDUwLjkgMjYuNyA5MS42IDcxIDExMC43TDU5LjYgNDcxLjRDNTguNCA0OTMuNCA3NS45IDUxMiA5OCA1MTJoNjBjMjIgMCAzOS42LTE4LjUgMzguNC00MC42TDE4NSAyNjAuNmM0NC4yLTE5LjEgNzEtNTkuOCA3MS0xMTAuNyAwLTMxLjUtMTMuNS0xMDYuNy0xNS4zLTExNi4xek0xNTIuMyAyNDBsMTIuMiAyMzMuMWMuMiAzLjctMi43IDYuOS02LjUgNi45SDk4Yy0zLjcgMC02LjctMy4xLTYuNS02LjlMMTAzLjcgMjQwQzYxLjMgMjMxLjIgMzIgMTk3IDMyIDE0OS45YzAtMjkuNyAxNC44LTExMC42IDE0LjgtMTEwLjYgMS42LTkuOSAyOC4zLTkuNyAyOS41LjJWMTYyYy45IDExLjUgMjguMiAxMS43IDI5LjUuMmw3LjQtMTIyLjljMS42LTkuNyAyNy45LTkuNyAyOS41IDBsNy40IDEyMi45YzEuMyAxMS40IDI4LjYgMTEuMiAyOS41LS4yVjM5LjZjMS4yLTkuOSAyNy45LTEwLjEgMjkuNS0uMiAwIDAgMTQuOCA4MC45IDE0LjggMTEwLjYuMSA0Ni44LTI5IDgxLjItNzEuNiA5MHpcIj48L3BhdGg+PC9zdmc+QWxpbWVudGHDp8OjbzxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctdGVybWluYWxcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIwIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTM0LjQ5NSAzNi40NjVsMjExLjA1MSAyMTEuMDVjNC42ODYgNC42ODYgNC42ODYgMTIuMjg0IDAgMTYuOTcxTDM0LjQ5NSA0NzUuNTM1Yy00LjY4NiA0LjY4Ni0xMi4yODQgNC42ODYtMTYuOTcgMGwtNy4wNzEtNy4wN2MtNC42ODYtNC42ODYtNC42ODYtMTIuMjg0IDAtMTYuOTcxTDIwNS45NDcgMjU2IDEwLjQ1NCA2MC41MDZjLTQuNjg2LTQuNjg2LTQuNjg2LTEyLjI4NCAwLTE2Ljk3MWw3LjA3MS03LjA3YzQuNjg2LTQuNjg3IDEyLjI4NC00LjY4NyAxNi45NyAwek02NDAgNDY4di0xMGMwLTYuNjI3LTUuMzczLTEyLTEyLTEySDMwMGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnYxMGMwIDYuNjI3IDUuMzczIDEyIDEyIDEyaDMyOGM2LjYyNyAwIDEyLTUuMzczIDEyLTEyelwiPjwvcGF0aD48L3N2Zz48Y291bnQ+NTwvY291bnQ+XG4gICAgXHQgICAgICAgICAgICAgICAgPHN1Ym1lbnU+XG4gICAgXHQgICAgICAgICAgICAgICAgICAgIDxidG4gY2xhc3NOYW1lPVwiZGlzYWJsZVwiPjxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctYW5nbGUtcmlnaHRcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIwIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTIyNC4zIDI3M2wtMTM2IDEzNmMtOS40IDkuNC0yNC42IDkuNC0zMy45IDBsLTIyLjYtMjIuNmMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlsOTYuNC05Ni40LTk2LjQtOTYuNGMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlMNTQuMyAxMDNjOS40LTkuNCAyNC42LTkuNCAzMy45IDBsMTM2IDEzNmM5LjUgOS40IDkuNSAyNC42LjEgMzR6XCI+PC9wYXRoPjwvc3ZnPlJlc3RhdXJhbnRlczxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctY2lyY2xlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNTYgOEMxMTkgOCA4IDExOSA4IDI1NnMxMTEgMjQ4IDI0OCAyNDggMjQ4LTExMSAyNDgtMjQ4UzM5MyA4IDI1NiA4elwiPjwvcGF0aD48L3N2Zz48L2J0bj5cbiAgICBcdCAgICAgICAgICAgICAgICAgICAgPGJ0biBjbGFzc05hbWU9XCJkaXNhYmxlXCI+PHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1hbmdsZS1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjI0LjMgMjczbC0xMzYgMTM2Yy05LjQgOS40LTI0LjYgOS40LTMzLjkgMGwtMjIuNi0yMi42Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOWw5Ni40LTk2LjQtOTYuNC05Ni40Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOUw1NC4zIDEwM2M5LjQtOS40IDI0LjYtOS40IDMzLjkgMGwxMzYgMTM2YzkuNSA5LjQgOS41IDI0LjYuMSAzNHpcIj48L3BhdGg+PC9zdmc+Q2FmZXRlcmlhczxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctY2lyY2xlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNTYgOEMxMTkgOCA4IDExOSA4IDI1NnMxMTEgMjQ4IDI0OCAyNDggMjQ4LTExMSAyNDgtMjQ4UzM5MyA4IDI1NiA4elwiPjwvcGF0aD48L3N2Zz48L2J0bj5cbiAgICBcdCAgICAgICAgICAgICAgICAgICAgPGJ0biBocmVmPVwiLi90aGVtZXMvY2VydmVqYXJpYXMvXCI+PHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1hbmdsZS1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjI0LjMgMjczbC0xMzYgMTM2Yy05LjQgOS40LTI0LjYgOS40LTMzLjkgMGwtMjIuNi0yMi42Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOWw5Ni40LTk2LjQtOTYuNC05Ni40Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOUw1NC4zIDEwM2M5LjQtOS40IDI0LjYtOS40IDMzLjkgMGwxMzYgMTM2YzkuNSA5LjQgOS41IDI0LjYuMSAzNHpcIj48L3BhdGg+PC9zdmc+Q2VydmVqYXJpYXM8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWNpcmNsZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjU2IDhDMTE5IDggOCAxMTkgOCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzOTMgOCAyNTYgOHpcIj48L3BhdGg+PC9zdmc+PC9idG4+XG4gICAgXHQgICAgICAgICAgICAgICAgICAgIDxidG4gY2xhc3NOYW1lPVwiZGlzYWJsZVwiPjxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctYW5nbGUtcmlnaHRcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIwIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTIyNC4zIDI3M2wtMTM2IDEzNmMtOS40IDkuNC0yNC42IDkuNC0zMy45IDBsLTIyLjYtMjIuNmMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlsOTYuNC05Ni40LTk2LjQtOTYuNGMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlMNTQuMyAxMDNjOS40LTkuNCAyNC42LTkuNCAzMy45IDBsMTM2IDEzNmM5LjUgOS40IDkuNSAyNC42LjEgMzR6XCI+PC9wYXRoPjwvc3ZnPlBpenphcmlhczxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctY2lyY2xlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNTYgOEMxMTkgOCA4IDExOSA4IDI1NnMxMTEgMjQ4IDI0OCAyNDggMjQ4LTExMSAyNDgtMjQ4UzM5MyA4IDI1NiA4elwiPjwvcGF0aD48L3N2Zz48L2J0bj5cbiAgICBcdCAgICAgICAgICAgICAgICAgICAgPGJ0biBjbGFzc05hbWU9XCJkaXNhYmxlXCI+PHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1hbmdsZS1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjI0LjMgMjczbC0xMzYgMTM2Yy05LjQgOS40LTI0LjYgOS40LTMzLjkgMGwtMjIuNi0yMi42Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOWw5Ni40LTk2LjQtOTYuNC05Ni40Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOUw1NC4zIDEwM2M5LjQtOS40IDI0LjYtOS40IDMzLjkgMGwxMzYgMTM2YzkuNSA5LjQgOS41IDI0LjYuMSAzNHpcIj48L3BhdGg+PC9zdmc+U29ydmV0ZXJpYXM8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWNpcmNsZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjU2IDhDMTE5IDggOCAxMTkgOCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzOTMgOCAyNTYgOHpcIj48L3BhdGg+PC9zdmc+PC9idG4+XG4gICAgXHQgICAgICAgICAgICAgICAgPC9zdWJtZW51PlxuICAgIFx0ICAgICAgICAgICAgPC9idG4+XG4gICAgICAgICAgICAgICAgICAgIDxidG4gY2xhc3NOYW1lPVwic3VibWVudS1oYXMtbnVtYmVyc1wiPlxuICAgICAgICAgICAgICAgICAgICBcdDxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctc3RvcmVzXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk02MzUuNyAxNzYuMWwtOTEuNC0xNjBDNTM4LjYgNi4yIDUyOCAwIDUxNi41IDBoLTM5M0MxMTIgMCAxMDEuNCA2LjIgOTUuNyAxNi4xbC05MS40IDE2MEMtNy45IDE5Ny41IDcuNCAyMjQgMzIgMjI0aDMydjI1NC41QzY0IDQ5NyA3OC4zIDUxMiA5NiA1MTJoMjU2YzE3LjcgMCAzMi0xNSAzMi0zMy41VjIyNGgxNjB2MjgwYzAgNC40IDMuNiA4IDggOGgxNmM0LjQgMCA4LTMuNiA4LThWMjI0aDMyYzI0LjYgMCAzOS45LTI2LjUgMjcuNy00Ny45ek0zNTIgNDc4LjVjMCAuOS0uMyAxLjQtLjIgMS41bC0yNTUuMi4ycy0uNi0uNS0uNi0xLjdWMzUyaDI1NnYxMjYuNXptMC0xNTguNUg5NnYtOTZoMjU2djk2ek0zMi4xIDE5Mmw5MS40LTE2MGgzOTNMNjA4IDE5MkgzMi4xelwiPjwvcGF0aD48L3N2Zz5CZWxlemE8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLXRlcm1pbmFsXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0zNC40OTUgMzYuNDY1bDIxMS4wNTEgMjExLjA1YzQuNjg2IDQuNjg2IDQuNjg2IDEyLjI4NCAwIDE2Ljk3MUwzNC40OTUgNDc1LjUzNWMtNC42ODYgNC42ODYtMTIuMjg0IDQuNjg2LTE2Ljk3IDBsLTcuMDcxLTcuMDdjLTQuNjg2LTQuNjg2LTQuNjg2LTEyLjI4NCAwLTE2Ljk3MUwyMDUuOTQ3IDI1NiAxMC40NTQgNjAuNTA2Yy00LjY4Ni00LjY4Ni00LjY4Ni0xMi4yODQgMC0xNi45NzFsNy4wNzEtNy4wN2M0LjY4Ni00LjY4NyAxMi4yODQtNC42ODcgMTYuOTcgMHpNNjQwIDQ2OHYtMTBjMC02LjYyNy01LjM3My0xMi0xMi0xMkgzMDBjLTYuNjI3IDAtMTIgNS4zNzMtMTIgMTJ2MTBjMCA2LjYyNyA1LjM3MyAxMiAxMiAxMmgzMjhjNi42MjcgMCAxMi01LjM3MyAxMi0xMnpcIj48L3BhdGg+PC9zdmc+PGNvdW50PjI8L2NvdW50PlxuICAgIFx0ICAgICAgICAgICAgICAgIDxzdWJtZW51PlxuICAgIFx0ICAgICAgICAgICAgICAgICAgICA8YnRuIGNsYXNzTmFtZT1cImRpc2FibGVcIj48c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWFuZ2xlLXJpZ2h0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yMjQuMyAyNzNsLTEzNiAxMzZjLTkuNCA5LjQtMjQuNiA5LjQtMzMuOSAwbC0yMi42LTIyLjZjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45bDk2LjQtOTYuNC05Ni40LTk2LjRjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45TDU0LjMgMTAzYzkuNC05LjQgMjQuNi05LjQgMzMuOSAwbDEzNiAxMzZjOS41IDkuNCA5LjUgMjQuNi4xIDM0elwiPjwvcGF0aD48L3N2Zz5TYWzDo28gZGUgQ2FiZWxlcmVpcm88c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWNpcmNsZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjU2IDhDMTE5IDggOCAxMTkgOCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzOTMgOCAyNTYgOHpcIj48L3BhdGg+PC9zdmc+PC9idG4+XG4gICAgXHQgICAgICAgICAgICAgICAgICAgIDxidG4gY2xhc3NOYW1lPVwiZGlzYWJsZVwiPjxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctYW5nbGUtcmlnaHRcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIwIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTIyNC4zIDI3M2wtMTM2IDEzNmMtOS40IDkuNC0yNC42IDkuNC0zMy45IDBsLTIyLjYtMjIuNmMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlsOTYuNC05Ni40LTk2LjQtOTYuNGMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlMNTQuMyAxMDNjOS40LTkuNCAyNC42LTkuNCAzMy45IDBsMTM2IDEzNmM5LjUgOS40IDkuNSAyNC42LjEgMzR6XCI+PC9wYXRoPjwvc3ZnPkFsdWd1ZWwgZGUgUm91cGFzPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6XCI+PC9wYXRoPjwvc3ZnPjwvYnRuPlxuICAgIFx0ICAgICAgICAgICAgICAgICAgICA8YnRuIGNsYXNzTmFtZT1cImRpc2FibGVcIj48c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWFuZ2xlLXJpZ2h0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yMjQuMyAyNzNsLTEzNiAxMzZjLTkuNCA5LjQtMjQuNiA5LjQtMzMuOSAwbC0yMi42LTIyLjZjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45bDk2LjQtOTYuNC05Ni40LTk2LjRjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45TDU0LjMgMTAzYzkuNC05LjQgMjQuNi05LjQgMzMuOSAwbDEzNiAxMzZjOS41IDkuNCA5LjUgMjQuNi4xIDM0elwiPjwvcGF0aD48L3N2Zz5Db3Ntw6l0aWNvczxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctY2lyY2xlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNTYgOEMxMTkgOCA4IDExOSA4IDI1NnMxMTEgMjQ4IDI0OCAyNDggMjQ4LTExMSAyNDgtMjQ4UzM5MyA4IDI1NiA4elwiPjwvcGF0aD48L3N2Zz48L2J0bj5cbiAgICBcdCAgICAgICAgICAgICAgICA8L3N1Ym1lbnU+XG4gICAgXHQgICAgICAgICAgICA8L2J0bj5cbiAgICAgICAgICAgICAgICA8L21lbnVpdGVtcz5cbiAgICAgICAgICAgICAgICA8c2lkZWJhcmRpdmlkZXI+PC9zaWRlYmFyZGl2aWRlcj5cbiAgICAgICAgICAgICAgICA8c2lkZWJhcnNlcGFyYXRvcj5GQUxFIENPTk9TQ088L3NpZGViYXJzZXBhcmF0b3I+XG4gICAgICAgICAgICAgICAgPG1lbnVjb250YWN0PlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwidGVsOjExIDkzMDE4IDgzNjNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctcGhvbmVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIwIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTQ4Ny44IDI0LjFMMzg3IC44Yy0xNC43LTMuNC0yOS44IDQuMi0zNS44IDE4LjFsLTQ2LjUgMTA4LjVjLTUuNSAxMi43LTEuOCAyNy43IDguOSAzNi41bDUzLjkgNDQuMWMtMzQgNjkuMi05MC4zIDEyNS42LTE1OS42IDE1OS42bC00NC4xLTUzLjljLTguOC0xMC43LTIzLjgtMTQuNC0zNi41LTguOUwxOC45IDM1MS4zQzUgMzU3LjMtMi42IDM3Mi4zLjggMzg3TDI0IDQ4Ny43QzI3LjMgNTAyIDM5LjkgNTEyIDU0LjUgNTEyIDMwNi43IDUxMiA1MTIgMzA3LjggNTEyIDU0LjVjMC0xNC42LTEwLTI3LjItMjQuMi0zMC40ek01NS4xIDQ4MGwtMjMtOTkuNiAxMDcuNC00NiA1OS41IDcyLjhjMTAzLjYtNDguNiAxNTkuNy0xMDQuOSAyMDguMS0yMDguMWwtNzIuOC01OS41IDQ2LTEwNy40IDk5LjYgMjNDNDc5LjcgMjg5LjcgMjg5LjYgNDc5LjcgNTUuMSA0ODB6XCI+PC9wYXRoPjwvc3ZnPkxpZ2HDp8OjbzxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctY2lyY2xlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNTYgOEMxMTkgOCA4IDExOSA4IDI1NnMxMTEgMjQ4IDI0OCAyNDggMjQ4LTExMSAyNDgtMjQ4UzM5MyA4IDI1NiA4elwiPjwvcGF0aD48L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9hcGkud2hhdHNhcHAuY29tL3NlbmQ/cGhvbmU9NTUxMTkzMDE4ODM2M1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy13aGF0c2FwcFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMzgwLjkgOTcuMUMzMzkgNTUuMSAyODMuMiAzMiAyMjMuOSAzMmMtMTIyLjQgMC0yMjIgOTkuNi0yMjIgMjIyIDAgMzkuMSAxMC4yIDc3LjMgMjkuNiAxMTFMMCA0ODBsMTE3LjctMzAuOWMzMi40IDE3LjcgNjguOSAyNyAxMDYuMSAyN2guMWMxMjIuMyAwIDIyNC4xLTk5LjYgMjI0LjEtMjIyIDAtNTkuMy0yNS4yLTExNS02Ny4xLTE1N3ptLTE1NyAzNDEuNmMtMzMuMiAwLTY1LjctOC45LTk0LTI1LjdsLTYuNy00LTY5LjggMTguM0w3MiAzNTkuMmwtNC40LTdjLTE4LjUtMjkuNC0yOC4yLTYzLjMtMjguMi05OC4yIDAtMTAxLjcgODIuOC0xODQuNSAxODQuNi0xODQuNSA0OS4zIDAgOTUuNiAxOS4yIDEzMC40IDU0LjEgMzQuOCAzNC45IDU2LjIgODEuMiA1Ni4xIDEzMC41IDAgMTAxLjgtODQuOSAxODQuNi0xODYuNiAxODQuNnptMTAxLjItMTM4LjJjLTUuNS0yLjgtMzIuOC0xNi4yLTM3LjktMTgtNS4xLTEuOS04LjgtMi44LTEyLjUgMi44LTMuNyA1LjYtMTQuMyAxOC0xNy42IDIxLjgtMy4yIDMuNy02LjUgNC4yLTEyIDEuNC0zMi42LTE2LjMtNTQtMjkuMS03NS41LTY2LTUuNy05LjggNS43LTkuMSAxNi4zLTMwLjMgMS44LTMuNy45LTYuOS0uNS05LjctMS40LTIuOC0xMi41LTMwLjEtMTcuMS00MS4yLTQuNS0xMC44LTkuMS05LjMtMTIuNS05LjUtMy4yLS4yLTYuOS0uMi0xMC42LS4yLTMuNyAwLTkuNyAxLjQtMTQuOCA2LjktNS4xIDUuNi0xOS40IDE5LTE5LjQgNDYuMyAwIDI3LjMgMTkuOSA1My43IDIyLjYgNTcuNCAyLjggMy43IDM5LjEgNTkuNyA5NC44IDgzLjggMzUuMiAxNS4yIDQ5IDE2LjUgNjYuNiAxMy45IDEwLjctMS42IDMyLjgtMTMuNCAzNy40LTI2LjQgNC42LTEzIDQuNi0yNC4xIDMuMi0yNi40LTEuMy0yLjUtNS0zLjktMTAuNS02LjZ6XCI+PC9wYXRoPjwvc3ZnPldoYXRzYXBwPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6XCI+PC9wYXRoPjwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJtYWlsdG86Y29udGFjdEBhdm4uc3lzdGVtc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1tYWlsXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNTYgOEMxMTguOTQxIDggOCAxMTguOTE5IDggMjU2YzAgMTM3LjA1OCAxMTAuOTE5IDI0OCAyNDggMjQ4IDUyLjkyNSAwIDEwNC42OC0xNy4wNzggMTQ3LjA5Mi00OC4zMTkgNS41MDEtNC4wNTIgNi40MjMtMTEuOTI0IDIuMDk1LTE3LjIxMWwtNS4wNzQtNi4xOThjLTQuMDE4LTQuOTA5LTExLjE5My01Ljg4My0xNi4zMDctMi4xMjlDMzQ2LjkzIDQ1Ny4yMDggMzAxLjk3NCA0NzIgMjU2IDQ3MmMtMTE5LjM3MyAwLTIxNi05Ni42MDctMjE2LTIxNiAwLTExOS4zNzUgOTYuNjA3LTIxNiAyMTYtMjE2IDExOC40NDUgMCAyMTYgODAuMDI0IDIxNiAyMDAgMCA3Mi44NzMtNTIuODE5IDEwOC4yNDEtMTE2LjA2NSAxMDguMjQxLTE5LjczNCAwLTIzLjY5NS0xMC44MTYtMTkuNTAzLTMzLjg2OGwzMi4wNy0xNjQuMDcxYzEuNDQ5LTcuNDExLTQuMjI2LTE0LjMwMi0xMS43NzctMTQuMzAyaC0xMi40MjFhMTIgMTIgMCAwIDAtMTEuNzgxIDkuNzE4Yy0yLjI5NCAxMS44NDYtMi44NiAxMy40NjQtMy44NjEgMjUuNjQ3LTExLjcyOS0yNy4wNzgtMzguNjM5LTQzLjAyMy03My4zNzUtNDMuMDIzLTY4LjA0NCAwLTEzMy4xNzYgNjIuOTUtMTMzLjE3NiAxNTcuMDI3IDAgNjEuNTg3IDMzLjkxNSA5OC4zNTQgOTAuNzIzIDk4LjM1NCAzOS43MjkgMCA3MC42MDEtMjQuMjc4IDg2LjYzMy00Ni45ODItMS4yMTEgMjcuNzg2IDE3LjQ1NSA0Mi4yMTMgNDUuOTc1IDQyLjIxM0M0NTMuMDg5IDM3OC45NTQgNTA0IDMyMS43MjkgNTA0IDI0MCA1MDQgMTAzLjgxNCAzOTMuODYzIDggMjU2IDh6bS0zNy45MiAzNDIuNjI3Yy0zNi42ODEgMC01OC41OC0yNS4xMDgtNTguNTgtNjcuMTY2IDAtNzQuNjkgNTAuNzY1LTEyMS41NDUgOTcuMjE3LTEyMS41NDUgMzguODU3IDAgNTguMTAyIDI3Ljc5IDU4LjEwMiA2NS43MzUgMCA1OC4xMzMtMzguMzY5IDEyMi45NzYtOTYuNzM5IDEyMi45NzZ6XCI+PC9wYXRoPjwvc3ZnPkUtbWFpbDxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctY2lyY2xlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNTYgOEMxMTkgOCA4IDExOSA4IDI1NnMxMTEgMjQ4IDI0OCAyNDggMjQ4LTExMSAyNDgtMjQ4UzM5MyA4IDI1NiA4elwiPjwvcGF0aD48L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwic21zOjExIDkzMDE4IDgzNjNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctbWFpbFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNNDAwIDMySDQ4QzIxLjQ5IDMyIDAgNTMuNDkgMCA4MHYzNTJjMCAyNi41MSAyMS40OSA0OCA0OCA0OGgzNTJjMjYuNTEgMCA0OC0yMS40OSA0OC00OFY4MGMwLTI2LjUxLTIxLjQ5LTQ4LTQ4LTQ4em0xNiA0MDBjMCA4LjgyMi03LjE3OCAxNi0xNiAxNkg0OGMtOC44MjIgMC0xNi03LjE3OC0xNi0xNlY4MGMwLTguODIyIDcuMTc4LTE2IDE2LTE2aDM1MmM4LjgyMiAwIDE2IDcuMTc4IDE2IDE2djM1MnptLTY0LTMwNEg5NmMtMTcuNjczIDAtMzIgMTQuMzI3LTMyIDMydjE5MmMwIDE3LjY3MyAxNC4zMjcgMzIgMzIgMzJoMjU2YzE3LjY3MyAwIDMyLTE0LjMyNyAzMi0zMlYxNjBjMC0xNy42NzMtMTQuMzI3LTMyLTMyLTMyem0wIDMydjMzLjg1NWMtMTQuMTM2IDExLjYyOC0zNi41NjYgMjkuNjY0LTgyLjExNyA2NS44MjFDMjU5LjQyNiAyNjguMDE1IDIzOC43NDggMjg4IDIyNC4yNTYgMjg4bC0uMjU2LS4wMDItLjI1Ni4wMDJjLTE0LjQ5MiAwLTM1LjE3LTE5Ljk4NC00NS42MjgtMjguMzI0LTQ1LjU0NC0zNi4xNTItNjcuOTc4LTU0LjE5Mi04Mi4xMTctNjUuODIyVjE2MEgzNTJ6TTk2IDM1MlYyMzUuMDkyYzE0LjEwOSAxMS4zNjcgMzMuNjI0IDI2Ljk0OCA2Mi4yMjEgNDkuNjQ4IDEzLjc3NyAxMS4wMSAzNy45MDIgMzUuMjYgNjUuNTIzIDM1LjI2bC4yNTMtLjAwMS4yNTguMDAxYzI3LjUyOSAwIDUxLjM5Mi0yMy45NzUgNjUuNTQxLTM1LjI3NCAyOC41ODMtMjIuNjg5IDQ4LjA5OS0zOC4yNyA2Mi4yMDMtNDkuNjM0VjM1Mkg5NnpcIj48L3BhdGg+PC9zdmc+U01TPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6XCI+PC9wYXRoPjwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9tZW51Y29udGFjdD5cbiAgICAgICAgICAgIDwvbWVudXNjcm9sbD5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICBsZWZ0bWVudSB7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IC0zNDBweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwMDAwO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMzMwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCA4cHggIzAwMDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFjMjIyZTtcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBsZWZ0IDM1MG1zIGVhc2UgMHM7XG4gICAgICAgICAgICAgICAgICAgIC1tb3otdHJhbnNpdGlvbjogbGVmdCAzNTBtcyBlYXNlIDBzO1xuICAgICAgICAgICAgICAgICAgICAtbXMtdHJhbnNpdGlvbjogbGVmdCAzNTBtcyBlYXNlIDBzO1xuICAgICAgICAgICAgICAgICAgICAtby10cmFuc2l0aW9uOiBsZWZ0IDM1MG1zIGVhc2UgMHM7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGxlZnQgMzUwbXMgZWFzZSAwcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgc2lkZWJhcnVzZXIge1xuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgNnB4IDRweCByZ2JhKDAsMCwwLC4zKTtcbiAgICAgICAgICAgICAgICAgICAgdG91Y2gtYWN0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxODVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgc2lkZWJhcnVzZXIgcGhvdG8ge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTH0vc3RhdGljL2ltYWdlcy9pY29ucy9pY29uLTE5MngxOTIucG5nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgc2lkZWJhcnVzZXIgcGhvdG8ge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzAwZjlhNjtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIHRvcDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDFweCAxcHggNXB4ICMwMDAwMDA7XG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggNXB4ICMwMDAwMDA7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTVweCAwcHggMHB4IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDkwcHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MHB4O1xuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgc2lkZWJhcnVzZXIgcGhvdG8gdGl0bGUge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMjg1cHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDEwNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBzaWRlYmFydXNlciBwaG90byBzdWJ0aXRsZSB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI5MHB4O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2NjYztcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAxMDBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgc2lkZWJhcnVzZXIgYmdpbWcge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTH0vc3RhdGljL2ltYWdlcy9ob21lcGFnZS9iYWNrZ3JvdW5kLWF2bi0xLmpwZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IHNpZGViYXJ1c2VyIGJnaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBoYXJkLWxpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNhN2Y3ZmY7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxODVweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IHNpZGViYXJ1c2VyIGJnc2hhZG93IHtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogOTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxODVweDtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLHJnYmEoMCwwLDAsMCkgMCxyZ2JhKDAsMCwwLDApIDIwJSxyZ2JhKDAsMCwwLC4xKSA0MCUscmdiYSgwLDAsMCwuNykgNzAlLHJnYmEoMCwwLDAsMSkgMTAwJSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwge1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAyMzVweCk7XG4gICAgICAgICAgICAgICAgICAgIHRvdWNoLWFjdGlvbjogcGFuLXk7XG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMzMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIHNpZGViYXJzZXBhcmF0b3I6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIHNpZGViYXJzZXBhcmF0b3Ige1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjY2NjO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0LWVudSBtZW51c2Nyb2xsIHNpZGViYXJkaXZpZGVyIHtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogc29saWQgMXB4IHJnYmEoMCwwLDAsLjIpO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggcmdiYSgyNTUsMjU1LDI1NSwuMDMpO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51aXRlbXMgPiBidG4sXG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51Y29udGFjdCA+IGEge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjVweDtcbiAgICAgICAgICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA1NXB4O1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjY2NjO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0bi5kaXNhYmxlLFxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWNvbnRhY3QgPiBhLmRpc2FibGUge1xuICAgICAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogLjU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuIC5zdmctaW5saW5lLFxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWNvbnRhY3QgPiBhIC5zdmctaW5saW5lIHtcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IC0uMTI1ZW07XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDI1cHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjYjUwMGZmO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIycHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDNweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51aXRlbXMgPiBidG4gLnN2Zy1pbmxpbmUuc3ZnLWNpcmNsZSxcbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVjb250YWN0ID4gYSAuc3ZnLWlubGluZS5zdmctY2lyY2xlIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM0MzQ3NTI7XG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1cHg7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogMjVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51aXRlbXMgPiBidG4gLnN2Zy1pbmxpbmUuc3ZnLXRlcm1pbmFsIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM0MzQ3NTI7XG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogLTVweDtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAxOHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0biAuc3ZnLWlubGluZS5zdmctdHYge1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtNHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0biAuc3ZnLWlubGluZS5zdmctc3RvcmVzIHtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogLTVweDtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAycHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuIC5zdmctaW5saW5lLnN2Zy1yZXN0YXVyYW50ZXMsXG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51aXRlbXMgPiBidG4gLnN2Zy1pbmxpbmUuc3ZnLXdoYXRzYXBwLFxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuIC5zdmctaW5saW5lLnN2Zy1waG9uZSxcbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0biAuc3ZnLWlubGluZS5zdmctbWFpbCxcbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0biAuc3ZnLWlubGluZS5zdmctc3RhciB7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IC0ycHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuOmhvdmVyLFxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWNvbnRhY3QgPiBhOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIzMmIzYTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0bjpob3ZlciAuc3ZnLWlubGluZS5zdmctdGVybWluYWwsXG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51aXRlbXMgPiBidG46aG92ZXIgLnN2Zy1pbmxpbmUuc3ZnLWNpcmNsZSxcbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVjb250YWN0ID4gYTpob3ZlciAuc3ZnLWlubGluZS5zdmctY2lyY2xlIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0biA+IGNvdW50IHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2M5NDdmZjtcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IC0yNXB4O1xuICAgICAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogLTJweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51aXRlbXMgPiBidG4gc3VibWVudSB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgKyAyNXB4KTtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtMjVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51aXRlbXMgPiBidG4gc3VibWVudSBidG4uZGlzYWJsZSB7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IC41O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0biBzdWJtZW51IGJ0biB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMzVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51aXRlbXMgPiBidG4gc3VibWVudS5vcGVuIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51aXRlbXMgPiBidG46aG92ZXIgc3VibWVudSBidG4gLnN2Zy1pbmxpbmUuc3ZnLWNpcmNsZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNDM0NzUyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0bjpob3ZlciBzdWJtZW51IGJ0bjpub3QoLmRpc2FibGUpOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzJmM2E0ZTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0bjpob3ZlciBzdWJtZW51IGJ0bjpub3QoLmRpc2FibGUpOmhvdmVyIC5zdmctaW5saW5lLnN2Zy1jaXJjbGUge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5NDBweCkge1xuICAgICAgICAgICAgICAgICAgICBmb290ZXIgaW5mb3Mge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNjI1cHgpIHtcbiAgICAgICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNpdGVtb2JpbGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICBcdDwvbGVmdG1lbnU+XG4gICAgKX1cbn0iXX0= */\n/*@ sourceURL=/home/ubuntu/workspace/estudo/next/components/interface.js */"),
        __self: this
      }));
    }
  }]);

  return LeftMenu;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/***/ })

})
//# sourceMappingURL=index.js.5ce9c2e7659c6043b39c.hot-update.js.map