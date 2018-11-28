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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_md_lib_Avatars__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-md/lib/Avatars */ "./node_modules/react-md/lib/Avatars/index.js");
/* harmony import */ var react_md_lib_Avatars__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_md_lib_Avatars__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_md_lib_Buttons_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-md/lib/Buttons/Button */ "./node_modules/react-md/lib/Buttons/Button.js");
/* harmony import */ var react_md_lib_Buttons_Button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_md_lib_Buttons_Button__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_md_lib_FontIcons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-md/lib/FontIcons */ "./node_modules/react-md/lib/FontIcons/index.js");
/* harmony import */ var react_md_lib_FontIcons__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_md_lib_FontIcons__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_md_lib_Lists_ListItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-md/lib/Lists/ListItem */ "./node_modules/react-md/lib/Lists/ListItem.js");
/* harmony import */ var react_md_lib_Lists_ListItem__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_md_lib_Lists_ListItem__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_md_lib_NavigationDrawers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-md/lib/NavigationDrawers */ "./node_modules/react-md/lib/NavigationDrawers/index.js");
/* harmony import */ var react_md_lib_NavigationDrawers__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_md_lib_NavigationDrawers__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_md_lib_SelectFields__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-md/lib/SelectFields */ "./node_modules/react-md/lib/SelectFields/index.js");
/* harmony import */ var react_md_lib_SelectFields__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_md_lib_SelectFields__WEBPACK_IMPORTED_MODULE_11__);

var _jsxFileName = "/home/ubuntu/workspace/next/pages/_app.js";


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }












next_router__WEBPACK_IMPORTED_MODULE_4___default.a.events.on('routeChangeStart', function (url) {
  console.log("Loading: ".concat(url));
  nprogress__WEBPACK_IMPORTED_MODULE_3___default.a.start();
});
next_router__WEBPACK_IMPORTED_MODULE_4___default.a.events.on('routeChangeComplete', function () {
  return nprogress__WEBPACK_IMPORTED_MODULE_3___default.a.done();
});
next_router__WEBPACK_IMPORTED_MODULE_4___default.a.events.on('routeChangeError', function () {
  return nprogress__WEBPACK_IMPORTED_MODULE_3___default.a.done();
});
var avatarSrc = 'https://cloud.githubusercontent.com/assets/13041/19686250/971bf7f8-9ac0-11e6-975c-188defd82df1.png';
var drawerHeaderChildren = [react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_md_lib_Avatars__WEBPACK_IMPORTED_MODULE_6___default.a, {
  style: {
    alignSelf: 'center',
    marginLeft: 12,
    marginRight: 5,
    flexShrink: 0
  },
  key: avatarSrc,
  src: avatarSrc,
  role: "presentation",
  iconSized: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_md_lib_SelectFields__WEBPACK_IMPORTED_MODULE_11___default.a, {
  position: react_md_lib_SelectFields__WEBPACK_IMPORTED_MODULE_11___default.a.Positions.BELOW,
  className: "md-select-field--toolbar",
  menuItems: ['Jonathan', 'Fred'],
  defaultValue: "Jonathan",
  key: "account-switcher",
  id: "account-switcher",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30
  },
  __self: undefined
})];
var toolbarActions = [react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_md_lib_Buttons_Button__WEBPACK_IMPORTED_MODULE_7___default.a, {
  icon: true,
  tooltipDelay: 150,
  tooltipPosition: "right",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41
  },
  __self: undefined
}, "star"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_md_lib_Buttons_Button__WEBPACK_IMPORTED_MODULE_7___default.a, {
  icon: true,
  tooltipLabel: "Share this page",
  tooltipDelay: 150,
  tooltipPosition: "left",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44
  },
  __self: undefined
}, "share")];

var NavigationLink =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(NavigationLink, _PureComponent);

  function NavigationLink() {
    _classCallCheck(this, NavigationLink);

    return _possibleConstructorReturn(this, _getPrototypeOf(NavigationLink).apply(this, arguments));
  }

  _createClass(NavigationLink, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          href = _this$props.href,
          as = _this$props.as,
          children = _this$props.children,
          _props = _objectWithoutProperties(_this$props, ["href", "as", "children"]);

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", _extends({}, _props, {
        style: {
          padding: 0
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        href: href,
        as: as,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "md-list-tile md-list-tile--mini",
        style: {
          width: '100%',
          overflow: 'hidden'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, children)));
    }
  }]);

  return NavigationLink;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]);

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
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          Component = _this$props2.Component,
          pageProps = _this$props2.pageProps;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_app__WEBPACK_IMPORTED_MODULE_2__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_md_lib_NavigationDrawers__WEBPACK_IMPORTED_MODULE_10___default.a, {
        navItems: [react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_md_lib_Lists_ListItem__WEBPACK_IMPORTED_MODULE_9___default.a, {
          key: "0",
          component: NavigationLink,
          href: "/",
          as: "/",
          leftIcon: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_md_lib_FontIcons__WEBPACK_IMPORTED_MODULE_8___default.a, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 98
            },
            __self: this
          }, "inbox"),
          tileClassName: "md-list-tile--mini",
          primaryText: 'Home',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_md_lib_Lists_ListItem__WEBPACK_IMPORTED_MODULE_9___default.a, {
          key: "1",
          component: NavigationLink,
          href: "/about",
          as: "/about",
          leftIcon: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_md_lib_FontIcons__WEBPACK_IMPORTED_MODULE_8___default.a, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 106
            },
            __self: this
          }, "info"),
          tileClassName: "md-list-tile--mini",
          primaryText: 'About',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 102
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_md_lib_Lists_ListItem__WEBPACK_IMPORTED_MODULE_9___default.a, {
          key: "2",
          component: NavigationLink,
          href: "/tvmaze",
          as: "/tvmaze",
          leftIcon: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_md_lib_FontIcons__WEBPACK_IMPORTED_MODULE_8___default.a, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 114
            },
            __self: this
          }, "tv"),
          tileClassName: "md-list-tile--mini",
          primaryText: 'TV Maze',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 110
          },
          __self: this
        })],
        contentClassName: "md-grid",
        drawerHeaderChildren: drawerHeaderChildren,
        mobileDrawerType: react_md_lib_NavigationDrawers__WEBPACK_IMPORTED_MODULE_10___default.a.DrawerTypes.TEMPORARY,
        tabletDrawerType: react_md_lib_NavigationDrawers__WEBPACK_IMPORTED_MODULE_10___default.a.DrawerTypes.PERSISTENT_MINI,
        desktopDrawerType: react_md_lib_NavigationDrawers__WEBPACK_IMPORTED_MODULE_10___default.a.DrawerTypes.PERSISTENT_MINI,
        toolbarActions: toolbarActions,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Component, _extends({}, pageProps, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }))));
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
}(next_app__WEBPACK_IMPORTED_MODULE_2___default.a);


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
//# sourceMappingURL=_app.js.3583dcd7d2f2a4e7001f.hot-update.js.map