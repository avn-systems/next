webpackHotUpdate("static/development/pages/avnsystems/about.js",{

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
        className: "jsx-1127527500",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("sidebaruser", {
        className: "jsx-1127527500",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("photo", {
        className: "jsx-1127527500",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
        className: "jsx-1127527500",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, "Boa noite. \u2605"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("subtitle", {
        className: "jsx-1127527500",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, "Entre com seu login ou cadastre-se!")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("bgimg", {
        className: "jsx-1127527500",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("bgshadow", {
        className: "jsx-1127527500",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("menuscroll", {
        className: "jsx-1127527500",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("sidebarseparator", {
        className: "jsx-1127527500",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, "Acesso Restrito"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("menuitems", {
        className: "jsx-1127527500",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("btn", {
        href: "//admin.avn.systems",
        target: "_self",
        className: "jsx-1127527500",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        className: "jsx-1127527500" + " " + "svg-inline",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M144 112v51.6H48c-26.5 0-48 21.5-48 48v88.6c0 26.5 21.5 48 48 48h96v51.6c0 42.6 51.7 64.2 81.9 33.9l144-143.9c18.7-18.7 18.7-49.1 0-67.9l-144-144C195.8 48 144 69.3 144 112zm192 144L192 400v-99.7H48v-88.6h144V112l144 144zm80 192h-84c-6.6 0-12-5.4-12-12v-24c0-6.6 5.4-12 12-12h84c26.5 0 48-21.5 48-48V160c0-26.5-21.5-48-48-48h-84c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h84c53 0 96 43 96 96v192c0 53-43 96-96 96z",
        className: "jsx-1127527500",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      })), "Entrar", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        className: "jsx-1127527500" + " " + "svg-inline svg-circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z",
        className: "jsx-1127527500",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("btn", {
        href: "#",
        className: "jsx-1127527500" + " " + "disable",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 576 512",
        className: "jsx-1127527500" + " " + "svg-inline",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M288 208c-44.2 0-80 35.8-80 80s35.8 80 80 80 80-35.8 80-80-35.8-80-80-80zm0 128c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zM512 64H352V32c0-17.7-14.3-32-32-32h-64c-17.7 0-32 14.3-32 32v32H64C28.7 64 0 92.7 0 128v320c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64zM256 32h64v96h-64V32zm128 448H192v-21.9c0-9 2.6-17.6 7.6-25 7.2-10.7 20.3-17.2 35-17.2 15.9 0 23.5 8 53.4 8s37.6-8 53.4-8c14.7 0 27.7 6.4 35 17.2 5 7.4 7.6 16 7.6 25V480zm160-32c0 17.6-14.4 32-32 32h-96v-21.9c0-15.9-4.8-30.6-13-42.8-13.8-20.5-37.3-31.3-61.5-31.3-22.2 0-27.8 8-53.4 8-25.6 0-31.2-8-53.4-8-24.2 0-47.7 10.8-61.5 31.3-8.2 12.2-13 27-13 42.8V480H64c-17.6 0-32-14.4-32-32V128c0-17.6 14.4-32 32-32h160v64h128V96h160c17.6 0 32 14.4 32 32v320z",
        className: "jsx-1127527500",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      })), "Cadastrar-se", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        className: "jsx-1127527500" + " " + "svg-inline svg-circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z",
        className: "jsx-1127527500",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("sidebardivider", {
        className: "jsx-1127527500",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("menusitemobile", {
        className: "jsx-1127527500",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("sidebarseparator", {
        className: "jsx-1127527500",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, "Website Pages"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("menuitems", {
        className: "jsx-1127527500",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        route: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("btn", {
        className: "jsx-1127527500",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 576 512",
        className: "jsx-1127527500" + " " + "svg-inline svg-home",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M488 312.7V456c0 13.3-10.7 24-24 24H348c-6.6 0-12-5.4-12-12V356c0-6.6-5.4-12-12-12h-72c-6.6 0-12 5.4-12 12v112c0 6.6-5.4 12-12 12H112c-13.3 0-24-10.7-24-24V312.7c0-3.6 1.6-7 4.4-9.3l188-154.8c4.4-3.6 10.8-3.6 15.3 0l188 154.8c2.7 2.3 4.3 5.7 4.3 9.3zm83.6-60.9L488 182.9V44.4c0-6.6-5.4-12-12-12h-56c-6.6 0-12 5.4-12 12V117l-89.5-73.7c-17.7-14.6-43.3-14.6-61 0L4.4 251.8c-5.1 4.2-5.8 11.8-1.6 16.9l25.5 31c4.2 5.1 11.8 5.8 16.9 1.6l235.2-193.7c4.4-3.6 10.8-3.6 15.3 0l235.2 193.7c5.1 4.2 12.7 3.5 16.9-1.6l25.5-31c4.2-5.2 3.4-12.7-1.7-16.9z",
        className: "jsx-1127527500",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      })), "Home", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        className: "jsx-1127527500" + " " + "svg-inline svg-circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z",
        className: "jsx-1127527500",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        route: "/about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("btn", {
        className: "jsx-1127527500",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        class: "svg-inline svg-info-circle",
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        className: "jsx-1127527500",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z",
        className: "jsx-1127527500",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      })), "About Us", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        className: "jsx-1127527500" + " " + "svg-inline svg-circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z",
        className: "jsx-1127527500",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("sidebardivider", {
        className: "jsx-1127527500",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "2036145195",
        css: "leftmenu{top:0;width:100%;left:-340px;height:100vh;display:none;display:block;z-index:10000;position:fixed;max-width:330px;box-shadow:0 0 8px #000;background-color:#1c222e;-webkit-transition:left 350ms ease 0s;-moz-transition:left 350ms ease 0s;-ms-transition:left 350ms ease 0s;-o-transition:left 350ms ease 0s;-webkit-transition:left 350ms ease 0s;transition:left 350ms ease 0s;}leftmenu sidebaruser{box-shadow:0 0 6px 4px rgba(0,0,0,.3);touch-action:none;display:block;height:185px;}leftmenu sidebaruser photo{background-image:url(".concat("", "/static/images/icons/icon-192x192.png);}leftmenu sidebaruser photo{background-color:white;border:2px solid #00f9a6;background-position:center top;text-shadow:1px 1px 5px #000000;box-shadow:1px 1px 5px #000000;margin:15px 0px 0px 15px;background-size:cover;border-radius:50%;position:absolute;height:90px;width:90px;z-index:10;}leftmenu sidebaruser photo title{position:relative;min-width:285px;font-size:18px;display:block;color:#fff;top:105px;}leftmenu sidebaruser photo subtitle{position:relative;font-size:14px;display:block;width:290px;color:#ccc;top:100px;}leftmenu sidebaruser bgimg{background-image:url(").concat("", "/static/images/services/blockchain-services.jpg);}leftmenu sidebaruser bgimg{background-blend-mode:luminosity;background-position:center;background-color:#00f9a6;background-size:cover;position:absolute;height:185px;width:100%;}leftmenu sidebaruser bgshadow{top:0;left:0;right:0;z-index:9;height:185px;position:absolute;background:linear-gradient(to bottom,rgba(0,0,0,0) 0,rgba(0,0,0,0) 20%,rgba(0,0,0,.1) 40%,rgba(0,0,0,.7) 70%,rgba(0,0,0,1) 100%);}leftmenu menuscroll{height:calc(100vh - 235px);touch-action:pan-y;overflow-x:hidden;position:fixed;overflow:auto;width:330px;}leftmenu menuscroll sidebarseparator:first-child{margin-top:20px;}leftmenu menuscroll sidebarseparator{text-transform:uppercase;margin-bottom:10px;padding-left:20px;margin-top:10px;font-weight:500;font-size:14px;display:block;color:#ccc;}left-enu menuscroll sidebardivider{border-top:solid 1px rgba(0,0,0,.2);border-bottom:solid 1px rgba(255,255,255,.03);margin-bottom:20px;margin-top:10px;display:block;}leftmenu menuscroll menuitems>btn,leftmenu menuscroll menucontact>a{-webkit-text-decoration:none;text-decoration:none;padding-left:25px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;line-height:55px;cursor:pointer;font-size:15px;display:block;color:#ccc;}leftmenu menuscroll menuitems>btn.disable,leftmenu menuscroll menucontact>a.disable{pointer-events:none;opacity:.5;}leftmenu menuscroll menuitems>btn .svg-inline,leftmenu menuscroll menucontact>a .svg-inline{vertical-align:-.125em;display:inline-block;overflow:visible;position:relative;margin-right:20px;min-width:25px;color:#b500ff;height:22px;width:auto;top:3px;}leftmenu menuscroll menuitems>btn .svg-inline.svg-circle,leftmenu menuscroll menucontact>a .svg-inline.svg-circle{color:#434752;float:right;height:5px;top:25px;}leftmenu menuscroll menuitems>btn .svg-inline.svg-terminal{color:#434752;float:right;left:-5px;top:18px;}leftmenu menuscroll menuitems>btn .svg-inline.svg-tv{left:-4px;}leftmenu menuscroll menuitems>btn .svg-inline.svg-stores{left:-5px;top:2px;}leftmenu menuscroll menuitems>btn .svg-inline.svg-restaurantes,leftmenu menuscroll menuitems>btn .svg-inline.svg-whatsapp,leftmenu menuscroll menuitems>btn .svg-inline.svg-phone,leftmenu menuscroll menuitems>btn .svg-inline.svg-mail,leftmenu menuscroll menuitems>btn .svg-inline.svg-star{left:-2px;}leftmenu menuscroll menuitems>btn:hover,leftmenu menuscroll menucontact>a:hover{background-color:#232b3a;color:white;}leftmenu menuscroll menuitems>btn:hover .svg-inline.svg-terminal,leftmenu menuscroll menuitems>btn:hover .svg-inline.svg-circle,leftmenu menuscroll menucontact>a:hover .svg-inline.svg-circle{color:white;}leftmenu menuscroll menuitems>btn>count{position:relative;font-weight:bold;font-size:18px;color:#c947ff;right:-25px;float:right;top:-2px;}leftmenu menuscroll menuitems>btn submenu{width:calc(100% + 25px);position:relative;display:none;left:-25px;}leftmenu menuscroll menuitems>btn submenu btn.disable{opacity:.5;}leftmenu menuscroll menuitems>btn submenu btn{padding-left:35px;}leftmenu menuscroll menuitems>btn submenu.open{display:grid;}leftmenu menuscroll menuitems>btn:hover submenu btn .svg-inline.svg-circle{color:#434752;}leftmenu menuscroll menuitems>btn:hover submenu btn:not(.disable):hover{background-color:#2f3a4e;color:white;}leftmenu menuscroll menuitems>btn:hover submenu btn:not(.disable):hover .svg-inline.svg-circle{color:white;}@media (max-width:940px){footer infos{display:none;}}@media (min-width:880px){leftmenu menusitemobile{display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VidW50dS93b3Jrc3BhY2UvZXN0dWRvL25leHQvcGFnZXMvYXZuc3lzdGVtcy9pbnRlcmZhY2UvbGVmdG1lbnUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0UrQixBQUcyQixBQWtCZ0MsQUFNa0QsQUFHakUsQUFjTCxBQVFBLEFBUWdGLEFBR2pFLEFBUzNCLEFBVXFCLEFBUVgsQUFHUyxBQVVXLEFBU2YsQUFXRCxBQUtHLEFBYVQsQUFNQSxBQU1KLEFBR0EsQUFRQSxBQUllLEFBTWIsQUFHTSxBQVNNLEFBTWIsQUFHTyxBQUdMLEFBR0MsQUFHVyxBQUliLEFBS0ssQUFLQSxNQXROTixBQXFFSixJQWlGWCxBQUdZLEFBUVosQ0E0QkEsQ0FsQkEsQUFrQ0EsQ0F2SVksQUE2SFosQUFlSSxBQUtBLENBN0VZLEFBTUEsQUFzRGhCLEVBL0dBLENBdEZnQixDQXdDSSxBQVFELEFBeUduQixBQW9CcUIsQUFrQnJCLEVBeEVlLENBakRELEVBNUNlLEFBa0dKLENBMERILENBN0ZDLEFBMkVQLEFBb0NBLENBOURELEFBTUQsQ0FsRVMsRUE3RU4sRUFzRUEsQUFpRGpCLEVBdkVrQixBQVVhLENBbEJaLENBcUlBLENBM0UrQixBQThDckMsQ0FOQSxBQTBCYixBQW9DQSxDQXhMc0IsSUFmTCxBQXFMQSxFQS9HSyxBQWtCQSxBQW1DRCxDQXFCckIsQ0FuRXNCLEFBNkR0QixDQTFGZ0IsQ0F2Qm1CLENBZWpCLENBa0VJLEFBbUVKLEtBNUtBLEFBcUxILENBdEtHLEdBaUNILENBU2MsQ0FrRVAsQ0FyRCtHLEFBa0JqSCxDQWhETCxDQXFDSSxBQWdHSCxFQVNoQixFQTVFcUIsQ0F6R0gsQ0FlRCxBQWlDSCxJQVJBLEVBcUlFLEVBckZJLENBaEVnQixBQXFEbEIsQUE4Q0ksQ0ExRXRCLEVBK0N1QixDQS9GSixBQWVuQixDQXlCQSxDQWdCMEIsR0F0QzFCLEFBMkphLEtBaEdHLENBV0csR0FtQ0EsQUFtRG5CLENBN0tvQixBQWtEcEIsR0E2Q29CLElBbEJwQixFQXJCc0IsRUFnQ0osRUFqRWlCLENBb0dqQixFQTFIVSxHQStGVixNQVBILEVBaENFLENBbUVELEtBM0JoQixHQVBBLElBeEY2QixBQXdEZCxBQW1FQSxJQXJHYyxPQW1DN0IsQUFtRVksSUF0QlMsSUF1QnJCLE1BNUgwQyxJQXNCaEIsR0FnRlAsZUFDQSxJQWhGRyxFQTBDdEIsU0F1Q2tCLENBdkdxQixNQXVCakIsT0FpRlAsV0FoRkMsQUFpRmhCLFdBeEdzQyxDQXdCdkIsV0FDQSxXQUNmLFdBekJxQyxpQ0FDSCxvRUFDbEMiLCJmaWxlIjoiL2hvbWUvdWJ1bnR1L3dvcmtzcGFjZS9lc3R1ZG8vbmV4dC9wYWdlcy9hdm5zeXN0ZW1zL2ludGVyZmFjZS9sZWZ0bWVudS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qZ2xvYmFsICQgbmF2aWdhdG9yKi9cbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTGluaywgUm91dGVyIH0gZnJvbSAnLi8uLi8uLi9yb3V0ZXMnXG5pbXBvcnQgTGVmdE1lbnVDb250YWN0MSBmcm9tICcuL2xlZnRtZW51L2NvbnRhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExlZnRNZW51IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgICAgICQoXCJsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0blwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGlmICgkKGUudGFyZ2V0KS5oYXNDbGFzcygnZGlzYWJsZScpKSB7XG4gICAgICAgICAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICgkKGUudGFyZ2V0KS5hdHRyKCdocmVmJykpIHtcbiAgICAgICAgICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ2xlZnQtbWVudScpO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5vcGVuKCQoZS50YXJnZXQpLmF0dHIoJ2hyZWYnKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQodGhpcykuZmluZCgnc3VibWVudScpLnRvZ2dsZUNsYXNzKFwib3BlblwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgJChcImhlYWRlciBuYXZ0b2dnbGUsIG1lbnVoaWRlclwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGlmICgoZS5jdXJyZW50VGFyZ2V0LmxvY2FsTmFtZSA9PT0gXCJuYXZ0b2dnbGVcIiB8fCAkKCdib2R5JykuaGFzQ2xhc3MoJ2xlZnQtbWVudScpKSB8fCAhJCgnaHRtbCcpLmhhc0NsYXNzKCducHJvZ3Jlc3MtYnVzeScpKSB7XG4gICAgICAgICAgICAgICAgJCgnYm9keScpLnRvZ2dsZUNsYXNzKCdsZWZ0LW1lbnUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG4gICAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8bGVmdG1lbnU+XG4gICAgXHRcdDxzaWRlYmFydXNlcj5cbiAgICBcdCAgICAgICAgPHBob3RvPlxuICAgIFx0ICAgICAgICAgICAgPHRpdGxlPkJvYSBub2l0ZS4g4piFPC90aXRsZT5cbiAgICBcdCAgICAgICAgICAgIDxzdWJ0aXRsZT5FbnRyZSBjb20gc2V1IGxvZ2luIG91IGNhZGFzdHJlLXNlITwvc3VidGl0bGU+XG4gICAgXHQgICAgICAgIDwvcGhvdG8+XG4gICAgXHRcdCAgICA8YmdpbWc+PC9iZ2ltZz5cbiAgICBcdFx0ICAgIDxiZ3NoYWRvdz48L2Jnc2hhZG93PlxuICAgIFx0XHQ8L3NpZGViYXJ1c2VyPlxuICAgIFx0XHQ8bWVudXNjcm9sbD5cbiAgICAgICAgICAgICAgICA8c2lkZWJhcnNlcGFyYXRvcj5BY2Vzc28gUmVzdHJpdG88L3NpZGViYXJzZXBhcmF0b3I+XG4gICAgICAgICAgICAgICAgPG1lbnVpdGVtcz5cbiAgICAgICAgICAgICAgICAgICAgPGJ0biBocmVmPVwiLy9hZG1pbi5hdm4uc3lzdGVtc1wiIHRhcmdldD1cIl9zZWxmXCI+XG4gICAgICAgICAgICAgICAgICAgIFx0PHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0xNDQgMTEydjUxLjZINDhjLTI2LjUgMC00OCAyMS41LTQ4IDQ4djg4LjZjMCAyNi41IDIxLjUgNDggNDggNDhoOTZ2NTEuNmMwIDQyLjYgNTEuNyA2NC4yIDgxLjkgMzMuOWwxNDQtMTQzLjljMTguNy0xOC43IDE4LjctNDkuMSAwLTY3LjlsLTE0NC0xNDRDMTk1LjggNDggMTQ0IDY5LjMgMTQ0IDExMnptMTkyIDE0NEwxOTIgNDAwdi05OS43SDQ4di04OC42aDE0NFYxMTJsMTQ0IDE0NHptODAgMTkyaC04NGMtNi42IDAtMTItNS40LTEyLTEydi0yNGMwLTYuNiA1LjQtMTIgMTItMTJoODRjMjYuNSAwIDQ4LTIxLjUgNDgtNDhWMTYwYzAtMjYuNS0yMS41LTQ4LTQ4LTQ4aC04NGMtNi42IDAtMTItNS40LTEyLTEyVjc2YzAtNi42IDUuNC0xMiAxMi0xMmg4NGM1MyAwIDk2IDQzIDk2IDk2djE5MmMwIDUzLTQzIDk2LTk2IDk2elwiPjwvcGF0aD48L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgXHRFbnRyYXJcbiAgICAgICAgICAgICAgICAgICAgXHQ8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWNpcmNsZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjU2IDhDMTE5IDggOCAxMTkgOCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzOTMgOCAyNTYgOHpcIj48L3BhdGg+PC9zdmc+PC9idG4+XG4gICAgICAgICAgICAgICAgICAgIDxidG4gaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJkaXNhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgIFx0PHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDU3NiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yODggMjA4Yy00NC4yIDAtODAgMzUuOC04MCA4MHMzNS44IDgwIDgwIDgwIDgwLTM1LjggODAtODAtMzUuOC04MC04MC04MHptMCAxMjhjLTI2LjUgMC00OC0yMS41LTQ4LTQ4czIxLjUtNDggNDgtNDggNDggMjEuNSA0OCA0OC0yMS41IDQ4LTQ4IDQ4ek01MTIgNjRIMzUyVjMyYzAtMTcuNy0xNC4zLTMyLTMyLTMyaC02NGMtMTcuNyAwLTMyIDE0LjMtMzIgMzJ2MzJINjRDMjguNyA2NCAwIDkyLjcgMCAxMjh2MzIwYzAgMzUuMyAyOC43IDY0IDY0IDY0aDQ0OGMzNS4zIDAgNjQtMjguNyA2NC02NFYxMjhjMC0zNS4zLTI4LjctNjQtNjQtNjR6TTI1NiAzMmg2NHY5NmgtNjRWMzJ6bTEyOCA0NDhIMTkydi0yMS45YzAtOSAyLjYtMTcuNiA3LjYtMjUgNy4yLTEwLjcgMjAuMy0xNy4yIDM1LTE3LjIgMTUuOSAwIDIzLjUgOCA1My40IDhzMzcuNi04IDUzLjQtOGMxNC43IDAgMjcuNyA2LjQgMzUgMTcuMiA1IDcuNCA3LjYgMTYgNy42IDI1VjQ4MHptMTYwLTMyYzAgMTcuNi0xNC40IDMyLTMyIDMyaC05NnYtMjEuOWMwLTE1LjktNC44LTMwLjYtMTMtNDIuOC0xMy44LTIwLjUtMzcuMy0zMS4zLTYxLjUtMzEuMy0yMi4yIDAtMjcuOCA4LTUzLjQgOC0yNS42IDAtMzEuMi04LTUzLjQtOC0yNC4yIDAtNDcuNyAxMC44LTYxLjUgMzEuMy04LjIgMTIuMi0xMyAyNy0xMyA0Mi44VjQ4MEg2NGMtMTcuNiAwLTMyLTE0LjQtMzItMzJWMTI4YzAtMTcuNiAxNC40LTMyIDMyLTMyaDE2MHY2NGgxMjhWOTZoMTYwYzE3LjYgMCAzMiAxNC40IDMyIDMydjMyMHpcIj48L3BhdGg+PC9zdmc+XG4gICAgICAgICAgICAgICAgICAgIFx0Q2FkYXN0cmFyLXNlXG4gICAgICAgICAgICAgICAgICAgIFx0PHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6XCI+PC9wYXRoPjwvc3ZnPjwvYnRuPlxuICAgICAgICAgICAgICAgIDwvbWVudWl0ZW1zPlxuICAgICAgICAgICAgICAgIDxzaWRlYmFyZGl2aWRlcj48L3NpZGViYXJkaXZpZGVyPlxuICAgIFx0XHRcdDxtZW51c2l0ZW1vYmlsZT5cbiAgICBcdCAgICAgICAgICAgIDxzaWRlYmFyc2VwYXJhdG9yPldlYnNpdGUgUGFnZXM8L3NpZGViYXJzZXBhcmF0b3I+XG4gICAgXHQgICAgICAgICAgICA8bWVudWl0ZW1zPlxuICAgIFx0ICAgICAgICAgICAgICAgIDxMaW5rIHJvdXRlPXsgcHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyBgL2B9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidG4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHQ8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWhvbWVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTc2IDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTQ4OCAzMTIuN1Y0NTZjMCAxMy4zLTEwLjcgMjQtMjQgMjRIMzQ4Yy02LjYgMC0xMi01LjQtMTItMTJWMzU2YzAtNi42LTUuNC0xMi0xMi0xMmgtNzJjLTYuNiAwLTEyIDUuNC0xMiAxMnYxMTJjMCA2LjYtNS40IDEyLTEyIDEySDExMmMtMTMuMyAwLTI0LTEwLjctMjQtMjRWMzEyLjdjMC0zLjYgMS42LTcgNC40LTkuM2wxODgtMTU0LjhjNC40LTMuNiAxMC44LTMuNiAxNS4zIDBsMTg4IDE1NC44YzIuNyAyLjMgNC4zIDUuNyA0LjMgOS4zem04My42LTYwLjlMNDg4IDE4Mi45VjQ0LjRjMC02LjYtNS40LTEyLTEyLTEyaC01NmMtNi42IDAtMTIgNS40LTEyIDEyVjExN2wtODkuNS03My43Yy0xNy43LTE0LjYtNDMuMy0xNC42LTYxIDBMNC40IDI1MS44Yy01LjEgNC4yLTUuOCAxMS44LTEuNiAxNi45bDI1LjUgMzFjNC4yIDUuMSAxMS44IDUuOCAxNi45IDEuNmwyMzUuMi0xOTMuN2M0LjQtMy42IDEwLjgtMy42IDE1LjMgMGwyMzUuMiAxOTMuN2M1LjEgNC4yIDEyLjcgMy41IDE2LjktMS42bDI1LjUtMzFjNC4yLTUuMiAzLjQtMTIuNy0xLjctMTYuOXpcIj48L3BhdGg+PC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHRIb21lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHQ8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWNpcmNsZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjU2IDhDMTE5IDggOCAxMTkgOCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzOTMgOCAyNTYgOHpcIj48L3BhdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHQ8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J0bj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHJvdXRlPXsgcHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyBgL2Fib3V0YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ0bj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcdDxzdmcgY2xhc3M9XCJzdmctaW5saW5lIHN2Zy1pbmZvLWNpcmNsZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjU2IDhDMTE5LjA0MyA4IDggMTE5LjA4MyA4IDI1NmMwIDEzNi45OTcgMTExLjA0MyAyNDggMjQ4IDI0OHMyNDgtMTExLjAwMyAyNDgtMjQ4QzUwNCAxMTkuMDgzIDM5Mi45NTcgOCAyNTYgOHptMCAxMTBjMjMuMTk2IDAgNDIgMTguODA0IDQyIDQycy0xOC44MDQgNDItNDIgNDItNDItMTguODA0LTQyLTQyIDE4LjgwNC00MiA0Mi00MnptNTYgMjU0YzAgNi42MjctNS4zNzMgMTItMTIgMTJoLTg4Yy02LjYyNyAwLTEyLTUuMzczLTEyLTEydi0yNGMwLTYuNjI3IDUuMzczLTEyIDEyLTEyaDEydi02NGgtMTJjLTYuNjI3IDAtMTItNS4zNzMtMTItMTJ2LTI0YzAtNi42MjcgNS4zNzMtMTIgMTItMTJoNjRjNi42MjcgMCAxMiA1LjM3MyAxMiAxMnYxMDBoMTJjNi42MjcgMCAxMiA1LjM3MyAxMiAxMnYyNHpcIj48L3BhdGg+PC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHRBYm91dCBVc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFx0PHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6XCI+PC9wYXRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFx0PC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idG4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvbWVudWl0ZW1zPlxuICAgICAgICAgICAgICAgIFx0PHNpZGViYXJkaXZpZGVyPjwvc2lkZWJhcmRpdmlkZXI+XG4gICAgICAgICAgICAgICAgPC9tZW51c2l0ZW1vYmlsZT5cbiAgICAgICAgICAgIDwvbWVudXNjcm9sbD5cbiAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgICAgICAgbGVmdG1lbnUge1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtMzQwcHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDAwMDtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDMzMHB4O1xuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgOHB4ICMwMDA7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxYzIyMmU7XG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogbGVmdCAzNTBtcyBlYXNlIDBzO1xuICAgICAgICAgICAgICAgICAgICAtbW96LXRyYW5zaXRpb246IGxlZnQgMzUwbXMgZWFzZSAwcztcbiAgICAgICAgICAgICAgICAgICAgLW1zLXRyYW5zaXRpb246IGxlZnQgMzUwbXMgZWFzZSAwcztcbiAgICAgICAgICAgICAgICAgICAgLW8tdHJhbnNpdGlvbjogbGVmdCAzNTBtcyBlYXNlIDBzO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBsZWZ0IDM1MG1zIGVhc2UgMHM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IHNpZGViYXJ1c2VyIHtcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDZweCA0cHggcmdiYSgwLDAsMCwuMyk7XG4gICAgICAgICAgICAgICAgICAgIHRvdWNoLWFjdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTg1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IHNpZGViYXJ1c2VyIHBob3RvIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7cHJvY2Vzcy5lbnYuQkFDS0VORF9VUkx9L3N0YXRpYy9pbWFnZXMvaWNvbnMvaWNvbi0xOTJ4MTkyLnBuZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IHNpZGViYXJ1c2VyIHBob3RvIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMGY5YTY7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciB0b3A7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDVweCAjMDAwMDAwO1xuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAxcHggMXB4IDVweCAjMDAwMDAwO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDE1cHggMHB4IDBweCAxNXB4O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA5MHB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTBweDtcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IHNpZGViYXJ1c2VyIHBob3RvIHRpdGxlIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDI4NXB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAxMDVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgc2lkZWJhcnVzZXIgcGhvdG8gc3VidGl0bGUge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyOTBweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNjY2M7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogMTAwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IHNpZGViYXJ1c2VyIGJnaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7cHJvY2Vzcy5lbnYuQkFDS0VORF9VUkx9L3N0YXRpYy9pbWFnZXMvc2VydmljZXMvYmxvY2tjaGFpbi1zZXJ2aWNlcy5qcGcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBzaWRlYmFydXNlciBiZ2ltZyB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtYmxlbmQtbW9kZTogbHVtaW5vc2l0eTtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBmOWE2O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTg1cHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBzaWRlYmFydXNlciBiZ3NoYWRvdyB7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDk7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTg1cHg7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSxyZ2JhKDAsMCwwLDApIDAscmdiYSgwLDAsMCwwKSAyMCUscmdiYSgwLDAsMCwuMSkgNDAlLHJnYmEoMCwwLDAsLjcpIDcwJSxyZ2JhKDAsMCwwLDEpIDEwMCUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjM1cHgpO1xuICAgICAgICAgICAgICAgICAgICB0b3VjaC1hY3Rpb246IHBhbi15O1xuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMzBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBzaWRlYmFyc2VwYXJhdG9yOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBzaWRlYmFyc2VwYXJhdG9yIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2NjYztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGVmdC1lbnUgbWVudXNjcm9sbCBzaWRlYmFyZGl2aWRlciB7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IHNvbGlkIDFweCByZ2JhKDAsMCwwLC4yKTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHJnYmEoMjU1LDI1NSwyNTUsLjAzKTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuLFxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWNvbnRhY3QgPiBhIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG4gICAgICAgICAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNTVweDtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2NjYztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51aXRlbXMgPiBidG4uZGlzYWJsZSxcbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVjb250YWN0ID4gYS5kaXNhYmxlIHtcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IC41O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0biAuc3ZnLWlubGluZSxcbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVjb250YWN0ID4gYSAuc3ZnLWlubGluZSB7XG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiAtLjEyNWVtO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAyNXB4O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2I1MDBmZjtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMnB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAzcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuIC5zdmctaW5saW5lLnN2Zy1jaXJjbGUsXG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51Y29udGFjdCA+IGEgLnN2Zy1pbmxpbmUuc3ZnLWNpcmNsZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNDM0NzUyO1xuICAgICAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNXB4O1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDI1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuIC5zdmctaW5saW5lLnN2Zy10ZXJtaW5hbCB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNDM0NzUyO1xuICAgICAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IC01cHg7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogMThweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51aXRlbXMgPiBidG4gLnN2Zy1pbmxpbmUuc3ZnLXR2IHtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogLTRweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51aXRlbXMgPiBidG4gLnN2Zy1pbmxpbmUuc3ZnLXN0b3JlcyB7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IC01cHg7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogMnB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0biAuc3ZnLWlubGluZS5zdmctcmVzdGF1cmFudGVzLFxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuIC5zdmctaW5saW5lLnN2Zy13aGF0c2FwcCxcbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0biAuc3ZnLWlubGluZS5zdmctcGhvbmUsXG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51aXRlbXMgPiBidG4gLnN2Zy1pbmxpbmUuc3ZnLW1haWwsXG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51aXRlbXMgPiBidG4gLnN2Zy1pbmxpbmUuc3ZnLXN0YXIge1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtMnB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0bjpob3ZlcixcbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVjb250YWN0ID4gYTpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMzJiM2E7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51aXRlbXMgPiBidG46aG92ZXIgLnN2Zy1pbmxpbmUuc3ZnLXRlcm1pbmFsLFxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuOmhvdmVyIC5zdmctaW5saW5lLnN2Zy1jaXJjbGUsXG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51Y29udGFjdCA+IGE6aG92ZXIgLnN2Zy1pbmxpbmUuc3ZnLWNpcmNsZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51aXRlbXMgPiBidG4gPiBjb3VudCB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNjOTQ3ZmY7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAtMjVweDtcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgICAgICAgICB0b3A6IC0ycHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuIHN1Ym1lbnUge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlICsgMjVweCk7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogLTI1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuIHN1Ym1lbnUgYnRuLmRpc2FibGUge1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAuNTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51aXRlbXMgPiBidG4gc3VibWVudSBidG4ge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDM1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuIHN1Ym1lbnUub3BlbiB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuOmhvdmVyIHN1Ym1lbnUgYnRuIC5zdmctaW5saW5lLnN2Zy1jaXJjbGUge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzQzNDc1MjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51aXRlbXMgPiBidG46aG92ZXIgc3VibWVudSBidG46bm90KC5kaXNhYmxlKTpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyZjNhNGU7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51aXRlbXMgPiBidG46aG92ZXIgc3VibWVudSBidG46bm90KC5kaXNhYmxlKTpob3ZlciAuc3ZnLWlubGluZS5zdmctY2lyY2xlIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogOTQwcHgpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9vdGVyIGluZm9zIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDg4MHB4KSB7XG4gICAgICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzaXRlbW9iaWxlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgICAgICAgYm9keS5sZWZ0LW1lbnUgbGVmdG1lbnUge1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMzk5cHgpIHtcbiAgICAgICAgICAgICAgICAgICAgYm9keS5sZWZ0LW1lbnUgbGVmdG1lbnUsIGxlZnRtZW51IG1lbnVzY3JvbGwge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDY5cHgpIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMzMwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDI2MHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgIFx0PC9sZWZ0bWVudT5cbiAgICApfVxufSJdfQ== */\n/*@ sourceURL=/home/ubuntu/workspace/estudo/next/pages/avnsystems/interface/leftmenu.js */"),
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "918551822",
        css: "body.left-menu leftmenu{left:0;}@media (max-width:399px){body.left-menu leftmenu,leftmenu menuscroll{width:calc(100% - 69px)!important;max-width:330px;min-width:260px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VidW50dS93b3Jrc3BhY2UvZXN0dWRvL25leHQvcGFnZXMvYXZuc3lzdGVtcy9pbnRlcmZhY2UvbGVmdG1lbnUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc1MrQixBQUc0QixBQUsrQixPQUoxQywyQkFLd0IsZ0JBQ0EsZ0JBQ3BCIiwiZmlsZSI6Ii9ob21lL3VidW50dS93b3Jrc3BhY2UvZXN0dWRvL25leHQvcGFnZXMvYXZuc3lzdGVtcy9pbnRlcmZhY2UvbGVmdG1lbnUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKmdsb2JhbCAkIG5hdmlnYXRvciovXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IExpbmssIFJvdXRlciB9IGZyb20gJy4vLi4vLi4vcm91dGVzJ1xuaW1wb3J0IExlZnRNZW51Q29udGFjdDEgZnJvbSAnLi9sZWZ0bWVudS9jb250YWN0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZWZ0TWVudSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuICAgICAgICAkKFwibGVmdG1lbnUgbWVudXNjcm9sbCBtZW51aXRlbXMgPiBidG5cIikub24oXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBpZiAoJChlLnRhcmdldCkuaGFzQ2xhc3MoJ2Rpc2FibGUnKSkge1xuICAgICAgICAgICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoJChlLnRhcmdldCkuYXR0cignaHJlZicpKSB7XG4gICAgICAgICAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdsZWZ0LW1lbnUnKTtcbiAgICAgICAgICAgICAgICB3aW5kb3cub3BlbigkKGUudGFyZ2V0KS5hdHRyKCdocmVmJykpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmZpbmQoJ3N1Ym1lbnUnKS50b2dnbGVDbGFzcyhcIm9wZW5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgICQoXCJoZWFkZXIgbmF2dG9nZ2xlLCBtZW51aGlkZXJcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBpZiAoKGUuY3VycmVudFRhcmdldC5sb2NhbE5hbWUgPT09IFwibmF2dG9nZ2xlXCIgfHwgJCgnYm9keScpLmhhc0NsYXNzKCdsZWZ0LW1lbnUnKSkgfHwgISQoJ2h0bWwnKS5oYXNDbGFzcygnbnByb2dyZXNzLWJ1c3knKSkge1xuICAgICAgICAgICAgICAgICQoJ2JvZHknKS50b2dnbGVDbGFzcygnbGVmdC1tZW51Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuICAgIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGxlZnRtZW51PlxuICAgIFx0XHQ8c2lkZWJhcnVzZXI+XG4gICAgXHQgICAgICAgIDxwaG90bz5cbiAgICBcdCAgICAgICAgICAgIDx0aXRsZT5Cb2Egbm9pdGUuIOKYhTwvdGl0bGU+XG4gICAgXHQgICAgICAgICAgICA8c3VidGl0bGU+RW50cmUgY29tIHNldSBsb2dpbiBvdSBjYWRhc3RyZS1zZSE8L3N1YnRpdGxlPlxuICAgIFx0ICAgICAgICA8L3Bob3RvPlxuICAgIFx0XHQgICAgPGJnaW1nPjwvYmdpbWc+XG4gICAgXHRcdCAgICA8YmdzaGFkb3c+PC9iZ3NoYWRvdz5cbiAgICBcdFx0PC9zaWRlYmFydXNlcj5cbiAgICBcdFx0PG1lbnVzY3JvbGw+XG4gICAgICAgICAgICAgICAgPHNpZGViYXJzZXBhcmF0b3I+QWNlc3NvIFJlc3RyaXRvPC9zaWRlYmFyc2VwYXJhdG9yPlxuICAgICAgICAgICAgICAgIDxtZW51aXRlbXM+XG4gICAgICAgICAgICAgICAgICAgIDxidG4gaHJlZj1cIi8vYWRtaW4uYXZuLnN5c3RlbXNcIiB0YXJnZXQ9XCJfc2VsZlwiPlxuICAgICAgICAgICAgICAgICAgICBcdDxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMTQ0IDExMnY1MS42SDQ4Yy0yNi41IDAtNDggMjEuNS00OCA0OHY4OC42YzAgMjYuNSAyMS41IDQ4IDQ4IDQ4aDk2djUxLjZjMCA0Mi42IDUxLjcgNjQuMiA4MS45IDMzLjlsMTQ0LTE0My45YzE4LjctMTguNyAxOC43LTQ5LjEgMC02Ny45bC0xNDQtMTQ0QzE5NS44IDQ4IDE0NCA2OS4zIDE0NCAxMTJ6bTE5MiAxNDRMMTkyIDQwMHYtOTkuN0g0OHYtODguNmgxNDRWMTEybDE0NCAxNDR6bTgwIDE5MmgtODRjLTYuNiAwLTEyLTUuNC0xMi0xMnYtMjRjMC02LjYgNS40LTEyIDEyLTEyaDg0YzI2LjUgMCA0OC0yMS41IDQ4LTQ4VjE2MGMwLTI2LjUtMjEuNS00OC00OC00OGgtODRjLTYuNiAwLTEyLTUuNC0xMi0xMlY3NmMwLTYuNiA1LjQtMTIgMTItMTJoODRjNTMgMCA5NiA0MyA5NiA5NnYxOTJjMCA1My00MyA5Ni05NiA5NnpcIj48L3BhdGg+PC9zdmc+XG4gICAgICAgICAgICAgICAgICAgIFx0RW50cmFyXG4gICAgICAgICAgICAgICAgICAgIFx0PHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6XCI+PC9wYXRoPjwvc3ZnPjwvYnRuPlxuICAgICAgICAgICAgICAgICAgICA8YnRuIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiZGlzYWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICBcdDxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1NzYgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjg4IDIwOGMtNDQuMiAwLTgwIDM1LjgtODAgODBzMzUuOCA4MCA4MCA4MCA4MC0zNS44IDgwLTgwLTM1LjgtODAtODAtODB6bTAgMTI4Yy0yNi41IDAtNDgtMjEuNS00OC00OHMyMS41LTQ4IDQ4LTQ4IDQ4IDIxLjUgNDggNDgtMjEuNSA0OC00OCA0OHpNNTEyIDY0SDM1MlYzMmMwLTE3LjctMTQuMy0zMi0zMi0zMmgtNjRjLTE3LjcgMC0zMiAxNC4zLTMyIDMydjMySDY0QzI4LjcgNjQgMCA5Mi43IDAgMTI4djMyMGMwIDM1LjMgMjguNyA2NCA2NCA2NGg0NDhjMzUuMyAwIDY0LTI4LjcgNjQtNjRWMTI4YzAtMzUuMy0yOC43LTY0LTY0LTY0ek0yNTYgMzJoNjR2OTZoLTY0VjMyem0xMjggNDQ4SDE5MnYtMjEuOWMwLTkgMi42LTE3LjYgNy42LTI1IDcuMi0xMC43IDIwLjMtMTcuMiAzNS0xNy4yIDE1LjkgMCAyMy41IDggNTMuNCA4czM3LjYtOCA1My40LThjMTQuNyAwIDI3LjcgNi40IDM1IDE3LjIgNSA3LjQgNy42IDE2IDcuNiAyNVY0ODB6bTE2MC0zMmMwIDE3LjYtMTQuNCAzMi0zMiAzMmgtOTZ2LTIxLjljMC0xNS45LTQuOC0zMC42LTEzLTQyLjgtMTMuOC0yMC41LTM3LjMtMzEuMy02MS41LTMxLjMtMjIuMiAwLTI3LjggOC01My40IDgtMjUuNiAwLTMxLjItOC01My40LTgtMjQuMiAwLTQ3LjcgMTAuOC02MS41IDMxLjMtOC4yIDEyLjItMTMgMjctMTMgNDIuOFY0ODBINjRjLTE3LjYgMC0zMi0xNC40LTMyLTMyVjEyOGMwLTE3LjYgMTQuNC0zMiAzMi0zMmgxNjB2NjRoMTI4Vjk2aDE2MGMxNy42IDAgMzIgMTQuNCAzMiAzMnYzMjB6XCI+PC9wYXRoPjwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICBcdENhZGFzdHJhci1zZVxuICAgICAgICAgICAgICAgICAgICBcdDxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctY2lyY2xlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNTYgOEMxMTkgOCA4IDExOSA4IDI1NnMxMTEgMjQ4IDI0OCAyNDggMjQ4LTExMSAyNDgtMjQ4UzM5MyA4IDI1NiA4elwiPjwvcGF0aD48L3N2Zz48L2J0bj5cbiAgICAgICAgICAgICAgICA8L21lbnVpdGVtcz5cbiAgICAgICAgICAgICAgICA8c2lkZWJhcmRpdmlkZXI+PC9zaWRlYmFyZGl2aWRlcj5cbiAgICBcdFx0XHQ8bWVudXNpdGVtb2JpbGU+XG4gICAgXHQgICAgICAgICAgICA8c2lkZWJhcnNlcGFyYXRvcj5XZWJzaXRlIFBhZ2VzPC9zaWRlYmFyc2VwYXJhdG9yPlxuICAgIFx0ICAgICAgICAgICAgPG1lbnVpdGVtcz5cbiAgICBcdCAgICAgICAgICAgICAgICA8TGluayByb3V0ZT17IHByb2Nlc3MuZW52LkJBQ0tFTkRfVVJMICsgYC9gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnRuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFx0PHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1ob21lXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDU3NiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk00ODggMzEyLjdWNDU2YzAgMTMuMy0xMC43IDI0LTI0IDI0SDM0OGMtNi42IDAtMTItNS40LTEyLTEyVjM1NmMwLTYuNi01LjQtMTItMTItMTJoLTcyYy02LjYgMC0xMiA1LjQtMTIgMTJ2MTEyYzAgNi42LTUuNCAxMi0xMiAxMkgxMTJjLTEzLjMgMC0yNC0xMC43LTI0LTI0VjMxMi43YzAtMy42IDEuNi03IDQuNC05LjNsMTg4LTE1NC44YzQuNC0zLjYgMTAuOC0zLjYgMTUuMyAwbDE4OCAxNTQuOGMyLjcgMi4zIDQuMyA1LjcgNC4zIDkuM3ptODMuNi02MC45TDQ4OCAxODIuOVY0NC40YzAtNi42LTUuNC0xMi0xMi0xMmgtNTZjLTYuNiAwLTEyIDUuNC0xMiAxMlYxMTdsLTg5LjUtNzMuN2MtMTcuNy0xNC42LTQzLjMtMTQuNi02MSAwTDQuNCAyNTEuOGMtNS4xIDQuMi01LjggMTEuOC0xLjYgMTYuOWwyNS41IDMxYzQuMiA1LjEgMTEuOCA1LjggMTYuOSAxLjZsMjM1LjItMTkzLjdjNC40LTMuNiAxMC44LTMuNiAxNS4zIDBsMjM1LjIgMTkzLjdjNS4xIDQuMiAxMi43IDMuNSAxNi45LTEuNmwyNS41LTMxYzQuMi01LjIgMy40LTEyLjctMS43LTE2Ljl6XCI+PC9wYXRoPjwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFx0SG9tZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFx0PHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6XCI+PC9wYXRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFx0PC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idG4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayByb3V0ZT17IHByb2Nlc3MuZW52LkJBQ0tFTkRfVVJMICsgYC9hYm91dGB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidG4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHQ8c3ZnIGNsYXNzPVwic3ZnLWlubGluZSBzdmctaW5mby1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOS4wNDMgOCA4IDExOS4wODMgOCAyNTZjMCAxMzYuOTk3IDExMS4wNDMgMjQ4IDI0OCAyNDhzMjQ4LTExMS4wMDMgMjQ4LTI0OEM1MDQgMTE5LjA4MyAzOTIuOTU3IDggMjU2IDh6bTAgMTEwYzIzLjE5NiAwIDQyIDE4LjgwNCA0MiA0MnMtMTguODA0IDQyLTQyIDQyLTQyLTE4LjgwNC00Mi00MiAxOC44MDQtNDIgNDItNDJ6bTU2IDI1NGMwIDYuNjI3LTUuMzczIDEyLTEyIDEyaC04OGMtNi42MjcgMC0xMi01LjM3My0xMi0xMnYtMjRjMC02LjYyNyA1LjM3My0xMiAxMi0xMmgxMnYtNjRoLTEyYy02LjYyNyAwLTEyLTUuMzczLTEyLTEydi0yNGMwLTYuNjI3IDUuMzczLTEyIDEyLTEyaDY0YzYuNjI3IDAgMTIgNS4zNzMgMTIgMTJ2MTAwaDEyYzYuNjI3IDAgMTIgNS4zNzMgMTIgMTJ2MjR6XCI+PC9wYXRoPjwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFx0QWJvdXQgVXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcdDxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctY2lyY2xlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNTYgOEMxMTkgOCA4IDExOSA4IDI1NnMxMTEgMjQ4IDI0OCAyNDggMjQ4LTExMSAyNDgtMjQ4UzM5MyA4IDI1NiA4elwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcdDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnRuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L21lbnVpdGVtcz5cbiAgICAgICAgICAgICAgICBcdDxzaWRlYmFyZGl2aWRlcj48L3NpZGViYXJkaXZpZGVyPlxuICAgICAgICAgICAgICAgIDwvbWVudXNpdGVtb2JpbGU+XG4gICAgICAgICAgICA8L21lbnVzY3JvbGw+XG4gICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgICAgICAgIGxlZnRtZW51IHtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogLTM0MHB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTAwMDA7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAzMzBweDtcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDhweCAjMDAwO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWMyMjJlO1xuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGxlZnQgMzUwbXMgZWFzZSAwcztcbiAgICAgICAgICAgICAgICAgICAgLW1vei10cmFuc2l0aW9uOiBsZWZ0IDM1MG1zIGVhc2UgMHM7XG4gICAgICAgICAgICAgICAgICAgIC1tcy10cmFuc2l0aW9uOiBsZWZ0IDM1MG1zIGVhc2UgMHM7XG4gICAgICAgICAgICAgICAgICAgIC1vLXRyYW5zaXRpb246IGxlZnQgMzUwbXMgZWFzZSAwcztcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogbGVmdCAzNTBtcyBlYXNlIDBzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBzaWRlYmFydXNlciB7XG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCA2cHggNHB4IHJnYmEoMCwwLDAsLjMpO1xuICAgICAgICAgICAgICAgICAgICB0b3VjaC1hY3Rpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE4NXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBzaWRlYmFydXNlciBwaG90byB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMfS9zdGF0aWMvaW1hZ2VzL2ljb25zL2ljb24tMTkyeDE5Mi5wbmcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBzaWRlYmFydXNlciBwaG90byB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjMDBmOWE2O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgdG9wO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCA1cHggIzAwMDAwMDtcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggIzAwMDAwMDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxNXB4IDBweCAwcHggMTVweDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogOTBweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDkwcHg7XG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBzaWRlYmFydXNlciBwaG90byB0aXRsZSB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAyODVweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogMTA1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IHNpZGViYXJ1c2VyIHBob3RvIHN1YnRpdGxlIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjkwcHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjY2NjO1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDEwMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBzaWRlYmFydXNlciBiZ2ltZyB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMfS9zdGF0aWMvaW1hZ2VzL3NlcnZpY2VzL2Jsb2NrY2hhaW4tc2VydmljZXMuanBnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgc2lkZWJhcnVzZXIgYmdpbWcge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IGx1bWlub3NpdHk7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwZjlhNjtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE4NXB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgc2lkZWJhcnVzZXIgYmdzaGFkb3cge1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiA5O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE4NXB4O1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20scmdiYSgwLDAsMCwwKSAwLHJnYmEoMCwwLDAsMCkgMjAlLHJnYmEoMCwwLDAsLjEpIDQwJSxyZ2JhKDAsMCwwLC43KSA3MCUscmdiYSgwLDAsMCwxKSAxMDAlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDIzNXB4KTtcbiAgICAgICAgICAgICAgICAgICAgdG91Y2gtYWN0aW9uOiBwYW4teTtcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzMwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgc2lkZWJhcnNlcGFyYXRvcjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgc2lkZWJhcnNlcGFyYXRvciB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNjY2M7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnQtZW51IG1lbnVzY3JvbGwgc2lkZWJhcmRpdmlkZXIge1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wOiBzb2xpZCAxcHggcmdiYSgwLDAsMCwuMik7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCByZ2JhKDI1NSwyNTUsMjU1LC4wMyk7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0bixcbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVjb250YWN0ID4gYSB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xuICAgICAgICAgICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDU1cHg7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNjY2M7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuLmRpc2FibGUsXG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51Y29udGFjdCA+IGEuZGlzYWJsZSB7XG4gICAgICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAuNTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51aXRlbXMgPiBidG4gLnN2Zy1pbmxpbmUsXG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51Y29udGFjdCA+IGEgLnN2Zy1pbmxpbmUge1xuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogLS4xMjVlbTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMjVweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNiNTAwZmY7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjJweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgIHRvcDogM3B4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0biAuc3ZnLWlubGluZS5zdmctY2lyY2xlLFxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWNvbnRhY3QgPiBhIC5zdmctaW5saW5lLnN2Zy1jaXJjbGUge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzQzNDc1MjtcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAyNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0biAuc3ZnLWlubGluZS5zdmctdGVybWluYWwge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzQzNDc1MjtcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtNXB4O1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDE4cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuIC5zdmctaW5saW5lLnN2Zy10diB7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IC00cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuIC5zdmctaW5saW5lLnN2Zy1zdG9yZXMge1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtNXB4O1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDJweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51aXRlbXMgPiBidG4gLnN2Zy1pbmxpbmUuc3ZnLXJlc3RhdXJhbnRlcyxcbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0biAuc3ZnLWlubGluZS5zdmctd2hhdHNhcHAsXG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51aXRlbXMgPiBidG4gLnN2Zy1pbmxpbmUuc3ZnLXBob25lLFxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuIC5zdmctaW5saW5lLnN2Zy1tYWlsLFxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuIC5zdmctaW5saW5lLnN2Zy1zdGFyIHtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogLTJweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51aXRlbXMgPiBidG46aG92ZXIsXG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51Y29udGFjdCA+IGE6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjMyYjNhO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuOmhvdmVyIC5zdmctaW5saW5lLnN2Zy10ZXJtaW5hbCxcbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0bjpob3ZlciAuc3ZnLWlubGluZS5zdmctY2lyY2xlLFxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWNvbnRhY3QgPiBhOmhvdmVyIC5zdmctaW5saW5lLnN2Zy1jaXJjbGUge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuID4gY291bnQge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjYzk0N2ZmO1xuICAgICAgICAgICAgICAgICAgICByaWdodDogLTI1cHg7XG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAtMnB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0biBzdWJtZW51IHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSArIDI1cHgpO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IC0yNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0biBzdWJtZW51IGJ0bi5kaXNhYmxlIHtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogLjU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuIHN1Ym1lbnUgYnRuIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAzNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0biBzdWJtZW51Lm9wZW4ge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0bjpob3ZlciBzdWJtZW51IGJ0biAuc3ZnLWlubGluZS5zdmctY2lyY2xlIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM0MzQ3NTI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuOmhvdmVyIHN1Ym1lbnUgYnRuOm5vdCguZGlzYWJsZSk6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmYzYTRlO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuOmhvdmVyIHN1Ym1lbnUgYnRuOm5vdCguZGlzYWJsZSk6aG92ZXIgLnN2Zy1pbmxpbmUuc3ZnLWNpcmNsZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk0MHB4KSB7XG4gICAgICAgICAgICAgICAgICAgIGZvb3RlciBpbmZvcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA4ODBweCkge1xuICAgICAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2l0ZW1vYmlsZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgICAgICAgIGJvZHkubGVmdC1tZW51IGxlZnRtZW51IHtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDM5OXB4KSB7XG4gICAgICAgICAgICAgICAgICAgIGJvZHkubGVmdC1tZW51IGxlZnRtZW51LCBsZWZ0bWVudSBtZW51c2Nyb2xsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA2OXB4KSFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDMzMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAyNjBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICBcdDwvbGVmdG1lbnU+XG4gICAgKX1cbn0iXX0= */\n/*@ sourceURL=/home/ubuntu/workspace/estudo/next/pages/avnsystems/interface/leftmenu.js */",
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
//# sourceMappingURL=about.js.cac2f01579a210e44578.hot-update.js.map