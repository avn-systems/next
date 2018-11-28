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
        className: "jsx-1678728577",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("logo", {
        className: "jsx-1678728577",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("text", {
        className: "jsx-1678728577",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, "AVN SYSTEMS")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("nav", {
        className: "jsx-1678728577",
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
        className: "jsx-1678728577",
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
        className: "jsx-1678728577",
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
        className: "jsx-1678728577",
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
        className: "jsx-1678728577",
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
        className: "jsx-1678728577",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, "404"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("navtoggle", {
        className: "jsx-1678728577",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("bar", {
        className: "jsx-1678728577",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("bar", {
        className: "jsx-1678728577",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("bar", {
        className: "jsx-1678728577",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("navslider", {
        className: "jsx-1678728577",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        styleId: "1678728577",
        css: "header.jsx-1678728577{overflow:hidden;position:fixed;z-index:10000;height:90px;width:100%;}header.jsx-1678728577 logo.jsx-1678728577{position:absolute;padding:16px 0px;width:170px;left:90px;top:10px;background-image:url(./static/images/icon.png);background-repeat:no-repeat;background-size:contain;-webkit-filter:grayscale(100%) brightness(2);-webkit-filter:grayscale(100%) brightness(2);filter:grayscale(100%) brightness(2);-webkit-filter:url(./static/images/filters.svg#grayscale);-webkit-filter:url(./static/images/filters.svg#grayscale);filter:url(./static/images/filters.svg#grayscale);-webkit-filter:gray;-webkit-filter:gray;filter:gray;-webkit-filter:grayscale(100%) brightness(2);-moz-filter:grayscale(100%) brightness(2);-ms-filter:grayscale(100%) brightness(2);-o-filter:grayscale(100%) brightness(2);-webkit-transition:all 150ms ease-in-out;-moz-transition:all 150ms ease-in-out;-ms-transition:all 150ms ease-in-out;-o-transition:all 150ms ease-in-out;-webkit-transition:all 150ms ease-in-out;transition:all 150ms ease-in-out;}header.jsx-1678728577 logo.jsx-1678728577:hover{-webkit-filter:none;-moz-filter:none;-o-filter:none;-webkit-filter:none;filter:none;}header.jsx-1678728577 logo.jsx-1678728577 text.jsx-1678728577{display:-webkit-inline-box;text-transform:uppercase;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;position:relative;font-weight:bold;min-width:110px;font-size:14px;color:black;left:60px;}header.jsx-1678728577 nav.jsx-1678728577{margin:0 20px;float:right;}header.jsx-1678728577 nav.jsx-1678728577 a.jsx-1678728577{-webkit-text-decoration:none;text-decoration:none;display:inline-block;margin:25px 10px;}header.jsx-1678728577 nav.jsx-1678728577 a.jsx-1678728577:hover{color:#8500FF;}header.jsx-1678728577 navtoggle.jsx-1678728577{cursor:pointer;display:inline-block;position:absolute;width:45px;left:20px;top:15px;}header.jsx-1678728577 navtoggle.jsx-1678728577 bar.jsx-1678728577{border-bottom:2px solid #aaa;margin:7px 0;width:100%;height:5px;display:block;}header.jsx-1678728577 navtoggle.jsx-1678728577:hover bar.jsx-1678728577{border-bottom:2px solid #bc73ff;}header.jsx-1678728577 navslider.jsx-1678728577{border-bottom:4px solid #8500FF;position:absolute;height:0;top:50px;-webkit-transition:all 250ms ease-in-out;-moz-transition:all 250ms ease-in-out;-ms-transition:all 250ms ease-in-out;-o-transition:all 250ms ease-in-out;-webkit-transition:all 250ms ease-in-out;transition:all 250ms ease-in-out;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VidW50dS93b3Jrc3BhY2UvbmV4dC9wYWdlcy9fYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZEb0IsQUFHNkIsQUFPRSxBQStCRSxBQU1PLEFBV2IsQUFJTyxBQUtQLEFBR0MsQUFRYyxBQU9HLEFBR0EsY0E3QnBCLEFBU2QsQ0FHdUIsQ0FuRU4sRUFPRSxFQStCQSxNQWtCbkIsQ0FaMkIsRUErQlosRUExRUMsQ0FpRmhCLEFBR29CLEdBN0VOLENBNERNLENBN0JILEtBcUNKLEdBMUVDLEVBT0YsR0FrRFcsQUEyQlosRUE5Q0csQUFLTyxDQWdDUixDQVJBLEdBbEVBLEFBT0YsRUE2RUEsS0FUSyxDQVJKLENBMURxQyxFQVJqRCxBQXFGMkMsR0E3QnhCLElBV1IsR0FRWCxNQXRDQSxBQStCQSxJQVhBLHFCQTZCd0MsSUE3RVYsNEJBQ0osSUFnQ04sRUE2Q21CLGdCQTVDcEIsRUEvQjRCLGVBZ0M3QixJQTRDb0IsWUEzQ3JCLGNBaENzQixDQWlDekIsU0EyQ3FCLEdBMUN2QixVQUNaLDJEQWpDNEQsRUEyRTVELHdEQTFFb0QsNEdBRTlCLG9CQUNSLGdDQUVpQyw2Q0FDSCwwQ0FDRCx5Q0FDRCx3Q0FFQyx5Q0FDSCxzQ0FDRCxxQ0FDRCxvQ0FDSCwwRUFDbkMiLCJmaWxlIjoiL2hvbWUvdWJ1bnR1L3dvcmtzcGFjZS9uZXh0L3BhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXBwLCB7Q29udGFpbmVyfSBmcm9tICduZXh0L2FwcCdcbmltcG9ydCBOUHJvZ3Jlc3MgZnJvbSAnbnByb2dyZXNzJ1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VTdGFydCcsICh1cmwpID0+IHtcbiAgY29uc29sZS5sb2coYExvYWRpbmc6ICR7dXJsfWApXG4gIE5Qcm9ncmVzcy5zdGFydCgpXG59KVxuUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VDb21wbGV0ZScsICgpID0+IE5Qcm9ncmVzcy5kb25lKCkpXG5Sb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUVycm9yJywgKCkgPT4gTlByb2dyZXNzLmRvbmUoKSlcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXlBcHAgZXh0ZW5kcyBBcHAge1xuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzICh7IENvbXBvbmVudCwgcm91dGVyLCBjdHggfSkge1xuICAgIGxldCBwYWdlUHJvcHMgPSB7fVxuXG4gICAgaWYgKENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIHBhZ2VQcm9wcyA9IGF3YWl0IENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuICAgIH1cblxuICAgIHJldHVybiB7cGFnZVByb3BzfVxuICB9XG4gIFxuICBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgaWYgKCdzZXJ2aWNlV29ya2VyJyBpbiBuYXZpZ2F0b3IpIHtcbiAgICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyXG4gICAgICAgIC5yZWdpc3Rlcihwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArJy9zZXJ2aWNlLXdvcmtlci5qcycpXG4gICAgICAgIC50aGVuKHJlZ2lzdHJhdGlvbiA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ3NlcnZpY2Ugd29ya2VyIHJlZ2lzdHJhdGlvbiBzdWNjZXNzZnVsJylcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgY29uc29sZS53YXJuKCdzZXJ2aWNlIHdvcmtlciByZWdpc3RyYXRpb24gZmFpbGVkJywgZXJyLm1lc3NhZ2UpXG4gICAgICAgIH0pXG4gICAgfVxuICAgICQoXCJoZWFkZXIgbmF2IGFcIikuaG92ZXIoZnVuY3Rpb24oKSB7XG4gICAgICAgICQoXCJoZWFkZXIgbmF2c2xpZGVyXCIpLmNzcyh7XG4gICAgICAgICAgbGVmdDogJCh0aGlzKS5wb3NpdGlvbigpLmxlZnQgKyBwYXJzZUludCgkKHRoaXMpLmNzcyhcIm1hcmdpbkxlZnRcIikpICsgXCJweFwiLFxuICAgICAgICAgIHdpZHRoOiAkKHRoaXMpLndpZHRoKCkgKyBcInB4XCIsXG4gICAgICAgICAgb3BhY2l0eTogXCIuOTk5XCJcbiAgICAgICAgfSlcbiAgICAgIH0sIGZ1bmN0aW9uKCkge1xuICAgICAgICAkKFwiaGVhZGVyIG5hdnNsaWRlclwiKS5jc3MoXCJvcGFjaXR5XCIsIFwiMFwiKVxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7Q29tcG9uZW50LCBwYWdlUHJvcHN9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiAoXG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgIDxsb2dvPjx0ZXh0PkFWTiBTWVNURU1TPC90ZXh0PjwvbG9nbz5cbiAgICAgICAgICA8bmF2PlxuICAgICAgICAgICAgPExpbmsgaHJlZj0nLycgYXM9eyBwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArIGAvYH0+PGE+SG9tZTwvYT48L0xpbms+XG4gICAgICAgICAgICA8TGluayBocmVmPScvYWJvdXQnIGFzPXsgcHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyBgL2Fib3V0YH0+PGE+QWJvdXQ8L2E+PC9MaW5rPlxuICAgICAgICAgICAgPExpbmsgaHJlZj0nL3R2bWF6ZScgYXM9eyBwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArIGAvdHZtYXplYH0+PGE+VFYgTWF6ZTwvYT48L0xpbms+XG4gICAgICAgICAgICA8TGluayBocmVmPScvcmVhY3QtbWQnIGFzPXsgcHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyBgL3JlYWN0LW1kYH0+PGE+UmVhY3QgTUQ8L2E+PC9MaW5rPlxuICAgICAgICAgICAgPExpbmsgaHJlZj0nLzQwNCcgYXM9eyBwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArIGAvNDA0YH0+PGE+NDA0PC9hPjwvTGluaz5cbiAgICAgICAgICA8L25hdj5cbiAgICAgICAgICA8bmF2dG9nZ2xlPjxiYXI+PC9iYXI+PGJhcj48L2Jhcj48YmFyPjwvYmFyPjwvbmF2dG9nZ2xlPlxuICAgICAgICAgIDxuYXZzbGlkZXI+PC9uYXZzbGlkZXI+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgaGVhZGVyIHtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICB6LWluZGV4OiAxMDAwMDtcbiAgICAgICAgICAgIGhlaWdodDogOTBweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBoZWFkZXIgbG9nbyB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBwYWRkaW5nOiAxNnB4IDBweDtcbiAgICAgICAgICAgIHdpZHRoOiAxNzBweDtcbiAgICAgICAgICAgIGxlZnQ6IDkwcHg7XG4gICAgICAgICAgICB0b3A6IDEwcHg7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL3N0YXRpYy9pbWFnZXMvaWNvbi5wbmcpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLXdlYmtpdC1maWx0ZXI6IGdyYXlzY2FsZSgxMDAlKSBicmlnaHRuZXNzKDIpO1xuICAgICAgICAgICAgZmlsdGVyOiBncmF5c2NhbGUoMTAwJSkgYnJpZ2h0bmVzcygyKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLXdlYmtpdC1maWx0ZXI6IHVybCguL3N0YXRpYy9pbWFnZXMvZmlsdGVycy5zdmcjZ3JheXNjYWxlKTtcbiAgICAgICAgICAgIGZpbHRlcjogdXJsKC4vc3RhdGljL2ltYWdlcy9maWx0ZXJzLnN2ZyNncmF5c2NhbGUpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAtd2Via2l0LWZpbHRlcjogZ3JheTtcbiAgICAgICAgICAgIGZpbHRlcjogZ3JheTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLXdlYmtpdC1maWx0ZXI6IGdyYXlzY2FsZSgxMDAlKSBicmlnaHRuZXNzKDIpO1xuICAgICAgICAgICAgLW1vei1maWx0ZXI6IGdyYXlzY2FsZSgxMDAlKSBicmlnaHRuZXNzKDIpO1xuICAgICAgICAgICAgLW1zLWZpbHRlcjogZ3JheXNjYWxlKDEwMCUpIGJyaWdodG5lc3MoMik7XG4gICAgICAgICAgICAtby1maWx0ZXI6IGdyYXlzY2FsZSgxMDAlKSBicmlnaHRuZXNzKDIpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAxNTBtcyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDE1MG1zIGVhc2UtaW4tb3V0O1xuICAgICAgICAgICAgLW1zLXRyYW5zaXRpb246IGFsbCAxNTBtcyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgIC1vLXRyYW5zaXRpb246IGFsbCAxNTBtcyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAxNTBtcyBlYXNlLWluLW91dDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaGVhZGVyIGxvZ286aG92ZXIge1xuICAgICAgICAgICAgLXdlYmtpdC1maWx0ZXI6IG5vbmU7XG4gICAgICAgICAgICAtbW96LWZpbHRlcjogbm9uZTtcbiAgICAgICAgICAgIC1vLWZpbHRlcjogbm9uZTtcbiAgICAgICAgICAgIGZpbHRlcjogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaGVhZGVyIGxvZ28gdGV4dCB7XG4gICAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWlubGluZS1ib3g7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgbWluLXdpZHRoOiAxMTBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgIGxlZnQ6IDYwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGhlYWRlciBuYXYge1xuICAgICAgICAgICAgbWFyZ2luOiAwIDIwcHg7XG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGhlYWRlciBuYXYgYSB7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBtYXJnaW46IDI1cHggMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaGVhZGVyIG5hdiBhOmhvdmVyIHtcbiAgICAgICAgICAgIGNvbG9yOiAjODUwMEZGO1xuICAgICAgICAgIH1cbiAgICAgICAgICBoZWFkZXIgbmF2dG9nZ2xlIHtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHdpZHRoOiA0NXB4O1xuICAgICAgICAgICAgbGVmdDogMjBweDtcbiAgICAgICAgICAgIHRvcDogMTVweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaGVhZGVyIG5hdnRvZ2dsZSBiYXIge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNhYWE7XG4gICAgICAgICAgICBtYXJnaW46IDdweCAwO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDVweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBoZWFkZXIgbmF2dG9nZ2xlOmhvdmVyIGJhciB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2JjNzNmZjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaGVhZGVyIG5hdnNsaWRlciB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiA0cHggc29saWQgIzg1MDBGRjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgICAgIHRvcDogNTBweDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMjUwbXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAyNTBtcyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMjUwbXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICAtby10cmFuc2l0aW9uOiBhbGwgMjUwbXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMjUwbXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgKVxuICB9XG59Il19 */\n/*@ sourceURL=/home/ubuntu/workspace/next/pages/_app.js */",
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Component, _extends({}, pageProps, {
        className: "jsx-1678728577" + " " + (pageProps.className != null && pageProps.className || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
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
//# sourceMappingURL=_app.js.94fe73a1fe6dfa487315.hot-update.js.map