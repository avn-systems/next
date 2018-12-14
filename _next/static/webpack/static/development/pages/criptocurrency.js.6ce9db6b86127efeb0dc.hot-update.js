webpackHotUpdate("static/development/pages/criptocurrency.js",{

/***/ "./components/menuitems.js":
/*!*********************************!*\
  !*** ./components/menuitems.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MenuItems; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/ubuntu/workspace/estudo/next/components/menuitems.js";



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var MenuItems =
/*#__PURE__*/
function (_Component) {
  _inherits(MenuItems, _Component);

  function MenuItems(props) {
    _classCallCheck(this, MenuItems);

    return _possibleConstructorReturn(this, _getPrototypeOf(MenuItems).call(this, props));
  }

  _createClass(MenuItems, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("menuitems", {
        className: "jsx-3399892426",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("btn", {
        className: "jsx-3399892426" + " " + ((this.props.selected === 'BLOCKCHAIN' ? 'active' : '') || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, "BLOCKCHAIN"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("btn", {
        className: "jsx-3399892426" + " " + ((this.props.selected === 'CRYPTOCURRENCY' ? 'active' : '') || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, ">CRYPTOCURRENCY"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("btn", {
        className: "jsx-3399892426" + " " + ((this.props.selected === 'SECURITY' ? 'active' : '') || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, ">SECURITY & PRIVACY"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("btn", {
        className: "jsx-3399892426" + " " + ((this.props.selected === 'PAYMENTS' ? 'active' : '') || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, ">PAYMENTS"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("btn", {
        className: "jsx-3399892426" + " " + ((this.props.selected === 'EXCHANGES' ? 'active' : '') || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, ">EXCHANGES"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", {
        className: "jsx-3399892426",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("btn", {
        className: "jsx-3399892426" + " " + ((this.props.selected === 'SOFTWARE' ? 'active' : '') || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, ">SOFTWARE DEVELOPMENT"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("btn", {
        className: "jsx-3399892426" + " " + ((this.props.selected === 'MOBILE' ? 'active' : '') || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, ">MOBILE APPLICATIONS"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", {
        className: "jsx-3399892426",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("btnsolid", {
        className: "jsx-3399892426",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, "CONTACT US"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", {
        className: "jsx-3399892426",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "3399892426",
        css: "@media (max-width:768px){}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VidW50dS93b3Jrc3BhY2UvZXN0dWRvL25leHQvY29tcG9uZW50cy9tZW51aXRlbXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEJvQiIsImZpbGUiOiIvaG9tZS91YnVudHUvd29ya3NwYWNlL2VzdHVkby9uZXh0L2NvbXBvbmVudHMvbWVudWl0ZW1zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnVJdGVtcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgPG1lbnVpdGVtcz5cbiAgICAgICAgPGJ0biBjbGFzc05hbWU9e3RoaXMucHJvcHMuc2VsZWN0ZWQgPT09ICdCTE9DS0NIQUlOJyA/ICdhY3RpdmUnIDogJyd9PlxuICAgICAgICAgICAgQkxPQ0tDSEFJTjwvYnRuPlxuICAgICAgICA8YnRuIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5zZWxlY3RlZCA9PT0gJ0NSWVBUT0NVUlJFTkNZJyA/ICdhY3RpdmUnIDogJyd9PlxuICAgICAgICAgICAgPkNSWVBUT0NVUlJFTkNZPC9idG4+XG4gICAgICAgIDxidG4gY2xhc3NOYW1lPXt0aGlzLnByb3BzLnNlbGVjdGVkID09PSAnU0VDVVJJVFknID8gJ2FjdGl2ZScgOiAnJ30+XG4gICAgICAgICAgICA+U0VDVVJJVFkgJiBQUklWQUNZPC9idG4+XG4gICAgICAgIDxidG4gY2xhc3NOYW1lPXt0aGlzLnByb3BzLnNlbGVjdGVkID09PSAnUEFZTUVOVFMnID8gJ2FjdGl2ZScgOiAnJ30+XG4gICAgICAgICAgICA+UEFZTUVOVFM8L2J0bj5cbiAgICAgICAgPGJ0biBjbGFzc05hbWU9e3RoaXMucHJvcHMuc2VsZWN0ZWQgPT09ICdFWENIQU5HRVMnID8gJ2FjdGl2ZScgOiAnJ30+XG4gICAgICAgICAgICA+RVhDSEFOR0VTPC9idG4+XG4gICAgICAgIDxociAvPlxuICAgICAgICA8YnRuIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5zZWxlY3RlZCA9PT0gJ1NPRlRXQVJFJyA/ICdhY3RpdmUnIDogJyd9PlxuICAgICAgICAgICAgPlNPRlRXQVJFIERFVkVMT1BNRU5UPC9idG4+XG4gICAgICAgIDxidG4gY2xhc3NOYW1lPXt0aGlzLnByb3BzLnNlbGVjdGVkID09PSAnTU9CSUxFJyA/ICdhY3RpdmUnIDogJyd9PlxuICAgICAgICAgICAgPk1PQklMRSBBUFBMSUNBVElPTlM8L2J0bj5cbiAgICAgICAgPGhyIC8+XG4gICAgICAgIDxidG5zb2xpZD5DT05UQUNUIFVTPC9idG5zb2xpZD5cbiAgICAgICAgPGhyIC8+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICA8L21lbnVpdGVtcz5cbiAgICApO1xuICB9XG59Il19 */\n/*@ sourceURL=/home/ubuntu/workspace/estudo/next/components/menuitems.js */",
        __self: this
      }));
    }
  }]);

  return MenuItems;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);



/***/ })

})
//# sourceMappingURL=criptocurrency.js.6ce9db6b86127efeb0dc.hot-update.js.map