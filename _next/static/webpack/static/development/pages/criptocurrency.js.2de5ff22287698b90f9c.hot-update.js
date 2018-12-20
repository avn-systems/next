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
        className: "jsx-3141878382",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Link, {
        href: "/services/blockchain",
        as: "/blockchain",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("btn", {
        className: "jsx-3141878382" + " " + ((this.props.selected === 'BLOCKCHAIN' ? 'active' : '') || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, "BLOCKCHAIN")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Link, {
        href: "/services/criptocurrency",
        as: "/criptocurrency",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("btn", {
        className: "jsx-3141878382" + " " + ((this.props.selected === 'CRYPTOCURRENCY' ? 'active' : '') || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, "CRYPTOCURRENCY")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Link, {
        href: "/services/security",
        as: "/security",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("btn", {
        className: "jsx-3141878382" + " " + ((this.props.selected === 'SECURITY' ? 'active' : '') || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, "SECURITY & PRIVACY")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Link, {
        href: "/services/payments",
        as: "/payments",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("btn", {
        className: "jsx-3141878382" + " " + ((this.props.selected === 'PAYMENTS' ? 'active' : '') || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, "PAYMENTS")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Link, {
        href: "/services/exchanges",
        as: "/exchanges",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("btn", {
        className: "jsx-3141878382" + " " + ((this.props.selected === 'EXCHANGES' ? 'active' : '') || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, "EXCHANGES")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", {
        className: "jsx-3141878382",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("btn", {
        className: "jsx-3141878382" + " " + ((this.props.selected === 'SOFTWARE' ? 'active' : '') || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, "SOFTWARE DEVELOPMENT"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("btn", {
        className: "jsx-3141878382" + " " + ((this.props.selected === 'MOBILE' ? 'active' : '') || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, "MOBILE APPLICATIONS"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", {
        className: "jsx-3141878382",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("btnsolid", {
        className: "jsx-3141878382",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, "CONTACT US"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", {
        className: "jsx-3141878382",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "3141878382",
        css: "menuitems.jsx-3141878382 btn.jsx-3141878382:hover{color:#8500FF;}menuitems.jsx-3141878382 btn.active.jsx-3141878382{pointer-events:none;cursor:default;color:#141414;}menuitems.jsx-3141878382 btn.jsx-3141878382{text-transform:uppercase;font-weight:500;cursor:pointer;display:block;padding:5px 0;color:#999;}menuitems.jsx-3141878382 btnsolid.jsx-3141878382{text-transform:uppercase;border-bottom:3px solid #ddd;background:#8500FF;text-align:center;line-height:50px;font-weight:500;cursor:pointer;display:block;padding:5px 0;color:white;}menuitems.jsx-3141878382 btnsolid.jsx-3141878382:hover{background:#9c31ff;}menuitems.jsx-3141878382 hr.jsx-3141878382{border-top:1px solid #ddd;border-bottom:1px solid #fff;}@media (max-width:768px){}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VidW50dS93b3Jrc3BhY2UvZXN0dWRvL25leHQvY29tcG9uZW50cy9tZW51aXRlbXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkNvQixBQUcrQixBQUdNLEFBS0ssQUFRQSxBQVlOLEFBR08sY0E5QjlCLEtBNEJBLENBekJtQixLQUtDLEFBUWEsQ0FlQSxTQTNCZixNQUtDLFFBSm5CLEtBWXVCLENBZXZCLENBdEJrQixjQUNBLEdBT0ksV0FOUCxPQU9NLElBTnJCLGFBT29CLGdCQUNELGVBQ0QsY0FDQSxjQUNGLFlBQ2hCIiwiZmlsZSI6Ii9ob21lL3VidW50dS93b3Jrc3BhY2UvZXN0dWRvL25leHQvY29tcG9uZW50cy9tZW51aXRlbXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudUl0ZW1zIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICA8bWVudWl0ZW1zPlxuICAgICAgICA8TGluayBocmVmPScvc2VydmljZXMvYmxvY2tjaGFpbicgYXM9eyBwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArIGAvYmxvY2tjaGFpbmB9PlxuICAgICAgICAgICAgPGJ0biBjbGFzc05hbWU9e3RoaXMucHJvcHMuc2VsZWN0ZWQgPT09ICdCTE9DS0NIQUlOJyA/ICdhY3RpdmUnIDogJyd9PlxuICAgICAgICAgICAgQkxPQ0tDSEFJTjwvYnRuPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIFxuICAgICAgICA8TGluayBocmVmPScvc2VydmljZXMvY3JpcHRvY3VycmVuY3knIGFzPXsgcHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyBgL2NyaXB0b2N1cnJlbmN5YH0+XG4gICAgICAgICAgICA8YnRuIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5zZWxlY3RlZCA9PT0gJ0NSWVBUT0NVUlJFTkNZJyA/ICdhY3RpdmUnIDogJyd9PlxuICAgICAgICAgICAgQ1JZUFRPQ1VSUkVOQ1k8L2J0bj5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICBcbiAgICAgICAgPExpbmsgaHJlZj0nL3NlcnZpY2VzL3NlY3VyaXR5JyBhcz17IHByb2Nlc3MuZW52LkJBQ0tFTkRfVVJMICsgYC9zZWN1cml0eWB9PlxuICAgICAgICAgICAgPGJ0biBjbGFzc05hbWU9e3RoaXMucHJvcHMuc2VsZWN0ZWQgPT09ICdTRUNVUklUWScgPyAnYWN0aXZlJyA6ICcnfT5cbiAgICAgICAgICAgIFNFQ1VSSVRZICYgUFJJVkFDWTwvYnRuPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIFxuICAgICAgICA8TGluayBocmVmPScvc2VydmljZXMvcGF5bWVudHMnIGFzPXsgcHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyBgL3BheW1lbnRzYH0+XG4gICAgICAgICAgICA8YnRuIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5zZWxlY3RlZCA9PT0gJ1BBWU1FTlRTJyA/ICdhY3RpdmUnIDogJyd9PlxuICAgICAgICAgICAgUEFZTUVOVFM8L2J0bj5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICBcbiAgICAgICAgPExpbmsgaHJlZj0nL3NlcnZpY2VzL2V4Y2hhbmdlcycgYXM9eyBwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArIGAvZXhjaGFuZ2VzYH0+XG4gICAgICAgICAgICA8YnRuIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5zZWxlY3RlZCA9PT0gJ0VYQ0hBTkdFUycgPyAnYWN0aXZlJyA6ICcnfT5cbiAgICAgICAgICAgIEVYQ0hBTkdFUzwvYnRuPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIFxuICAgICAgICA8aHIgLz5cbiAgICAgICAgPGJ0biBjbGFzc05hbWU9e3RoaXMucHJvcHMuc2VsZWN0ZWQgPT09ICdTT0ZUV0FSRScgPyAnYWN0aXZlJyA6ICcnfT5cbiAgICAgICAgICAgIFNPRlRXQVJFIERFVkVMT1BNRU5UPC9idG4+XG4gICAgICAgIDxidG4gY2xhc3NOYW1lPXt0aGlzLnByb3BzLnNlbGVjdGVkID09PSAnTU9CSUxFJyA/ICdhY3RpdmUnIDogJyd9PlxuICAgICAgICAgICAgTU9CSUxFIEFQUExJQ0FUSU9OUzwvYnRuPlxuICAgICAgICA8aHIgLz5cbiAgICAgICAgPGJ0bnNvbGlkPkNPTlRBQ1QgVVM8L2J0bnNvbGlkPlxuICAgICAgICA8aHIgLz5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgbWVudWl0ZW1zIGJ0bjpob3ZlciB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM4NTAwRkY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtZW51aXRlbXMgYnRuLmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMTQxNDE0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbWVudWl0ZW1zIGJ0biB7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzk5OTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1lbnVpdGVtcyBidG5zb2xpZCB7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI2RkZDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjODUwMEZGO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNTBweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMDtcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtZW51aXRlbXMgYnRuc29saWQ6aG92ZXIge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICM5YzMxZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtZW51aXRlbXMgaHIge1xuICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGRkO1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmO1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgYH08L3N0eWxlPlxuICAgIDwvbWVudWl0ZW1zPlxuICAgICk7XG4gIH1cbn0iXX0= */\n/*@ sourceURL=/home/ubuntu/workspace/estudo/next/components/menuitems.js */",
        __self: this
      }));
    }
  }]);

  return MenuItems;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);



/***/ })

})
//# sourceMappingURL=criptocurrency.js.2de5ff22287698b90f9c.hot-update.js.map