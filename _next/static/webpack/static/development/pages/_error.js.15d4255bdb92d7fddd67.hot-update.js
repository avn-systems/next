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
    className: "jsx-3766788515",
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
    className: "jsx-3766788515",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    charSet: "utf-8",
    className: "jsx-3766788515",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    className: "jsx-3766788515",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "author",
    content: "Allan Avelar - https://allanavelar.com/",
    className: "jsx-3766788515",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    property: "og:site_name",
    content: ogSiteName,
    className: "jsx-3766788515",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    property: "og:title",
    content: ogTitle,
    className: "jsx-3766788515",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    property: "og:url",
    content: ogUrl,
    className: "jsx-3766788515",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    property: "og:type",
    content: ogType,
    className: "jsx-3766788515",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    property: "og:description",
    content: ogDescription,
    className: "jsx-3766788515",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    property: "og:image",
    content: "" + ogImage,
    className: "jsx-3766788515",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "twitter:card",
    content: "summary_large_image",
    className: "jsx-3766788515",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "twitter:site",
    content: twitterSite,
    className: "jsx-3766788515",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "twitter:creator",
    content: twitterCreator,
    className: "jsx-3766788515",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "canonical",
    href: canonical,
    className: "jsx-3766788515",
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
    className: "jsx-3766788515",
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
    className: "jsx-3766788515",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "apple-touch-icon",
    sizes: "114x114",
    href: "/static/images/icon.png",
    className: "jsx-3766788515",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "apple-touch-icon",
    sizes: "120x120",
    href: "/static/images/icon.png",
    className: "jsx-3766788515",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "apple-touch-icon",
    sizes: "144x144",
    href: "/static/images/icon.png",
    className: "jsx-3766788515",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "apple-touch-icon",
    sizes: "152x152",
    href: "/static/images/icon.png",
    className: "jsx-3766788515",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/static/images/icon.png",
    className: "jsx-3766788515",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "icon",
    type: "image/png",
    href: "/static/images/icon.png",
    className: "jsx-3766788515",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "shortcut icon",
    href: "/static/images/favicon.ico",
    className: "jsx-3766788515",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "mask-icon",
    href: "/assets/safari-pinned-tab.svg",
    color: "#5bbad5",
    className: "jsx-3766788515",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "manifest",
    href: "/static/manifest.json",
    className: "jsx-3766788515",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "msapplication-TileColor",
    content: "#5700AE",
    className: "jsx-3766788515",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "msapplication-TileImage",
    content: "/static/images/avn.systems.og-image.jpg",
    className: "jsx-3766788515",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "msapplication-config",
    content: "/static/browserconfig.xml",
    className: "jsx-3766788515",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "theme-color",
    content: "#5700AE",
    className: "jsx-3766788515",
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
    className: "jsx-3766788515",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "/static/css/nprogress.css",
    className: "jsx-3766788515",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("script", {
    defer: true,
    src: "https://code.jquery.com/jquery-3.3.1.min.js",
    className: "jsx-3766788515",
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
    className: "jsx-3766788515",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, children), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("menuhider", {
    className: "jsx-3766788515",
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
    className: "jsx-3766788515",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("bar", {
    className: "jsx-3766788515",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3766788515",
    css: "body{min-width:320px;background:url(".concat("", "/static/images/body-bg.jpg) #F5F7F6;}page{display:none;-webkit-transition:margin-left 350ms ease 0s;transition:margin-left 350ms ease 0s;}.ftl{float:left;}.ftr{float:right;}::-webkit-scrollbar{display:none;}body.left-menu header navtoggle bar:first-child{-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);position:relative;top:15px;}body.left-menu header navtoggle bar:nth-child(2){-webkit-transform:rotate(135deg);-ms-transform:rotate(135deg);transform:rotate(135deg);background:#000000;position:relative;top:5px;}body.left-menu header.resize navtoggle bar:nth-child(2){background:#f4f4f4;}body.left-menu header navtoggle bar:nth-child(3){opacity:0;}body.loaded menuhider{-webkit-transition:display 1s ease 1s;transition:display 1s ease 1s;display:none;opacity:0;}body.loaded pageloader{display:none;}menuhider{background-color:rgba(0,0,0,.5);pointer-events:all;position:fixed;display:block;z-index:1030;opacity:1;bottom:0;right:0;left:0;top:0;-webkit-transition:opacity 1s ease 0s;-moz-transition:opacity 1s ease 0s;-ms-transition:opacity 1s ease 0s;-o-transition:opacity 1s ease 0s;-webkit-transition:opacity 1s ease 0s;transition:opacity 1s ease 0s;}.nprogress-busy body.loaded pageloader{display:block;}pageloader{margin:-15px 0 0 -100px;border-radius:8px;background:#000;z-index:9999999;position:fixed;width:200px;height:30px;left:50%;top:50%;}pageloader bar{margin:-2px 0 0 -87px;-webkit-animation:gradtranslate 2s infinite linear;animation:gradtranslate 2s infinite linear;background-image:-webkit-gradient(linear,left top,right top,color-stop(0%,white),color-stop(50%,#8500FF),color-stop(100%,white));background-size:400px 1px;background-color:#8500FF;border-radius:5px;position:absolute;width:174px;opacity:.8;height:4px;left:50%;top:50%;}body.loaded leftmenu,body.loaded header,body.loaded footer,body.loaded page{display:block;}@media (min-width:1250px){body.left-menu header{width:calc(100% - 330px);margin-left:330px;}body.left-menu page{margin-left:330px;}}@media (min-width:1250px) and (max-width:1590px){body.left-menu topimage h1{max-width:calc(100% - 100px)!important;}body.left-menu content{max-width:calc(100% - 60px)!important;}}@media (max-width:1250px){body.left-menu header logo{left:400px!important;}body.left-menu header navtoggle{left:345px!important;}.nprogress-busy body.loaded menuhider,body.loaded.left-menu menuhider{display:block;opacity:1;}}@media screen and (max-width:625px){body.left-menu header navtoggle bar:nth-child(2){background:#f4f4f4;}}@media screen and (max-width:399px){body.left-menu leftmenu,leftmenu menuscroll{width:calc(100% - 69px)!important;max-width:330px;min-width:260px;}body.left-menu header navtoggle{left:calc(100% - 55px)!important;}}@media screen and (max-width:329px){body.left-menu header navtoggle{left:271px !important;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VidW50dS93b3Jrc3BhY2UvZXN0dWRvL25leHQvY29tcG9uZW50cy9pbnRlcmZhY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUZ1QixBQUc2QixBQUlILEFBSUYsQUFHQyxBQUdDLEFBSVcsQUFLQyxBQU1OLEFBR1QsQUFHb0IsQUFLakIsQUFHbUIsQUFrQmxCLEFBR1UsQUFXRixBQWtCUixBQUtlLEFBSVAsQUFNcUIsQUFHRCxBQUtqQixBQUdBLEFBSVAsQUFNSyxBQUtlLEFBS0QsQUFLWCxVQS9HOUIsQ0F4QkEsQ0FHQSxDQVB5QyxBQVV6QyxBQTBCQSxDQXFCQSxBQWdDQSxBQThCa0IsRUEzSGlFLEVBc0cvRSxDQXpFSixBQW9HSSxFQWJBLEFBR0EsQ0E1QzJDLEFBcUUzQyxFQWhGa0IsQUE0RGxCLENBMUJzQixPQXZESCxDQWdHbkIsQ0FMb0IsSUF2QnBCLENBSEEsR0EzQ2dCLENBa0NoQixPQW9Db0IsQ0EzRkwsT0FzQkMsUUFyQkYsQUEyRmQsRUFyR2EsTUFnQ0UsTUFyQkYsQ0FWSCxHQWxCUSxHQUtDLEVBNkNQLEVBL0JoQixFQVVjLEVBOUNkLEFBSUEsTUFnRWdCLENBbERILENBNkJBLEdBeEJTLEtBSnRCLENBNkJZLENBcUJDLEdBTXdILElBMUIxSCxFQXFCQyxFQTlDQSxHQTBCRixHQXFCVixFQTlDQSxDQTBCMEMsc0NBQ0gsbUNBQ0Qsa0NBQ0QsS0FzQlAsMEJBQ0QsRUF0QkssdUJBdUJaLGtCQUNBLGtCQUNOLFNBeEJoQixHQXlCZSxXQUNBLFdBQ0YsU0FDRCxRQUNaIiwiZmlsZSI6Ii9ob21lL3VidW50dS93b3Jrc3BhY2UvZXN0dWRvL25leHQvY29tcG9uZW50cy9pbnRlcmZhY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKmdsb2JhbCAkIG5hdmlnYXRvciovXG5pbXBvcnQgTGVmdE1lbnUgZnJvbSAnLi9pbnRlcmZhY2UvbGVmdG1lbnUnXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vaW50ZXJmYWNlL2hlYWRlcidcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9pbnRlcmZhY2UvZm9vdGVyJ1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5cbmltcG9ydCBOUHJvZ3Jlc3MgZnJvbSAnbnByb2dyZXNzJ1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcblxuUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VTdGFydCcsICh1cmwpID0+IHtcbiAgY29uc29sZS5sb2coYExvYWRpbmc6ICR7dXJsfWApXG4gIE5Qcm9ncmVzcy5zdGFydCgpXG59KVxuUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VDb21wbGV0ZScsICgpID0+IE5Qcm9ncmVzcy5kb25lKCkpXG5Sb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUVycm9yJywgKCkgPT4gTlByb2dyZXNzLmRvbmUoKSlcblxuZXhwb3J0IGRlZmF1bHQgKHsgY2hpbGRyZW4sXG4gICAgdGl0bGUgPSAnVGhpcyBpcyB0aGUgZGVmYXVsdCB0aXRsZScsXG4gICAgXG4gICAgb2dEZXNjcmlwdGlvbiA9IFwiV2Vic2l0ZSBjcmVhdGVkIHdpdGggbmV4dC5qcyBvcHRtaXplZCBhcyBhIFBXQVwiLFxuICAgIG9nU2l0ZU5hbWUgPSBcImF2bi5zeXN0ZW1zXCIsIG9nVGl0bGUgPSBcIldlYnNpdGUgfCBhdm4uc3lzdGVtc1wiLFxuICAgIG9nSW1hZ2UgPSAnL3N0YXRpYy9pbWFnZXMvYXZuLnN5c3RlbXMub2ctaW1hZ2UuanBnJyxcbiAgICBvZ1VybCA9IFwiaHR0cHM6Ly9hdm4uc3lzdGVtc1wiLCBvZ1R5cGUgPSBcImFydGljbGVcIixcbiAgICBcbiAgICBmZWVkSnNvbiA9IFwiaHR0cHM6Ly9hdm4uc3lzdGVtc20vZmVlZC5qc29uXCIsXG4gICAgZmVlZFhtbCA9IFwiaHR0cHM6Ly9hdm4uc3lzdGVtcy9mZWVkLnhtbFwiLFxuICAgIFxuICAgIGNhbm9uaWNhbCA9IFwiaHR0cHM6Ly9hdm4uc3lzdGVtc1wiLFxuICAgIFxuICAgIHR3aXR0ZXJDcmVhdG9yID0gXCJAYXZuLnN5c3RlbXNcIixcbiAgICB0d2l0dGVyU2l0ZSA9IFwiQGF2bi5zeXN0ZW1zXCIsXG4gIH0pID0+IChcbiAgPGludGVyZmFjZT5cbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT57IHRpdGxlIH08L3RpdGxlPlxuICAgICAgPG1ldGEgY2hhclNldD0ndXRmLTgnIC8+XG4gICAgICA8bWV0YSBuYW1lPSd2aWV3cG9ydCcgY29udGVudD0naW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aCcgLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJhdXRob3JcIiBjb250ZW50PVwiQWxsYW4gQXZlbGFyIC0gaHR0cHM6Ly9hbGxhbmF2ZWxhci5jb20vXCIgLz5cbiAgICAgIFxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpzaXRlX25hbWVcIiBjb250ZW50PXsgb2dTaXRlTmFtZSB9IC8+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD17IG9nVGl0bGUgfSAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PXsgb2dVcmwgfSAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0eXBlXCIgY29udGVudD17IG9nVHlwZSB9IC8+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD17IG9nRGVzY3JpcHRpb24gfSAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9eyBwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArIG9nSW1hZ2UgfSAvPlxuICAgIFxuICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6Y2FyZFwiIGNvbnRlbnQ9XCJzdW1tYXJ5X2xhcmdlX2ltYWdlXCIgLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOnNpdGVcIiBjb250ZW50PXsgdHdpdHRlclNpdGUgfSAvPlxuICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6Y3JlYXRvclwiIGNvbnRlbnQ9eyB0d2l0dGVyQ3JlYXRvciB9IC8+XG4gICAgXG4gICAgICA8bGluayByZWw9XCJjYW5vbmljYWxcIiBocmVmPXsgY2Fub25pY2FsIH0gLz5cbiAgICAgIDxsaW5rIHJlbD1cImFsdGVybmF0ZVwiIHR5cGU9XCJhcHBsaWNhdGlvbi9yc3MreG1sXCIgdGl0bGU9eyBvZ1RpdGxlIH0gaHJlZj17IGZlZWRYbWwgfSAvPlxuICAgICAgPGxpbmsgcmVsPVwiYWx0ZXJuYXRlXCIgdHlwZT1cImFwcGxpY2F0aW9uL2pzb25cIiB0aXRsZT17IG9nVGl0bGUgfSBocmVmPXsgZmVlZEpzb24gfSAvPlxuXG4gICAgICA8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCIxMTR4MTE0XCIgaHJlZj17IHByb2Nlc3MuZW52LkJBQ0tFTkRfVVJMICsgJy9zdGF0aWMvaW1hZ2VzL2ljb24ucG5nJ30gLz5cbiAgICAgIDxsaW5rIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBzaXplcz1cIjEyMHgxMjBcIiBocmVmPXsgcHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyAnL3N0YXRpYy9pbWFnZXMvaWNvbi5wbmcnfSAvPlxuICAgICAgPGxpbmsgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIHNpemVzPVwiMTQ0eDE0NFwiIGhyZWY9eyBwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArICcvc3RhdGljL2ltYWdlcy9pY29uLnBuZyd9IC8+XG4gICAgICA8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCIxNTJ4MTUyXCIgaHJlZj17IHByb2Nlc3MuZW52LkJBQ0tFTkRfVVJMICsgJy9zdGF0aWMvaW1hZ2VzL2ljb24ucG5nJ30gLz5cbiAgICAgIDxsaW5rIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBzaXplcz1cIjE4MHgxODBcIiBocmVmPXsgcHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyAnL3N0YXRpYy9pbWFnZXMvaWNvbi5wbmcnfSAvPlxuICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS9wbmdcIiBocmVmPXsgcHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyAnL3N0YXRpYy9pbWFnZXMvaWNvbi5wbmcnfSAvPlxuICAgICAgPGxpbmsgcmVsPVwic2hvcnRjdXQgaWNvblwiIGhyZWY9eyBwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArICcvc3RhdGljL2ltYWdlcy9mYXZpY29uLmljbyd9IC8+XG4gICAgICBcbiAgICAgIDxsaW5rIHJlbD1cIm1hc2staWNvblwiIGhyZWY9XCIvYXNzZXRzL3NhZmFyaS1waW5uZWQtdGFiLnN2Z1wiIGNvbG9yPVwiIzViYmFkNVwiIC8+XG4gICAgICA8bGluayByZWw9XCJtYW5pZmVzdFwiIGhyZWY9eyBwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArICcvc3RhdGljL21hbmlmZXN0Lmpzb24nfSAvPlxuICAgICAgXG4gICAgICA8bWV0YSBuYW1lPVwibXNhcHBsaWNhdGlvbi1UaWxlQ29sb3JcIiBjb250ZW50PVwiIzU3MDBBRVwiIC8+XG4gICAgICA8bWV0YSBuYW1lPVwibXNhcHBsaWNhdGlvbi1UaWxlSW1hZ2VcIiBjb250ZW50PXsgcHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyAnL3N0YXRpYy9pbWFnZXMvYXZuLnN5c3RlbXMub2ctaW1hZ2UuanBnJ30gLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJtc2FwcGxpY2F0aW9uLWNvbmZpZ1wiIGNvbnRlbnQ9eyBwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArICcvc3RhdGljL2Jyb3dzZXJjb25maWcueG1sJ30gLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJ0aGVtZS1jb2xvclwiIGNvbnRlbnQ9XCIjNTcwMEFFXCIgLz5cbiAgICAgIFxuICAgICAgPGxpbmsgZGVmZXIgcmVsPSdzdHlsZXNoZWV0JyBocmVmPSdodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjAuMC1iZXRhLjMvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJyBpbnRlZ3JpdHk9J3NoYTM4NC1adWcrUWlEb0pPclo1dDRsc3NMZHhHaFZydXJibUJXb3BvRWwrTTZCZEVmd25DSlp0S3hpMUtneFV5SnExM2R5JyBjcm9zc09yaWdpbj0nYW5vbnltb3VzJyAvPlxuICAgICAgPGxpbmsgcmVsPSdzdHlsZXNoZWV0JyB0eXBlPSd0ZXh0L2NzcycgaHJlZj17IHByb2Nlc3MuZW52LkJBQ0tFTkRfVVJMICsgJy9zdGF0aWMvY3NzL25wcm9ncmVzcy5jc3MnfSAvPlxuICAgICAgPHNjcmlwdCBkZWZlciBzcmM9XCJodHRwczovL2NvZGUuanF1ZXJ5LmNvbS9qcXVlcnktMy4zLjEubWluLmpzXCI+PC9zY3JpcHQ+XG4gICAgPC9IZWFkPlxuICAgIDxIZWFkZXIgLz5cbiAgICA8TGVmdE1lbnUgLz5cbiAgICA8cGFnZT5cbiAgICAgICAgeyBjaGlsZHJlbiB9XG4gICAgPC9wYWdlPlxuICAgIDxtZW51aGlkZXI+PC9tZW51aGlkZXI+XG4gICAgPEZvb3RlciAvPlxuICAgIDxwYWdlbG9hZGVyPjxiYXI+PC9iYXI+PC9wYWdlbG9hZGVyPlxuICAgIFxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgICAgbWluLXdpZHRoOiAzMjBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgke3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMfS9zdGF0aWMvaW1hZ2VzL2JvZHktYmcuanBnKSAjRjVGN0Y2O1xuICAgICAgICB9XG4gICAgICAgIHBhZ2Uge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IDM1MG1zIGVhc2UgMHM7XG4gICAgICAgIH1cbiAgICAgICAgLmZ0bCB7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgfVxuICAgICAgICAuZnRyIHtcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgfVxuICAgICAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGJvZHkubGVmdC1tZW51IGhlYWRlciBuYXZ0b2dnbGUgYmFyOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHRvcDogMTVweDtcbiAgICAgICAgfVxuICAgICAgICBib2R5LmxlZnQtbWVudSBoZWFkZXIgbmF2dG9nZ2xlIGJhcjpudGgtY2hpbGQoMikge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDAwMDA7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB0b3A6IDVweDtcbiAgICAgICAgfVxuICAgICAgICBib2R5LmxlZnQtbWVudSBoZWFkZXIucmVzaXplIG5hdnRvZ2dsZSBiYXI6bnRoLWNoaWxkKDIpIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmNGY0ZjQ7XG4gICAgICAgIH1cbiAgICAgICAgYm9keS5sZWZ0LW1lbnUgaGVhZGVyIG5hdnRvZ2dsZSBiYXI6bnRoLWNoaWxkKDMpIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIH1cbiAgICAgICAgYm9keS5sb2FkZWQgbWVudWhpZGVyIHtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGRpc3BsYXkgMXMgZWFzZSAxcztcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB9XG4gICAgICAgIGJvZHkubG9hZGVkIHBhZ2Vsb2FkZXIge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICBtZW51aGlkZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwuNSk7XG4gICAgICAgICAgICBwb2ludGVyLWV2ZW50czogYWxsO1xuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB6LWluZGV4OiAxMDMwO1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlIDBzO1xuICAgICAgICAgICAgLW1vei10cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2UgMHM7XG4gICAgICAgICAgICAtbXMtdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlIDBzO1xuICAgICAgICAgICAgLW8tdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlIDBzO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlIDBzO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAubnByb2dyZXNzLWJ1c3kgYm9keS5sb2FkZWQgcGFnZWxvYWRlciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgICAgICBwYWdlbG9hZGVyIHtcbiAgICAgICAgICAgIG1hcmdpbjogLTE1cHggMCAwIC0xMDBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDA7XG4gICAgICAgICAgICB6LWluZGV4OiA5OTk5OTk5O1xuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIH1cbiAgICAgICAgcGFnZWxvYWRlciBiYXIge1xuICAgICAgICAgICAgbWFyZ2luOiAtMnB4IDAgMCAtODdweDtcbiAgICAgICAgICAgIGFuaW1hdGlvbjogZ3JhZHRyYW5zbGF0ZSAycyBpbmZpbml0ZSBsaW5lYXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhcixsZWZ0IHRvcCxyaWdodCB0b3AsY29sb3Itc3RvcCgwJSx3aGl0ZSksY29sb3Itc3RvcCg1MCUsIzg1MDBGRiksY29sb3Itc3RvcCgxMDAlLHdoaXRlKSk7O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiA0MDBweCAxcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODUwMEZGO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgd2lkdGg6IDE3NHB4O1xuICAgICAgICAgICAgb3BhY2l0eTogLjg7XG4gICAgICAgICAgICBoZWlnaHQ6IDRweDtcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBib2R5LmxvYWRlZCBsZWZ0bWVudSxcbiAgICAgICAgYm9keS5sb2FkZWQgaGVhZGVyLFxuICAgICAgICBib2R5LmxvYWRlZCBmb290ZXIsXG4gICAgICAgIGJvZHkubG9hZGVkIHBhZ2Uge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMjUwcHgpIHtcbiAgICAgICAgICAgIGJvZHkubGVmdC1tZW51IGhlYWRlciB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDMzMHB4KTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMzMwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBib2R5LmxlZnQtbWVudSBwYWdlIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMzMwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMjUwcHgpIGFuZCAobWF4LXdpZHRoOiAxNTkwcHgpIHtcbiAgICAgICAgICAgIGJvZHkubGVmdC1tZW51IHRvcGltYWdlIGgxIHtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDEwMHB4KSFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBib2R5LmxlZnQtbWVudSBjb250ZW50IHtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDYwcHgpIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTI1MHB4KSB7XG4gICAgICAgICAgICBib2R5LmxlZnQtbWVudSBoZWFkZXIgbG9nbyB7XG4gICAgICAgICAgICAgICAgbGVmdDogNDAwcHghaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYm9keS5sZWZ0LW1lbnUgaGVhZGVyIG5hdnRvZ2dsZSB7XG4gICAgICAgICAgICAgICAgbGVmdDogMzQ1cHghaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm5wcm9ncmVzcy1idXN5IGJvZHkubG9hZGVkIG1lbnVoaWRlcixcbiAgICAgICAgICAgIGJvZHkubG9hZGVkLmxlZnQtbWVudSBtZW51aGlkZXIge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjI1cHgpIHtcbiAgICAgICAgICAgIGJvZHkubGVmdC1tZW51IGhlYWRlciBuYXZ0b2dnbGUgYmFyOm50aC1jaGlsZCgyKSB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2Y0ZjRmNDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzOTlweCkge1xuICAgICAgICAgICAgYm9keS5sZWZ0LW1lbnUgbGVmdG1lbnUsIGxlZnRtZW51IG1lbnVzY3JvbGwge1xuICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA2OXB4KSFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAzMzBweDtcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDI2MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYm9keS5sZWZ0LW1lbnUgaGVhZGVyIG5hdnRvZ2dsZSB7XG4gICAgICAgICAgICAgICAgbGVmdDogY2FsYygxMDAlIC0gNTVweCkhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyOXB4KSB7XG4gICAgICAgICAgICBib2R5LmxlZnQtbWVudSBoZWFkZXIgbmF2dG9nZ2xlIHtcbiAgICAgICAgICAgICAgICBsZWZ0OiAyNzFweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2ludGVyZmFjZT5cbikiXX0= */\n/*@ sourceURL=/home/ubuntu/workspace/estudo/next/components/interface.js */"),
    __self: this
  }));
});

/***/ })

})
//# sourceMappingURL=_error.js.15d4255bdb92d7fddd67.hot-update.js.map