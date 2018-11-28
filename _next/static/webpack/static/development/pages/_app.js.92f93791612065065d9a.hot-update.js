webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "/home/ubuntu/workspace/next/pages/_app.js";



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





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

var MyApp =
/*#__PURE__*/
function (_App) {
  _inherits(MyApp, _App);

  function MyApp() {
    _classCallCheck(this, MyApp);

    return _possibleConstructorReturn(this, _getPrototypeOf(MyApp).apply(this, arguments));
  }

  _createClass(MyApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register("/service-worker.js").then(function (registration) {
          console.log('service worker registration successful');
        }).catch(function (err) {
          console.warn('service worker registration failed', err.message);
        });
      }

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
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps;
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_app__WEBPACK_IMPORTED_MODULE_3__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("header", {
        className: "jsx-2687467405",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("logo", {
        className: "jsx-2687467405",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("text", {
        className: "jsx-2687467405",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, "AVN SYSTEMS")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("nav", {
        className: "jsx-2687467405",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/",
        as: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
        className: "jsx-2687467405",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, "Home")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/about",
        as: "/about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
        className: "jsx-2687467405",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, "About")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/tvmaze",
        as: "/tvmaze",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
        className: "jsx-2687467405",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, "TV Maze")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/react-md",
        as: "/react-md",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
        className: "jsx-2687467405",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, "React MD")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/404",
        as: "/404",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
        className: "jsx-2687467405",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, "404"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("navtoggle", {
        className: "jsx-2687467405",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("bar", {
        className: "jsx-2687467405",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("bar", {
        className: "jsx-2687467405",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("bar", {
        className: "jsx-2687467405",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("navslider", {
        className: "jsx-2687467405",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        styleId: "971970981",
        css: "header.jsx-2687467405{overflow:hidden;position:fixed;z-index:10000;height:90px;width:100%;}header.jsx-2687467405 logo.jsx-2687467405{position:absolute;padding:16px 0px;width:170px;left:90px;top:10px;background-image:url(./static/images/icon.png);background-repeat:no-repeat;background-size:contain;-webkit-filter:grayscale(100%) brightness(2);-webkit-filter:grayscale(100%) brightness(2);filter:grayscale(100%) brightness(2);-webkit-filter:url(./static/images/filters.svg#grayscale);-webkit-filter:url(./static/images/filters.svg#grayscale);filter:url(./static/images/filters.svg#grayscale);-webkit-filter:gray;-webkit-filter:gray;filter:gray;-webkit-filter:grayscale(100%) brightness(2);-moz-filter:grayscale(100%) brightness(2);-ms-filter:grayscale(100%) brightness(2);-o-filter:grayscale(100%) brightness(2);-webkit-transition:all 150ms ease-in-out;-moz-transition:all 150ms ease-in-out;-ms-transition:all 150ms ease-in-out;-o-transition:all 150ms ease-in-out;-webkit-transition:all 150ms ease-in-out;transition:all 150ms ease-in-out;}header.jsx-2687467405 logo.jsx-2687467405:hover{-webkit-filter:none;-moz-filter:none;-o-filter:none;-webkit-filter:none;filter:none;}header.jsx-2687467405 logo.jsx-2687467405 text.jsx-2687467405{display:-webkit-inline-box;text-transform:uppercase;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;position:relative;font-weight:bold;min-width:110px;font-size:14px;color:black;left:60px;}header.jsx-2687467405 nav.jsx-2687467405{margin:0 20px;float:right;}header.jsx-2687467405 nav.jsx-2687467405 a.jsx-2687467405{-webkit-text-decoration:none;text-decoration:none;display:inline-block;text-transform:uppercase;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;font-weight:bold;margin:25px 10px;font-size:14px;}header.jsx-2687467405 nav.jsx-2687467405 a.jsx-2687467405:hover{color:#8500FF;}header.jsx-2687467405 navtoggle.jsx-2687467405{cursor:pointer;display:inline-block;position:absolute;width:45px;left:20px;top:15px;}header.jsx-2687467405 navtoggle.jsx-2687467405 bar.jsx-2687467405{border-bottom:2px solid #aaa;margin:7px 0;width:100%;height:5px;display:block;}header.jsx-2687467405 navtoggle.jsx-2687467405:hover bar.jsx-2687467405{border-bottom:2px solid #bc73ff;}header.jsx-2687467405 navslider.jsx-2687467405{border-bottom:4px solid #8500FF;position:absolute;height:0;top:50px;-webkit-transition:all 250ms ease-in-out;-moz-transition:all 250ms ease-in-out;-ms-transition:all 250ms ease-in-out;-o-transition:all 250ms ease-in-out;-webkit-transition:all 250ms ease-in-out;transition:all 250ms ease-in-out;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VidW50dS93b3Jrc3BhY2UvbmV4dC9wYWdlcy9fYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZEb0IsQUFHNkIsQUFPRSxBQStCRSxBQU1PLEFBV2IsQUFJTyxBQVNQLEFBR0MsQUFRYyxBQU9HLEFBR0EsY0FqQ3BCLEFBYWQsQ0FHdUIsQ0F2RU4sRUFPRSxFQStCQSxNQWtCbkIsQ0FaMkIsRUFtQ1osRUE5RUMsQ0FxRmhCLEFBR29CLEdBakZOLENBZ0VNLENBakNILEtBeUNKLEdBOUVDLEVBT0YsR0FrRFcsQUErQlosRUFsREcsQUFLTyxDQW9DUixDQVJBLEdBdEVBLEFBT0YsRUFpRkEsS0FUSyxDQVJKLENBOURxQyxFQVJqRCxBQXlGMkMsR0FqQ2hCLElBZWhCLEdBUVgsTUExQ0EsQUFtQ0EsWUFmcUIsYUFpQ21CLElBakZWLDRCQUNKLElBZ0NOLEVBaURtQixnQkFoRHBCLEVBL0I0QixlQWdDN0IsSUFnRG9CLEtBbENuQixPQWJGLFVBY0UsSUE5Q29CLENBaUN6QixTQStDcUIsR0E5Q3ZCLEFBYUssVUFaakIsS0FhQSxzREE5QzRELEVBK0U1RCx3REE5RW9ELDRHQUU5QixvQkFDUixnQ0FFaUMsNkNBQ0gsMENBQ0QseUNBQ0Qsd0NBRUMseUNBQ0gsc0NBQ0QscUNBQ0Qsb0NBQ0gsMEVBQ25DIiwiZmlsZSI6Ii9ob21lL3VidW50dS93b3Jrc3BhY2UvbmV4dC9wYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFwcCwge0NvbnRhaW5lcn0gZnJvbSAnbmV4dC9hcHAnXG5pbXBvcnQgTlByb2dyZXNzIGZyb20gJ25wcm9ncmVzcydcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cblJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlU3RhcnQnLCAodXJsKSA9PiB7XG4gIGNvbnNvbGUubG9nKGBMb2FkaW5nOiAke3VybH1gKVxuICBOUHJvZ3Jlc3Muc3RhcnQoKVxufSlcblJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCAoKSA9PiBOUHJvZ3Jlc3MuZG9uZSgpKVxuUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VFcnJvcicsICgpID0+IE5Qcm9ncmVzcy5kb25lKCkpXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE15QXBwIGV4dGVuZHMgQXBwIHtcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyAoeyBDb21wb25lbnQsIHJvdXRlciwgY3R4IH0pIHtcbiAgICBsZXQgcGFnZVByb3BzID0ge31cblxuICAgIGlmIChDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBwYWdlUHJvcHMgPSBhd2FpdCBDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKGN0eClcbiAgICB9XG5cbiAgICByZXR1cm4ge3BhZ2VQcm9wc31cbiAgfVxuICBcbiAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuICAgIGlmICgnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSB7XG4gICAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlclxuICAgICAgICAucmVnaXN0ZXIocHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKycvc2VydmljZS13b3JrZXIuanMnKVxuICAgICAgICAudGhlbihyZWdpc3RyYXRpb24gPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdzZXJ2aWNlIHdvcmtlciByZWdpc3RyYXRpb24gc3VjY2Vzc2Z1bCcpXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgIGNvbnNvbGUud2Fybignc2VydmljZSB3b3JrZXIgcmVnaXN0cmF0aW9uIGZhaWxlZCcsIGVyci5tZXNzYWdlKVxuICAgICAgICB9KVxuICAgIH1cbiAgICAkKFwiaGVhZGVyIG5hdiBhXCIpLmhvdmVyKGZ1bmN0aW9uKCkge1xuICAgICAgICAkKFwiaGVhZGVyIG5hdnNsaWRlclwiKS5jc3Moe1xuICAgICAgICAgIGxlZnQ6ICQodGhpcykucG9zaXRpb24oKS5sZWZ0ICsgcGFyc2VJbnQoJCh0aGlzKS5jc3MoXCJtYXJnaW5MZWZ0XCIpKSArIFwicHhcIixcbiAgICAgICAgICB3aWR0aDogJCh0aGlzKS53aWR0aCgpICsgXCJweFwiLFxuICAgICAgICAgIG9wYWNpdHk6IFwiLjk5OVwiXG4gICAgICAgIH0pXG4gICAgICB9LCBmdW5jdGlvbigpIHtcbiAgICAgICAgJChcImhlYWRlciBuYXZzbGlkZXJcIikuY3NzKFwib3BhY2l0eVwiLCBcIjBcIilcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3Qge0NvbXBvbmVudCwgcGFnZVByb3BzfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4gKFxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgICA8bG9nbz48dGV4dD5BVk4gU1lTVEVNUzwvdGV4dD48L2xvZ28+XG4gICAgICAgICAgPG5hdj5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nIGFzPXsgcHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyBgL2B9PjxhPkhvbWU8L2E+PC9MaW5rPlxuICAgICAgICAgICAgPExpbmsgaHJlZj0nL2Fib3V0JyBhcz17IHByb2Nlc3MuZW52LkJBQ0tFTkRfVVJMICsgYC9hYm91dGB9PjxhPkFib3V0PC9hPjwvTGluaz5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy90dm1hemUnIGFzPXsgcHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyBgL3R2bWF6ZWB9PjxhPlRWIE1hemU8L2E+PC9MaW5rPlxuICAgICAgICAgICAgPExpbmsgaHJlZj0nL3JlYWN0LW1kJyBhcz17IHByb2Nlc3MuZW52LkJBQ0tFTkRfVVJMICsgYC9yZWFjdC1tZGB9PjxhPlJlYWN0IE1EPC9hPjwvTGluaz5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy80MDQnIGFzPXsgcHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyBgLzQwNGB9PjxhPjQwNDwvYT48L0xpbms+XG4gICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgPG5hdnRvZ2dsZT48YmFyPjwvYmFyPjxiYXI+PC9iYXI+PGJhcj48L2Jhcj48L25hdnRvZ2dsZT5cbiAgICAgICAgICA8bmF2c2xpZGVyPjwvbmF2c2xpZGVyPlxuICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIGhlYWRlciB7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgei1pbmRleDogMTAwMDA7XG4gICAgICAgICAgICBoZWlnaHQ6IDkwcHg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaGVhZGVyIGxvZ28ge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgcGFkZGluZzogMTZweCAwcHg7XG4gICAgICAgICAgICB3aWR0aDogMTcwcHg7XG4gICAgICAgICAgICBsZWZ0OiA5MHB4O1xuICAgICAgICAgICAgdG9wOiAxMHB4O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9zdGF0aWMvaW1hZ2VzL2ljb24ucG5nKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC13ZWJraXQtZmlsdGVyOiBncmF5c2NhbGUoMTAwJSkgYnJpZ2h0bmVzcygyKTtcbiAgICAgICAgICAgIGZpbHRlcjogZ3JheXNjYWxlKDEwMCUpIGJyaWdodG5lc3MoMik7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC13ZWJraXQtZmlsdGVyOiB1cmwoLi9zdGF0aWMvaW1hZ2VzL2ZpbHRlcnMuc3ZnI2dyYXlzY2FsZSk7XG4gICAgICAgICAgICBmaWx0ZXI6IHVybCguL3N0YXRpYy9pbWFnZXMvZmlsdGVycy5zdmcjZ3JheXNjYWxlKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLXdlYmtpdC1maWx0ZXI6IGdyYXk7XG4gICAgICAgICAgICBmaWx0ZXI6IGdyYXk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC13ZWJraXQtZmlsdGVyOiBncmF5c2NhbGUoMTAwJSkgYnJpZ2h0bmVzcygyKTtcbiAgICAgICAgICAgIC1tb3otZmlsdGVyOiBncmF5c2NhbGUoMTAwJSkgYnJpZ2h0bmVzcygyKTtcbiAgICAgICAgICAgIC1tcy1maWx0ZXI6IGdyYXlzY2FsZSgxMDAlKSBicmlnaHRuZXNzKDIpO1xuICAgICAgICAgICAgLW8tZmlsdGVyOiBncmF5c2NhbGUoMTAwJSkgYnJpZ2h0bmVzcygyKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMTUwbXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAxNTBtcyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMTUwbXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICAtby10cmFuc2l0aW9uOiBhbGwgMTUwbXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMTUwbXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGhlYWRlciBsb2dvOmhvdmVyIHtcbiAgICAgICAgICAgIC13ZWJraXQtZmlsdGVyOiBub25lO1xuICAgICAgICAgICAgLW1vei1maWx0ZXI6IG5vbmU7XG4gICAgICAgICAgICAtby1maWx0ZXI6IG5vbmU7XG4gICAgICAgICAgICBmaWx0ZXI6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGhlYWRlciBsb2dvIHRleHQge1xuICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1pbmxpbmUtYm94O1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIG1pbi13aWR0aDogMTEwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICBsZWZ0OiA2MHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBoZWFkZXIgbmF2IHtcbiAgICAgICAgICAgIG1hcmdpbjogMCAyMHB4O1xuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgIH1cbiAgICAgICAgICBoZWFkZXIgbmF2IGEge1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIG1hcmdpbjogMjVweCAxMHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBoZWFkZXIgbmF2IGE6aG92ZXIge1xuICAgICAgICAgICAgY29sb3I6ICM4NTAwRkY7XG4gICAgICAgICAgfVxuICAgICAgICAgIGhlYWRlciBuYXZ0b2dnbGUge1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgd2lkdGg6IDQ1cHg7XG4gICAgICAgICAgICBsZWZ0OiAyMHB4O1xuICAgICAgICAgICAgdG9wOiAxNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBoZWFkZXIgbmF2dG9nZ2xlIGJhciB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2FhYTtcbiAgICAgICAgICAgIG1hcmdpbjogN3B4IDA7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogNXB4O1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgfVxuICAgICAgICAgIGhlYWRlciBuYXZ0b2dnbGU6aG92ZXIgYmFyIHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjYmM3M2ZmO1xuICAgICAgICAgIH1cbiAgICAgICAgICBoZWFkZXIgbmF2c2xpZGVyIHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjODUwMEZGO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICAgICAgdG9wOiA1MHB4O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAyNTBtcyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDI1MG1zIGVhc2UtaW4tb3V0O1xuICAgICAgICAgICAgLW1zLXRyYW5zaXRpb246IGFsbCAyNTBtcyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgIC1vLXRyYW5zaXRpb246IGFsbCAyNTBtcyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAyNTBtcyBlYXNlLWluLW91dDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICBwYWdlIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDE4NXB4IDIwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cblxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICApXG4gIH1cbn0iXX0= */\n/*@ sourceURL=/home/ubuntu/workspace/next/pages/_app.js */",
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        styleId: "2180587809",
        css: "page{padding:185px 20px;display:block;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VidW50dS93b3Jrc3BhY2UvbmV4dC9wYWdlcy9fYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9LMkIsQUFHZ0MsbUJBQ0wsY0FDaEIiLCJmaWxlIjoiL2hvbWUvdWJ1bnR1L3dvcmtzcGFjZS9uZXh0L3BhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXBwLCB7Q29udGFpbmVyfSBmcm9tICduZXh0L2FwcCdcbmltcG9ydCBOUHJvZ3Jlc3MgZnJvbSAnbnByb2dyZXNzJ1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VTdGFydCcsICh1cmwpID0+IHtcbiAgY29uc29sZS5sb2coYExvYWRpbmc6ICR7dXJsfWApXG4gIE5Qcm9ncmVzcy5zdGFydCgpXG59KVxuUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VDb21wbGV0ZScsICgpID0+IE5Qcm9ncmVzcy5kb25lKCkpXG5Sb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUVycm9yJywgKCkgPT4gTlByb2dyZXNzLmRvbmUoKSlcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXlBcHAgZXh0ZW5kcyBBcHAge1xuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzICh7IENvbXBvbmVudCwgcm91dGVyLCBjdHggfSkge1xuICAgIGxldCBwYWdlUHJvcHMgPSB7fVxuXG4gICAgaWYgKENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIHBhZ2VQcm9wcyA9IGF3YWl0IENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuICAgIH1cblxuICAgIHJldHVybiB7cGFnZVByb3BzfVxuICB9XG4gIFxuICBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgaWYgKCdzZXJ2aWNlV29ya2VyJyBpbiBuYXZpZ2F0b3IpIHtcbiAgICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyXG4gICAgICAgIC5yZWdpc3Rlcihwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArJy9zZXJ2aWNlLXdvcmtlci5qcycpXG4gICAgICAgIC50aGVuKHJlZ2lzdHJhdGlvbiA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ3NlcnZpY2Ugd29ya2VyIHJlZ2lzdHJhdGlvbiBzdWNjZXNzZnVsJylcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgY29uc29sZS53YXJuKCdzZXJ2aWNlIHdvcmtlciByZWdpc3RyYXRpb24gZmFpbGVkJywgZXJyLm1lc3NhZ2UpXG4gICAgICAgIH0pXG4gICAgfVxuICAgICQoXCJoZWFkZXIgbmF2IGFcIikuaG92ZXIoZnVuY3Rpb24oKSB7XG4gICAgICAgICQoXCJoZWFkZXIgbmF2c2xpZGVyXCIpLmNzcyh7XG4gICAgICAgICAgbGVmdDogJCh0aGlzKS5wb3NpdGlvbigpLmxlZnQgKyBwYXJzZUludCgkKHRoaXMpLmNzcyhcIm1hcmdpbkxlZnRcIikpICsgXCJweFwiLFxuICAgICAgICAgIHdpZHRoOiAkKHRoaXMpLndpZHRoKCkgKyBcInB4XCIsXG4gICAgICAgICAgb3BhY2l0eTogXCIuOTk5XCJcbiAgICAgICAgfSlcbiAgICAgIH0sIGZ1bmN0aW9uKCkge1xuICAgICAgICAkKFwiaGVhZGVyIG5hdnNsaWRlclwiKS5jc3MoXCJvcGFjaXR5XCIsIFwiMFwiKVxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7Q29tcG9uZW50LCBwYWdlUHJvcHN9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiAoXG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgIDxsb2dvPjx0ZXh0PkFWTiBTWVNURU1TPC90ZXh0PjwvbG9nbz5cbiAgICAgICAgICA8bmF2PlxuICAgICAgICAgICAgPExpbmsgaHJlZj0nLycgYXM9eyBwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArIGAvYH0+PGE+SG9tZTwvYT48L0xpbms+XG4gICAgICAgICAgICA8TGluayBocmVmPScvYWJvdXQnIGFzPXsgcHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyBgL2Fib3V0YH0+PGE+QWJvdXQ8L2E+PC9MaW5rPlxuICAgICAgICAgICAgPExpbmsgaHJlZj0nL3R2bWF6ZScgYXM9eyBwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArIGAvdHZtYXplYH0+PGE+VFYgTWF6ZTwvYT48L0xpbms+XG4gICAgICAgICAgICA8TGluayBocmVmPScvcmVhY3QtbWQnIGFzPXsgcHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyBgL3JlYWN0LW1kYH0+PGE+UmVhY3QgTUQ8L2E+PC9MaW5rPlxuICAgICAgICAgICAgPExpbmsgaHJlZj0nLzQwNCcgYXM9eyBwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArIGAvNDA0YH0+PGE+NDA0PC9hPjwvTGluaz5cbiAgICAgICAgICA8L25hdj5cbiAgICAgICAgICA8bmF2dG9nZ2xlPjxiYXI+PC9iYXI+PGJhcj48L2Jhcj48YmFyPjwvYmFyPjwvbmF2dG9nZ2xlPlxuICAgICAgICAgIDxuYXZzbGlkZXI+PC9uYXZzbGlkZXI+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgaGVhZGVyIHtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICB6LWluZGV4OiAxMDAwMDtcbiAgICAgICAgICAgIGhlaWdodDogOTBweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBoZWFkZXIgbG9nbyB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBwYWRkaW5nOiAxNnB4IDBweDtcbiAgICAgICAgICAgIHdpZHRoOiAxNzBweDtcbiAgICAgICAgICAgIGxlZnQ6IDkwcHg7XG4gICAgICAgICAgICB0b3A6IDEwcHg7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL3N0YXRpYy9pbWFnZXMvaWNvbi5wbmcpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLXdlYmtpdC1maWx0ZXI6IGdyYXlzY2FsZSgxMDAlKSBicmlnaHRuZXNzKDIpO1xuICAgICAgICAgICAgZmlsdGVyOiBncmF5c2NhbGUoMTAwJSkgYnJpZ2h0bmVzcygyKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLXdlYmtpdC1maWx0ZXI6IHVybCguL3N0YXRpYy9pbWFnZXMvZmlsdGVycy5zdmcjZ3JheXNjYWxlKTtcbiAgICAgICAgICAgIGZpbHRlcjogdXJsKC4vc3RhdGljL2ltYWdlcy9maWx0ZXJzLnN2ZyNncmF5c2NhbGUpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAtd2Via2l0LWZpbHRlcjogZ3JheTtcbiAgICAgICAgICAgIGZpbHRlcjogZ3JheTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLXdlYmtpdC1maWx0ZXI6IGdyYXlzY2FsZSgxMDAlKSBicmlnaHRuZXNzKDIpO1xuICAgICAgICAgICAgLW1vei1maWx0ZXI6IGdyYXlzY2FsZSgxMDAlKSBicmlnaHRuZXNzKDIpO1xuICAgICAgICAgICAgLW1zLWZpbHRlcjogZ3JheXNjYWxlKDEwMCUpIGJyaWdodG5lc3MoMik7XG4gICAgICAgICAgICAtby1maWx0ZXI6IGdyYXlzY2FsZSgxMDAlKSBicmlnaHRuZXNzKDIpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAxNTBtcyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDE1MG1zIGVhc2UtaW4tb3V0O1xuICAgICAgICAgICAgLW1zLXRyYW5zaXRpb246IGFsbCAxNTBtcyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgIC1vLXRyYW5zaXRpb246IGFsbCAxNTBtcyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAxNTBtcyBlYXNlLWluLW91dDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaGVhZGVyIGxvZ286aG92ZXIge1xuICAgICAgICAgICAgLXdlYmtpdC1maWx0ZXI6IG5vbmU7XG4gICAgICAgICAgICAtbW96LWZpbHRlcjogbm9uZTtcbiAgICAgICAgICAgIC1vLWZpbHRlcjogbm9uZTtcbiAgICAgICAgICAgIGZpbHRlcjogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaGVhZGVyIGxvZ28gdGV4dCB7XG4gICAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWlubGluZS1ib3g7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgbWluLXdpZHRoOiAxMTBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgIGxlZnQ6IDYwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGhlYWRlciBuYXYge1xuICAgICAgICAgICAgbWFyZ2luOiAwIDIwcHg7XG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGhlYWRlciBuYXYgYSB7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgbWFyZ2luOiAyNXB4IDEwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGhlYWRlciBuYXYgYTpob3ZlciB7XG4gICAgICAgICAgICBjb2xvcjogIzg1MDBGRjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaGVhZGVyIG5hdnRvZ2dsZSB7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB3aWR0aDogNDVweDtcbiAgICAgICAgICAgIGxlZnQ6IDIwcHg7XG4gICAgICAgICAgICB0b3A6IDE1cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGhlYWRlciBuYXZ0b2dnbGUgYmFyIHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjYWFhO1xuICAgICAgICAgICAgbWFyZ2luOiA3cHggMDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiA1cHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICB9XG4gICAgICAgICAgaGVhZGVyIG5hdnRvZ2dsZTpob3ZlciBiYXIge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNiYzczZmY7XG4gICAgICAgICAgfVxuICAgICAgICAgIGhlYWRlciBuYXZzbGlkZXIge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICM4NTAwRkY7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgICAgICB0b3A6IDUwcHg7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDI1MG1zIGVhc2UtaW4tb3V0O1xuICAgICAgICAgICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMjUwbXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDI1MG1zIGVhc2UtaW4tb3V0O1xuICAgICAgICAgICAgLW8tdHJhbnNpdGlvbjogYWxsIDI1MG1zIGVhc2UtaW4tb3V0O1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDI1MG1zIGVhc2UtaW4tb3V0O1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgIHBhZ2Uge1xuICAgICAgICAgICAgcGFkZGluZzogMTg1cHggMjBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuXG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIClcbiAgfVxufSJdfQ== */\n/*@ sourceURL=/home/ubuntu/workspace/next/pages/_app.js */",
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Component, _extends({}, pageProps, {
        className: "jsx-2687467405" + " " + (pageProps.className != null && pageProps.className || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        },
        __self: this
      })));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var Component, router, ctx, pageProps;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Component = _ref.Component, router = _ref.router, ctx = _ref.ctx;
                pageProps = {};

                if (!Component.getInitialProps) {
                  _context.next = 6;
                  break;
                }

                _context.next = 5;
                return Component.getInitialProps(ctx);

              case 5:
                pageProps = _context.sent;

              case 6:
                return _context.abrupt("return", {
                  pageProps: pageProps
                });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_3___default.a);


    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/_app")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=_app.js.92f93791612065065d9a.hot-update.js.map