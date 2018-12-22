webpackHotUpdate("static/development/pages/_error.js",{

/***/ "./pages/avnsystems/interface/leftmenu.js":
/*!************************************************!*\
  !*** ./pages/avnsystems/interface/leftmenu.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LeftMenu; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../routes */ "./pages/routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _leftmenu_contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./leftmenu/contact */ "./pages/avnsystems/interface/leftmenu/contact.js");
var _jsxFileName = "/home/ubuntu/workspace/estudo/next/pages/avnsystems/interface/leftmenu.js";



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




var LeftMenu =
/*#__PURE__*/
function (_Component) {
  _inherits(LeftMenu, _Component);

  function LeftMenu() {
    _classCallCheck(this, LeftMenu);

    return _possibleConstructorReturn(this, _getPrototypeOf(LeftMenu).apply(this, arguments));
  }

  _createClass(LeftMenu, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      $("leftmenu menuscroll menuitems > btn").on("click", function (e) {
        if ($(e.target).hasClass('disable')) {
          e.stopImmediatePropagation();
          return;
        } else if ($(e.target).attr('href')) {
          $('body').removeClass('left-menu');
          window.open($(e.target).attr('href'));
        } else if ($(e.target).attr('route')) {
          $('body').removeClass('left-menu');
          _routes__WEBPACK_IMPORTED_MODULE_2__["Router"].pushRoute($(e.target).attr('route'));
        } else {
          $(this).find('submenu').toggleClass("open");
        }
      });
      $("header navtoggle, menuhider").on("click", function (e) {
        if (e.currentTarget.localName === "navtoggle" || $('body').hasClass('left-menu') || !$('html').hasClass('nprogress-busy')) {
          $('body').toggleClass('left-menu');
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("leftmenu", {
        className: "jsx-1171093005",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("sidebaruser", {
        className: "jsx-1171093005",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("photo", {
        className: "jsx-1171093005",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
        className: "jsx-1171093005",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, "Boa noite. \u2605"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("subtitle", {
        className: "jsx-1171093005",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, "Entre com seu login ou cadastre-se!")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("bgimg", {
        className: "jsx-1171093005",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("bgshadow", {
        className: "jsx-1171093005",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("menuscroll", {
        className: "jsx-1171093005",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("sidebarseparator", {
        className: "jsx-1171093005",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, "Acesso Restrito"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("menuitems", {
        className: "jsx-1171093005",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("btn", {
        href: "//admin.avn.systems",
        target: "_self",
        className: "jsx-1171093005",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        className: "jsx-1171093005" + " " + "svg-inline",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M144 112v51.6H48c-26.5 0-48 21.5-48 48v88.6c0 26.5 21.5 48 48 48h96v51.6c0 42.6 51.7 64.2 81.9 33.9l144-143.9c18.7-18.7 18.7-49.1 0-67.9l-144-144C195.8 48 144 69.3 144 112zm192 144L192 400v-99.7H48v-88.6h144V112l144 144zm80 192h-84c-6.6 0-12-5.4-12-12v-24c0-6.6 5.4-12 12-12h84c26.5 0 48-21.5 48-48V160c0-26.5-21.5-48-48-48h-84c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h84c53 0 96 43 96 96v192c0 53-43 96-96 96z",
        className: "jsx-1171093005",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      })), "Entrar", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        className: "jsx-1171093005" + " " + "svg-inline svg-circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z",
        className: "jsx-1171093005",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("btn", {
        href: "#",
        className: "jsx-1171093005" + " " + "disable",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 576 512",
        className: "jsx-1171093005" + " " + "svg-inline",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M288 208c-44.2 0-80 35.8-80 80s35.8 80 80 80 80-35.8 80-80-35.8-80-80-80zm0 128c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zM512 64H352V32c0-17.7-14.3-32-32-32h-64c-17.7 0-32 14.3-32 32v32H64C28.7 64 0 92.7 0 128v320c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64zM256 32h64v96h-64V32zm128 448H192v-21.9c0-9 2.6-17.6 7.6-25 7.2-10.7 20.3-17.2 35-17.2 15.9 0 23.5 8 53.4 8s37.6-8 53.4-8c14.7 0 27.7 6.4 35 17.2 5 7.4 7.6 16 7.6 25V480zm160-32c0 17.6-14.4 32-32 32h-96v-21.9c0-15.9-4.8-30.6-13-42.8-13.8-20.5-37.3-31.3-61.5-31.3-22.2 0-27.8 8-53.4 8-25.6 0-31.2-8-53.4-8-24.2 0-47.7 10.8-61.5 31.3-8.2 12.2-13 27-13 42.8V480H64c-17.6 0-32-14.4-32-32V128c0-17.6 14.4-32 32-32h160v64h128V96h160c17.6 0 32 14.4 32 32v320z",
        className: "jsx-1171093005",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      })), "Cadastrar-se", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        className: "jsx-1171093005" + " " + "svg-inline svg-circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z",
        className: "jsx-1171093005",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("sidebardivider", {
        className: "jsx-1171093005",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("menusitemobile", {
        className: "jsx-1171093005",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("sidebarseparator", {
        className: "jsx-1171093005",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, "Website Pages"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("menuitems", {
        className: "jsx-1171093005",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("btn", {
        route: "/",
        className: "jsx-1171093005",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 576 512",
        className: "jsx-1171093005" + " " + "svg-inline svg-home",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M488 312.7V456c0 13.3-10.7 24-24 24H348c-6.6 0-12-5.4-12-12V356c0-6.6-5.4-12-12-12h-72c-6.6 0-12 5.4-12 12v112c0 6.6-5.4 12-12 12H112c-13.3 0-24-10.7-24-24V312.7c0-3.6 1.6-7 4.4-9.3l188-154.8c4.4-3.6 10.8-3.6 15.3 0l188 154.8c2.7 2.3 4.3 5.7 4.3 9.3zm83.6-60.9L488 182.9V44.4c0-6.6-5.4-12-12-12h-56c-6.6 0-12 5.4-12 12V117l-89.5-73.7c-17.7-14.6-43.3-14.6-61 0L4.4 251.8c-5.1 4.2-5.8 11.8-1.6 16.9l25.5 31c4.2 5.1 11.8 5.8 16.9 1.6l235.2-193.7c4.4-3.6 10.8-3.6 15.3 0l235.2 193.7c5.1 4.2 12.7 3.5 16.9-1.6l25.5-31c4.2-5.2 3.4-12.7-1.7-16.9z",
        className: "jsx-1171093005",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      })), "Home", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        className: "jsx-1171093005" + " " + "svg-inline svg-circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z",
        className: "jsx-1171093005",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("btn", {
        route: "/about",
        className: "jsx-1171093005",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        className: "jsx-1171093005" + " " + "svg-inline svg-info-circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z",
        className: "jsx-1171093005",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      })), "About Us", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        className: "jsx-1171093005" + " " + "svg-inline svg-circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z",
        className: "jsx-1171093005",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("btn", {
        className: "jsx-1171093005" + " " + "submenu-has-numbers",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        className: "jsx-1171093005" + " " + "svg-inline svg-briefcase",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z",
        className: "jsx-1171093005",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      })), "Services", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 640 512",
        className: "jsx-1171093005" + " " + "svg-inline svg-terminal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M257.981 272.971L63.638 467.314c-9.373 9.373-24.569 9.373-33.941 0L7.029 444.647c-9.357-9.357-9.375-24.522-.04-33.901L161.011 256 6.99 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L257.981 239.03c9.373 9.372 9.373 24.568 0 33.941zM640 456v-32c0-13.255-10.745-24-24-24H312c-13.255 0-24 10.745-24 24v32c0 13.255 10.745 24 24 24h304c13.255 0 24-10.745 24-24z",
        className: "jsx-1171093005",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("count", {
        className: "jsx-1171093005",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, "7"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("submenu", {
        className: "jsx-1171093005" + " " + "open",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("btn", {
        route: "/services/blockchain",
        className: "jsx-1171093005",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 256 512",
        className: "jsx-1171093005" + " " + "svg-inline svg-angle-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z",
        className: "jsx-1171093005",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      })), "Blockchain Technology", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        className: "jsx-1171093005" + " " + "svg-inline svg-circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z",
        className: "jsx-1171093005",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("btn", {
        route: "/services/criptocurrency",
        className: "jsx-1171093005",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 256 512",
        className: "jsx-1171093005" + " " + "svg-inline svg-angle-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z",
        className: "jsx-1171093005",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      })), "Criptocurrency", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        className: "jsx-1171093005" + " " + "svg-inline svg-circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z",
        className: "jsx-1171093005",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("btn", {
        route: "/services/security",
        className: "jsx-1171093005",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 256 512",
        className: "jsx-1171093005" + " " + "svg-inline svg-angle-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z",
        className: "jsx-1171093005",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      })), "Security", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        className: "jsx-1171093005" + " " + "svg-inline svg-circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z",
        className: "jsx-1171093005",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("btn", {
        route: "/services/softwares",
        className: "jsx-1171093005",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 256 512",
        className: "jsx-1171093005" + " " + "svg-inline svg-angle-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z",
        className: "jsx-1171093005",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      })), "Software Development", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        className: "jsx-1171093005" + " " + "svg-inline svg-circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z",
        className: "jsx-1171093005",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("btn", {
        route: "/services/mobile",
        className: "jsx-1171093005",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 256 512",
        className: "jsx-1171093005" + " " + "svg-inline svg-angle-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z",
        className: "jsx-1171093005",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      })), "Mobile Applications", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        className: "jsx-1171093005" + " " + "svg-inline svg-circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z",
        className: "jsx-1171093005",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("btn", {
        route: "/services/payments",
        className: "jsx-1171093005",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 256 512",
        className: "jsx-1171093005" + " " + "svg-inline svg-angle-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z",
        className: "jsx-1171093005",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      })), "Payments", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        className: "jsx-1171093005" + " " + "svg-inline svg-circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z",
        className: "jsx-1171093005",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("btn", {
        route: "/services/exchanges",
        className: "jsx-1171093005",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 256 512",
        className: "jsx-1171093005" + " " + "svg-inline svg-angle-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z",
        className: "jsx-1171093005",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      })), "Exchanges", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        className: "jsx-1171093005" + " " + "svg-inline svg-circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z",
        className: "jsx-1171093005",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      })))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("sidebardivider", {
        className: "jsx-1171093005",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "375505002",
        css: "leftmenu{top:0;width:100%;left:-340px;height:100vh;display:none;display:block;z-index:10000;position:fixed;max-width:330px;box-shadow:0 0 8px #000;background-color:#1c222e;-webkit-transition:left 350ms ease 0s;-moz-transition:left 350ms ease 0s;-ms-transition:left 350ms ease 0s;-o-transition:left 350ms ease 0s;-webkit-transition:left 350ms ease 0s;transition:left 350ms ease 0s;}leftmenu sidebaruser{box-shadow:0 0 6px 4px rgba(0,0,0,.3);touch-action:none;display:block;height:185px;}leftmenu sidebaruser photo{background-image:url(".concat("", "/static/images/icons/icon-192x192.png);}leftmenu sidebaruser photo{background-color:white;border:2px solid #00f9a6;background-position:center top;text-shadow:1px 1px 5px #000000;box-shadow:1px 1px 5px #000000;margin:15px 0px 0px 15px;background-size:cover;border-radius:50%;position:absolute;height:90px;width:90px;z-index:10;}leftmenu sidebaruser photo title{position:relative;min-width:285px;font-size:18px;display:block;color:#fff;top:105px;}leftmenu sidebaruser photo subtitle{position:relative;font-size:14px;display:block;width:290px;color:#ccc;top:100px;}leftmenu sidebaruser bgimg{background-image:url(").concat("", "/static/images/services/blockchain-services.jpg);}leftmenu sidebaruser bgimg{background-blend-mode:luminosity;background-position:center;background-color:#00f9a6;background-size:cover;position:absolute;height:185px;width:100%;}leftmenu sidebaruser bgshadow{top:0;left:0;right:0;z-index:9;height:185px;position:absolute;background:linear-gradient(to bottom,rgba(0,0,0,0) 0,rgba(0,0,0,0) 20%,rgba(0,0,0,.1) 40%,rgba(0,0,0,.7) 70%,rgba(0,0,0,1) 100%);}leftmenu menuscroll{height:calc(100vh - 235px);touch-action:pan-y;overflow-x:hidden;position:fixed;overflow:auto;width:330px;}leftmenu menuscroll sidebarseparator:first-child{margin-top:20px;}leftmenu menuscroll sidebarseparator{text-transform:uppercase;margin-bottom:10px;padding-left:20px;margin-top:10px;font-weight:500;font-size:14px;display:block;color:#ccc;}left-enu menuscroll sidebardivider{border-top:solid 1px rgba(0,0,0,.2);border-bottom:solid 1px rgba(255,255,255,.03);margin-bottom:20px;margin-top:10px;display:block;}leftmenu menuscroll menuitems>btn,leftmenu menuscroll menucontact>a{-webkit-text-decoration:none;text-decoration:none;padding-left:25px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;line-height:55px;cursor:pointer;font-size:15px;display:block;color:#ccc;}leftmenu menuscroll menuitems>btn.disable,leftmenu menuscroll menucontact>a.disable{pointer-events:none;opacity:.5;}leftmenu menuscroll menuitems>btn .svg-inline,leftmenu menuscroll menucontact>a .svg-inline{vertical-align:-.125em;display:inline-block;overflow:visible;position:relative;margin-right:20px;min-width:25px;color:#b500ff;height:22px;width:auto;top:3px;}leftmenu menuscroll menuitems>btn .svg-inline.svg-circle,leftmenu menuscroll menucontact>a .svg-inline.svg-circle{color:#434752;float:right;height:5px;top:25px;}leftmenu menuscroll menuitems>btn .svg-inline.svg-terminal{color:#434752;float:right;left:-1px;top:18px;}leftmenu menuscroll menuitems>btn .svg-inline.svg-tv{left:-4px;}leftmenu menuscroll menuitems>btn .svg-inline.svg-stores{left:-5px;top:2px;}leftmenu menuscroll menuitems>btn .svg-inline.svg-restaurantes,leftmenu menuscroll menuitems>btn .svg-inline.svg-whatsapp,leftmenu menuscroll menuitems>btn .svg-inline.svg-phone,leftmenu menuscroll menuitems>btn .svg-inline.svg-mail,leftmenu menuscroll menuitems>btn .svg-inline.svg-star{left:-2px;}leftmenu menuscroll menuitems>btn:hover,leftmenu menuscroll menucontact>a:hover{background-color:#232b3a;color:white;}leftmenu menuscroll menuitems>btn:hover .svg-inline.svg-terminal,leftmenu menuscroll menuitems>btn:hover .svg-inline.svg-circle,leftmenu menuscroll menucontact>a:hover .svg-inline.svg-circle{color:white;}leftmenu menuscroll menuitems>btn>count{position:relative;font-weight:bold;font-size:18px;color:#c947ff;right:-25px;float:right;top:-2px;}leftmenu menuscroll menuitems>btn submenu{width:calc(100% + 25px);position:relative;display:none;left:-25px;}leftmenu menuscroll menuitems>btn submenu btn.disable{opacity:.5;}leftmenu menuscroll menuitems>btn submenu btn{padding-left:30px;line-height:53px;font-size:13px;}leftmenu menuscroll menuitems>btn submenu.open{display:grid;}leftmenu menuscroll menuitems>btn:hover submenu btn .svg-inline.svg-circle{color:#434752;}leftmenu menuscroll menuitems>btn:hover submenu btn:not(.disable):hover{background-color:#2f3a4e;color:white;}leftmenu menuscroll menuitems>btn:hover submenu btn:not(.disable):hover .svg-inline.svg-circle{color:white;}@media (max-width:940px){footer infos{display:none;}}@media (min-width:880px){leftmenu menusitemobile{display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VidW50dS93b3Jrc3BhY2UvZXN0dWRvL25leHQvcGFnZXMvYXZuc3lzdGVtcy9pbnRlcmZhY2UvbGVmdG1lbnUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUgrQixBQUcyQixBQWtCZ0MsQUFNa0QsQUFHakUsQUFjTCxBQVFBLEFBUWdGLEFBR2pFLEFBUzNCLEFBVXFCLEFBUVgsQUFHUyxBQVVXLEFBU2YsQUFXRCxBQUtHLEFBYVQsQUFNQSxBQU1KLEFBR0EsQUFRQSxBQUllLEFBTWIsQUFHTSxBQVNNLEFBTWIsQUFHTyxBQUtMLEFBR0MsQUFHVyxBQUliLEFBS0ssQUFLQSxNQXhOTixBQXFFSixJQWlGWCxBQUdZLEFBUVosQ0E0QkEsQ0FsQkEsQUFvQ0EsQ0F6SVksQUErSFosQUFlSSxBQUtBLENBL0VZLEFBTUEsQUF3RGhCLEVBakhBLENBdEZnQixDQXdDSSxBQVFELEFBeUduQixBQW9CcUIsQUFrQkEsRUF4RU4sQ0FqREQsRUE1Q2UsQUFrR0osQ0EwREgsQ0E3RkMsQUEyRVAsQUFzQ0EsQ0FoRUQsQUFNRCxDQWxFUyxFQTdFTixFQXNFQSxBQWlEakIsRUF2RWtCLEFBVWEsQ0FsQlosQ0FxSUEsQUFrQkEsQ0E3RitCLEFBOENyQyxDQU5BLEFBMEJiLEFBc0NBLENBMUxzQixJQWZMLEFBcUxBLEVBL0dLLEFBa0JBLEFBbUNELENBcUJyQixDQW5Fc0IsQUE2RHRCLENBMUZnQixDQXZCbUIsQ0FlakIsQ0FrRUksQUFtRUosQUFrQmxCLEtBOUxrQixBQXFMSCxDQXRLRyxHQWlDSCxDQVNjLENBa0VQLENBckQrRyxBQWtCakgsQ0FoREwsQ0FxQ0ksQUFnR0gsRUFTaEIsRUE1RXFCLENBekdILENBZUQsQUFpQ0gsSUFSQSxFQXFJRSxFQXJGSSxDQWhFZ0IsQUFxRGxCLEFBOENJLENBMUV0QixFQStDdUIsQ0EvRkosQUFlbkIsQ0F5QkEsQ0FnQjBCLEdBdEMxQixBQTJKYSxLQWhHRyxDQVdHLEdBbUNBLEFBbURuQixDQTdLb0IsQUFrRHBCLEdBNkNvQixJQWxCcEIsRUFyQnNCLEVBZ0NKLEVBakVpQixDQW9HakIsRUExSFUsR0ErRlYsTUFQSCxFQWhDRSxDQW1FRCxLQTNCaEIsR0FQQSxJQXhGNkIsQUF3RGQsQUFtRUEsSUFyR2MsT0FtQzdCLEFBbUVZLElBdEJTLElBdUJyQixNQTVIMEMsSUFzQmhCLEdBZ0ZQLGVBQ0EsSUFoRkcsRUEwQ3RCLFNBdUNrQixDQXZHcUIsTUF1QmpCLE9BaUZQLFdBaEZDLEFBaUZoQixXQXhHc0MsQ0F3QnZCLFdBQ0EsV0FDZixXQXpCcUMsaUNBQ0gsb0VBQ2xDIiwiZmlsZSI6Ii9ob21lL3VidW50dS93b3Jrc3BhY2UvZXN0dWRvL25leHQvcGFnZXMvYXZuc3lzdGVtcy9pbnRlcmZhY2UvbGVmdG1lbnUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKmdsb2JhbCAkIG5hdmlnYXRvciovXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IExpbmssIFJvdXRlciB9IGZyb20gJy4vLi4vLi4vcm91dGVzJ1xuaW1wb3J0IExlZnRNZW51Q29udGFjdDEgZnJvbSAnLi9sZWZ0bWVudS9jb250YWN0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZWZ0TWVudSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuICAgICAgICAkKFwibGVmdG1lbnUgbWVudXNjcm9sbCBtZW51aXRlbXMgPiBidG5cIikub24oXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBpZiAoJChlLnRhcmdldCkuaGFzQ2xhc3MoJ2Rpc2FibGUnKSkge1xuICAgICAgICAgICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoJChlLnRhcmdldCkuYXR0cignaHJlZicpKSB7XG4gICAgICAgICAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdsZWZ0LW1lbnUnKTtcbiAgICAgICAgICAgICAgICB3aW5kb3cub3BlbigkKGUudGFyZ2V0KS5hdHRyKCdocmVmJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoJChlLnRhcmdldCkuYXR0cigncm91dGUnKSkge1xuICAgICAgICAgICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnbGVmdC1tZW51Jyk7XG4gICAgICAgICAgICAgICAgUm91dGVyLnB1c2hSb3V0ZSgkKGUudGFyZ2V0KS5hdHRyKCdyb3V0ZScpKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmZpbmQoJ3N1Ym1lbnUnKS50b2dnbGVDbGFzcyhcIm9wZW5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgICQoXCJoZWFkZXIgbmF2dG9nZ2xlLCBtZW51aGlkZXJcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBpZiAoKGUuY3VycmVudFRhcmdldC5sb2NhbE5hbWUgPT09IFwibmF2dG9nZ2xlXCIgfHwgJCgnYm9keScpLmhhc0NsYXNzKCdsZWZ0LW1lbnUnKSkgfHwgISQoJ2h0bWwnKS5oYXNDbGFzcygnbnByb2dyZXNzLWJ1c3knKSkge1xuICAgICAgICAgICAgICAgICQoJ2JvZHknKS50b2dnbGVDbGFzcygnbGVmdC1tZW51Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuICAgIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGxlZnRtZW51PlxuICAgIFx0XHQ8c2lkZWJhcnVzZXI+XG4gICAgXHQgICAgICAgIDxwaG90bz5cbiAgICBcdCAgICAgICAgICAgIDx0aXRsZT5Cb2Egbm9pdGUuIOKYhTwvdGl0bGU+XG4gICAgXHQgICAgICAgICAgICA8c3VidGl0bGU+RW50cmUgY29tIHNldSBsb2dpbiBvdSBjYWRhc3RyZS1zZSE8L3N1YnRpdGxlPlxuICAgIFx0ICAgICAgICA8L3Bob3RvPlxuICAgIFx0XHQgICAgPGJnaW1nPjwvYmdpbWc+XG4gICAgXHRcdCAgICA8YmdzaGFkb3c+PC9iZ3NoYWRvdz5cbiAgICBcdFx0PC9zaWRlYmFydXNlcj5cbiAgICBcdFx0PG1lbnVzY3JvbGw+XG4gICAgICAgICAgICAgICAgPHNpZGViYXJzZXBhcmF0b3I+QWNlc3NvIFJlc3RyaXRvPC9zaWRlYmFyc2VwYXJhdG9yPlxuICAgICAgICAgICAgICAgIDxtZW51aXRlbXM+XG4gICAgICAgICAgICAgICAgICAgIDxidG4gaHJlZj1cIi8vYWRtaW4uYXZuLnN5c3RlbXNcIiB0YXJnZXQ9XCJfc2VsZlwiPlxuICAgICAgICAgICAgICAgICAgICBcdDxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMTQ0IDExMnY1MS42SDQ4Yy0yNi41IDAtNDggMjEuNS00OCA0OHY4OC42YzAgMjYuNSAyMS41IDQ4IDQ4IDQ4aDk2djUxLjZjMCA0Mi42IDUxLjcgNjQuMiA4MS45IDMzLjlsMTQ0LTE0My45YzE4LjctMTguNyAxOC43LTQ5LjEgMC02Ny45bC0xNDQtMTQ0QzE5NS44IDQ4IDE0NCA2OS4zIDE0NCAxMTJ6bTE5MiAxNDRMMTkyIDQwMHYtOTkuN0g0OHYtODguNmgxNDRWMTEybDE0NCAxNDR6bTgwIDE5MmgtODRjLTYuNiAwLTEyLTUuNC0xMi0xMnYtMjRjMC02LjYgNS40LTEyIDEyLTEyaDg0YzI2LjUgMCA0OC0yMS41IDQ4LTQ4VjE2MGMwLTI2LjUtMjEuNS00OC00OC00OGgtODRjLTYuNiAwLTEyLTUuNC0xMi0xMlY3NmMwLTYuNiA1LjQtMTIgMTItMTJoODRjNTMgMCA5NiA0MyA5NiA5NnYxOTJjMCA1My00MyA5Ni05NiA5NnpcIj48L3BhdGg+PC9zdmc+XG4gICAgICAgICAgICAgICAgICAgIFx0RW50cmFyXG4gICAgICAgICAgICAgICAgICAgIFx0PHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6XCI+PC9wYXRoPjwvc3ZnPjwvYnRuPlxuICAgICAgICAgICAgICAgICAgICA8YnRuIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiZGlzYWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICBcdDxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1NzYgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjg4IDIwOGMtNDQuMiAwLTgwIDM1LjgtODAgODBzMzUuOCA4MCA4MCA4MCA4MC0zNS44IDgwLTgwLTM1LjgtODAtODAtODB6bTAgMTI4Yy0yNi41IDAtNDgtMjEuNS00OC00OHMyMS41LTQ4IDQ4LTQ4IDQ4IDIxLjUgNDggNDgtMjEuNSA0OC00OCA0OHpNNTEyIDY0SDM1MlYzMmMwLTE3LjctMTQuMy0zMi0zMi0zMmgtNjRjLTE3LjcgMC0zMiAxNC4zLTMyIDMydjMySDY0QzI4LjcgNjQgMCA5Mi43IDAgMTI4djMyMGMwIDM1LjMgMjguNyA2NCA2NCA2NGg0NDhjMzUuMyAwIDY0LTI4LjcgNjQtNjRWMTI4YzAtMzUuMy0yOC43LTY0LTY0LTY0ek0yNTYgMzJoNjR2OTZoLTY0VjMyem0xMjggNDQ4SDE5MnYtMjEuOWMwLTkgMi42LTE3LjYgNy42LTI1IDcuMi0xMC43IDIwLjMtMTcuMiAzNS0xNy4yIDE1LjkgMCAyMy41IDggNTMuNCA4czM3LjYtOCA1My40LThjMTQuNyAwIDI3LjcgNi40IDM1IDE3LjIgNSA3LjQgNy42IDE2IDcuNiAyNVY0ODB6bTE2MC0zMmMwIDE3LjYtMTQuNCAzMi0zMiAzMmgtOTZ2LTIxLjljMC0xNS45LTQuOC0zMC42LTEzLTQyLjgtMTMuOC0yMC41LTM3LjMtMzEuMy02MS41LTMxLjMtMjIuMiAwLTI3LjggOC01My40IDgtMjUuNiAwLTMxLjItOC01My40LTgtMjQuMiAwLTQ3LjcgMTAuOC02MS41IDMxLjMtOC4yIDEyLjItMTMgMjctMTMgNDIuOFY0ODBINjRjLTE3LjYgMC0zMi0xNC40LTMyLTMyVjEyOGMwLTE3LjYgMTQuNC0zMiAzMi0zMmgxNjB2NjRoMTI4Vjk2aDE2MGMxNy42IDAgMzIgMTQuNCAzMiAzMnYzMjB6XCI+PC9wYXRoPjwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICBcdENhZGFzdHJhci1zZVxuICAgICAgICAgICAgICAgICAgICBcdDxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctY2lyY2xlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNTYgOEMxMTkgOCA4IDExOSA4IDI1NnMxMTEgMjQ4IDI0OCAyNDggMjQ4LTExMSAyNDgtMjQ4UzM5MyA4IDI1NiA4elwiPjwvcGF0aD48L3N2Zz48L2J0bj5cbiAgICAgICAgICAgICAgICA8L21lbnVpdGVtcz5cbiAgICAgICAgICAgICAgICA8c2lkZWJhcmRpdmlkZXI+PC9zaWRlYmFyZGl2aWRlcj5cbiAgICBcdFx0XHQ8bWVudXNpdGVtb2JpbGU+XG4gICAgXHQgICAgICAgICAgICA8c2lkZWJhcnNlcGFyYXRvcj5XZWJzaXRlIFBhZ2VzPC9zaWRlYmFyc2VwYXJhdG9yPlxuICAgIFx0ICAgICAgICAgICAgPG1lbnVpdGVtcz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidG4gcm91dGU9eyBwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArIGAvYH0+XG4gICAgICAgICAgICAgICAgICAgICAgICBcdDxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctaG9tZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1NzYgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNNDg4IDMxMi43VjQ1NmMwIDEzLjMtMTAuNyAyNC0yNCAyNEgzNDhjLTYuNiAwLTEyLTUuNC0xMi0xMlYzNTZjMC02LjYtNS40LTEyLTEyLTEyaC03MmMtNi42IDAtMTIgNS40LTEyIDEydjExMmMwIDYuNi01LjQgMTItMTIgMTJIMTEyYy0xMy4zIDAtMjQtMTAuNy0yNC0yNFYzMTIuN2MwLTMuNiAxLjYtNyA0LjQtOS4zbDE4OC0xNTQuOGM0LjQtMy42IDEwLjgtMy42IDE1LjMgMGwxODggMTU0LjhjMi43IDIuMyA0LjMgNS43IDQuMyA5LjN6bTgzLjYtNjAuOUw0ODggMTgyLjlWNDQuNGMwLTYuNi01LjQtMTItMTItMTJoLTU2Yy02LjYgMC0xMiA1LjQtMTIgMTJWMTE3bC04OS41LTczLjdjLTE3LjctMTQuNi00My4zLTE0LjYtNjEgMEw0LjQgMjUxLjhjLTUuMSA0LjItNS44IDExLjgtMS42IDE2LjlsMjUuNSAzMWM0LjIgNS4xIDExLjggNS44IDE2LjkgMS42bDIzNS4yLTE5My43YzQuNC0zLjYgMTAuOC0zLjYgMTUuMyAwbDIzNS4yIDE5My43YzUuMSA0LjIgMTIuNyAzLjUgMTYuOS0xLjZsMjUuNS0zMWM0LjItNS4yIDMuNC0xMi43LTEuNy0xNi45elwiPjwvcGF0aD48L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgIFx0SG9tZVxuICAgICAgICAgICAgICAgICAgICAgICAgXHQ8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWNpcmNsZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjU2IDhDMTE5IDggOCAxMTkgOCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzOTMgOCAyNTYgOHpcIj48L3BhdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICBcdDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idG4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnRuIHJvdXRlPXsgcHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyBgL2Fib3V0YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICBcdDxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctaW5mby1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOS4wNDMgOCA4IDExOS4wODMgOCAyNTZjMCAxMzYuOTk3IDExMS4wNDMgMjQ4IDI0OCAyNDhzMjQ4LTExMS4wMDMgMjQ4LTI0OEM1MDQgMTE5LjA4MyAzOTIuOTU3IDggMjU2IDh6bTAgMTEwYzIzLjE5NiAwIDQyIDE4LjgwNCA0MiA0MnMtMTguODA0IDQyLTQyIDQyLTQyLTE4LjgwNC00Mi00MiAxOC44MDQtNDIgNDItNDJ6bTU2IDI1NGMwIDYuNjI3LTUuMzczIDEyLTEyIDEyaC04OGMtNi42MjcgMC0xMi01LjM3My0xMi0xMnYtMjRjMC02LjYyNyA1LjM3My0xMiAxMi0xMmgxMnYtNjRoLTEyYy02LjYyNyAwLTEyLTUuMzczLTEyLTEydi0yNGMwLTYuNjI3IDUuMzczLTEyIDEyLTEyaDY0YzYuNjI3IDAgMTIgNS4zNzMgMTIgMTJ2MTAwaDEyYzYuNjI3IDAgMTIgNS4zNzMgMTIgMTJ2MjR6XCI+PC9wYXRoPjwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgXHRBYm91dCBVc1xuICAgICAgICAgICAgICAgICAgICAgICAgXHQ8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWNpcmNsZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjU2IDhDMTE5IDggOCAxMTkgOCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzOTMgOCAyNTYgOHpcIj48L3BhdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICBcdDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idG4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnRuIGNsYXNzTmFtZT1cInN1Ym1lbnUtaGFzLW51bWJlcnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWJyaWVmY2FzZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMzIwIDMzNmMwIDguODQtNy4xNiAxNi0xNiAxNmgtOTZjLTguODQgMC0xNi03LjE2LTE2LTE2di00OEgwdjE0NGMwIDI1LjYgMjIuNCA0OCA0OCA0OGg0MTZjMjUuNiAwIDQ4LTIyLjQgNDgtNDhWMjg4SDMyMHY0OHptMTQ0LTIwOGgtODBWODBjMC0yNS42LTIyLjQtNDgtNDgtNDhIMTc2Yy0yNS42IDAtNDggMjIuNC00OCA0OHY0OEg0OGMtMjUuNiAwLTQ4IDIyLjQtNDggNDh2ODBoNTEydi04MGMwLTI1LjYtMjIuNC00OC00OC00OHptLTE0NCAwSDE5MlY5NmgxMjh2MzJ6XCI+PC9wYXRoPjwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlcnZpY2VzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy10ZXJtaW5hbFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA2NDAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjU3Ljk4MSAyNzIuOTcxTDYzLjYzOCA0NjcuMzE0Yy05LjM3MyA5LjM3My0yNC41NjkgOS4zNzMtMzMuOTQxIDBMNy4wMjkgNDQ0LjY0N2MtOS4zNTctOS4zNTctOS4zNzUtMjQuNTIyLS4wNC0zMy45MDFMMTYxLjAxMSAyNTYgNi45OSAxMDEuMjU1Yy05LjMzNS05LjM3OS05LjMxNy0yNC41NDQuMDQtMzMuOTAxbDIyLjY2Ny0yMi42NjdjOS4zNzMtOS4zNzMgMjQuNTY5LTkuMzczIDMzLjk0MSAwTDI1Ny45ODEgMjM5LjAzYzkuMzczIDkuMzcyIDkuMzczIDI0LjU2OCAwIDMzLjk0MXpNNjQwIDQ1NnYtMzJjMC0xMy4yNTUtMTAuNzQ1LTI0LTI0LTI0SDMxMmMtMTMuMjU1IDAtMjQgMTAuNzQ1LTI0IDI0djMyYzAgMTMuMjU1IDEwLjc0NSAyNCAyNCAyNGgzMDRjMTMuMjU1IDAgMjQtMTAuNzQ1IDI0LTI0elwiPjwvcGF0aD48L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Y291bnQ+NzwvY291bnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN1Ym1lbnUgY2xhc3NOYW1lPVwib3BlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnRuIHJvdXRlPXsgcHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyBgL3NlcnZpY2VzL2Jsb2NrY2hhaW5gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctYW5nbGUtcmlnaHRcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjU2IDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTIyNC4zIDI3M2wtMTM2IDEzNmMtOS40IDkuNC0yNC42IDkuNC0zMy45IDBsLTIyLjYtMjIuNmMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlsOTYuNC05Ni40LTk2LjQtOTYuNGMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlMNTQuMyAxMDNjOS40LTkuNCAyNC42LTkuNCAzMy45IDBsMTM2IDEzNmM5LjUgOS40IDkuNSAyNC42LjEgMzR6XCI+PC9wYXRoPjwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQmxvY2tjaGFpbiBUZWNobm9sb2d5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWNpcmNsZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjU2IDhDMTE5IDggOCAxMTkgOCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzOTMgOCAyNTYgOHpcIj48L3BhdGg+PC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnRuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnRuIHJvdXRlPXsgcHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyBgL3NlcnZpY2VzL2NyaXB0b2N1cnJlbmN5YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWFuZ2xlLXJpZ2h0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI1NiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yMjQuMyAyNzNsLTEzNiAxMzZjLTkuNCA5LjQtMjQuNiA5LjQtMzMuOSAwbC0yMi42LTIyLjZjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45bDk2LjQtOTYuNC05Ni40LTk2LjRjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45TDU0LjMgMTAzYzkuNC05LjQgMjQuNi05LjQgMzMuOSAwbDEzNiAxMzZjOS41IDkuNCA5LjUgMjQuNi4xIDM0elwiPjwvcGF0aD48L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENyaXB0b2N1cnJlbmN5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWNpcmNsZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjU2IDhDMTE5IDggOCAxMTkgOCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzOTMgOCAyNTYgOHpcIj48L3BhdGg+PC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnRuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnRuIHJvdXRlPXsgcHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyBgL3NlcnZpY2VzL3NlY3VyaXR5YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWFuZ2xlLXJpZ2h0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI1NiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yMjQuMyAyNzNsLTEzNiAxMzZjLTkuNCA5LjQtMjQuNiA5LjQtMzMuOSAwbC0yMi42LTIyLjZjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45bDk2LjQtOTYuNC05Ni40LTk2LjRjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45TDU0LjMgMTAzYzkuNC05LjQgMjQuNi05LjQgMzMuOSAwbDEzNiAxMzZjOS41IDkuNCA5LjUgMjQuNi4xIDM0elwiPjwvcGF0aD48L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlY3VyaXR5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWNpcmNsZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjU2IDhDMTE5IDggOCAxMTkgOCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzOTMgOCAyNTYgOHpcIj48L3BhdGg+PC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnRuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnRuIHJvdXRlPXsgcHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyBgL3NlcnZpY2VzL3NvZnR3YXJlc2B9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1hbmdsZS1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNTYgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjI0LjMgMjczbC0xMzYgMTM2Yy05LjQgOS40LTI0LjYgOS40LTMzLjkgMGwtMjIuNi0yMi42Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOWw5Ni40LTk2LjQtOTYuNC05Ni40Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOUw1NC4zIDEwM2M5LjQtOS40IDI0LjYtOS40IDMzLjkgMGwxMzYgMTM2YzkuNSA5LjQgOS41IDI0LjYuMSAzNHpcIj48L3BhdGg+PC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTb2Z0d2FyZSBEZXZlbG9wbWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6XCI+PC9wYXRoPjwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J0bj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ0biByb3V0ZT17IHByb2Nlc3MuZW52LkJBQ0tFTkRfVVJMICsgYC9zZXJ2aWNlcy9tb2JpbGVgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctYW5nbGUtcmlnaHRcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjU2IDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTIyNC4zIDI3M2wtMTM2IDEzNmMtOS40IDkuNC0yNC42IDkuNC0zMy45IDBsLTIyLjYtMjIuNmMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlsOTYuNC05Ni40LTk2LjQtOTYuNGMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlMNTQuMyAxMDNjOS40LTkuNCAyNC42LTkuNCAzMy45IDBsMTM2IDEzNmM5LjUgOS40IDkuNSAyNC42LjEgMzR6XCI+PC9wYXRoPjwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTW9iaWxlIEFwcGxpY2F0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6XCI+PC9wYXRoPjwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J0bj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ0biByb3V0ZT17IHByb2Nlc3MuZW52LkJBQ0tFTkRfVVJMICsgYC9zZXJ2aWNlcy9wYXltZW50c2B9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1hbmdsZS1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNTYgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjI0LjMgMjczbC0xMzYgMTM2Yy05LjQgOS40LTI0LjYgOS40LTMzLjkgMGwtMjIuNi0yMi42Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOWw5Ni40LTk2LjQtOTYuNC05Ni40Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOUw1NC4zIDEwM2M5LjQtOS40IDI0LjYtOS40IDMzLjkgMGwxMzYgMTM2YzkuNSA5LjQgOS41IDI0LjYuMSAzNHpcIj48L3BhdGg+PC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQYXltZW50c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6XCI+PC9wYXRoPjwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J0bj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ0biByb3V0ZT17IHByb2Nlc3MuZW52LkJBQ0tFTkRfVVJMICsgYC9zZXJ2aWNlcy9leGNoYW5nZXNgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctYW5nbGUtcmlnaHRcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjU2IDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTIyNC4zIDI3M2wtMTM2IDEzNmMtOS40IDkuNC0yNC42IDkuNC0zMy45IDBsLTIyLjYtMjIuNmMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlsOTYuNC05Ni40LTk2LjQtOTYuNGMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlMNTQuMyAxMDNjOS40LTkuNCAyNC42LTkuNCAzMy45IDBsMTM2IDEzNmM5LjUgOS40IDkuNSAyNC42LjEgMzR6XCI+PC9wYXRoPjwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRXhjaGFuZ2VzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWNpcmNsZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjU2IDhDMTE5IDggOCAxMTkgOCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzOTMgOCAyNTYgOHpcIj48L3BhdGg+PC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnRuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3VibWVudT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnRuPlxuICAgICAgICAgICAgICAgICAgICA8L21lbnVpdGVtcz5cbiAgICAgICAgICAgICAgICBcdDxzaWRlYmFyZGl2aWRlcj48L3NpZGViYXJkaXZpZGVyPlxuICAgICAgICAgICAgICAgIDwvbWVudXNpdGVtb2JpbGU+XG4gICAgICAgICAgICA8L21lbnVzY3JvbGw+XG4gICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgICAgICAgIGxlZnRtZW51IHtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogLTM0MHB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTAwMDA7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAzMzBweDtcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDhweCAjMDAwO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWMyMjJlO1xuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGxlZnQgMzUwbXMgZWFzZSAwcztcbiAgICAgICAgICAgICAgICAgICAgLW1vei10cmFuc2l0aW9uOiBsZWZ0IDM1MG1zIGVhc2UgMHM7XG4gICAgICAgICAgICAgICAgICAgIC1tcy10cmFuc2l0aW9uOiBsZWZ0IDM1MG1zIGVhc2UgMHM7XG4gICAgICAgICAgICAgICAgICAgIC1vLXRyYW5zaXRpb246IGxlZnQgMzUwbXMgZWFzZSAwcztcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogbGVmdCAzNTBtcyBlYXNlIDBzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBzaWRlYmFydXNlciB7XG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCA2cHggNHB4IHJnYmEoMCwwLDAsLjMpO1xuICAgICAgICAgICAgICAgICAgICB0b3VjaC1hY3Rpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE4NXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBzaWRlYmFydXNlciBwaG90byB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMfS9zdGF0aWMvaW1hZ2VzL2ljb25zL2ljb24tMTkyeDE5Mi5wbmcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBzaWRlYmFydXNlciBwaG90byB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjMDBmOWE2O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgdG9wO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCA1cHggIzAwMDAwMDtcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggIzAwMDAwMDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxNXB4IDBweCAwcHggMTVweDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogOTBweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDkwcHg7XG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBzaWRlYmFydXNlciBwaG90byB0aXRsZSB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAyODVweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogMTA1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IHNpZGViYXJ1c2VyIHBob3RvIHN1YnRpdGxlIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjkwcHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjY2NjO1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDEwMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBzaWRlYmFydXNlciBiZ2ltZyB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMfS9zdGF0aWMvaW1hZ2VzL3NlcnZpY2VzL2Jsb2NrY2hhaW4tc2VydmljZXMuanBnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgc2lkZWJhcnVzZXIgYmdpbWcge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IGx1bWlub3NpdHk7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwZjlhNjtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE4NXB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgc2lkZWJhcnVzZXIgYmdzaGFkb3cge1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiA5O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE4NXB4O1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20scmdiYSgwLDAsMCwwKSAwLHJnYmEoMCwwLDAsMCkgMjAlLHJnYmEoMCwwLDAsLjEpIDQwJSxyZ2JhKDAsMCwwLC43KSA3MCUscmdiYSgwLDAsMCwxKSAxMDAlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDIzNXB4KTtcbiAgICAgICAgICAgICAgICAgICAgdG91Y2gtYWN0aW9uOiBwYW4teTtcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzMwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgc2lkZWJhcnNlcGFyYXRvcjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgc2lkZWJhcnNlcGFyYXRvciB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNjY2M7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnQtZW51IG1lbnVzY3JvbGwgc2lkZWJhcmRpdmlkZXIge1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wOiBzb2xpZCAxcHggcmdiYSgwLDAsMCwuMik7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCByZ2JhKDI1NSwyNTUsMjU1LC4wMyk7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0bixcbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVjb250YWN0ID4gYSB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xuICAgICAgICAgICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDU1cHg7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNjY2M7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuLmRpc2FibGUsXG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51Y29udGFjdCA+IGEuZGlzYWJsZSB7XG4gICAgICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAuNTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51aXRlbXMgPiBidG4gLnN2Zy1pbmxpbmUsXG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51Y29udGFjdCA+IGEgLnN2Zy1pbmxpbmUge1xuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogLS4xMjVlbTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMjVweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNiNTAwZmY7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjJweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgIHRvcDogM3B4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0biAuc3ZnLWlubGluZS5zdmctY2lyY2xlLFxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWNvbnRhY3QgPiBhIC5zdmctaW5saW5lLnN2Zy1jaXJjbGUge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzQzNDc1MjtcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAyNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0biAuc3ZnLWlubGluZS5zdmctdGVybWluYWwge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzQzNDc1MjtcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtMXB4O1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDE4cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuIC5zdmctaW5saW5lLnN2Zy10diB7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IC00cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuIC5zdmctaW5saW5lLnN2Zy1zdG9yZXMge1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtNXB4O1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDJweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51aXRlbXMgPiBidG4gLnN2Zy1pbmxpbmUuc3ZnLXJlc3RhdXJhbnRlcyxcbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0biAuc3ZnLWlubGluZS5zdmctd2hhdHNhcHAsXG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51aXRlbXMgPiBidG4gLnN2Zy1pbmxpbmUuc3ZnLXBob25lLFxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuIC5zdmctaW5saW5lLnN2Zy1tYWlsLFxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuIC5zdmctaW5saW5lLnN2Zy1zdGFyIHtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogLTJweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51aXRlbXMgPiBidG46aG92ZXIsXG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51Y29udGFjdCA+IGE6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjMyYjNhO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuOmhvdmVyIC5zdmctaW5saW5lLnN2Zy10ZXJtaW5hbCxcbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0bjpob3ZlciAuc3ZnLWlubGluZS5zdmctY2lyY2xlLFxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWNvbnRhY3QgPiBhOmhvdmVyIC5zdmctaW5saW5lLnN2Zy1jaXJjbGUge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuID4gY291bnQge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjYzk0N2ZmO1xuICAgICAgICAgICAgICAgICAgICByaWdodDogLTI1cHg7XG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAtMnB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0biBzdWJtZW51IHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSArIDI1cHgpO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IC0yNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0biBzdWJtZW51IGJ0bi5kaXNhYmxlIHtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogLjU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuIHN1Ym1lbnUgYnRuIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNTNweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0biBzdWJtZW51Lm9wZW4ge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0bjpob3ZlciBzdWJtZW51IGJ0biAuc3ZnLWlubGluZS5zdmctY2lyY2xlIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM0MzQ3NTI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuOmhvdmVyIHN1Ym1lbnUgYnRuOm5vdCguZGlzYWJsZSk6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmYzYTRlO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuOmhvdmVyIHN1Ym1lbnUgYnRuOm5vdCguZGlzYWJsZSk6aG92ZXIgLnN2Zy1pbmxpbmUuc3ZnLWNpcmNsZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk0MHB4KSB7XG4gICAgICAgICAgICAgICAgICAgIGZvb3RlciBpbmZvcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA4ODBweCkge1xuICAgICAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2l0ZW1vYmlsZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgICAgICAgIGJvZHkubGVmdC1tZW51IGxlZnRtZW51IHtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDM5OXB4KSB7XG4gICAgICAgICAgICAgICAgICAgIGJvZHkubGVmdC1tZW51IGxlZnRtZW51LCBsZWZ0bWVudSBtZW51c2Nyb2xsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA2OXB4KSFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDMzMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAyNjBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICBcdDwvbGVmdG1lbnU+XG4gICAgKX1cbn0iXX0= */\n/*@ sourceURL=/home/ubuntu/workspace/estudo/next/pages/avnsystems/interface/leftmenu.js */"),
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "918551822",
        css: "body.left-menu leftmenu{left:0;}@media (max-width:399px){body.left-menu leftmenu,leftmenu menuscroll{width:calc(100% - 69px)!important;max-width:330px;min-width:260px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VidW50dS93b3Jrc3BhY2UvZXN0dWRvL25leHQvcGFnZXMvYXZuc3lzdGVtcy9pbnRlcmZhY2UvbGVmdG1lbnUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbVYrQixBQUc0QixBQUsrQixPQUoxQywyQkFLd0IsZ0JBQ0EsZ0JBQ3BCIiwiZmlsZSI6Ii9ob21lL3VidW50dS93b3Jrc3BhY2UvZXN0dWRvL25leHQvcGFnZXMvYXZuc3lzdGVtcy9pbnRlcmZhY2UvbGVmdG1lbnUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKmdsb2JhbCAkIG5hdmlnYXRvciovXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IExpbmssIFJvdXRlciB9IGZyb20gJy4vLi4vLi4vcm91dGVzJ1xuaW1wb3J0IExlZnRNZW51Q29udGFjdDEgZnJvbSAnLi9sZWZ0bWVudS9jb250YWN0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZWZ0TWVudSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuICAgICAgICAkKFwibGVmdG1lbnUgbWVudXNjcm9sbCBtZW51aXRlbXMgPiBidG5cIikub24oXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBpZiAoJChlLnRhcmdldCkuaGFzQ2xhc3MoJ2Rpc2FibGUnKSkge1xuICAgICAgICAgICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoJChlLnRhcmdldCkuYXR0cignaHJlZicpKSB7XG4gICAgICAgICAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdsZWZ0LW1lbnUnKTtcbiAgICAgICAgICAgICAgICB3aW5kb3cub3BlbigkKGUudGFyZ2V0KS5hdHRyKCdocmVmJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoJChlLnRhcmdldCkuYXR0cigncm91dGUnKSkge1xuICAgICAgICAgICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnbGVmdC1tZW51Jyk7XG4gICAgICAgICAgICAgICAgUm91dGVyLnB1c2hSb3V0ZSgkKGUudGFyZ2V0KS5hdHRyKCdyb3V0ZScpKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmZpbmQoJ3N1Ym1lbnUnKS50b2dnbGVDbGFzcyhcIm9wZW5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgICQoXCJoZWFkZXIgbmF2dG9nZ2xlLCBtZW51aGlkZXJcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBpZiAoKGUuY3VycmVudFRhcmdldC5sb2NhbE5hbWUgPT09IFwibmF2dG9nZ2xlXCIgfHwgJCgnYm9keScpLmhhc0NsYXNzKCdsZWZ0LW1lbnUnKSkgfHwgISQoJ2h0bWwnKS5oYXNDbGFzcygnbnByb2dyZXNzLWJ1c3knKSkge1xuICAgICAgICAgICAgICAgICQoJ2JvZHknKS50b2dnbGVDbGFzcygnbGVmdC1tZW51Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuICAgIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGxlZnRtZW51PlxuICAgIFx0XHQ8c2lkZWJhcnVzZXI+XG4gICAgXHQgICAgICAgIDxwaG90bz5cbiAgICBcdCAgICAgICAgICAgIDx0aXRsZT5Cb2Egbm9pdGUuIOKYhTwvdGl0bGU+XG4gICAgXHQgICAgICAgICAgICA8c3VidGl0bGU+RW50cmUgY29tIHNldSBsb2dpbiBvdSBjYWRhc3RyZS1zZSE8L3N1YnRpdGxlPlxuICAgIFx0ICAgICAgICA8L3Bob3RvPlxuICAgIFx0XHQgICAgPGJnaW1nPjwvYmdpbWc+XG4gICAgXHRcdCAgICA8YmdzaGFkb3c+PC9iZ3NoYWRvdz5cbiAgICBcdFx0PC9zaWRlYmFydXNlcj5cbiAgICBcdFx0PG1lbnVzY3JvbGw+XG4gICAgICAgICAgICAgICAgPHNpZGViYXJzZXBhcmF0b3I+QWNlc3NvIFJlc3RyaXRvPC9zaWRlYmFyc2VwYXJhdG9yPlxuICAgICAgICAgICAgICAgIDxtZW51aXRlbXM+XG4gICAgICAgICAgICAgICAgICAgIDxidG4gaHJlZj1cIi8vYWRtaW4uYXZuLnN5c3RlbXNcIiB0YXJnZXQ9XCJfc2VsZlwiPlxuICAgICAgICAgICAgICAgICAgICBcdDxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMTQ0IDExMnY1MS42SDQ4Yy0yNi41IDAtNDggMjEuNS00OCA0OHY4OC42YzAgMjYuNSAyMS41IDQ4IDQ4IDQ4aDk2djUxLjZjMCA0Mi42IDUxLjcgNjQuMiA4MS45IDMzLjlsMTQ0LTE0My45YzE4LjctMTguNyAxOC43LTQ5LjEgMC02Ny45bC0xNDQtMTQ0QzE5NS44IDQ4IDE0NCA2OS4zIDE0NCAxMTJ6bTE5MiAxNDRMMTkyIDQwMHYtOTkuN0g0OHYtODguNmgxNDRWMTEybDE0NCAxNDR6bTgwIDE5MmgtODRjLTYuNiAwLTEyLTUuNC0xMi0xMnYtMjRjMC02LjYgNS40LTEyIDEyLTEyaDg0YzI2LjUgMCA0OC0yMS41IDQ4LTQ4VjE2MGMwLTI2LjUtMjEuNS00OC00OC00OGgtODRjLTYuNiAwLTEyLTUuNC0xMi0xMlY3NmMwLTYuNiA1LjQtMTIgMTItMTJoODRjNTMgMCA5NiA0MyA5NiA5NnYxOTJjMCA1My00MyA5Ni05NiA5NnpcIj48L3BhdGg+PC9zdmc+XG4gICAgICAgICAgICAgICAgICAgIFx0RW50cmFyXG4gICAgICAgICAgICAgICAgICAgIFx0PHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6XCI+PC9wYXRoPjwvc3ZnPjwvYnRuPlxuICAgICAgICAgICAgICAgICAgICA8YnRuIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiZGlzYWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICBcdDxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1NzYgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjg4IDIwOGMtNDQuMiAwLTgwIDM1LjgtODAgODBzMzUuOCA4MCA4MCA4MCA4MC0zNS44IDgwLTgwLTM1LjgtODAtODAtODB6bTAgMTI4Yy0yNi41IDAtNDgtMjEuNS00OC00OHMyMS41LTQ4IDQ4LTQ4IDQ4IDIxLjUgNDggNDgtMjEuNSA0OC00OCA0OHpNNTEyIDY0SDM1MlYzMmMwLTE3LjctMTQuMy0zMi0zMi0zMmgtNjRjLTE3LjcgMC0zMiAxNC4zLTMyIDMydjMySDY0QzI4LjcgNjQgMCA5Mi43IDAgMTI4djMyMGMwIDM1LjMgMjguNyA2NCA2NCA2NGg0NDhjMzUuMyAwIDY0LTI4LjcgNjQtNjRWMTI4YzAtMzUuMy0yOC43LTY0LTY0LTY0ek0yNTYgMzJoNjR2OTZoLTY0VjMyem0xMjggNDQ4SDE5MnYtMjEuOWMwLTkgMi42LTE3LjYgNy42LTI1IDcuMi0xMC43IDIwLjMtMTcuMiAzNS0xNy4yIDE1LjkgMCAyMy41IDggNTMuNCA4czM3LjYtOCA1My40LThjMTQuNyAwIDI3LjcgNi40IDM1IDE3LjIgNSA3LjQgNy42IDE2IDcuNiAyNVY0ODB6bTE2MC0zMmMwIDE3LjYtMTQuNCAzMi0zMiAzMmgtOTZ2LTIxLjljMC0xNS45LTQuOC0zMC42LTEzLTQyLjgtMTMuOC0yMC41LTM3LjMtMzEuMy02MS41LTMxLjMtMjIuMiAwLTI3LjggOC01My40IDgtMjUuNiAwLTMxLjItOC01My40LTgtMjQuMiAwLTQ3LjcgMTAuOC02MS41IDMxLjMtOC4yIDEyLjItMTMgMjctMTMgNDIuOFY0ODBINjRjLTE3LjYgMC0zMi0xNC40LTMyLTMyVjEyOGMwLTE3LjYgMTQuNC0zMiAzMi0zMmgxNjB2NjRoMTI4Vjk2aDE2MGMxNy42IDAgMzIgMTQuNCAzMiAzMnYzMjB6XCI+PC9wYXRoPjwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICBcdENhZGFzdHJhci1zZVxuICAgICAgICAgICAgICAgICAgICBcdDxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctY2lyY2xlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNTYgOEMxMTkgOCA4IDExOSA4IDI1NnMxMTEgMjQ4IDI0OCAyNDggMjQ4LTExMSAyNDgtMjQ4UzM5MyA4IDI1NiA4elwiPjwvcGF0aD48L3N2Zz48L2J0bj5cbiAgICAgICAgICAgICAgICA8L21lbnVpdGVtcz5cbiAgICAgICAgICAgICAgICA8c2lkZWJhcmRpdmlkZXI+PC9zaWRlYmFyZGl2aWRlcj5cbiAgICBcdFx0XHQ8bWVudXNpdGVtb2JpbGU+XG4gICAgXHQgICAgICAgICAgICA8c2lkZWJhcnNlcGFyYXRvcj5XZWJzaXRlIFBhZ2VzPC9zaWRlYmFyc2VwYXJhdG9yPlxuICAgIFx0ICAgICAgICAgICAgPG1lbnVpdGVtcz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidG4gcm91dGU9eyBwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArIGAvYH0+XG4gICAgICAgICAgICAgICAgICAgICAgICBcdDxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctaG9tZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1NzYgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNNDg4IDMxMi43VjQ1NmMwIDEzLjMtMTAuNyAyNC0yNCAyNEgzNDhjLTYuNiAwLTEyLTUuNC0xMi0xMlYzNTZjMC02LjYtNS40LTEyLTEyLTEyaC03MmMtNi42IDAtMTIgNS40LTEyIDEydjExMmMwIDYuNi01LjQgMTItMTIgMTJIMTEyYy0xMy4zIDAtMjQtMTAuNy0yNC0yNFYzMTIuN2MwLTMuNiAxLjYtNyA0LjQtOS4zbDE4OC0xNTQuOGM0LjQtMy42IDEwLjgtMy42IDE1LjMgMGwxODggMTU0LjhjMi43IDIuMyA0LjMgNS43IDQuMyA5LjN6bTgzLjYtNjAuOUw0ODggMTgyLjlWNDQuNGMwLTYuNi01LjQtMTItMTItMTJoLTU2Yy02LjYgMC0xMiA1LjQtMTIgMTJWMTE3bC04OS41LTczLjdjLTE3LjctMTQuNi00My4zLTE0LjYtNjEgMEw0LjQgMjUxLjhjLTUuMSA0LjItNS44IDExLjgtMS42IDE2LjlsMjUuNSAzMWM0LjIgNS4xIDExLjggNS44IDE2LjkgMS42bDIzNS4yLTE5My43YzQuNC0zLjYgMTAuOC0zLjYgMTUuMyAwbDIzNS4yIDE5My43YzUuMSA0LjIgMTIuNyAzLjUgMTYuOS0xLjZsMjUuNS0zMWM0LjItNS4yIDMuNC0xMi43LTEuNy0xNi45elwiPjwvcGF0aD48L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgIFx0SG9tZVxuICAgICAgICAgICAgICAgICAgICAgICAgXHQ8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWNpcmNsZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjU2IDhDMTE5IDggOCAxMTkgOCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzOTMgOCAyNTYgOHpcIj48L3BhdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICBcdDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idG4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnRuIHJvdXRlPXsgcHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyBgL2Fib3V0YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICBcdDxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctaW5mby1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOS4wNDMgOCA4IDExOS4wODMgOCAyNTZjMCAxMzYuOTk3IDExMS4wNDMgMjQ4IDI0OCAyNDhzMjQ4LTExMS4wMDMgMjQ4LTI0OEM1MDQgMTE5LjA4MyAzOTIuOTU3IDggMjU2IDh6bTAgMTEwYzIzLjE5NiAwIDQyIDE4LjgwNCA0MiA0MnMtMTguODA0IDQyLTQyIDQyLTQyLTE4LjgwNC00Mi00MiAxOC44MDQtNDIgNDItNDJ6bTU2IDI1NGMwIDYuNjI3LTUuMzczIDEyLTEyIDEyaC04OGMtNi42MjcgMC0xMi01LjM3My0xMi0xMnYtMjRjMC02LjYyNyA1LjM3My0xMiAxMi0xMmgxMnYtNjRoLTEyYy02LjYyNyAwLTEyLTUuMzczLTEyLTEydi0yNGMwLTYuNjI3IDUuMzczLTEyIDEyLTEyaDY0YzYuNjI3IDAgMTIgNS4zNzMgMTIgMTJ2MTAwaDEyYzYuNjI3IDAgMTIgNS4zNzMgMTIgMTJ2MjR6XCI+PC9wYXRoPjwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgXHRBYm91dCBVc1xuICAgICAgICAgICAgICAgICAgICAgICAgXHQ8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWNpcmNsZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjU2IDhDMTE5IDggOCAxMTkgOCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzOTMgOCAyNTYgOHpcIj48L3BhdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICBcdDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idG4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnRuIGNsYXNzTmFtZT1cInN1Ym1lbnUtaGFzLW51bWJlcnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWJyaWVmY2FzZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMzIwIDMzNmMwIDguODQtNy4xNiAxNi0xNiAxNmgtOTZjLTguODQgMC0xNi03LjE2LTE2LTE2di00OEgwdjE0NGMwIDI1LjYgMjIuNCA0OCA0OCA0OGg0MTZjMjUuNiAwIDQ4LTIyLjQgNDgtNDhWMjg4SDMyMHY0OHptMTQ0LTIwOGgtODBWODBjMC0yNS42LTIyLjQtNDgtNDgtNDhIMTc2Yy0yNS42IDAtNDggMjIuNC00OCA0OHY0OEg0OGMtMjUuNiAwLTQ4IDIyLjQtNDggNDh2ODBoNTEydi04MGMwLTI1LjYtMjIuNC00OC00OC00OHptLTE0NCAwSDE5MlY5NmgxMjh2MzJ6XCI+PC9wYXRoPjwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlcnZpY2VzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy10ZXJtaW5hbFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA2NDAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjU3Ljk4MSAyNzIuOTcxTDYzLjYzOCA0NjcuMzE0Yy05LjM3MyA5LjM3My0yNC41NjkgOS4zNzMtMzMuOTQxIDBMNy4wMjkgNDQ0LjY0N2MtOS4zNTctOS4zNTctOS4zNzUtMjQuNTIyLS4wNC0zMy45MDFMMTYxLjAxMSAyNTYgNi45OSAxMDEuMjU1Yy05LjMzNS05LjM3OS05LjMxNy0yNC41NDQuMDQtMzMuOTAxbDIyLjY2Ny0yMi42NjdjOS4zNzMtOS4zNzMgMjQuNTY5LTkuMzczIDMzLjk0MSAwTDI1Ny45ODEgMjM5LjAzYzkuMzczIDkuMzcyIDkuMzczIDI0LjU2OCAwIDMzLjk0MXpNNjQwIDQ1NnYtMzJjMC0xMy4yNTUtMTAuNzQ1LTI0LTI0LTI0SDMxMmMtMTMuMjU1IDAtMjQgMTAuNzQ1LTI0IDI0djMyYzAgMTMuMjU1IDEwLjc0NSAyNCAyNCAyNGgzMDRjMTMuMjU1IDAgMjQtMTAuNzQ1IDI0LTI0elwiPjwvcGF0aD48L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Y291bnQ+NzwvY291bnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN1Ym1lbnUgY2xhc3NOYW1lPVwib3BlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnRuIHJvdXRlPXsgcHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyBgL3NlcnZpY2VzL2Jsb2NrY2hhaW5gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctYW5nbGUtcmlnaHRcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjU2IDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTIyNC4zIDI3M2wtMTM2IDEzNmMtOS40IDkuNC0yNC42IDkuNC0zMy45IDBsLTIyLjYtMjIuNmMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlsOTYuNC05Ni40LTk2LjQtOTYuNGMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlMNTQuMyAxMDNjOS40LTkuNCAyNC42LTkuNCAzMy45IDBsMTM2IDEzNmM5LjUgOS40IDkuNSAyNC42LjEgMzR6XCI+PC9wYXRoPjwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQmxvY2tjaGFpbiBUZWNobm9sb2d5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWNpcmNsZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjU2IDhDMTE5IDggOCAxMTkgOCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzOTMgOCAyNTYgOHpcIj48L3BhdGg+PC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnRuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnRuIHJvdXRlPXsgcHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyBgL3NlcnZpY2VzL2NyaXB0b2N1cnJlbmN5YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWFuZ2xlLXJpZ2h0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI1NiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yMjQuMyAyNzNsLTEzNiAxMzZjLTkuNCA5LjQtMjQuNiA5LjQtMzMuOSAwbC0yMi42LTIyLjZjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45bDk2LjQtOTYuNC05Ni40LTk2LjRjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45TDU0LjMgMTAzYzkuNC05LjQgMjQuNi05LjQgMzMuOSAwbDEzNiAxMzZjOS41IDkuNCA5LjUgMjQuNi4xIDM0elwiPjwvcGF0aD48L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENyaXB0b2N1cnJlbmN5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWNpcmNsZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjU2IDhDMTE5IDggOCAxMTkgOCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzOTMgOCAyNTYgOHpcIj48L3BhdGg+PC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnRuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnRuIHJvdXRlPXsgcHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyBgL3NlcnZpY2VzL3NlY3VyaXR5YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWFuZ2xlLXJpZ2h0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI1NiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yMjQuMyAyNzNsLTEzNiAxMzZjLTkuNCA5LjQtMjQuNiA5LjQtMzMuOSAwbC0yMi42LTIyLjZjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45bDk2LjQtOTYuNC05Ni40LTk2LjRjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45TDU0LjMgMTAzYzkuNC05LjQgMjQuNi05LjQgMzMuOSAwbDEzNiAxMzZjOS41IDkuNCA5LjUgMjQuNi4xIDM0elwiPjwvcGF0aD48L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlY3VyaXR5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWNpcmNsZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjU2IDhDMTE5IDggOCAxMTkgOCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzOTMgOCAyNTYgOHpcIj48L3BhdGg+PC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnRuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnRuIHJvdXRlPXsgcHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyBgL3NlcnZpY2VzL3NvZnR3YXJlc2B9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1hbmdsZS1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNTYgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjI0LjMgMjczbC0xMzYgMTM2Yy05LjQgOS40LTI0LjYgOS40LTMzLjkgMGwtMjIuNi0yMi42Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOWw5Ni40LTk2LjQtOTYuNC05Ni40Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOUw1NC4zIDEwM2M5LjQtOS40IDI0LjYtOS40IDMzLjkgMGwxMzYgMTM2YzkuNSA5LjQgOS41IDI0LjYuMSAzNHpcIj48L3BhdGg+PC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTb2Z0d2FyZSBEZXZlbG9wbWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6XCI+PC9wYXRoPjwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J0bj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ0biByb3V0ZT17IHByb2Nlc3MuZW52LkJBQ0tFTkRfVVJMICsgYC9zZXJ2aWNlcy9tb2JpbGVgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctYW5nbGUtcmlnaHRcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjU2IDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTIyNC4zIDI3M2wtMTM2IDEzNmMtOS40IDkuNC0yNC42IDkuNC0zMy45IDBsLTIyLjYtMjIuNmMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlsOTYuNC05Ni40LTk2LjQtOTYuNGMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlMNTQuMyAxMDNjOS40LTkuNCAyNC42LTkuNCAzMy45IDBsMTM2IDEzNmM5LjUgOS40IDkuNSAyNC42LjEgMzR6XCI+PC9wYXRoPjwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTW9iaWxlIEFwcGxpY2F0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6XCI+PC9wYXRoPjwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J0bj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ0biByb3V0ZT17IHByb2Nlc3MuZW52LkJBQ0tFTkRfVVJMICsgYC9zZXJ2aWNlcy9wYXltZW50c2B9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1hbmdsZS1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNTYgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjI0LjMgMjczbC0xMzYgMTM2Yy05LjQgOS40LTI0LjYgOS40LTMzLjkgMGwtMjIuNi0yMi42Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOWw5Ni40LTk2LjQtOTYuNC05Ni40Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOUw1NC4zIDEwM2M5LjQtOS40IDI0LjYtOS40IDMzLjkgMGwxMzYgMTM2YzkuNSA5LjQgOS41IDI0LjYuMSAzNHpcIj48L3BhdGg+PC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQYXltZW50c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6XCI+PC9wYXRoPjwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J0bj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ0biByb3V0ZT17IHByb2Nlc3MuZW52LkJBQ0tFTkRfVVJMICsgYC9zZXJ2aWNlcy9leGNoYW5nZXNgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctYW5nbGUtcmlnaHRcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjU2IDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTIyNC4zIDI3M2wtMTM2IDEzNmMtOS40IDkuNC0yNC42IDkuNC0zMy45IDBsLTIyLjYtMjIuNmMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlsOTYuNC05Ni40LTk2LjQtOTYuNGMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlMNTQuMyAxMDNjOS40LTkuNCAyNC42LTkuNCAzMy45IDBsMTM2IDEzNmM5LjUgOS40IDkuNSAyNC42LjEgMzR6XCI+PC9wYXRoPjwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRXhjaGFuZ2VzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWNpcmNsZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjU2IDhDMTE5IDggOCAxMTkgOCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzOTMgOCAyNTYgOHpcIj48L3BhdGg+PC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnRuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3VibWVudT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnRuPlxuICAgICAgICAgICAgICAgICAgICA8L21lbnVpdGVtcz5cbiAgICAgICAgICAgICAgICBcdDxzaWRlYmFyZGl2aWRlcj48L3NpZGViYXJkaXZpZGVyPlxuICAgICAgICAgICAgICAgIDwvbWVudXNpdGVtb2JpbGU+XG4gICAgICAgICAgICA8L21lbnVzY3JvbGw+XG4gICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgICAgICAgIGxlZnRtZW51IHtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogLTM0MHB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTAwMDA7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAzMzBweDtcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDhweCAjMDAwO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWMyMjJlO1xuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGxlZnQgMzUwbXMgZWFzZSAwcztcbiAgICAgICAgICAgICAgICAgICAgLW1vei10cmFuc2l0aW9uOiBsZWZ0IDM1MG1zIGVhc2UgMHM7XG4gICAgICAgICAgICAgICAgICAgIC1tcy10cmFuc2l0aW9uOiBsZWZ0IDM1MG1zIGVhc2UgMHM7XG4gICAgICAgICAgICAgICAgICAgIC1vLXRyYW5zaXRpb246IGxlZnQgMzUwbXMgZWFzZSAwcztcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogbGVmdCAzNTBtcyBlYXNlIDBzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBzaWRlYmFydXNlciB7XG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCA2cHggNHB4IHJnYmEoMCwwLDAsLjMpO1xuICAgICAgICAgICAgICAgICAgICB0b3VjaC1hY3Rpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE4NXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBzaWRlYmFydXNlciBwaG90byB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMfS9zdGF0aWMvaW1hZ2VzL2ljb25zL2ljb24tMTkyeDE5Mi5wbmcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBzaWRlYmFydXNlciBwaG90byB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjMDBmOWE2O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgdG9wO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCA1cHggIzAwMDAwMDtcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggIzAwMDAwMDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxNXB4IDBweCAwcHggMTVweDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogOTBweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDkwcHg7XG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBzaWRlYmFydXNlciBwaG90byB0aXRsZSB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAyODVweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogMTA1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IHNpZGViYXJ1c2VyIHBob3RvIHN1YnRpdGxlIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjkwcHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjY2NjO1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDEwMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBzaWRlYmFydXNlciBiZ2ltZyB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMfS9zdGF0aWMvaW1hZ2VzL3NlcnZpY2VzL2Jsb2NrY2hhaW4tc2VydmljZXMuanBnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgc2lkZWJhcnVzZXIgYmdpbWcge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IGx1bWlub3NpdHk7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwZjlhNjtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE4NXB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgc2lkZWJhcnVzZXIgYmdzaGFkb3cge1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiA5O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE4NXB4O1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20scmdiYSgwLDAsMCwwKSAwLHJnYmEoMCwwLDAsMCkgMjAlLHJnYmEoMCwwLDAsLjEpIDQwJSxyZ2JhKDAsMCwwLC43KSA3MCUscmdiYSgwLDAsMCwxKSAxMDAlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDIzNXB4KTtcbiAgICAgICAgICAgICAgICAgICAgdG91Y2gtYWN0aW9uOiBwYW4teTtcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzMwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgc2lkZWJhcnNlcGFyYXRvcjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgc2lkZWJhcnNlcGFyYXRvciB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNjY2M7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnQtZW51IG1lbnVzY3JvbGwgc2lkZWJhcmRpdmlkZXIge1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wOiBzb2xpZCAxcHggcmdiYSgwLDAsMCwuMik7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCByZ2JhKDI1NSwyNTUsMjU1LC4wMyk7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0bixcbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVjb250YWN0ID4gYSB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xuICAgICAgICAgICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDU1cHg7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNjY2M7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuLmRpc2FibGUsXG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51Y29udGFjdCA+IGEuZGlzYWJsZSB7XG4gICAgICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAuNTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51aXRlbXMgPiBidG4gLnN2Zy1pbmxpbmUsXG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51Y29udGFjdCA+IGEgLnN2Zy1pbmxpbmUge1xuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogLS4xMjVlbTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMjVweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNiNTAwZmY7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjJweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgIHRvcDogM3B4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0biAuc3ZnLWlubGluZS5zdmctY2lyY2xlLFxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWNvbnRhY3QgPiBhIC5zdmctaW5saW5lLnN2Zy1jaXJjbGUge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzQzNDc1MjtcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAyNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0biAuc3ZnLWlubGluZS5zdmctdGVybWluYWwge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzQzNDc1MjtcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtMXB4O1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDE4cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuIC5zdmctaW5saW5lLnN2Zy10diB7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IC00cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuIC5zdmctaW5saW5lLnN2Zy1zdG9yZXMge1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtNXB4O1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDJweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51aXRlbXMgPiBidG4gLnN2Zy1pbmxpbmUuc3ZnLXJlc3RhdXJhbnRlcyxcbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0biAuc3ZnLWlubGluZS5zdmctd2hhdHNhcHAsXG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51aXRlbXMgPiBidG4gLnN2Zy1pbmxpbmUuc3ZnLXBob25lLFxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuIC5zdmctaW5saW5lLnN2Zy1tYWlsLFxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuIC5zdmctaW5saW5lLnN2Zy1zdGFyIHtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogLTJweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51aXRlbXMgPiBidG46aG92ZXIsXG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51Y29udGFjdCA+IGE6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjMyYjNhO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuOmhvdmVyIC5zdmctaW5saW5lLnN2Zy10ZXJtaW5hbCxcbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0bjpob3ZlciAuc3ZnLWlubGluZS5zdmctY2lyY2xlLFxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWNvbnRhY3QgPiBhOmhvdmVyIC5zdmctaW5saW5lLnN2Zy1jaXJjbGUge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuID4gY291bnQge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjYzk0N2ZmO1xuICAgICAgICAgICAgICAgICAgICByaWdodDogLTI1cHg7XG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAtMnB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0biBzdWJtZW51IHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSArIDI1cHgpO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IC0yNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0biBzdWJtZW51IGJ0bi5kaXNhYmxlIHtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogLjU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuIHN1Ym1lbnUgYnRuIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNTNweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0biBzdWJtZW51Lm9wZW4ge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0bjpob3ZlciBzdWJtZW51IGJ0biAuc3ZnLWlubGluZS5zdmctY2lyY2xlIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM0MzQ3NTI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuOmhvdmVyIHN1Ym1lbnUgYnRuOm5vdCguZGlzYWJsZSk6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmYzYTRlO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuOmhvdmVyIHN1Ym1lbnUgYnRuOm5vdCguZGlzYWJsZSk6aG92ZXIgLnN2Zy1pbmxpbmUuc3ZnLWNpcmNsZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk0MHB4KSB7XG4gICAgICAgICAgICAgICAgICAgIGZvb3RlciBpbmZvcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA4ODBweCkge1xuICAgICAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2l0ZW1vYmlsZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgICAgICAgIGJvZHkubGVmdC1tZW51IGxlZnRtZW51IHtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDM5OXB4KSB7XG4gICAgICAgICAgICAgICAgICAgIGJvZHkubGVmdC1tZW51IGxlZnRtZW51LCBsZWZ0bWVudSBtZW51c2Nyb2xsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA2OXB4KSFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDMzMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAyNjBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICBcdDwvbGVmdG1lbnU+XG4gICAgKX1cbn0iXX0= */\n/*@ sourceURL=/home/ubuntu/workspace/estudo/next/pages/avnsystems/interface/leftmenu.js */",
        __self: this
      }));
    }
  }]);

  return LeftMenu;
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/avnsystems/interface/leftmenu")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=_error.js.06f612c3783e6605d39d.hot-update.js.map