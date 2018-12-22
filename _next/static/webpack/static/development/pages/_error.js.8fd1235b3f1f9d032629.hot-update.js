webpackHotUpdate("static/development/pages/_error.js",{

/***/ "./pages/avnsystems/interface/menuitems.js":
/*!*************************************************!*\
  !*** ./pages/avnsystems/interface/menuitems.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MenuItems; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../routes */ "./pages/routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/ubuntu/workspace/estudo/next/pages/avnsystems/interface/menuitems.js";



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
        className: "jsx-3141878382",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        route: "/services/blockchain",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("btn", {
        className: "jsx-3141878382" + " " + ((this.props.selected === 'BLOCKCHAIN' || this.props.selected === 'SERVICES' ? 'active' : '') || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, "BLOCKCHAIN")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        route: "/services/criptocurrency",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("btn", {
        className: "jsx-3141878382" + " " + ((this.props.selected === 'CRYPTOCURRENCY' ? 'active' : '') || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, "CRYPTOCURRENCY")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        route: "/services/security",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("btn", {
        className: "jsx-3141878382" + " " + ((this.props.selected === 'SECURITY' ? 'active' : '') || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, "SECURITY & PRIVACY")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        route: "/services/payments",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("btn", {
        className: "jsx-3141878382" + " " + ((this.props.selected === 'PAYMENTS' ? 'active' : '') || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, "PAYMENTS")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        route: "/services/exchanges",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("btn", {
        className: "jsx-3141878382" + " " + ((this.props.selected === 'EXCHANGES' ? 'active' : '') || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, "EXCHANGES")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", {
        className: "jsx-3141878382",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        route: "/services/softwares",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("btn", {
        className: "jsx-3141878382" + " " + ((this.props.selected === 'SOFTWARE' ? 'active' : '') || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "SOFTWARE DEVELOPMENT")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        route: "/services/mobile",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("btn", {
        className: "jsx-3141878382" + " " + ((this.props.selected === 'MOBILE' ? 'active' : '') || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, "MOBILE APPLICATIONS")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", {
        className: "jsx-3141878382",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: this.props.email ? 'mailto:' + this.props.email : 'mailto:contact@allanavelar.com',
        className: "jsx-3141878382",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("btnsolid", {
        className: "jsx-3141878382",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, "CONTACT US")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", {
        className: "jsx-3141878382",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "3141878382",
        css: "menuitems.jsx-3141878382 btn.jsx-3141878382:hover{color:#8500FF;}menuitems.jsx-3141878382 btn.active.jsx-3141878382{pointer-events:none;cursor:default;color:#141414;}menuitems.jsx-3141878382 btn.jsx-3141878382{text-transform:uppercase;font-weight:500;cursor:pointer;display:block;padding:5px 0;color:#999;}menuitems.jsx-3141878382 btnsolid.jsx-3141878382{text-transform:uppercase;border-bottom:3px solid #ddd;background:#8500FF;text-align:center;line-height:50px;font-weight:500;cursor:pointer;display:block;padding:5px 0;color:white;}menuitems.jsx-3141878382 btnsolid.jsx-3141878382:hover{background:#9c31ff;}menuitems.jsx-3141878382 hr.jsx-3141878382{border-top:1px solid #ddd;border-bottom:1px solid #fff;}@media (max-width:768px){}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VidW50dS93b3Jrc3BhY2UvZXN0dWRvL25leHQvcGFnZXMvYXZuc3lzdGVtcy9pbnRlcmZhY2UvbWVudWl0ZW1zLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNEb0IsQUFHK0IsQUFHTSxBQUtLLEFBUUEsQUFZTixBQUdPLGNBOUI5QixLQTRCQSxDQXpCbUIsS0FLQyxBQVFhLENBZUEsU0EzQmYsTUFLQyxRQUpuQixLQVl1QixDQWV2QixDQXRCa0IsY0FDQSxHQU9JLFdBTlAsT0FPTSxJQU5yQixhQU9vQixnQkFDRCxlQUNELGNBQ0EsY0FDRixZQUNoQiIsImZpbGUiOiIvaG9tZS91YnVudHUvd29ya3NwYWNlL2VzdHVkby9uZXh0L3BhZ2VzL2F2bnN5c3RlbXMvaW50ZXJmYWNlL21lbnVpdGVtcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExpbmssIFJvdXRlciB9IGZyb20gJy4vLi4vLi4vcm91dGVzJ1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnVJdGVtcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgPG1lbnVpdGVtcz5cbiAgICAgICAgPExpbmsgcm91dGU9Jy9zZXJ2aWNlcy9ibG9ja2NoYWluJz5cbiAgICAgICAgICAgIDxidG4gY2xhc3NOYW1lPXt0aGlzLnByb3BzLnNlbGVjdGVkID09PSAnQkxPQ0tDSEFJTicgfHwgdGhpcy5wcm9wcy5zZWxlY3RlZCA9PT0gJ1NFUlZJQ0VTJyA/ICdhY3RpdmUnIDogJyd9PlxuICAgICAgICAgICAgQkxPQ0tDSEFJTjwvYnRuPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIFxuICAgICAgICA8TGluayByb3V0ZT0nL3NlcnZpY2VzL2NyaXB0b2N1cnJlbmN5Jz5cbiAgICAgICAgICAgIDxidG4gY2xhc3NOYW1lPXt0aGlzLnByb3BzLnNlbGVjdGVkID09PSAnQ1JZUFRPQ1VSUkVOQ1knID8gJ2FjdGl2ZScgOiAnJ30+XG4gICAgICAgICAgICBDUllQVE9DVVJSRU5DWTwvYnRuPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIFxuICAgICAgICA8TGluayByb3V0ZT0nL3NlcnZpY2VzL3NlY3VyaXR5Jz5cbiAgICAgICAgICAgIDxidG4gY2xhc3NOYW1lPXt0aGlzLnByb3BzLnNlbGVjdGVkID09PSAnU0VDVVJJVFknID8gJ2FjdGl2ZScgOiAnJ30+XG4gICAgICAgICAgICBTRUNVUklUWSAmIFBSSVZBQ1k8L2J0bj5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICBcbiAgICAgICAgPExpbmsgcm91dGU9Jy9zZXJ2aWNlcy9wYXltZW50cyc+XG4gICAgICAgICAgICA8YnRuIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5zZWxlY3RlZCA9PT0gJ1BBWU1FTlRTJyA/ICdhY3RpdmUnIDogJyd9PlxuICAgICAgICAgICAgUEFZTUVOVFM8L2J0bj5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICBcbiAgICAgICAgPExpbmsgcm91dGU9Jy9zZXJ2aWNlcy9leGNoYW5nZXMnPlxuICAgICAgICAgICAgPGJ0biBjbGFzc05hbWU9e3RoaXMucHJvcHMuc2VsZWN0ZWQgPT09ICdFWENIQU5HRVMnID8gJ2FjdGl2ZScgOiAnJ30+XG4gICAgICAgICAgICBFWENIQU5HRVM8L2J0bj5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICBcbiAgICAgICAgPGhyIC8+XG4gICAgICAgIFxuICAgICAgICA8TGluayByb3V0ZT0nL3NlcnZpY2VzL3NvZnR3YXJlcyc+XG4gICAgICAgICAgICA8YnRuIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5zZWxlY3RlZCA9PT0gJ1NPRlRXQVJFJyA/ICdhY3RpdmUnIDogJyd9PlxuICAgICAgICAgICAgICAgIFNPRlRXQVJFIERFVkVMT1BNRU5UPC9idG4+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgXG4gICAgICAgIDxMaW5rIHJvdXRlPScvc2VydmljZXMvbW9iaWxlJz5cbiAgICAgICAgICAgIDxidG4gY2xhc3NOYW1lPXt0aGlzLnByb3BzLnNlbGVjdGVkID09PSAnTU9CSUxFJyA/ICdhY3RpdmUnIDogJyd9PlxuICAgICAgICAgICAgICAgIE1PQklMRSBBUFBMSUNBVElPTlM8L2J0bj5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICBcbiAgICAgICAgPGhyIC8+XG4gICAgICAgIFxuICAgICAgICA8YSBocmVmPXt0aGlzLnByb3BzLmVtYWlsID8gJ21haWx0bzonICsgdGhpcy5wcm9wcy5lbWFpbCA6ICdtYWlsdG86Y29udGFjdEBhbGxhbmF2ZWxhci5jb20nfT5cbiAgICAgICAgICAgIDxidG5zb2xpZD5DT05UQUNUIFVTPC9idG5zb2xpZD5cbiAgICAgICAgPC9hPlxuICAgICAgICA8aHIgLz5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgbWVudWl0ZW1zIGJ0bjpob3ZlciB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM4NTAwRkY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtZW51aXRlbXMgYnRuLmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMTQxNDE0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbWVudWl0ZW1zIGJ0biB7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzk5OTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1lbnVpdGVtcyBidG5zb2xpZCB7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI2RkZDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjODUwMEZGO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNTBweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMDtcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtZW51aXRlbXMgYnRuc29saWQ6aG92ZXIge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICM5YzMxZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtZW51aXRlbXMgaHIge1xuICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGRkO1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmO1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgYH08L3N0eWxlPlxuICAgIDwvbWVudWl0ZW1zPlxuICAgICk7XG4gIH1cbn0iXX0= */\n/*@ sourceURL=/home/ubuntu/workspace/estudo/next/pages/avnsystems/interface/menuitems.js */",
        __self: this
      }));
    }
  }]);

  return MenuItems;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);


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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/avnsystems/interface/menuitems")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=_error.js.8fd1235b3f1f9d032629.hot-update.js.map